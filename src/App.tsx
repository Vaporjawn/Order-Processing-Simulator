import { useState } from 'react';
import './styles/App.css';
import ViteLogo from './assets/viteLogo';
import ReactLogo from './assets/reactLogo';
import Title from './components/title';
import ProcessorsInput from './components/input/processorsInput';
import MaxTimeInput from './components/input/maxTimeInput';
import OrdersInput from './components/input/ordersInput';
import SubmitButton from './components/buttons/submitButton';
import { RenderProcessorStats } from './backend/interfaces/renderProcessorStats';
import containerStyle from './styles/containerStyle';
import ResetButton from './components/buttons/resetButton';
import ViewStatsButton from './components/buttons/viewStatsButton';
import RenderProcessorsInput from './components/renderInput/RenderProcessorsInput';
import RenderMaxTimeInput from './components/renderInput/renderMaxTimeInput';
import RenderOrderInput from './components/renderInput/renderOrderInput';
import renderInputStyle from './components/renderInput/styles/renderInputStyle';

const App = () => {
  const [processorStats, setProcessorStats] = useState<
    RenderProcessorStats[] | undefined
  >(undefined);
  const [statsViewed, setStatsViewed] = useState<boolean>(false);
  const [orders, setOrders] = useState<number>(0);
  const [maxTime, setMaxTime] = useState<number>(0); // in seconds
  const [processors, setProcessors] = useState<number>(0);
  const [text, setText] = useState<string>('Simulate');

  return (
    <>
      <ViteLogo />
      <ReactLogo />
      <Title />
      <div style={containerStyle}>
        {processorStats && (
          <div style={renderInputStyle}>
            <RenderOrderInput orders={orders} />
            <RenderMaxTimeInput maxTime={maxTime} />
            <RenderProcessorsInput processors={processors} />
          </div>
        )}

        {!processorStats && (
          <>
            <OrdersInput setOrders={setOrders} />
            <MaxTimeInput setMaxTime={setMaxTime} />
            <ProcessorsInput setProcessors={setProcessors} />
          </>
        )}
        <SubmitButton
          orders={orders}
          maxTime={maxTime}
          processors={processors}
          processorStats={processorStats}
          setProcessorStats={setProcessorStats}
          statsViewed={statsViewed}
          setText={setText}
          text={text}
        />
      </div>
      {!statsViewed && processorStats && (
        <ViewStatsButton setStatsViewed={setStatsViewed} />
      )}
      {processorStats && statsViewed && (
        <ResetButton
          setProcessorStats={setProcessorStats}
          setStatsViewed={setStatsViewed}
          setText={setText}
        />
      )}
    </>
  );
};

export default App;
