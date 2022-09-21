interface ProductListProps {
    data: Product[]
}

const ProductsList = ({ data }: ProductListProps) => {
    return (
        <div>
            {data.map(product => (
                <div>
                    <p>{product.line}</p>
                    <p>{product.name}</p>
                </div>
            ))}
        </div>
    )
}

export default ProductsList; 