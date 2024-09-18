import { Box, Container, Typography } from "@mui/material";
import PrimaryButton from "../../components/common/PrimaryButton";

const StartLearningBanner = () => {
  return (
    <>
      <Box component="section" className="satrt_learn_section">
        <Container maxWidth="lg">
          <Box className="learn_banner_wrap" sx={{ textAlign: "center" }}>
            <Typography variant="h2" mb={4}>
              Ready to learn design with Nia Matos
            </Typography>
            <PrimaryButton btnLabel="start learning today" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default StartLearningBanner;
