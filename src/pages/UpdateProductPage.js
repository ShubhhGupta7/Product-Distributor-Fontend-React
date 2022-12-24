import UpadateProduct from '../components/Product/UpdateProduct';
import { useParams } from 'react-router-dom';
function UpadateProductPage() {
    const {productId} = useParams();
    return <>
        <UpadateProduct productId = {productId}/>
    </>
}

export default UpadateProductPage;