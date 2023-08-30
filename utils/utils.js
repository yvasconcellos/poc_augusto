import axios from 'axios'

const main_api = 'http://localhost:8080/'

export const getUsers = async () => {
  const { data } = await axios.get(main_api + 'ms-contabil/usuario')
  return data
}

export const createUser = async (user) => {
  const { data } = await axios.post(
    main_api + 'ms-contabil/usuario/CLIENTE',
    user
  )
  return data
}

export const users = [
  {
    nome: 'Augusto',
    documento: '123456789',
    tipo: 'PESSOA',
    contato: '75999999999'
  },
  {
    nome: 'Augusto',
    documento: '123456789',
    tipo: 'PESSOA',
    contato: '75999999999'
  },
  {
    nome: 'Augusto',
    documento: '123456789',
    tipo: 'EMPRESA',
    contato: '75999999999'
  }
]
