import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import Hero from '../components/Hero';
import PopularProducts from '../components/PopularProducts';
import Reviews from '../components/Reviews';
import { useSelector } from 'react-redux';

function Home() {
  const { categories } = useSelector((state) => state.categories);

  return (
    <div>
      <Hero />
      <div className='py-10'>
        {/* <FeaturedProducts /> */}
        <PopularProducts
          products={categories[0]?.items}
          title='Sport Fashion'
          subtitle='We provide the most modern style for your training day.'
        />
        <PopularProducts
          products={categories[1]?.items}
          title='Training equipment'
          subtitle='The most efficient, reasonable, flexible equipment that meets your target.'
        />
        <PopularProducts
          products={categories[2]?.items}
          title='Supplement'
          subtitle='Healthier everyday with less effort that put into your meals.'
        />
        <Reviews />
      </div>
    </div>
  );
}

export default Home;
