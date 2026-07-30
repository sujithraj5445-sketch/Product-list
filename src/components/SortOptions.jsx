import React from 'react'



const sortOptions = ({ sortBy, setSortBy }) => {
  return (
    <div className='flex justify-center mt-4'>
      <div className='w-full max-w-md bg-white rounded-xl shadow-lg p-4'>
        <select value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500'>
          <option value="default">Sort by</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="rating">Rating: High to Low</option>



        </select>

      </div>


    </div>
  )
}

export default sortOptions