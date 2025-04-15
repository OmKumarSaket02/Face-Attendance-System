# Face-Attendance-System
A modern Face Attendance System built with the MERN stack (MongoDB, Express.js, React, Node.js) that leverages face recognition to mark attendance, JWT-based authentication, and role-based access control (RBAC) for secure user management. The backend follows the MVC pattern for organized and scalable code, using Mongoose for MongoDB interactions.

Features
Authentication: Register and login with JWT-based authentication.
Role-Based Access Control (RBAC):
Admin: Manage users and view all attendance records.
Employee: Mark attendance using face recognition and view personal records.
Face Recognition: Uses face-api.js for client-side face detection and matching.
Attendance Tracking: Log attendance with timestamps, stored in MongoDB.
Responsive UI: React-based frontend with role-specific dashboards.
MVC Architecture: Structured backend for maintainability (Models, Controllers, Routes).
Tech Stack
Frontend: React, React Router, Axios, face-api.js
Backend: Node.js, Express.js, Mongoose, MongoDB
Authentication: JWT, bcrypt
Middleware: Role-based access control
Others: dotenv, cors
Project Structure
text

Copy
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
Prerequisites
Node.js (v16 or higher)
MongoDB (local or MongoDB Atlas)
Webcam (for face recognition)
Git (optional for cloning)
Installation
1. Clone the Repository
bash

Copy
git clone https://github.com/your-username/face-attendance-system.git
cd face-attendance-system
2. Set Up the Backend
Navigate to the backend directory:
bash

Copy
cd backend
Install dependencies:
bash

Copy
npm install
Create a .env file in the backend/ directory:
text

Copy
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
Replace your_mongodb_connection_string with your MongoDB URI (e.g., from MongoDB Atlas).
Use a secure string for JWT_SECRET.
Start the backend server:
bash

Copy
npm start
The server will run on http://localhost:5000.
3. Set Up the Frontend
Navigate to the frontend directory:
bash

Copy
cd ../frontend
Install dependencies:
bash

Copy
npm install
Download face-api.js models:
Place the pre-trained models (e.g., ssd_mobilenetv1, face_recognition) in frontend/public/models/.
Alternatively, host models locally or use a CDN (update FaceCapture.js if needed).
Start the frontend development server:
bash

Copy
npm start
The frontend will run on http://localhost:3000.
4. Configure MongoDB
If using MongoDB Atlas:
Create a free cluster and get the connection URI.
Update the MONGO_URI in .env.
If using local MongoDB:
Ensure MongoDB is running (mongod).
Use mongodb://localhost/face_attendance in .env.
Usage
Register a User:
Visit http://localhost:3000/register.
Enter name, email, password, and role (admin or employee).
Admin users can be created manually in MongoDB if needed.
Login:
Go to http://localhost:3000/login.
Log in with registered credentials.
A JWT token is stored in local storage.
Employee Dashboard:
Access at http://localhost:3000/employee (requires employee role).
Use the webcam to capture your face.
Save face data (first time) and mark attendance.
Admin Dashboard:
Access at http://localhost:3000/admin (requires admin role).
View all attendance records with user details.
Face Recognition:
The FaceCapture component uses face-api.js to detect and store face descriptors.
Attendance is marked only if the face matches stored data (client-side comparison).
API Endpoints
Auth:
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in and get JWT token.
User:
POST /api/user/face: Save face descriptor (protected, employee/admin).
Attendance:
POST /api/attendance/mark: Mark attendance (protected, employee).
GET /api/attendance/all: Get all attendance records (protected, admin).
Example Request (Register):

bash

Copy
curl -X POST http://localhost:5000/api/auth/register \
-H "Content-Type: application/json" \
-d '{"name":"John Doe","email":"john@example.com","password":"password123","role":"employee"}'
Security
JWT: Tokens expire in 1 hour. Use HTTPS in production.
Passwords: Hashed with bcrypt.
RBAC: Middleware restricts access by role.
Face Data: Stored as descriptors in MongoDB. Encrypt sensitive data if required (GDPR/CCPA compliance).
CORS: Configured for frontend-backend communication.
Deployment
Backend
Deploy to Render, Heroku, or AWS EC2:
Push code to a hosting platform.
Set environment variables (MONGO_URI, JWT_SECRET, PORT).
Use MongoDB Atlas for the database.
Example (Render):
Create a new web service, link to your GitHub repo.
Add environment variables in the dashboard.
Deploy with npm start.
Frontend
Build the React app:
bash

Copy
cd frontend
npm run build
Deploy to Vercel, Netlify, or serve via Express:
For Vercel: Push to GitHub, import to Vercel, deploy.
Update API URLs in frontend/src (e.g., http://your-backend-url/api).
CORS
Update backend/server.js for production:
javascript

Copy
app.use(cors({ origin: 'https://your-frontend-url' }));
Testing
Backend:
Use Postman to test API endpoints.
Example: Register, login, mark attendance.
Frontend:
Test webcam access for face recognition.
Verify role-based routing (e.g., /admin blocked for employees).
MongoDB:
Check collections (users, attendances) in MongoDB Compass.
Seed data:
javascript

Copy
const User = require('./models/User');
User.create({
  name: 'Admin',
  email: 'admin@example.com',
  password: await require('bcryptjs').hash('password', 10),
  role: 'admin',
});
Known Limitations
Face-api.js: Client-side processing may be slow on low-end devices. Consider server-side solutions (e.g., AWS Rekognition) for production.
Accuracy: Face recognition depends on lighting and webcam quality.
Scalability: Add indexes to MongoDB for large datasets (e.g., User.createIndex({ email: 1 })).
Future Enhancements
Server-Side Face Recognition: Integrate AWS Rekognition for higher accuracy.
Mobile App: Extend with React Native.
Analytics: Add attendance reports and charts (e.g., Chart.js).
Real-Time: Use WebSockets for live updates.
Geolocation: Verify location during attendance.
Troubleshooting
MongoDB Connection Error: Verify MONGO_URI in .env.
CORS Issues: Ensure frontend URL is allowed in cors middleware.
Face-api.js Errors: Confirm models are loaded in frontend/public/models/.
Webcam Access: Check browser permissions for camera.
Contributing
Fork the repository.
Create a feature branch (git checkout -b feature-name).
Commit changes (git commit -m "Add feature").
Push to the branch (git push origin feature-name).
Open a pull request.
License
This project is licensed under the MIT License.

Contact
For questions or feedback, reach out to [omku0512@gmail.com].