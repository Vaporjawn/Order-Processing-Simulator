const RenderProcessorsInput = (args: { processors: number }) => {
  const { processors } = args;
  return (
    <div>
      <p>Processors: {processors}</p>
    </div>
  );
};

export default RenderProcessorsInput;
