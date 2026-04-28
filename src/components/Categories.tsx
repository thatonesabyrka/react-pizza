import { useState } from 'react'
import clsx from 'clsx'

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(1)

  const categories = [
    { id: 1, label: 'Все' },
    { id: 2, label: 'Мясные' },
    { id: 3, label: 'Вегетарианская' },
    { id: 4, label: 'Гриль' },
    { id: 5, label: 'Острые' },
    { id: 6, label: 'Закрытые' },
  ]

  return (
    <div className="categories">
      <ul>
        {categories.map(({ id, label }) => (
          <li
            key={id}
            className={clsx(id === activeCategory && 'active')}
            onClick={() => setActiveCategory(id)}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  )
}
