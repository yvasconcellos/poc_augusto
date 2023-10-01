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
  Select
  // Select
} from '@chakra-ui/react'
import React, { useState } from 'react'

export default function ModalSolicitacao({ getSolicitacao }) {
  const [cliente, setCliente] = useState([])

  const [solicitacao, setSolicitacao] = useState([])
  // const [postData, setPostData] = useState({})
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)

  // const { loading, error } = usePost('134.209.116.118/solicitacao', postData);

  // useEffect(() => {
  //   async function fetchDataServico() {
  //     try {
  //       const response = await fetch('http://134.209.116.118/servico')
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok')
  //       }
  //       const jsonData = await response.json()
  //       setSolicitacao(jsonData)
  //       setLoading(false)
  //     } catch (error) {
  //       setError(error)
  //       setLoading(false)
  //     }
  //   }

  //   async function fetchDataCliente() {
  //     try {
  //       const response = await fetch('http://134.209.116.118/servico')
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok')
  //       }
  //       const jsonData = await response.json()
  //       setCliente(jsonData)
  //       setLoading(false)
  //     } catch (error) {
  //       setError(error)
  //       setLoading(false)
  //     }
  //   }

  //   fetchDataServico()
  //   fetchDataCliente()
  // }, [])

  const handleClientChange = (e) => {
    setCliente(e.target.value)
  }

  const handleSolicitacaoChange = (e) => {
    setSolicitacao(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const solicitacao = {
      clienteId: cliente,
      solicitacaoId: solicitacao
    }
    // setPostData(solicitacao)
    getSolicitacao()
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  // if (loading) {
  //   return <div>Loading...</div>
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>
  // }
  return (
    <>
      <Button colorScheme="messenger" onClick={onOpen}>
        NOVA SOLICITAÇÃO
      </Button>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>NOVA SOLICITAÇÃO</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text fontWeight="bold" mb="1rem">
              CRIE NOVAS SOLICITAÇÕES DE SERVIÇO
            </Text>
            <FormControl isRequired className="flex flex-col gap-2">
              <div>
                <FormLabel>Cliente</FormLabel>
                <Select onChange={handleClientChange}>
                  {cliente.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nome}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <FormLabel>Serviço</FormLabel>
                <Select onChange={handleSolicitacaoChange}>
                  {solicitacao.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nome}
                    </option>
                  ))}
                </Select>
              </div>
              {/* <div>
                  <FormLabel>Tipo</FormLabel>
                  <Select
                    placeholder="Selecione uma opção"
                    value={tipo}
                    onChange={handleTipoChange}
                  >
                    <option value="Pessoa">Pessoa</option>
                    <option value="Empresa">Empresa</option>
                  </Select>
                </div> */}
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
