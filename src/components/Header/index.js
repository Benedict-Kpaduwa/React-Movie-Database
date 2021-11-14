import React from "react";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

//Importing the styles from Header.styles
import { Wrapper, Content, LogoImg, TMDBLogImg } from "./Header.styles";

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={RMDBLogo} alt="rmdb-logo" />
            <TMDBLogImg src={TMDBLogo} alt="tmdb-logo"/>
        </Content>
    </Wrapper>
)

export default Header;