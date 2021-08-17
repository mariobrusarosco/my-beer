import Inquirer from "inquirer";
import { ReactElementTypes } from "../react-structures";

export const reactElementType = () => {
  const question = [
    {
      name: "reactElementType",
      type: "list",
      message: "Type your react type",
      choices: Object.values(ReactElementTypes),
    },
  ];
  return Inquirer.prompt(question);
};