const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors()); // Enable CORS

let numbersStore = [];
const windowSize = 10;

app.get('/numbers/:numberid', async(req, res) => {
    const { numberid } = req.params;

    if (!['p', 'f', 'e', 'r'].includes(numberid)) {
        return res.status(400).json({ error: 'Invalid number ID' });
    }

    const prevState = [...numbersStore];

    try {
        const response = await axios.get(`http://20.244.56.144/test/numbers/${numberid}`, { timeout: 500 });
        const newNumber = response.data.number;

        if (newNumber && !numbersStore.includes(newNumber)) {
            if (numbersStore.length >= windowSize) {
                numbersStore.shift();
            }
            numbersStore.push(newNumber);
        }

        const avg = numbersStore.reduce((a, b) => a + b, 0) / numbersStore.length || 0;

        return res.json({
            windowPrevState: prevState,
            windowCurrState: numbersStore,
            average: avg,
        });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch number' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});