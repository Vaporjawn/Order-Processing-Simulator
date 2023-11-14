import { RenderProcessorStats } from '../../../../../backend/interfaces/renderProcessorStats';
import averageProcessingTimeStyle from './styles/averageProcessingTimeStyle';
import idLabelStyle from './styles/idLabelStyle';
import processorStatsContainerStyle from './styles/processorStatsContainerStyle';

const ProcessorStats = (args: { processorStats: RenderProcessorStats[] }) => {
  const { processorStats } = args;
  return (
    <>
      {processorStats.map((processorStat: RenderProcessorStats) => {
        return (
          <div style={processorStatsContainerStyle}>
            <p style={idLabelStyle}>Processor {processorStat.processor.id}</p>
            <p>
              <b>Number of orders processed:</b>{' '}
              {processorStat.totalProcessedOrders}
            </p>
            <p>
              <b>Average time per order:</b>{' '}
              <span style={averageProcessingTimeStyle}>
                {processorStat.averageProcessingTime / 1000}
              </span>{' '}
              seconds
            </p>
          </div>
        );
      })}
    </>
  );
};

export default ProcessorStats;
