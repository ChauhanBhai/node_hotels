const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/menu')

router.post('/', async (req, res) => {
    try {
        const data = req.body; // Assuming the request body contains the menu item data
        // Create a new MenuItem document using the mongoose model
        const newMenuItem = new MenuItem(data);
        // Save the new menu item to the database 
        const response = await newMenuItem.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});

// GET route to fetch all menu items
router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log("data Fetch");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});
router.get('/:tasteType', async (req, res) => {
    try {
        const tasteType = req.params.tasteType;
        if (tasteType == 'Sweet' || tasteType == 'Spicy' || tasteType == 'Sour') {
            const response = await MenuItem.find({ taste: tasteType });
            console.log("Response Fetch")
            res.status(200).json(response)
        }
        else {
            res.status(404).json({ err: 'Invalid work type' });
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ erro: 'Internet Server Error' });
    }
})

router.put('/:id', async (req, res) => {
    try {
        const menuId = req.params.id;
        const Updatemenu = req.body;

        const Response = await MenuItem.findByIdAndUpdate(menuId, Updatemenu, {
            new: true,
            ValidityState: true
        })
        
        if (!Response) return res.status(404).json('invaild work type')
            console.log("Data Updated")
            res.status(200).json(Response);
    }
    catch {
        console.log(err);
        res.status(500).json({ err: 'Internet Server Error' })
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedMenuItem = await MenuItem.findByIdAndDelete(id);
        if (!deletedMenuItem) {
            return res.status(404).json({ err: 'MenuItem not found' });
        }
        console.log('Data deleted');
        res.status(200).json({ message: 'MenuItem deleted successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});
module.exports = router;