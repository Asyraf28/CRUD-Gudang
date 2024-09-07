import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styles from "./styles.module.css";

const EditProduct = () => {
    const [product_name, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [merk, setMerk] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getProductsById();
    }, []);

    const getProductsById = async() => {
        const response = await axios.get(`http://localhost:8080/products/${id}`);
        setProductName(response.data.product_name);
        setCategory(response.data.category);
        setMerk(response.data.merk);
        setPrice(response.data.price);
        setStock(response.data.stock);
    }

    const updateProduct = async(e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:8080/products/${id}`, {
                product_name,
                category,
                merk,
                price,
                stock
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className={styles.containerkhusus}>
            <div className={styles.formContainer}>
                <h2>Edit Produk</h2> <hr />
                <form onSubmit={updateProduct} className={styles.form}>
                    <div className="field">
                        <label className={styles.label}>Nama Produk</label>
                        <div className="control">
                            <input 
                                type='text' 
                                className={styles.input} 
                                value={product_name} 
                                onChange={(e) => setProductName(e.target.value)} 
                                placeholder="Nama Produk" 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className={styles.label}>Kategori</label>
                        <div className="control">
                            <input 
                                type='text' 
                                className={styles.input} 
                                value={category} 
                                onChange={(e) => setCategory(e.target.value)} 
                                placeholder="Kategori Produk" 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className={styles.label}>Merk</label>
                        <div className="control">
                            <input 
                                type='text' 
                                className={styles.input} 
                                value={merk} 
                                onChange={(e) => setMerk(e.target.value)} 
                                placeholder="Merk Produk" 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className={styles.label}>Harga</label>
                        <div className="control">
                            <input 
                                type='number' 
                                className={styles.input} 
                                value={price} 
                                onChange={(e) => setPrice(e.target.value)} 
                                placeholder="Harga Produk" 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className={styles.label}>Stok</label>
                        <div className="control">
                            <input 
                                type='number' 
                                className={styles.input} 
                                value={stock} 
                                onChange={(e) => setStock(e.target.value)} 
                                placeholder="Jumlah Stok Produk" 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button type='submit' className={`${styles.button} ${styles.isSuccess}`}>Ubah</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default EditProduct;