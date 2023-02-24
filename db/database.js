const { default: mongoose } = require('mongoose');

async function connection() {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017");
    console.log("Connection established...");
  } catch (error) {
    console.log('Coneection refused...');
    console.log(error);
  }
}

module.exports = {
  connection,
  mongoose
};
