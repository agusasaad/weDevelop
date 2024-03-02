import './SpinnerConLogo.css'

const SpinnerButtons = () => {
  return (
    <div className="containerSpinner">
      <div className='containerImg'>
        <img src="./images/spinner.png" alt="" />
        <div className="containerConLogo">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  result="blur"
                  stdDeviation="10"
                  in="SourceGraphic"
                ></feGaussianBlur>
                <feColorMatrix
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
                  mode="matrix"
                  in="blur"
                ></feColorMatrix>
              </filter>
            </defs>
          </svg>
        </div>
      </div>

    </div>
  )
}

export default SpinnerButtons