import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons'
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'

export default function TableCliente({ headers, users }) {
  return (
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
          {users.map((user, index) => (
            <Tr key={index}>
              <Td textAlign={'center'}>{user.nome}</Td>
              <Td textAlign={'center'}>{user.documento}</Td>
              <Td textAlign={'center'}>
                <div className="flex justify-center">
                  <div
                    className={`p-2 bg-slate-200 rounded-lg w-fit font-medium ${
                      user.tipo === 'PESSOA'
                        ? 'text-purple-600'
                        : 'text-lime-600'
                    } text-`}
                  >
                    {user.tipo}
                  </div>
                </div>
              </Td>
              <Td textAlign={'center'}>{user.contato}</Td>
              <Td textAlign={'center'}>
                <div className="flex justify-center gap-2">
                  <ViewIcon color={'blue.600'} />
                  <EditIcon color={'green.600'} />
                  <DeleteIcon color={'red.600'} />
                </div>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
