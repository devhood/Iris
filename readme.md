# Iris

Iris is a modular content management system and web application framework built using JavaScript and MongoDB. 

## Key features

* Graphical admin interface
* Permission and role system
* Extensible module and theme system
* Built using a Hook API system that allows overriding and jumping on system functions
* Entity, entity type and field system (all built through an admin UI)
* Block, region, theme and embed system
* Simultanious serverside and client side rendering so you can use React, Angular or whatever client side framework you want while falling back to a JavaScript disabled version for SEO and progressive enhancement.
* Web socket (Socket.io) messaging and session support built in, including automatic live updating of content.
* A quick to write and embed form system based on JSON schema 
* An actions module for registering events, conditions and actions to fire at certain times
* A logs page for viewing messages and errors
* Database entity queries done through simple widgets placed in HTML that handle all access permissions for you.

## Runs on Linux, Mac OS and Windows

Iris was built on Windows, Linux and Mac OS so should work on all three.

## Built with version control in mind

Iris was built with version control in mind so, instead of storing blocks, regions, fields and entity types, views and other configuration in the database, all configuration you'd want to put through Git or another version control system is stored in easily exportable/importable JSON files. You can see what has changed through the graphical interface. You can even edit these configuration files manually if you want as they're written to be human-readable. The exporting and importing is again done through the user interface, though if you prefer drag and drop exporting and importing you can do that too.

## Read the docs

[Look at the Iris documentation](https://github.com/CityWebConsultants/Iris/wiki).

## Help build Iris

After a year of keeping it to ourselves, we'd love you to try out Iris, let us know what we've done right and wrong and help us build it by contributing to its source code via pull requests and building modules and themes.
