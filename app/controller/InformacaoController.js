class InformacaoController {

  constructor(){

    let $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputTemperatura = $('#temperatura');
    this._inputOxigenacao = $('#oxigenacao');
    this._inputPressao = $('#pressao');
    this._inputTroca = $('#troca');
    this._inputTraqueo = $('#traqueo');
    this._inputFono = $('#fono');
    this._inputFisio = $('#fisio');
    this._inputTipoHumor = $('#tipohumor');
    this._inputResponsavelRegistro = $('#responsavelRegistro');

  }

  adiciona (event) {

    event.preventDefault();

    let helper = new DateHelper();
    let data = new DateHelper().textoParaData(this._inputData.value);
    
    let informacao = new Informacao(
      data,
      this._inputResponsavelRegistro.value,
      this._inputTroca.value,
    );
    console.log(informacao);

    console.log(helper.dataParaTexto(negociacao.data));
    
  }
}



