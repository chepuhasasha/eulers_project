const colors = require('colors');
const { problems } = require('./problems');

// export function to list coffee
module.exports = function() {
    console.log('Проект Эйлер');
    console.log('------------------');

    // list on separate lines
    problems.forEach( task => {
        console.log('%s %s', colors.grey(`${task.num}. `), colors.bold(task.name));
    });
};