import { fireEvent, render, screen } from '@testing-library/react'
import { HandleProductContext } from '../../context/HandleProductContext'

import { Header } from '@/components/Header/Header'

import '@testing-library/jest-dom'
import { ItemsProdutosCarrinho } from '@/types/type'

describe('Header', () => {
  it('should call function setCarrinhoIsOpen', () => {
    const contextValues = {
      carrinho: [],
      carrinhoIsOpen: false,
      setCarrinhoIsOpen: jest.fn(),
      setCarrinho: jest.fn(),
    }

    render(
      <HandleProductContext.Provider value={contextValues}>
        <Header />
      </HandleProductContext.Provider>,
    )

    expect(screen.getByTestId('carrinho-length')).toHaveTextContent('0')

    const carrinhoIcon = screen.getByAltText('Icone de um carrinho')
    fireEvent.click(carrinhoIcon)

    expect(contextValues.setCarrinhoIsOpen).toHaveBeenCalledWith(true)
  })

  it('should change the cart size when adding an item', () => {
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

    render(
      <HandleProductContext.Provider value={contextValues}>
        <Header />
      </HandleProductContext.Provider>,
    )

    expect(screen.getByTestId('carrinho-length')).toHaveTextContent('1')
  })
})
