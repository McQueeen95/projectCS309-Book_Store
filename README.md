# projectCS309 ( Book Store App With MERN Stack )

basic structure of backend {
  /backend
    /config
      - db.js        // Database configuration
      - keys.js      // Secret keys, configuration settings
    /controllers
      - bookController.js  // Controller for managing products
      - userController.js     // Controller for managing users
      - authController.js     // Controller for authentication
    /middleware
      - auth.js      // Authentication middleware
      - error.js     // Error handling middleware
    /models
      - Book.js   // MongoDB schema for products
      - User.js      // MongoDB schema for users
    /routes
      - bookRoutes.js      // Routes for products
      - userRoutes.js         // Routes for users
      - authRoutes.js         // Routes for authentication
    server.js               // Backend Entry point 
    App.js                  // Server setup and configurations
}

basic structure of frontend {
  /frontend
    /public
      - index.html       // HTML template
    /src
      /components
        - Header.js      // Header component
        - BookList.js    // Component to display a list of books
        - BookDetails.js // Component to display details of a book
        - ShoppingCart.js // Component for the shopping cart
        - ...
      /pages
        - Home.js        // Home page displaying featured books
        - BookPage.js    // Page for displaying a single book
        - CartPage.js    // Page for the shopping cart
        - ...
      /styles
        - main.css       // Global styles
      /services
        - bookService.js  // Service for interacting with book-related API endpoints
        - authService.js  // Service for authentication-related API endpoints
        - ...
      - App.js            // Main application component
      - index.js          // Frontend entry point


}
