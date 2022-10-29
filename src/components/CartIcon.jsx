import { AiOutlineShoppingCart } from 'react-icons/ai';
import NavBarLink from './NavBarLink';
import { selectCartQuantity } from '../redux/features/cartSlice';
import { useSelector } from 'react-redux';

function CartIcon() {
  const cartQuantity = useSelector(selectCartQuantity);
  return (
    <div className='relative'>
      <div className='absolute top-[-5px] left-[15px] origin-center transform  w-[20px] h-[20px] rounded-full bg-black text-white flex items-center justify-center text-xs'>
        {cartQuantity}
      </div>
      <NavBarLink to='/cart'>
        <AiOutlineShoppingCart size={25} />
      </NavBarLink>
    </div>
  );
}

export default CartIcon;
