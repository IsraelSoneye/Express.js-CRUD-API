const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000;
const usersRoutes = require('./users')

app.use(express.json());
app.use('/users', usersRoutes);

app.get('/', (req, res)  => {
    res.send('Hello World')
});

app.listen(PORT, () => console.log(`Server is running on port: http://localhost${PORT}`));