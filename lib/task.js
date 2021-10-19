const inquirer = require('inquirer');
const colors = require('colors');
const { problems } = require('../lib/problems');

const questions = [
  { type: 'list', name: 'problem', message: 'Выбор проблемы', choices: problems },
];

function select() {
  inquirer
  .prompt(questions[0])
  .then(answers => {
    console.log('______________________\n')
    let task = problems.filter(task => task.name === answers.problem)[0]
    console.log(colors.bold(answers.problem.toUpperCase()));
    console.log(colors.italic(task.description));
    console.log(task.code);
    console.log(colors.underline(colors.cyan(task.url)));
    console.log('______________________')
    select()
  })
}

module.exports = function () {
  select()
};