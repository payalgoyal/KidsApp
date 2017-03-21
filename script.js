function registerKey(keyEntered){
	keyEntered.setAttribute("style","transition-timing-function:ease-in;transition:0.1s;transform:translateX(0%) translateY(-25%);");
	// playAudio("keyPressAudio");
	setTimeout(function(){
		keyEntered.setAttribute("style","font-size: 2.5em;");
		enteredKey = keyEntered.innerHTML;
		enteredKey = enteredKey.toUpperCase();
		compareAns(queryLetter,enteredKey);
	},300);
}

var compareAns=function(queryLetter,enteredKey) {
	if (enteredKey == queryLetter){
		playAudio("correctLetter");
		correctAnimation();
	}
	else{
		playAudio("wrongLetter");
	}	
}

function correctAnimation(){
	var pAgain = document.getElementById('play_again');
		pAgain.setAttribute("style","visibility:visible");
		pAgain.setAttribute("class","shake-slow1");
		setTimeout(function(){
			pAgain.classList.remove("shake-slow1");
			pAgain.classList.add("shake-slow2");
		},50);
		setTimeout(function(){
			pAgain.classList.remove("shake-slow2");
			pAgain.classList.add("shake-slow3");
		},100);
		setTimeout(function(){
			pAgain.classList.remove("shake-slow3");
			pAgain.classList.add("shake-slow4");
		},150);
		setTimeout(function(){
			pAgain.classList.remove("shake-slow4");
			pAgain.classList.add("shake-slow1");
		},200);
		setTimeout(function(){
			pAgain.classList.remove("shake-slow1");
			pAgain.classList.add("shake-slow2");
		},250);
		setTimeout(function(){
			pAgain.classList.remove("shake-slow2");
			pAgain.classList.add("shake-slow3");
		},300);
		setTimeout(function(){
			pAgain.classList.remove("shake-slow3");
			pAgain.classList.add("shake-slow4");
		},350);
		setTimeout(function(){
			pAgain.classList.remove("shake-slow4");
			pAgain.classList.add("shake-slow1");
		},400);
		setTimeout(function(){
			pAgain.classList.remove("shake-slow1");
			pAgain.classList.add("shake-slow0");
		},450);
		
		$("<div/>", {
			id: "correctState",
			text: "Hurray!!!You are correct",
			// class: 'verticalM',
			
			// style: "height: '400px',margin-top= 0px",
			// width: '70px',
	}).appendTo(document.getElementById("game_area"));
}

function playAgain(){
	playAudio("playAgainAudio");
	var elem = document.getElementById("correctState");
	if(elem != null){
		elem.parentNode.removeChild(elem);
	}
	
	document.getElementById('play_again').setAttribute("style","visibility:hidden");

	resetFunc();
}

var resetFunc = function(){
	var keyBrd = document.getElementById("keyBoard");
	while(keyBrd.firstChild){
		keyBrd.removeChild(keyBrd.firstChild);
	}
	var querySpan = document.getElementById("queryArea");
	while(querySpan.firstChild){
		querySpan.removeChild(querySpan.firstChild);
	}
	
	optionKeys = [];
	ran = Math.floor(Math.random() * list.length);
	for (var inc = 0;inc<list[ran].optionValue.length;inc++){
		optionKeys.push(list[ran].optionValue[inc]);
	}
	
	queryLetter = list[ran].key;
	
	queryArea.setAttribute("style","background-color:"+queryLetter);
	
	keyLength = optionKeys.length;
	
	for (var keys=0;keys<keyLength;keys++){
		var keyButton = document.createElement("button");
		keyButton.setAttribute("type","button");
		keyButton.setAttribute("value",optionKeys[keys]);
		keyButton.setAttribute("class","keys");
		keyButton.setAttribute("onclick","registerKey(this)");
		keyButton.innerHTML = optionKeys[keys];
		
		var keyBrd = document.getElementById("keyBoard");
		keyBrd.appendChild(keyButton);
		
		keyBrd.setAttribute("style","text-align:center");		
	}
	
	var queryString = new Array();
	var query = window.location.search.split('?')[1];
	var cat = query.split('=')[1];
	if(cat == '1'){
		var querySpan = document.createElement("span");
		querySpan.setAttribute("class","query");
		querySpan.setAttribute("id","query");
		querySpan.setAttribute("style","font-size:2.5em");
		querySpan.innerHTML = queryLetter;
						
		var queryAreaElem = document.getElementById("queryArea");
		queryAreaElem.appendChild(querySpan);
		
		document.getElementById("header").innerHTML = "Identify Alphabets";
		document.getElementById("footer").setAttribute("style","width:50%;margin-left:25%;margin-right:25%");
	}
	if(cat == '2'){
		document.getElementById("header").innerHTML = "Identify Color";
	}
		
	// document.getElementById("footer").setAttribute("style","width:50%;margin-left:25%;margin-right:25%");
	var pAgain = document.getElementById('play_again');
		pAgain.setAttribute("style","visibility:hidden");
	
}

var my_media;
		 
var playAudio = function(audioID) {
	var audioElement = document.getElementById(audioID);
	var url = audioElement.getAttribute('src');
	
	my_media = new Audio(url,
			// success callback
			 function () { my_media.release(); },
			// error callback
			 function (err) { my_media.release(); }
	);
		   // Play audio
	my_media.play();
}

