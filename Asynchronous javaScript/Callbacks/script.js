// Calllbacks
// Data Fetching: lay du lieu
// API is sth you can access data from

const fetchUser = (username, callback) => {
  //   console.log("Fetching...");
  setTimeout(() => {
    // console.log("Now we have the user.");
    callback({ username });
  }, 2000);
};

const user = fetchUser("Michael", (user) => {
  console.log(`Your name is : ${user.username}`);
});
