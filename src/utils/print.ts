const error = (message: string): void => {
  console.error("Error: " + message);
  console.error("");
};

const message = (message: string): void => {
  console.log(message);
  console.log("");
};

export default { error, message };
