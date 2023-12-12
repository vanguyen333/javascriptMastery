const fetchUser = (username, callback) => {
  setTimeout(() => {
    console.log("Now we have the user");

    callback(username);
  }, 2000);
};

const fetchUserPhotos = (username, callback) => {
  setTimeout(() => {
    console.log("Now we have the photos");

    callback(["photo1", "photo2"]);
  }, 2000);
};

const fetchPhotoDetails = (photo, callback) => {
  setTimeout(() => {
    console.log("Now we have the photo details");

    callback("details...");
  }, 2000);
};

const user = fetchUser("test", (username) => {
  console.log(username);

  fetchUserPhotos(username, (userPhotos) => {
    console.log(userPhotos);

    fetchPhotoDetails(userPhotos[0], (details) => {
      console.log(details);
    });
  });
});

// This is called Callback Hell. It becomes unreadable.
const user1 = fetchUser("test", (username) => {
  fetchUserPhotos(username, (userPhotos) => {
    fetchPhotoDetails(userPhotos[0], (details) => {
      fetchPhotoDetails(userPhotos[0], (details) => {
        fetchPhotoDetails(userPhotos[0], (details) => {
          fetchPhotoDetails(userPhotos[0], (details) => {
            console.log(details);
          });
        });
      });
    });
  });
});
