function Ligar(){
    var Ligar = document.getElementById('LampadaDesligada');
     Ligar.src="ligada.jpg"
    document.getElementById("text").innerHTML="LIGADA";
}

function Desligar(){
    var Desligar = document.getElementById('LampadaDesligada');
      Desligar.src="desligada.jpg"
   document.getElementById("text").innerHTML="DESLIGADA";
}