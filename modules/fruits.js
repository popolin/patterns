
const summerSalad = (() => {
	const tropicalFruit = 'Mango'; // Local to the function
	function sliceMango(){
		return tropicalFruit.split('').join('|');
	}
	function makeSalad(){
		console.log(`Your ${sliceMango()} is ready!`);
		// Your M|a|n|g|o is ready!
	}
	return {
		toss: makeSalad
	}
})();

summerSalad.toss();