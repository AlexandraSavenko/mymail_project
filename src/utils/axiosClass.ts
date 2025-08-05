// Of course, Sasha 👍 Let’s build it into your existing AxiosService class so it makes sense to keep the class abstraction.

// Here’s an example with a getProducts() method:

// ts
// Копіювати
// Редагувати
// import axios from "axios";
// import { IProduct } from "../models/product"; // adjust path if needed

// const placeholderApiAxiosInstance = axios.create({
//   baseURL: "https://fakestoreapi.com",
// });

// export default class AxiosService {
//   private static instance = placeholderApiAxiosInstance;

//   /**
//    * Fetch all products.
//    */
//   public static async getProducts(): Promise<IProduct[]> {
//     try {
//       const response = await this.instance.get<IProduct[]>("/products");
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       throw error;
//     }
//   }

//   /**
//    * Fetch single product by ID.
//    */
//   public static async getProductById(id: number): Promise<IProduct> {
//     try {
//       const response = await this.instance.get<IProduct>(`/products/${id}`);
//       return response.data;
//     } catch (error) {
//       console.error(`Error fetching product with id ${id}:`, error);
//       throw error;
//     }
//   }
// }
// Usage in your controller:
// ts
// Копіювати
// Редагувати
// import { Request, Response } from "express";
// import AxiosService from "../services/axios";

// export const getProducts = async (req: Request, res: Response) => {
//   try {
//     const products = await AxiosService.getProducts();
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch products" });
//   }
// };
// This way:

// You keep all API logic inside the AxiosService class.

// Controllers only call AxiosService.getProducts().

// If later you switch APIs (for example, from FakeStore API to your own backend), you only change this class, not the whole codebase.

