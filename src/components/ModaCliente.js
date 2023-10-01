/* eslint-disable prettier/prettier */
import {
  Modal,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select
} from '@chakra-ui/react'
import React, { useState } from 'react'
import PhoneMaskInput from './PhoneMaskInput'
import CnpjMaskInput from './CnpjMaskInput'
import CpfMaskInput from './CpfMaskInput'
// import usePost from '../../utils/usePost'

export default function ModalCliente() {
  const [nome, setNome] = useState('')

  const [phoneNumber, setPhoneNumber] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [tipo, setTipo] = useState('')
  // const [postData, setPostData] = useState({});
  // const { loading, error } = usePost('134.209.116.118/usuario/CLIENTE', postData);


  const handleNameChange = (e) => {
    setNome(e.target.value)
  }

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value)
  }

  const handleCnpjChange = (e) => {
    setCnpj(e.target.value)
  }

  const handleCpfChange = (e) => {
    setCpf(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleTipoChange = (e) => {
    setTipo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // const user = { pessoa: {
    //   nome,
    //   tipo,    
    //   contato: {
    //     telefone: phoneNumber,
    //     email
    //   },
    //   [tipo === 'Empresa' ? 'cnpj' : 'cpf']: tipo === 'Empresa' ? cnpj : cpf
    // }
    // }
    // // setPostData(user)
    // getClients()
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <>
      <Button colorScheme="messenger" onClick={onOpen}>
        NOVO CLIENTE
      </Button>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>TELA DE CRIAÇÃO</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text fontWeight="bold" mb="1rem">
              ADICIONE NOVOS CLIENTES AO SISTEMA
            </Text>
            <FormControl isRequired className="flex flex-col gap-2">
              <div>
                <FormLabel>Nome</FormLabel>
                <Input value={nome} onChange={handleNameChange} />
              </div>
              <div>
                <FormLabel>Email</FormLabel>
                <Input value={email} onChange={handleEmailChange} />
              </div>
              <div>
                <FormLabel>Tipo</FormLabel>
                <Select
                  placeholder="Selecione uma opção"
                  value={tipo}
                  onChange={handleTipoChange}
                >
                  <option value="Pessoa">Pessoa</option>
                  <option value="Empresa">Empresa</option>
                </Select>
              </div>
              <div>
                <FormLabel>Telefone</FormLabel>
                <PhoneMaskInput
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
              </div>
              <div>
                <FormLabel>Documento</FormLabel>
                {tipo === 'Empresa' ? (
                  <CnpjMaskInput value={cnpj} onChange={handleCnpjChange} />
                ) : (
                  <CpfMaskInput value={cpf} onChange={handleCpfChange} />
                )}
              </div>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Salvar
            </Button>
            <Button onClick={onClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
