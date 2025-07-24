# QuizApp - Full Stack Quiz Application

A modern, full-stack quiz application built with React, Node.js, Express, and MongoDB. Features user authentication, role-based access control, and an intuitive quiz management system.

## 🚀 Features

### For Users

- **User Registration & Authentication**: Secure signup with email verification
- **Interactive Quiz Taking**: Timed quizzes with multiple-choice questions
- **Real-time Progress Tracking**: Visual progress indicators and timer
- **Results & Statistics**: Detailed quiz results with percentage scores
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### For Administrators

- **Quiz Management**: Create, edit, and delete quizzes
- **User Management**: Role-based access control
- **Question Builder**: Easy-to-use interface for creating quiz questions
- **Content Control**: Full CRUD operations on quiz content

## 🛠️ Tech Stack

### Frontend

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **Lucide React** - Icon library

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JSON Web Tokens** - Authentication
- **bcrypt** - Password hashing
- **Nodemailer** - Email service
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v16 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** or **yarn** package manager

## 🚀 Installation & Setup

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/rohit-hub07/QuizeApp.git
cd QuizeApp
\`\`\`

### 2. Backend Setup

\`\`\`bash
cd backend
npm install
\`\`\`

Create a \`.env\` file in the backend directory:
\`\`\`env
PORT=3000
BASE_URL=http://localhost:3000
MONGO_URI=mongodb://127.0.0.1:27017/quizeApp
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
SMTP_HOST=smtp-relay.brevo.com
SMTP_SENDER=your_email@gmail.com
NODE_ENV=development
SECRET=your_jwt_secret_key_here
\`\`\`

Start the backend server:
\`\`\`bash
npm start
\`\`\`

### 3. Frontend Setup

\`\`\`bash
cd ../frontend
npm install
\`\`\`

Start the frontend development server:
\`\`\`bash
npm run dev
\`\`\`

## 🌐 Application URLs

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000

## 📱 Usage

### Getting Started

1. **Register**: Create a new account with your email
2. **Verify Email**: Check your email for verification link
3. **Login**: Sign in with your credentials
4. **Take Quizzes**: Browse and take available quizzes
5. **View Results**: See your quiz performance and scores

### Admin Features

1. **Create Quiz**: Add new quizzes with multiple-choice questions
2. **Manage Content**: Edit or delete existing quizzes
3. **User Roles**: Manage user permissions and roles

## 🔐 Authentication Flow

1. **Registration**: User signs up with name, email, password, and role
2. **Email Verification**: System sends verification email
3. **Login**: JWT token issued upon successful authentication
4. **Protected Routes**: Token-based route protection
5. **Role-Based Access**: Admin-only routes for quiz management

## 📊 API Endpoints

### Authentication Routes

- \`POST /auth/register\` - User registration
- \`GET /auth/verify/:token\` - Email verification
- \`POST /auth/login\` - User login
- \`GET /auth/logout\` - User logout
- \`GET /auth/profile\` - Get user profile
- \`POST /auth/forget-password\` - Forgot password
- \`PUT /auth/reset-password/:token\` - Reset password

### Quiz Routes

- \`GET /quize/all-quizes\` - Get all quizzes
- \`GET /quize/quiz/:id\` - Get quiz by ID
- \`POST /quize/create-quize\` - Create new quiz (Admin only)
- \`PUT /quize/update-quize/:id\` - Update quiz (Admin only)
- \`DELETE /quize/delete-quize/:id\` - Delete quiz (Admin only)

### Result Routes

- \`POST /result/result/:id\` - Submit quiz answers

## 🎨 UI Components

### Key Components

- **Navbar**: Navigation with authentication state
- **Layout**: Main application layout wrapper
- **ProtectedRoute**: Route protection with role-based access
- **QuizCard**: Interactive quiz preview cards
- **AuthContext**: Global authentication state management

### Pages

- **Home**: Landing page with features overview
- **Login/Register**: Authentication forms
- **Quizzes**: Quiz listing and search
- **QuizTaking**: Interactive quiz interface
- **CreateQuiz**: Quiz creation/editing form
- **Profile**: User profile and statistics
- **NotFound**: 404 error page

## 🔧 Development

### Frontend Scripts

\`\`\`bash
npm run dev # Start development server
npm run build # Build for production
npm run preview # Preview production build
npm run lint # Run ESLint
\`\`\`

### Backend Scripts

\`\`\`bash
npm start # Start with nodemon
npm run prod # Start in production mode
\`\`\`

## 🚀 Deployment

### Frontend (Vercel/Netlify)

1. Build the project: \`npm run build\`
2. Deploy the \`dist\` folder
3. Configure environment variables

### Backend (Heroku/Railway)

1. Set up environment variables
2. Configure MongoDB connection
3. Deploy with platform-specific instructions

## 🛡️ Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt for password security
- **CORS Configuration**: Controlled cross-origin requests
- **Input Validation**: Server-side validation for all inputs
- **Protected Routes**: Role-based access control
- **HTTP-Only Cookies**: Secure token storage

## 🎯 Future Enhancements

- [ ] Quiz categories and tagging
- [ ] Leaderboards and rankings
- [ ] Quiz sharing functionality
- [ ] Advanced analytics dashboard
- [ ] Mobile app development
- [ ] Social media integration
- [ ] Bulk quiz import/export
- [ ] Advanced question types
- [ ] Quiz scheduling
- [ ] Certificate generation

## 🐛 Troubleshooting

### Common Issues

**Frontend not loading:**

- Ensure all dependencies are installed: \`npm install\`
- Check if backend server is running on port 3000
- Verify CORS configuration in backend

**Authentication issues:**

- Check JWT secret in .env file
- Verify email service configuration
- Ensure MongoDB connection is established

**Database connection errors:**

- Verify MongoDB is running
- Check connection string in .env
- Ensure database permissions are correct

## 📝 License

This project is licensed under the ISC License.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📞 Support

For support, email rohitsingh986491@gmail.com or create an issue in the GitHub repository.

---

**Happy Quizzing! 🎉**
