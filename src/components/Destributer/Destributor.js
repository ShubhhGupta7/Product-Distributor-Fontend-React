function Product(props) {
    return (
        <li>
            <h3>{props.name}</h3>
            <strong><p>{props.email}</p></strong>
            <p>{props.contact}</p>
        </li>
    );
}

export default Product;