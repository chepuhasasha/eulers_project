const inquirer = require('inquirer');
const fs = require("fs");
const colors = require('colors');
const { problems } = require('../lib/problems');

const questions = [
  { type: 'list', name: 'problem', message: 'Выбор проблемы', choices: problems },
];

function select() {
  inquirer
    .prompt(questions[0])
    .then(answers => {
      console.log('\x1Bc');
      console.log('______________________\n')
      let task = problems.filter(task => task.name === answers.problem)[0]
      console.log(colors.bold(task.name.toUpperCase()));
      console.log('______________________\n')

      console.log(colors.underline(colors.cyan(task.url)) + '\n');
      let path = `./problems/${task.num}.js`
      fs.readFile(path, "utf8", function(error,data){
          if(error) { 
            console.log(error)
            select()
          }
          console.log(data)
          console.log('______________________')
          select()
      });
    })
}

module.exports = function () {
  select()
};