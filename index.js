//for loop function
function writeCards(names, event) {
  const messages = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    messages.push(message);
  }
  return messages;
}
console.log(writeCards(['ada', 'Brendan', 'Ali'], 'birthday'));


//countdown

function countDown() {
  let countDown = 10;
  while (countDown >= 0) {
    console.log(countDown--);
    
  }
  
}
