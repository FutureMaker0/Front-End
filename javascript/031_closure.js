// 자바스크립트에서의 재귀 구현 방법

/*
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n-1)

*/


function factorial(n){
    if(n <= 1) {
        return 1
    }
    return n * factorial(n-1)
}
factorial(5)







