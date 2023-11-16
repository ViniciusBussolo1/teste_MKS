import { HandleProductContext } from '@/context/HandleProductContext'
import { ItemsProdutosCarrinho } from '@/types/type'
import { Plus, Minus, X } from 'lucide-react'
import Image from 'next/image'
import { useContext } from 'react'

export function ItemCarrinho({
  id,
  name,
  photo,
  price,
  qtd,
}: ItemsProdutosCarrinho) {
  const { carrinho, setCarrinho } = useContext(HandleProductContext)

  const handleDeleteProduct = (id: number) => {
    const novoCarrinho = carrinho.filter((item) => item.id !== id)
    setCarrinho(novoCarrinho)
  }

  const handleMinusQtd = (qtd: number, id: number) => {
    if (qtd === 1) {
      return null
    } else {
      const index = carrinho.findIndex((item) => item.id === id)

      const itemAlterado = { ...carrinho[index], qtd: qtd - 1 }

      const novoCarrinho = [...carrinho]
      novoCarrinho[index] = itemAlterado

      setCarrinho(novoCarrinho)
    }
  }

  const handlePlusWtd = (qtd: number, id: number) => {
    const index = carrinho.findIndex((item) => item.id === id)

    const itemAlterado = { ...carrinho[index], qtd: qtd + 1 }

    const novoCarrinho = [...carrinho]
    novoCarrinho[index] = itemAlterado

    setCarrinho(novoCarrinho)
  }

  return (
    <div className="max-w-[15.625rem] min-[426px]:max-w-[23.688rem] w-full h-[13.75rem] min-[426px]:h-[5.938rem] bg-white rounded-lg shadow-shadow-item-carrinho flex flex-col min-[426px]:flex-row justify-evenly items-center relative pl-6 pr-5">
      <div
        className="h-[1.125rem] w-[1.125rem] bg-black flex justify-center items-center absolute top-[-0.438rem] right-[-0.313rem] rounded-full cursor-pointer"
        onClick={() => handleDeleteProduct(id)}
      >
        <X color="white" />
      </div>
      <Image src={photo} alt={name} width={80} height={95} />
      <h1 className="min-[426px]:max-w-[7.063rem] max-[425px]:text-center w-full text-base leading-[1.063rem] text-[#2C2C2C] min-[426px]:ml-[1.313rem]">
        {name}
      </h1>
      <div className="flex items-center gap-6 min-[426px]:gap-4 min-[426px]:ml-4">
        <div className="max-w-[3.125rem] w-full flex flex-col">
          <span className="text-xs leading-normal text-black max-[425px]:hidden">
            Qtd:
          </span>
          <div className="w-full flex justify-center items-center gap-2 rounded min-[426px]:border-[0.019rem] min-[426px]:border-[#BFBFBF]">
            <Minus
              color="black"
              className="cursor-pointer max-[425px]:w-7 w-3"
              onClick={() => handleMinusQtd(qtd, id)}
            />{' '}
            <span className="text-xl min-[426px]:text-sm leading-normal text-black">
              {qtd}
            </span>{' '}
            <Plus
              color="black"
              className="cursor-pointer max-[425px]:w-7 w-3"
              onClick={() => handlePlusWtd(qtd, id)}
            />
          </div>
        </div>
        <div className="max-[425px]:w-[5.25rem] max-[425px]:h-[2.175rem] max-[425px]:bg-[#373737] max-[425px]:rounded-[0.313rem] max-[425px]:flex max-[425px]:justify-center max-[425px]:items-center">
          <span className="text-sm leading-[1.063rem] text-white min-[426px]:text-black font-bold">
            R${parseInt(price) * qtd}
          </span>
        </div>
      </div>
    </div>
  )
}
