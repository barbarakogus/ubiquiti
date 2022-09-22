import styled from "styled-components";
import ProductCard from "./ProductCard";

const StyledMainContainer = styled.div`
    margin: 1.5rem auto;
    width: 90%;
`
const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const StyledParagraph = styled.p`
    color: var(--gray);
    font-size: 12px;
    padding: 1rem 0; 
`

interface ProductGridProps {
    data: Product[]
}

const ProductsGrid = ({ data }: ProductGridProps) => {
    return (
        <StyledMainContainer>
            <StyledParagraph>{data.length} devices</StyledParagraph>
            <StyledDiv>
                {data.map((product, key) => (
                    <ProductCard product={product} key={key} />
                ))}
            </StyledDiv>
        </StyledMainContainer>
    )
}

export default ProductsGrid; 