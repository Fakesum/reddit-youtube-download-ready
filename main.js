const Redditube = require("redditube");

// Configure access to Reddit
Redditube.config({
    "userAgent": "Mozilla/5.0 (Linux; Android 7.0; HTC 10 Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.83 Mobile Safari/537.36",
    "clientId": "6SNVIutSHLTWYCldPLFKQQ",
    "clientSecret": "WER7mUx6ZVnmMrpnrqfhMFHLX7zOVw",
    "username": "TheAdminObserver",
    "password": "asdfghjkl12345qwert67890yuiop"
});

// Log start, status, errors and end events (optional)
Redditube.on("start", () => console.log("Start event!"));
Redditube.on("status", status => console.log(status));
Redditube.on("error", error => console.log(error));
Redditube.on("end", () => console.log("End event!"));

// Option 1
// Use .then() and .catch()
Redditube.make("f9cufu", 3).then(videoPath => {
    console.log(videoPath);
}).catch(error => {
    console.log(error);
});

// Option 2
// Await a promise (inside an asynchronous function)

async function main(){
    return await Redditube.make("f9cufu", 3);
}

const videoPath = main();