import TableCliente from '@/components/TableCliente'
import { headerUsers, users } from '../../utils/utils'
import ModalCliente from '@/components/ModaCliente'
import Header from '@/components/Header'

export default function name() {
  return (
    <div className="flex justify-center bg-pink-100 h-screen">
      <div className="container flex flex-col gap-32">
        <Header />
        <div className="bg-white flex flex-col px-8 py-16 gap-8 rounded-lg">
          <div className="flex justify-end p-4">
            <ModalCliente />
          </div>
          <TableCliente users={users} headers={headerUsers} />
        </div>
      </div>
    </div>
  )
}
