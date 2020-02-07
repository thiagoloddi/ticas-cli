import { spawn } from "child_process";
import print from "./print";

export const execute = (
  command: string,
  ...extra: string[]
): Promise<string> => {
  print.debug("EXECUTING1: " + command);
  return new Promise((resolve, reject) => {
    const args = command.split(" ");
    const cp = spawn(args[0], args.slice(1).concat(extra));

    let output = "";

    cp.stdout.on("data", data => {
      output += data.toString();
    });

    cp.stderr.on("data", data => {
      print.message(data.toString());
    });

    cp.on("error", error => {
      print.error(error.message);
      reject(error);
    });

    cp.on("close", code => {
      resolve(output);
    });
  });
};
