import { ChangeEvent } from '../types/events/changeEvent';
import { UseStateNumber } from '../types/useState/useStateNumber';

const handleMaxTimeChange = (args: {
  event: ChangeEvent;
  setMaxTime: UseStateNumber;
}) => {
  const { event, setMaxTime } = args;
  const value = Number(event.target.value);
  setMaxTime(value);
};

export default handleMaxTimeChange;
