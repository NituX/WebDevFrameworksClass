const express = require('express');
const app = express();
const port = 4000;
const productData = require('./data.json');
const userData = require('./users.json');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');


//Function to test if prop1 is null, returning prop2 if it is null.
const nullOrNot = (prop1, prop2) => {
    return (prop1 != null) ? prop1 : prop2;
}

app.use(bodyParser.json());

productData.items.forEach(i => i.id = uuidv4());
userData.users.forEach(u => u.id = uuidv4());

//MainPage
app.get('/', (req, res) => {
    res.send('Hello there!');
});

//GET all products
app.get('/products', (req, res) => {
    res.json(productData.items);
});

//GET product by id
app.get('/products/:id', (req, res) => {
    const product = productData.items.find(p => p.id === req.params.id);
    res.json(product);
});

//GET filtered product by search string
app.get('/products/search/:search', (req, res) => {
    const products = productData.items.filter(
        (p) => p.name.toLowerCase().includes(req.params.search.toLowerCase())
            || p.manufacturer.includes(req.params.search.toLowerCase())
            || p.category.includes(req.params.search.toLowerCase())
    );

    res.json(products);
})

//GET users invoice by user id
app.get('/invoices/:id', (req, res) => {
    const user = userData.users.find(u => u.id === req.params.id);
    (typeof user !== 'undefined') ?

        res.json(user.invoices)
        :
        res.sendStatus(404);
});

//GET users invoice by user id and invoice id
app.get('/user/:id/invoice/:iid', (req, res) => {
    let user = userData.users.find(u => u.id === req.params.id)
    if (typeof user != 'undefined') {
        let inv = user.invoices.find(i => i.id.toString() === req.params.iid)
        if (typeof inv != 'undefined') {
            console.log(inv);
            res.json(inv);
        }
        else {
            res.send('invoice not found')
            console.log(inv);
        }
    }
    else {
        res.send('user not found')
    }
})

//Get all users
app.get('/users', (req, res) => {
    res.json(userData.users)
})

//Add product
app.post('/products', (req, res) => {
    productData.items.push({
        "id": uuidv4(),
        "name": req.body.name,
        "manufacturer": req.body.manufacturer,
        "category": req.body.category,
        "price": req.body.price,
        "desc": req.body.desc,
        "image": req.body.image
    });
    res.sendStatus(201);
});

//add user
app.post('/users', (req, res) => {
    userData.users.push({
        "id": uuidv4(),
        "fname": req.body.fname,
        "lname": req.body.lname,
        "address": req.body.address,
        "city": req.body.city,
        "email": req.body.email
    });
    res.sendStatus(201);
});

//make purchase and invoice to userData
app.post('/purchase/:id', (req, res) => {
    const user = userData.users.find(u => u.id === req.params.id);
    if (typeof user !== 'undefined') {
        let totalPrice = req.body.reduce((prev, current) => {
            return prev + current.price
        }, 0);

        user.invoices.push({ "id": uuidv4(), "totalPrice": totalPrice, "items": req.body });

        res.sendStatus(201);
    }
    else {
        res.sendStatus(404);
    }

});

//add product from productData.json with product id in progress
/*app.post('/purchase/:id', (req, res) => {
    const user = userData.users.find(u => u.id === req.params.id);
    if (typeof user !== 'undefined') {
        const products = req.body.map(p => {
            const prod = productData.items.find(i => i.id === req.body.id);
            if (typeof prod !== 'undefined') {
                p = req.body
            }
            else {
                res.send('No products found with id');
            }
        })
        let totalPrice = products.reduce((prev, current) => {
            return prev + current.price
        }, 0);
        user.invoices.push({ "id": uuidv4(), "totalPrice": totalPrice, "items": products })
    }
    else {
        res.sendStatus(404);
    }

});*/



//modify product
app.put('/products/:id', (req, res) => {
    const product = productData.items.find(p => p.id === req.params.id);
    if (typeof product !== 'undefined') {
        Object.keys(product).map(key => {
            product[key] = nullOrNot(
                req.body[key], product[key]
            );
        });

        res.sendStatus(201);
    }
    else {
        console.log("error");
        res.sendStatus(404)
    }
});

//DELETE users invoice
app.delete('/user/:id/invoice/:iid', (req, res) => {
    let user = userData.users.find(u => u.id === req.params.id)
    if (typeof user != 'undefined') {
        let inv = user.invoices.find(i => i.id === req.params.iid)
        if (typeof inv != 'undefined') {
            user.invoices.splice(inv, 1);
            res.sendStatus(200);
        }
        else {
            res.send('invoice not found')
        }
    }
    else {
        res.send('user not found')
    }
})





app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`)
});