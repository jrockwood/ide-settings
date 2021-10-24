import chalk from 'chalk';
import yargs from 'yargs';

export const binName = 'binName';

yargs
  .commandDir('commands')
  .demandCommand(1)
  .strict()
  .help()
  .alias('help', 'h')
  .global('h')
  .recommendCommands()
  .fail((msg: string) => {
    yargs.showHelp();
    console.error(chalk.red(msg));
    process.exit(1);
  })
  .epilog(`Run '${binName} COMMAND --help' for more information on specific commands.`)
  .parseSync();
