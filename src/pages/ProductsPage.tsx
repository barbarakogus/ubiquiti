import { useEffect, useState } from "react";
import ProductsGrid from "../components/ProductsGrid";
import { useAppSelector } from "../store";
import ProductsList from "../components/ProductsList";
import ProductDetails from "../components/ProductDetails";

const ProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [productSelected, setProductSelected] = useState<Product | null>();

    const { contentToRender } = useAppSelector((state) => state.products);

    useEffect(() => {
        fetch("https://static.ui.com/fingerprint/ui/public.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Something went wrong.");
                }
                return res.json();
            })
            .then((res) => res.devices)
            .then((devices) =>
                devices.map((d: any) => ({
                    line: d.line.name,
                    id: d.line.id,
                    name: d.product.name,
                    icon: {
                        id: d.icon.id,
                        resolutionBig: 251,
                        resolutionSmall: 51,
                    },
                    shortName: d.shortnames,
                    network: d?.unifi?.network,
                }))
            )
            .then((products) => setProducts(products))
            .catch((err) => console.log(err));
    }, []);

    const onProductSelected = (product: Product) => {
        if (
            product.network?.radios &&
            Object.keys(product.network.radios).length > 0
        ) {
            const maxPower = Math.max(
                ...Object.values(product.network.radios)
                    .filter((value) => value.maxPower)
                    .map((value) => value.maxPower)
            );
        }
        if (
            product.network?.radios &&
            Object.keys(product.network.radios).length > 0
        ) {
            const maxSpeed = Math.max(
                ...Object.values(product.network.radios)
                    .filter((value) => value.maxSpeedMegabitsPerSecond)
                    .map((value) => value.maxSpeedMegabitsPerSecond)
            );
        }
        setProductSelected(product)
    };

    return (
        <div>
            {productSelected
                ? <ProductDetails productSelected={productSelected} onClickBack={() => setProductSelected(null)} />
                : contentToRender === "list"
                    ? (<ProductsList data={products} onRowSelected={onProductSelected} />)
                    : (<ProductsGrid data={products} />)
            }
        </div>
    );
};

export default ProductsPage;
