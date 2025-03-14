const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Set up the Express app
const app = express();
const port = 3000;

// Set up Sequelize connection to MySQL
const sequelize = new Sequelize('mysql://root:password@localhost:3306/question5');

// Define the User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active',
  },
}, {
  tableName: 'users', // the name of the table in your database
  timestamps: false,  // assuming you're not using createdAt/updatedAt columns
});

// Route to fetch all users
app.get('/users', async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Error fetching users');
  }
});

// Sync Sequelize models with the database (ensure tables exist)
sequelize.sync()
  .then(() => {
    console.log('Database connected and synchronized');
    // Start the Express server after syncing with DB
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
