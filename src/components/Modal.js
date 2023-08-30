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
  Text
} from '@chakra-ui/react'
import React from 'react'

export default function ModalForms() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {/* <div className="p-4 bg-blue-500 rounded-lg">
        <button className="text-white" onClick={onOpen}>
          NOVO CLIENTE
        </button>
      </div> */}
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
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Salvar
            </Button>
            <Button onClick={onClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
