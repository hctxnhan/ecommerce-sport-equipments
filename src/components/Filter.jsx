import Button from './Button';
import Input from './Input';
import SearchBar from './SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilterCategory,
  selectFilterPrice,
  selectFilterSearch,
} from '../redux/features/filterSlice';
import { selectCategories } from '../redux/features/categoriesSlice';
import {
  setCategory,
  setPrice,
  setSearch,
} from '../redux/features/filterSlice';
import { useState } from 'react';
function Filter() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const filterPrice = useSelector(selectFilterPrice);

  const [searchQuery, setSearchQuery] = useState('');

  const categoryList = ['all'].concat(
    categories.map((category) => category.id)
  );

  function handleRemoveFilter() {
    dispatch(setPrice(2000000));
    dispatch(setSearch(''));
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className=''>
        <div className='mb-4'>
          <SearchBar
            search={searchQuery}
            setSearch={setSearchQuery}
            submitSearch={() => dispatch(setSearch(searchQuery))}
          />
        </div>
        <p className='text-lg uppercase mb-2'>Category</p>
        <ul className='pl-4 flex flex-col gap-1 lowercase'>
          {categoryList.map((category) => (
            <li
              className='text-gray-500 hover:text-gray-900 cursor-pointer'
              key={category}
              onClick={() => dispatch(setCategory(category))}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className='text-lg uppercase flex items-center gap-3 mb-2'>
          Price <span className='text-gray-500 text-sm'>{filterPrice} VND</span>
        </p>
        <div className='pl-4 flex gap-4 justify-between'>
          <input
            className='flex-grow'
            type='range'
            min={0}
            max={2000000}
            value={filterPrice}
            onChange={(e) => dispatch(setPrice(e.target.value))}
          />
        </div>
      </div>
      <Button handleClick={handleRemoveFilter} text={'Clear filter'} />
    </div>
  );
}

export default Filter;
