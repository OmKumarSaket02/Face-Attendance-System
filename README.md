# Face-Attendance-System

A modern Face Attendance System built with the MERN stack (MongoDB, Express.js, React, Node.js) that leverages face recognition to mark attendance, JWT-based authentication, and role-based access control (RBAC) for secure user management. The backend follows the MVC pattern for organized and scalable code, using Mongoose for MongoDB interactions.

## Features
- **Authentication**: Register and login with JWT-based authentication.
- **Role-Based Access Control (RBAC)**:
  - **Admin**: Manage users and view all attendance records.
  - **Employee**: Mark attendance using face recognition and view personal records.
- **Face Recognition**: Uses face-api.js for client-side face detection and matching.
- **Attendance Tracking**: Log attendance with timestamps, stored in MongoDB.
- **Responsive UI**: React-based frontend with role-specific dashboards.
- **MVC Architecture**: Structured backend for maintainability (Models, Controllers, Routes).

## Tech Stack
- **Frontend**: React, React Router, Axios, face-api.js
- **Backend**: Node.js, Express.js, Mongoose, MongoDB
- **Authentication**: JWT, bcrypt
- **Middleware**: Role-based access control
- **Others**: dotenv, cors

## Project Structure
```
face-attendance-system/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Attendance.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── attendanceController.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── user.js
│   │   ├── attendance.js
│   ├── middleware/
│   │   ├── auth.js
│   ├── .env
│   ├── server.js
│   ├── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── EmployeeDashboard.js
│   │   │   ├── AdminDashboard.js
│   │   │   ├── FaceCapture.js
│   │   ├── context/
│   │   │   ├── AuthContext.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── public/
│   │   ├── models/ (face-api.js models)
│   ├── package.json
├── README.md
```

## Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- Webcam (for face recognition)
- Git (optional for cloning)

## Installation
### 1. Clone the Repository
```bash
git clone https://github.com/your-username/face-attendance-system.git
cd face-attendance-system
```

### 2. Set Up the Backend
```bash
cd backend
npm install
```
Create a `.env` file:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```
Start the backend server:
```bash
npm start
```

### 3. Set Up the Frontend
```bash
cd ../frontend
npm install
```
Download face-api.js models and place them in `frontend/public/models/`.
Start the frontend:
```bash
npm start
```

## Usage
- **Register**: http://localhost:3000/register
- **Login**: http://localhost:3000/login
- **Employee Dashboard**: http://localhost:3000/employee
- **Admin Dashboard**: http://localhost:3000/admin

## API Endpoints
**Auth:**
- `POST /api/auth/register`
- `POST /api/auth/login`

**User:**
- `POST /api/user/face`

**Attendance:**
- `POST /api/attendance/mark`
- `GET /api/attendance/all`

## Example Request (Register)
```bash
curl -X POST http://localhost:5000/api/auth/register \
-H "Content-Type: application/json" \
-d '{"name":"John Doe","email":"john@example.com","password":"password123","role":"employee"}'
```

## Security
- **JWT**: Token-based auth, expires in 1 hour.
- **Passwords**: Encrypted with bcrypt.
- **RBAC**: Middleware to protect routes.
- **Face Data**: Stored as descriptors, consider encrypting.
- **CORS**: Configured for frontend-backend.

## Deployment
**Backend**: Deploy to Render, Heroku, or AWS. Use MongoDB Atlas.
**Frontend**: Deploy build folder to Vercel or Netlify.

## CORS Setup (server.js)
```js
app.use(cors({ origin: 'https://your-frontend-url' }));
```

## Testing
- Use Postman for APIs.
- Webcam test for face recognition.
- Check MongoDB with Compass.

## Seed Data Example
```js
const User = require('./models/User');
User.create({
  name: 'Admin',
  email: 'admin@example.com',
  password: await require('bcryptjs').hash('password', 10),
  role: 'admin',
});
```

## Known Limitations
- Face-api.js is client-heavy.
- Accuracy varies with hardware.
- MongoDB indexes recommended.

## Future Enhancements
- Server-side face recognition (e.g., AWS Rekognition).
- React Native mobile app.
- Attendance analytics (Chart.js).
- Real-time updates with WebSockets.
- Geolocation tagging.

## Troubleshooting
- MongoDB error: Check `.env` values.
- CORS: Ensure frontend origin is whitelisted.
- Webcam/Face-api.js: Verify permissions and model paths.

## Contributing
- Fork → Branch → Commit → Push → PR

## License
MIT License

## Contact
[omku0512@gmail.com](mailto:omku0512@gmail.com)

