let main, desc, icon = '';

const model = {
	DSBACK  : ["NodeJS", "Laravel", "Python"]
, DSFRONT : ["Angular", "HTML", "JavaScript"]
}

const modelIcon = {
	ICONBACK : `
		<i class="fas fa-star"></i>
		<i class="fas fa-star"></i>
		<i class="fas fa-star"></i>`
}


for (const key of model.DSBACK) {
	desc += `${key} ${modelIcon.ICONBACK} <br>`;
	iconReset();
}

function iconReset() { icon = ''}
//document.getElementById("cardContentTeste").innerHTML = `<p> ${desc} </p>`;

// console.log('obj :>> ', model.DSBACK);
// alert(`${model.DSBACK}`)

