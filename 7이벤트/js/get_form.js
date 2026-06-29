/*
    사용자가 학과를 선택할 수 있는 위 select 요소를 선택해 가져와서 저장
*/
const selectMenu = document.querySelector("#major");

/*
    선택한 select 요소 내부에 작성된 option 태그들 중에서 하나의 option을 선택하는 동작,
    change 이벤트를 select 요소에 등록
*/
selectMenu.addEventListener("change", (event) => {
    /* 
        선택한 option 요소의 텍스트 노드 값을 가져와서 변수에 저장   
    */
    let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;

    /*
        선택한 option의 텍스트 노드를 알림창으로 출력
    */
   alert(`${selectedText}를 선택했습니다.`);
});


