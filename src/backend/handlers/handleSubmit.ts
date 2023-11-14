import GetOrdersPerProcessor from '../getOrdersPerProcessor';
import { Order } from '../interfaces/order';
import { Processor } from '../interfaces/processor';
import { RenderProcessorStats } from '../interfaces/renderProcessorStats';
import ProcessOrders from '../processOrders';
import { MouseEvent } from '../types/events/mouseEvent';
import AssignOrdersToProcessors from '../utils/factories/assignOrdersToProcessors';
import CreateOrders from '../utils/factories/createOrders';
import CreateProcessors from '../utils/factories/createProcessors';
import LabelOrders from '../utils/factories/orderNameGenerator';

const handleSubmit = async (args: {
  event: MouseEvent;
  orders: number;
  maxTime: number;
  processors: number;
}): Promise<RenderProcessorStats[]> => {
  const { event, orders, maxTime, processors } = args;
  event.preventDefault();
  const ordersToProcess: Order[] = CreateOrders(orders);

  const namedOrders = LabelOrders(ordersToProcess);

  const processorsToProcess: Processor[] = CreateProcessors({
    amount: processors,
    maxTime,
  });

  const processorsWithOrders: Processor[] = AssignOrdersToProcessors({
    orders: namedOrders,
    processors: processorsToProcess,
  });

  const processedOrders: Processor[] = await ProcessOrders(
    processorsWithOrders
  );

  const processorsWithStats: RenderProcessorStats[] =
    GetOrdersPerProcessor(processedOrders);

  return processorsWithStats;
};

export default handleSubmit;
