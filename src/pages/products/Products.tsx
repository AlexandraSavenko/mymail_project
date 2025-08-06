import { useEffect, useState } from "react";
import { fetchProducts } from "../../utils/operation";


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
const Products = () => {
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
      const response = await fetchProducts()
setProducts(response) 
setTotalPages(Math.ceil(response.length / 5))  
    } catch (error) {
        console.error(error)
    }
  }
 getProducts()
},[])
if(products.length === 0){
  return <p>no products were fetched</p>
}

  const filteredProducts = filter ? products.filter(product => product.title.toLowerCase().startsWith(filter.toLowerCase())) : products;
 const sortedProducts = filteredProducts.sort((a, b) => ascending ? a.price - b.price : b.price - a.price)
 const pageOfProducts = sortedProducts.slice(startIndex, endIndex)
    return <div>
        <h2>Products</h2>
<button onClick={() => setAscending(!ascending)}>{ascending ? "Show the highest prices": "Show the lowest prices"}</button>
<input type="text" value={filter} onChange={e => {setFilter(e.target.value); setPage(1)}} />
<ul>
{pageOfProducts.map(product => <li key={product.id}> <p>{product.title}</p> <p>{product.price}</p> </li>) }</ul>
<button disabled={page === 1} onClick={() => {setPage(page - 1); }}>Back</button>
<button disabled={page === totalPages} onClick={() => {setPage(page + 1); }}>Next</button>
{totalPages && <p>{`page ${page} of ${totalPages}`}</p> }
    </div>
}

export default Products;