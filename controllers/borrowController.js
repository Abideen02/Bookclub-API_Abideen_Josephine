import Member from "../models/borrow.model.js";


//Add a Record
export async function addrecord(req, res) {
    try {
        let record = await record.create(req.body);
        if (record) {
            res.status(200).json({
                success: true,
                message: 'record created successfully',
                data: record
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'recordr could not be created at this time'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View a record
export async function viewrecord(req, res) {
    try {
        let allreords = await record.findAll({where: {record_id: req.params.id}});
        if (allrecordss) {
            res.json({
                success: true,
                message: 'record  retrieved successfully',
                data: allrecords
            })
        } else {
            res.json({
                success: true,
                message: 'No reocrd  found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View all records
export async function viewAllrecordss(req, res) {
    try {
        let allrecordss = await records.findAll();
        if (allrecords) {
            res.json({
                success: true,
                message: 'records retrieved successfully',
                data: allrecords
            })
        } else {
            res.json({
                success: true,
                message: 'No record  found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//Update a record
export function updaterecord(req, res) {
    console.log(req.body);
    res.send(req.body)
}

//view memberborrowing
//View  memberborrowing
export async function viewmemberborrowing(req, res) {
    try {
        let allmembers = await Member.findAll({where: {borrower_name: req.params.borrowe_name}});
        if (memberborrowings) {
            res.json({
                success: true,
                message: 'books records retrieved successfully',
                data: memberborrowings
            })
        } else {
            res.json({
                success: true,
                message: 'No book records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}
