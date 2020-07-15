/* Palidroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

var nome= prompt('scrivi una parola');
console.log(palindromo(nome));


function palindromo(nome,risultato=''){
    var str='';
    for(var i=nome.length-1; i>=0; i--){
        str += nome[i];
        if(str === nome){
            risultato += 'la parola è palindroma';
        }
    }
    return str + ' ' + risultato;
} 

