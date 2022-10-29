import useAuthCheck from '../hooks/useAuthCheck';

function Checkout() {
  useAuthCheck();
  return <div>Hello</div>;
}

export default Checkout;
