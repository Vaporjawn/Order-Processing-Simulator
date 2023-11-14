import handleMaxTimeChange from '../../backend/handlers/handleMaxTimeChange';
import { ChangeEvent } from '../../backend/types/events/changeEvent';
import { UseStateNumber } from '../../backend/types/useState/useStateNumber';
import inputStyle from './styles/inputStyle';

const MaxTimeInput = (args: { setMaxTime: UseStateNumber }) => {
  const { setMaxTime } = args;
  return (
    <input
      type="number"
      placeholder="Enter the maximum time in seconds (Rendering Time)"
      onChange={(event: ChangeEvent) =>
        handleMaxTimeChange({ event, setMaxTime })
      }
      style={inputStyle}
    />
  );
};

export default MaxTimeInput;
