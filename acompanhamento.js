var campos = [
  document.querySelector('#data'),
  document.querySelector('#temperatura'),
  document.querySelector('#oxigenacao'),
  document.querySelector('#pressao'),
  document.querySelector('#troca'),
  document.querySelector('#traqueo'),
  document.querySelector('#fono'),
  document.querySelector('#fisio'),
  document.querySelector('#tipohumor'),
  document.querySelector('#responsavelRegistro')
];
console.log(campos)

var tbody = document.querySelector('#table-info-body')
document.querySelector('.form').addEventListener('submit', function (event) {

  event.preventDefault();
  var tr = document.createElement('tr');
  
  campos.forEach(function(campo) {
    var td = document.createElement('td');
    td.textContent = campo.value;
    tr.appendChild(td);
  });

  tbody.appendChild(tr);
  
  campos[0].value = '';
  campos[1].value = '';
  campos[2].value = '';
  campos[3].value = '';
  campos[4].value = '';
  campos[5].value = '';
  campos[6].value = '';
  campos[7].value = '';
  campos[8].value = '';
  campos[9].value = '';
  });














// var botaoRegistrar = document.querySelector("#registra-info")
// botaoRegistrar.addEventListener("click",function(event){
//   event.preventDefault();

//   var form = document.querySelector("#form-adiciona");

//   var registro = obtemInfoFormulario(form);

//   // MONTA TR E TD
//   var registroTr = montaTr(registro);  

//   var tabela = document.querySelector("#table-info-body");

//   tabela.appendChild(registroTr);

//   if (registro.temperatura > 37) {
//     console.log("atenção")
//     temperaturaTd.classList.add("danger");
//   }

//   if (registro.oxigenacao < 92){
//     console.log("atenção");
//     oxigenacaoTd.classList.add("danger");
//   }

//   form.reset()
// });


// function obtemInfoFormulario (form) {
//   var registro = {
  
//     data: form.data.value,
//     temperatura: form.temperatura.value,
//     oxigenacao: form.oxigenacao.value,
//     pressao: form.pressao.value,
//     troca: form.troca.value,
//     traqueo: form.traqueo.value,
//     parecerFono: form.fono.value,
//     parecerFisio: form.fisio.value,
//     humor: form.tipohumor.value,
//     responsavel: form.responsavelRegistro.value
//   }

//   return registro;
// }


// function montaTr (registro) {
//   var registroTr = document.createElement("tr");

//   var dataTd = document.createElement("td");
//   var temperaturaTd = document.createElement("td");
//   var oxigenacaoTd = document.createElement("td");
//   var pressaoTd = document.createElement("td");
//   var trocaTd = document.createElement("td");
//   var traqueoTd = document.createElement("td");
//   var parecerFonoTd = document.createElement("td");
//   var parecerFisioTd = document.createElement("td");
//   var humorTd = document.createElement("td");
//   var responsavelTd = document.createElement("td");

//   dataTd.textContent = registro.data;
//   temperaturaTd.textContent = registro.temperatura;
//   oxigenacaoTd.textContent = registro.oxigenacao;
//   pressaoTd.textContent = registro.pressao;
//   trocaTd.textContent = registro.troca;
//   traqueoTd.textContent = registro.traqueo;
//   parecerFonoTd.textContent = registro.parecerFono;
//   parecerFisioTd.textContent = registro.parecerFisio;
//   humorTd.textContent = registro.humor;
//   responsavelTd.textContent = registro.responsavel;

//   registroTr.appendChild(dataTd);
//   registroTr.appendChild(temperaturaTd);
//   registroTr.appendChild(oxigenacaoTd);
//   registroTr.appendChild(pressaoTd);
//   registroTr.appendChild(trocaTd);
//   registroTr.appendChild(traqueoTd);
//   registroTr.appendChild(parecerFonoTd);
//   registroTr.appendChild(parecerFisioTd);
//   registroTr.appendChild(humorTd);
//   registroTr.appendChild(responsavelTd);


//   return registroTr;
// }