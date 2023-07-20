import React from 'react';
import ImgBanner from '../assets/img/house-banner.png';
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className="h-full max-h[640px] mb-8 xl:mb-24 ">
      <div className="flex flex-col lg:flex-row ">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0 ">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6 ">
            <span className="text-violet-800">Buy or Rent</span> Your Dream
            House With Us.
          </h1>
          <p className="max-w-[480px] mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* Image */}
        <div className="hidden lg:flex flex-1 justify-end items-end">
          <img src={ImgBanner} alt="Banner" />
        </div>
      </div>
      {/* Search */}
      <Search />
    </section>
  );
};

export default Banner;
