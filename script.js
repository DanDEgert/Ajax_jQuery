$(document).ready(function(){
 
  $("button").click(function(){

    let data = new Date();
    let dataFormatada = (data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate() )) ;                 
    console.log(dataFormatada);
    console.log('teste');
    $.get("https://apitempo.inmet.gov.br/condicao/capitais/"+dataFormatada, function(data, status){
      // alert("Data: " + data + "\nStatus: " + status);

      console.log(status);

      for(x=0;x<data.length;x++ ) {
      console.log(`${x} - Capital ${data[x].CAPITAL} - temperatura maxima ${data[x].TMAX18}`);  
      }
      

      $("#resultado").html(`Muleke a capital é <strong>${data[2].CAPITAL}</strong><br>Temperatura MÁXIMA= ${data[2].TMAX18}`);
    });//fim get
    
  });//fim button
  })