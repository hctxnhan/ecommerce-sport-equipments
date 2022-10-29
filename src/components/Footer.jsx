const categories = [
  { id: 0, name: 'All' },
  { id: 1, name: 'Clothes' },
  { id: 2, name: 'Training Equipment' },
  { id: 3, name: 'Accessories' },
  { id: 4, name: 'Supplement' },
];

function Footer() {
  return (
    <div className='bg-black h-screen text-white p-10 py-14 overflow-hidden'>
      <div className='mb-8'>
        <p className='text-9xl text-center text-gray-200 opacity-20'>
          SPORT EQUIPMENTS
        </p>
      </div>
      <div className='flex gap-10'>
        <div>
          <p className='uppercase'>Shop</p>
          <ul className='uppercase flex flex-col gap-1'>
            {categories.map((category) => (
              <li
                className='text-gray-400 hover:text-gray-100 cursor-pointer'
                key={category.id}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className='uppercase'>About us</p>
          <ul className='uppercase flex flex-col gap-1'>
            <li className='text-gray-400 hover:text-gray-100 cursor-pointer'>
              About
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
