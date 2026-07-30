import React from 'react'
import Navbar from './components/Navbar'
import CategoryFilter from './components/CategoryFilter'
import SortOptions from './components/SortOptions'
import Products from './components/Products'
import { useState } from 'react'



const App = () => {
  const [category, setCategory] = useState('All')
  const [sortBy, setSortBy] = useState('default')
  const [search, setSearch] = useState('')

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      <CategoryFilter category={category} setCategory={setCategory} />
      <SortOptions sortBy={sortBy} setSortBy={setSortBy} />.
      <Products category={category} sortBy={sortBy} search={search} />

    </div>
  )
}

export default App
