import { Header } from './components/Header'
import { Categories } from './components/Categories'
import { Sort } from './components/Sort'
import { PizzaBlock } from './components/PizzaBlock'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface Pizza {
  id: number
  imageUrl: string
  title: string
  types: number[]
  sizes: number[]
  price: number
  category: number
  rating: number
}

export const App = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const { data } = await axios.get<Pizza[]>(
          'https://b31c7cb4cec48f6f.mokky.dev/pizzas',
        )
        setPizzas(data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPizzas()
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading ? (
              <p>Загрузка...</p>
            ) : (
              pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
