import express from "express";
import mysql from 'mysql2';
import cors from 'cors';


const app = express();

// built in middleware function express.json for parsing json data
app.use(express.json());



// cors is a built in middleware to allow users to request recources
app.use(cors(
  {
    origin: "*"
  }
))



// Creating connection to mysql database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "database"
})


////// Login API //////
// Used for both students and teachers
app.post('/login', (req,res) => {
  const sql = "SELECT * FROM Slogin WHERE email = ? AND password = ?"

  // Send query to db to search for account with email=req.body.email and password=req.body.password
  db.query(sql, [req.body.email, req.body.password], (err,data) => {
 
    console.log("Data:", data)
    if(err) return res.json({Message: "Server Side Error"});
    // If a result was found with matching email and password in the db
    if(data.length > 0){
        // Student account was found
        return res.json({Status: "Success", Account: "Student"})
    }
    else{
      // If no records were found in the student table, then search the teacher table
      const sql = "SELECT * FROM Tlogin WHERE email = ? AND password = ?"

      db.query(sql, [req.body.email, req.body.password], (err,data) => {
    
        console.log("Data:", data)
        if(err) return res.json({Message: "Server Side Error"});
        // If a result was found with matching email and password in the db
        if(data.length > 0){
            // Teacher account was found
            return res.json({Status: "Success", Account: "Teacher"})
        }
        else{
          return res.json({Message: "No Records existed"});
        }
      })
    }
  })
}) 


////// Create Student Account API //////
app.post('/create_Saccount', (req,res) => {

  // pattern that email must match to be valid
  // "example@example.edu"
  var pattern = /^[^@]+@[^@]+\.(edu)$/i;

  // check if email is valid before querying to database
  if (!pattern.test(req.body.email)) {
    return res.json({Status: "Please enter a valid edu email"});
  } 

  // Check if password is long enough
  if (req.body.password.length < 6){
    return res.json({Status: "Password is too short. Must be at least six characters"})
  }

  // Check that passwords match from user
  if (req.body.password != req.body.cpassword){
    return res.json({Status: "Password mismatch"})
  }

  // Check if email already exists in the database
  const checkEmailQuery = "SELECT * FROM Slogin WHERE email = ?";
  db.query(checkEmailQuery, [req.body.email], (err, rows) => {
      if (err) {
          return res.json({ Status: "Server Side Error" });
      }

      // If the email already exists in the database
      if (rows.length > 0) {
          return res.json({ Status: "Email already exists" });
      }

      // If the email doesn't exist, insert the new user into the database
      const insertUserQuery = "INSERT INTO Slogin (email, password) VALUES (?, ?)";
      db.query(insertUserQuery, [req.body.email, req.body.password], (err) => {
          if (err) {
              return res.json({ Status: "Server Side Error" });
          }
          return res.json({ Status: "Success" });
      });
  });
});


////// Create Teacher Account API //////
app.post('/create_Taccount', (req,res) => {

  // pattern that email must match to be valid
  // "example@example.edu"
  var pattern = /^[^@]+@[^@]+\.(edu)$/i;

  // check if email is valid before querying to database
  if (!pattern.test(req.body.email)) {
    return res.json({Status: "Please enter a valid edu email"});
  } 

  // Check if password is long enough
  if (req.body.password.length < 6){
    return res.json({Status: "Password is too short. Must be at least six characters"})
  }

  // Check that passwords match from user
  if (req.body.password != req.body.cpassword){
    return res.json({Status: "Password mismatch"})
  }

  // Check if email already exists in the database
  const checkEmailQuery = "SELECT * FROM Tlogin WHERE email = ?";
  db.query(checkEmailQuery, [req.body.email], (err, rows) => {
      if (err) {
          return res.json({ Status: "Server Side Error" });
      }

      // If the email already exists in the database
      if (rows.length > 0) {
          return res.json({ Status: "Email already exists" });
      }

      // If the email doesn't exist, insert the new user into the database
      const insertUserQuery = "INSERT INTO Tlogin (email, password) VALUES (?, ?)";
      db.query(insertUserQuery, [req.body.email, req.body.password], (err) => {
          if (err) {
              return res.json({ Status: "Server Side Error" });
          }
          return res.json({ Status: "Success" });
      });
  });
});


// Start app
app.listen(8081, ()=> {
  console.log("Running")
})

