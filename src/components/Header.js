import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
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
        <Link href="/">
          <button className="hover:text-pink-500">Home</button>
        </Link>
        <Link href="/solicitacao">
          <button className="hover:text-pink-500">Solicitações</button>
        </Link>
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
  )
}
