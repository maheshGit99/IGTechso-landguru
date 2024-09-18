import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import imageObj from "../../utils/images";

const WorkingProcess = ({ nextSectionRef }) => {
  return (
    <>
      <Box
        component="section"
        className="working_process_section"
        ref={nextSectionRef}
      >
        <Container maxWidth="lg">
          <Box className="working_process_wrap">
            <Grid container spacing={8}>
              <Grid size={{ xs: 12 }}>
                <Box className="common_heading" sx={{ textAlign: "center" }}>
                  <Typography variant="body2">Whats the function</Typography>
                  <Typography variant="h3" mb={3}>
                    Let’s see how it works
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <Box className="working_process_content">
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                  >
                    <Typography variant="h5">01</Typography>
                    <img
                      src={imageObj.arrowUp}
                      alt=""
                      className="img-fluid arrow_img"
                    />
                  </Box>
                  <Typography variant="h6" my={2}>
                    Set disbursement Instructions
                  </Typography>
                  <Typography variant="body2">
                    Get your blood tests delivered at home collect a sample from
                    the your blood tests.
                  </Typography>
                </Box>
              </Grid>{" "}
              <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <Box className="working_process_content">
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                  >
                    <Typography variant="h5">02</Typography>
                    <img
                      src={imageObj.arrowDown}
                      alt=""
                      className="img-fluid arrow_img"
                    />
                  </Box>
                  <Typography variant="h6" my={2}>
                    Assembly retrieves funds from your account
                  </Typography>
                  <Typography variant="body2">
                    Get your blood tests delivered at home collect a sample from
                    the your blood tests.
                  </Typography>
                </Box>
              </Grid>{" "}
              <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <Box className="working_process_content">
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                  >
                    <Typography variant="h5">03</Typography>
                    <img
                      src={imageObj.arrowUp}
                      alt=""
                      className="img-fluid arrow_img"
                    />
                  </Box>
                  <Typography variant="h6" my={2}>
                    Assembly initiates disbursement
                  </Typography>
                  <Typography variant="body2">
                    Get your blood tests delivered at home collect a sample from
                    the your blood tests.
                  </Typography>
                </Box>
              </Grid>{" "}
              <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <Box className="working_process_content">
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                  >
                    <Typography variant="h5">04</Typography>
                  </Box>
                  <Typography variant="h6" my={2}>
                    Customer receives funds payment
                  </Typography>
                  <Typography variant="body2">
                    Get your blood tests delivered at home collect a sample from
                    the your blood tests.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default WorkingProcess;
