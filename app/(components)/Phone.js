import Image from 'next/image'
import '../../styles/image.css'
import '../../styles/phone.css'

export default function Phone({id, model, price, camera, cpu, battery, screen, images}){
    const imageList = images.split(',');
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
        <h3>{model}</h3>
        <p>{price}:-</p>
        <p>{camera}</p>
        <p>{cpu}</p>
        <p>{battery}</p>
        <p>{screen}</p>
        </div>
    </div>
}