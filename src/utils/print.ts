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
  const filePath = new Error().stack
    ?.split("\n")[2]
    .replace(/^.+(src\/|lib\/)/, "")
    .replace(/(:)[0-9]+[)]?$/, "");

  console.log(`${timeStamp} ${filePath} - ${message}`);
};

export default { error, message, debug };
