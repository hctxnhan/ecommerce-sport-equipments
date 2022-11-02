import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import Portal from '../components/PortalComponent';
import Section from '../components/Section';
import {
  loginUserWithEmailAndPassword,
  loginWithGooglePopup,
} from '../firebase/auth';
import useGoHomeIfLoggedIn from '../hooks/useGoHomeIfLoggedIn';

function Login() {
  useGoHomeIfLoggedIn();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLoginSubmit(e) {
    loginUserWithEmailAndPassword(email, password);
  }

  function handleLoginGoogle(e) {
    loginWithGooglePopup();
  }

  return (
    <div className='min-h-remainScreen'>
      <div className='grid grid-cols-2 gap-8 items-center md:grid-cols-1 grid-rows-[100vh]'>
        <Section title={'Login'} subtitle={'Welcome back.'}>
          <div className=''>
            <div className='flex flex-col gap-4 pr-10'>
              <Input
                value={email}
                setValue={setEmail}
                label={'email'}
                options={{
                  type: 'email',
                }}
              />
              <Input
                value={password}
                setValue={setPassword}
                label={'password'}
                options={{ type: 'password' }}
              />
              <div className='flex gap-6 justify-between items-center md:flex-col'>
                <div className='md:order-2'>
                  <p className='text-gray-500'>
                    Do not have account yet?{' '}
                    <Link
                      to={'/register'}
                      className='hover:text-gray-900 underline'
                    >
                      Register now
                    </Link>
                  </p>
                </div>
                <div className='flex gap-4 self-stretch md:flex-col md:order-1'>
                  <Button
                    text={'Login with Google'}
                    handleClick={handleLoginGoogle}
                  />
                  <Button handleClick={handleLoginSubmit} text={'Login'} />
                </div>
              </div>
            </div>
          </div>
        </Section>
        <div className='h-full md:hidden relative'>
          <img
            className='absolute top-0 right-0 w-full h-full left-0 object-center  object-cover'
            src='https://c4.wallpaperflare.com/wallpaper/206/268/839/pose-muscle-muscle-rod-press-hd-wallpaper-preview.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
