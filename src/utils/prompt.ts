import inquirer from "inquirer";

const list = async (
  message: string,
  choices: inquirer.DistinctChoice<inquirer.ListChoiceMap>[]
): Promise<number> => {
  return inquirer
    .prompt({
      type: "list",
      name: "value",
      prefix: "",
      message,
      pageSize: 10,
      choices
    })
    .then(({ value }) => value);
};

const input = async (message: string): Promise<string> => {
  return inquirer
    .prompt({
      type: "input",
      name: "value",
      prefix: "",
      message
    })
    .then(({ value }) => value);
};

export default { list, input };
