const chai = require('chai');
const chaiHttp = require('chai-http');
const http = require('http'); // Import the http module

const path = require('path');
const appPath = path.join('C:\\git\\Example1\\examples', '');
const app = require(appPath);

const { expect } = chai;
chai.use(chaiHttp);

describe('Addition API', () => {
  let server; // Define a variable to hold the server instance

  before((done) => {
    // Start the server and store the instance in the 'server' variable
    server = http.createServer(app);
    server.listen(0, () => {
      done();
    });
  });

  after((done) => {
    // Close the server when tests are done
    server.close(() => {
      done();
    });
  });

  it('should add two numbers', async function () {
  this.timeout(5000); // Increase the timeout to 5 seconds (adjust as needed)

  const res = await chai
    .request(server)
    .get('/add')
    .query({ num1: 5, num2: 3 }); // Test with your desired numbers

  expect(res).to.have.status(200);
  expect(res.body).to.have.property('result').to.equal(8); // Adjust the expected result accordingly
});
});

