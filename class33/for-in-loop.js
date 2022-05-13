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
    let numberOfOnline = 0;
    for (let user in usersObj){
      if(usersObj[user].online === true) {
        numberOfOnline++;
      }
    }
    return numberOfOnline;
  }
  
  console.log(countOnline(users));