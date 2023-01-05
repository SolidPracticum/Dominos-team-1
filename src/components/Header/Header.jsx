import scss from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.fakeHeader}>

        <div className={scss.inf}>
          <img
            src="https://icon-library.com/images/phone-icon-white-png/phone-icon-white-png-16.jpg"alt=""/>
          <p>044 222 11 11</p>
        </div>

        <div className={scss.location}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Media_Viewer_Icon_-_Location.svg/1200px-Media_Viewer_Icon_-_Location.svg.png"alt=""/>
          <p>Kyiv</p>
        </div>

        <div className={scss.user}>
          <select  id="lang">
            <option value="0">Eng</option>
            <option value="1">Rus</option>
            <option value="2">Ukr</option>
          </select>
          <Link to="/login">Sign in</Link>
        </div>

      </div>

      <div className={scss.mainHeader}>
        <Link to="/">
            <img src="https://image4.owler.com/logo/domino-s-pizza_owler_20191127_062227_original.png" alt="" />
        </Link>
        <Link to="/promo">Promo</Link>
        <Link to="/pizza">Pizza</Link>
        <Link to="/drinks">Drinks</Link>
        <Link to="/sides">Sides</Link>
        <Link to="/dessert">Dessert</Link>
        <div className={scss.basket}>
            <div>
                <p>00</p>
            </div>
            <button>Checkout</button>
        </div>
      </div>


    </div>
  );
};

export default Header;
