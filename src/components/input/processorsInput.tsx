import handleProcessorsChange from '../../backend/handlers/handleProcessorsChange';
import { ChangeEvent } from '../../backend/types/events/changeEvent';
import { UseStateNumber } from '../../backend/types/useState/useStateNumber';
import inputStyle from './styles/inputStyle';

const ProcessorsInput = (args: { setProcessors: UseStateNumber }) => {
  const { setProcessors } = args;
  return (
    <input
      type="number"
      placeholder="Enter the number of simultaneous order processors"
      onChange={(event: ChangeEvent) =>
        handleProcessorsChange({ event, setProcessors })
      }
      style={inputStyle}
    />
  );
};

export default ProcessorsInput;
