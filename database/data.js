
        //Store information about your firebase so we can connect
        
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //IMPORTANT: REPLACE THESE WITH YOUR VALUES (these ones won't work)
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  var config = {
    apiKey: "AIzaSyBCLcEoVKqDfDXxeMxOvPeXAb9A4PA53fw",
    authDomain: "helping-panda.firebaseapp.com",
    databaseURL: "https://helping-panda.firebaseio.com",
    projectId: "helping-panda",
    storageBucket: "helping-panda.appspot.com",
    messagingSenderId: "546878085356",
    appId: "1:546878085356:web:dad9843ec075ac0f41adc9",
    measurementId: "G-DN8V0MNE82"
  };
    var email;
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        
        //initialize your firebase
        firebase.initializeApp(config);
        const auth = firebase.auth();
        const database = firebase.database();
        function signUp(){
            
            email = document.getElementById("email");
            var password = document.getElementById("password");
            
            const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
            verify();
            //alert("Signed Up");
        }

        function signIn(){
            var user = firebase.auth().currentUser;
            if (user. emailVerified){
            var email = document.getElementById("email");
            var password = document.getElementById("password");

            const promise = auth.signInWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert("There is no user with that Email, please Sign Up"))
          }
          else
          {
            alert("Verify your EMail !!");
          }
            //closeCurrentTab();
            //window.location.href = "D:/web/peter1/index.html";
            //alert("Signed in as " + email);
            //closeCurrentTab();
            
        }

        function ver() {
          // body...
         firebase.auth().onAuthStateChanged(authUser => {
      if(authUser.user.emailVerified){ //This will return true or false
        console.log('email is verified')
       }else{
           console.log('email not verified')
       }
    })
}
        function verify(){

        auth.onAuthStateChanged(function(user){
            //var user = firebase.auth().currentUser;
            if(user){
            user.sendEmailVerification().then(function() {
              // Email sent.
              alert("An Email has been sent. Please confirm your mail.");
              auth.signOut();
              location.replace("https://helpingpanda.in/")
            }).catch(function(error) {
              // An error happened.
            });
        }
    });
        }

        function reset(){

        var emailAddress = prompt("Please enter your Email", "user@example.com");

        auth.sendPasswordResetEmail(emailAddress).then(function() {
          // Email sent.
          alert("Password Reset Email Sent !")
        }).catch(function(error) {
          // An error happened.
        });

        }
auth.onAuthStateChanged(function(user){
    
    if(user){
      
      email = user.email;
      //alert("Active User " + email);
      change();
      //document.getElementById("signin").innerHTML = user.email;
      //closeCurrentTab();    
      
      //Take user to a different or home page

      //is signed in
      
    }
    else{
      document.getElementById("authon").innerHTML = "";
      document.getElementById("authonmob").innerHTML = "";      
     // document.getElementById("abc").innerHTML = "";

      //alert("No Active User");
      //no user is signed in
    }

  });

  function signOut(){
    
    auth.signOut();
    alert("Signed Out");
    myFunction1();
    myFunction3();
    change2();
//    closeCurrentTab();
    
//   }
// function dis(){
// var firstPlayerRef = firebase.database().ref("users/ocWNT4HKQ7d9TRaisnuAcPUZquq1");

// var lastPlayerRef = firebase.database().ref('users/').limitToLast(1);

// firstPlayerRef.on("value", function(data) {
//    console.log(data.fullName.val());
// }, function (error) {
//    console.log("Error: " + error.code);
// });

// lastPlayerRef.on("value", function(data) {
//    console.log(data.val());
//    $('#fullname').html(data.fullName.val());
// }, function (error) {
//    console.log("Error: " + error.code);
// });
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function openFormMob() {
  document.getElementById("myFormMob").style.display = "block";
}

function closeFormMob() {
  document.getElementById("myFormMob").style.display = "none";
}
function chumma()
{
  var user = firebase.auth().currentUser;
            var email = document.getElementById("email");
            var password = document.getElementById("password");

            const promise = auth.signInWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert("There is no user with that Email, please Sign Up"))
}

function signin(){
    var user = firebase.auth().currentUser;
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    //promise.catch(e => alert("There is no user with that Email, please Sign Up"))
    promise.catch(e => alert(e.message))
//closeCurrentTab();
//window.location.href = "D:/web/peter1/index.html";
//alert("Signed in as " + email);
            //closeCurrentTab();
}

function sign(){
    var user = firebase.auth().currentUser;
    var email = document.getElementById("emailweb");
    var password = document.getElementById("passwordweb");
    firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
//closeCurrentTab();
//window.location.href = "D:/web/peter1/index.html";
//alert("Signed in as " + email);
            //closeCurrentTab();
}
function change(){
   
    document.getElementById("authon").innerHTML = email;   
    document.getElementById("authoff").innerHTML = " ";
    document.getElementById("authonmob").innerHTML = email;   
    document.getElementById("authoffmob").innerHTML = " ";
    closeForm();
    closeFormMob();
}
function change2(){
    document.getElementById("authon").innerHTML = "";   
    document.getElementById("authoff").innerHTML = "Sign In";
    document.getElementById("authonmob").innerHTML = "";   
    document.getElementById("authoffmob").innerHTML = "Sign In";

}



        // var uploader = document.getElementByID('uploader');
        // var fileButton = document.getElementByID('fileButton');

        // fileButton.addEventListener('change', function(e) {
        //     var file = e.target.files[0];
        // });
        //create a variable to hold our orders list from firebase
        // //this function is called when the submit button is clicked
        // function CampaignNew() {
        // var user = firebase.auth().currentUser;
        //     var firebaseCampaignNew = database.ref().child('campaign/'+ user.uid);
        //     //Grab order data from the form
        //     var campaign = {
        //         CampaignName: $('#CampaignName').val(), //another way you could write is $('#myForm [name="fullname"]').
        //         CashGoal: $('#CashGoal').val(),
        //         CampaignStartDate: $('#CampaignStartDate').val(), //another way you could write is $('#myForm [name="fullname"]').
        //         CampaignEndDate: $('#CampaignEndDate').val(),
        //         CampaignSummary: $('#CampaignSummary').val(),
        //         CampaignVideo: $('#CampaignVideo').val(),
        //         CampaignSummaryExtra: $('#CampaignSummaryExtra').val(),
        //         CampaignAim: $('#CampaignAim').val(),
        //         CampaignAuthName: $('#CampaignAuthName').val()
        //     };
            
        //     //'push' (aka add) your order to the existing list
        //     firebaseCampaign.push(campaign); //'orders' is the name of the 'collection' (aka database table)
        //     firebaseCampaignNew.set(campaign);
        //     alert("Successs");
        // };
        // firebaseCampaign.on('value',function(campaigns){
            
        //     //create an empty string that will hold our new HTML
        //     var name, goal, start, goal, start, end, summary, summary2, vid, aim, auth; 
        //     //, CampaignStartDate, CampaignEndDate, CampaignSummary, CampaignVideo, CampaignSummaryExtra, CampaignAim, CampaignAuthName;
        //     //this is saying foreach order do the following function...
        //     campaigns.forEach(function(firebaseOrderReference){
                
        //         //this gets the actual data (JSON) for the order.
        //         var cam = firebaseOrderReference.val();
        //         console.log(cam); //check your console to see it!
                
        //         //create html for the individual order
        //         //note: this is hard to make look pretty! Be sure to keep your indents nice :-)
        //         //IMPORTANT: we use ` here instead of ' (notice the difference?) That allows us to use enters
        //         name = `Campaign Name: `+cam.CampaignName+``
        //         goal = `Cash Goal: `+cam.CashGoal+``
        //         start = `Start : `+cam.CampaignStartDate+``
        //         end = `End : `+cam.CampaignEndDate+``
        //         summary = `summary : `+cam.CampaignSummary+``
        //         vid = `Video : `+cam.CampaignVideo+``
        //         summary2 = `summary : `+cam.CampaignSummaryExtra+``
        //         aim = `Aim : `+cam.CampaignAim+``
        //         auth = `Auth : `+cam.CampaignAuthName+``

        //         //add the individual order html to the end of the allOrdersHtml list
        //         //allOrdersHtml = allOrdersHtml + individialOrderHtml;
        //     });
            
        //     //actaull put the html on the page inside the element with the id PreviousOrders
        //     $('#CampaignName').html(name);
        //     $('#CashGoal').html(goal);
        //     $('#Start').html(start);
        //     $('#End').html(end);
        //     $('#Summary').html(summary);
        //     $('#Vid').html(vid);
        //     $('#Summary2').html(summary2);
        //     $('#Aim').html(aim);
        //     $('#Auth').html(auth);
        //     //note: an alternative approach would be to create a hidden html element for one order on the page, duplicate it in the forEach loop, unhide it, and replace the information, and add it back. 
        // });

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function myFunction1() {
  var x = document.getElementById("myDIV");
  x.style.display = "none";
}
function myFunction2() {
  var x = document.getElementById("myDIVMob");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function myFunction3() {
  var x = document.getElementById("myDIVMob");
  x.style.display = "none";
}

