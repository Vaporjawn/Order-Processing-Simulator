import { OrderStatus } from '../types/orderStatus';

export interface Order {
  id: string;
  name?: string;
  price: string;
  status: OrderStatus;
  timeCreated: number;
  timeCompleted?: number;
  elapsedTime?: number;
  processor?: number;
}
