import React from "react";
import { LayoutGrid, List } from "lucide-react";

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

            <div className="bg-[#FAF4F4] flex justify-center mt-10 mb-4 rounded-lg p-4 shadow">
                <div className="container flex flex-wrap justify-between items-center">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 text-lg font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                            </svg>

                            Filter
                        </button>
                        <button>
                            <LayoutGrid className="h-5 w-5\" />
                        </button>
                        <span className="border-l h-6"></span>
                        <button className="flex items-center gap-1 text-lg font-semibold">
                            <List className="h-5 w-5" />
                        </button>
                        <span className="text-lg font-semibold">Showing 1–16 of 32 results</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold">Show</span>
                        <input type="number" defaultValue={16} className="w-16 bg-white border border-gray-300 rounded-lg px-2 py-1 text-lg shadow-sm" />
                        <span className="ml-2 text-lg font-semibold">Sort by:</span>
                        <select className="border bg-white border-gray-300 rounded-lg px-3 py-2 text-lg shadow-sm">
                        <option>Default</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>
            <main className="container mx-auto px-4 py-8">
                <ProductGrid products={products} />
                <Pagination />
            </main>
            <Features></Features>
            <Footer></Footer>
        </>
    );
};

export default ShopPage;
