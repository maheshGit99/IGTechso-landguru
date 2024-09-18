import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { map } from "lodash";

const faqData = [
  {
    faqSummary: "How to contact with riders emergency ?",
    faqDetails: "faq deatil's part 1",
  },
  {
    faqSummary: "App installation failed, how to update system information?",
    faqDetails: "faq deatil's part 2",
  },
  {
    faqSummary: "Website reponse taking time, how to improve?",
    faqDetails:
      "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
  },
  {
    faqSummary: "New update fixed all bug and issues",
    faqDetails: "faq deatil's part 4",
  },
];
const FaqSection = () => {
  const [expanded, setExpanded] = useState("panel3");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Box component="section" className="faq_section">
        <Container maxWidth="lg">
          <Box className="faq_wrap">
            <Grid container spacing={2}>
              <Grid size={12}>
                <Box
                  className="common_heading"
                  mb={2}
                  sx={{ textAlign: "center" }}
                >
                  <Typography variant="body2">Frequent Question</Typography>
                  <Typography variant="h3">Do you have any question</Typography>
                </Box>
              </Grid>
              <Grid size={12}>
                <Box className="faq_style">
                  {map(faqData, (item, index) => (
                    <Accordion
                      key={index}
                      expanded={expanded === `panel${index + 1}`}
                      onChange={handleChange(`panel${index + 1}`)}
                    >
                      <AccordionSummary
                        expandIcon={
                          expanded === `panel${index + 1}` ? (
                            <RemoveIcon />
                          ) : (
                            <AddIcon />
                          )
                        }
                      >
                        <Typography
                          sx={{ color: "common.black", fontWeight: 600 }}
                        >
                          {item?.faqSummary}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails ms={2}>
                        <Typography>{item?.faqDetails}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                  {/* <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      //   aria-controls="panel2bh-content"
                      //   id="panel2bh-header"
                    >
                      <Typography sx={{ color: "text.secondary" }}>
                        You are currently not an owner
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Donec placerat, lectus sed mattis semper, neque lectus
                        feugiat lectus, varius pulvinar diam eros in elit.
                        Pellentesque convallis laoreet laoreet.
                      </Typography>
                    </AccordionDetails>
                  </Accordion> */}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FaqSection;
