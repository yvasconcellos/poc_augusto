import TableCliente from '@/components/TableCliente'
import { headerUsers, users } from '../../utils/utils'
import ModalCliente from '@/components/ModaCliente'
import Header from '@/components/Header'
// import useFetch from '../../utils/useFetch'

export default function Inicio() {
  // const { data, loading, error } = useFetch(
  //   'https://134.209.116.118/usuario/CLIENTE'
  // )

  // if (loading) {
  //   return <div>Loading...</div>
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>
  // }

  // async function getClients() {
  //   const res = await fetch('https://134.209.116.118/usuario/CLIENTE')
  //   const data = await res.json()
  //   return data
  // }

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
