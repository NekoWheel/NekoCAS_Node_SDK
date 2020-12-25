const axios = require('axios');

class NekoCAS {
  constructor(domain, secret){
    this._domain = domain
    this._secret = secret
  }

  get domain() {
    return this._domain
  }

  set domain(domain) {
    this._domain = domain
  }

  get secret() {
    return this._secret
  }

  set secret(domain) {
    this._domain = secret
  }

  async validate(ticket) {
    var param = {
      ticket: ticket,
      service: this._secret
    }
    var res = await axios(`${this._domain}/validate`, { params: param }).then((res) => {
      return res.data
    }).catch((err) => {
      throw new Error(err.response ? err.response.data.message : err)
    })
    return {
      name: res.data.name,
      email: res.data.email,
      token: res.data.token,
      message: res.message
    }
  }

}

module.exports = NekoCAS
