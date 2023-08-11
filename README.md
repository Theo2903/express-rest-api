
# Express Rest API Swagger Base Project

A REST API with Express. Using Swagger for documentation and Docker to deploy


## API Reference

#### Base URL

```http
  GET /api/v1
```

#### Swagger URL

```http
  GET /api-docs
```

### Auth
#### Register

```http
  POST /api/v1/register
```

#### Login

```http
  POST /api/v1/login
```

#### Logout

```http
  POST /api/v1/logout
```

### User

#### Get all user

```http
  GET /api/v1/user
```

#### Get user by ID

```http
  GET /api/v1/user/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Create user

```http
  POST /api/v1/user
```

#### Update user by ID

```http
  PUT /api/v1/user/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Delete user by ID

```http
  DELETE /api/v1/user/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



## Installation

After cloning the project, make sure you have docker installed.

```bash
  docker-compose up --build
  http://localhost:3000/api-docs
```
    