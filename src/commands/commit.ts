import prompt from "../utils/prompt";
import git from "../utils/git";
import print from "../utils/print";

const commit = async (options: CommitOptions): Promise<void> => {
  if (options.random) {
  } else {
    let suffix = "";

    if (options.branch) {
      const reg = new RegExp(/^[*]\s/);
      const current = (await git.branch())
        .split("\n")
        .find(branch => reg.test(branch));

      suffix = current ? current.replace(reg, "") : "";
    }
    const message = await prompt.input("Enter commit message:", suffix);

    await git.add(".");
    await git.commit(message);
  }
};

export default commit;
