import axios from 'axios';

function Cart(props) {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
  
    // Add function to fetch cart items from API
    useEffect(() => {
      axios.get('/api/cart')
        .then(res => {
          setCartItems(res.data.cartItems);
          setTotal(res.data.total);
        })
        .catch(err => console.log(err));
    }, []);
  
    // Add function to remove an item from the cart
    const handleRemoveItem = (id) => {
      axios.delete(`/api/cart/${id}`)
        .then(res => {
          setCartItems(res.data.cartItems);
          setTotal(res.data.total);
        })
        .catch(err => console.log(err));
    };
  
    return (
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <div>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <button onClick={() => handleRemoveItem(item.id)}>Remove Item</button>
            </li>
          ))}
        </ul>
        <p>Total: ${total}</p>
      </div>
    );
  }
  
  export default Cart;
  