class Informacao {
  constructor(data, temperatura, oxigenacao, pressao, troca, traqueo, fono, fisio, tipohumor, reponsavelRegistro){
    
    this._data = new Date(data);
    this._temperatura = temperatura;
    this._oxigenacao = oxigenacao;
    this._pressao = pressao;
    this._troca = troca;
    this._traqueo = traqueo;
    this._fono = fono;
    this._fisio = fisio;
    this._tipohumor = tipohumor;
    this._responsavelRegistro = responsavelRegistro;
    Object.freeze(this);
  }

  get data() {
    return new Date(this._data.getTime());
  }

  get temperatura() {
    return this._temperatura;
  }

  get oxigenacao() {
    return this._oxigenacao;
  }

  get pressao() {
    return this._pressao;
  }

  get troca() {
    return this._troca;
  }

  get traqueo() {
    return this._traqueo;
  }

  get fono() {
    return this._fono;
  }

  get fisio() {
    return this._fisio;
  }

  get tipohumor() {
    return this._tipohumor;
  }

  get responsavelRegistro() {
    return this._responsavelRegistro;
  }
}

