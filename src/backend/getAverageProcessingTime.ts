import GetTotalElapsedTime from './getTotalElapsedTime';
import { Processor } from './interfaces/processor';

const GetAverageProcessingTime = (processor: Processor): number => {
  const { orders } = processor;
  const totalProcessedOrders: number = orders.length;
  const totalProcessingTime: number = GetTotalElapsedTime(orders);
  const averageProcessingTime: number =
    totalProcessingTime / totalProcessedOrders;
  return averageProcessingTime;
};

export default GetAverageProcessingTime;
