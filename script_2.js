let n = parseInt(prompt("De quel nombre veut tu calculer la factorielle "));
function fact(n){
	if(n == 0){
		return 1;
	}
		else{
		  return n*fact(n-1);
		}

}
console.log(fact(n));