import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import OamCutting from "./../assets/OamCutting.png"
import FoamBlack from "./../assets/FoamBlack.png"
import Acoustic from "./../assets/Acoustic.png"
import Dhouib from "./../assets/Dhouib.png"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  boxShadow: 'unset',
  fontSize: 'larger',
  color: theme.palette.text.secondary,
}));

const companies = [

  {
    label: 'Dhouib Nabegh Service DNS',
    imgPath: Dhouib,
  },

];

const steps = [
  {
    label: "CNC oam cutting hot wire machine",
    imgPath: OamCutting,
  },
  {
    label: "Foam Black",
    imgPath: FoamBlack,
  },

];
export default function Product() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs>
        <Item>
          <Typography variant="body1" gutterBottom paragraph>
            Introducing our state-of-the-art acoustic foam cutting machine, designed to revolutionize precision cutting technology. Our innovative machine offers cutting-edge precision technology, enabling cutting along three axes of movement. Whether it's varying densities of foam or intricate designs, our machine delivers unparalleled accuracy and consistency. Utilizing hot wire cutting technology, it ensures clean, smooth cuts, meeting the demands of even the most intricate projects. With our cutting-edge machine, achieving precise, customized acoustic foam solutions has never been easier.

          </Typography>

          <Stack
            justifyContent="center"
            alignItems="center"
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {
              companies.map(
                (company, index) => <Stack>{
                  <Box
                    component="img"
                    sx={{
                      height: 255,
                      maxWidth: 400,
                      overflow: 'hidden',
                      width: '100%',
                    }}
                    src={company.imgPath}
                    alt={company.label}
                  />


                }
                  <Typography variant="h6" gutterBottom style={{color:'black'}}>
                   <i>{company.label}</i> 
                  </Typography></Stack>

              )
            }
          </Stack>

          <Typography variant="body1" gutterBottom paragraph>
            This project marks a significant collaboration with "Nabegh Dhouib Service" for the creation of audio-visual studios. Together, we aim to set new standards in the industry by combining cutting-edge technology with innovative design concepts. With our expertise in acoustic foam cutting and their experience in audio-visual solutions, we are poised to deliver exceptional studio environments that exceed expectations. This collaboration represents a fusion of creativity, precision, and expertise, ensuring the seamless integration of acoustics and technology for unparalleled studio performance.
            Here is the range of products we offer for you.
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          <Typography variant="body1" paragraph>
            To place an order, we offer you a range of carefully curated items tailored to meet your specific needs. Explore our catalog including:
          </Typography>
          <Box
            display="inline-table"
            justifyContent="center"
            alignItems="center"
            sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 50,
                pl: 2,
                bgcolor: "background.default",
              }}
            >
            </Paper>

            <Box
              component="img"
              sx={{
                height: 400,
                display: 'block',
                overflow: 'hidden',
                width: 600,
              }}

              src={steps[activeStep].imgPath}
              alt={steps[activeStep].label}
            />

            <Box display="contents" sx={{ height: "100%", maxWidth: 400, width: "100%", p: 1 }}>
              {activeStep === 0 ? (
                <><title>CNC oam cutting hot wire machine </title>
                  <span className="price"><i>6000DT</i></span> Including Taxes</>
              ) : (
                <>
                  <title>Acoustic Foam Black 2000X1000 mm</title>
                  <span className="price"><i>35DT</i></span>  Including Taxes<br />
                  <title>Acoustic Foam Black 1000X500 mm</title>
                  <span className="price"><i>20DT</i></span>  Including Taxes
                </>
              )}

            </Box>
            <MobileStepper
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >

                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}

                </Button>
              }
            />
          </Box>
        </Item>
      </Grid>

    </Grid>

  );
}
