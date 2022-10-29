import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CheckoutProductList from '../components/CheckoutProductList';
import NavBarLink from '../components/NavBarLink';
import Section from '../components/Section';
import ShippingForm from '../components/ShippingForm';
import useAuthCheck from '../hooks/useAuthCheck';

function Checkout() {
  useAuthCheck();
  return (
    <div className='py-14 w-[80vw] mx-auto min-h-screen'>
      <div className='grid grid-cols-[6fr_1fr_3fr] gap-8 lg:grid-cols-1'>
        <div className='lg:order-2'>
          <ShippingForm />
          <div className='mt-4 flex justify-between gap-4 sm:flex-col sm:items-end'>
            <div className='sm:order-2'>
              <NavBarLink to={'/cart'}>Return to cart</NavBarLink>
            </div>
            <div className='sm:order-1'>
              <Button text={'Countinue to shipping'} />
            </div>
          </div>
        </div>
        <div></div>
        <div className='lg:order-1'>
          <CheckoutProductList />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
