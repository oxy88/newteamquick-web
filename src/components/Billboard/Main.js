import React from 'react'
import injectSheet from "react-jss";
import Link from 'gatsby-link'
import styled, { injectGlobal } from "styled-components"

const borderWeb = 991
const borderSmallMobile = 364

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

const styles = theme => ({
  a: {
    "&:link": {
      color: "#fff",
      textDecoration: "none"
    },
    "&:visited": {
      color: "#fff",
      textDecoration: "none"
    },
    "&:active": {
      color: "#fff",
      textDecoration: "none"
    },
    "&:hover": {
      color: "#fff",
      textDecoration: "none"
    }
  },
  "a_link": {
    "color": "#fff",
    "textDecoration": "none"
  },
  "a_visited": {
    "color": "#fff",
    "textDecoration": "none"
  },
  "a_active": {
    "color": "#fff",
    "textDecoration": "none"
  },
  "a_hover": {
    "color": "#fff",
    "textDecoration": "none"
  },
  "ellipsis": {
    "display": "block",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "overflow": "hidden"
  },
  "ellipsis_2row": {
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "display": "-webkit-box !important",
    "WebkitLineClamp": "2",
    "WebkitBoxOrient": "vertical",
    "wordWrap": "break-word"
  },
  "hidden": {
    "display": "none"
  },
  "center": {
    "textAlign": "center"
  },
  "bold": {
    "fontWeight": "800"
  },
  "light": {
    "fontWeight": "100"
  },
  "html": {
    "height": "100%"
  },
  "body": {
    "height": "100%"
  },
  "wrap": {
    "width": "100%",
    "height": "100%"
  },
  "container": {
    "position": "relative",
    width: "100%",
    "margin": "0 auto",
    "overflow": "hidden",    
    [`@media (min-width: ${borderWeb}px)`]: {
      "minWidth": "1460px",
      "width": "100%",
      "maxHeight": "1030px",    
    }
  },
  "content": {
    "position": "relative",
    "width": "100%",
    "margin": "0 auto",
    height: '100vh',
    [`@media (min-width: ${borderWeb}px)`]: {
      "maxHeight": "1030px",
      // "paddingLeft": "230px",
      height:"100vh"
    },
  },
  newPage1: {
    backgroundColor: "#58595b"
  },
  newPage1Bottom: {
    backgroundColor: "#ffffff"
  },
  newPage2: {
    backgroundColor: "#d92129"
  },
  "container_page2": {
    "background": "#fff"
  },
  "container_page3": {
    "background": "#fafafa"
  },
  "container_page4": {
    display: 'none',
    [`@media (min-width: ${borderWeb}px)`]: {
      display: 'block',
      "background": "#3b6cdf",
    }
  },
  "cover": {
    "height": "100%",
    "position": "relative",
    backgroundColor: "#ffffff",
    "backgroundImage": "url(\"../img_m/common/bg_main01.jpg\")",
    backgroundPosition: "50vw 50vh",
    backgroundSize: "100vw 100vh",
    backgroundRepeat: "no-repeat",
    "backgroundPosition": "center",
    [`@media (min-width: ${borderWeb}px)`]: {
    "backgroundImage": "url(\"../img/common/bg_main01.png\")",
    "backgroundSize": "cover",
    }
  },
  "cover2": {
    "height": "100%",
    "position": "relative",
    backgroundColor: "#ffffff",
    "backgroundImage": "url(\"../img_m/common/bg_main01.jpg\")",
    backgroundPosition: "50vw 50vh",
    backgroundSize: "100vw 100vh",
    backgroundRepeat: "no-repeat",
    "backgroundPosition": "center",
    [`@media (min-width: ${borderWeb}px)`]: {
    "backgroundImage": "url(\"../img/common/bg_main02.png\")",
    "backgroundSize": "cover",
    }
  }, 
  "back1": {
    "height": "100%",
    "position": "relative",
    backgroundColor: "#ffffff",
    "backgroundImage": "url(\"../img_m/common/bg_main01.jpg\")",
    backgroundPosition: "50vw 50vh",
    backgroundSize: "100vw 100vh",
    backgroundRepeat: "no-repeat",
    "backgroundPosition": "center",
    [`@media (min-width: ${borderWeb}px)`]: {
    "backgroundImage": "url(\"../img/common/back1.jpg\")",
    "backgroundSize": "cover",
    }
  },
  "back2": {
    "height": "100%",
    "position": "relative",
    backgroundColor: "#ffffff",
    "backgroundImage": "url(\"../img_m/common/bg_main01.jpg\")",
    backgroundPosition: "50vw 50vh",
    backgroundSize: "100vw 100vh",
    backgroundRepeat: "no-repeat",
    "backgroundPosition": "center",
    [`@media (min-width: ${borderWeb}px)`]: {
    "backgroundImage": "url(\"../img/common/back2.jpg\")",
    "backgroundSize": "cover",
    }
  },
  "back3": {
    "height": "100%",
    "position": "relative",
    backgroundColor: "#ffffff",
    "backgroundImage": "url(\"../img_m/common/bg_main01.jpg\")",
    backgroundPosition: "50vw 50vh",
    backgroundSize: "100vw 100vh",
    backgroundRepeat: "no-repeat",
    "backgroundPosition": "center",
    [`@media (min-width: ${borderWeb}px)`]: {
    "backgroundImage": "url(\"../img/common/back3.png\")",
    "backgroundSize": "cover",
    }
  },
  "back4": {
    "height": "100%",
    "position": "relative",
    backgroundColor: "#ffffff",
    "backgroundImage": "url(\"../img_m/common/bg_main01.jpg\")",
    backgroundPosition: "50vw 50vh",
    backgroundSize: "100vw 100vh",
    backgroundRepeat: "no-repeat",
    "backgroundPosition": "center",
    [`@media (min-width: ${borderWeb}px)`]: {
    "backgroundImage": "url(\"../img/common/back4.png\")",
    "backgroundSize": "cover",
    }
  },         
  "cover__content": {
    height: 'calc(100vh)',
    [`@media (min-width: ${borderWeb}px)`]: {
      height: `calc(100vh)`,
      }
  },
  "logo": {
    "display": "none",
    [`@media (min-width: ${borderWeb}px)`]: {
      "position": "absolute",
      "margin": "35px 0 0 65px",
      "display": "block",
      zIndex: 10
    }    
  },
  "textbox": {
    "color": "#fff",
    "position": "absolute",
    fontSize: '24px',
    top:70,
    textAlign: "center",
    width: "100vw",    
    [`@media (min-width: ${borderSmallMobile}px)`]: {
      fontSize: '31px',
    },
    [`@media (min-width: ${borderWeb}px)`]: {
      left: 230,
      "fontSize": "35px",
      "top": "50%",
      marginTop: "-120px",
      "marginLeft": "60px",
      textAlign: 'left',
    }
  },
  "btn_area_a": {
    display: 'none',
    [`@media (min-width: ${borderWeb}px)`]: {
      display: 'inline',
      "marginRight": "15px"
    },
  },
  btn_area_a_mobile: {
    fontSize: "24px",
    lineHeight: '2.0',
    position: 'absolute',
    left: 0,
    right: 0,
    top: `calc(100vh - 150px)`,
    backgroundColor: '#497fff',
    borderRadius: 10,
    width: "100vw",
    height: '57px',
    [`@media (min-width: ${borderWeb}px)`]: {
      display: 'none'
    }
  },
  "page2__content": {
    height: `calc(100vh)`,
    minHeight: '500px',
    backgroundColor: '#fff',
  },
  "page3__content": {
    height: `calc(100vh)`,
    minHeight: '500px',
    backgroundColor: '#fafafa',
  },
  "textbox2": {
    textAlign: 'center',
      width:"356px",
      fontSize:"36px",
      color:"#3b6cdf",
      margin:"0 auto 47px",
      paddingTop:"47px",
    [`@media (min-width: ${borderWeb}px)`]: {
      textAlign: "left",
      "fontSize": "50px",
      "color": "#3b6cdf",
      "position": "absolute",
      "top": "25%",
      "marginLeft": "60px"
    },
  },
  "textbox2__text_area": {
    "marginBottom": "45px",
    "lineHeight": "1.2"
  },
  "textbox2__tab_area_li": {
    "float": "left",
    "display": "block",
    "padding": "10px 0",
    "color": "#8a8b8a",
    "fontSize": "17px",
    "marginRight": "26px",
    "cursor": "pointer",
    "&:hover": {
      "color": "#3b6cdf"
    },
    "&:active": {
      "color": "#3b6cdf",
      borderBottom: "2px solid #3b6cdf"
    }
  },
  "textbox2__tab_area_li_hover": {
    "color": "#3b6cdf"
  },
  "textbox2__tab_area_li_active": {
    "float": "left",
    "display": "block",
    "padding": "10px 0",
    "color": "#8a8b8a",
    "fontSize": "17px",
    "marginRight": "26px",
    "cursor": "pointer",    
    "color": "#3b6cdf",
    "borderBottom": "2px solid #3b6cdf"
  },
  "right_img": {
    display: 'none',
    [`@media (min-width: ${borderWeb}px)`]: {
      display: 'block',
      "position": "absolute",
      "top": "175px",
      "right": "20px"
    }    
  },
  "page4__content": {
    "height": "155px",
    "padding": "46px 0 46px 230px"
  },
  "textbox3__text_area": {
    "fontSize": "30px",
    "height": "62px",
    "lineHeight": "62px",
    "color": "#fff",
    "float": "left",
    "width": "50%",
    "paddingLeft": "30px"
  },
  "textbox3__btn_area": {
    "float": "left",
    "width": "50%",
    "paddingLeft": "130px"
  },
  "footer": {
    position: 'relative',
    "background": "#3a3d41",
    "fontSize": "14px",
    "color": "#a8a9aa",
    [`@media (min-width: ${borderWeb}px)`]: {
      "height": "505px",
    }
  },
  "footer__top_area": {
    width: "100vw",
    paddingTop:'42px',
    "position": "relative",
    [`@media (min-width: ${borderWeb}px)`]: {
      "width": "1000px",
      "left": "50%",
      "marginLeft": "-426px",
      "height": "200px",
      "paddingTop": "71px",
    }
  },
  "footer__top_area__sitemap_box": {
    display: 'block',
    float: 'left',
    width: "50%",
    margin: '0 auto',
    paddingLeft: 20,
    [`@media (min-width: ${borderWeb}px)`]: {
      "float": "left",
      "marginRight": "104px",
      width: 'auto',
      margin: 'auto',
      paddingLeft: 0,      
    },
  },
  "footer_a": {
    fontSize: "14px",  
    "color": "#a8a9aa",
    "letterSpacing": "0px",
    [`@media (min-width: ${borderSmallMobile}px)`]: {
      "fontSize": "22px",
    },
    [`@media (min-width: ${borderWeb}px)`]: {
      "fontSize": "14px",
    },    
  },
  "footer__title": {
    "display": "block",
    "fontWeight": "bold",
    "marginBottom": "20px"
  },
  "footer__top_area__sns_area": {
    position: 'absolute',
    right: 20,
    top: 200,
    [`@media (min-width: ${borderWeb}px)`]: {
      position:'absolute',
      right:0,
      width:'120px',
    }
  },
  "footer__top_area__sns_area__btn_sns": {
    "float": "left",
    "marginLeft": "10px"
  },
  "footer__bottom_area": {
    clear:"both",
    height:"240px",
    padding:"120px 0 0 0",
    textAlign: "center",
    paddingBottom: "250px",
    [`@media (min-width: ${borderWeb}px)`]: {
      "padding": "60px 0 0 0",
    },
  },
  "footer__bottom_area__footer_text": {
    backgroundColor: '#3a3d41',
    "marginTop": "21px",
    "letterSpacing": "0"
  },
  underline: {
    textDecoration: "underline"
  },
  subCopy: {
    display: 'none',
    [`@media (min-width: ${borderWeb}px)`]: {
      display: 'block',
      fontSize: "24px"
    }
  },
  bottom_img1: {
    position:'absolute',
    bottom:'0',
    width:'100vw',
    height:'50vh',
    backgroundImage: 'url("../img_m/main/img_main01.png")',
    backgroundSize: 'cover',
    backgroundPosition: '20px',
    backgroundRepeat: 'no',
    [`@media (min-width: ${borderWeb}px)`]: {
      display: 'none',
    }
  },
  bottom_img2: {
    position:'absolute',
    bottom:'0',
    width:'100vw',
    height:'50vh',
    backgroundImage: 'url("../img_m/main/img_main02.png")',
    backgroundSize: 'cover',
    backgroundPosition: '20px',
    backgroundRepeat: 'no',
    [`@media (min-width: ${borderWeb}px)`]: {
      display: 'none',
    }
  },
  text_area1: {
    marginBottom: 42
  },
  myUl: {
    display: 'flex',
    justifyContent: 'center',
  },
  flexRowContainer: {
    display: 'flex',
    flexDirection: "row"
  } 
})

const Page1Top = styled.div`
  background-color: #d9212a;
  height: 40vh;
  transform: skewY(-4deg);
`

const Page1Bottom = styled.div`
  background-color: #ffffff;
  height: 60vh;
  transform: skewY(-4deg);
  background-image: url("../img/common/bg_main01.png");
  background-size: 'cover';
`

const GrayTop = styled.div`
  background-color: #58595b;
  height: 72.7vh;
  transform: skewY(-4deg);
`

const GrayBottom = styled.div`
  background-color: #ffffff;
  height: 35vh;
  transform: skewY(-4deg);
`

const RedLeft = styled.div`
  background-color: #d9212a;
  width: 72.7vw;
  transform: skewX(-8deg);
`

const RedRight = styled.div`
  background-color: #ffffff;
  width: 25vw;
  transform: skewX(-8deg);
`

const RowContainer = styled.div`
  background-color: #d9212a;
  display: flex;
  flex-direction: row;
`

const Page1CopyBox = styled.div`
  position: absolute;
  top: 18.6vh;
  left: 10.6vw;
`

const Page1Copy = styled.span`
  font-size: 40px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.35;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`

const Page1SubCopyBox = styled.div`
  position: absolute;
  top: 36.9vh;
  left: 10.6vw;
`

const Page1SubCopyBox2 = styled.div`
  position: absolute;
  top: 50.8vh;
  left: 10.6vw;
`

const Page1SubCopyBox3 = styled.div`
  position: absolute;
  top: 64.6vh;
  left: 10.6vw;
`

const Page1SubCopy = styled.span`
  display: flex;
  margin: 0px;
  padding: 0px;
  font-size: 15px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.67;
  letter-spacing: 1.2px;
  text-align: left;
  color: #ffffff;
`

const Page1SubSubCopy = styled.span`
  display: block;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 100;
  font-style: normal;
  font-stretch: normal;
  text-align: left;
  color: #ffffff;
`

const Page1Contact = styled.div`
  position: absolute;
  bottom: 45px;
  left: 10.6vw;
  width: 300px;
  height: 39px;
  border-radius: 20px;
  background-color: #58595b;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SocialContainer = styled.div`
  position: absolute;
  bottom: 45px;
  right: 90px;
  display: flex;
  flexDirection: row;
  justify-content: center;
  align-items: center;
`

const SocialButton = styled.div`
  width: 233px;
  height: 39px;
  margin-right: 19px;
  border-radius: 20px;
  border: solid 3px #58595b;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SocialLink = styled.span`
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  color: #58595b;  
`

const PartnerContainer = styled.div`
  position: absolute;
  bottom: 29.7vh;
  right: 1vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const BusinessButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 281.6px;
  height: 39px;
  background-color: #d92129;
  border-radius: 20px;
`

const PartnersButton = styled.div`
  margin-top: 24px;
  width: 112px;
  height: 39px;
  border-radius: 20px;
  border: solid 3px #d92129;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Page2Left = styled.div`
  background-color: #d9212a;
  width: 29.3vw;
  transform: skewX(-8deg);
`

const Page2Right = styled.div`
  background-color: #ffffff;
  transform: skewX(-8deg);
  z-index: 0;
  width: 78.6vw;
  background-image: url("../img/common/bg_main02.png");
  background-size: 'auto';
  background-repeat: repeat-x;
`

const Page2ContentsContainer = styled.div`
  position: absolute;
  bottom: 19.5vh;
  left: 4.2vw;
  z-index: 10;
  display: flex;
  flex-direction: column;
`

const Page2Copy = styled.span`
  z-index: 10;
  font-size: 40px;
  text-align: left;
  color: #ffffff;
`

const Page2SubCopy = styled.span`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 100;
  color: #ffffff;
`

const Page0ContentsContainer = styled.div`
  position: absolute;
  top: 15vh;
  left: 10vw;
  z-index: 10;
  display: flex;
  flex-direction: column;
`

const Page0DetailsContainer = styled.div`
  position: absolute;
  bottom: 20vh;
  left: 10vw;
  z-index: 10;
  display: flex;
  flex-direction: column;
`

const Page0Copy = styled.span`
  z-index: 10;
  font-size: 40px;
  text-align: left;
  color: #ffffff;
`

const DownloadApp = styled.div`
  width: 162px;
  height: 39px;
  border-radius: 20px;
  background-color: #818181;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RequestPartner = styled.div`
  margin-top: 16px;
  width: 183px;
  height: 39px;
  border-radius: 20px;
  border: solid 3px #818181;
  display: flex;
  justify-content: center;
  align-items: center;  
`

const AllLinks = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
`

const EachLink = styled.span`
  margin-top: 4px;
  color: #cccccc;
  fontWeight: 100;
  fontSize: 13px;
  display: flex;
  align-items: center;
`

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active1: {
        first: true,
        second: false,
        third: false,
      },
      active2: {
        first: true,
        second: false,
      }
    }
    this.changeAppScreen = this.changeAppScreen.bind(this)
  }

  componentWillMount() {

  }

  changeAppScreen = (event) => {

  }

  getMobileOS() {
    if (typeof window === 'undefined') return 'undefined'

    const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera

    if (/android/i.test(userAgent)) {
      return "Android"
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS"
    }

    return "unknown"
  }

  render() {
    const { classes } = this.props

    const os = this.getMobileOS()
    
    let appDownLoadUrl = ""

    if (os === 'Android') {
      appDownLoadUrl = "https://play.google.com/store/apps/details?id=com.teamquick8"
    }
    if (os === 'iOS') {
      appDownLoadUrl = "https://itunes.apple.com/kr/app/teamquick-%ED%8C%80%ED%80%B5-%EB%A1%A4-%EB%93%80%EC%98%A4-%EA%B2%A9%EC%A0%84-%ED%8C%80-%EC%B0%BE%EA%B8%B0/id1403184041"
    }

    return (
<div className="wrap">

<div className={classes.container} >
	<div className={classes.content + " " + classes.cover__content + " " + classes.back1}>
		<div className={classes.logo}><a href="#"><img src="./img/common/newLogo.png" /></a></div>
    <Page0ContentsContainer>
      <Page0Copy>
        생활 게임 평생 게임 
      </Page0Copy>
      <Page0Copy>
        우리가 만드는 e스포츠
      </Page0Copy>      
      <span style={{marginTop: "16px", color: "#ffffff", fontWeight: 100}}>팀퀵을 통해 누구나 쉽게 일상 속에서 e스포츠를 경험하고 즐깁니다</span>
    </Page0ContentsContainer>
    <Page0DetailsContainer>
        <DownloadApp>
          <span style={{
            color: "#ffffff",
            fontWeight: 500,
            fontSize: "15px"
          }}>Download App</span>
        </DownloadApp>
        <RequestPartner>
          <span style={{
            color: "#818181",
            fontWeight: 500,
            fontSize: "15px"
          }}>팀퀵 파트너 신청하기</span>
        </RequestPartner>
        <AllLinks>
          <EachLink>
            <span style={{
              marginRight: '12px'
            }}>
              <img src="./img/common/fb.png" />
            </span>페이스북 페이지</EachLink>
          <EachLink>
            <span style={{
              marginRight: '12px'
            }}>
              <img src="./img/common/youtube.png" />
            </span>유튜브 페이지</EachLink>
          <EachLink>
            <span style={{
              marginRight: '12px'
            }}>
              <img src="./img/common/twitch.png" />
            </span>트위터 페이지</EachLink>
          <EachLink>
            <span style={{
              marginRight: '12px'
            }}>
              <img src="./img/common/mail.png" />
            </span>제휴 문의 : business@teamquick.gg</EachLink>
          <EachLink>
            <span style={{
              marginRight: '12px'
            }}>
              <img src="./img/common/mail.png" />
            </span>고객 문의 : help@teamquick.gg</EachLink>
          <EachLink>
            <span style={{
              marginRight: '12px'
            }}>
              <img src="./img/common/call.png" />
            </span>070-4060-8222</EachLink>
        </AllLinks>
    </Page0DetailsContainer>
	</div>
</div>

<div className={classes.container + " "} >
	<div className={classes.content + " " + classes.cover__content + " " + classes.back2}>
		<div className={classes.logo}><a href="#"><img src="./img/common/newLogo.png" /></a></div>
    <Page2ContentsContainer>
      <Page2Copy>
        e스포츠 유저 데이터
      </Page2Copy>
      <Page2Copy>
        분석 알고리즘
      </Page2Copy>
      <Page2SubCopy>
        <span style={{
          marginRight: "16px"
        }}>
          <img src="./img/common/icon1.png"/>
        </span>게이머의 통합 게임 데이터 확보 및 패턴 관리
      </Page2SubCopy>
      <Page2SubCopy>
        <span style={{
          marginRight: "16px"
        }}>
          <img src="./img/common/icon2.png"/>
        </span>각 게이머에게 맞춤형 팀과 대회 추천
      </Page2SubCopy>
      <Page2SubCopy>
        <span style={{
          marginRight: "16px"
        }}>
          <img src="./img/common/icon3.png"/>
        </span>광고주에게 맞춤형 타게팅 서비스 제공
      </Page2SubCopy>      
    </Page2ContentsContainer>    
	</div>
</div>

<div className={classes.container + " "} >
	<div className={classes.content + " " + classes.cover__content + " " + classes.back3}>
		<div className={classes.logo}><a href="#"><img src="./img/common/newLogo.png" /></a></div>
    <Page1CopyBox>
      <Page1Copy>
        팀퀵으로
      </Page1Copy>
      <br />
      <Page1Copy>
        게임을 한다는 것은
      </Page1Copy>      
    </Page1CopyBox>

    <Page1SubCopyBox>
      <Page1SubCopy>
        Anyone
      </Page1SubCopy>
      <Page1SubSubCopy>
        누구나 대회에 참여하고 선수가 될 수 있어요
      </Page1SubSubCopy>
    </Page1SubCopyBox>

    <Page1SubCopyBox2>
      <Page1SubCopy>
        Different
      </Page1SubCopy>
      <Page1SubSubCopy>
        새롭고 다양한 대회 컨텐츠들이 언제나 있어요
      </Page1SubSubCopy>
    </Page1SubCopyBox2> 

    <Page1SubCopyBox3>
      <Page1SubCopy>
        Profitable
      </Page1SubCopy>
      <Page1SubSubCopy>
      좋아하는 게임을 하면서 상금을 받을 수 있어요
      </Page1SubSubCopy>
    </Page1SubCopyBox3> 

    <Page1Contact>
      <span style={{
        color: "#ffffff",
        fontSize: "15px",
        fontWeight: 500
      }}>E-Mail 고객문의</span>
      <span style={{
        color: "#999999",
        fontSize: "13px",
        fontWeight: 100
      }}>&nbsp;(help@teamquick.gg)</span>
    </Page1Contact> 

    <SocialContainer>
    <SocialButton>
      <SocialLink>Twitch</SocialLink>
    </SocialButton>
    <SocialButton>
      <SocialLink>Youtube</SocialLink>
    </SocialButton>
    <SocialButton>
      <SocialLink>Facebook</SocialLink>
    </SocialButton>
    </SocialContainer>    
	</div>
</div>
<div className={classes.container + " "} >
	<div className={classes.content + " " + classes.cover__content + " " + classes.back4}>
		<div className={classes.logo}><a href="#"><img src="./img/common/newLogo.png" /></a></div>
    <Page1CopyBox>
      <Page1Copy>
        팀퀵으로
      </Page1Copy>
      <br/>
      <Page1Copy>
        게임을 만든다는 것은
      </Page1Copy>      
    </Page1CopyBox>

    <Page1SubCopyBox>
      <Page1SubCopy>
        Easy
      </Page1SubCopy>
      <Page1SubSubCopy>
        포스터 제작, 대진표 작성, 대회 진행, 게임 중계까지..
      </Page1SubSubCopy>
      <Page1SubSubCopy>
        앱 하나로 손 쉽게
      </Page1SubSubCopy>      
    </Page1SubCopyBox>

    <Page1SubCopyBox2>
      <Page1SubCopy>
        Different
      </Page1SubCopy>
      <Page1SubSubCopy>
        당신의 아이디어로 친구, 동료 그리고 팬과
      </Page1SubSubCopy>
      <Page1SubSubCopy>
        더 즐겁게 게임을 할 수 있어요
      </Page1SubSubCopy>      
    </Page1SubCopyBox2> 

    <Page1SubCopyBox3>
      <Page1SubCopy>
        Popularize
      </Page1SubCopy>
      <Page1SubSubCopy>
      많은 관심 분야 사람들에게 
      </Page1SubSubCopy>
      <Page1SubSubCopy>
      당신의 대회와 게임 콘텐츠를 알릴 수 있어요
      </Page1SubSubCopy>      
    </Page1SubCopyBox3>     

    <PartnerContainer>
      <BusinessButton>
        <span style={{
          fontSize: '15px',
          color: "#ffffff",
          fontWeight: 500
        }}>E-Mail 제휴문의</span>
        <span style={{
          fontSize: '13px',
          fontWeight: 100,
          color: "#cccccc"
        }}>&nbsp;(biz@teamquick.gg)</span>
      </BusinessButton>
      <PartnersButton>
        <span style={{
          color: "#d9212a"
        }}>Partners</span>
      </PartnersButton>
      <span style={{
        marginTop: '16px',
        color: "#58595b"
      }}>아이비스 PC방 유성봉명점, 아이비스 PC방 서산석림점</span>
    </PartnerContainer>    
	</div>
</div>

<div className={classes.footer}>
		{/* <div className={classes.footer__top_area}>
			<div className={classes.footer__top_area__sitemap_box}>
				<span className={classes.footer__title + " " + classes.footer_a}>안내</span>
				<ul>
          <li><Link to="/recruit/" className={classes.footer_a} style={{color: "#ff0000"}}>채용</Link></li>
					<li><a className={classes.footer_a} href="#">공지사항</a></li>
					<li><a className={classes.footer_a} href="#">자주 묻는 질문</a></li>
				</ul>
			</div>
			<div className={classes.footer__top_area__sitemap_box}>
				<span className={classes.footer__title + " " + classes.footer_a}>문의</span>
				<ul>
          <li><a className={classes.footer_a} href="mailto:admin@teamquick.app">제휴</a></li>
          <li><a className={classes.footer_a} href="mailto:admin@teamquick.app">마케팅</a></li>
				</ul>
			</div>
			<div className={classes.footer__top_area__sitemap_box} style={{marginRight:144}}>
				<span className={classes.footer__title}><a href="#">개인</a></span>
				<ul>
					<li><a href="#">개인매칭</a></li>
					<li><a href="#">프로필 등록</a></li>
					<li><a href="#">팀 만들기</a></li>
					<li><a href="#">팀 참가하기</a></li>
				</ul>
			</div>
			<div className={classes.footer__top_area__sitemap_box}>
				<span className={classes.footer__title}><a href="#">팀</a></span>
				<ul>
					<li><a href="#">팀 매칭</a></li>
					<li><a href="#">연습경기 만들기</a></li>
					<li><a href="#">연습경기 참가하기</a></li>
				</ul>
			</div>
			<div className={classes.footer__top_area__sns_area}>
				<div className={classes.footer__top_area__sns_area__btn_sns}><a href="https://www.facebook.com/teamquickapp" target="_blank"><img src="./img/common/icon_facebook.png" /></a></div>
				<div className={classes.footer__top_area__sns_area__btn_sns}><a href="https://www.youtube.com/channel/UC8am9SwIPvM7XYXv3c3Fh4g" target="_blank"><img src="./img/common/icon_youtube.png" /></a></div>
			</div>
		</div> */}
		
		<div className={classes.footer__bottom_area}>
			<div className="footer_logo"><img src="./img/common/footer_logo.png" /></div>
			<div className={classes.footer__bottom_area__footer_text}>ⓒ  2018 TeamQuick</div>
			<div className={classes.footer__bottom_area__footer_text}>
				팀퀵 | 사업자 등록번호 : 471-13-00857 | 대표 : 옥성진<br />
				경기도 안산시 단원구 연수원로 87, 104호(원곡동, 창의관)<br />문의 : <a className={classes.underline} href="mailto:admin@teamquick.app">admin@teamquick.app</a>
			</div>
			<div className={classes.footer__bottom_area__footer_text}>
				{/* <a href="#">이용약관</a>&nbsp; |&nbsp; */}
				<a href="privacy">개인정보 처리방침</a>
			</div>
		</div>
</div>


</div>
    )
  }
}

export default injectSheet(styles)(Main);