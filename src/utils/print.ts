import strftime from "strftime";

const error = (message: string): void => {
  console.error("Error: " + message);
  console.error("");
};

const message = (message: string): void => {
  console.log(` ${message}`);
  console.log("");
};

const debug = (message: any): void => {
  const timeStamp = strftime("%T.%L", new Date());
  const filePath = new Error().stack
    ?.split("\n")[2]
    .replace(/^.+(src\/|lib\/)/, "")
    .replace(/(:)[0-9]+[)]?$/, "");

  console.log(
    `${timeStamp} ${filePath} - ${
      typeof message === "object" ? JSON.stringify(message) : message
    }`
  );
};

export default { error, message, debug };
