import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { addItem } from '../redux/features/cartSlice';

function ProductCard({
  product = {
    name: 'Product Name',
    price: 100,
    image: 'https://picsum.photos/200/300',
  },
}) {
  const [isHover, setHover] = useState(false);
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  function handleAddToCart() {
    dispatch(addItem(product));
  }
  return (
    <div className='w-full'>
      <div
        className='relative rounded-lg'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className='shadow-lg rounded-lg overflow-hidden'>
          <img
            className={`w-full h-full  aspect-3/4 object-cover object-center transform ${
              isHover && 'scale-[1.2] brightness-90'
            } transition-all duration-300 `}
            src={imageUrl}
            alt=''
          />
        </div>
        <div
          className={`absolute top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2 opacity-0 ${
            isHover && 'opacity-100'
          } transition`}
        >
          <Button handleClick={handleAddToCart} text='Add to cart' />
        </div>
      </div>
      <div className='flex justify-between mt-2 gap-6'>
        <p className='uppercase text-lg md:text-sm xl:text-base'>{name}</p>
        <p className='flex gap-1'>
          {/* <span className='text-gray-500'>from</span> */}
          <span className='text-lg md:text-sm xl:text-base'>{price}đ</span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
