import { ColoredConsole, OsColoredConsole } from '@jrockwood/injected-console';
import path from 'path';
import yargs from 'yargs';
import { binName } from '..';

const epilog =
  "The size field can be suffixed with 'd' or 'h' to represent decimal or hex numbers. The default is " +
  'decimal if not specified.\n\n' +
  'For the type paramter you can also specify one of the following preset values. For example --type floppy\n\n' +
  '    floppy - 3.5 inch 1.44 MB';

// For a standard IBM formatted double-sided, high-density 3.5" floppy diskette, the following properties apply:
// - Data is recorded on two sides of the disk
// - Each side has 80 tracks
// - Each track has 18 sectors
// - Each sector holds 512 bytes (0.5 KB)
const floppySideCount = 2;
const floppyTracksPerSide = 80;
const floppySectorsPerTrack = 18;
const floppyBytesPerSector = 512;
export const floppySize = floppySideCount * floppyTracksPerSide * floppySectorsPerTrack * floppyBytesPerSector;

// ---------------------------------------------------------------------------------------------------------------------
// The following exports are required for yargs commands.
// See https://github.com/yargs/yargs/blob/main/docs/advanced.md#providing-a-command-module.

export const command = 'create';
export const describe = 'Creates a blank disk for use in a virtual machine';

export const builder = (argv: yargs.Argv): yargs.Argv<RawArgs> => {
  return argv
    .usage(`Usage: ${binName} create --out <destFile> [--size <bytes> | --type <diskType>]`)
    .option('out', {
      alias: 'o',
      describe: 'Path to the destination file',
      type: 'string',
      demandOption: true,
      requiresArg: true,
      normalize: true,
    })
    .option('size', { alias: 's', describe: 'Size of the disk in bytes', type: 'string', requiresArg: true })
    .option('type', { alias: 't', describe: 'Type of disk', type: 'string', choices: ['floppy'] })
    .conflicts('size', 'type')
    .strict()
    .epilog(epilog);
};

export const handler = (argv: yargs.Arguments<RawArgs>): void => {
  const resolvedOptions: CreateOptions = resolveOptions(argv);
  createBlankDisk(resolvedOptions);
};
// ---------------------------------------------------------------------------------------------------------------------

interface RawArgs {
  out: string;
  size?: string;
  type?: string;
}

export interface CreateOptions {
  outPath: string;
  sizeInBytes: number;
}

/**
 * Parses the arguments specific to the command. Exposed mainly for unit tests.
 * @param args An array of raw arguments, as specified on the command line.
 * @returns The parsed arguments.
 */
export function parseArgs(args: string[]): CreateOptions {
  if (args.length === 0 || args[0] !== command) {
    args = [command].concat(args);
  }

  const parsedArgs = yargs(args)
    .command(command, describe, builder)
    .fail((msg: string) => {
      throw new Error(msg);
    })
    .parseSync();

  return resolveOptions(parsedArgs);
}

function resolveOptions(parsedArgs: yargs.Arguments<RawArgs>): CreateOptions {
  const outPath: string = path.resolve(parsedArgs.out);
  const sizeInBytes: number = parseSize(parsedArgs.size || floppySize);
  return {
    outPath,
    sizeInBytes,
  };
}

function parseSize(size: string | number): number {
  if (typeof size === 'number') {
    return size;
  }

  const radix: number = size.endsWith('h') ? 16 : 10;
  const parsedSize: number = Number.parseInt(size, radix);
  if (isNaN(parsedSize)) {
    throw new Error(`size '${size}' cannot be converted to a number`);
  }

  return parsedSize;
}

export function createBlankDisk(options: CreateOptions, coloredConsole: ColoredConsole = new OsColoredConsole()): void {
  coloredConsole.success(`Created disk of size ${options.sizeInBytes} to '${options.outPath}'.`);
}
