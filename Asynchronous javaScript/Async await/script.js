// Async Await
// Async functions return promises
//Async =. await
const fetchNumber = async () => {
  return 25;
};
console.log(fetchNumber()); //returns promise
fetchNumber().then((number) => console.log(number)); //25

const consoleFetchNumber = async () => {
  await fetchNumber();
};
consoleFetchNumber(); //25

//
const fetchUser = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the user");

      resolve(username);
    }, 2000);
  });
};

const fetchUserPhotos = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the photos");

      resolve(["photo1", "photo2"]);
    }, 2000);
  });
};

const fetchPhotoDetails = (photo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the photo details");

      resolve("details...");
    }, 2000);
  });
};

const displayData = async () => {
  const user = await fetchUser("Adrian");
  const photos = await fetchUserPhotos(user);
  const detail = await fetchPhotoDetails(photos[0]);

  console.log(detail);
};

displayData();
