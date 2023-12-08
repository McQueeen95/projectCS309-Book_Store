import"./Cart.css"
import{cartInfo}from"../../data/cart"
const Cart=()=>{
    return(
<div className="cart">
    <div className="cart-title">Your Cart Shop</div>
    <div className="cart-wrapper">
        <div className="cart-items">
                {cartInfo.map(item=>
                    <div key={item?.id} className="cart-item">
                        <img src={`/books/${item?.image}` } alt={item?.title} className="cart-item-img"/>

                        <div className="cart-item-info">
                            <div className="">
                                <div className="cart-item-book-title">
                                    <b>Title:</b>{item?.title}
                                </div>
                                <div className="cart-item-author">
                                    <b>Author:</b>{item?.author}

                                </div>
                            </div>
                            <div className="cart-item-quantity">
                                <button>
                                    <i className="bi bi-plus-lg logoplus"></i>
                                    
                                </button>
                                <b>{item?.quantity}</b>
                                <button>
                                    <i className="bi bi-dash-lg"></i>
                                </button>
                                <div className="cart-item-price">
                                    ${item?.price*item?.quantity}
                                </div>
                                <i className="bi bi-trash-fill"></i>
                            </div>
                        </div>
                    </div> )}
        </div>
    </div>
    <div className="cart-order-summary"> 
    <div className="order-summary-title">
        Order Summary
    </div>
    <div className="order-summary-item">
        <span>Subtotal:</span>
        <span>
             ${cartInfo.reduce((total,cur)=>total+cur.price*cur.quantity,0)}
        </span>
    </div>
    <div className="order-summary-item">
        <span>Shop coast:</span>
        <span>
             ${cartInfo.reduce((total,cur)=>0,0)}
        </span>
    </div>
    <div className="order-summary-item">
        <span>Total:</span>
        <span>
             ${cartInfo.reduce((total,cur)=>total+cur.price*cur.quantity,0)}
        </span>
    </div>
    
    
    </div>
</div>

        )
}
export default Cart;