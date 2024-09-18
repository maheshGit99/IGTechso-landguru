import {
  Box,
  Button,
  Container,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import PrimaryButton from "../../components/common/PrimaryButton";
import imageObj from "../../utils/images";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import OwlCarousel from "react-owl-carousel";

const FreeTutorial = () => {
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 80,
    autoplay: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <>
      <Box component="section" className="free_tutorial_section">
        <Container maxWidth="lg">
          <Box className="free_turorial_wrap">
            <Grid container spacing={8}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  className="free_tutorial_left"
                  style={{ backgroundImage: `url(${imageObj.mapLayer})` }}
                >
                  <OwlCarousel
                    id="free_tutorial_carousel"
                    className="owl-carousel owl-theme free_tutorial_slder"
                    {...options}
                  >
                    <Card className="common_card">
                      <CardMedia
                        sx={{ height: 200 }}
                        image={imageObj.computerDesk1}
                      />
                      <CardContent sx={{ position: "relative" }}>
                        <Button
                          variant="contained"
                          color="success"
                          startIcon={<CheckCircleIcon />}
                          className="free_turial_btn"
                          sx={{
                            position: "absolute",
                            right: "-50px",
                            top: "-10px",
                          }}
                        >
                          Free tutorial
                        </Button>
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
                  </OwlCarousel>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box className="common_heading" mt={2}>
                  <Typography variant="body2">Free tutorial</Typography>
                  <Typography variant="h3" mb={3}>
                    More than thousand of free tutorial upload every weeks
                  </Typography>
                  <Typography variant="body1" mb={3}>
                    Get your tests delivered at let home collect sample from the
                    victory of the managments that supplies best design system
                    guidelines ever. Get your tests delivered at let home
                    collect sample.
                  </Typography>
                  <PrimaryButton btnLabel="explore details" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FreeTutorial;
