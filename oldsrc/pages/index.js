import React from "react";
import injectSheet from "react-jss";
import { injectGlobal } from "styled-components"
import PropTypes from "prop-types";

import Billboard from "../components/Billboard/";
import Footer from "../components/Footer/";
import Main from '../components/Billboard/Main'

import { BMYEONSUNG_otf } from '../fonts'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Anton&subset=vietnamese');
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
@font-face { font-family: 'Noto Sans KR'; font-style: normal; font-weight: 100; src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff2) format('woff2'), url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff) format('woff'), url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.otf) format('opentype'); }
@font-face { font-family: 'Noto Sans KR'; font-style: normal; font-weight: 300; src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff2) format('woff2'), url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff) format('woff'), url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.otf) format('opentype'); }
@font-face { font-family: 'Noto Sans KR'; font-style: normal; font-weight: 400; src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2) format('woff2'), url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff) format('woff'), url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf) format('opentype'); }
@font-face { font-family: 'Noto Sans KR'; font-style: normal; font-weight: 500; src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff2) format('woff2'), url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff) format('woff'), url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.otf) format('opentype'); }
@font-face { font-family: 'Noto Sans KR'; font-style: normal; font-weight: 700; src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2) format('woff2'), url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff) format('woff'), url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf) format('opentype'); }
@font-face { font-family: 'Noto Sans KR'; font-style: normal; font-weight: 900; src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff2) format('woff2'), url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff) format('woff'), url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.otf) format('opentype'); }
`

// eslint-disable-next-line no-unused-vars
const styles = theme => ({
  main: {
    width: "100%",
    minHeight: "100vh",
    position: "relative",
  },
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
    zIndex: "-1",
    "& img": {
      width: "100%",
      height: "100%"
    }
  }
});

class Index extends React.Component {
  render() {
    const { classes, data } = this.props;

    return (
      <main className={classes.main}>
        {/* <div className={classes.bg}>
          <picture>
            <source
              type="image/webp"
              media="(min-width: 1024px)"
              srcSet={data.background2000Webp.resize.src}
            />
            <source media="(min-width: 1024px)" srcSet={data.background2000.resize.src} />
            <source
              type="image/webp"
              media="(min-width: 600px)"
              srcSet={data.background1000Webp.resize.src}
            />
            <source media="(min-width: 600px)" srcSet={data.background1000.resize.src} />
            <source type="image/webp" srcSet={data.background500Webp.resize.src} />
            <img src={data.background500.resize.src} alt="" />
          </picture>
        </div> */}
        <Main data={this.props.data} />      
        {/* <Billboard data={this.props.data} />
        <Billboard data={this.props.data} />
        <Billboard data={this.props.data} />
        <Billboard data={this.props.data} />
        <Footer data={this.props.data} /> */}
      </main>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default injectSheet(styles)(Index);

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query IndexQuery {
    content: allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
    phone300: allImageSharp(filter: { id: { regex: "/phone(-perspective)*.png/" } }) {
      edges {
        node {
          ... on ImageSharp {
            resolutions(toFormat: PNG, width: 300, quality: 90) {
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
              originalName
            }
          }
        }
      }
    }
    phone400: allImageSharp(filter: { id: { regex: "/phone(-perspective)*.png/" } }) {
      edges {
        node {
          ... on ImageSharp {
            resolutions(toFormat: PNG, width: 400, quality: 90) {
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
              originalName
            }
          }
        }
      }
    }
    phone500: allImageSharp(filter: { id: { regex: "/phone(-perspective)*.png/" } }) {
      edges {
        node {
          ... on ImageSharp {
            resolutions(toFormat: PNG, width: 500, quality: 90) {
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
              originalName
            }
          }
        }
      }
    }
    background500: imageSharp(id: { regex: "/background.jpg/" }) {
      resize(width: 500, height: 1500, quality: 90, cropFocus: SOUTHWEST) {
        src
      }
    }
    background1000: imageSharp(id: { regex: "/background.jpg/" }) {
      resize(width: 1000, height: 1500, quality: 90, cropFocus: SOUTHWEST) {
        src
      }
    }
    background2000: imageSharp(id: { regex: "/background.jpg/" }) {
      resize(width: 2000, height: 1500, quality: 90, cropFocus: SOUTHWEST) {
        src
      }
    }
    background500Webp: imageSharp(id: { regex: "/background.jpg/" }) {
      resize(width: 500, height: 1500, toFormat: WEBP, quality: 90, cropFocus: SOUTHWEST) {
        src
      }
    }
    background1000Webp: imageSharp(id: { regex: "/background.jpg/" }) {
      resize(width: 1000, height: 1500, toFormat: WEBP, quality: 90, cropFocus: SOUTHWEST) {
        src
      }
    }
    background2000Webp: imageSharp(id: { regex: "/background.jpg/" }) {
      resize(width: 2000, height: 1500, toFormat: WEBP, quality: 90, cropFocus: SOUTHWEST) {
        src
      }
    }
  }
`;
