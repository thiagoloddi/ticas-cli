import strftime from "strftime";

const error = (message: string): void => {
  console.error("Error: " + message);
  console.error("");
};

const message = (message: string): void => {
  console.log(message);
  console.log("");
};

const debug = (message: string): void => {
  const timeStamp = strftime("%T.%L", new Date());
  console.log("STACK", new Error().stack);
  console.log("LINE:", new Error().stack?.split("\n")[2]);
  const filePath = new Error().stack
    ?.split("\n")[2]
    .split("(")[1]
    .replace(")", "")
    .split(":")
    .slice(0, 2)
    .join(":")
    .split("/")
    .slice(-2)
    .join("/");

  console.log(`${timeStamp} ${filePath} - ${message}`);
};

export default { error, message, debug };
