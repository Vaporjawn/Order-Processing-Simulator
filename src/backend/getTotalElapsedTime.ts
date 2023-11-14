import { Order } from './interfaces/order';

const GetTotalElapsedTime = (orders: Order[]): number => {
  let totalElapsedTime: number = 0;
  for (const order of orders) {
    totalElapsedTime = totalElapsedTime + (order.elapsedTime ?? 0);
  }
  return totalElapsedTime;
};

export default GetTotalElapsedTime;
