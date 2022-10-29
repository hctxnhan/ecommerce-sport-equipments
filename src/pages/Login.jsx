import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
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
      <Section title={'Login'} subtitle={'Welcome back.'}>
        <div className='grid grid-cols-2 gap-8 items-center'>
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
              <Button
                text={'Login with Google'}
                handleClick={handleLoginGoogle}
              />
              <Button handleClick={handleLoginSubmit} text={'Login'} />
            </div>
          </div>
          <div className='bg-pink-200 h-full'>
            <img src='' alt='' />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Login;
