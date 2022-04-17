import chalk from 'chalk';
import yargs from 'yargs';

export const binName = 'CHANGE_ME';

console.log(`process.env.NODE_ENV=${process.env.NODE_ENV}`);

if (process.env.NODE_ENV !== 'test') {
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
}
