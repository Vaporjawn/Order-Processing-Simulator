import handleOrdersChange from '../../backend/handlers/handleOrdersChange';
import { ChangeEvent } from '../../backend/types/events/changeEvent';
import { UseStateNumber } from '../../backend/types/useState/useStateNumber';
import inputStyle from './styles/inputStyle';

const OrdersInput = (args: { setOrders: UseStateNumber }) => {
  const { setOrders } = args;
  return (
    <input
      type="number"
      placeholder="Enter the number of orders to simulate"
      onChange={(event: ChangeEvent) =>
        handleOrdersChange({ event, setOrders })
      }
      style={inputStyle}
    />
  );
};

export default OrdersInput;
