import React from "react";
import { Link } from "react-router-dom";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

//Importing the styles from Header.styles
import { Wrapper, Content, LogoImg, TMDBLogImg } from "./Header.styles";

const Header = () => (
    <Wrapper>
        <Content>
            <Link to="/">
                <LogoImg src={RMDBLogo} alt="rmdb-logo" />
            </Link>
            
            <TMDBLogImg src={TMDBLogo} alt="tmdb-logo"/>
        </Content>
    </Wrapper>
)

export default Header;