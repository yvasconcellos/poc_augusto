import TableData from '@/components/Table'
import Image from 'next/image'
import { users } from '../../utils/utils'
import ModalForms from '@/components/Modal'

export default function name() {
  return (
    <div className="flex justify-center bg-gradient-to-b from-white to-pink-300 h-screen">
      <div className="container flex flex-col gap-32">
        <div className="flex justify-between p-4 w-full">
          <div>
            <Image
              className="rounded-lg"
              alt="Imagem Carrossel"
              src={`https://picsum.photos/70/70`}
              width={70}
              height={70}
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <p className="font-semibold ">Bem vindo, Augusto</p>
              <p>Fazer Logout</p>
            </div>
            <Image
              className="rounded-full"
              alt="Imagem Carrossel"
              src={`https://picsum.photos/70/70`}
              width={70}
              height={70}
            />
          </div>
        </div>
        <div className="bg-white flex flex-col px-8 py-16 gap-8 rounded-lg">
          <div className="flex justify-end p-4">
            <ModalForms />
          </div>
          <TableData users={users} />
        </div>
      </div>
    </div>
  )
}
