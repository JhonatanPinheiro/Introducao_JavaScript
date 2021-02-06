var capturando_nota1 = 0;
var capturando_nota2 = 0;
var capturando_nota3 = 0;
var calculando_media = 0;

var capturando_peso_nota1 = 0;
var capturando_peso_nota2 = 0;
var capturando_peso_nota3 = 0;

var nome_completo_aluno = "";

var media = "";




function botao_calcular_media(){

   capturando_nota1 = document.getElementById('value_nota1').value; // Pegando o dado campo 
   capturando_peso_nota1 = document.getElementById('value_peso_nota1').value;

   
//    document.getElementById('valorDigitado').innerHTML = capturando_nota1; //Jogando o dado pego do campo, para o local requisitado ( <p id="valorDigitado" ></p> ) 

   capturando_nota2 = document.getElementById('value_nota2').value;
   capturando_peso_nota2 = document.getElementById('value_peso_nota2').value;
//    document.getElementById('valorDigitado').innerHTML = capturando_nota2;

   capturando_nota3 = document.getElementById('value_nota3').value;
   capturando_peso_nota3 = document.getElementById('value_peso_nota3').value;
//    document.getElementById('valorDigitado').innerHTML = capturando_nota3;

    nome_completo_aluno = document.getElementById('nome_completo_aluno').value;
 


    calculando_media = ( 
        media = 
         (parseFloat(capturando_nota1) * parseFloat(capturando_peso_nota1)) +
         (parseFloat(capturando_nota2) * parseFloat(capturando_peso_nota2)) +
         (parseFloat(capturando_nota3) * parseFloat(capturando_peso_nota3))
     );
    



     if(media >= 6){
         document.getElementById('valorDigitado').innerHTML = "A média do Aluno: " +  nome_completo_aluno.toUpperCase() + "<br><br> <span class='span-media-aprovado-aluno-js'>"+  calculando_media + "</span> <br><br>";
         document.getElementById('imgAprovacao').innerHTML = "<img class='img-selo-aprovado' src='img/aprovado.png'>";

    }else{
        document.getElementById('valorDigitado').innerHTML = "A média do Aluno: " + nome_completo_aluno.toUpperCase() + "<br><br> <span class='span-media-reprovado-aluno-js'> " +  calculando_media + "<span> <br><br>";
        document.getElementById('imgAprovacao').innerHTML = "<img  class='img-selo-reprovado' src='img/reprovado.png'>";
    }
        
}


console.log()

function aprovar(){


}






// var capturando_nota1 = "";

// function botao_calcular_media(){
//     capturando_nota1 = document.getElementById('value_nota1').value;

//     document.getElementById('valorDigitado').innerHTML = capturando_nota1;
// }