import { Header } from './components/Header'
import { Categories } from './components/Categories'
import { Sort } from './components/Sort'
import { PizzaBlock } from './components/PizzaBlock'

import pizzaImage from './assets/img/pizza.png'

export const App = () => {
  const pizzas = [
    {
      id: 0,
      imageUrl: pizzaImage,
      title: 'Пепперони Фреш с перцем',
      types: [0, 1],
      sizes: [26, 30, 40],
      price: 803,
      category: 0,
      rating: 4,
    },
    {
      id: 1,
      imageUrl: pizzaImage,
      title: 'Сырная',
      types: [0],
      sizes: [26, 40],
      price: 245,
      category: 0,
      rating: 6,
    },
    {
      id: 2,
      imageUrl: pizzaImage,
      title: 'Цыпленок барбекю',
      types: [0],
      sizes: [26, 40],
      price: 295,
      category: 1,
      rating: 4,
    },
    {
      id: 3,
      imageUrl: pizzaImage,
      title: 'Кисло-сладкий цыпленок',
      types: [1],
      sizes: [26, 30, 40],
      price: 275,
      category: 2,
      rating: 2,
    },
    {
      id: 4,
      imageUrl: pizzaImage,
      title: 'Чизбургер-пицца',
      types: [0, 1],
      sizes: [26, 30, 40],
      price: 415,
      category: 3,
      rating: 8,
    },
    {
      id: 5,
      imageUrl: pizzaImage,
      title: 'Крэйзи пепперони',
      types: [0],
      sizes: [30, 40],
      price: 580,
      category: 2,
      rating: 2,
    },
    {
      id: 6,
      imageUrl: pizzaImage,
      title: 'Пепперони',
      types: [0, 1],
      sizes: [26, 30, 40],
      price: 675,
      category: 1,
      rating: 9,
    },
    {
      id: 7,
      imageUrl: pizzaImage,
      title: 'Маргарита',
      types: [0, 1],
      sizes: [26, 30, 40],
      price: 450,
      category: 4,
      rating: 10,
    },
    {
      id: 8,
      imageUrl: pizzaImage,
      title: 'Четыре сезона',
      types: [0, 1],
      sizes: [26, 30, 40],
      price: 395,
      category: 5,
      rating: 10,
    },
    {
      id: 9,
      imageUrl: pizzaImage,
      title: 'Овощи и грибы 🌱',
      types: [0, 1],
      sizes: [26, 30, 40],
      price: 285,
      category: 5,
      rating: 7,
    },
  ]

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
            {pizzas.map((pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
