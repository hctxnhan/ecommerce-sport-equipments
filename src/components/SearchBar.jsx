import Button from './Button';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar({ search, setSearch, submitSearch }) {
  return (
    <div className='flex gap-2 justify-between'>
      <input
        value={search}
        placeholder='Search product...'
        type='text'
        onChange={(e) => setSearch(e.target.value)}
        className='py-2 text-lg rounded-lg focus:outline-none'
      />
      <Button handleClick={submitSearch} text={<AiOutlineSearch />} />
    </div>
  );
}

export default SearchBar;
