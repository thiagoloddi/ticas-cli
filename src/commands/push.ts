import parser from "../utils/parser";
import git from "../utils/git";

const push = async (): Promise<void> => {
  const currentBranch = parser.parseCurrentBranch(await git.branch());
  const status = await git.status(true);

  if (status.indexOf("nothing to commit") > -1) {
    console.log("nao tem changes");
  } else {
    console.log("tem changes");
  }

  // const output = await git.push(currentBranch);
};

export default push;
