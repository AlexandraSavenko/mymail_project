import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
        id: number,
        title: string,
        price: number,
        description: string,
        category: string,
        image: string,
        rating: {
            rate: number,
            count: number
        }
}
function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState('')
  const [ascending, setAscending] = useState(true) 
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const perPage = 5;
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
useEffect(()=>{
  const getProducts = async () => {
     try {
      const response = await axios.get("https://fakestoreapi.com/products");
setProducts(response.data) 
setTotalPages(Math.ceil(response.data.length / 5))  
    } catch (error) {
        console.error(error)
    }
  }
 getProducts()
},[])
if(products.length === 0){
  return <p>no products were fetched</p>
}

  const visibleProducts = filter ? products.filter(product => product.title.toLowerCase().startsWith(filter.toLowerCase())) : products;
 const visibleProductsOrder = visibleProducts.slice(startIndex, endIndex).sort((a, b) => ascending ? a.price - b.price : b.price - a.price)
 return <div>
<h1>Products</h1>
<button onClick={() => setAscending(!ascending)}>{ascending ? "Show the highest prices": "Show the lowest prices"}</button>
<input type="text" value={filter} onChange={e => {setFilter(e.target.value); setPage(1)}} />
<ul>
{visibleProductsOrder.map(product => <li key={product.id}> <p>{product.title}</p> <p>{product.price}</p> </li>) }</ul>
<button disabled={page === 1} onClick={() => {setPage(page + 1); }}>Next</button>
<button disabled={page === totalPages} onClick={() => {setPage(page - 1); }}>Back</button>
{totalPages && <p>{`page ${page} of ${totalPages}`}</p> }
  </div>
  }

export default App;