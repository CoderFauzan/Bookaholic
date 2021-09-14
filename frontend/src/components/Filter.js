import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {filterProducts} from "../actions/productActions"

export default function Filter() {
    const [searchkey, setsearchkey] = useState('')
    const [sort, setsort] = useState('popular')
    const [category, setcategory] = useState('all')

    const dispatch = useDispatch()


    return (
        <div>
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">

                <div className="col-md-3 w-100">
                    <input onChange={(e) => { setsearchkey(e.target.value) }}
                        value={searchkey}
                        type="text" className="form-control w-100 mt-2" placeholder="search products" />
                </div>
                <div className="col-md-3 w-100">
                    <select className="form-control w-100 mt-2" value={sort} onChange={(e)=>setsort(e.target.value)}>
                        <option value="popular">Popular</option>
                        <option value="htl">High to Low</option>
                        <option value="lth">Low to High</option>
                    </select>
                </div>
                <div className="col-md-3 w-100">
                    <select className="form-control w-100 mt-2" value={category} onChange={(e)=>setcategory(e.target.value)}>
                        <option value="all">All</option>
                        <option value="novel">Novel</option>
                        <option value="books">Books</option>
                        <option value="biography">Biography</option>
                        <option value="fullstack">Full stack</option>
                        <option value="reactjs">React</option>
                        <option value="nodejs">Node</option>
                        <option value="html">Html</option>
                        <option value="comics">Comic</option>
                    </select>
                </div>
                <div className="col-md-3 w-100">
                    <button className='btn btn-dark w-100 mt-2' onClick={()=>{dispatch(filterProducts(searchkey ,sort, category))}}>FILTER</button>
                </div>

            </div>
        </div>
    )
}
