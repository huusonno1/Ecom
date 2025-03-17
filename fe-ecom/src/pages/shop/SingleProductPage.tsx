import { useState } from "react";
import React from "react";
import {
  Facebook,
  Instagram,
  PinIcon as Pinterest,
  Minus,
  Plus,
  Star,
} from "lucide-react";
import imgSofa_1 from "../../shared/assets/imgs/Mask_group_(1).png";
import imgSofa_2 from "../../shared/assets/imgs/Mask_group_(2).png";
import imgSofa_3 from "../../shared/assets/imgs/Mask_group_(3).png";
import imgSofa_4 from "../../shared/assets/imgs/Mask_group_(4).png";

import Header from "../../shared/components/Header/Header";
import Footer from "../../shared/components/Footer/Footer";
import TabsComponent from "../../shared/components/Tabs/Tabs";
import RelatedProduct from "../../shared/components/RelatedProduct/RelatedProduct";
import { Button } from "@headlessui/react";
import { Link } from "react-router-dom";

const images = [imgSofa_1, imgSofa_2, imgSofa_3, imgSofa_4];

const SingleProductPage: React.FC = () => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <Header></Header>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xl text-gray-500">
          <Link
            to="/"
            className="text-muted-foreground hover:text-primary font-semibold"
          >
            Home
          </Link>
          <span className="text-muted-foreground font-semibold">|</span>
          <Link
            to="/shop"
            className="text-muted-foreground hover:text-primary font-semibold"
          >
            Shop
          </Link>
          <span className="text-muted-foreground font-semibold">|</span>
          <span className="text-foreground font-semibold text-gray-900">
            Asgaard sofa
          </span>
        </div>

        {/* Product Main Section */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Product Images */}
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="order-2 mt-4 flex justify-start gap-4 md:order-1 md:mt-0 md:flex-col">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="h-20 w-20 cursor-pointer border-2 border-gray-300 p-1 shadow-sm hover:border-black"
                  onClick={() => setMainImage(img)}
                >
                  <img
                    src={img}
                    alt={`Sofa thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="order-1 flex flex-1 items-center justify-center bg-[#FFF9E5] p-6 md:order-2">
              <img
                src={mainImage}
                alt="Asgaard sofa"
                className="max-h-[400px] w-auto object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-medium">Asgaard sofa</h1>
            <p className="text-primary text-xl font-medium">Rs. 25,000.00</p>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-muted-foreground font-semibold">|</span>
              <span className="text-muted-foreground text-xl">
                (5 Customer reviews)
              </span>
            </div>

            <p className="text-muted-foreground">
              Setting the bar as the perfect outdoor sofa, the Asgaard is
              compact, good-weather ready with a rust-resistant aluminum frame,
              a clean design and comfortable legs for a modern look.
            </p>

            <div className="flex flex-col gap-4">
              <div className="gap-3">
                <span className="text-xl font-semibold text-gray-500">
                  Size:
                </span>
                <div className="flex gap-3 pt-4">
                  <button className="h-8 w-8 rounded-xl border border-gray-300 bg-[#FBEBB5]">
                    L
                  </button>
                  <button className="h-8 w-8 rounded-xl border border-gray-300 bg-[#FFF9E5]">
                    XL
                  </button>
                  <button className="h-8 w-8 rounded-xl border border-gray-300 bg-[#FFF9E5]">
                    XS
                  </button>
                </div>
              </div>

              <div className="text-xl font-semibold text-gray-500">
                <span className="font-medium">Color:</span>
                <div className="flex gap-2 pt-4">
                  <button className="h-8 w-8 rounded-full border border-gray-300 bg-blue-600"></button>
                  <button className="h-8 w-8 rounded-full border border-gray-300 bg-black"></button>
                  <button className="h-8 w-8 rounded-full border border-gray-300 bg-yellow-600"></button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center rounded-xl border-1">
                  <button
                    className="cursor-pointer px-3 py-4"
                    onClick={decreaseQuantity}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button
                    className="cursor-pointer px-3 py-4"
                    onClick={increaseQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button className="bg-primary hover:bg-primary/90 cursor-pointer rounded-xl border-2 px-8 py-3 font-semibold text-gray-900">
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex gap-x-4 gap-y-1 text-sm">
                <div className="pr-20">
                  <p className="text-base font-semibold">SKU:</p>
                  <p className="text-base font-semibold">Category:</p>
                  <p className="text-base font-semibold">Tags:</p>
                  <p className="text-base font-semibold">Share:</p>
                </div>
                <div>
                  <p className="text-base font-normal">SS001</p>
                  <p className="text-base font-normal">Sofas</p>
                  <p className="text-base font-normal">
                    Sofa, Chair, Home, Shop
                  </p>
                  <div className="flex gap-2">
                    <Facebook className="h-5 w-5" />
                    <Pinterest className="h-5 w-5" />
                    <Instagram className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}

        <TabsComponent></TabsComponent>

        {/* Related Products */}
        <RelatedProduct></RelatedProduct>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SingleProductPage;
