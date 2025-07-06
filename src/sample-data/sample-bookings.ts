import { Booking } from '../interfaces/booking';

export const SAMPLE_BOOKINGS: Booking[] = [
  {
    id: 'booking-1',
    houseId: '1',
    userId: 'buyer-1',
    agentId: 'agent-1',
    scheduledDate: new Date('2024-07-01T10:00:00Z'),
    status: 'confirmed',
    createdAt: new Date('2024-06-01T09:00:00Z'),
  },
  {
    id: 'booking-2',
    houseId: '2',
    userId: 'buyer-1',
    agentId: 'agent-2',
    scheduledDate: new Date('2024-07-03T14:30:00Z'),
    status: 'pending',
    createdAt: new Date('2024-06-02T11:30:00Z'),
  },
]; 