const RenderOrderInput = (args: { orders: number }) => {
  const { orders } = args;
  return (
    <div>
      <p>Orders: {orders}</p>
    </div>
  );
};

export default RenderOrderInput;
