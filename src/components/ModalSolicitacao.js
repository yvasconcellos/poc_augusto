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
    // Select
  } from '@chakra-ui/react'
  import React, { useState } from 'react'
  
  export default function ModalSolicitacao() {
    const [cliente, setCliente] = useState('')
  
    const [solicitacao, setSolicitacao] = useState('')
  
    const handleClientChange = (e) => {
      setCliente(e.target.value)
    }
  

  
    const handleSolicitacaoChange = (e) => {
      setSolicitacao(e.target.value)
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const solicitacao = {
        cliente,
        solicitacao,
      }
      console.log('submit', solicitacao)
    }
  
    const { isOpen, onOpen, onClose } = useDisclosure()
  
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
                  <Input value={cliente} onChange={handleClientChange} />
                </div>
                <div>
                  <FormLabel>Serviço</FormLabel>
                  <Input value={solicitacao} onChange={handleSolicitacaoChange} />
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
  