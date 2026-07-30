import React from 'react'
import { productdata } from '../Productdata/Product'
import Product from './Product'


const Products = ({ sortBy, category, search }) => {
  const filtered = productdata
    .filter((p) => (category && category !== 'All' ? p.category === category : true))
    .filter((p) => p.title.toLowerCase().includes((search || '').toLowerCase()))
    


  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'priceLowHigh') return a.price - b.price
    if (sortBy === 'priceHighLow') return b.price - a.price
    if (sortBy === 'rating') return b.rating.rate - a.rating.rate
    return 0
  })

  return (
    <div className='px-10 py-8'>
      <h1 className='text-4xl font-extrabold text-center text-transparent bg-linear-to-r 
        from-purple-600 to-pink-500 mb-8 bg-clip-text'>Our Products</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            sorted.map((p)=>(
              <Product key={p.id} title={p.title} description={p.description} category={p.category} image={p.image} rate={p.rating.rate} count={p.rating.count}
              price={p.price} />
            ))
          }

        </div>

    </div>
  )
}

export default Products