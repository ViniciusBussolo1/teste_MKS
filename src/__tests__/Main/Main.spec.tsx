import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Main } from '@/components/Main/Main'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import '@testing-library/jest-dom'

const mock = new MockAdapter(axios)

beforeEach(() => {
  mock.reset()
})

describe('Main', () => {
  it('should renders the product list', async () => {
    const queryClient = new QueryClient()

    const mockProducts = [
      { id: 1, name: 'Iphone', photo: 'dadas', price: '600', qtd: 0 },
      { id: 2, name: 'Ipad', photo: 'sss', price: '1800', qtd: 0 },
      { id: 3, name: 'Headseat', photo: 'ddd', price: '2000', qtd: 0 },
      { id: 4, name: 'Iphone', photo: 'dadas', price: '600', qtd: 0 },
      { id: 5, name: 'Ipad', photo: 'sss', price: '1800', qtd: 0 },
      { id: 6, name: 'Headseat', photo: 'ddd', price: '2000', qtd: 0 },
      { id: 7, name: 'Ipad', photo: 'sss', price: '1800', qtd: 0 },
      { id: 8, name: 'Headseat', photo: 'ddd', price: '2000', qtd: 0 },
    ]

    mock
      .onGet(
        'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC',
      )
      .reply(200, { testData: mockProducts })

    render(
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>,
    )

    await waitFor(() => {
      expect(screen.getAllByTestId('item')).toHaveLength(mockProducts.length)
    })

    expect(screen.getByTestId('span')).toBeInTheDocument()
  })
})
