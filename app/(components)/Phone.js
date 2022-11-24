import Image from 'next/image'
import '../../styles/image.css'
import '../../styles/phone.css'
import CartBtn from './CartBtn';

export default function Phone({ phone }){
    const imageList = phone.images.split(',');
    return <div className='phone-container'>
        <div className='image-container' >
        <Image
      src={imageList[0]}
      alt="a phone"
      width={180}
      height={300}
      className="image"
    />
    </div>
    <div className='phone-details'>
        <h3>{phone.model}</h3>
        <p>{phone.camera}</p>
        <p>{phone.cpu}</p>
        <p>{phone.battery}</p>
        <p>{phone.screen}</p>
        <p>{phone.price}:-</p>
        <CartBtn item={phone}></CartBtn>
        </div>
    </div>
}