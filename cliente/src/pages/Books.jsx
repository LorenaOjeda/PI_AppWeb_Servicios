import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchAllBooks = async () => {
            try{
            const res = await axios.get("http://localhost:8800/libros")
            setBooks(res.data);
            
            }catch(err){
                console.log(err)
            }
        }
        fetchAllBooks()
    }, []);

const handleDelete = async (id)=>{
    try{
        await axios.delete("http://localhost:8800/libros/"+id)
        window.location.reload()
    }catch(err){
        console.log(err)
    }
}

  return (
  <div>
        <h1>Librería en línea</h1>
        <div className="books">
            {books.map(book=>(
                <div className="book" key={book.id}>
                    {book.imagen && <img src={book.imagen} alt=""/>}
                    <h2>{book.titulo}</h2>
                    <p>{book.descripcion}</p>
                    <span>{book.precio}</span>
                    <button className="delete" onClick={()=>handleDelete(book.id)}>Eliminar</button>
                    <button className="update"><Link to={`/update/${book.id}`}>Actualizar</Link></button>
                </div>
            ))}
        </div>
        <button><Link to={"/add"}>Agregar libro</Link> </button>
   </div>
  )
}

export default Books