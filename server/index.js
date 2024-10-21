/** @format */

///////////////////////////////
// Imports
///////////////////////////////

require("dotenv").config();
const path = require("path");
const express = require("express");

// middleware imports
const handleCookieSessions = require("./middleware/handleCookieSessions");
const logRoutes = require("./middleware/logRoutes");
const checkAuthentication = require("./middleware/checkAuthentication");

// controller imports
const authControllers = require("./controllers/authControllers");
const userControllers = require("./controllers/userControllers");
const fullUserReportControllers = require("./controllers/fullUserReportControllers");
const officerControllers = require("./controllers/officerControllers");
const app = express();

// middleware
app.use(handleCookieSessions); // adds a session property to each request representing the cookie
app.use(logRoutes); // print information about each incoming request
app.use(express.json()); // parse incoming request bodies as JSON
app.use(express.static(path.join(__dirname, "../frontend/dist"))); // Serve static assets from the dist folder of the frontend

///////////////////////////////
// Auth Routes
///////////////////////////////

app.get("/api/me", authControllers.showMe);
app.post("/api/login", authControllers.loginUser);
app.delete("/api/logout", authControllers.logoutUser);

///////////////////////////////
// User Routes
///////////////////////////////

app.post("/api/users", userControllers.createUser);

// These actions require users to be logged in (authentication)
// Express lets us pass a piece of middleware to run for a specific endpoint
app.get("/api/users", checkAuthentication, userControllers.listUsers);
app.get("/api/users/:id", checkAuthentication, userControllers.showUser);
app.patch("/api/users/:id", checkAuthentication, userControllers.updateUser);

///////////////////////////////
// User Report Routes
///////////////////////////////

app.get("/api/reports", fullUserReportControllers.listFullUserReports);
app.get(
	"/api/reports/officer/:officer_id",
	fullUserReportControllers.listFullUserReportsForOfficer
);
app.get(
	"/api/reports/user/:user_id",
	fullUserReportControllers.listFullUserReportsForUser
);
app.post(
	"/api/reports",
	checkAuthentication,
	fullUserReportControllers.createFullUserReport
);

///////////////////////////////
// Officer Routes
///////////////////////////////

app.get("/api/officers/:id", officerControllers.findById);
app.get("/api/officers", officerControllers.listOfficers);

//search by last name
app.get(
	"/api/officers/search/last_name/:last_name",
	officerControllers.resultsOfficerByLastName
);
// search by badge_num
app.get(
	"/api/officers/search/badge_num/:badge_num",
	officerControllers.resultsOfficerByBadgeNum
);

///////////////////////////////
// Precinct Routes
///////////////////////////////

// app.get("/api/precincts/search/name/:name", precinctControllers);

///////////////////////////////
// Fallback Route
///////////////////////////////

// Requests meant for the API will be sent along to the router.
// For all other requests, send back the index.html file in the dist folder.
app.get("*", (req, res, next) => {
	if (req.originalUrl.startsWith("/api")) return next();
	res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

///////////////////////////////
// Start Listening
///////////////////////////////

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
});
