import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


const Update = () => {
    const [book, setBook] = useState({
        titulo: "",
        descripcion: "",
        precio: "",
        imagen: "",
    });

    const navigate = useNavigate()
    const location = useLocation()

    const bookId = location.pathname.split("/")[2]

    
    const handleChange = (e) => {
        setBook(prev=>({...prev, [e.target.name]: e.target.value}))
    };

    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.put("http://localhost:8800/libros/"+bookId, book)
            navigate("/")
        }catch(err){
            console.log(err)
        }

    }
    console.log(book)

    return (
    <div className='form'>
    <h1>Actualizar libro</h1>
    <input type="text" placeholder="titulo" onChange={handleChange} name="titulo"/>
    <input type="text" placeholder="descripcion" onChange={handleChange} name="descripcion"/>
    <input number="text" placeholder="precio" onChange={handleChange} name="precio"/>
    <input type="text" placeholder="imagen" onChange={handleChange} name="imagen"/>
    <button className="formButton" onClick={handleClick}>Actualizar</button>
    </div>
  )
}


export default Update