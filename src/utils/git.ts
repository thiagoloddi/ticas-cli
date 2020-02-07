import { execute } from "./child_process";
import print from "./print";

const _parseArgs = (args: string[]): string => {
  args = args.filter(Boolean);
  return args.length ? ` ${args.join(" ")}` : "";
};
const branch = (...args: string[]): Promise<string[]> => {
  const command = "git branch";
  const parsed = _parseArgs(args);
  return execute(command + parsed).then(output =>
    output
      .split("\n")
      .map(b => b.slice(2))
      .filter(Boolean)
  );
};

const checkout = async (branch: string, ...args: string[]): Promise<void> => {
  const output = await execute(`git checkout${_parseArgs(args)} ${branch}`);
  print.message(output);
};

const fetch = (): Promise<string> => execute("git fetch");

const add = (path: string): Promise<string> => execute(`git add ${path}`);

const commit = (message: string): Promise<string> =>
  execute(`git commit -m "${message}"`);

export default { branch, checkout, fetch, add, commit };
