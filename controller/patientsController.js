var patients = require('../data/patients')

patientsControler = (req,res) => {
    res.status(200).send(patients)
}

patientsControlerID = (req,res, next) =>{
    var id = parseInt(req.params.id) - 1
    var patient = patients[id]
    console.log(patients.length, id)
    res.status(200).json(patient)
}

module.exports = {patientsControler, patientsControlerID}