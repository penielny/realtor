import { NextFunction, Request, Response } from "express";
import supabase from "../../database/client";

// Login endpoint
export async function loginHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: 'Email and password are required'
      });
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      return res.status(401).json({
        error: error.message
      });
    }

    return res.status(200).json({
      token: data.session?.access_token,
      refresh_token: data.session?.refresh_token,
      user: data.user
    });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
}

// Register endpoint
export async function registerHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password, full_name } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: 'Email and password are required'
      });
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: full_name || null
        }
      }
    });

    if (error) {
      return res.status(400).json({
        error: error.message
      });
    }

    return res.status(201).json({
      message: 'User registered successfully',
      user: data.user
    });

  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
}

// Logout endpoint
export async function logoutHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const { refresh_token } = req.body;

    if (refresh_token) {
      const { error } = await supabase.auth.admin.signOut(refresh_token);
      
      if (error) {
        console.error('Logout error:', error);
      }
    }

    return res.status(200).json({
      message: 'Logged out successfully'
    });

  } catch (error) {
    console.error('Logout error:', error);
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
}

// Verify token endpoint
export async function verifyTokenHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({
        error: 'Token is required'
      });
    }

    const { data, error } = await supabase.auth.getUser(token);

    if (error) {
      return res.status(401).json({
        error: 'Invalid token'
      });
    }

    return res.status(200).json({
      user: data.user
    });

  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
}

// Refresh token endpoint
export async function refreshTokenHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const { refresh_token } = req.body;

    if (!refresh_token) {
      return res.status(400).json({
        error: 'Refresh token is required'
      });
    }

    const { data, error } = await supabase.auth.refreshSession({
      refresh_token
    });

    if (error) {
      return res.status(401).json({
        error: 'Invalid refresh token'
      });
    }

    return res.status(200).json({
      token: data.session?.access_token,
      refresh_token: data.session?.refresh_token,
      user: data.user
    });

  } catch (error) {
    console.error('Token refresh error:', error);
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
}

// Get current user endpoint
export async function getCurrentUserHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        error: 'Authorization header required'
      });
    }

    const token = authHeader.substring(7);
    const { data, error } = await supabase.auth.getUser(token);

    if (error) {
      return res.status(401).json({
        error: 'Invalid token'
      });
    }

    return res.status(200).json({
      user: data.user
    });

  } catch (error) {
    console.error('Get current user error:', error);
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
} 