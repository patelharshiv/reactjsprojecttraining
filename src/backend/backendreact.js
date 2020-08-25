
import firebase from 'firebase';
// const firebase = require("firebase");
// require("firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyDMZFui4BoKiIHl64DTWz_EikSXv3ZtW7w",
  authDomain: "productionanalysis.firebaseapp.com",
  databaseURL: "https://productionanalysis.firebaseio.com",
  projectId: "productionanalysis",
  storageBucket: "productionanalysis.appspot.com",
  messagingSenderId: "833693627021",
  appId: "1:833693627021:web:cf624fcc91f3fa839fa8c4"
};
firebase.initializeApp(firebaseConfig);
const lookout = firebase.firestore();

export var fetchlist = async() => {
  console.log("called");
lookout.collection("users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        var array123 = [];
        array123.push(doc.id);
        console.log(array123.length);
    });
});
}

// export var addtodo = async(data) => {
//   var check = data.map(x => {

//   });
//   const lookout1 = lookout.child("users/user");
//   var newadd = lookout1.set({
  
//   },function(error){
//     if(error){
//       console.log("error");
//       return "error";
//     }else{
//       console.log("done");
//       return "done";
//     }
//   });  

// }
