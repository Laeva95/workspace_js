/*
    화면 요소 가져오기

    상품명을 적는 입력칸
*/
    const nameInput = document.getElementById("nameInput");

/*
    가격을 적는 입력칸
*/
    const priceInput = document.getElementById("priceInput");

/*
    등록 버튼
*/
    const addBtn = document.getElementById("addBtn");

/*
    상품을 검색하는 입력칸
*/
    const searchInput = document.getElementById("searchInput");

/*
    정렬 방식을 고르는 드롭 다운
*/
    const sortSelect = document.getElementById("sortSelect");

/*
    상품 목록이 들어갈 표의 본문
*/
    const table = document.getElementById("productTable");

/*
    총합 금액을 보여주는 글자 영역
*/
    const total = document.getElementById("total");

    // 비어있는 배열 생성]
    let products = [];

    // 등록 버튼을 눌렀을 때 실행되는 함수 등록
    addBtn.addEventListener("click", () => {
        // input 요소의 상품 이름, 가격 가져오기
        const name = nameInput.value.trim();
        const price = Number(priceInput.value);

        // 값을 제대로 입력하지 않았다면 경고 메세지 출력
        if(!name || !price){
            alert('상품 이름과 가격을 올바르게 입력해주세요!');
            return;
        }

        // 이 상품만의 고유번호 생성
        const id = Date.now() + Math.random();
        // id, name, price 속성을 갖는 객체 생성
        products.push({id: id, name: name, price: price});

        // 다음 상품을 바로 입력할 수 있도록 value 값을 비워둠
        nameInput.value = "";
        priceInput.value = "";

        // 화면을 다시 그릴 수 있도록 render() 함수 호출
        render();
        
    });

    /*
        render() 함수
            현재 products 배열 상태에 맞춰 화면과 총합을 다시 그리는 함수

            table 태그 생성 
            -> 검색어로 products 배열에서 보여줄 목록 필터링
            -> 상품 목록 정렬
            -> 화면에 행을 하나씩 추가
            -> 각 행의 삭제 버튼에 이벤트 등록
            -> 총합을 계산해서 화면에 보여줌
    */

    function render(){
        // 테이블 표 안의 내용을 초기화
        table.innerHTML = "";

        // 검색칸에 입력된 검색어를 가져옴
        const keyword = searchInput.value.trim().toLowerCase();

        // 전체 상품 중 검색어가 포함된 상품만 골라서 목록 배열 생성
        let displayList = products.filter(item => item.name.toLowerCase().includes(keyword));

        // Array.sort() 함수를 통해 배열을 정렬
        // 정렬 기준이 되는 값의 순서에 따라 오름차순, 내림차순을 정할 수 있음
        if(sortSelect.value === "asc"){
            // 오름차순 정렬
            displayList.sort((a, b) => a.price - b.price);
        } else if(sortSelect.value === "desc"){
            // 내림차순 정렬
            displayList.sort((a, b) => b.price - a.price);
        }

        // 상품의 가격을 전부 더해서 총합을 구하고, 화면에 상품 테이블 그리기
        let sum = 0;

        displayList.forEach(item => {
            // 표의 행 tr 생성
            const tr = document.createElement("tr");

            // 상품 이름이 들어갈 td 생성 후 item.name 값을 텍스트로 입력
            const tdName = document.createElement("td");
            tdName.textContent = item.name;

            // 상품 가격이 들어갈 td 생성 후 item.price 값을 텍스트로 입력
            const tdPrice = document.createElement("td");
            tdPrice.textContent = item.price.toLowerCase() + "원";    // toLowerCase(): 숫자에 사용하면 천 단위로 읽기 쉽게 만들어줌

            // 삭제 버튼 생성
            const tdDelete = document.createElement("td");
            const btn = document.createElement("button");
            btn.textContent = "삭제";



        });

    }
