const { log } = require("console");
const EventEmitter = require("events");
const emitter = new EventEmitter();

const eventCounts = {
  "user-login": 0,
  "user-purchase": 0,
  "profile-update": 0,
  "user-logout": 0,
};

emitter.on("user-login", (userName) => {
  eventCounts["user-login"]++;
  console.log(`${userName} logged in`);
});

emitter.on("user-purchase", (userName, item) => {
  eventCounts["user-purchase"]++;
  console.log(`${userName} purchased ${item}`);
});

emitter.on("profile-update", (userName, field) => {
  eventCounts["profile-update"]++;
  console.log(`${userName} update their ${field}`);
});

emitter.on("user-logout", (userName) => {
  eventCounts["user-logout"]++;
  console.log(`${userName} logged out`);
});

emitter.on("summary", () => {
  console.log(eventCounts);
});

emitter.emit("user-login", "Proshanta");
emitter.emit("user-purchase", "Proshanta", "Laptop");
emitter.emit("profile-update", "Proshanta", "email");
emitter.emit("user-logout", "Proshanta");

emitter.emit("summary");
