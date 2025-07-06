import { User } from '../interfaces/user';

export const SAMPLE_USERS: User[] = [
  {
    id: 'agent-1',
    name: 'Alice Johnson',
    email: 'alice.johnson@realestate.com',
    phone: '+1-555-1234',
    role: 'agent',
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 'agent-2',
    name: 'Bob Smith',
    email: 'bob.smith@realestate.com',
    phone: '+1-555-5678',
    role: 'agent',
    avatarUrl: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    id: 'buyer-1',
    name: 'Charlie Brown',
    email: 'charlie.brown@email.com',
    phone: '+1-555-8765',
    role: 'buyer',
    avatarUrl: 'https://randomuser.me/api/portraits/men/47.jpg',
  },
]; 