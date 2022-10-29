import Review from './Review';
import Section from './Section';

const reviews = [
  {
    id: 1,
    stars: 5,
    content:
      'Little pocket rockets. Where have you been all my life? Think I’ll be keeping an emergency MOTH in my pocket from now on! Love the packaging, super nice intense flavours. And strong! Love it!',
    author: 'John Doe',
    date: '2021-01-01',
  },
  {
    id: 2,
    stars: 4,
    content:
      'Doesn’t taste like it’s from a can. If you want the strength and taste of classic cocktails, but also the heart and soul of a drink being mixed right in front of you - and all with much, much less hassle. Look no further.',
    author: 'John Doe',
    date: '2021-01-01',
  },
  {
    id: 3,
    stars: 5,
    content:
      'The best pre-made cocktails I’ve tried. Perfect size, perfect taste, perfectly easy. You can tell they know they’re stuff. Made with proper quality spirits.',
    author: 'John Doe',
    date: '2021-01-01',
  },
];

function Reviews() {
  return (
    <Section title='Reviews' subtitle='How people talk about us?'>
      <div className='flex gap-4 justify-evenly'>
        {reviews.map((review) => (
          <div className='w-[350px]'>
            <Review key={review.id} {...review} />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Reviews;
