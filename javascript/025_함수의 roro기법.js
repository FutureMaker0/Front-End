function mob(
    x:100,
    y:200,
    hp:300,
    mp:300
){
    console.log(x, y, hp, mp)
}
mob((x:200, y:200, hp:300, mp:400))


// 초깃값이 입력이 안된 것들은 undefined 이다.
function mob(
    x = 100,
    y = 200,
    hp,
    mp
){
    console.log(x, y, hp, mp)
}
mob({x:200, y:200, hp:300, mp:400})


let one
let two
let three
let test = {one, two, three}
test

let {one=100, two, three} = {one:10, two:10, three:30}


