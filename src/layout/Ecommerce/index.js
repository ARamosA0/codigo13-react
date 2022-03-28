import { useContext } from "react";
import { Badge, Grid, TextField } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import logo from "../../assets/logo.svg";
import { UserContext } from "../../Context/userContext";

import "./index.css";;

const Ecommerce = () => {
  const { basket } = useContext(UserContext);

  return (
    <div>
      <nav
        className="nav-ecommerce"
        sx={{
          minHeight: "86px",
          maxHeight: "86px",
        }}
      >
        <Grid container alignItems="center" ml={5} mr={5}>
          <Grid item md={4}>
            <img src={logo} alt="" />
          </Grid>
          <Grid item md={4}>
            <TextField
              variant="standard"
              sx={{
                width: 250,
              }}
              label="Search for an item..."
            />
          </Grid>
          <Grid item md={4}>
            <ul className="ul-ecommerce">
              <li>
                <a href="/">Store</a>
              </li>
              <li>
                <a href="/">Account</a>
              </li>
              <li>
                <a href="/">Wish List</a>
              </li>
              <li className="li-basket">
                <Link to="/ecommerce/basket">
                  Basket &nbsp;
                  {/* Si basket existe entonces has basket.length, si no ponle 0 */}
                  <Badge
                    badgeContent={basket ? basket.length : 0}
                    color="primary"
                  >
                    <ShoppingBasketRoundedIcon />
                  </Badge>
                </Link>
                
              </li>
            </ul>
          </Grid>
        </Grid>
      </nav>
      <div className="container-tag">
          <ul className="ul-tags">
              <li>
                  <a href="">New Arrivals <span className="fresh">& Fresh</span></a>
              </li>
              <li>
                  <a href="">Dresses</a>
              </li>
              <li>
                  <a href="">Tops</a>
              </li>
              <li>
                  <a href="">Jackets</a>
              </li>
              <li>
                  <a href="">Linger & Lounge Wear</a>
              </li>
              <li>
                  <a href="">Beach Wear</a>
              </li>
              <li>
                  <a href="">Blouse</a>
              </li>
              <li>
                  <a href="">Denim</a>
              </li>
              <li>
                  <a href="">Vintage</a>
              </li>
              <li>
                  <a href="">Shoes</a>
              </li>
              <li>
                  <a href="">Sandals</a>
              </li>
              <li>
                  <a href="">Bags</a>
              </li>
              <li>
                  <a href="">Jewellery</a>
              </li>
          </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Ecommerce;
