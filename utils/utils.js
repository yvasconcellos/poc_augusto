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

export const headerUsers = ['Nome', 'Documento', 'Tipo', 'Contato', 'Ações']

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

export const headerSolicitacoes = [
  'Cliente',
  'Serviço',
  'Iniciado',
  'Data de Entrega',
  'Ações'
]

export const solicitacoes = [
  {
    cliente: 'Cliente X',
    servico: 'Declaração de Imposto de Renda',
    iniciado: true,
    entrega: '05/09/2023'
  },
  {
    cliente: 'Cliente X',
    servico: 'Declaração de Imposto de Renda',
    iniciado: true,
    entrega: '05/09/2023'
  },
  {
    cliente: 'Cliente X',
    servico: 'Declaração de Imposto de Renda',
    iniciado: false,
    entrega: '05/09/2023'
  }
]
