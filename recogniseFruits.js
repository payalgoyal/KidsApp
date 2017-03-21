function fruitsRecognise(){
	var list = [];
	list.push({incompWord: "_I_ _O_A__ __A__AN",
		compWord: "SIR DONALD BRADMAN"});
		
	list.push({incompWord: "_A_L L__I_",
		compWord: "CARL LEWIS"});
	
	list.push({incompWord: "L___E_ ME___",
		compWord: "LIONEL MESSI"});
	
	list.push({incompWord: "_I__AE_ _O__A_",
		compWord: "MICHAEL JORDAN"});
		
	list.push({incompWord: "D_E__ _A_AD__A",
		compWord: "DIEGO MARADONA"});
		
	list.push({incompWord: "_E_E_A _I__IA__",
		compWord: "SERENA WILLIAMS"});
	
	list.push({incompWord: "_O_E_ _E_E_E_",
		compWord: "ROGER FEDERER"});
	
	list.push({incompWord: "_A____A _AV_A__L_VA",
		compWord: "MARTINA NAVRATILOVA"});
	
	list.push({incompWord: "_A__I_ _E__U__AR",
		compWord: "SACHIN TENDULKAR"});
		
	list.push({incompWord: "_M__N _H_N",
		compWord: "IMRAN KHAN"});
	
	list.push({incompWord: "__A_E _A__E",
		compWord: "SHANE WARNE"});
	
	list.push({incompWord: "_H_A_ _HA__",
		compWord: "DHYAN CHAND"});
		
	list.push({incompWord: "_L_R_ _U__ES",
		compWord: "CLARA HUGHES"});
		
	list.push({incompWord: "_A_I_ _EC__AM",
		compWord: "DAVID BECKHAM"});
	
	list.push({incompWord: "_RI__ __R_",
		compWord: "BRIAN LARA"});
	
	list.push({incompWord: "__R_S _O_",
		compWord: "CHRIS HOY"});

	list.push({incompWord: "_RI__I__O RO__L_O",
		compWord: "CRISTIANO RONALDO"});
		
	list.push({incompWord: "A__Y _U__AY",
		compWord: "ANDY MURRAY"});
		
	list.push({incompWord: "_I_ _I_ _IC_A___",
		compWord: "SIR VIV RICHARDS"});
	
	list.push({incompWord: "_E__A__O _O__ES",
		compWord: "FERNANDO TORRES"});
	
	list.push({incompWord: "_I_A_ _O__I",
		compWord: "VIRAT KOHLI"});
		
	list.push({incompWord: "_EO__E _E__",
		compWord: "GEORGE BEST"});
	
	list.push({incompWord: "_A__A __R_A",
		compWord: "SANIA MIRZA"});
		
	list.push({incompWord: "_I__A_A__A_ A_A_D",
		compWord: "VISWANATHAN ANAND"});
		
	list.push({incompWord: "_A_K _I_K_A_S",
		compWord: "JACK NICKLAUS"});
		
	list.push({incompWord: "_A__A _E__A_",
		compWord: "SAINA NEHWAL"});
		
	list.push({incompWord: "_I__ _U__EL_",
		compWord: "BILL RUSSELL"});
		
	list.push({incompWord: "_A_I_ _E_",
		compWord: "KAPIL DEV"});
		
	list.push({incompWord: "_U_I_ _A_A__AR",
		compWord: "SUNIL GAVASKAR"});
		
	list.push({incompWord: "_UL_LL_ G__IC___D",
		compWord: "PULELLA GOPICHAND"});
		
	list.push({incompWord: "_A__ _O_",
		compWord: "MARY KOM"});
		
	list.push({incompWord: "M_L__A _I_G_",
		compWord: "MILKHA SINGH"});
		
	list.push({incompWord: "A_A_ _A_E_A",
		compWord: "AJAY JADEJA"});
		
	list.push({incompWord: "_A__O_ _I__H _I_HU",
		compWord: "NAVJOT SINGH SIDHU"});
		
	list.push({incompWord: "_O_A__E_ A__A_U__IN",
		compWord: "MOHAMMED AZHARUDDIN"});
		
	list.push({incompWord: "_U_R_J _I_G_",
		compWord: "YUVRAJ SINGH"});
		
	list.push({incompWord: "_A_U_ __A_I_",
		compWord: "RAHUL DRAVID"});
		
	list.push({incompWord: "A_I_ _UM__E",
		compWord: "ANIL KUMBLE"});
		
	list.push({incompWord: "_A__A_ _A__HI_",
		compWord: "GAUTAM GAMBHIR"});
		
	list.push({incompWord: "_O__A_ _AN___Y",
		compWord: "SOURAV GANGULY"});
		
	list.push({incompWord: "I__AN _A__AN",
		compWord: "IRFAN PATHAN"});
		
	list.push({incompWord: "_A___R __AN",
		compWord: "ZAHEER KHAN"});
		
	list.push({incompWord: "_A_B_A_A_ _I_G_",
		compWord: "HARBHAJAN SINGH"});
		
	list.push({incompWord: "_I_E__E_ _E__A_",
		compWord: "VIRENDER SEHWAG"});
	
	incompleteWord = [];
	completeWord = [];
	for (var inc = 0;inc<list.length;inc++){
		incompleteWord.push(list[inc].incompWord);
	}
	for (var com = 0;com<list.length;com++){
		completeWord.push(list[com].compWord);
	}
	main(incompleteWord,completeWord)
}