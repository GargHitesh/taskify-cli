import {Command, Flags} from '@oclif/core'

export default class TasksNew extends Command {
  static description = 'Creates a new Salesforce task'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(TasksNew)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /Users/hitesh.garg/taskify-cli/src/commands/tasks/new.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
