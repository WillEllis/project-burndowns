const firebaseConfig = {
  apiKey: "AIzaSyD6Rrej8FMsfYQn0-HirdgR-1e2RbmqvdU",
  authDomain: "project-burndowns.firebaseapp.com",
  databaseURL: "https://project-burndowns.firebaseio.com",
  projectId: "project-burndowns",
  storageBucket: "project-burndowns.appspot.com",
  messagingSenderId: "558142803441"
};

// Cloud Functions
// const backendUrl = `http://localhost:5000/${
//   firebaseConfig.projectId
// }/us-central1/api/graphql`;

// App Engine / Debug
const backendUrl = `http://localhost:8080`;

export const environment = {
  production: false,
  firebaseConfig,
  backendUrl,
};
