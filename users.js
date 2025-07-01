const express = require('express');
const router = express.Router();

let users = [
    {id: 1, firstname: 'Israel', lastname: 'Soneye'},
    {id: 2, firstname: 'Olaoluwa', lastname: 'Soneye'}
]; 

//Get all users
router.get('/', (req, res) => {
    res.json(users);
});

// Cerate new user
router.post('/', (req, res) => {
    const newUser = {
        id: users.length + 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    };
    users.push(newUser);
    res.status(201).json('New User added!');
});

//Get user by id
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found.');
    res.json(user);
});

//Update a user
router.put('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).send('The user you searched for does not exist');
    user.id = user.id
    user.firstname = req.body.firstname,
    user.lastname = req.body.lastname
    res.json(`User data with id ${user.id} updated`);
});

//Delete a user
router.delete('/:id', (req, res) => {
    const initialLength = users.length;
    users = users.filter(u => u.id !== parseInt(req.params.id));
    if (users.length === initialLength) return res.status(404).send('User not found');
    res.status(404).send('User successfully deleted');
})
module.exports = router;