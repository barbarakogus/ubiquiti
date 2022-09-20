import styled from "styled-components";
import Input from "./common/Input";
import { BsListUl } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { setContentToRender } from "../features/productsReducer"

const StyledMainContainer = styled.div`
    border-bottom: 1px solid var(--neutral-gray);
    border-top: 1px solid var(--neutral-gray);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: .4rem 1.75rem;
`

const StyledDiv = styled.div`
    align-items: center;
    display: flex;
    gap: 16PX;
`

const StyledIconList = styled(BsListUl)`
    background-color: var(--light-gray);
    color: var(--dark-gray);
    cursor: pointer;
    height: 20px;
    width: 20px;
`

const StyledIconGrid = styled(BsGrid)`
    color: var(--dark-gray);
    cursor: pointer;
    height: 20px;
    width: 20px;
`

const StyledParagrapf = styled.p`
       color: var(--dark-gray);
       cursor: pointer;
`

const HeaderProductsPage = () => {

    const dispatch = useDispatch()

    return (
        <StyledMainContainer>
            <Input />
            <StyledDiv>
                <StyledIconList onClick={() => dispatch(setContentToRender('table'))} />
                <StyledIconGrid onClick={() => dispatch(setContentToRender('grid'))} />
                <StyledParagrapf>Filter</StyledParagrapf>
            </StyledDiv>
        </StyledMainContainer>
    )
}

export default HeaderProductsPage;