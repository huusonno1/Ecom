// src/components/ProductCard.tsx
import React from "react";
import { Product } from "../../../modules/product/product";
import img from "../../assets/imgs/Asgaard_sofa_1.png";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={img}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl text-gray-700">{product.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          Rs. {product.price.toLocaleString()}.00
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
