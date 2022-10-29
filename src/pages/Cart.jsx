import Button from '../components/Button';
import CartItem from '../components/CartItem';
import Section from '../components/Section';
import {
  selectCartItems,
  selectCartTotal,
  addItem,
  removeItem,
} from '../redux/features/cartSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Cart() {
  const navigate = useNavigate();
  // const emptyBasket = (
  //   <div>
  //     <p>Your basket is empty</p>
  //     <Button text={'Continue Shopping'} link='/shop' />
  //   </div>
  // );
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const isEmpty = cartItems.length === 0;

  return (
    <Section title='Your basket'>
      <table className='w-full'>
        <thead>
          <tr className='border-b-[1px] border-gray-900'>
            <th
              className='pb-2 w-1/2 text-left uppercase font-normal text-gray-600 text-sm'
              colSpan={2}
            >
              Product
            </th>
            <th
              id='quantity'
              className=' pb-2 text-left uppercase font-normal text-gray-600 text-sm md:hidden'
            >
              Quantity
            </th>
            <th className=' pb-2 text-right uppercase font-normal text-gray-600 text-sm md:hidden'>
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {!isEmpty ? (
            cartItems.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <div className='flex flex-col gap-4 items-start py-6'>
              <p>Your basket is empty</p>
              <Button
                handleClick={() => navigate('/shop')}
                text={'Continue Shopping'}
              />
            </div>
          )}
        </tbody>
      </table>
      <div className='flex justify-end justify-center py-6'>
        {!isEmpty && (
          <div className='max-w-max flex flex-col gap-3'>
            <div className='flex text-3xl justify-between uppercase gap-10'>
              <p className='md:text-xl'>Subtotal</p>
              <p className='md:text-xl'>
                {cartTotal} <span className='text-gray-500 text-sm'>VND</span>
              </p>
            </div>
            <p className='text-gray-600'>
              Tax included. Shipping calculated at checkout.
            </p>
            <Button handleClick={() => navigate('/checkout')} text='Checkout' />
          </div>
        )}
      </div>
    </Section>
  );
}

export default Cart;
