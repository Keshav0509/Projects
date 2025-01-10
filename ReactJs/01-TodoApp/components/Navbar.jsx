import style from './TodoStyle.module.css';

function NavBar(){

  return(
    <>
      <header>
        <nav className={style.nav}>
          <div className={style.leftSection}>
            <span className={style.logo}>CodeMe</span>
            <div className={style.menuIcon}>
              <img className={style.menu} src="../public/burgerMenu.svg" alt="" />
            </div>
          </div>
          <div className={style.rightSection}>
            <div>
              <ul className={style.link}>
                <a href="#Home"><li>Home</li></a>
                <a href="#Experiences"><li>Experiences</li></a>
                <a href="#Projects"><li>Projects</li></a>
                <a href="#About"><li>About</li></a>
                <a href="#Contact"><li>Contact</li></a>
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