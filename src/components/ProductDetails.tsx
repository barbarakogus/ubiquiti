import styled from "styled-components";
import { RiArrowLeftSLine } from 'react-icons/ri';

const StyledMainContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 10rem auto;
    width: 50%;
`
const StyledDiv = styled.div`
    display: flex; 
    flex-Direction: column;
    width: 60%;
`
const StyledSections = styled.section`
    border-bottom: 1px solid var(--neutral-gray);
    display: flex; 
    justify-content: space-between; 
    margin-bottom: 0.5rem;
    padding-bottom: 0.3rem; 
`
const StyledParagrapf = styled.p`
    color: var(--dark-gray);
    font-size: 14px;
`
interface ProductDetailsProps {
    productSelected: Product
    onClickBack: () => void
}

const ProductDetails = ({ productSelected, onClickBack }: ProductDetailsProps) => {
    return (
        <>
            <div style={{ backgroundColor: 'var(--light-gray)', padding: '1rem' }}>
                <RiArrowLeftSLine style={{ color: 'var(--dark-gray)', cursor: 'pointer' }} onClick={() => onClickBack()} />
            </div>
            <StyledMainContainer>
                <div>
                    <img
                        src="https://storage.googleapis.com/barbara_ubiquiti/images/resize_optimized_img.png"
                        alt={productSelected.name}
                    />
                </div>
                <StyledDiv>
                    <StyledSections>
                        <StyledParagrapf>Product line</StyledParagrapf>
                        <StyledParagrapf>{productSelected.line}</StyledParagrapf>
                    </StyledSections>
                    <StyledSections>
                        <StyledParagrapf>ID</StyledParagrapf>
                        <StyledParagrapf>{productSelected.id}</StyledParagrapf>
                    </StyledSections>
                    <StyledSections>
                        <StyledParagrapf>Name</StyledParagrapf>
                        <StyledParagrapf>{productSelected.name}</StyledParagrapf>
                    </StyledSections>
                    <StyledSections>
                        <StyledParagrapf>Short name</StyledParagrapf>
                        <StyledParagrapf>{productSelected.shortNames}</StyledParagrapf>
                    </StyledSections>
                    <StyledSections>
                        <StyledParagrapf>Max power</StyledParagrapf>
                        <StyledParagrapf>{productSelected.line}</StyledParagrapf>
                    </StyledSections>
                    <StyledSections >
                        <StyledParagrapf>Speed</StyledParagrapf>
                        <StyledParagrapf>{productSelected.line}</StyledParagrapf>
                    </StyledSections>
                    <StyledSections>
                        <StyledParagrapf>Number of ports</StyledParagrapf>
                        <StyledParagrapf>{productSelected.network?.numberOfPorts}</StyledParagrapf>
                    </StyledSections>
                </StyledDiv>
            </StyledMainContainer>
        </>
    )
}

export default ProductDetails; 