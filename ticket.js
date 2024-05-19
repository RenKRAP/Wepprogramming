// 시간 함수
function startTime() {
    const today = new Date();
    let y = today.getFullYear();
    let mh = today.getMonth() + 1; // getMonth()는 Zero base이므로 +1 해야 정상적인 출력 
    let d = today.getDate();

    let h = today.getHours();
    let m = checkTime(today.getMinutes());
    let s = checkTime(today.getSeconds());

    document.getElementById('txt').innerHTML = y + "년 " + mh + "월 " + d + "일 " + h + ":" + m + "분 " + s + "초";
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }  // add zero in front of numbers < 10
    return i;
}

// 티켓 값 계산
// 변수 선언
const outField = document.getElementById("output");
const outField1 = document.getElementById("ticket1");
const outField2 = document.getElementById("ticket2");
const outField3 = document.getElementById("ticket3");
const outField4 = document.getElementById("ticket4");
const outField5 = document.getElementById("ticket5");
const outField6 = document.getElementById("ticket6");
const outField7 = document.getElementById("ticket7");
const outField8 = document.getElementById("ticket8");
const totalField = document.getElementById("total");

// 티켓 매수 배열
const arrayTicketnumber = document.getElementsByClassName("ticket");

// 티켓 가격 배열
const arrayticketcost = document.getElementsByClassName("cost");
const arrayticketcostValue = [];

for (let i = 0; i < arrayticketcost.length; i++) {
    arrayticketcostValue.push(arrayticketcost[i].getAttribute("data-value"));
}

function Ticketnumber() {
    let total = 0; // total 초기화
    const userName = document.getElementById("user_name").value;
    const arrayTicketnumberValue = [];

    for (let i = 0; i < arrayTicketnumber.length; i++) {
        arrayTicketnumberValue.push(Number(arrayTicketnumber[i].value)); // 문자열을 숫자로 변환
        console.log(arrayTicketnumberValue[i]);
    }

    for (let i = 0; i < arrayTicketnumberValue.length; i++) {
        total += arrayTicketnumberValue[i] * arrayticketcostValue[i];
    }

    outField.innerHTML = "<div>" + userName + " 고객님 감사합니다.</div>";
    
    outField1.innerHTML = arrayTicketnumberValue[0] != 0 ? `<div>어린이 입장권 ${arrayTicketnumberValue[0]}매</div>` : "";
    outField2.innerHTML = arrayTicketnumberValue[1] != 0 ? `<div>어른 입장권 ${arrayTicketnumberValue[1]}매</div>` : "";
    outField3.innerHTML = arrayTicketnumberValue[2] != 0 ? `<div>어린이 BIG3 ${arrayTicketnumberValue[2]}매</div>` : "";
    outField4.innerHTML = arrayTicketnumberValue[3] != 0 ? `<div>어른 BIG3 ${arrayTicketnumberValue[3]}매</div>` : "";
    outField5.innerHTML = arrayTicketnumberValue[4] != 0 ? `<div>어린이 자유이용권 ${arrayTicketnumberValue[4]}매</div>` : "";
    outField6.innerHTML = arrayTicketnumberValue[5] != 0 ? `<div>어른 자유이용권 ${arrayTicketnumberValue[5]}매</div>` : "";
    outField7.innerHTML = arrayTicketnumberValue[6] != 0 ? `<div>어린이 연간이용권 ${arrayTicketnumberValue[6]}매</div>` : "";
    outField8.innerHTML = arrayTicketnumberValue[7] != 0 ? `<div>어른 연간이용권 ${arrayTicketnumberValue[7]}매</div>` : "";
    totalField.innerHTML = "<div> 합계 " + total + "원입니다.</div>";
}