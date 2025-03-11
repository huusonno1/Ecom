import React from "react";
import Header from "../../shared/components/Header/Header";
import Footer from "../../shared/components/Footer/Footer";
import HeroSection from "../../shared/components/HeroSection/HeroSection";
import ProductGrid from "../../shared/components/Products/ProductGrid";
import Pagination from "../../shared/components/Pagination/Pagination";
import Features from "../../shared/components/Features/Features";
import { products } from "../../data/product/product";


const ShopPage: React.FC = () => {
    return (
        <>
            <Header></Header>
            <HeroSection></HeroSection>

            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-between items-center mb-6">
                <div className="flex items-center space-x-4">
                    <button className="px-3 py-1 border border-gray-300 rounded flex items-center">
                    <span>Filter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    </button>
                    <span className="text-sm text-gray-500">Showing 1-16 Products</span>
                </div>
                <div className="flex items-center">
                    <span className="mr-2 text-sm">Order by</span>
                    <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                    <option>Default</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                    </select>
                </div>
                </div>
                <ProductGrid products={products} />
                <Pagination />
            </main>
            <Features></Features>
            <Footer></Footer>
        </>
    );
};

export default ShopPage;
