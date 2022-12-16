function Product(props) {
    return (
        <li>
            <h3>{props.productName}</h3>
            <strong><p>{props.productPrice}</p></strong>
            <p>{props.productDescription}</p>
        </li>
    );
}

export default Product;