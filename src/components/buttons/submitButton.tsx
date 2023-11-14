import { useState } from 'react';
import handleSubmit from '../../backend/handlers/handleSubmit';
import { RenderProcessorStats } from '../../backend/interfaces/renderProcessorStats';
import { MouseEvent } from '../../backend/types/events/mouseEvent';
import { UseStateRenderProcessorStats } from '../../backend/types/useState/useStateRenderProcessorStats';
import OrderList from '../orderList';
import ProcessorStats from './submitButton/components/processorStats/processorStats';
import { UseStateString } from '../../backend/types/useState/useStateString';

const SubmitButton = (args: {
  orders: number;
  maxTime: number;
  processors: number;
  processorStats: RenderProcessorStats[] | undefined;
  setProcessorStats: UseStateRenderProcessorStats;
  statsViewed: boolean;
  text: string;
  setText: UseStateString;
}) => {
  const {
    orders,
    maxTime,
    processors,
    processorStats,
    setProcessorStats,
    statsViewed,
    text,
    setText,
  } = args;
  return (
    <>
      {!processorStats && (
        <button
          type="button"
          onClick={async (event: MouseEvent) => {
            const stats: RenderProcessorStats[] = await handleSubmit({
              event,
              orders,
              maxTime,
              processors,
            });
            setProcessorStats(stats);
            setText('Loading...');
          }}
        >
          {text}
        </button>
      )}
      {processorStats && !statsViewed && (
        <OrderList
          processors={processorStats.map(
            (processorStat: RenderProcessorStats) => {
              return processorStat.processor;
            }
          )}
        />
      )}
      {processorStats && statsViewed && (
        <ProcessorStats processorStats={processorStats} />
      )}
    </>
  );
};

export default SubmitButton;
