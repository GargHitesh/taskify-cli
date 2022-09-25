oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @hiteshg/taskify-cli
$ taskify-cli COMMAND
running command...
$ taskify-cli (--version)
@hiteshg/taskify-cli/0.0.0 darwin-x64 node-v16.13.1
$ taskify-cli --help [COMMAND]
USAGE
  $ taskify-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`taskify-cli hello PERSON`](#taskify-cli-hello-person)
* [`taskify-cli hello world`](#taskify-cli-hello-world)
* [`taskify-cli help [COMMAND]`](#taskify-cli-help-command)
* [`taskify-cli plugins`](#taskify-cli-plugins)
* [`taskify-cli plugins:install PLUGIN...`](#taskify-cli-pluginsinstall-plugin)
* [`taskify-cli plugins:inspect PLUGIN...`](#taskify-cli-pluginsinspect-plugin)
* [`taskify-cli plugins:install PLUGIN...`](#taskify-cli-pluginsinstall-plugin-1)
* [`taskify-cli plugins:link PLUGIN`](#taskify-cli-pluginslink-plugin)
* [`taskify-cli plugins:uninstall PLUGIN...`](#taskify-cli-pluginsuninstall-plugin)
* [`taskify-cli plugins:uninstall PLUGIN...`](#taskify-cli-pluginsuninstall-plugin-1)
* [`taskify-cli plugins:uninstall PLUGIN...`](#taskify-cli-pluginsuninstall-plugin-2)
* [`taskify-cli plugins update`](#taskify-cli-plugins-update)

## `taskify-cli hello PERSON`

Say hello

```
USAGE
  $ taskify-cli hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/hitesh.garg/taskify-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `taskify-cli hello world`

Say hello world

```
USAGE
  $ taskify-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ taskify-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

## `taskify-cli help [COMMAND]`

Display help for taskify-cli.

```
USAGE
  $ taskify-cli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for taskify-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `taskify-cli plugins`

List installed plugins.

```
USAGE
  $ taskify-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ taskify-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `taskify-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ taskify-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ taskify-cli plugins add

EXAMPLES
  $ taskify-cli plugins:install myplugin 

  $ taskify-cli plugins:install https://github.com/someuser/someplugin

  $ taskify-cli plugins:install someuser/someplugin
```

## `taskify-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ taskify-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ taskify-cli plugins:inspect myplugin
```

## `taskify-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ taskify-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ taskify-cli plugins add

EXAMPLES
  $ taskify-cli plugins:install myplugin 

  $ taskify-cli plugins:install https://github.com/someuser/someplugin

  $ taskify-cli plugins:install someuser/someplugin
```

## `taskify-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ taskify-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ taskify-cli plugins:link myplugin
```

## `taskify-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ taskify-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ taskify-cli plugins unlink
  $ taskify-cli plugins remove
```

## `taskify-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ taskify-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ taskify-cli plugins unlink
  $ taskify-cli plugins remove
```

## `taskify-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ taskify-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ taskify-cli plugins unlink
  $ taskify-cli plugins remove
```

## `taskify-cli plugins update`

Update installed plugins.

```
USAGE
  $ taskify-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
