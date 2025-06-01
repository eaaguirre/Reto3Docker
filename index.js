const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello Edinson Aguirre' });
});

// Solo iniciar el servidor si se ejecuta directamente
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = app;
