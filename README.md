# MERN Stack Job Portal

A full-stack job portal application built with the MERN stack (MongoDB, Express.js, React, Node.js) that connects job seekers with employers.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Overview

This Job Portal is a modern web application designed to streamline the job search and hiring process. Job seekers can browse opportunities, apply for positions, and track their applications, while employers can post job openings and manage applicants through an intuitive dashboard.

## Features

### For Job Seekers
- User registration and authentication
- Browse and search job listings
- Apply for jobs with resume upload
- Track application status
- Profile management

### For Employers
- Employer registration and authentication
- Post and manage job listings
- Review applications
- Applicant tracking system
- Company profile management

### General
- Responsive design for all devices
- Real-time updates
- Secure authentication with JWT
- Advanced search and filtering

## Tech Stack

**Frontend:**
- React.js
- React Router for navigation
- Tailwind CSS / Material-UI for styling
- Axios for API requests

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose ODM
- JWT for authentication
- Bcrypt for password hashing

**Deployment:**
- Vercel (Frontend & Backend)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas account)
- npm or yarn

### Backend Setup

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd job-portal
   ```

2. Navigate to the backend directory:
   ```bash
   cd backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the backend directory with the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

5. Start the backend server:
   ```bash
   npm run dev
   ```

   You should see:
   ```
   Server is running on port 5000
   MongoDB connected successfully
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend directory:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## Environment Variables

### Backend (.env)
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloudinary_name (optional)
CLOUDINARY_API_KEY=your_cloudinary_key (optional)
CLOUDINARY_API_SECRET=your_cloudinary_secret (optional)
```

### Frontend (.env)
```env
VITE_API_URL=your_backend_url
```

## Usage

1. **Register an Account**: Choose between job seeker or employer account
2. **Complete Your Profile**: Add relevant information and upload resume (for job seekers)
3. **Browse Jobs**: Search and filter jobs based on location, category, and experience
4. **Apply**: Submit applications with cover letters
5. **Track Applications**: Monitor your application status in the dashboard

For employers:
1. **Create Company Profile**: Add company details and logo
2. **Post Jobs**: Create detailed job listings
3. **Manage Applications**: Review and shortlist candidates
4. **Communicate**: Contact potential hires

## Deployment

This application is deployed on Vercel.

**Live Demo:** [Your Vercel URL]

### Deploy Your Own

#### Backend Deployment on Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure the root directory to `backend`
4. Add environment variables in Vercel dashboard
5. Deploy

#### Frontend Deployment on Vercel

1. Import your repository in Vercel
2. Configure the root directory to `frontend`
3. Add environment variables
4. Deploy

## Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## Acknowledgments

Built with ❤️ using the MERN stack

---

⭐ If you find this project helpful, please consider giving it a star!