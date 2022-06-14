function smallestCommons(arr) {
    a = arr[0];
    b = arr[1];
    scm = 1;
    i = 2;
    while (a != 1 && b != 1) {
        while( a % i == 0 || b % i == 0){
            scm *= i;
            if(a % i == 0){
                a /= i;
            }
            if(b % i == 0){
                b /= i;
            }
        }
        i++;
    }
    return scm;
}
console.log(smallestCommons([9,12]));