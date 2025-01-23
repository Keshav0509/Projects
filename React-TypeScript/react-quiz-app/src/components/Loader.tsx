import '../styles/Loader.css'

const Loader = () => {
  return (
    <>
      <div style={{height: "50px", width: "50px" }}>
        <div className="loader">
          <div className="loader-inner">
          <div className="loader-line-wrap">
          <div className="loader-line"></div>
          </div>
          <div className="loader-line-wrap">
          <div className="loader-line"></div>
          </div>
          <div className="loader-line-wrap">
          <div className="loader-line"></div>
          </div>
          <div className="loader-line-wrap">
          <div className="loader-line"></div>
          </div>
          <div className="loader-line-wrap">
          <div className="loader-line"></div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loader
