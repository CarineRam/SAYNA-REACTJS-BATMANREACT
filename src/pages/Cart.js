import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/cart.css';

function Cart() {
  return (
    <>

      <div class="container container-largeur">
        <div class="row">
          <div class="d-flex justify-content-between">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
              <Link to="/eshop">
                <li class="breadcrumb-item">Eshop /</li>
              </Link>
              <Link to="/cart">
                <li
                  class="breadcrumb-item active"
                  aria-current="page"
                  > Panier</li>
                </Link>
              </ol>
            </nav>
            <div class="cart">
              <i routerLink="/cart" class="fa-solid fa-2x fa-cart-plus"></i>
            </div>
          </div>
        </div>
        <div class="recap">
          <p>Récapitulatif du panier</p>
        </div>

        <div
          class="d-flex justify-content-between align-items-center border-product"
        >
          <div class="product d-flex align-items-center">
            <img width="30%" src='' alt="" />
            <div class="mx-4">
              <h5>Title product</h5>
              <span>Numéro de produit X000</span>
            </div>
          </div>
          <div class="price">
            <p>36</p>
          </div>
          <div class="qte bg-secondary">
            <i class="fa-solid fa-minus mx-4"></i><span class="fs-4">1</span>
            <i class="fa-regular fa-2x fa-plus mx-4"
            ></i>
          </div>
          <div class="delete">
            <i
              // (click)="removeItem(productItem.id)"
              class="fa-solid fa-2x fa-xmark"
            ></i>
          </div>
        </div>

        <div class="sous-total container-largeur">
          <h4 class="float-end">
            <strong> Sous Total : 22 </strong>
          </h4>
        </div>
      </div>
      <section class="container container-largeur d-flex mx-auto my-5">
        <Link to='/eshop'><button
          class="mx-2"
        >Continuer mes achats</button></Link>

        <Link to='/commande'><button
          class="mx-2"
        >Passer commande</button></Link>
      </section>

      <br /><br />


      <h1 class="text-center">Ton panier est vide</h1>
      <div class="container-largeur">
        <Link to='/eshop'>
          <button class="mx-2">Faire des achats</button>
        </Link>
      </div>

    </>
  )
}

export default Cart