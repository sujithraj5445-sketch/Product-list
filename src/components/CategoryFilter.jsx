import React from 'react'

const CategoryFilter = ({ category, setCategory}) => {
  return (
    <div className="flex justify-center">
  <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-4">
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
    >
       <option value="All">All Categories</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
    </select>
  </div>
</div>
  )
}

export default CategoryFilter