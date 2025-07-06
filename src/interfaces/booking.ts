export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface Booking {
  id: string;
  houseId: string;
  userId: string;
  agentId?: string;
  scheduledDate: Date;
  status: BookingStatus;
  createdAt: Date;
} 