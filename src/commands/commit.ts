import prompt from "../utils/prompt";
import git from "../utils/git";

const commit = async (options: CommitOptions): Promise<void> => {
  let commitMessage = "";
  let messagePreffix = "";

  if (options.branch) {
    const reg = new RegExp(/^[*]\s/);
    const currentBranch = (await git.branch())
      .split("\n")
      .find(branch => reg.test(branch));

    messagePreffix = currentBranch ? `[${currentBranch.replace(reg, "")}]` : "";
  }

  if (options.random) {
  } else {
    commitMessage = await prompt.input(
      "Enter commit message:",
      ` ${messagePreffix}`
    );
  }
  await git.add(".");
  await git.commit(`${messagePreffix} ${commitMessage}`.trim());
};

export default commit;
