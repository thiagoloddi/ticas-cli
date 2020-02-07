import axios from "axios";

import prompt from "../utils/prompt";
import git from "../utils/git";
import print from "../utils/print";

const commit = async (options: CommitOptions = {}): Promise<void> => {
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
    const choices = [
      { name: "[accept]", value: 1 },
      { name: "[get other]", value: 2 }
    ];

    let choice = 0;

    while (choice !== 1) {
      print.message("\nGenerating random commit message...");
      commitMessage = await axios
        .get("http://whatthecommit.com/index.txt")
        .then(res => res.data);

      choice = await prompt.list(
        `Your commit message will be: ${messagePreffix} ${commitMessage}`,
        choices
      );
    }
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
