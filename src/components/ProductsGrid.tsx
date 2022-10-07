import styled from "styled-components";
import ProductCard from "./ProductCard";

const StyledMainContainer = styled.div`
    margin: 1.5rem auto;
    width: 85%;
`
const StyledParagraph = styled.p`
    color: var(--gray);
    font-size: 12px;
    padding: 1rem 0; 
`
const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`

interface ProductGridProps {
    data: Product[]
    onRowSelected: (produc: Product) => void
}

const ProductsGrid = ({ data, onRowSelected }: ProductGridProps) => {
    return (
        <>
            <StyledMainContainer>
                <StyledParagraph>{data.length} devices</StyledParagraph>
                <StyledDiv>
                    {data.map((product, key) => (
                        <ProductCard product={product} key={key} onRowSelected={onRowSelected} />
                    ))}
                </StyledDiv>
            </StyledMainContainer>
        </>

    )
}

export default ProductsGrid; 