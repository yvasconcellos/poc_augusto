/* eslint-disable prettier/prettier */
import { CheckIcon, CloseIcon, EditIcon, ViewIcon } from '@chakra-ui/icons'
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Modal,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
  FormControl,
  Box
} from '@chakra-ui/react'

import Image from 'next/image'
import React, { useState } from 'react'

export default function TableSolicitacao({ headers, solicitacoes }) {
  const [code] = useState(
    '00020126580014br.gov.bcb.pix0136b76aa9c2-2ec4-4110-954e-ebfe34f05b61520400005303986540524.855802BR5918FSTwQkotCX_lCVSfYm6008ELYnDouT62230519mpqrinter13176152736304D595'
  )

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {headers.map((header, index) => (
                <Th textAlign={'center'} key={index}>
                  {header}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {solicitacoes.map((solicitacao, index) => (
              <Tr key={index}>
                <Td textAlign={'center'}>{solicitacao.cliente}</Td>
                <Td textAlign={'center'}>{solicitacao.servico}</Td>
                <Td textAlign={'center'}>
                  <div className="flex justify-center">
                    <div className={`p-2 rounded-lg w-fit font-medium`}>
                      {solicitacao.iniciado === true ? (
                        <CheckIcon color={'green.400'} />
                      ) : (
                        <CloseIcon color={'red.400'} />
                      )}
                    </div>
                  </div>
                </Td>
                <Td textAlign={'center'}>{solicitacao.entrega}</Td>
                <Td textAlign={'center'}>
                  <div className="flex justify-center gap-2">
                    <i className="fa-solid fa-qrcode" onClick={onOpen}></i>
                    <ViewIcon color={'blue.600'} />
                    <EditIcon color={'green.600'} />
                  </div>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={6}>
            <FormControl isRequired className="flex flex-col gap-4">
              <div className="flex justify-center">
                <Image
                  src="https://picsum.photos/200/200"
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <Box bg="gray.100" w="100%" p={4} color="gray.500" className='rounded-lg'>
                  {code}
                </Box>
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
            <div className='flex justify-center w-full'>

            <Button onClick={onClose} colorScheme="blue" px={14}>
              Sair
            </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
