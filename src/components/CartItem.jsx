import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addItem, clearItems, removeItem } from '../redux/features/cartSlice';
import { MdOutlineDeleteOutline } from 'react-icons/md';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { id, name, price, quantity, imageUrl } = item;
  return (
    <tr className='border-b-[1px] border-gray-900'>
      <td className='align-top pt-8 pb-8 min-w-[100px] max-w-[150px]'>
        <img
          className='aspect-square rounded-md object-cover object-center'
          src={imageUrl}
          alt={name}
        />
      </td>
      <td className='align-top pt-8 pb-8 pl-8 uppercase text-sm text-gray-700 flex flex-col gap-2'>
        <p className='text-3xl sm:text-lg md:text-xl text-black'>{name}</p>
        <p>Unit price: {price} VND</p>
        <p className='hidden md:block'>Total: {price * quantity} VND</p>
        <div className='hidden md:flex items-center gap-1'>
          <button onClick={() => dispatch(removeItem(id))}>
            <AiFillMinusCircle size={30} />
          </button>
          <p className='w-10 text-center' type='text'>
            {quantity}
          </p>
          <button onClick={() => dispatch(addItem(item))}>
            <AiFillPlusCircle size={30} />
          </button>
          <button
            onClick={() => dispatch(clearItems(id))}
            className='text-gray-500 hover:text-gray-900'
          >
            <MdOutlineDeleteOutline size={20} />
          </button>
        </div>
      </td>
      <td className='align-top pt-8 pb-8 flex items-center gap-4 md:hidden'>
        <button onClick={() => dispatch(removeItem(id))}>
          <AiFillMinusCircle size={30} />
        </button>
        <p className='w-10 text-center' type='text'>
          {quantity} + in here
        </p>
        <button onClick={() => dispatch(addItem(item))}>
          <AiFillPlusCircle size={30} />
        </button>
        <button
          onClick={() => dispatch(clearItems(id))}
          className='text-gray-500 hover:text-gray-900'
        >
          <MdOutlineDeleteOutline size={20} />
        </button>
      </td>
      <td className='md:hidden align-top pt-8 pb-8 text-right'>
        <p className='mt-2 text-xl'>{price * quantity} VND</p>
      </td>
    </tr>
  );
}

export default CartItem;
