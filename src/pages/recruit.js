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
                <img src="./images/recruit_developer.jpg" />
                <img src="./images/recruit_designer.jpg" />
            </div>
        )
    }
}

export default Recruit