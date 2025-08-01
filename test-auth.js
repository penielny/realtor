const API_BASE = 'http://localhost:4200/api';

async function testAuth() {
  console.log('🧪 Testing Supabase Auth Endpoints...\n');

  // Test 1: Register a new user
  console.log('1️⃣ Testing user registration...');
  try {
    const registerResponse = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'testpassword123',
        full_name: 'Test User'
      })
    });

    const registerData = await registerResponse.json();
    console.log('✅ Registration response:', registerData);
  } catch (error) {
    console.error('❌ Registration error:', error.message);
  }

  // Test 2: Login
  console.log('\n2️⃣ Testing user login...');
  try {
    const loginResponse = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'testpassword123'
      })
    });

    const loginData = await loginResponse.json();
    console.log('✅ Login response:', {
      token: loginData.token ? '✅ Present' : '❌ Missing',
      refresh_token: loginData.refresh_token ? '✅ Present' : '❌ Missing',
      user: loginData.user ? '✅ Present' : '❌ Missing'
    });

    if (loginData.token) {
      // Test 3: Get current user
      console.log('\n3️⃣ Testing get current user...');
      try {
        const userResponse = await fetch(`${API_BASE}/auth/me`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${loginData.token}`
          }
        });

        const userData = await userResponse.json();
        console.log('✅ Current user response:', userData);
      } catch (error) {
        console.error('❌ Get current user error:', error.message);
      }

      // Test 4: Verify token
      console.log('\n4️⃣ Testing token verification...');
      try {
        const verifyResponse = await fetch(`${API_BASE}/auth/verify`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: loginData.token
          })
        });

        const verifyData = await verifyResponse.json();
        console.log('✅ Token verification response:', verifyData);
      } catch (error) {
        console.error('❌ Token verification error:', error.message);
      }

      // Test 5: Refresh token
      console.log('\n5️⃣ Testing token refresh...');
      try {
        const refreshResponse = await fetch(`${API_BASE}/auth/refresh`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            refresh_token: loginData.refresh_token
          })
        });

        const refreshData = await refreshResponse.json();
        console.log('✅ Token refresh response:', {
          token: refreshData.token ? '✅ Present' : '❌ Missing',
          refresh_token: refreshData.refresh_token ? '✅ Present' : '❌ Missing'
        });
      } catch (error) {
        console.error('❌ Token refresh error:', error.message);
      }

      // Test 6: Logout
      console.log('\n6️⃣ Testing logout...');
      try {
        const logoutResponse = await fetch(`${API_BASE}/auth/logout`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            refresh_token: loginData.refresh_token
          })
        });

        const logoutData = await logoutResponse.json();
        console.log('✅ Logout response:', logoutData);
      } catch (error) {
        console.error('❌ Logout error:', error.message);
      }
    }
  } catch (error) {
    console.error('❌ Login error:', error.message);
  }

  console.log('\n🎉 Auth endpoint testing completed!');
}

// Run the tests
testAuth().catch(console.error); 