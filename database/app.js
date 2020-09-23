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
    var zero=0;

        //initialize your firebase
        firebase.initializeApp(config);
        const auth = firebase.auth();
        const database = firebase.database();

        function ProfileEdit() {
            //Grab order data from the form
            var user = firebase.auth().currentUser;
            var firebaseOrdersCollection = database.ref('Campaigns/'+user.uid);     
            var order = {
                ID: user.uid,
                Email: user.email,
                CampaignName: $('#CampaignName').val(), //another way you could write is $('#myForm [name="fullname"]').
                NGOName: $('#NGOName').val(),
                NGOStory: $('#NGOStory').val(),
                CampaignGoal: $('#CampaignGoal').val(), //another way you could write is $('#myForm [name="fullname"]').
                CampaignStartDate: $('#CampaignStartDate').val(),
                CampaignEndDate: $('#CampaignEndDate').val(),
                CampaignAim: $('#CampaignAim').val(),
                CampaignSummary: $('#CampaignSummary').val(),
                CampaignVideoURL: $('#CampaignVideoURL').val(),
                CampaignAuthName: $('#CampaignAuthName').val(),
                CampaignAuthPhone: $('#CampaignAuthPhone').val(),
                CampaignWeb: $('#CampaignWeb').val(),
                CampaignPlan: $('#CampaignPlan').val(),
                CampaignFund: $('#CampaignFund').val(),
                CampaignAddn: $('#CampaignAddnDetails').val(),
                CampaignIncome: zero    
            };
            
            //'push' (aka add) your order to the existing list
            firebaseOrdersCollection.set(order); //'orders' is the name of the 'collection' (aka database table)
            location.replace("./campaigns/done.html");
        };

        function Edit() {
            //Grab order data from the form
            var user = firebase.auth().currentUser;
            var firebaseOrdersCollection = database.ref('Campaigns/'+user.uid);     
            var order = {
                ID: user.uid,
                Email: user.email,
                CampaignName: $('#CampaignName').val(), //another way you could write is $('#myForm [name="fullname"]').
                NGOName: $('#NGOName').val(),
                NGOStory: $('#NGOStory').val(),
                CampaignGoal: $('#CampaignGoal').val(), //another way you could write is $('#myForm [name="fullname"]').
                CampaignStartDate: $('#CampaignStartDate').val(),
                CampaignEndDate: $('#CampaignEndDate').val(),
                CampaignAim: $('#CampaignAim').val(),
                CampaignSummary: $('#CampaignSummary').val(),
                CampaignVideoURL: $('#CampaignVideoURL').val(),
                CampaignAuthName: $('#CampaignAuthName').val(),
                CampaignAuthPhone: $('#CampaignAuthPhone').val(),
                CampaignWeb: $('#CampaignWeb').val(),
                CampaignPlan: $('#CampaignPlan').val(),
                CampaignFund: $('#CampaignFund').val(),
                CampaignAddn: $('#CampaignAddnDetails').val()                
            };
            
            //'push' (aka add) your order to the existing list
            firebaseOrdersCollection.set(order); //'orders' is the name of the 'collection' (aka database table)
            location.replace("https://helpingpanda.in/");
            alert("Done!! ");
            //location.replace("https://helpingpanda.in/");
        };

        function check(){
            auth.onAuthStateChanged(function(user){
    
            if(user){
              end();
            }
            else{
                alert("Please sign in, to access this page");
                location.replace("./index.html");
            }
        });

        }

    function validateForm() {
          var ca = document.forms["campaign"]["CampaignName"].value;
          var cb = document.forms["campaign"]["NGOName"].value;
          var cc = document.forms["campaign"]["CampaignGoal"].value;
          var cd = document.forms["campaign"]["CampaignStartDate"].value;
          var ce = document.forms["campaign"]["CampaignEndDate"].value;
          var cf = document.forms["campaign"]["CampaignAim"].value;
          var cg = document.forms["campaign"]["CampaignSummary"].value;                    
          var ch = document.forms["campaign"]["CampaignAuthName"].value;
          var ci = document.forms["campaign"]["CampaignFund"].value;
          var cj = document.forms["campaign"]["CampaignAuthPhone"].value;                                                  
          if (ca == "") {
            alert("Please fill in the required fields.");
            return false;
          }
          else
          if (cb == "") {
            alert("Please fill in the required fields.");
            return false;
          }
          else
          if (cc == "") {
            alert("Please fill in the required fields.");
            return false;
          }
          else
          if (cd == "") {
            alert("Please fill in the required fields.");
            return false;
          }
          else
          if (ce == "") {
            alert("Please fill in the required fields.");
            return false;
          }
          else
          if (cf == "") {
            alert("Please fill in the required fields.");
            return false;
          }
          else
          if (cg == "") {
            alert("Please fill in the required fields.");
            return false;
          }
          else
          if (ch == "") {
            alert("Please fill in the required fields.");
            return false;
          }
          else
          if (ci == "") {
            alert("Please fill in the required fields.");
            return false;
          }
          if (cj == "") {
            alert("Please fill in the required fields.");
            return false;
          }
          else
          {
            ProfileEdit();
            //location.replace("https://helpingpanda.in/");
          }
    }


        function end() {
        var user = firebase.auth().currentUser;
        var firebaseOrdersCollection = database.ref().child('Campaigns/');  
        //create a 'listener' which waits for changes to the values inside the firebaseOrdersCollection 
        firebaseOrdersCollection.on('value',function(orders){
            
            //create an empty string that will hold our new HTML
            var CName, NGO,NGOS, CGoal, CSDate, CEDate, CAim, CSummary, CVideo, CAuth, CAddn,CWeb,CPlan,CFund,CPhone;
            
            //this is saying foreach order do the following function...
            orders.forEach(function(firebaseOrderReference){
                //this gets the actual data (JSON) for the order.
                var order = firebaseOrderReference.val();
                console.log(order); //check your console to see it!
                 //create html for the individual order
                //note: this is hard to make look pretty! Be sure to keep your indents nice :-)
                //IMPORTANT: we use ` here instead of ' (notice the difference?) That allows us to use enters
                if(order.ID==user.uid){
                CName =   ``+order.CampaignName+``
                NGO =  ``+order.NGOName+``
                NGOS = ``+order.NGOStory+``
                CGoal =    ``+order.CampaignGoal+``
                CSDate =     ``+order.CampaignStartDate+``
                CEDate =     ``+order.CampaignEndDate+``
                CAim =     ``+order.CampaignAim+``
                CSummary =     ``+order.CampaignSummary+``
                CVideo =     ``+order.CampaignVideoURL+``
                CAuth =     ``+order.CampaignAuthName+``
                CPhone =     ``+order.CampaignAuthPhone+``
                CWeb = ``+order.CampaignWeb+``
                CAddn =     ``+order.CampaignAddn+``
                CPlan = ``+order.CampaignPlan+``
                CFund = ``+order.CampaignFund+``
                }
                //add the individual order html to the end of the allOrdersHtml list
                //allOrdersHtml = allOrdersHtml + individialOrderHtml;
            });
            if(CGoal>=0){
              alert("A campaign has been registered under your name.");
              location.replace("./campaigns/done.html");
            }          

            // document.getElementById('CampaignName').value = CName;
            // document.getElementById('NGOName').value = NGO; 
            // document.getElementById('CampaignGoal').value = CGoal; 
            // document.getElementById('CampaignStartDate').value = CSDate; 
            // document.getElementById('CampaignEndDate').value = CEDate; 
            // document.getElementById('CampaignAim').value = CAim; 
            // document.getElementById('CampaignSummary').value = CSummary; 
            // document.getElementById('CampaignVideoURL').value = CVideo; 
            // document.getElementById('CampaignAuthName').value = CAuth;   
            // document.getElementById('CampaignWeb').value = CWeb;
            // document.getElementById('CampaignAddnDetails').value = CAddn;
            // document.getElementById('CampaignPlan').value = CPlan;
            // document.getElementById('CampaignFund').value = CFund;          
            // document.getElementById('CampaignAuthPhone').value = CPhone;     
            //note: an alternative approach would be to create a hidden html element for one order on the page, duplicate it in the forEach loop, unhide it, and replace the information, and add it back. 
        });
    }
