function test(s1, s2){
    if(!(typeof(s1)== "string"  & typeof(s2) == "string")){
        return undefined;
    }
    let common  = [];
    for (let index1 = 0; index1 < s1.length; index1++) {
        for (let index2 = 0; index2 < s2.length; index2++) {
            if(s1[index1] == s2[index2]){
                common.push(s1[index1])
            }
        }
    }
    return common;
}
console.log(test("abcdefgh", "cdcfgjklc"))