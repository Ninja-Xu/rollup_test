import answer from 'the-answer'
import debug from 'debug'

import Person from './modules/Person'
import delay from './modules/delay'

// Disable log in production
const log = debug('app:log')
if (BUILD === 'production') {
  debug.disable()
} else {
  debug.enable('*')
  log('log is enabled!')
}

let p = new Person('Mike', 26)
log(`answer is ${answer}`)
p.greeting();
let main = document.querySelector('#main')
let arr = [1, 2, 3, 4, 1]
log(arr.includes(2))
log(arr.includes(5))
main.innerHTML = p.getName();
(async function() {
  let result = await delay(5);
  main.innerHTML = result;
})();