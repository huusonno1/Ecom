import React from "react";
import Header from "../../shared/components/Header/Header";
import Footer from "../../shared/components/Footer/Footer";
import SectionBlog from "../../shared/components/Blog/SectionBlog";
import RelatedProduct from "../../shared/components/RelatedProduct/RelatedProduct"


import imgHero from "../../shared/assets/imgs/Rocket_single_seater_1.png"
import imgSideTable from "../../shared/assets/imgs/Granite_square_side_table_1.png"
import imgSofa from "../../shared/assets/imgs/Cloud_sofa_three_seater_ottoman_3 1.png"
import imgSofa_1 from "../../shared/assets/imgs/Asgaard_sofa_1.png"
import imgBackground from "../../shared/assets/imgs/Background.png"



const HomePage: React.FC = () => {
    return (
        <>
            <Header></Header>
            <section className="hero-section">
                <div className="overflow-hidden bg-[#FBEBB5] py-5 sm:py-10">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="lg:pl-43 flex items-center justify-center">
                                <div className="lg:max-w-lg ">
                                    <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                                        Rocket single seater
                                    </p>
                                    <div className="mt-10 flex items-center gap-x-6">
                                        <a href="#" className="relative text-2xl font-semibold text-gray-900 pb-1 border-b-2 border-transparent after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                                            Shop Now <span aria-hidden="true">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <img
                                alt="Product screenshot"
                                src={imgHero}
                                width={900}
                                height={600}
                                className="w-full max-w-[52rem] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-odd">
                <div className="overflow-hidden bg-[#FAF4F4] py-5 sm:py-10">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-10">
                            <div className="col-span-5  p-4">
                                <div className="type_card">
                                    <div className="image h-[350px] overflow-hidden flex justify-center items-center">
                                        <img
                                            alt="Product screenshot"
                                            src={imgSideTable}
                                            width={700}
                                            height={400}
                                            className="w-auto max-w-[22rem] object-cover"
                                        />
                                    </div>
                                    <div className="content px-3">
                                    <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                        Side table
                                    </p>
                                    <div className="mt-10 flex items-center gap-x-6">
                                        <a href="#" className="relative text-1.5xl font-semibold text-gray-900 pb-1 border-b-2 border-transparent after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                                            View More <span aria-hidden="true">→</span>
                                        </a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-5  p-4">
                                <div className="type_card">
                                    <div className="image h-[350px] overflow-hidden flex justify-center items-center">
                                        <img
                                            alt="Product screenshot"
                                            src={imgSofa}
                                            width={700}
                                            height={400}
                                            className="w-auto max-w-[22rem] object-cover"
                                        />
                                    </div>
                                    <div className="content px-3">
                                        <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                            Side table
                                        </p>
                                        <div className="mt-10 flex items-center gap-x-6">
                                            <a href="#" className="relative text-1.5xl font-semibold text-gray-900 pb-1 border-b-2 border-transparent after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                                                View More <span aria-hidden="true">→</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <RelatedProduct></RelatedProduct>
            <section className="section-odd">
                <div className="overflow-hidden bg-[#FFF9E5] py-5 sm:py-10">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-10">
                            <div className="col-span-7 p-4">
                                <div className="image">
                                    <img
                                        alt="Product screenshot"
                                        src={imgSofa_1}
                                        width={700}
                                        height={400}
                                        className="w-auto object-cover"
                                    />
                                </div>
                            </div>
                            <div className="col-span-3 p-4 flex items-center justify-center h-full">
                                <div className="content font-semibold justify-center">
                                    <h2 className="my-1 text-base text-gray-900 flex justify-center">New Arrivals</h2>
                                    <p className="mt-2 text-3xl tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                        Asgaard sofa
                                    </p>
                                    <div className="mt-10 gap-x-6 flex justify-center">
                                        <a href="#" className="relative text-1.5xl text-gray-900 px-4 py-2 border-2 border-black">
                                            Order Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SectionBlog></SectionBlog>
            <section className="section-odd">
                <div
                    className="overflow-hidden h-[400px] bg-cover bg-center bg-no-repeat py-5 flex items-center sm:py-10"
                    style={{ backgroundImage: `url(${imgBackground})` }}
                >
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Our Instagram</h2>
                            <p className="mt-2 text-lg/8 text-gray-600">Follow our store on Instagram</p>
                            <div className="mt-8 items-center ">
                                <a href="#" className="relative text-2xl font-semibold text-gray-900 bg-[#FAF4F4] py-2 px-5 border-2 border-gray-500 rounded-3xl">
                                    Follow Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default HomePage;
