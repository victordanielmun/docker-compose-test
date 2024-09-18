const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();





const   
 app = express();
const port = process.env.PORT   
 || 5000;

// Conexión a MongoDB (reemplaza con tu URI)
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));   

// Middleware
app.use(cors());
app.use(bodyParser.json());



// Modelo de producto
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  user: String
});
const Product = mongoose.model('Product', productSchema);

// modelo de usuario
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});
const User = mongoose.model('User', userSchema);

// Middleware de autenticación
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token) {
      jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) {
          return res.status(401).json({ error: 'Token inválido' });
        }
        req.user = decoded;
        next();
      });
    } else {
      res.status(401).json({ error: 'Token no proporcionado' });
    }
  };

// Rutas products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
});

app.post('/products', authenticateToken,async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al crear el producto' });
  }
});

app.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
});

app.put('/products/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
});

app.delete('/products/:id',   
 async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
});

//rutas usuarios

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

app.post('/users', async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10); // Hashear la contraseña
      const newUser = new User({ name, email, password: hashedPassword });
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el usuario' });
    }
  });

app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
});

app.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
});

app.delete('/users/:id', async (req, res) => {

  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
});

// Ruta de inicio de sesión
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
  
    // Comparar la contraseña ingresada con el hash almacenado
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
  
    const token = jwt.sign({ _id: user._id }, 'secretkey', { expiresIn: '1h' });
    res.json({ token });
  });



//logout
app.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Cierre de sesión exitoso' });
});



// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});