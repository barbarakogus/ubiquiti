import styled from "styled-components";
import HeaderProductsPage from "../components/HeaderProductsPage";
import { useEffect, useState } from "react";
import ProductsGrid from "../components/ProductsGrid";
import { useAppSelector } from "../store";
import ProductsList from "../components/ProductsList";

const StyledMainDiv = styled.div`
    
`

const ProductsPage = () => {

    const [products, setProducts] = useState<Product[]>([])

    const { contentToRender } = useAppSelector((state) => state.products)

    useEffect(() => {
        fetch('https://static.ui.com/fingerprint/ui/public.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong.');
                }
                return res.json()
            })
            .then(res => res.devices)
            .then(devices => devices.map((d: any) => ({
                line: d.line.name,
                name: d.product.name,
            })))
            .then(products => setProducts(products))
            .catch(err => console.log(err))


    }, [])

    return (
        <StyledMainDiv>
            <HeaderProductsPage />
            {contentToRender === 'list'
                ? <ProductsList data={products} />
                : <ProductsGrid />}
        </StyledMainDiv>
    )
}

export default ProductsPage; 