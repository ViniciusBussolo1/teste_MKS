import { Carrinho } from '@/components/Carrinho/Carrinho'
import { HandleProductContext } from '@/context/HandleProductContext'
import { fireEvent, getAllByText, render } from '@testing-library/react'

import '@testing-library/jest-dom'
import { ItemsProdutosCarrinho } from '@/types/type'

describe('Carrinho', () => {
  it('should render the component correctly when the cart is open', () => {
    const contextValues = {
      carrinho: [],
      carrinhoIsOpen: true,
      setCarrinhoIsOpen: jest.fn(),
      setCarrinho: jest.fn(),
    }

    const { getByTestId } = render(
      <HandleProductContext.Provider value={contextValues}>
        <Carrinho />
      </HandleProductContext.Provider>,
    )

    expect(getByTestId('carrinho')).toHaveTextContent('Carrinho de compras')
  })

  it('should close the cart correctly', () => {
    const contextValues = {
      carrinho: [],
      carrinhoIsOpen: true,
      setCarrinhoIsOpen: jest.fn(),
      setCarrinho: jest.fn(),
    }

    const { getByTestId } = render(
      <HandleProductContext.Provider value={contextValues}>
        <Carrinho />
      </HandleProductContext.Provider>,
    )

    fireEvent.click(getByTestId('fechar'))

    expect(contextValues.setCarrinhoIsOpen).toHaveBeenCalledWith(false)
  })

  it('should list a product when added to cart', () => {
    const contextValues = {
      carrinho: [] as ItemsProdutosCarrinho[],
      carrinhoIsOpen: true,
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

    render(
      <HandleProductContext.Provider value={contextValues}>
        <Carrinho />
      </HandleProductContext.Provider>,
    )

    expect(getAllByText(document.body, 'Item de Teste')).toHaveLength(1)
  })
})
