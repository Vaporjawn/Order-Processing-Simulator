import { Order } from './order';

export interface Processor {
  id: number;
  name: string;
  maxTime: number;
  orders: Order[];
}
