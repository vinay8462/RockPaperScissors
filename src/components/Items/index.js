import './index.css'

const Items = props => {
  const {itemDetails, onToggleItem} = props
  const {imageUrl, id} = itemDetails
  const type = id.toLowerCase()
  const onClickButton = () => {
    onToggleItem(id)
  }
  return (
    <li className="button-item">
      <button
        type="button"
        data-testid={`${type}Button`}
        className="button"
        onClick={onClickButton}
      >
        <img src={imageUrl} alt={id} className="image" />
      </button>
    </li>
  )
}

export default Items
