import React, { useState } from 'react'
import Rating from 'react-rating'
import { useDispatch, useSelector } from 'react-redux'
import { addProductReview } from '../actions/productActions'

export default function Review({product}) {
    const dispatch = useDispatch()

    const[rating , setrating] = useState(5)
    const[comment , setcomment] = useState('')

    function sendreview(){

        if(localStorage.getItem('currentUser'))
        {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'))
        var alreadyreviewed

        for(var i=0;i<product.reviews.length;i++){
            if(product.reviews[i].userid == currentUser._id){
                alreadyreviewed = true
            }
        }

        if(alreadyreviewed)
        {
            alert('you have already reviewed this product')
        }
        else
        {
            const review={
                rating : rating,
                comment : comment
            }
            dispatch(addProductReview(review, product._id))
        }

        }

        else{
            window.location.href='/login'
        }

        
        
    }
    return (
        <div>
            <h1> Give your review</h1>

            <Rating
                    style={{color:'purple'}}
                    initialRating={rating}
                    emptySymbol="fa fa-thumbs-down fa-2x"
                    fullSymbol="fa fa-thumbs-up fa-2x"
                    onChange={(e)=>{setrating(e)}}
                    
           />

           <input type="text" className="form-control mt-2 " value={comment} onChange={(e)=>{setcomment(e.target.value)}}/>
           <button className="btn btn-dark mt-1" onClick={sendreview}>Submit Review</button>
           <hr/>

           <h1>Latest Reviews</h1>
           {product.reviews && (product.reviews.map(review=>{
               return <div>
                   <Rating
                    style={{color:'yellow'}}
                    initialRating={review.rating}
                    emptySymbol="fa fa-thumbs-down fa-2x"
                    fullSymbol="fa fa-thumbs-up fa-2x"
                   readonly
                    
           />
           <p>{review.comment}</p>
           <p>By: {review.name}</p>
           <hr/>


               </div>
           }))}
        </div>
    )
}
