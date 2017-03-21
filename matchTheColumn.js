function matchTheColumn(){
	var list = [];
	list.push({key: ["A","B","C","D","E"],
		optionValue: [3,2,5,1,4]});
		
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