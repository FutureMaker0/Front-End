// 동기: 순차적
// 비동기: 비순차적
// callback 지옥: callback 함수가 계속해서 쌓여가는 것.

// promise 


// fetch가 promise 이다.
let p = new Promise(function(resolve, reject) {
    // 실행코드
});
// resolve(value) — 작업이 성공적으로 마무리되면 호출, 결과는 value에 담김
// reject(error) — 작업이 실패시 호출, error는 error에 담김

// resolve는 성공했을 때, reject는 실패했을 때
let p2 = new Promise(function(resolve, reject) {
    resolve('hello world');
}).then(메시지 => {
    alert(메시지);
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지);
    return 메시지[0]
}).then(메시지 => {
    alert(메시지);
}).catch(메시지 => {
    alert('catch 실행!! :' + 메시지);
});

fetch('http://testtttt.api.weniv.co.kr/mall')
.then(data => data.json())
.then(data => {
    console.log(data)
}).catch(error =>{
    // console.log(error)
    alert('서버가 멈췄습니다. 최대한 빠르게 복구하도록 하겠습니다.')
    document.write('서버가 멈췄습니다. 최대한 빠르게 복구하도록 하겠습니다.')
})
// 예외 시, 캐치를 통해 예외처리하는 것과 비슷하게 대응을 해두어야 한다.
// ex. 네트워크 불안정, 빠른 복구 예정 등

// finally는 무조건 실행되는 코드

fetch(https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json)





