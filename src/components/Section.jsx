export default function Section({ children, title, subtitle, link = null }) {
  return (
    <div className=' relative py-10 px-10 h-full'>
      <div className='flex gap-10 items-end mb-5 lg:flex-col lg:items-start lg:gap-2 lg:mb-8'>
        <h2 className='text-5xl uppercase max-w-[300px] md:text-3xl'>
          {title}
        </h2>
        <p className='max-w-[400px] text-xl text-gray-500'>{subtitle}</p>
      </div>
      {children}
    </div>
  );
}
