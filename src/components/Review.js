import nathan from '../assets/images/Nathan.jpg'
import Image from 'next/image'

export default function Review (props) {


  return (
    <div className="review-container" onClick={() => props.setToggleModal(props.tag)}>
      <div className='image-wrapper'>
        <Image src={props.img} style={{borderRadius: '50%'}}/>
      </div>
      <div className="review-sub-container">
        <span>{props.name}</span>
        <span>⭐⭐⭐⭐⭐</span>
      </div>
    </div>
  )
}