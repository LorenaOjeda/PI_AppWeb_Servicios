import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Add = () => {
    const [book, setBook] = useState({
        titulo: "",
        descripcion: "",
        precio: "",
        imagen: "",
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setBook(prev=>({...prev, [e.target.name]: e.target.value}))
    };

    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/libros", book)
            navigate("/")
        }catch(err){
            console.log(err)
        }

    }
    console.log(book)

    return (
    <div className='form'>
    <h1>Agregar libro nuevo</h1>
    <input type="text" placeholder="titulo" onChange={handleChange} name="titulo"/>
    <input type="text" placeholder="descripcion" onChange={handleChange} name="descripcion"/>
    <input number="text" placeholder="precio" onChange={handleChange} name="precio"/>
    <input type="text" placeholder="imagen" onChange={handleChange} name="imagen"/>
    <button className="formButton" onClick={handleClick}>Agregar</button>
    </div>
  )
}


export default Add