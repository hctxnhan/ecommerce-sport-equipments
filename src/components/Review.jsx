import { BsStarFill } from 'react-icons/bs';
function Review({ stars, content, author, date }) {
  const calculatedStars = Array.from({ length: stars }, (_, i) => {
    return <BsStarFill key={i} className='text-yellow-400' />;
  });

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-1'>{calculatedStars}</div>
      <p>{content}</p>
      <p className='text-gray-400 uppercase text-sm'>
        <span className='text-gray-600'>{author}</span> -{' '}
        <span className='font-light'>{date}</span>
      </p>
    </div>
  );
}

export default Review;
