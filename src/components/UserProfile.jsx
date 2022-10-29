import { useSelector } from 'react-redux';
import { logOutUser } from '../firebase/auth';
import { selectUser } from '../redux/features/userSlice';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  function loggedIn() {
    return (
      <>
        <h1 className='text-xl uppercase'>User Profile</h1>
        <img
          className='w-[150px] h-[150px] rounded-full'
          src={user.imageUrl}
          alt=''
        />
        <div className='text-center'>
          <p className='capitalize text-lg font-semibold'>{user.name}</p>
          <p className='text-sm text-gray-500'>{user.email}</p>
        </div>
        <Button fullWidth={true} text={'Log Out'} handleClick={logOutUser} />
      </>
    );
  }

  function loggedOut() {
    return (
      <>
        <h1 className='text-xl uppercase'>User Profile</h1>
        <p>You are not logged in.</p>
        <Button
          fullWidth={true}
          text={'Login'}
          handleClick={() => navigate('/login')}
        />
        <Button
          fullWidth={true}
          text={'Register'}
          handleClick={() => navigate('/register')}
        />
      </>
    );
  }
  return (
    <div className='flex flex-col gap-4 items-center bg-white border-2 border-black p-6 normal-case text-black cursor-default'>
      {user ? loggedIn() : loggedOut()}
    </div>
  );
}

export default UserProfile;
