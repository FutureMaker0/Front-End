// 해당하는 Id를 가진 요소에 접근하기
document.getElementById()

// 해당하는 모든 요소에 접근하기
// document.getElementsByTagName();

// 해당하는 클래스를 가진 모든 요소에 접근하기
// document.getElementsByClassName();

// css 선택자로 단일 요소에 접근하기
document.querySelector("selector");

// css 선택자로 여러 요소에 접근하기
// document.querySelectorAll("selector");

const myBtn = document.querySelector("button")

myBtn.addEventListener('click', function(){
	console.log("hello world");

    myBtn.classList.add("blue");

})




///
const body = document.querySelector("body");
const myUl = document.createElement("ul");

for(let i=0; i < 5; i++){
    const myLi = document.createElement('li');
    myLi.innerText('hello');
    myUl.appendChild(myLi);
}
body.appendChild(myUl)


// js에서 style 컨트롤하는 것은 카멜표기법이다. camelPyogiBub

// 이미지 삽입
const body2 = document.querySelector("body");
const myimg = document.createElement('img')

myimg.setAttribute("src", "https://img.wendybook.com/image_detail/img159/159599_01.jpg")
body.append(myimg)


// 버튼5를 누르면 바디에 내용 추가.
const btn5 = document.createElement('button')
btn5.innerText = '여기'
const body5 = document.querySelector('body')
body5.append(btn5)

btn5.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);
    
});

