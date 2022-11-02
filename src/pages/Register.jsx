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
      <Section title={'Register'} subtitle={'Welcome.'}>
        <div className='grid grid-cols-2 gap-8 h-full items-center md:grid-cols-1'>
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
          <div className='bg-pink-200 h-full md:hidden'>
            <img src='' alt='' />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Register;
