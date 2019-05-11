const firebaseConfig = {
  apiKey: "AIzaSyD6Rrej8FMsfYQn0-HirdgR-1e2RbmqvdU",
  authDomain: "project-burndowns.firebaseapp.com",
  databaseURL: "https://project-burndowns.firebaseio.com",
  projectId: "project-burndowns",
  storageBucket: "project-burndowns.appspot.com",
  messagingSenderId: "558142803441"
};

// Cloud Functions
const backendUrl = `https://us-central1-${
  firebaseConfig.projectId
}.cloudfunctions.net/api/graphql`;

// App Engine
// const backendUrl = `<insert app engine url here>`;

export const environment = {
  production: true,
  firebaseConfig,
  backendUrl,
};
