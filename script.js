function registerKey(keyEntered){
	keyEntered.setAttribute("style","transition-timing-function:ease-in;transition:0.1s;transform:translateX(0%) translateY(-25%);");
	// playAudio("keyPressAudio");
	setTimeout(function(){
		keyEntered.setAttribute("style","font-size: 2.5em;");
		enteredKey = keyEntered.innerHTML;
		enteredKey = enteredKey.toUpperCase();
		var ansPara = document.getElementById("ansPara");
		ansPara.innerHTML = enteredKey;
		ansPara.setAttribute("style","font-size:5em");
		setTimeout(function(){
			compareAns(queryLetter,enteredKey);
		},300);
		
	},300);
}

var compareAns=function(queryLetter,enteredKey) {
	if (enteredKey == queryLetter){
		playAudio("correctLetter");
		var queryArea = document.getElementById("play_area");
		queryArea.setAttribute("style","width:0%")
		$("<div/>", {
			id: "correctState",
			text: "Hurray!!!You are correct",
			// class: 'verticalM',
			
			// style: "height: '400px',margin-top= 0px",
			// width: '70px',
	}).appendTo(document.getElementById("game_area"));
		setTimeout(function(){
			var ansPara = document.getElementById("ansPara");
			ansPara.innerHTML = "";
			var cS = document.getElementById("correctState");
			var gA = document.getElementById("game_area");
			gA.removeChild(cS);
			correctAns();
		}, 1000);
		
	}
	else{
		playAudio("wrongLetter");
	}	
}

function correctAns(){
	var keyBrd = document.getElementById("keyBoard");
	while(keyBrd.firstChild){
		keyBrd.removeChild(keyBrd.firstChild);
	}
	var queryString = new Array();
	var query = window.location.search.split('?')[1];
	var cat = query.split('=')[1];
	
	if (cat == "1"){
		window.document.location.href = "match.html";
	}
	if (cat == "2"){
		fruitsRecognise();
	}
	if (cat == "3"){
		colorRecognise();
	}
	if (cat == "4"){
		counting();
	}
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

