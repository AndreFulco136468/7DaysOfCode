// let numeroUm = 1;
// let stringUm = '1';
// let numeroTrinta = 30;
// let stringTrinta = '30';
// let numeroDez = 10;
// let stringDez = '10';



// function comparaNumero (n1, n2){
//     if (n1 == n2  &&   !(n1 === n2) ){        
//             console.log('As variáveis tem o mesmo valor, mas são de tipos diferentes');         
//     }
//     else{
//         if(n1==n2 && n1===n2){
//             console.log(' As variáveis  tem o mesmo valor e mesmo tipo de variável');
//         }
//         else{
//             console.log('As variáveis são diferentes')
//         }        
//     }    
// }


function recebeNome(){
    
    const nome = document.querySelector("#nome").value;
    const idade = document.querySelector("#idade").value;
    const curso = document.querySelector("#curso").value;
         return nome
}

function recebeIdade(){
    
    
    const idade = document.querySelector("#idade").value;
    
         return idade
}

function recebeCurso(){
    
    
    const curso = document.querySelector("#curso").value;
         return curso
}

function esconde(){
    const listaEsconde = document.querySelectorAll("#esconde");
    console.log(listaEsconde);
    for (let i = 0; i < listaEsconde.length; i++){
        document.listaEsconde[i].classList.add('esconde');
        console.log(i);
    }
}


function saudacao(){
    
    nome = recebeNome();
    idade = recebeIdade();
    curso = recebeCurso();
    document.getElementById("saudacao").innerHTML = "Seja bem vindo " + nome + " Em que posso ajudar? "+ idade+ " "+curso;
    
    // esconde();
}



