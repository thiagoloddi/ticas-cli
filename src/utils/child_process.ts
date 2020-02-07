import { spawn } from "child_process";
import print from "./print";

export const execute = (
  command: string,
  extras: string[] = [],
  silent: boolean = false
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const args = command.trim().split(" ");
    const cp = spawn(args[0], args.slice(1).concat(extras));

    print.debug(`Executing: ${(cp as any).spawnargs}`);

    let output = "";

    cp.stdout.on("data", data => {
      output += data.toString();
    });

    cp.stderr.on("data", data => {
      if (!silent) {
        print.message(data.toString());
      }
    });

    cp.on("error", error => {
      print.error(error.message);
      reject(error);
    });

    cp.on("close", code => {
      if (!silent) {
        print.message(output);
      }
      resolve(output);
    });
  });
};
