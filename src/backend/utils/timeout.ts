const Timeout = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default Timeout;
