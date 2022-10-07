import styled from "styled-components";

const StyledCardContainer = styled.div`
  border: 1px solid var(--neutral-gray);
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1.5rem;
  margin-right: 1.5rem;

  width: 233px;

  &:hover {
    opacity: 0.8;
  }
`;
const StyledImage = styled.img`
  background-color: var(--light-gray);
  border-radius: 8px 8px 0 0;
  width: inherit;
`;
const StyledProductName = styled.p`
  color: var(--neutral-black);
  font-size: 14px;
  max-width: fit-content;
  padding: 0.5rem 0;
`;
const StyledProductLine = styled.p`
  color: var(--dark-gray);
  font-size: 12px;
`;

interface ProductCardProps {
  product: Product;
  onRowSelected: (produc: Product) => void
}

const ProductCard = ({ product, onRowSelected }: ProductCardProps) => {
  return (
    <StyledCardContainer onClick={() => onRowSelected(product)}>
      <StyledImage
        src="https://storage.googleapis.com/barbara_ubiquiti/images/resize_optimized_img.png"
        alt={product.name}
      />
      <div style={{ margin: "1rem" }}>
        <StyledProductName>{product.name}</StyledProductName>
        <StyledProductLine>{product.line}</StyledProductLine>
      </div>
    </StyledCardContainer>
  );
};

export default ProductCard;
