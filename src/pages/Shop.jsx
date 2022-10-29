import { useSelector } from 'react-redux';
import Filter from '../components/Filter';
import ProductCard from '../components/ProductCard';
import Section from '../components/Section';
import {
  selectFilterCategory,
  selectFilterPrice,
  selectFilterSearch,
} from '../redux/features/filterSlice';

function filterProducts(categories, categoryOption, searchString, priceRange) {
  if (!categories) return [];

  let filteredCategories = categories.filter((category) => {
    if (categoryOption === 'all') return true;
    return category.id === categoryOption;
  });

  filteredCategories = filteredCategories.map((category) => {
    return {
      ...category,
      items: category.items.filter((item) => {
        return item.name.toLowerCase().includes(searchString.toLowerCase());
      }),
    };
  });

  filteredCategories = filteredCategories.map((category) => {
    return {
      ...category,
      items: category.items.filter((item) => {
        return item.price <= priceRange;
      }),
    };
  });

  return filteredCategories;
}

export default function Shop() {
  const { categories, loading } = useSelector((state) => state.categories);
  const filterCategories = useSelector(selectFilterCategory);
  const filterSearch = useSelector(selectFilterSearch);
  const filterPrice = useSelector(selectFilterPrice);
  const results = filterProducts(
    categories,
    filterCategories,
    filterSearch,
    filterPrice
  );

  return (
    <div className='grid grid-cols-shop gap-10 py-6 px-10 md:grid-cols-1'>
      <div className=''>
        <Filter />
      </div>
      <div className='min-h-screen'>
        {results.length > 0 && (
          <div className='-m-10'>
            {results.map((category) => {
              return (
                <div key={category.id}>
                  {category.items.length > 0 && (
                    <Section title={category.id}>
                      <div className='grid grid-cols-4 gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
                        {category.items.map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                      </div>
                    </Section>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
