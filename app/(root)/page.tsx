import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";

const Homepage = () => {
    return (
        <div className='my-10'>
            <ProductList
                data={sampleData.products}
                title='Newest Arrivals'
                limit={4}
            />
        </div>
    )
}

export default Homepage;