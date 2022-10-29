import NavBarLink from './NavBarLink';
import { IoPersonOutline } from 'react-icons/io5';
import CartIcon from './CartIcon';
import { useEffect, useState } from 'react';
import UserProfile from './UserProfile';
import Portal from './PortalComponent';

let prevScroll = window.pageYOffset;

function NavBar() {
  const [visible, setVisible] = useState(true);
  const [showUserProfile, setShowUserProfile] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      console.log();
      const currentScroll = window.pageYOffset;
      if (currentScroll > prevScroll) {
        setVisible(false);
        prevScroll = currentScroll;
      } else if (currentScroll < prevScroll) {
        setVisible(true);
        prevScroll = currentScroll;
      }
    };
  }, []);

  function handleToggleUserProfile(e) {
    setShowUserProfile((prev) => !prev);
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-20 ${
        !visible && '-top-full'
      } transition-[top]`}
    >
      <div className='flex items-center px-6 justify-between uppercase bg-white h-navbar'>
        <div>Sport Equipments</div>
        <div className='flex gap-6'>
          <NavBarLink to='/'>Home</NavBarLink>
          <NavBarLink to='/shop'>Shop</NavBarLink>
        </div>
        <div className='flex gap-4'>
          <div className='relative cursor-pointer text-gray-500 hover:text-gray-900'>
            <div onClick={handleToggleUserProfile}>
              <IoPersonOutline size={25} />
            </div>
            {showUserProfile && (
              <div className='absolute right-0 top-[30px] w-[300px] z-20'>
                <UserProfile />
              </div>
            )}
          </div>
          <CartIcon />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
