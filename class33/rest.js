const sum = (...args) => {
    return  args.reduce( (prew, cur) => prew + cur , 0);
 }

 console.log(sum(1,2,3,4))