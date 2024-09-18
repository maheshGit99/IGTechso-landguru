import { useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import PrimaryButton from "../../components/common/PrimaryButton";
import { map } from "lodash";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const freePricePlanDescData = [
  {
    desc: "Ultimate access to all course, exercises and assessments",
    type: "enabled",
  },
  {
    desc: "Free acess for all kind of exercise corrections with downloads.",
    type: "enabled",
  },
  {
    desc: "Total assessment corrections with free download access system",
    type: "enabled",
  },
  {
    desc: "Unlimited download of courses on the mobile app contents",
    type: "disabled",
  },
  {
    desc: "Download and print courses and exercises in PDF",
    type: "disabled",
  },
];

const PricePlan = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log("value", value);

  return (
    <>
      <Box component="section" className="core_faetures_section">
        <Container maxWidth="lg">
          <Box className="core_fatures_wrap">
            <Grid container spacing={8}>
              <Grid size={{ xs: 12 }}>
                <Box
                  className="common_heading"
                  mt={2}
                  sx={{ textAlign: "center" }}
                >
                  <Typography variant="body2">Pricing Plan</Typography>
                  <Typography variant="h3" mb={3}>
                    Choose your pricing policy
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Box className="price_plan_tabs">
              <Grid
                container
                spacing={2}
                size={{ xs: 12, md: 10 }}
                sx={{ margin: "auto" }}
              >
                <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ margin: "auto" }}>
                  <Tabs value={value} onChange={handleChange}>
                    <Tab label="Monthly Plan" />
                    <Tab label="Annual Plan" />
                  </Tabs>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  {value === 0 ? (
                    <Box>
                      <Stack direction="row" spacing={2} className="price_plan_cards_wrap">
                        <Card variant="outlined" className="price_plan_card">
                          <Typography variant="h6">Free Plan</Typography>
                          <Typography variant="body2">
                            For Small teams or office
                          </Typography>

                          <List sx={{ margin: "20px 0" }}>
                            {map(freePricePlanDescData, (item, index) => (
                              <ListItem key={index}>
                                <ListItemIcon>
                                  {item?.type === "enabled" ? (
                                    <CheckCircleIcon color="success" />
                                  ) : (
                                    <CancelIcon
                                      sx={{ color: "secondary.light" }}
                                    />
                                  )}
                                </ListItemIcon>
                                <ListItemText
                                  primary={item?.desc}
                                  sx={{
                                    color: `${
                                      item?.type === "disabled" &&
                                      "secondary.light"
                                    }`,
                                  }}
                                />
                              </ListItem>
                            ))}
                          </List>
                          <Box sx={{ textAlign: "center" }}>
                            <PrimaryButton btnLabel="start free trail" />
                          </Box>
                        </Card>

                        <Card variant="outlined" className="price_plan_card">
                          <Button
                            variant="contained"
                            sx={{ color: "text.contrastText" }}
                          >
                            Recommended
                          </Button>

                          <Stack
                            direction="row"
                            sx={{ justifyContent: "space-between" }}
                            mt={3}
                          >
                            <Box>
                              <Typography variant="h6">Premium</Typography>
                              <Typography variant="body2">
                                For startup enterprise
                              </Typography>
                            </Box>
                            <Box>
                              <Typography variant="body2">
                                Starting from
                              </Typography>
                              <Typography variant="h4" color="success">
                                49.99/mo
                              </Typography>
                            </Box>
                          </Stack>

                          <List sx={{ margin: "20px 0" }}>
                            {map(freePricePlanDescData, (item, index) => (
                              <ListItem key={index}>
                                <ListItemIcon>
                                  {item?.type === "enabled" ? (
                                    <CheckCircleIcon color="success" />
                                  ) : (
                                    <CancelIcon
                                      sx={{ color: "secondary.light" }}
                                    />
                                  )}
                                </ListItemIcon>
                                <ListItemText
                                  primary={item?.desc}
                                  sx={{
                                    color: `${
                                      item?.type === "disabled" &&
                                      "secondary.light"
                                    }`,
                                  }}
                                />
                              </ListItem>
                            ))}
                          </List>
                          <Box sx={{ textAlign: "center" }}>
                            <PrimaryButton btnLabel="Subscribe Now" />
                          </Box>
                        </Card>
                      </Stack>
                    </Box>
                  ) : (
                    <Box>Item Two</Box>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default PricePlan;
