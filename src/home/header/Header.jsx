import DehazeIcon from "@mui/icons-material/Dehaze";
import { AppBar, Box, Container, IconButton } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { map } from "lodash";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/common/PrimaryButton";
import imageObj from "../../utils/images";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
console.log("tri",trigger)
  return children
    ? React.cloneElement(children, {
        sx: trigger ? { backgroundColor: "red" } : { backgroundColor: "#fff" },
        elevation: trigger ? 4 : 0,
      })
    : null;
}

ElevationScroll.propTypes = {
  children: PropTypes.element,
  window: PropTypes.func,
};

const Header = (props) => {
  // const [navbar, setNavbar] = useState(false);
  const [activeToggle, setActiveToggle] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Advertise", path: "/advertise" },
    { label: "supports", path: "/supports" },
    { label: "conatct", path: "/contact" },
  ];

  //navbar scroll changeBackground function
  // const changeBackground = () => {
  //   console.log("asa", window.scrollY);
  //   if (window.scrollY >= 90) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };
  // console.log("navbar", navbar);

  // useEffect(() => {
  //   changeBackground();
  //   // adding the event when scroll change background
  //   window.addEventListener("scroll", changeBackground);
  //   return () => {
  //     window.removeEventListener("scroll", changeBackground);
  //   };
  // }, []);

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar
          position="fixed"
          // className={`header_section ${navbar ? "navbar_active" : ""}`}
          className={`header_section`}
        >
          <Container maxWidth="lg">
            <Box className="header_wrap">
              <Box className="header_logo">
                <img src={imageObj.logo} alt="" />
              </Box>
              <Box className="header_menus">
                <ul>
                  {map(navLinks, (item, i) => (
                    <li key={i}>
                      <Link to={item.path} className="body1" key={i}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Box>

              <Box className="header_right">
                <PrimaryButton btnLabel="try for free" />
                <IconButton
                  size="small"
                  className="header_toggle"
                  onClick={() => setActiveToggle(!activeToggle)}
                >
                  <DehazeIcon fontSize="inherit" />
                </IconButton>
              </Box>
            </Box>
          </Container>
          <Box
            className={`small_header_menus ${
              activeToggle ? "small_header_active" : ""
            }`}
          >
            <ul>
              {map(navLinks, (item, i) => (
                <li key={i}>
                  <Link to={item.path} className="body1" key={i}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Box>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;
