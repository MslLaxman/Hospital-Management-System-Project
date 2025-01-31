// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const patientsRouter = require('./routes/patients');
const doctorsRouter = require('./routes/doctors');
const appoinmentsRouter = require('./routes/appointments')
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
main()
.then((res)=>{
    console.log("connected to DB");
})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/hospital");
} 



app.use('/patients', patientsRouter);
app.use('/doctors', doctorsRouter);
app.use('/appointments', appoinmentsRouter)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
