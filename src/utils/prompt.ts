import inquirer from "inquirer";
import chalk from "chalk";

const list = (
  message: string,
  choices: inquirer.DistinctChoice<inquirer.ListChoiceMap>[]
): Promise<number> =>
  inquirer
    .prompt({
      type: "list",
      name: "value",
      prefix: "",
      pageSize: 10,
      choices,
      message: chalk.reset(message)
    })
    .then(({ value }) => value);

const input = (message: string, suffix: string = ""): Promise<string> =>
  inquirer
    .prompt({
      type: "input",
      name: "value",
      prefix: "",
      suffix,
      message: chalk.reset(message)
    })
    .then(({ value }) => value);

const confirm = (message: string, defaultValue: boolean): Promise<string> =>
  inquirer
    .prompt({
      type: "confirm",
      name: "value",
      prefix: "",
      default: defaultValue,
      message: chalk.reset(message)
    })
    .then(({ value }) => value);

export default { list, input, confirm };
