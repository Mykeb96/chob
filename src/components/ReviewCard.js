import Image from 'next/image'
import nathan from '@/assets/images/Nathan.jpg'

export default function ReviewCard (props) {


  return (
    <div className="review-card" onClick={() => {
      props.handleOpen()
      props.setSelectedReview({
        name: props.name,
        controller: props.img
      })
    }}>
      <div className='image-wrapper'>
        <Image src={props.img} style={{borderRadius: '50%'}}/>
      </div>
      <div className="review-card-info">
        <span>{props.name}</span>
        <span>⭐⭐⭐⭐⭐</span>
      </div>
    </div>
  )
}