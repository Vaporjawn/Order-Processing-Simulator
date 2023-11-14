const RenderMaxTimeInput = (args: { maxTime: number }) => {
  const { maxTime } = args;
  return (
    <div>
      <p>Max Time: {maxTime}</p>
    </div>
  );
};

export default RenderMaxTimeInput;
