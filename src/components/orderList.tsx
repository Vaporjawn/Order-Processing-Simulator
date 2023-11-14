import { Order } from '../backend/interfaces/order';
import { Processor } from '../backend/interfaces/processor';
import listContainerStyle from './styles/listContainerStyle';
import listStyle from './styles/listStyle';

const OrderList = (args: { processors: Processor[] }) => {
  const { processors } = args;
  const orders: Order[] = [];
  processors.forEach((processor: Processor) => {
    processor.orders.forEach((order: Order) => {
      orders.push(order);
    });
  });
  orders.sort((a: Order, b: Order) => {
    return a.timeCompleted! - b.timeCompleted!;
  });
  return (
    <ul style={listContainerStyle}>
      {orders.map((order: Order) => {
        return (
          <li key={order.name} style={listStyle}>
            <p
              style={{
                fontWeight: 'bold',
                color: 'orange',
              }}
            >
              {order.name}
            </p>{' '}
            <span
              style={{
                color: 'green',
              }}
            >
              {order.elapsedTime! / 1000}
            </span>{' '}
            seconds
            {order.processor && (
              <p
                style={{
                  color: 'white',
                }}
              >
                Processor: {order.processor}
              </p>
            )}
            {order.price && (
              <p>
                <span>Price: </span>{' '}
                <span
                  style={{
                    color: 'green',
                  }}
                >
                  {' '}
                  {order.price}
                </span>
              </p>
            )}
            {order.status && <span>Status: {order.status}</span>}
          </li>
        );
      })}
    </ul>
  );
};

export default OrderList;
