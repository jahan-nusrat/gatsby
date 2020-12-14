import { Link } from 'gatsby'
import React from 'react'

const ProductCard = ({product}) => {
    const {price, slug, title, img} = product;
    return (
        <div className="col-lg-4">
            <img className="card-img-top" src={img.fluid.src} height="250px" alt={title}/>
            <div>
                <h5>{title}</h5>
                <p>Price: <strong>$ {price}</strong> </p>
                <Link to={`/products/${slug}`}>
                    <p className="card-text">More Details</p>
                </Link>
            </div>
        </div>
    )
}

export default ProductCard
