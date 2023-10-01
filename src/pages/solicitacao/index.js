import { headerSolicitacoes, solicitacoes } from '../../../utils/utils'
import Header from '@/components/Header'
import ModalSolicitacao from '@/components/ModalSolicitacao'
import TableSolicitacao from '@/components/TableSolicitacao'
// import useFetch from '../../../utils/useFetch'

export default function Solicitacao() {
  // const { data, loading, error } = useFetch('http://134.209.116.118/servico')

  // if (loading) {
  //   return <div>Loading...</div>
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>
  // }

  async function getSolicitacao() {
    const res = await fetch('http://134.209.116.118/servico')
    const data = await res.json()
    console.log(data)
    return data
  }
  return (
    <div className="flex justify-center bg-pink-100 h-screen">
      <div className="container flex flex-col gap-32">
        <Header />
        <div className="bg-white flex flex-col px-8 py-16 gap-8 rounded-lg">
          <div className="flex justify-end p-4">
            <ModalSolicitacao getSolicitacao={getSolicitacao} />
          </div>
          <TableSolicitacao
            solicitacoes={solicitacoes}
            headers={headerSolicitacoes}
          />
        </div>
      </div>
    </div>
  )
}
