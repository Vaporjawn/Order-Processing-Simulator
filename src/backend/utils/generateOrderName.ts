import { Order } from '../interfaces/order';
import GetSuffix from './getSuffix';

const GenerateOrderName = (args: { order: Order; index: number }): Order => {
  const { order, index } = args;
  const suffix: string = GetSuffix(index);
  const orderName: string = `${index}${suffix} Order`;
  order.name = orderName;
  return order;
};

export default GenerateOrderName;
