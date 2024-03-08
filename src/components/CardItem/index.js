import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`card ${className}`}>
      <div className="info-cont">
        <h1 className="card-heading">{title}</h1>
        <p className="card-desc">{description}</p>
      </div>
      <img className="img" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
