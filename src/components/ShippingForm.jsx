import Input from './Input';

function ShippingForm() {
  return (
    <div className='flex flex-col gap-4'>
      <p className='uppercase text-xl'>Shipping address</p>
      <Input options={{ required: true }} label={'Country/Region'} />
      <div className='grid grid-cols-2 gap-4'>
        <Input options={{ required: true }} label={'First name'} />
        <Input options={{ required: true }} label={'Last name'} />
      </div>
      <Input options={{ required: true }} label={'Address'} />
      <div className='grid grid-cols-2 gap-4'>
        <Input options={{ required: true }} label={'City'} />
        <Input options={{ required: true }} label={'Post code'} />
      </div>
      <Input options={{ required: true }} label={'Phone'} />
    </div>
  );
}

export default ShippingForm;
