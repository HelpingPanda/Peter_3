function validateForm() {
// if (isEmpty(document.getElementById('data_2').value.trim())) {
// alert('NAME is required!');
// return false;
// }
if (isEmpty(document.getElementById('data_4').value.trim())) {
alert('EMAIL is required!');
return false;
}
if (!validateEmail(document.getElementById('data_4').value.trim())) {
alert('EMAIL must be a valid email address!');
return false;
}
return true;
}
function isEmpty(str) { return (str.length === 0 || !str.trim()); }
function validateEmail(email) {
var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
return isEmpty(email) || re.test(email);
}

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBCLcEoVKqDfDXxeMxOvPeXAb9A4PA53fw",
    authDomain: "helping-panda.firebaseapp.com",
    databaseURL: "https://helping-panda.firebaseio.com",
    projectId: "helping-panda",
    storageBucket: "helping-panda.appspot.com",
    messagingSenderId: "546878085356",
    appId: "1:546878085356:web:dad9843ec075ac0f41adc9",
    measurementId: "G-DN8V0MNE82"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  var base_provider = new firebase.auth.GoogleAuthProvider();
  var name;
  var flag=1;
  base_provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().languageCode = 'pt';
  GoogleSignIn=()=>{
    //base_provider = new firebase.auth.GoogleAuthProvider()
firebase.auth().signInWithPopup(base_provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      var User = firebase.auth().currentUser;
    
      console.log(token)
      console.log(user)
      //printe();
      //alert("Sign in successful");
      signot();
      display();
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    
      console.log(error.code)
      console.log(error.message)
   });
  }

function display()
{
    var User = firebase.auth().currentUser;
      name = User.displayName;
      document.getElementById("signin").innerHTML = name;
}
function signout()
{
  firebase.auth().signOut().then(function() {
        // Sign-out successful.
  alert("You have signed out");
  flag=0;
  //text = "Sign in";
  //document.getElementById("signout").innerHTML = "Sign In";
      }).catch(function(error) {
        // An error happened.
      });
}
function signot() {

    if(document.getElementById("signout").innerHTML === "Sign Out")
    {
        document.getElementById("signout").innerHTML = " ";
        signout();
        document.getElementById("signin").innerHTML = "Sign In";
        //printe();
    }
    else
        document.getElementById("signout").innerHTML = "Sign Out";

}
function printe() {

    if(document.getElementById("signin").innerHTML === "Sign In")
    {
      
    active();
    //active();
    }
    
}

function printe2() {

    if(document.getElementById("signin").innerHTML === "Sign In")
    {
      
    active1();
    //active();
    }
    
}

function active1()
{
    firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
     document.getElementById("signin").innerHTML = name;
    display();
    document.getElementById("signout").innerHTML = "Sign Out";
  }
});
}


function active()
{
    firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    alert("Sign in successful");
    document.getElementById("signin").innerHTML = name;
    display();
    document.getElementById("signout").innerHTML = "Sign Out";
  } else {
    // No user is signed in.
    if(flag===1)
    {
    GoogleSignIn();
    }
    else
    {
        flag=1;
    }
  }
});
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
