document.addEventListener("DOMContentLoaded", function() {
	// 사용자에게 YYYY-MM-DD 형식으로 날짜를 입력하도록 요청
	var userInput = prompt("날짜를 입력하세요 (YYYY-MM-DD):");

	// 사용자가 취소 버튼을 누른 경우 실행 중단
	if (userInput === null) {
		alert("취소되었습니다.");
		return;
	}

	// 사용자 입력값을 Date 객체로 변환하고 유효성 검사
	var now = new Date(userInput);
	
	// 입력된 날짜가 유효한지 확인
	if (isNaN(now.getTime())) {
			alert("잘못된 날짜입니다. 페이지를 새로고침하고 유효한 날짜를 입력하세요.");
			return;
	}

	// 연도의 첫 번째 날 (2000-01-01)로 Date 객체 생성
	var firstDay = new Date("2000-01-01");

	// 두 날짜의 시간을 밀리초 단위로 가져옴
	var toNow = now.getTime();
	var toFirst = firstDay.getTime();

	// 두 날짜 간의 시간 차이를 계산하고, 일(day) 단위로 변환
	var passedTime = toNow - toFirst;
	passedTime = Math.round(passedTime / (1000 * 60 * 60 * 24));

	// 음수 값이 나오면 0으로 설정 (과거 날짜 대비 미래 날짜일 경우)
	if (passedTime < 0) {
		passedTime = 0;
	}

	// HTML 문서에서 id="result"를 가진 요소를 찾음
	var resultElement = document.querySelector("#result");

	// 해당 요소가 존재하면, 요소의 텍스트를 경과된 일 수로 업데이트
	if (resultElement) {
			resultElement.innerText =  passedTime;
	}
});