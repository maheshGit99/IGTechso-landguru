import { useRef } from "react";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PrimaryButton from "../../components/common/PrimaryButton";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const CoreFeatures = (props) => {
  const { scrollToNextSection } = props;

  return (
    <>
      <Box component="section" className="core_faetures_section">
        <Container maxWidth="lg">
          <Box className="core_fatures_wrap">
            <Grid container spacing={8}>
              <Grid size={{ xs: 12, md: 7, lg: 6 }}>
                <Stack
                  direction="row"
                  spacing={4}
                  sx={{ justifyContent: "center" }}
                  className="features_count_card_wrap"
                  useFlexGap
                >
                  <Box>
                    <Box className="features_count_card features_count_card1">
                      <Typography variant="h3">80K+</Typography>
                      <Typography variant="span" color="text.secondary">
                        We have more than students
                      </Typography>
                    </Box>
                    <Box className="features_count_card features_count_card2">
                      <Typography variant="h3">150+</Typography>
                      <Typography variant="span" color="text.secondary">
                        Free online tutorials videos avaialble
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ position: "relative", top: "-20px" }}>
                    <Box className="features_count_card features_count_card3">
                      <Typography variant="h3">90+</Typography>
                      <Typography variant="span" color="text.secondary">
                        Daily updated blogpost maintain
                      </Typography>
                    </Box>
                    <Box className="features_count_card features_count_card4">
                      <Typography variant="h3">& 3M</Typography>
                      <Typography variant="span" color="text.secondary">
                        Job posted everydays with qualification
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
                <Box className="down_arrow_icon" onClick={scrollToNextSection}>
                  <IconButton size="small">
                    <KeyboardDoubleArrowDownIcon fontSize="inherit" />
                  </IconButton>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 5, lg: 6 }}>
                <Box className="common_heading" mt={2}>
                  <Typography variant="body2">Core features</Typography>
                  <Typography variant="h3" mb={3}>
                    Smart Jackpots that you may love this anytime & anywhere
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

export default CoreFeatures;
