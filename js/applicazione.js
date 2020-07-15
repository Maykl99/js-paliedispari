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