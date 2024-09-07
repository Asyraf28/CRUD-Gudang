import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const ProductList = () => {
    const [products, setProduct] = useState([]);

    useEffect(()=>{
        getProducts();
    }, []);

    const getProducts = async() =>{
        const response = await axios.get("http://localhost:8080/products");
        setProduct(response.data);
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/products/${id}`);
            getProducts();
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h1>Daftar Produk</h1> <hr />
            <Link to="add" className={`${styles.btn} ${styles.tambah}`}>Tambah</Link>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Produk</th>
                        <th>Kategori</th>
                        <th>Merk</th>
                        <th>Harga</th>
                        <th>Stok</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                    <tr key={product._id}>
                        <td>{index + 1}</td>
                        <td>{product.product_name}</td>
                        <td>{product.category}</td>
                        <td>{product.merk}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td>
                            <Link to={`edit/${product._id}`} className={`${styles.btn} ${styles.edit}`}>Edit</Link>
                            <button onClick={() => deleteProduct(product._id)} className={`${styles.btn} ${styles.delete}`}>Hapus</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ProductList;