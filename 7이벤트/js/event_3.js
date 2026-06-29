/*
    button 상수에 button 요소 저장
*/
const button = document.querySelector("button");

/*
    선택한 button 요소에 click 이벤트를 등록하고, 호출될 함수 등록
*/
button.onclick = changeBackground;        // 호출될 이벤트 핸들러. 괄호 없이 함수명만 작성

/*
    click 이벤트가 발생하면 처리할 이벤트 핸들러 함수를 외부에 정의
*/
function changeBackground(){
    document.body.style.backgroundColor = "green";
}
