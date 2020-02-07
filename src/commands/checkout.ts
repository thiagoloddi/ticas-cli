import inquirer from "inquirer";

import prompt from "../utils/prompt";
import git from "../utils/git";
import print from "../utils/print";

const checkout = async (options: CheckoutOptions): Promise<void> => {
  if (options.fetch) {
    print.message("Fetching branches...");
    await git.fetch();
  }
  const branches = (await git.branch([options.all ? "-a" : ""]))
    .split("\n")
    .map(b => b.slice(2))
    .filter(Boolean);

  const selectedOption = await prompt.list(
    "Create a new branch or select one from the list:",
    [
      new inquirer.Separator(),
      { name: "[create new branch]", value: -1 },
      ...branches.map((name, value) => ({ name, value }))
    ]
  );

  let branchName = "";

  if (selectedOption === -1) {
    branchName = await prompt.input("New branch name:");
  } else {
    branchName = branches[selectedOption];
  }

  git.checkout(branchName, branches.includes(branchName) ? "" : "-b");
};

export default checkout;
