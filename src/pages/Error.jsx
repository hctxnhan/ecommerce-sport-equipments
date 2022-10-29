import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
function Error() {
  const navigate = useNavigate();
  return (
    <div className='relative h-remainScreen py-20 px-10'>
      <div className='absolute bg-black inset-0 -z-10'>
        <img src='' alt='' />
      </div>
      <div className='uppercase text-white text-7xl mb-6'>
        <p className='text-6xl'>Error 404:</p>
        <h1 className=''>Page Not Found</h1>
      </div>
      <Button handleClick={() => navigate('/')} text='Take me home' />
    </div>
  );
}

export default Error;
