let ARN = prompt("Entrer L'ARN");
let acide_amin;
let count= 0;
//Manasaraka string d mapiditra anaty tableau
ntab = [];
while(count < ARN.length){
	ntab.push(ARN[count] + ARN[count+1] + ARN[count+2])
	count +=3;
	}
	//Manova codon ho lasa acide_amin
function tcondon(codon) {
if (codon === "UCU" ||codon === "UCC" ||codon === "UCA" ||codon === "UCG" ||codon === "AGU" ||codon === "AGC"){
	acide_amin = "Sérine"
}

if (codon === "CCU" ||codon === "CCC" ||codon === "CCA" ||codon === "CCG"){
	acide_amin = "Proline "
}

if (codon === "UUA" ||codon === "UUG"){
	acide_amin = "Leucine "
}

if (codon === "UUU" ||codon === "UUC"){
	acide_amin = "Phénylalanine "
}

if (codon === "CGU" ||codon === "CGC" ||codon === "CGA" ||codon === "CGG" ||codon === "AGA" ||codon === "AGG"){
	acide_amin = "Arginine"
}


if (codon === "UAU" ||codon === "UAC"){
	acide_amin = "Tyrosine"
}

	return acide_amin;
}

ntab2 = []
for (var i = 0; i < ntab.length; i++) {
		ntab2.push(tcondon(ntab[i]));
}
console.log(tcondon(ntab[i]))
	
	console.log(`acide_aminé corresponant a  ${ARN} est ${ntab2[0]}-${ntab2[1]}-${ntab2[2]}-${ntab2[3]}`)





