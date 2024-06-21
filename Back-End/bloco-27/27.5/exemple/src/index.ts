// import { Connector, RedisConnector } from "./Connectors";

// const token = 'ce42033d-9133-457a-a1a1-41ac0b63a333';
// const conn = new RedisConnector({
//   host: 'redisdb',
//   port: 6379});

// // const conn = new Connector({
// //   host: 'localhost',
// //   port: 3306,
// //   database: 'counter',
// //   user: 'root',
// //   password: '@Bcde1234'});

// const main = (connector: Connector) => {
//   connector.firstCount(token);

//   const logCount = async () => {
//     try {
//       const count = await connector.getCount(token);
//       console.log(count);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const doSomeIncrements = () => {
//     logCount();
//     connector.incrementCount(token);
//     connector.incrementCount(token);
//     connector.incrementCount(token);
//   };

//   const incrementsInterval = setInterval(doSomeIncrements, 500);

//   setTimeout(() => {
//     clearInterval(incrementsInterval);
//     logCount();
//     connector.clearCount(token);
//     connector.closeConnection();
//   }, 5500);
// };

// main(conn);

import { ReadOnlyConnector, ReadOnlyRedisConnector } from "./Connectors";

const token = 'ce42033d-9133-457a-a1a1-41ac0b63a333';
const conn = new ReadOnlyRedisConnector({
  host: 'redisdb',
  port: 6379});

const main = async (connector: ReadOnlyConnector) => {
  const count = await connector.getCount(token);
  try {
    console.log(count);
  } catch (err) {
    console.error(err);
  }
}

main(conn);