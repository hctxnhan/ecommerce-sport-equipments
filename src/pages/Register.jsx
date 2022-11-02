import Button from '../components/Button';
import Input from '../components/Input';
import Section from '../components/Section';
import { registerUserWithEmailAndPassword } from '../firebase/auth';
import { useState } from 'react';
import useGoHomeIfLoggedIn from '../hooks/useGoHomeIfLoggedIn';
function Register() {
  useGoHomeIfLoggedIn();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  function handleRegisterSubmit(e) {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    registerUserWithEmailAndPassword(email, password, name);
  }

  return (
    <div className='min-h-remainScreen'>
      <div className='grid grid-cols-2 gap-8 h-full items-center md:grid-cols-1 grid-rows-[100vh]'>
        <Section title={'Login'} subtitle={'Welcome back.'}>
          <div className=''>
            <div className='flex flex-col gap-4 pr-10'>
              <Input value={name} setValue={setName} label={'Name'} />
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
              <Input
                value={confirmPassword}
                setValue={setConfirmPassword}
                label={'confirm password'}
                options={{ type: 'password' }}
              />
              <Button handleClick={handleRegisterSubmit} text={'Register'} />
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

export default Register;
