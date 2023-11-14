import { Processor } from '../../interfaces/processor';

const CreateProcessors = (args: {
  amount: number;
  maxTime: number;
}): Processor[] => {
  const { amount, maxTime } = args;
  const processors: Processor[] = [];
  for (let index = 0; index < amount; index++) {
    processors.push({
      id: index + 1,
      name: `Processor ${index + 1}`,
      maxTime: maxTime * 1000,
      orders: [],
    });
  }
  return processors;
};

export default CreateProcessors;
