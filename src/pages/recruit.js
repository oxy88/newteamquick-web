import React from 'react'
import Link from 'gatsby-link'
import injectSheet from "react-jss";

class Recruit extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">
                <button style={{
                    width: "100vw",
                    height: "100",
                }}>팀퀵 홈으로 돌아가기</button>
                </Link>
                <h1>디자이너 필요함</h1>
                <p>앱 디자인 추가, 수정</p>
                <p>웹 디자인 추가, 수정</p>
                <p>기타 홍보물, 영상 등등</p>
                <h2>필수</h2>
                <p>포토샵, 일러스트레이터</p>
                <h2>우대</h2>
                <p>스케치, 영상편집프로그램(파이널컷프로)</p>      
                <h2>웹 디자인, 앱 디자인 포트폴리오받음</h2>
                <hr />
                <h1>개발자 필요함</h1>
                <h2>앱</h2>
                <p>프론트엔드 : React Native + Apollo</p>
                <p>백엔드 : Node.JS + GraphQL</p>
                <p>서버 : AWS RDS, ECS, EB</p>
                <h3>웹</h3>
                <p>React, Gatsby</p>
                <h2>깃허브 링크 받음</h2>
                <hr />
                <h2>지역 : 경기도 안산시 (2018년 11월까지)</h2>
                <h2>월급 : 지금은 줄 수 있음</h2>
                <hr />
                <h1>아무거나 하고 싶은거 있으면 연락주세요</h1>
                <a href="mailto:admin@teamquick.app" style={{wordWrap: "break-word", color: "#000000", textDecoration: 'underline', fontSize: '24px'}}><p>admin@teamquick.app</p></a>
            </div>
        )
    }
}

export default Recruit