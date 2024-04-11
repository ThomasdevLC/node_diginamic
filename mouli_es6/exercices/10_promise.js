/**
 * Créez une fonction asynchrone qui attend 2 seconde
 *
 * utilisez new Promise
 */

const sleep = new Promise((resolve) => setTimeout(resolve, ms));

const synchronFunc = () => {
  console.log("start");
  sleep(3000).then(() => console.log("hello"));
  console.log("end");
};

synchronFunc();

const asyncFunc = () => {
    console.log("start");
    sleep(3000).then(() => console.log("hello"));
    console.log("end");
  };
  
  synchronFunc();

module.exports = { sleep };
