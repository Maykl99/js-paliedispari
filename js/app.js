/* 1.chiedere la parola
2. memorizzarla in una variabile stringa
3. trovare la parola letta al contrario
4. confrontate le due stringhe e visualizzare il risultato
5. usate la funzione */


<<<<<<< HEAD
// ESERCIZIO INCOMPLETO 
/* var nome= prompt('scrivi una parola');
=======
// ESERCIZIO INCOMPLETO ma funzionante xd
var nome= prompt('scrivi una parola');
>>>>>>> master
var str='';
var risultato='';
for(var i=nome.length-1; i>=0; i--){
    str += nome[i];
    if(str === nome){
        risultato += 'la parola è palindroma';
    }
}
console.log(str,risultato)   
<<<<<<< HEAD
 */

var nome= prompt('scrivi una parola');
console.log(palindromo(nome))


function palindromo(nome){
    var str='';
    var risultato='';
    for(var i=nome.length-1; i>=0; i--){
        str += nome[i];
        if(str === nome){
            risultato += 'la parola è palindroma';
        }
    }
    return risultato;
}

=======
>>>>>>> master
