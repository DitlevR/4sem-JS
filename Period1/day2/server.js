const http = require("http");
const osInfo = require("./simple-os");
const DosDetector = require("./DosDetector");
const Detector = new DosDetector.DOS_Detector(2000);
const server = http.createServer((req, res) => {
  if (req.url === "/api/os-info") {
    res.setHeader("Content-Type", "application/json");
    //Return a response with OS-info, using the code implemented in part-a
    res.write(JSON.stringify(osInfo.deviceInfo()));
    return res.end();
  }

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});

server.on("connection", (sock) => {
  console.log(sock.remoteAddress);
  Detector.addUrl(sock.remoteAddress);
  // You can get the client-IP in here, using sock.remoteAddress)
});
server.listen(3000);
console.log("listening on 3000");
//Register for the "DosDetected" event and console.log the url and time info.
Detector.on("Detected", (arg) => {
  console.log("DOS detected", arg);
});
