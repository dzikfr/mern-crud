import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import { getProducts, deleteProduct } from '../api';
import ProductForm from './ProductForm';

const ProductTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getProducts();
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteProducts(id);
            setData(data.filter((item) => item._id !== id));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleEdit = (id) => {
        setSelectedProductId(id);
        setShowForm(true);
    };

    const handleAdd = () => {
        setSelectedProductId(null);
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setSelectedProductId(null);

        const fetchData = async () => {
            try {
                const response = await getProducts();
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    };

    const columns = React.useMemo(
        () => [
            { Header: 'Id', accessor: '_id' },
            { Header: 'Nama Produk', accessor: 'name' },
            { Header: 'Harga', accessor: 'price' },
            { Header: 'Stok', accessor: 'stock' },
            {
                Header: 'Actions',
                Cell: ({ row }) => (
                    <>
                        <button onClick={() => handleEdit(row.original._id)} className='btn-primary ms-2'>Edit</button>
                        <button onClick={() => handleDelete(row.original._id)} className='btn-primary ms-2'>Delete</button>
                    </>
                ),
            },
        ],
        [data]
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    if (loading) return <div>Loading...</div>;

    return (
        <div className='container'>
            {showForm && <ProductForm selectedProductId={selectedProductId} onClose={handleCloseForm} />}
            <table {...getTableProps()} border="1" className='table'>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <button onClick={handleAdd} className='btn-primary'>Add New Product</button>
        </div>
    );
};

export default ProductTable;
