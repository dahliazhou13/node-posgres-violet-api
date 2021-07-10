const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {pool} = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
// account endpoint
const getAccounts = (request, response) => {
  pool.query('SELECT * FROM ACCOUNT', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addAccount = (request, response) => {
  const {username, latitude, longitude} = request.body

  pool.query(
    'INSERT INTO account (username, latitude, longitude) VALUES ($1, $2, $3)',
    [username, latitude, longitude],
    (error) => {
      if (error) {
        throw error
      }
      response.status(201).json({status: 'success', message: 'Account added.'})
    },
  )
}

//item endpoint
const getItems = (request, response) => {
  pool.query('SELECT * FROM ITEM', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


// order endpoint /orders/all
const getAllOrders = (request, response) => {
  pool.query('SELECT * FROM ORDERS', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
// get /orders/open
const getOpenOrders = (request, response) => {
  pool.query('SELECT * FROM ORDERS WHERE timeFinished is NULL', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// post /orders
const addOrder = (request, response) => {
  const {username,item,latitude,longitude,timePlaced} = request.body

  pool.query(
    'INSERT INTO Orders (username,item,latitude,longitude,timePlaced) VALUES ($1, $2, $3, $4, $5)',
    [username,item,latitude,longitude,timePlaced],
    (error) => {
      if (error) {
        throw error
      }
      response.status(201).json({status: 'success', message: 'Order placed.'})
    },
  )
}

// put /orders close order
const closeOrder = (request, response) => {
  const {username, item, timePlaced, timeFinished} = request.body

  pool.query(
    'Update Orders Set timeFinished = $1 where username = $2 and item = $3 and timePlaced = $4',
    [timeFinished,username,item,timePlaced],
    (error) => {
      if (error) {
        throw error
      }
      response.status(201).json({status: 'success', message: 'Order closed.'})
    },
  )
}

app
  .route('/account')
  // GET endpoint
  .get(getAccounts)
  // POST endpoint
  .post(addAccount)

app
  .route('/item')
  .get(getItems)

app
  .route('/orders')
  .put(closeOrder)
  .post(addOrder)

app
  .route('/orders/all')
  .get(getAllOrders)

app
  .route('/orders/open')
  .get(getOpenOrders)
// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`)
})