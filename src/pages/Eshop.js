import React, { useEffect, useState } from 'react';
import HeroShop from '../components/HeroShop';
import { Link } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../config-firebase';
import Products from '../components/Products';
import {UserAuth} from '../context/AuthContext';


function Eshop() {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');

    const {user} = UserAuth();



    console.log(search);


    //Lire les données produits venant de firebase 

    const getProducts = async () => {
        if (user) {
            const productsArray = [];
            const querySnapshot = await getDocs(collection(db, "products"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                productsArray.push({ id: doc.id, ...doc.data() });

                setProducts(productsArray);
            });
        }
        else{
            console.log('pas d\'user');
        }
        
    }

    const filterResult = (catItem) => {
        const result = products.filter((curData) => {
            console.log(curData);
            return curData.category === catItem;
        })
        setProducts(result);
    }

    useEffect(() => {
        getProducts();
    }, []);

    // La fonction qui permet d'ajouter des produits dans le panier

    let productCart;
    const addToCart = async (product) => {
        try {
            // Add a new document with a generated id
            const cartRef = doc(collection(db, "products"));

            // later...
            await setDoc(cartRef, productCart);

        } catch (e) {
            console.log(e.message);
        }
    }

    console.log(products);

    return (
        <>
            <HeroShop />
            <section className="container pt-5">
                <div className="float-end">
                    <Link to='/cart'>
                        <i className="fa-solid fa-2x fa-cart-plus"></i>
                    </Link>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h3>Rechercher</h3>
                        <div>
                            <input type="text" onChange={(e) => setSearch(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="search..." />
                        </div>
                        <h3>Filter by category</h3>
                        <button className="w-100 mb-4" onClick={() => filterResult('sac')}><i className="fa-solid fa-bag-shopping"></i> Sac</button>
                        <button className="w-100 mb-4" onClick={() => filterResult('mug')}><i className="fa-solid fa-mug-hot"></i> Mug</button>
                        <button className="w-100 mb-4" onClick={() => filterResult('equipement')}><i className="fa-solid fa-toolbox"></i> Equipement</button>
                        <button className="w-100 mb-4" onClick={() => filterResult('hoody')}><i className="fa-solid fa-shirt"></i> Hoody</button>
                        <button className="w-100 mb-4" onClick={() => filterResult('casquette')}><i className="fa-brands fa-redhat"></i> Casquette</button>
                    </div>
                    <div className="col-md-9">
                        <h3 className='text-center'>Products</h3>
                        {
                            products.length > 1 && (
                                <div className="product-box">
                                    <Products products={products} search={search} addToCart={addToCart} />
                                </div>
                            )
                        }
                        {
                            products.length < 1 && (
                                <div>
                                    <h6>En cours ...</h6>
                                </div>
                            )
                        }

                    </div>

                </div>

            </div>
        </>
    )
}

export default Eshop;