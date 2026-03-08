import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductById } from "../api/productApi";

const ProductDetail = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {

    const loadProduct = async () => {
      const data = await fetchProductById(id);
      setProduct(data.data);
    };

    loadProduct();

  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
        <div className="animate-pulse bg-white p-8 rounded-xl shadow w-full max-w-xl">

          <div className="h-6 bg-gray-200 rounded w-3/4 mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-2xl mx-auto">

        <Link
          to="/"
          className="
            text-blue-600
            text-sm
            font-medium
            hover:underline
          "
        >
          ← Back to Dashboard
        </Link>

        <div
          className="
            bg-white
            rounded-xl
            shadow-md
            border
            border-gray-200
            p-8
            mt-4
          "
        >

          {/* Product Name */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {product.name}
          </h2>

          {/* Category Badge */}
          <span
            className="
              inline-block
              bg-blue-100
              text-blue-700
              text-xs
              font-semibold
              px-3
              py-1
              rounded-full
              mb-4
            "
          >
            {product.category}
          </span>

          {/* Price */}
          <p className="text-2xl font-bold text-gray-800 mb-6">
            ${product.price}
          </p>

          {/* Description */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Description
            </h4>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetail;