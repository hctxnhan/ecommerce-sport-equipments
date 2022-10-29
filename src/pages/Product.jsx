import PopularProducts from '../components/PopularProducts';

function Product() {
  return (
    <div>
      <div className='grid grid-cols-2 h-remainScreen'>
        <div className='bg-yellow-400'>
          <img src='' alt='' />
        </div>
        <div>Product</div>
      </div>
      <div>
        <PopularProducts />
      </div>
    </div>
  );
}

export default Product;
