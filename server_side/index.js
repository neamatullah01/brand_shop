const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rchgrre.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const productCollection = client.db('brandDB').collection('product');
        const cartCollection = client.db('brandDB').collection('cart');

        app.post('/products', async (req, res) => {
            const newProducts = req.body;
            const result = await productCollection.insertOne(newProducts);
            res.send(result);
        })

        app.get('/products/:brand_name', async (req, res) => {
            const brand = req.params.brand_name;
            const query = {
                brand: brand,
            };
            const cursor = productCollection.find(query);
            const result = await cursor.toArray();
            res.send(result)
        })

        app.get('/details/:id', async(req, res)=>{
            const id = req.params.id;
            const query = {_id: new ObjectId(id)}
            const result = await productCollection.findOne(query);
            res.send(result);
        })

        app.post('/carts', async (req, res) => {
            const newProducts = req.body;
            const result = await cartCollection.insertOne(newProducts);
            res.send(result);
        })

        app.get('/carts', async(req, res)=>{
            const cursor = cartCollection.find();
            const result = await cursor.toArray();
            res.send(result)
        })

        app.delete('/carts/:id', async(req, res)=>{
            const id = req.params.id;
            const query = {_id: new ObjectId(id)}
            const result = await cartCollection.deleteOne(query);
            res.send(result)
        })
        




        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get("/", (req, res) => {
    res.send('Server running')
});

app.listen(port, () => {
    console.log(`Simple Crud is Running on port ${port}`);
});