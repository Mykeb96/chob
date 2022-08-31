export default function Review (props) {


  return (
    <div className="review-container" onClick={() => props.setToggleModal(props.tag)}>
      <img src='https://cdn.icon-icons.com/icons2/2596/PNG/512/check_one_icon_155665.png' className="review-image"/>
      <div className="review-sub-container">
        <span>{props.name}</span>
        <span>⭐⭐⭐⭐⭐</span>
      </div>
    </div>
  )
}