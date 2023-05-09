//Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
//The function should log the message to the console after the specified delay time.

async function message(sms, delay) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    console.log(sms);
  }
  
  message("I will arrive later", 4000);
  

//You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. 
//Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
// let userIds=[56789056,23456123,78905645]
// async function fetchUserDataSequentially() {
//     for (const id of userIds) {
//       const userData = await getUserData(id);
//       console.log(userData);
//     }
//   }
//   fetchUserDataSequentially()



//You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task
 //is successful and rejects if there's an error. Write a function that calls performTask() and logs a custom success message 
 //if the task is successful, and a custom error message if there's an error.
 async function Task() {
  try {
    await performTask();
    console.log("Task successful!");
  } catch {
    console.log("Task failed!");
  }
}

Task();





