import styled, { css } from "styled-components";

const StyledMainContainer = styled.div`
    margin: 1.5rem auto;
    width: 90%;
`
const StyledDiv = styled.div`
    height: calc(100vh - 150px);
    overflow-y: scroll;
`
const StyledTable = styled.table`
    border-collapse: collapse; 
    width: 100%;
`
const StyledImgCollumn = styled.th`
    color: var(--gray);
    font-size: 12px;
    padding: .5rem 0;
    text-align: center; 
    width: 8%;
`
const SharedStyledTable = css`
    color: var(--dark-gray); 
    padding-left: 30px;
    text-align: start; 
`
const StyledBodyTr = styled.tr`
    border-top: 1px solid var(--neutral-gray);
    cursor: pointer;

    &:hover {
        background-color:var(--light-gray);
    };
`
const StyledProductLineTh = styled.th`
    padding: .5rem 0;
    text-transform: uppercase; 
    width: 20%;
    ${SharedStyledTable}
`
const StyledProductLineTd = styled.td`
    width: 20%;
    ${SharedStyledTable}
`
const StyledProductNameth = styled.th`
    padding: .5rem 0;
    text-transform: uppercase; 
    ${SharedStyledTable};
`
const StyledProductNameTd = styled.td`
     ${SharedStyledTable}
`

interface ProductListProps {
    data: Product[]
    onRowSelected: (product: Product) => void
}

const ProductsList = ({ data, onRowSelected }: ProductListProps) => {
    return (
        <>
            <StyledMainContainer>
                <StyledDiv>
                    <StyledTable>
                        <thead>
                            <tr>
                                <StyledImgCollumn>{data.length} devices</StyledImgCollumn>
                                <StyledProductLineTh>product line</StyledProductLineTh>
                                <StyledProductNameth>name</StyledProductNameth>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((product, key) => (
                                <StyledBodyTr key={key} onClick={() => onRowSelected(product)}>
                                    <td style={{ textAlign: 'end' }}>
                                        <img
                                            src="https://storage.googleapis.com/barbara_ubiquiti/images/img.png"
                                            width={product.icon.resolutionSmall}
                                            alt={product.name}
                                        />
                                    </td>
                                    <StyledProductLineTd>{product.line}</StyledProductLineTd>
                                    <StyledProductNameTd>{product.name}</StyledProductNameTd>
                                </StyledBodyTr>
                            ))}
                        </tbody>
                    </StyledTable>
                </StyledDiv>
            </StyledMainContainer >
        </>
    )
}

export default ProductsList; 