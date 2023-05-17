import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"pi_app_web"
})

app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    res.json("hola este es el backend")
})

app.get("/libros", (req,res)=>{
    const q= "SELECT * FROM libros"
    db.query(q,(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/libros", (req,res)=>{
    const q= "INSERT INTO libros (`titulo`, `descripcion`, `imagen`, `precio`) VALUES(?)"
    const values = [
        req.body.titulo,
        req.body.descripcion,
        req.body.imagen,
        req.body.precio,
    ];

    db.query(q,[values], (err, data)=>{
        if(err) return res.json(err)
        return res.json("El libro ha sido creado exitosamente")
    })
})

app.delete("/libros/:ID", (req, res)=>{
    const bookId = req.params.ID;
    const q = "DELETE FROM libros WHERE ID = ?"

    db.query(q, [bookId], (err,data)=>{
        if(err) return res.json(err)
        return res.json("El libro ha sido eliminado exitosamente")
    })
})

app.put("/libros/:ID", (req, res)=>{
    const bookId = req.params.ID;
    const q = "UPDATE libros SET `titulo`=?, `descripcion`=?, `precio`=?, `imagen`=? WHERE id=?";

    const values = [
        req.body.titulo,
        req.body.descripcion,
        req.body.precio,
        req.body.imagen,
    ]

    db.query(q, [...values, bookId], (err,data)=>{
        if(err) return res.json(err);
        return res.json("El libro ha sido actualizado exitosamente");
    });
});


app.listen(8800, ()=>{
    console.log("Conectado al backend")
})
