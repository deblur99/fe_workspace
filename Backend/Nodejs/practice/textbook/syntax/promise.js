/*
const condition = true; // true means resolve, false means reject
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Success");
  } else {
    reject("Failure");
  }
});

// it can include another code
promise
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log("무조건");
  });
*/

let condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("true");
  } else {
    reject("false");
  }
});

promise
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log("무조건");
  });

function findAndSaveUser(Users) {
  Users.findOne({})
    .then(user => {
      user.name = "zero";
    })
    .then(user => {
      return Users.findOne({ gender: "m" });
    })
    .then(user => {
      // 생략
    })
    .catch(err => {
      console.error(err);
    });
}
