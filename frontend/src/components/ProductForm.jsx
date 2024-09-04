import React, { useState, useEffect } from 'react';
import { createProduct, updateProduct, getProductById } from '../api';

const ProductForm = ({ selectedProductId, onClose }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (selectedProductId) {
            const fetchProduct = async () => {
                try {
                    const response = await getProductById(selectedProductId);
                    const product = response.data;
                    setName(product.name);
                    setPrice(product.price);
                    setStock(product.stock);
                    setIsEditing(true);
                } catch (error) {
                    console.error('Error:', error);
                }
            };
            fetchProduct();
        }
    }, [selectedProductId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const product = { name, price, stock };
        try {
            if (isEditing) {
                await updateProduct(selectedProductId, product);
            } else {
                await createProduct(product);
            }
            onClose();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container d-flex justify-content-center my-4">
            <div className="w-50">
            <h2>{isEditing ? 'Edit Product' : 'Add Product'}</h2>
            <form onSubmit={handleSubmit}>
            <table className="table">
                <tbody>
                    <tr>
                        <td><label htmlFor="name">Nama Produk:</label></td>
                        <td>
                            <input
                                id="name"
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="price">Harga:</label></td>
                        <td>
                            <input
                                id="price"
                                type="number"
                                className="form-control"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="stock">Stok:</label></td>
                        <td>
                            <input
                                id="stock"
                                type="number"
                                className="form-control"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="text-center">
                            <button type="submit" className="btn btn-primary">{isEditing ? 'Update' : 'Add'}</button>
                            <button type="button" onClick={onClose} className="btn btn-secondary ms-2">Cancel</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </form>
            </div>
        </div>
    );
};

export default ProductForm;
