import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import initCommand from "./commands/init";
import createCommand from "./commands/create";

const typedCommands = hideBin(process.argv);

if (!typedCommands.length) {
  console.log(`Please type 'beer --help' to see the available commands`);
}

yargs(typedCommands).command(createCommand).command(initCommand).help().argv;