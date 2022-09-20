import logo from '../assets/logo_ubiquiti.svg';
import styled from "styled-components";

const StyledDiv = styled.div`
    background-color: var(--neutral-gray);
    display: flex;
    justify-content: space-between;
`

const StyledParagraph = styled.p`
    color: var(--dark-gray);
    margin-right: 1.75rem;
`

const Header = () => {
    return (
        <StyledDiv>
            <img src={logo} alt="logo Ubiquiti" />
            <StyledParagraph>Barbara</StyledParagraph>
        </StyledDiv>
    )
}

export default Header; 