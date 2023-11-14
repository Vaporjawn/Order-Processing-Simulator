import { UseStateBoolean } from '../../backend/types/useState/useStateBoolean';

const ViewStatsButton = (args: { setStatsViewed: UseStateBoolean }) => {
  const { setStatsViewed } = args;
  return (
    <button
      type="button"
      onClick={() => {
        setStatsViewed(true);
      }}
    >
      View Stats
    </button>
  );
};

export default ViewStatsButton;
