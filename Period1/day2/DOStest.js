const dos = require("./DosDetector");

const DosDetector = new dos.DOS_Detector(2000);

DosDetector.on("DOS-DETECTED", (arg) => {
  console.log("DETECTED", arg);
});

DosDetector.addUrl("a");
DosDetector.addUrl("b");

setTimeout(() => {
  DosDetector.addUrl("a");
}, 1500);
