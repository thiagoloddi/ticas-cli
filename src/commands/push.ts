import parser from "../utils/parser";
import git from "../utils/git";
import prompt from "../utils/prompt";
import { execute } from "../utils/child_process";
import commit from "./commit";

const push = async (): Promise<void> => {
  const currentBranch = parser.parseCurrentBranch(await git.branch());
  const status = await git.status(true);

  if (status.indexOf("nothing to commit") === -1) {
    const answer = await prompt.confirm(
      "You have uncommited changes. Add and commit before pushing?",
      true
    );

    if (answer) {
      await commit();
      console.log("comitou");
    }
  }
  // const output = await git.push(currentBranch);
};

export default push;
