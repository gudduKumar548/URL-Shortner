<h1 align="center">🔗 URL Shortener</h1>

<p align="center">
  <b>A simple and efficient URL Shortening API built with Node.js,express and MongoDB</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/Express.js-Framework-black?style=for-the-badge&logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/API-REST-blue?style=for-the-badge" />
</p>

---

## ✨ Features

- 🔗 Convert long URLs into short links  
- 🚀 Fast redirection system  
- 🗄 MongoDB database storage  
- 📊 Unique short code generation  
- 🔄 REST API based architecture  
- ⚡ Lightweight & scalable  

---

## 🛠 Tech Stack

| 🚀 Technology | 📌 Usage |
|--------------|----------|
| Node.js | Backend Runtime |
| Express.js | Server Framework |
| MongoDB | Database |
| Mongoose | ODM |
| nanoid / shortid | Short Code Generator |

---

## 📂 Project Structure

```bash
URL-Shortner/
│
├── models/
├── routes/
├── controllers/
├── config/
├── server.js
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/gudduKumar548/URL-Shortner.git
cd URL-Shortner
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
```

### 4️⃣ Run Server

```bash
npm start
```

Server runs at:

```
http://localhost:5000
```

---

## 🔑 API Endpoints

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | `/api/shorten` | Create short URL |
| GET | `/:shortCode` | Redirect to original URL |

---

## 📌 Example Usage

### 🔹 Create Short URL

```json
POST /api/shorten

{
  "originalUrl": "https://example.com/very-long-url"
}
```

### 🔹 Response

```json
{
  "shortUrl": "http://localhost:5000/abc123"
}
```

---

## 🔐 How It Works

1. User sends long URL  
2. Server generates unique short code  
3. URL saved in MongoDB  
4. Short link redirects to original URL  

---

## 🚀 Future Improvements

- 📊 Click analytics  
- 🔐 User authentication  
- 🌐 Custom short aliases  
- 📈 Admin dashboard  

---

## 📜 License

This project currently does not specify a license.

---

## 🤝 Contributing

Pull requests are welcome!

---

<p align="center">
  Made with ❤️ using Node.js
</p>
