import { Order } from '../../interfaces/order';
import UUID from '../uuid';
import GeneratePrice from './generatePrice';

const CreateOrders = (amount: number): Order[] => {
  const orders: Order[] = [];
  for (let index = 0; index < amount; index++) {
    orders.push({
      id: UUID(),
      price: GeneratePrice(),
      timeCreated: Date.now(),
      status: 'received',
    });
  }
  return orders;
};

export default CreateOrders;
