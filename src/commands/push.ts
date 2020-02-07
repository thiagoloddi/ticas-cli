import parser from "../utils/parser";
import git from "../utils/git";

const push = async (): Promise<void> => {
  const currentBranch = parser.parseCurrentBranch(await git.branch());
};

export default push;
