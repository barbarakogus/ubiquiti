import styled, { css } from "styled-components";
import Input from "./common/Input";
import { BsListUl } from "react-icons/bs";
import { BsListTask } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";
import { BsFillGridFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setContentToRender } from "../features/productsReducer"
import { useAppSelector } from "../store";

const StyledMainContainer = styled.div`
    border-bottom: 1px solid var(--neutral-gray);
    border-top: 1px solid var(--neutral-gray);
    display: flex;
    justify-content: space-between;
    padding: .4rem 1.75rem;
`
const StyledDiv = styled.div`
    align-items: center;
    display: flex;
    gap: 16PX;
`
const sharedStyleIcon = css`
    color: var(--dark-gray);
    cursor: pointer;
    height: 22px;
    width: 22px;
`
const sharedStyleIconFill = css`
    background-color: var(--light-gray);
    border-radius: 4px;
    padding: 3px;
`
const StyledIconListFill = styled(BsListUl)`
    ${sharedStyleIcon}
    ${sharedStyleIconFill}
`
const StyledIconGridFill = styled(BsFillGridFill)`
    ${sharedStyleIcon}
    ${sharedStyleIconFill}
`
const StyledIconList = styled(BsListTask)`
      ${sharedStyleIcon}
`
const StyledIconGrid = styled(BsGrid)`
    ${sharedStyleIcon}
`
const StyledParagrapf = styled.p`
       color: var(--dark-gray);
       cursor: pointer;
`

const HeaderProductsPage = () => {

    const dispatch = useDispatch()
    const { contentToRender } = useAppSelector((state) => state.products)

    return (
        <StyledMainContainer>
            <Input />
            <StyledDiv>
                {contentToRender === 'list'
                    ? <StyledIconListFill />
                    : <StyledIconList onClick={() => dispatch(setContentToRender('list'))} />
                }
                {contentToRender === 'grid'
                    ? <StyledIconGridFill />
                    : <StyledIconGrid onClick={() => dispatch(setContentToRender('grid'))} />
                }
                <StyledParagrapf>Filter</StyledParagrapf>
            </StyledDiv>
        </StyledMainContainer>
    )
}

export default HeaderProductsPage;