import prompt from "../utils/prompt";
import git from "../utils/git";
import print from "../utils/print";

const commit = async (options: CommitOptions): Promise<void> => {
  if (options.random) {
  } else {
    const suffix = options.branch ? ` [${await git.currentBranch()}]` : "";
    const message = await prompt.input("Enter commit message:", suffix);

    await git.add(".");
    await git.commit(message);
  }
};

export default commit;
