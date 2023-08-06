let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';



function comparaNumero (n1, n2){
    if (n1 == n2  &&   !(n1 === n2) ){        
            console.log('As variáveis tem o mesmo valor, mas são de tipos diferentes');         
    }
    else{
        if(n1==n2 && n1===n2){
            console.log(' As variáveis  tem o mesmo valor e mesmo tipo de variável');
        }
        else{
            console.log('As variáveis são diferentes')
        }        
    }    
}
