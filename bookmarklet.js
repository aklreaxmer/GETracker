  //Bookmarklet to extract courses and GE info from OASIS

parse();

function parse() {
	var courses = document.getElementsByClassName("GE3");
	var courseArray = new Array(courses.length);
	for(var i  = 0; i < courseArray.length; i++) {
		courseArray[i] = new Course(
			
				courses[i].parentElement.parentElement.getElementsByClassName("CourseName")[0].innerText,
			
				courses[i].innerText.includes('AH'),
				courses[i].innerText.includes('SE'),
				courses[i].innerText.includes('SS'),
				courses[i].innerText.includes('WE'),
				courses[i].innerText.includes('VL'),
				courses[i].innerText.includes('ACGH'),
				courses[i].innerText.includes('DD'),
				courses[i].innerText.includes('WC'),
				courses[i].innerText.includes('QL'),
				courses[i].innerText.includes('SL')
			);
	}
	
	send(courseArray);
}


function send(data) {
	window.opener.postMessage(data, "https://aklreaxmer.github.io");
}

function Course(_name, _AH, _SE, _SS, _WE, _VL, _ACGH, _DD, _WC, _QL, _SL) {
	this.name = _name;
	this.AH = _AH;
	this.SE = _SE;
	this.SS = _SS;
	this.WE = _WE;
	this.VL = _VL;
	this.ACGH = _ACGH;
	this.DD = _DD;
	this.WC = _WC;
	this.QL = _QL;
	this.SL = _SL;
}