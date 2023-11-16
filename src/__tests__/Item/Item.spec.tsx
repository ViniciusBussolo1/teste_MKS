import { Item } from '@/components/Item/Item'
import { HandleProductContext } from '@/context/HandleProductContext'
import { ItemsProdutosCarrinho } from '@/types/type'
import { fireEvent, getAllByText, render } from '@testing-library/react'

import '@testing-library/jest-dom'

describe('Item', () => {
  it('should Item renders correctly and when clicking the button, it is added to the cart', () => {
    const contextValues = {
      carrinho: [],
      carrinhoIsOpen: false,
      setCarrinhoIsOpen: jest.fn(),
      setCarrinho: jest.fn(),
    }

    const { getByText } = render(
      <HandleProductContext.Provider value={contextValues}>
        <Item
          id={1}
          name="Produto Teste"
          photo="/caminho/para/foto.jpg"
          price="50.99"
          description="Descrição do produto"
        />
      </HandleProductContext.Provider>,
    )

    expect(getAllByText(document.body, 'Produto Teste')).toHaveLength(1)
    expect(getAllByText(document.body, 'R$50')).toHaveLength(1)

    fireEvent.click(getByText('Comprar'))

    expect(contextValues.setCarrinho).toHaveBeenCalledWith([
      {
        id: 1,
        name: 'Produto Teste',
        photo: '/caminho/para/foto.jpg',
        price: '50.99',
        qtd: 1,
      },
    ])

    contextValues.setCarrinho.mockRestore()
  })

  it('should increments the quantity if the item is already in the cart', () => {
    const contextValues = {
      carrinho: [] as ItemsProdutosCarrinho[],
      carrinhoIsOpen: false,
      setCarrinhoIsOpen: jest.fn(),
      setCarrinho: jest.fn(),
    }

    const item = {
      id: 1,
      name: 'Item de Teste',
      photo: '/teste-foto.jpg',
      price: '10.99',
      description: 'dasdasdsa',
    }

    contextValues.carrinho = [{ ...item, qtd: 1 }]

    const { getByText } = render(
      <HandleProductContext.Provider value={contextValues}>
        <Item {...item} />
      </HandleProductContext.Provider>,
    )

    fireEvent.click(getByText('Comprar'))

    expect(contextValues.setCarrinho).toHaveBeenCalledWith([
      { ...item, qtd: 2 },
    ])
  })
})
