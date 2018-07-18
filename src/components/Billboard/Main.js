import React from 'react'
import injectSheet from "react-jss";
import Link from 'gatsby-link'

const borderWeb = 991
const borderSmallMobile = 364

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
      "paddingLeft": "230px",
      height:"1030px"
    },
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
    "backgroundImage": "url(\"../img/common/bg_main01.jpg\")",
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
      "display": "block"
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
  }
})

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

<div className={classes.container + " " + classes.cover}>
	<div className={classes.content + " " + classes.cover__content}>
		<div className={classes.logo}><a href="#"><img src="./img/common/logo.png" /></a></div>
		<div className={classes.textbox}>
			<div className={classes.text_area1}><span className="bold">팀이 필요할 땐 Team</span><span className="light">Quick</span></div>
			<div className={classes.btn_area}>
				<a className={classes.btn_area_a} href="https://itunes.apple.com/kr/app/teamquick-%ED%8C%80%ED%80%B5-%EB%A1%A4-%EB%93%80%EC%98%A4-%EA%B2%A9%EC%A0%84-%ED%8C%80-%EC%B0%BE%EA%B8%B0/id1403184041" target="_blank"><img src="./img/common/btn_appstore.png" /></a>
				<a className={classes.btn_area_a} href="https://play.google.com/store/apps/details?id=com.teamquick8" target="_blank"><img src="./img/common/btn_googleplay.png" /></a>
        <a className={classes.btn_area_a_mobile} href={appDownLoadUrl} target={appDownLoadUrl ? "_blank" : null}>앱 다운로드</a>
			</div>      
		</div>
	</div>
</div>

 <div className={classes.container + " " + classes.page2 + " " + classes.container_page2}>
 	<div className={classes.content + " " + classes.page2__content}>
 		<div className={classes.textbox2}>
 			<div className={classes.textarea + " " + classes.light}>개인매칭<br />
       <span className={classes.subCopy}>롤 듀오, 자유랭크 팀 찾기</span>
      </div>
 			<div className={classes.tab_area}>
 				<ul className={classes.myUl}>
           <li 
            className={this.state.active1.first ? classes.textbox2__tab_area_li_active : classes.textbox2__tab_area_li}
            onClick={() => {
              this.setState({
                active1: {
                  first: true,
                  second: false,
                  third: false
                }
              })
            }}
           >프로필 등록</li>
           <li 
            className={this.state.active1.second ? classes.textbox2__tab_area_li_active : classes.textbox2__tab_area_li}
            onClick={() => {
              this.setState({
                active1: {
                  first: false,
                  second: true,
                  third: false
                }
              })
            }}
          >팀 만들기</li>
           <li 
            className={this.state.active1.third ? classes.textbox2__tab_area_li_active : classes.textbox2__tab_area_li}
            onClick={() => {
              this.setState({
                active1: {
                  first: false,
                  second: false,
                  third: true
                }
              })
            }}
          >팀 참가하기</li>
 				</ul>
 			</div>
 		</div>
 		<div className={classes.right_img}>
      {this.state.active1.first ? <img src="./img/main/img_main01.png" /> : null}
      {this.state.active1.second ? <img src="./img/main/img_main01.png" /> : null}
      {this.state.active1.third ? <img src="./img/main/img_main01.png" /> : null}
     </div>
     <div className={classes.bottom_img1} />
 	</div>
 </div>

 <div className={classes.container + " " + classes.page3 + " " + classes.container_page3}>
 	<div className={classes.content + " " + classes.page3__content}>
 		<div className={classes.textbox2}>
 			<div className={classes.text_area + " " + classes.light}>팀 매칭<br />
       <span className={classes.subCopy}>연습경기 만들기 / 찾기</span></div>
 			<div className={classes.tab_area}>
 				<ul className={classes.myUl}>
           <li 
            className={this.state.active2.first ? classes.textbox2__tab_area_li_active : classes.textbox2__tab_area_li}
            onClick={() => {
              this.setState({
                active2: {
                  first: true,
                  second: false
                }
              })          
            }}
           >연습경기 만들기</li>
           <li 
            className={this.state.active2.second ? classes.textbox2__tab_area_li_active : classes.textbox2__tab_area_li}
            onClick={() => {
              this.setState({
                active2: {
                  first: false,
                  second: true
                }
              })          
            }}            
           >연습경기 참가하기</li>
 				</ul>
 			</div>
 		</div>
 		<div className={classes.right_img}>
     {this.state.active2.first ? <img src="./img/main/img_main02.png" /> : null}
     {this.state.active2.second ? <img src="./img/main/img_main02.png" /> : null}
    </div>
    <div className={classes.bottom_img2} />
 	</div>
 </div>

<div className={classes.container + " " + classes.page4 + " " + classes.container_page4}>
	<div className={classes.page4__content}>
		<div className={classes.textbox3}>
			<div className={classes.text_area + " " + classes.light + " " + classes.textbox3__text_area}>간편한 팀매칭을 경험하세요.</div>
			<div className={classes.btn_area + " " + classes.textbox3__btn_area}>
				<a className={classes.btn_area_a} href="https://itunes.apple.com/kr/app/teamquick-%ED%8C%80%ED%80%B5-%EB%A1%A4-%EB%93%80%EC%98%A4-%EA%B2%A9%EC%A0%84-%ED%8C%80-%EC%B0%BE%EA%B8%B0/id1403184041" target="_blank"><img src="./img/common/btn_appstore.png" /></a>
				<a className={classes.btn_area_a} href="https://play.google.com/store/apps/details?id=com.teamquick8" target="_blank"><img src="./img/common/btn_googleplay.png" /></a>
			</div>
		</div>
	</div>
</div>

<div className={classes.footer}>
		<div className={classes.footer__top_area}>
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
			{/* <div className={classes.footer__top_area__sitemap_box} style={{marginRight:144}}>
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
			</div> */}
			<div className={classes.footer__top_area__sns_area}>
				<div className={classes.footer__top_area__sns_area__btn_sns}><a href="https://www.facebook.com/teamquickapp" target="_blank"><img src="./img/common/icon_facebook.png" /></a></div>
				<div className={classes.footer__top_area__sns_area__btn_sns}><a href="https://www.youtube.com/channel/UC8am9SwIPvM7XYXv3c3Fh4g" target="_blank"><img src="./img/common/icon_youtube.png" /></a></div>
			</div>
		</div>
		
		<div className={classes.footer__bottom_area}>
			<div className="footer_logo"><img src="./img/common/footer_logo.png" /></div>
			<div className={classes.footer__bottom_area__footer_text}>ⓒ  2018 TeamQuick</div>
			<div className={classes.footer__bottom_area__footer_text}>
				팀퀵 | 사업자 등록번호 : 471-13-00857 | 대표 : 옥성진<br />
				경기도 안산시 단원구 연수원로 87, 104호(원곡동, 창의관)<br />문의 : <a className={classes.underline} href="mailto:admin@teamquick.app">admin@teamquick.app</a>
			</div>
			{/* <div className={classes.footer__bottom_area__footer_text}>
				<a href="#">이용약관</a>&nbsp; |&nbsp;
				<a href="#">개인정보 처리방침</a>
			</div> */}
		</div>
</div>


</div>
    )
  }
}

export default injectSheet(styles)(Main);