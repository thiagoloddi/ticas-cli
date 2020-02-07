import prompt from "../utils/prompt";
import git from "../utils/git";

const commit = async (options: CommitOptions): Promise<void> => {
  if (options.random) {
  } else {
    const message = await prompt.input("Enter commit message:");
    await git.add(".");
    await git.commit(message);
  }
};

export default commit;
