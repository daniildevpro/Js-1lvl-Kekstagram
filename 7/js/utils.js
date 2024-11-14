const START_ID_GENERATOR = 0;

const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const createIdGenerator = () => {
  let lastId = START_ID_GENERATOR;
  return () => ++lastId;
};

export {
  getRandomNumber,
  createIdGenerator
};