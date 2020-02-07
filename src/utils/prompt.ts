import inquirer from "inquirer";
import chalk from "chalk";

const list = async (
  message: string,
  choices: inquirer.DistinctChoice<inquirer.ListChoiceMap>[]
): Promise<number> => {
  return inquirer
    .prompt({
      type: "list",
      name: "value",
      prefix: "",
      pageSize: 10,
      choices,
      message: chalk.reset(message)
    })
    .then(({ value }) => value);
};

const input = async (message: string, suffix: string = ""): Promise<string> => {
  return inquirer
    .prompt({
      type: "input",
      name: "value",
      prefix: "",
      suffix,
      message: chalk.reset(message)
    })
    .then(({ value }) => value);
};

export default { list, input };
