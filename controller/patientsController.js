var data = require('../data/patients')

exports.patientsControler = (req,res) => {
    res.status(200).send(data)
}

exports.patientsControlerID = (req,res) =>{
    const id = req.params.id
    const data = data[id]
    res.status(200).send(data)
}