/* MEDIUM: Create a JSON file that will have 10 employees in it, their employeeID, their name, their salary 
and department name.
Then, create an express API so that when you hit the endpoint with a GET request we want the api to respond
with all data on the employees.
If you hit the endpoint with their employeeID, we want to hand up only the information on that one employee.
If you hit the endpoint with an incorrect employeeID, send back the correct HTTP status code and an error 
message stating that the employee was not found.
GET::myendpointname.com/employees = Json with information from all 10 employees.
GET::myendpointname.com/employees/<employeeID> = Json with the information from that specific employee. */

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const employees = require('./employees.json');

const PORT = process.env.PORT || 3000;

//Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.listen(PORT, () => {
    console.log(`Port started on port: ${PORT}`)
});

app.get('/',(req, res)=>
res.render('index', {
    title: 'Member App',
    employees
})
);