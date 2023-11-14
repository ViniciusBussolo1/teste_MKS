import Image from 'next/image'
import Teste from '../../../public/teste.svg'
import Sacola from '../../../public/Sacola.svg'

export function Item() {
  return (
    <div className="max-w-[13.625rem] w-full pt-[1.125rem] flex flex-col items-center justify-center">
      <Image src={Teste} alt="Teste" />
      <div className="flex items-center mt-[0.875rem] pr-3 pl-[0.875rem]">
        <h3 className="text-base leading-[1.188rem] font-normal text-[#2C2C2C]">
          Apple Watch Series 4 GPS
        </h3>
        <div className="max-w-[4rem] w-full h-[1.625rem] bg-[#373737] rounded-[0.313rem] flex items-center justify-center">
          <span className="text-[0.938rem] leading-[0.938rem] font-bold text-white">
            R$399
          </span>
        </div>
      </div>
      <span className="text-[0.625rem] leading-[0.75rem] font-light text-[#2C2C2C] mt-2 pr-3 pl-[0.875rem]">
        Redesigned from scratch and completely revised.
      </span>
      <button className="w-full h-[1.994rem] bg-[#0F52BA] hover:bg-[#3c629b] rounded-b-lg flex justify-center items-center gap-[0.875rem] mt-3 text-sm leading-[1.125rem] font-semibold text-white uppercase">
        <Image src={Sacola} alt="Icone de uma sacola" />
        Comprar
      </button>
    </div>
  )
}
