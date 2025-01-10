import style from './navbar.css';


function NavBar(){

  return(
    <>
      <header>
        <nav className={style.nav}>
          <div className={style.leftSection}>
            <span className={style.logo}>CodeMe</span>
            <div className={style.menuIcon}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={style.rightSection}>
            <div>
              <ul className={style.link}>
                <li><a href="#Home">home</a></li>
                <li><a href="#Experiences">Experiences</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Contact">Contact</a></li>
              </ul>
            </div>
            <div></div>
          </div>
        </nav>
      </header>
    </>
  )
}
export default NavBar;