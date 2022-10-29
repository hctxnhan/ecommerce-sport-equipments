import ProductCard from './ProductCard';
import Section from './Section';

const arr = [1, 2, 3, 4];

function FeaturedProducts() {
  return (
    <Section title='Featured'>
      <div className='grid grid-cols-4 gap-6'>
        {arr.map((item) => (
          <ProductCard key={item} />
        ))}
      </div>
    </Section>
  );
}

export default FeaturedProducts;
