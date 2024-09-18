import { Box, Container, Rating, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import imageObj from "../../utils/images";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import VisibilityIcon from "@mui/icons-material/Visibility";
import OwlCarousel from "react-owl-carousel";
import { map } from "lodash";

const Features = () => {
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 30,
    autoplay: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <>
      <Box component="section" className="tutorial_review_section">
        <Container maxWidth="lg">
          <Box className="tutorial_review_wrap">
            <Grid container>
              <Grid size={12}>
                <Box
                  className="common_heading"
                  mt={2}
                  sx={{ textAlign: "center" }}
                >
                  <Typography variant="body2">Quality features</Typography>
                  <Typography variant="h3" mb={3}>
                    Tutorials that people love most
                  </Typography>
                </Box>
              </Grid>
              <Grid size={12}>
                <OwlCarousel
                  id="tutorial_review_carousel"
                  className="owl-carousel owl-theme tutorial_review_slder"
                  {...options}
                >
                  {map([1, 2, 3, 4], (i) => (
                    <Box className="common_card" key={i}>
                      <Card key={i}>
                        <CardMedia
                          sx={{ height: 200 }}
                          image={imageObj.computerDesk1}
                        />
                        <CardContent sx={{ position: "relative" }}>
                          <Stack
                            direction="row"
                            spacing={2}
                            sx={{
                              color: "text.secondary",
                              alignItems: "center",
                            }}
                          >
                            <Rating name="read-only" value={5} readOnly />
                            <Typography
                              variant="body2"
                              sx={{
                                color: "text.secondary",
                              }}
                            >
                              5.0 (392 reviews)
                            </Typography>
                          </Stack>
                          <Typography gutterBottom variant="h6" my={2}>
                            Convert your web layout theming easily with sketch
                            zeplin extension
                          </Typography>
                          <Stack
                            direction="row"
                            spacing={2}
                            sx={{
                              color: "text.secondary",
                              alignItems: "center",
                            }}
                          >
                            <Typography variant="span">
                              <VisibilityIcon color="primary.contrastText" />
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "text.secondary",
                              }}
                            >
                              1,037 students watched
                            </Typography>
                          </Stack>
                        </CardContent>
                      </Card>
                    </Box>
                  ))}
                </OwlCarousel>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Features;
