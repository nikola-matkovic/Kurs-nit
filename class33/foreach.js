const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    result.failure.forEach( (val) => {
      failureItems.push(`<li class="text-warning">${val}</li>`);
    })
    // Only change code above this line
  
    return failureItems;
  }
  const failuresList = makeList(result.failure);
  