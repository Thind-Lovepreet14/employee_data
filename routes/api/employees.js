const express = require('express');
const employees = require('../../employees.json');
const router = express.Router();

//Get All Employees
router.get('/', (req, res) => res.json(employees));