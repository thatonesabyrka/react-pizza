import { useEffect, useState } from 'react'
import axios from 'axios'
import { Categories } from '../components/Categories'
import { Sort } from '../components/Sort'
import { PizzaBlock, Skeleton } from '../components/PizzaBlock'

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

export const HomePage = () => {
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
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </>
  )
}
