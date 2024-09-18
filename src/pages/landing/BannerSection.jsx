import {
  Box,
  Container,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import imageObj from "../../utils/images";
import Grid from "@mui/material/Grid2";
import { Video } from "reactjs-media";

const BannerSection = () => {
  return (
    <>
      <Box component="section" className="banner_section">
        <Container maxWidth="lg">
          <Box className="banner_wrap">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box className="banner_content_wrap">
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center" }}
                    mb={2}
                    className="banner_rating"
                  >
                    <Rating name="read-only" value={3} readOnly />
                    <Typography variant="body2">
                      Trused by over 4,332 students
                    </Typography>
                  </Stack>
                  <Typography variant="h1">
                    Learn Design with Nia Matos
                  </Typography>
                  <img
                    src={imageObj.bannerHeadingBottom}
                    alt=""
                    className="img-fluid bannerHeadingBottom"
                  />
                  <Typography variant="body1" my={3}>
                    Get your blood tests delivered at let home collect sample
                    from the victory of the managments that supplies best design
                    system guidelines ever.
                  </Typography>
                  <FormControl
                    variant="outlined"
                    className="banner_search_filed"
                    sx={{ width: "100%" }}
                  >
                    <OutlinedInput
                      endAdornment={
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                    }}
                    my={3}
                    className="sponsored_brands"
                  >
                    <Typography variant="body2">Sponsored by:</Typography>
                    <img src={imageObj.paypalLogo} alt="" />
                    <img src={imageObj.googleLogo} alt="" />
                    <img src={imageObj.dropboxLogo} alt="" />
                  </Stack>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }} offset={{ xs: 0, md: 2 }}>
                <Box className="banner_right_wrap">
                  <Box className="banner_vedio">
                    <img
                      src={imageObj.bannerFrameLayer}
                      alt="bannerFrameLayer"
                      className="img-fluid bannerFrameLayer"
                    />
                    <Video
                      src={
                        "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
                      }
                      controls={true}
                      height={500}
                      //   width={500}
                      poster={imageObj.bannerVedioPoster}
                    />
                    {/* <video
                    className=""
                    controls
                    src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
                    poster={imageObj.bannerVedioPoster}
                  ></video> */}
                  </Box>
                  <Box className="banner_layer">
                    <img
                      src={imageObj.bannerLayer}
                      alt="bannerLayer"
                      className="img-fluid"
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BannerSection;
