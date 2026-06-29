/*
    <button> 요소를 선택해서
    button 상수 메모리에 저장
*/
const button = document.querySelector("button");

/*
    선택한 요소에 특정 이벤트 등록 후 처리
    선택한_요소.on등록할_이벤트_종류 = function(){
    
        실행할코드;

    };
*/

button.onclick = function(){
    // <body> 요소를 선택해서 배경색을 녹색으로 설정
    document.body.style.backgroundColor = "green";
};