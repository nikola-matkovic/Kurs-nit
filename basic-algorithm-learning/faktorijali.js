let fact = n => n < 1 ? 1 : n * fact(n - 1)

let niz = [1, 2, 3, 4, 5];

let faktorijali = niz.mep(elem => fact(elem)  )