import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '@material-ui/core/TextField';

// @material-ui/icons
import CallMade from "@material-ui/icons/CallMade";
import CallReceived from "@material-ui/icons/CallReceived";
import Tune from "@material-ui/icons/Tune";
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

import productStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

class FormPage extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <InfoArea
                title="Properties"
                description=""
                icon={Tune}
                iconColor="danger"
                vertical
              />
              <GridContainer>
                <GridItem xs={12} sm={6} md={4}>
                  <TextField
                    id="txtClassName"
                    label="Class Name"
                    helperText="Enter Class Name prefix"
                    variant="outlined"
                    fullWidth
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                  <TextField
                    id="txtNamedCredential"
                    label="Named Credential"
                    helperText="Enter Named Credential API Name"
                    variant="outlined"
                    fullWidth
                />
                </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                  <InputLabel htmlFor="ddlRequestType">Request Type</InputLabel>
                  <NativeSelect
                    id="ddlRequestType"
                    fullWidth
                    variant="outlined"
                  >
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                  </NativeSelect>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <InfoArea
                title="Request JSON"
                description=""
                icon={CallMade}
                iconColor="success"
                vertical
              />
              <TextField
                id="txtRequestJSON"
                style={{ margin: 8 }}
                placeholder="Paste your JSON string here"
                fullWidth
                margin="normal"
                multiline
                rows={50}
                variant="outlined"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <InfoArea
                title="Response JSON"
                description=""
                icon={CallReceived}
                iconColor="success"
                vertical
              />
              <TextField
                id="txtResponseJSON"
                style={{ margin: 8 }}
                placeholder="Paste your JSON string here"
                fullWidth
                margin="normal"
                multiline
                rows={50}
                variant="outlined"
              />
            </GridItem>
          </GridContainer>
        </div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h3 className={classes.title}>Usage</h3>
            <h5 className={classes.description}>
              Add Instructions on usage here
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(FormPage);
