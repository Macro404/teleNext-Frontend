import Image from 'next/image'
import '../../styles/image.css'
import '../../styles/phone.css'
import CartBtn from './CartBtn';

export default function Phone({ phone }){
    const imageList = phone.images.split(',');
    const images = imageList.map(image => {
        return (
        <Image 
            key={image}
            src={image}
            alt="image"
            width={180}
            height={300}
        />
    )})
    return <div className='phone-card'>
        <details><summary>
        <div className='phone-image-container' >
        {images[0]}
    </div>
    </summary>
    <div className='phone-image-dropdown'>{images.slice(1)}</div>
    </details>
    <div className='phone-details'>
        <h3>{phone.model}</h3>
        <p>Display: {phone.screen}</p>
        <p>Camera: {phone.camera}</p>
        <p>CPU: {phone.cpu}</p>
        <p>Battery: {phone.battery}</p>
        <p>{phone.price}:-</p>
        <div className='phone-page-cart-button'><CartBtn item={phone}></CartBtn></div>
        </div>
    </div>
}