window.onload = function() {
	var scissors = document.getElementsByClassName('scissors')[0];
	var rock = document.getElementsByClassName('rock')[0];
	var paper = document.getElementsByClassName('paper')[0];
	var count = document.getElementsByClassName("count")[0];
	var computerImg = ["scissors","rock","paper"];
	var computer = -1;
	var myChoose,myChooseImg;
	var result;
	var winCount = 0;
	scissors.onclick = function() {
		myChoose = 0;
		myChooseImg = "scissors";
		winOrLose();
	};
	rock.onclick = function() {
		myChoose = 1;
		myChooseImg = "rock";
		winOrLose();
	};
	paper.onclick = function() {
		myChoose = 2;
		myChooseImg = "paper";
		winOrLose();
	};

	function winOrLose() {
		computer = Math.floor(Math.random()*3);
		if(myChoose === -1){
			throw Error("no selecting");
		}
		if((myChoose - computer === 1) || (myChoose - computer === -2)){
			result = 1;
			winCount++;
		}else if((myChoose - computer === -1) || (myChoose - computer === 2)){
			result = 2;
		}else{
			result = 0;
		}
		console.log(result);
		show();
	}
	function show() {
		document.getElementsByTagName("ul")[0].setAttribute("hidden",true);
		var res = document.getElementsByClassName("res")[0];
		var myImg = res.getElementsByClassName("my_img")[0];
		var comImg = res.getElementsByClassName("com_img")[0];
		var resSpan = res.getElementsByClassName("res_span")[0];
		if(result === 0){
			resSpan.innerText = "all draw";
		}else if(result === 1){
			resSpan.innerText = "you win";
		}else if(result === 2){
			resSpan.innerText = "you lose";
		}
		myImg.setAttribute("src","images/" + myChooseImg + ".jpg");
		comImg.setAttribute("src","images/" + computerImg[computer] + ".jpg");
		count.innerText = winCount?winCount:0;
		res.removeAttribute("hidden");
		setTimeout(function() {
			document.getElementsByTagName("ul")[0].removeAttribute("hidden");
			res.setAttribute("hidden",true);
		},1000);
		
	}
};