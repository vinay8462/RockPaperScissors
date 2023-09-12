import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

const Rules = () => (
  <div>
    <Popup modal trigger={<button type="button">Rules</button>}>
      {close => (
        <>
          <div>
            <button type="button" onClick={() => close()}>
              <RiCloseLine />
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </>
      )}
    </Popup>
  </div>
)

export default Rules
