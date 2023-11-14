import { Order } from './interfaces/order';
import { Processor } from './interfaces/processor';
import randomMax from './utils/randomMax';
import timeout from './utils/timeout';

const ProcessOrders = async (processors: Processor[]): Promise<Processor[]> => {
  const orders: Order[] = [];
  const promises: Promise<void>[] = [];

  processors.forEach((processor) => {
    const maxTime: number = processor.maxTime;
    processor.orders.forEach((order) => {
      promises.push(
        new Promise<void>(async (resolve) => {
          await timeout(randomMax(maxTime));
          order.status = 'completed';
          order.elapsedTime = randomMax(maxTime);
          order.timeCompleted = Date.now();
          orders.push(order);
          resolve();
        })
      );
    });
  });

  await Promise.all(promises);

  return processors;
};

export default ProcessOrders;
