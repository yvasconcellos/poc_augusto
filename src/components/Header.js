import Image from 'next/image'

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
