/*
    null 병합 연산자 ??: 사용하면 값이 저장된 변수를 쉽게 찾아낼 수 있음.
*/

let varA = 10;      // varA 변수 메모리에는 값 10이 저장
let varB = 20;      // varB 변수 메모리에는 값 20이 저장
let varC;           // varC 변수 메모리는 선언되었지만 값은 없음

/*
    ?? 사용 문법
    피연산자1 ?? 피연산자2
    피연산자1이 null 또는 undefined 인지 확인
    null, undefined가 아니라면 피연산자1 반환, null, undefined라면 피연산자2 반환
*/

console.log(varA ?? varB);      // 10

console.log("--------------------------------------------------------\n");

console.log(varC ?? varB);      // 20

console.log("--------------------------------------------------------\n");

 /*
    변수 user에 해당 사용자의 이름이 저장되어 있다면
    이름을 저장하고, 이름이 저장되어 있지 않다면 닉네임을 저장.
 */
//let name;                     // 이름이 저장되어 있지 않은 상태

let name = "정운학";             // 이름이 저장된 상태

let nickName = "winterlood";    // 닉네임이 저장된 상태

let user = name ?? nickName;

console.log(user);