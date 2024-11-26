import React from 'react';
import ProductScroll from './ProductScroll';
import GroceryTable from './GroceryTable';
import SingleProductSlider from './SingleProductSlider';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen w-full lg:overflow-hidden">
      {/* Logo Section */}
      <section className="w-full py-3 bg-white fixed top-0 left-0 z-10">
        <nav className="px-4 flex justify-between items-center">
          <div className="font-bold text-2xl">Logo</div>
          <Link to="/login">
            <div className='font-bold text-2xl'>Login</div>
          </Link>
        </nav>
      </section>

      {/* Main Content Section */}
      <div className="lg:pt-[60px] lg:h-[calc(75vh-60px)] flex flex-col lg:flex-row justify-between items-start TableListBg mb-5 border-b-2 -z-10 overflow-auto">
        {/* Single Product Slider */}
        <section className="flex justify-center items-center w-full lg:w-[50%] pt-14 lg:pt-0 h-[50%] lg:h-full mb-4 lg:mb-0 SingleScrollBackground">
          <div className="w-full flex justify-center items-center h-full py-5">
            <SingleProductSlider />
          </div>
        </section>

        {/* Grocery Table */}
        <section className="hidden lg:flex lg:w-[50%] h-full">
          <div className="w-full">
            <GroceryTable />
          </div>
        </section>
      </div>

      {/* Product Scroll Section */}
      <section className="h-[25vh] px-4 productScroll relative z-50 mb-10 lg:mb-0">
        <div className="w-full h-full">
          <ProductScroll />
        </div>
      </section>

      {/* Mobile View: Grocery Table */}
      <section className="lg:hidden mb-5">
        <div className="w-full">
          <GroceryTable />
        </div>
      </section>
    </div>
  );
};

export default Home;