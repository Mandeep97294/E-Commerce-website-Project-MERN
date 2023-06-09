import React, { Fragment, useEffect, useState } from "react"
import "./Products.css"
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from '../../actions/productAction';
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import { Slider } from "@mui/material";
import { Typography } from "@mui/material";
import { useAlert } from "react-alert"
import MetaData from '../layout/MetaData';

const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
];

const Products = () => {
    const dispatch = useDispatch()

    const alert = useAlert();

    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([1, 100000]);
    const [category, setCategory] = useState("");

    const { products, loading, error, productsCount, resultPerPage, filteredProductsCount } = useSelector((state) => state.products)

    const { keyword } = useParams();

    const setCurrentPageNo = (e) => {
        setCurrentPage(e)
    }

    const priceHandler = (event, newPrice) => {
        console.log(newPrice)
        setPrice(newPrice);
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct(keyword, currentPage, price, category))
    }, [dispatch, keyword, currentPage, price, category, alert, error]);

    let count = filteredProductsCount;

    return <Fragment>
        {loading ? (
            <Loader />
        ) : <Fragment>
            <MetaData title="Products" />
            <h2 className="productsHeading">Products</h2>

            <div className="products">
                {products && products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>

            <div className="filterBox">
                <Typography>Price</Typography>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={price}
                    onChange={priceHandler}
                    valueLabelDisplay="auto"
                    min={0}
                    max={100000}
                />

                <Typography>Categories</Typography>
                <ul className="categoryBox">
                    {categories.map((category) => (
                        <li
                            className="category-link"
                            key={category}
                            onClick={() => setCategory(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>

            </div>
            {resultPerPage < count && (
                <div className="paginationBox">
                    <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={resultPerPage}
                        totalItemsCount={productsCount}
                        onChange={setCurrentPageNo}
                        nextPageText="Next"
                        prevPageText="Prev"
                        firstPageText="1st"
                        lastPageText="Last"
                        itemClass="page-item"
                        linkCLass="link"
                        activeClass="pageItemActive"
                        activeLinkClass="pageLinkActive"

                    />
                </div>
            )}
        </Fragment>
        }
    </Fragment>
}

export default Products