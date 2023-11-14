import { ChangeEvent } from '../types/events/changeEvent';
import { UseStateNumber } from '../types/useState/useStateNumber';

const handleOrdersChange = (args: {
  event: ChangeEvent;
  setOrders: UseStateNumber;
}) => {
  const { event, setOrders } = args;
  const value = Number(event.target.value);
  setOrders(value);
};

export default handleOrdersChange;
