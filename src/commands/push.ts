import parser from "../utils/parser";
import git from "../utils/git";

const push = async (): Promise<void> => {
  const currentBranch = parser.parseCurrentBranch(await git.branch());

  const output = await git.push(currentBranch);
  console.log("output", output);
};

export default push;
