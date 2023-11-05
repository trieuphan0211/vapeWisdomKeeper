import React from "react";
import "../assets/css/HomePage.css";
import noVape from "../assets/img/no-smoke.png";
import batteryVape from "../assets/img/battery_vape.png";
import e_liquid from "../assets/img/e-liquid.png";
import heating from "../assets/img/heating.png";
import cartridge from "../assets/img/cartridge.png";
import mouthpiece from "../assets/img/mouthpiece.png";
import goals from "../assets/img/17goals.png";
import goal3 from "../assets/img/SDG-3.svg";
import goal11 from "../assets/img/SDG-11.svg";
import nicotine from "../assets/img/nicotine.png";
import lung_cancer from "../assets/img/lung-cancer.png";
import heart_disease from "../assets/img/heart-disease.png";
import clue from "../assets/img/clue.png";
import gateway_smoke from "../assets/img/break.png";

import Box from "@mui/material/Box";
import { Button, FormControl, FormLabel, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const FormLabelCustom = styled(FormLabel)({
  marginBottom: "10px",
  fontSize: "16px",
  fontWeight: "bold",
});
const TextFieldCustom = styled(TextField)({
  fontSize: "16px",
  marginBottom: "20px",
});
export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Box className="homepage">
      <Box className="homepage_banner d-flex justify-content-center align-items-center">
        <Box className="homepage_banner-content">
          <h1>THE VAPE WISDOM KEEPER</h1>
          <p>
            "The Vape Wisdom Keeper" is an organization committed to educating
            the public about the potential health risks and drawbacks associated
            with vaping. In this fictional context, the organization believes
            that it is essential to provide accurate information to help
            individuals make informed decisions about vaping.
          </p>
          <Button
            sx={{
              backgroundColor: "var(--primary-1)",
              color: "#000",
              width: "50%",
              borderRadius: "50px",
              padding: "10px 50px",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "var(--primary-2)",
                color: "#000",
              },
            }}
          >
            Learn more
          </Button>
        </Box>
        <img className="homepage_banner-img" src={noVape} alt="" />
      </Box>
      <Box className="homepage_goals d-flex flex-column align-items-center justify-content-center">
        <h1>According to 2 of 17 Sustainable Development Goals</h1>
        <Box className="homepage_goals-body">
          <img className="homepage_goals-body-background" src={goals} alt="" />
          <a
            href="https://vietnam.un.org/en/sdgs/3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="homepage_goals-body-3" src={goal3} alt="" />
          </a>
          <a
            href="https://vietnam.un.org/en/sdgs/11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="homepage_goals-body-11" src={goal11} alt="" />
          </a>
        </Box>
      </Box>
      <Box className="homepage_info d-flex flex-column align-items-center">
        <h3 className="homepage_info-header">
          What is <span> Electronic Cigratte</span> ?
        </h3>
        <p className="homepage_info-content">
          An electronic cigarette, often referred to as an e-cigarette or vape,
          is a battery-operated device designed to deliver nicotine and other
          chemicals to the user in the form of an aerosol. E-cigarettes are
          considered alternatives to traditional tobacco cigarettes and are
          intended to provide a similar sensation to smoking without many of the
          harmful effects associated with burning tobacco.
        </p>
        <Grid
          className="homepage_info-components"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <div>
              <img src={batteryVape} alt="" />
              <h5>Battery</h5>
              <p>
                E-cigarettes are powered by a rechargeable battery. This battery
                provides the energy needed to heat the heating element.
              </p>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <img src={heating} alt="" />
              <h5>Heating Element</h5>
              <p>
                This component, often called an atomizer or coil, heats up and
                vaporizes the e-liquid.
              </p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <img src={e_liquid} alt="" />
              <h5>E-Liquid (Vape Juice)</h5>
              <p>
                E-liquid is a liquid mixture that typically contains nicotine,
                flavorings, and other chemicals. When heated, it turns into an
                aerosol that the user inhales. E-liquids come in a wide range of
                flavors and nicotine strengths.
              </p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <img src={cartridge} alt="" />
              <h5>Cartridge or Tank</h5>
              <p>
                The e-liquid is stored in a cartridge (in cig-a-like models) or
                a tank (in more advanced devices). This is where the e-liquid is
                housed and vaporized.
              </p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <img src={mouthpiece} alt="" />
              <h5>Mouthpiece</h5>
              <p>
                The user inhales the aerosol through a mouthpiece, which is
                often designed to resemble the tip of a traditional cigarette.
              </p>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box className="homepage_disavantages">
        <h3 className="homepage_disavantages-header">
          Health effects of<span> Electronic Cigratte</span>
        </h3>
        <Grid
          className="homepage_disavantages-components"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <div>
              <img src={nicotine} alt="" />
              <h5>Nicotine Addiction</h5>
              <p>
                E-cigarettes contain nicotine, an addictive substance that can
                lead to dependence and make quitting difficult.
              </p>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <img src={lung_cancer} alt="" />
              <h5>Respiratory and Lung Health</h5>
              <p>
                Vaping can cause respiratory issues and potentially lead to
                serious lung conditions, such as vaping-associated lung
                illnesses (VALI).
              </p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <img src={heart_disease} alt="" />
              <h5>Cardiovascular Risks</h5>
              <p>
                Nicotine in e-cigarettes can increase heart rate and blood
                pressure, raising the risk of heart problems and cardiovascular
                diseases.
              </p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <img src={clue} alt="" />
              <h5>Unknown Long-Term Effects</h5>
              <p>
                The long-term health consequences of e-cigarette use are not
                fully understood, and more research is needed to assess the
                risks over time.
              </p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <img src={gateway_smoke} alt="" />
              <h5>Gateway to Smoking</h5>
              <p>
                Some evidence suggests that e-cigarettes may serve as a gateway
                to traditional cigarette smoking, especially among young people.
              </p>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box className="homepage_video d-flex align-items-center justify-content-center">
        <Box className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/rGVwbiETMGg?rel=0"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </Box>
      </Box>
      <Box className="homepage_contact">
        <h3 className="homepage_contact-header">contact us</h3>
        <FormControl className="homepage_contact-form">
          <FormLabelCustom className="homepage_contact-form-label">
            Name
          </FormLabelCustom>
          <TextFieldCustom
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <FormLabelCustom className="homepage_contact-form-label">
            Email
          </FormLabelCustom>
          <TextFieldCustom
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <FormLabelCustom className="homepage_contact-form-label">
            Subject
          </FormLabelCustom>
          <TextFieldCustom
            id="outlined-basic"
            label="Subject"
            variant="outlined"
          />
          <FormLabelCustom className="homepage_contact-form-label">
            Description
          </FormLabelCustom>
          <TextFieldCustom
            id="outlined-basic"
            label="Description"
            variant="outlined"
            rows={4}
            multiline
          />
          <Button
            sx={{
              textTransform: "uppercase",
              padding: "10px 50px",
              width: "50%",
              margin: "0 auto",
              fontSize: "20px",
              backgroundColor: "var(--primary-2)",
              letterSpacing: "5px",
              "&:hover": {
                backgroundColor: "var(--primary-3)",
              },
            }}
            variant="contained"
            disabled
          >
            Send
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};
