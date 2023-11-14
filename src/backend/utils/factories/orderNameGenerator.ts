import { Order } from '../../interfaces/order';
import GenerateOrderName from '../generateOrderName';

const LabelOrders = (orders: Order[]): Order[] => {
  return orders.map((order, index) => GenerateOrderName({ order, index }));
};

export default LabelOrders;
