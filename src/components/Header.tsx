import logo from '../assets/logo_ubiquiti.svg';
import styled from "styled-components";

const StyledMainContainer = styled.div`
    align-items: center;
    background-color: var(--light-gray);
    display: flex;
    justify-content: space-between;
`

const StyledDiv = styled.div`
    align-items: center;
    display: flex;
`

const StyledTtile = styled.h1`
    color: var(--dark-gray);
    font-size: 20px;
    margin-left: 1rem;
`

const StyledParagraph = styled.p`
    color: rgba(0, 0, 0, 0.65);
    margin-right: 1.75rem;
`

const Header = () => {
    return (
        <StyledMainContainer>
            <StyledDiv>
                <img src={logo} alt="logo Ubiquiti" />
                <StyledTtile>Devices</StyledTtile>
            </StyledDiv>
            <StyledParagraph>Barbara</StyledParagraph>
        </StyledMainContainer>
    )
}

export default Header; 