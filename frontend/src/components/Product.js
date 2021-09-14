import React from 'react'
import Rating from 'react-rating'
import { Link } from 'react-router-dom'

export default function Product({ product }) {
    return (
        <div  >
            <div >

                <Link to={`product/${product._id}`}>
                    <img src={product.image} className='img-fluid ' />
                    <h1>{product.name}</h1>
                    <Rating
                    style={{color:'#ccff00'}}
                    initialRating={product.rating}
                    emptySymbol="fa fa-thumbs-down fa-2x"
                    fullSymbol="fa fa-thumbs-up fa-2x"
                    readonly={true}
/>

                    <h1>Price : {product.price}</h1>

                </Link>
               
            </div>

        </div>
    )
}