
A RESTful API built with Express.js for managing products. This API includes features like authentication, validation, error handling, and more.

## Features

- RESTful API endpoints for CRUD operations on products
- Authentication middleware
- Request validation
- Error handling
- Request logging
- Search and filtering
- Pagination
- Environment variable configuration

## API Endpoints

### Products

- `GET /api/products` - Get all products (with optional filtering, search, and pagination)
- `GET /api/products/:id` - Get a single product by ID
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## Authentication

All POST, PUT, and DELETE requests require authentication using the following header:
```
Authorization: Bearer secret123
```

## Query Parameters

### GET /api/products

- `search`: Search products by name
- `category`: Filter by category
- `inStock`: Filter by stock status
- `page`: Page number for pagination
- `limit`: Number of items per page

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```
PORT=3000
```

## Running the Application

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## Project Structure

```
project/
├── server.js           (Main application file)
├── package.json        (Project configuration)
├── .env               (Environment variables)
├── routes/
│   └── products.js    (Product routes)
├── middleware/
│   ├── logger.js      (Request logging)
│   ├── auth.js        (Authentication)
│   ├── validateProduct.js (Input validation)
│   └── errorHandler.js (Error handling)
└── data/
    └── products.js    (In-memory database)
```

## Example Requests

### Get all products
```bash
curl http://localhost:3000/api/products
```

### Get a specific product
```bash
curl http://localhost:3000/api/products/1
```

### Create a new product
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Authorization: Bearer secret123" \
  -H "Content-Type: application/json" \
  -d '{"name":"New Product","price":99.99}'
```

### Update a product
```bash
curl -X PUT http://localhost:3000/api/products/1 \
  -H "Authorization: Bearer secret123" \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Product","price":149.99}'
```

### Delete a product
```bash
curl -X DELETE http://localhost:3000/api/products/1 \
  -H "Authorization: Bearer secret123"
```

## Technologies Used

- Node.js
- Express.js
- dotenv
- uuid

## License

ISC

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all the required API endpoints
2. Implement the middleware and error handling
3. Document your API in the README.md
4. Include examples of requests and responses

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Design Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) 