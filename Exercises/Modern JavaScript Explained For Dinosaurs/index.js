// https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html

import moment from 'moment';

console.log("Hello from JavaScript!");
console.log(moment().startOf('day').fromNow());

var name = "Bob", time = "today";  
console.log(`Hello ${name}, how are you ${time}?`);

var name2 = "Tim" 
console.log(`Hello ${name2}, how are you ${time}?`);