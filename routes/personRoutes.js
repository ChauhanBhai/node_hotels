const express = require('express');
const router = express.Router();

const Person = require('./../models/person')


// POST route to add a person
router.post('/', async (req, res) => {
    try {
        const data = req.body; // Assuming the request body contains the person data
        // Create a new Person document using the mongoose model
        const newPerson = new Person(data);
        // Save the new person to the database 
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});

// GET route to fetch all persons
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log("data Fetch");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});
router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType });
            console.log('response fetch');
            res.status(200).json(response);
        }
        else {
            res.status(404).json({ error: 'Invalid work type' });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ err: 'Internet Server Error' });
    }

})



// Update 

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatePerson = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatePerson, {
            new: true, //Return the updated document
            runValidators: true, //Run Monogoose validation
        })
        if (!response) {
            return res.status(404).json({ error: 'Person not Found' });
        }
        console.log("personId", personId);
        console.log('updatePerson', updatePerson);
        console.log('data updated');
        res.status(200).json(response)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ err: 'Internet Server Error' })
    }
})

// Delete Person Item
router.delete('/:id', async (req, res) => {
    try{
        const PersonId = req.params.id;
        const response = await Person.findByIdAndDelete(PersonId);
        if (!response) {
            return res.status(404).json({ err: 'Person not Found' });
        }
        console.log("PersonId", PersonId);
        res.status(200).json({message:'Person Data Deleted Successfully'}); 
    } 
    catch{
        console.log(err)
        res.status(500).json({ err: 'Internet Server Error' })
    }
   
})




module.exports = router;