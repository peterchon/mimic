var answer = document.querySelector('.btn');
answer.onclick = showAnswer;

function showAnswer(){
	var display = this.textContent;
	var text;
	var cl;
	var next = this.nextElementSibling;
	if(/show/.test(display)){
		text = "hide";
		next.className = next.className.replace(/display:none/, '');
	} else {
		text = "show";
		next.className += " display:none";		
	}
	this.textContent = text;
}