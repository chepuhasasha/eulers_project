#!/usr/bin/env node

const program = require('commander');
const list = require('../lib/list');
const task = require('../lib/task');

program
    .command('list')
    .alias('ls')
    .description('Список проблем')
    .action(function () {
        list();
    });

program
    .command('task') 
    .alias('t')
    .description('Выбор проблемы')
    .action(function () {
        task();
    });

program.parse(process.argv);