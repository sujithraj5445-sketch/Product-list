import React from 'react'

const Product = ({ title, image, price, description, category, rate, count }) => {
  return (
    <div className="bg-white rounded-2xl border border-purple-200 shadow-lg p-4 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-contain"
      />

      <span className="inline-block w-fit px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full">
        {category}
      </span>

      <h2 className="text-lg font-semibold line-clamp-2 min-h-14">
        {title}
      </h2>

      <p className="text-gray-600 text-sm">
        {description.substring(0, 80)}...
      </p>

      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold text-blue-600">${price}</p>

        <div className="text-sm text-gray-600">
          ⭐ {rate} ({count})
        </div>
      </div>

      <button
        onClick={() => {
          console.log(title)
          
        }}
        className="mt-auto w-full bg-linear-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white py-2 rounded-lg hover:scale-105 transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default Product
