function toHearts() {
	var div = document.getElementsByClassName('rating');
	for(var i = 0; i < 10; i++){
		var div = document.getElementsByClassName('rating');
		if(div[i].innerHTML == "5") {
			image = "5tree.png";
		} else if(div[i].innerHTML == "4") {
			image = "4tree.png";
		} else if(div[i].innerHTML == "3") {
			image = "3tree.png";
		} else if(div[i].innerHTML == "2") {
			image = "2tree.png";
		} else {
			image = "1tree.png";
		}
	div[i].innerHTML = '<img src="'+ image + '" />';
	}
}