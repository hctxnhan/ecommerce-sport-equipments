function Button({ text, handleClick, fullWidth = false }) {
  return (
    <button
      onClick={() => {
        handleClick();
      }}
      className={`group relative px-5 py-2 bg-black rounded-xl overflow-hidden outline outline-2 outline-gray-900 tracking-tighter ${
        fullWidth ? 'w-full' : ''
      }`}
    >
      <span className='text-gray-100 uppercase'>{text}</span>
      <span className='absolute bg-gray-100 text-black px-5 py-2 uppercase inset-0 transform translate-y-full group-hover:translate-y-0 transition'>
        {text}
      </span>
    </button>
  );
}

export default Button;
