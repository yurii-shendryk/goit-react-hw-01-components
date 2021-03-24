const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const getRandomColor = () => {
  const red = getRandomInt(255);
  const green = getRandomInt(255);
  const blue = getRandomInt(255);
  const randomColor = `rgb(${red},${green},${blue})`;
  return randomColor;
};

export default getRandomColor;
