import { useState } from 'react';

function Input({ label, options, value, setValue }) {
  return (
    <div className='relative shadow-sm rounded-lg overflow-hidden bg-white'>
      <input
        {...options}
        className='peer bg-transparent w-full rounded-lg px-5 p-[12px] text-xl focus:pt-[4px] focus:pb-[20px] border-2 border-gray-600 focus:outline-none focus:border-orange-400'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label
        className={`absolute top-1 left-0   peer-focus:top-full peer-focus:-mt-[20px] peer-focus:text-xs pl-[20px] transition-all ease-linear ${
          value && 'hidden'
        } peer-focus:block uppercase text-gray-700 text-sm peer-focus:text-orange-400`}
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
