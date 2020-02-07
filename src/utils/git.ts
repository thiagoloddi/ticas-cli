import { execute } from "./child_process";

const _parseArgs = (args: string[]): string => args.filter(Boolean).join(" ");

const branch = (args: string[] = [], silent: boolean = true): Promise<string> =>
  execute(`git branch ${_parseArgs(args)}`, undefined, silent);

const checkout = (branch: string, ...args: string[]): Promise<string> =>
  execute(`git checkout ${_parseArgs(args)}`, [branch]);

const fetch = (): Promise<string> => execute("git fetch");

const add = (path: string): Promise<string> => execute(`git add ${path}`);

const commit = (message: string): Promise<string> =>
  execute(`git commit -m`, [`${message}`]);

const push = (branch: string): Promise<string> =>
  execute(`git push origin ${branch}`);

const status = (silent?: boolean): Promise<string> =>
  execute(`git status`, undefined, silent);

export default { branch, checkout, fetch, add, commit, push, status };
