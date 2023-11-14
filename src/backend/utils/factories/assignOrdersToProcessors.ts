import { Order } from '../../interfaces/order';
import { Processor } from '../../interfaces/processor';

const AssignOrdersToProcessors = (args: {
  orders: Order[];
  processors: Processor[];
}): Processor[] => {
  const { orders, processors } = args;
  let processorIndex = 0;
  for (const order of orders) {
    order.status = 'processing';
    order.processor = processors[processorIndex].id;
    processors[processorIndex].orders?.push(order);
    processorIndex = (processorIndex + 1) % processors.length;
  }
  return processors;
};

export default AssignOrdersToProcessors;
