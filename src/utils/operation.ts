import axios from "axios";



export const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
return response.data  
    } catch (error) {
        console.error(error)
    }

}

export const fetchUsers = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return response.data
    } catch (error) {
        console.log("this is my error", error)
    }
}
