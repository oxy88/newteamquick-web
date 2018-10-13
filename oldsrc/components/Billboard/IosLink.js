import React from "react";
import { withStyles } from "material-ui/styles";
import PropTypes from "prop-types";
import Color from "color";
import { withPrefix } from 'gatsby-link'

import ArrowForward from "material-ui-icons/ArrowForward";
import Button from "material-ui/Button";

import config from "../../utils/config";

const styles = theme => ({
  root: {
    display: "block",
    borderRadius: "2px",
    background: theme.billboard.colors.ctaLinkBackground,
    border: 0,
    boxShadow: "none",
    color: "white",
    fontWeight: 300,
    fontFamily: "inherit",
    width: "250px",
    height: "60px",
    lineHeight: 1,
    textTransform: "none",
    padding: ".5em 2em",
    "&:hover": {
      background: Color(theme.billboard.colors.ctaLinkBackground)
        .lighten(0.2)
        .string()
    }
  },
  label: {
    fontSize: "2em",
    "& svg": {
      width: "1.1em",
      height: "1.1em",
      verticalAlign: "middle"
    }
  }
});

const IosLink = props => {
  const { classes, onClick } = props;
  return (
    <Button onClick={onClick} classes={{ root: classes.root, label: classes.label }}>
      <img src={withPrefix('images/icon_apple.png')} /> App Store
    </Button>
  );
};

IosLink.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default withStyles(styles)(IosLink);
