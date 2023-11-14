import GetAverageProcessingTime from './getAverageProcessingTime';
import { Processor } from './interfaces/processor';
import { RenderProcessorStats } from './interfaces/renderProcessorStats';

const GetOrdersPerProcessor = (
  processors: Processor[]
): RenderProcessorStats[] => {
  const processorsWithStats: RenderProcessorStats[] = processors.map(
    (processor: Processor) => {
      const { orders } = processor;
      const totalProcessedOrders = orders.length;
      const averageProcessingTime = GetAverageProcessingTime(processor);
      return {
        processor,
        averageProcessingTime,
        totalProcessedOrders,
      };
    }
  );
  return processorsWithStats;
};

export default GetOrdersPerProcessor;
