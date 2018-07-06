import React from "react";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";
import PropTypes from "prop-types";
import Color from "color";

import config from "../../utils/config";

const styles = theme => ({
  footer: {
    display: "flex",
    flexDirection: "column",
    padding: "1em 50px",
    alignItems: "center",
    width: "100%",
    margin: "0 auto",
    color: theme.footer.colors.text,
    fontSize: ".85em",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      height: theme.footer.sizes.height,
      flexDirection: "row",
      justifyContent: "space-between"
    },
    "& a": {
      borderBottom: `1px solid ${theme.footer.colors.link}`,
      color: theme.footer.colors.link,
      textShadow: `1px 1px ${theme.main.colors.background},
        -1px 1px ${theme.main.colors.background},
        -1px -1px ${theme.main.colors.background},
        -1px 1px ${theme.main.colors.background},
        -1px 0 ${theme.main.colors.background},
        1px 0 ${theme.main.colors.background}`,
      "&:hover": {
        color: theme.footer.colors.linkHover,
        borderBottom: `1px solid ${theme.footer.colors.linkHover}`
      }
    }
  },
  texts: {
    fontSize: "1em",
    textAlign: "center",
    padding: "3em 2em 0 2em",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: "4em 15% 0"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      overflowY: "auto",
      width: "60%",
      paddingLeft: "10%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "2em",
      textAlign: "left"
    }
  },  
  column: {
    textAlign: "center",
    padding: ".2em 0",
    "& b": {
      color: Color(theme.footer.colors.text)
        .lighten(0.5)
        .string()
    },
    "@media (max-width: 599px)": {
      "& span": {
        display: "block",
        padding: ".2em 0"
      },
      "& b": {
        display: "none"
      }
    }
  },
  links: {
    "& ul": {
      listStyle: "none",
      margin: 0,
      padding: 0
    },
    "& li": {
      display: "block",
      margin: ".3em 0",
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        display: "inline-block",
        margin: "0 .7em 0 0",
        "&:after": {
          content: "'|'",
          margin: "0 0 0 1em",
          color: Color(theme.footer.colors.text)
            .lighten(0.5)
            .string()
        },
        "&:last-child": {
          "&:after": {
            content: "''"
          }
        }
      }
    }
  }
});

const Footer = ({ classes, data }) => {
  const links = data.content.edges.find(el => el.node.frontmatter.title === "footer").node.html;

  return (
    <footer className={classes.footer}>
      <div className={classes.texts}>
        <p>팀퀵 | 사업자 등록번호 : 471-13-00857 | 대표 : 옥성진</p>
        <p>경기도 안산시 단원구 연수원로 87, 104호(원곡동, 창의관)</p>
        <p>문의 : <a href="mailto: admin@teamquick.app">admin@teamquick.app</a></p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default injectSheet(styles)(Footer);
