var patients = require('../data/patients')

patientsControler = (req,res) => {
    res.status(200).send(patients)
}

patientsControlerID = (req,res, next) =>{
    var id = parseInt(req.params.id) - 1
    var patient = patients[id]
    console.log(patients.length)
    res.status(200).send(patient)
}

module.exports = {patientsControler, patientsControlerID}