/*
    body 요소 선택
*/
const body = document.body;

/*
    div 요소 선택
*/
const result = document.querySelector("#result");

/*
    선택한 body 요소에 key를 누르고 있는 동작(keydown) 등록
    사용자가 키를 누르고 있는 동작을 실행할 때마다 이벤트 핸들러 함수가 호출되어 실행
*/
body.addEventListener("keydown", (event) => {
    // 어떤 키를 누르고 있는지 출력
    result.innerText = `code : ${event.code}, key : ${event.key}`;
});




/*
    addEventListener 메서드를 이용해서 선택한 요소에 이벤트 등록

        문법
            요소선택.addEventListener("이벤트종류1 이벤트종류2 이벤트종류3", 이벤트핸들러함수, 옵션);

        옵션에 작성할 코드 종류
            {once : true} -> 선택한 요소에 이벤트 종류를 등록하면 이벤트 핸들러 함수가
                            이벤트가 여러번 실행되어도 함수를 한번한 실행하도록 처리
            {capture: true} -> 이벤트 캡처링 단계에서 이벤트 처리 실행
            {capture: false} -> 이벤트 버블링 단계에서 이벤트 처리 실행

    1. e.type  -> 이벤트의 유형을 제공해줌. 예를 들어 'keydown', 'keyup', 'click'등
    2. e.target -> 이벤트가 발생한 DOM요소를 제공해줌. 예를 들어 사용자가 클릭한 <button> 등
    3. e.code -> 눌린 키의 물리적 키 코드를 제공해줌
                            키의 위치를 기준으로 하며, 예를 들어 "KeyA" 는 A키를 나타냅니다.
    4. e.key  -> 눌린 키의 실제 값을 제공해줌
                            예를 들어, shift키를 누른상태에서 A키를 누르면
                e.key는 "A"가 됩니다. 
                
    5. e.altKey , e.ctrKey, e.shiftKey ->
        각각 Alt,     Ctrl,     Shift 키 가 눌렀는지를 나타내는 true또는 false반환 

    6. e.preventDefault()메소드 ->
        
    <a href="http://" onclick="alert('d');"> 
    href속성은 클릭을 유도하는 기본이벤트 동작을 차단하는 메소드

    요약 : 링크 클릭시 페이지 이동을 막을수 있습니다.

    7. e.stopPropagation()메소드 -> 
    
    이벤트가 상위요소로 전파되는것을 막는 메소드입니다.
    이벤트 버블링을 제어할때 사용됩니다.
*/