import {
  Box,
  Button,
  Card,
  Container,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { map } from "lodash";

const DesignCourse = () => {
  return (
    <>
      <Box component="section" className="design_course_section">
        <Container maxWidth="lg">
          <Box className="design_course_wrap">
            <Grid container>
              <Grid size={12}>
                <Box
                  className="common_heading"
                  mt={2}
                  sx={{ textAlign: "center" }}
                >
                  <Typography variant="body2">Quality features</Typography>
                  <Typography variant="h3" mb={3}>
                    Popular Designing Course
                  </Typography>
                </Box>
              </Grid>
              <Grid size={12}>
                {map([1, 2, 3, 4, 5], (i) => (
                  <Card variant="outlined" className="course_card" key={i}>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, sm: 3, md: 1.5, lg: 1 }}>
                        <IconButton className="play_btn">
                          <PlayCircleIcon color="primary" />
                        </IconButton>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 9, md: 10.5, lg: 11 }}>
                        <Stack
                          direction="row"
                          sx={{
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                          }}
                        >
                          <Box>
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

                            <Typography gutterBottom variant="h6" my={2}>
                              Professional graphic design tutorial full course
                              with exercise file
                            </Typography>
                            <Typography variant="body2">
                              Get your tutorials delivered at let home collect
                              sample from the victory of the managments.
                            </Typography>
                          </Box>
                          <Box sx={{ marginTop: "1rem" }}>
                            <Button variant="contained" color="success">
                              7 Video Classe | 4 hrs
                            </Button>
                          </Box>
                        </Stack>
                      </Grid>
                      {/* <Grid size={{ xs: 6, md: 2 }}>
                      
                      </Grid> */}
                    </Grid>
                  </Card>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default DesignCourse;
