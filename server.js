const express = require('express');
const fs = require('fs');
const app = express();
const port = 5555;

app.use(express.json());

app.post('/update-json', (req, res) => {
  // Retrieve the updated JSON data from the request body
  const updatedData = req.body;

  // Write the updated JSON data back to the file
  fs.writeFile('/inites.json', JSON.stringify(updatedData), 'utf8', (err) => {
    if (err) {
      console.error('Error:', err);
      res.status(500).send('Error updating JSON file.');
      return;
    }
    res.sendStatus(200); // Send a success response
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
