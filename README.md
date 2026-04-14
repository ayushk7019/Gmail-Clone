# Gmail Clone

A full-stack web application that replicates the core functionality of Gmail, allowing users to view, manage, and interact with emails through a clean, intuitive interface.

## Features

- **Email Management**: View all emails in an inbox-style layout
- **Email Categorization**: Filter emails by type (Primary, Social, Promotions, Updates)
- **Star Emails**: Mark important emails with a star for easy access
- **Mark as Read/Unread**: Toggle read status of emails
- **Delete Emails**: Remove emails from the inbox
- **Responsive Design**: Clean, Gmail-inspired UI with responsive layout
- **Real-time Updates**: Dynamic email list updates after actions

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework for API
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

### Frontend
- **HTML5** - Markup structure
- **CSS3** - Styling and layout
- **Vanilla JavaScript** - Client-side functionality
- **Fetch API** - HTTP requests to backend

## Project Structure

```
Gmail-Clone-main/
├── backend/
│   ├── env.txt          # Environment variables template
│   ├── index.js         # Main server file
│   ├── package.json     # Backend dependencies
│   └── mails/
│       ├── controller.js # Business logic for mail operations
│       ├── model.js     # MongoDB schema for emails
│       └── route.js     # API routes
├── frontend/
│   ├── index.html       # Main HTML page
│   ├── script.js        # Frontend JavaScript logic
│   ├── styles.css       # CSS styling
│   └── assets/          # Images and static assets
└── README.md            # Project documentation
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB instance)
- Git

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   - Rename `env.txt` to `.env`
   - Update the `DB_URL` with your MongoDB connection string
   - The default PORT is set to 8000

4. **Start the backend server:**
   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:8000`

### Frontend Setup

1. **Open the frontend:**
   - Simply open `frontend/index.html` in your web browser
   - Or serve it through a local server for better experience

## API Endpoints

The backend provides the following REST API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/mail/getAll` | Retrieve all emails |
| POST | `/api/mail/create` | Create a new email |
| PUT | `/api/mail/star/:id` | Toggle star status of an email |
| PUT | `/api/mail/seen/:id` | Mark email as read |
| DELETE | `/api/mail/delete/:id` | Delete an email by ID |

### Email Schema

Each email document contains:
- `sender`: Email sender address
- `receiver`: Email recipient address
- `subject`: Email subject line
- `body`: Email content
- `type`: Category (primary, social, promotions, updates)
- `status`: Read status (seen/unseen)
- `starred`: Boolean flag for starred emails
- `createdAt`: Timestamp of email creation

## Usage

1. **Start the Backend:**
   - Ensure MongoDB is running and connected
   - Run `npm run dev` in the backend directory

2. **Access the Application:**
   - Open `frontend/index.html` in your browser
   - The interface will load and display emails from the database

3. **Interact with Emails:**
   - Click on emails to mark them as read
   - Click the star icon to star/unstar emails
   - Use the delete button to remove emails
   - Use category filters to view emails by type

## Development

### Adding New Features
- Backend: Add new routes in `mails/route.js` and implement logic in `controller.js`
- Frontend: Modify `script.js` for new functionality and update `styles.css` for styling

### Database
- The application uses MongoDB with Mongoose for data modeling
- Email data is stored in a collection called `mail-collections`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Troubleshooting

### Common Issues

1. **Connection Refused Error:**
   - Ensure the backend server is running on port 8000
   - Check that MongoDB connection string is correct in `.env`

2. **Emails Not Loading:**
   - Verify the backend API is accessible
   - Check browser console for JavaScript errors
   - Ensure CORS is properly configured

3. **Database Connection Issues:**
   - Confirm MongoDB Atlas IP whitelist includes your IP
   - Check network connectivity to MongoDB cluster

### Environment Variables
Make sure your `.env` file contains:
```
PORT=8000
DB_URL=your_mongodb_connection_string
```

## License

This project is licensed under the ISC License.

## Acknowledgments

- Inspired by Gmail's user interface and functionality
- Built as a learning project for full-stack web development
- Uses modern web technologies for a responsive email client experience  
