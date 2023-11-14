import { ChangeEvent } from '../types/events/changeEvent';
import { UseStateNumber } from '../types/useState/useStateNumber';

const handleProcessorsChange = (args: {
  event: ChangeEvent;
  setProcessors: UseStateNumber;
}) => {
  const { event, setProcessors } = args;
  const value = Number(event.target.value);
  setProcessors(value);
};

export default handleProcessorsChange;
