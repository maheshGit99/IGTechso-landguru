import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import { map } from "lodash";

const aboutusData = [
  { title: "Support Center" },
  { title: "Customer Support" },
  { title: "About Us" },
  { title: "Copyright" },
  { title: "Popular Campaign" },
];
const ourInformationData = [
  { title: "Return Policy" },
  { title: "Privacy Policy" },
  { title: "Terms & Conditions" },
  { title: "Site Map" },
  { title: "Store Hours" },
];
const myAccountData = [
  { title: "Press inquiries" },
  { title: "Social media " },
  { title: "directories" },
  { title: "Images & B-roll" },
  { title: "Permissions" },
];
const policyData = [
  { title: "Application security" },
  { title: "Software principles" },
  { title: "Unwanted software policy" },
  { title: "Responsible supply chain" },
];
const Footer = () => {
  return (
    <>
      <Box component="footer" className="footer_section">
        <Container maxWidth="lg">
          <Box className="footer_wrap">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Box className="footer_menus_wrap">
                  <Typography variant="h6" mb={2}>
                    About us
                  </Typography>
                  <List>
                    {map(aboutusData, (item, index) => (
                      <ListItem disablePadding key={index}>
                        <Link to="">
                          <ListItemText primary={item?.title} />
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Box className="footer_menus_wrap">
                  <Typography variant="h6" mb={2}>
                    Our Information
                  </Typography>
                  <List>
                    {map(ourInformationData, (item, index) => (
                      <ListItem disablePadding key={index}>
                        <Link to="">
                          <ListItemText primary={item?.title} />
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>{" "}
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Box className="footer_menus_wrap">
                  <Typography variant="h6" mb={2}>
                    My Account
                  </Typography>
                  <List>
                    {map(myAccountData, (item, index) => (
                      <ListItem disablePadding key={index}>
                        <Link to="">
                          <ListItemText primary={item?.title} />
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Box className="footer_menus_wrap">
                  <Typography variant="h6" mb={2}>
                    Policy
                  </Typography>
                  <List>
                    {map(policyData, (item, index) => (
                      <ListItem disablePadding key={index}>
                        <Link to="">
                          <ListItemText primary={item?.title} />
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
