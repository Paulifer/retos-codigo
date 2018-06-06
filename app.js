//primer ejercicio dar el promedio de la longitud de dos arrays. 
const computeAverageLengthOfWords=(word1, word2) =>{
 let suma = word1.length + word2.length;
 let result = suma / 2;
	return result;
}
//confirmar nombre de usuario >= a 3 caracteres y password >=8 caracteres.
const areValidCredentials= (name, password)=> {
  if(name.length >= 3 && password.length >=8){
    return true;
  }else {
    return false;
}
}

