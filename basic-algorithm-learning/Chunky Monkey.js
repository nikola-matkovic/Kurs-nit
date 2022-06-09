function chunkArrayInGroups(arr, size) {
	let arr2 = [...arr];
	let arr3 = []
	let temp;
	while(arr2.length > 0){
	  temp = []
	  for(let i = 0; i < size; i++){
		temp.push(arr2.shift());
	  }
	  temp = temp.filter( value => value != undefined )
	  arr3.push(temp)
	}
	return arr3;
  }
  
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
  
  