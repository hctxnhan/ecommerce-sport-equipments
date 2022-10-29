import { useNavigate } from 'react-router-dom';
import Button from './Button';

function Hero() {
  const navigator = useNavigate();
  return (
    <div className='relative px-10 py-20 overflow-hidden min-h-remainScreen flex flex-col justify-between'>
      <div className='flex flex-col gap-6 items-start justify-start z-10'>
        <div className='py-6'>
          <h1 className='text-7xl uppercase max-w-2xl tracking-tighter md:text-6xl sm:text-4xl xs:text- text-white'>
            We sell sport clothes and equipments
          </h1>
        </div>
        <Button text='Shop now' handleClick={() => navigator('/shop')} />
      </div>
      <p className='z-10 text-white'>
        “If you want something you’ve never had, you must be willing to do
        something you’ve never done.”
      </p>
      <img
        className='absolute inset-0 w-full h-full object-cover object-center z-0'
        src='https://c4.wallpaperflare.com/wallpaper/787/610/414/muscle-press-pose-athlete-workout-hd-wallpaper-preview.jpg'
        alt=''
      />
    </div>
  );
}

export default Hero;
