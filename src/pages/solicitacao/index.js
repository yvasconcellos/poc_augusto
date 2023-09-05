import { headerSolicitacoes, solicitacoes } from '../../../utils/utils'
import Header from '@/components/Header'
import ModalSolicitacao from '@/components/ModalSolicitacao'
import TableSolicitacao from '@/components/TableSolicitacao'

export default function name() {
  return (
    <div className="flex justify-center bg-pink-100 h-screen">
      <div className="container flex flex-col gap-32">
        <Header />
        <div className="bg-white flex flex-col px-8 py-16 gap-8 rounded-lg">
          <div className="flex justify-end p-4">
            <ModalSolicitacao />
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
