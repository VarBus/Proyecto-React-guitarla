import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { useCart } from './hooks/useCart'

/* El state de react es asincrono
es decir que se mandan a llamar aun asi cuando el 
state no ha sido modificado
si fuera sincrono el state se realizara proceso por proceso
no seria muy responsive  */

function App() {

  const { data,
    cart,
    addToCart,
    removeToCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,  isEmpty,
    cartTotal } = useCart()




  //Antes del return se ponen statements
  return (
    //dAqui se pueden poner expressions
    <> 
      
    <Header
    cart={cart}
    removeToCart={removeToCart}
    increaseQuantity={increaseQuantity}
    decreaseQuantity={decreaseQuantity}
    clearCart={clearCart}
    isEmpty={isEmpty}
    cartTotal={cartTotal}
    />


    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
              <Guitar 
              key={guitar.id}
              guitar ={guitar}
              addToCart={addToCart}
              />
            )
          )}
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App
