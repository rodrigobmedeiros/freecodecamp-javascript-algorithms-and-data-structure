const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  let totalOnline = 0;

  for (let user in usersObj) {
    usersObj[user].online ? totalOnline += 1 : totalOnline += 0;
  }

  return totalOnline;
  // Only change code above this line
}

console.log(countOnline(users));