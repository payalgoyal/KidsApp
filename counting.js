function counting(){
	var list = [];
	list.push({incompWord: "A____A__A",
		compWord: "AUSTRALIA"});
		
	list.push({incompWord: "A__EN__NA",
		compWord: "ARGENTINA"});
	
	list.push({incompWord: "A__T__A",
		compWord: "AUSTRIA"});
	
	list.push({incompWord: "_H_T__",
		compWord: "BHUTAN"});
		
	list.push({incompWord: "_R__I_",
		compWord: "BRAZIL"});
		
	list.push({incompWord: "_R__A_N",
		compWord: "BRITAIN"});
	
	list.push({incompWord: "B__G___ES_",
		compWord: "BANGLADESH"});
	
	list.push({incompWord: "_E__IU_",
		compWord: "BELGIUM"});
	
	list.push({incompWord: "B___A_I_",
		compWord: "BULGARIA"});
		
	list.push({incompWord: "_A_A_A",
		compWord: "CANADA"});
	
	list.push({incompWord: "__I_A",
		compWord: "CHINA"});
	
	list.push({incompWord: "__I_E",
		compWord: "CHILE"});
		
	list.push({incompWord: "_O__A _I_A",
		compWord: "COSTA RICA"});
		
	list.push({incompWord: "C__C_ __P_B__C",
		compWord: "CZECH REPUBLIC"});
	
	list.push({incompWord: "_E__A_K",
		compWord: "DENMARK"});
	
	list.push({incompWord: "_G__T",
		compWord: "EGYPT"});

	list.push({incompWord: "_C__D_R",
		compWord: "ECUADOR"});
		
	list.push({incompWord: "_T__O__A",
		compWord: "ETHIOPIA"});
		
	list.push({incompWord: "_I__A_D",
		compWord: "FINLAND"});
	
	list.push({incompWord: "F__N_E",
		compWord: "FRANCE"});
	
	list.push({incompWord: "_E_R__A",
		compWord: "GEORGIA"});
		
	list.push({incompWord: "G_R_A__",
		compWord: "GERMANY"});
	
	list.push({incompWord: "__EE_E",
		compWord: "GREECE"});
		
	list.push({incompWord: "__EE__A_D",
		compWord: "GREENLAND"});
		
	list.push({incompWord: "G_I__A",
		compWord: "GUINEA"});
		
	list.push({incompWord: "H_N_ __N_",
		compWord: "HONG KONG"});
		
	list.push({incompWord: "_U__A_Y",
		compWord: "HUNGARY"});
		
	list.push({incompWord: "I_E_A_D",
		compWord: "ICELAND"});
		
	list.push({incompWord: "I__I_",
		compWord: "INDIA"});
		
	list.push({incompWord: "_N__NE__A",
		compWord: "INDONESIA"});
		
	list.push({incompWord: "I__L__D",
		compWord: "IRELAND"});
		
	list.push({incompWord: "_S_A_L",
		compWord: "ISRAEL"});
		
	list.push({incompWord: "I_A_Y",
		compWord: "ITALY"});
		
	list.push({incompWord: "_A_AI_A",
		compWord: "JAMAICA"});
		
	list.push({incompWord: "_A_A_",
		compWord: "JAPAN"});
		
	list.push({incompWord: "_E_S_Y",
		compWord: "JERSEY"});
		
	list.push({incompWord: "_I__RI_",
		compWord: "LIBERIA"});
		
	list.push({incompWord: "L__E__O_RG",
		compWord: "LUXEMBOURG"});
		
	list.push({incompWord: "_A_A_A__AR",
		compWord: "MADAGASCAR"});
		
	list.push({incompWord: "_A_A___A",
		compWord: "MALAYSIA"});
		
	list.push({incompWord: "_A__I_I_S",
		compWord: "MAURITIUS"});
		
	list.push({incompWord: "__X__O",
		compWord: "MEXICO"});
		
	list.push({incompWord: "_AL_I__S",
		compWord: "MALDIVES"});
		
	list.push({incompWord: "M_A_MA_",
		compWord: "MYANMAR"});
		
	list.push({incompWord: "_E__ER___DS",
		compWord: "NETHERLANDS"});
		
	list.push({incompWord: "_E_ _E_L__D",
		compWord: "NEW ZEALAND"});
		
	list.push({incompWord: "__G_R_A",
		compWord: "NIGERIA"});
		
	list.push({incompWord: "N__T_ K__EA",
		compWord: "NORTH KOREA"});
		
	list.push({incompWord: "P_L___IN_",
		compWord: "PALESTINE"});
		
	list.push({incompWord: "_HI_I__I__S",
		compWord: "PHILIPPINES"});
		
	list.push({incompWord: "_O_A_D",
		compWord: "POLAND"});
		
	list.push({incompWord: "_O__U_A_",
		compWord: "PORTUGAL"});
		
	list.push({incompWord: "_A_A_",
		compWord: "QATAR"});
		
	list.push({incompWord: "_O_A__A",
		compWord: "ROMANIA"});
		
	list.push({incompWord: "_U__IA",
		compWord: "RUSSIA"});
		
	list.push({incompWord: "_A_D_ A_A__A",
		compWord: "SAUDI ARABIA"});
		
	list.push({incompWord: "S___A___E",
		compWord: "SINGAPORE"});
		
	list.push({incompWord: "S___A__A",
		compWord: "SLOVANIA"});
		
	list.push({incompWord: "_O_T_ __RI__",
		compWord: "SOUTH AFRICA"});
		
	list.push({incompWord: "_O__H _O_E_",
		compWord: "SOUTH KOREA"});
		
	list.push({incompWord: "__I _A__A",
		compWord: "SRI LANKA"});
		
	list.push({incompWord: "S_I__ER__N_",
		compWord: "SWITZERLAND"});
		
	list.push({incompWord: "_H__L__D",
		compWord: "THAILAND"});
		
	list.push({incompWord: "_N_T__ _T_T__",
		compWord: "UNITED STATES"});
		
	list.push({incompWord: "_I__A__E",
		compWord: "ZIMBABWE"});
	
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