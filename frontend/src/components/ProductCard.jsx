import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div
      className="
      bg-white
      dark:bg-gray-900
      rounded-xl
      border
      border-gray-200
      dark:border-gray-800
      p-5
      flex
      flex-col
      justify-between
      shadow-sm
      hover:shadow-2xl
      hover:-translate-y-1
      transition-all
      duration-300
      group
    "
    >
      {/* Product Info */}
      <div>
        <div className="flex justify-between items-start gap-2">

          <h3 className="text-lg font-semibold text-gray-800 dark:text-white leading-tight group-hover:text-blue-600 transition">
            {product.name}
          </h3>

          <span
            className="
            text-xs
            font-medium
            bg-blue-100
            text-blue-700
            dark:bg-blue-900/40
            dark:text-blue-300
            px-2
            py-1
            rounded-md
            whitespace-nowrap
          "
          >
            {product.category}
          </span>

        </div>

        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-4">
          ${product.price}
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Premium quality product
        </p>
      </div>

      {/* Button */}
      <Link
        to={`/product/${product._id}`}
        className="
        mt-6
        inline-flex
        items-center
        justify-center
        gap-2
        w-full
        bg-gradient-to-r
        from-blue-600
        to-indigo-600
        text-white
        font-medium
        py-2
        rounded-md
        hover:from-blue-700
        hover:to-indigo-700
        transition
      "
      >
        View Details
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default React.memo(ProductCard);

// Why React.memo?

// Prevents unnecessary re-renders when list updates.