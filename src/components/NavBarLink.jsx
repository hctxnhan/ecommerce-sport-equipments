import { Link } from 'react-router-dom';

function NavBarLink({ to, children }) {
  return (
    <Link to={to} className='uppercase text-gray-500 hover:text-gray-900'>
      {children}
    </Link>
  );
}

export default NavBarLink;
