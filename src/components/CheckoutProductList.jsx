import {
  selectCartItems,
  selectCartQuantity,
  selectCartTotal,
} from '../redux/features/cartSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

function CheckoutProduct({ product }) {
  const { imageUrl, name, quantity, price } = product;
  const totalPrice = price * quantity;

  return (
    <div className='flex gap-4 text-sm items-center'>
      <div className='w-[64px] relative inline-block'>
        <img
          className='w-[64px] h-[64px] rounded-md aspect-square object-cover object-center'
          src={imageUrl}
          alt=''
        />
        <p className='absolute top-0 transform translate-x-1/2 -translate-y-1/2 right-0 bg-gray-500 w-[22px] h-[22px] text-sm text-white rounded-full flex items-center justify-center'>
          {quantity}
        </p>
      </div>
      <p className='flex-grow'>{name}</p>
      <p>{totalPrice} VND</p>
    </div>
  );
}

function Item({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className='p-4 shadow-md rounded-md overflow-hidden bg-white'>
      <div className='flex justify-between'>
        <p className='text-slate-900 text-xl mb-2 uppercase'>
          {'Order summary'}
        </p>
        <button
          onClick={() => setOpen(!open)}
          className='w-[30px] h-[30px] bg-gray-400 flex justify-center items-center text-white rounded-full hover:bg-gray-800'
        >
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <div className={`${open ? 'h-auto' : 'h-0'} overflow-hidden transition`}>
        <div className='mt-4'>{children}</div>
      </div>
    </div>
  );
}

function CheckoutProductList() {
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);

  const itemsComponent = (
    <div className='flex flex-col gap-4'>
      {items &&
        items.map((product) => (
          <CheckoutProduct key={product.id} product={product} />
        ))}
    </div>
  );

  return (
    <>
      <div className='hidden lg:block'>
        <Item>{itemsComponent}</Item>
      </div>
      <div className='block lg:hidden'>
        <p className='text-slate-900 text-xl mb-4 uppercase'>
          {'Order summary'}
        </p>
        {itemsComponent}
      </div>
    </>
  );
}

export default CheckoutProductList;
