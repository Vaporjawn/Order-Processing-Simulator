import { Processor } from './processor';

export interface RenderProcessorStats {
  processor: Processor;
  averageProcessingTime: number;
  totalProcessedOrders: number;
}
