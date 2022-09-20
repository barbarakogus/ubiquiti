import styled from "styled-components";
import HeaderProductsPage from "../components/HeaderProductsPage";
import { useEffect, useState } from "react";
import ProductsTable from "../components/ProductsTable";
import ProductsGrid from "../components/ProductsGrid";
import { useAppSelector } from "../store";

const StyledMainDiv = styled.div`
    
`

const ProductsPage = () => {

    const [data, setData] = useState([]);

    const { contentToRender } = useAppSelector((state) => state.products)

    useEffect(() => {
        fetch('https://static.ui.com/fingerprint/ui/public.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong.');
                }
                return res.json()
            })
            .then(res => setData(res))

    }, [])

    return (
        <StyledMainDiv>
            <HeaderProductsPage />
            {contentToRender === 'table' ? <ProductsTable /> : <ProductsGrid />}
        </StyledMainDiv>
    )
}

export default ProductsPage; 