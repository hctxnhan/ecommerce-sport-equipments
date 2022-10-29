import ProductCard from './ProductCard';
import Section from './Section';
import { BsArrowUpRight } from 'react-icons/bs';

const arr = [1, 2, 3, 4, 5, 6];

function PopularProducts({ title, subtitle, products }) {
  return (
    <Section title={title} subtitle={subtitle}>
      <div className='grid grid-cols-5 gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1'>
        {products &&
          products
            .slice(0, 5)
            .map((item) => <ProductCard key={item.id} product={item} />)}
      </div>
    </Section>
  );
}

export default PopularProducts;
