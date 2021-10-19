const inquirer = require('inquirer');
const colors = require('colors');
const { problems } = require('../lib/problems');

const questions = [
  { type: 'list', name: 'problem', message: 'Выбор проблемы', choices: problems },
];

module.exports = function () {
  inquirer
    .prompt(questions[0])
    .then(answers => {
      let task = problems.filter(task => task.name === answers.problem)[0]
      console.log(colors.bold(answers.problem.toUpperCase()));
      console.log(colors.underline(colors.cyan(task.url)));
      console.log(task.description);
    })
};