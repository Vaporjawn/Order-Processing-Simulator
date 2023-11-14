import { RenderProcessorStats } from '../../backend/interfaces/renderProcessorStats';
import { UseStateBoolean } from '../../backend/types/useState/useStateBoolean';
import { UseStateString } from '../../backend/types/useState/useStateString';

const ResetButton = (args: {
  setProcessorStats: React.Dispatch<
    React.SetStateAction<RenderProcessorStats[] | undefined>
  >;
  setStatsViewed: UseStateBoolean;
  setText: UseStateString;
}) => {
  const { setProcessorStats, setStatsViewed, setText } = args;
  return (
    <button
      type="button"
      onClick={() => {
        setProcessorStats(undefined);
        setStatsViewed(false);
        setText('Simulate');
      }}
    >
      Reset
    </button>
  );
};

export default ResetButton;
