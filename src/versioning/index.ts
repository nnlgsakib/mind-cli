import { program } from "commander";
import { VERSION } from "./commands/version";

export function versioning(versioning : typeof program) {
    versioning
    .version(VERSION)
    .description("A CLI tool for intracting with MIND SMART CHAIN");

    versioning
    .command('version')
    .description('Display the version of the CLI')
    .action(() => {
      console.log(`Version: ${VERSION}`);
    });
}
