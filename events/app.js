const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("greet", (arg) => {
  console.log(`Hello Proshanta ${arg.lastName} as a ${arg.pro}`);
});

emitter.emit("greet", { lastName: "Roy", pro: "Frontend dev" });
