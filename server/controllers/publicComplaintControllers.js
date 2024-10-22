//show complaint
//list all complaints
//create complaint
//delete complaint
//update complaint

const PublicComplaint = require('../models/PublicComplaint')
// search up by officers taxID

exports.getOfficerByTaxId = async (req, res) => {
    const { tax_id } = req.params;

    try {
        const OfficerByTaxId = await PublicComplaint.findOfficerByTaxId(
            tax_id
        );
        res.status(200).send(OfficerByTaxId);
    } catch (error) {
        console.log(error)
        return res.status(500).send('Error retrieving Public Complaint')
    }
};










