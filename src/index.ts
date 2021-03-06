import program from "commander";

import checkout from "./commands/checkout";
import commit from "./commands/commit";
import print from "./utils/print";

export const start = function(version: string): void {
  program
    .version(`ticas@${version}`, "-v, --version")
    .usage("[options] <command>")
    .option("-V, --verbose", "runs in verbose mode")
    .option("-D, --debug", "runs in debug mode");

  program
    .command("checkout")
    .alias("co")
    .description("checkout from a list of branches or create new one")
    .option(
      "-a, --all",
      "show all local and remote branches (only local by default)"
    )
    .option("-f, --fetch", "run 'git fetch' before showing the list")
    .action(cmd => checkout({ all: cmd.all, fetch: cmd.fetch }));

  program
    .command("commit")
    .alias("c")
    .description("adds all files to tree and commit the changes")
    .option("-b, --branch", "adds current branch name to  message commit")
    .option("-r, --random", "adds a random commit message (with confirmation)")
    .option("-R, --random", "adds a random commit message (no confirmation)")
    .action(cmd => commit());

  program.command("*", "", { noHelp: true }).action((_, args) => {
    if (args[0]) {
      print.error(`Command not found: ${args[0]}`);
    }
    program.outputHelp();
  });

  if (!process.argv[2]) program.outputHelp();

  program.parse(process.argv);
};
