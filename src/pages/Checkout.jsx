import useAuthCheck from '../hooks/useAuthCheck';

function Checkout() {
  useAuthCheck();
  return <div>Checkout page</div>;
}

export default Checkout;
