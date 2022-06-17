export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            {/* <img className="logo" src="img/logo.png" alt="logo" width={100} height={50}></img> */}
            Magos Élet
          </a>{' '}
        </div>
        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                Rólunk
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Termékek
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Vélemények
              </a>
            </li>
            <li>
              <a href='#features' className='page-scroll'>
                GY.I.K
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Kapcsolat
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
