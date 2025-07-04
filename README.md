# Ideaboard

A full-stack web application for sharing and managing ideas. Users can create, view, edit, and delete ideas in a clean and intuitive interface.

## Features

- Create new ideas with title and description
- View all ideas in a responsive grid layout
- Edit existing ideas
- Delete ideas
- Responsive design that works on desktop and mobile

## Technology Stack

### Frontend
- React.js
- CSS for styling
- Axios for API requests

### Backend
- Node.js
- Express.js
- MongoDB for database
- Mongoose for object modeling

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed and running

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a .env file with your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the server:
   ```
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Deployment

### Frontend Deployment (Vercel)
1. Fork or clone this repository
2. Login to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure project:
   - Root Directory: `frontend`
   - Framework Preset: `Create React App`
   - Build Command: `npm run build`
   - Output Directory: `build`
6. Add environment variables:
   ```
   REACT_APP_API_URL=your_backend_api_url
   ```
7. Click "Deploy"

### Backend Deployment (Vercel)
1. In the backend directory, create a `vercel.json` file:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "server.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "server.js"
       }
     ]
   }
   ```
2. Login to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure project:
   - Root Directory: `backend`
   - Framework Preset: `Other`
   - Build Command: `npm install`
   - Output Directory: `.`
6. Add environment variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```
7. Click "Deploy"

After deployment:
1. Update the frontend's .env file with the new backend URL
2. Redeploy the frontend if necessary
3. Your application should now be live!

## Usage

1. Open the application in your browser
2. Click "Add New Idea" to create a new idea
3. Fill in the title and description
4. Click "Submit" to save your idea
5. View all ideas on the main page
6. Edit or delete ideas using the buttons on each idea card

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request