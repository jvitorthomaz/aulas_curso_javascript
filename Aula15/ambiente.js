let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()

console.log(num)
console.log(`O Vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

/*
let pos = num.indexOf(8)
console.log(`O valor 8 esta na posiçao ${pos}`)
*/

/*
let pos = num.indexOf(4)
console.log(`O valor 4 esta na posiçao ${pos}`) // -1 indica que nao esta no vetor
*/

let pos = num.indexOf(4)
if (pos == -1) {
    console.log(`O valor nao foi encontrado`)
}else{
    console.log(`O valor esta na posiçao ${pos}`)
}





