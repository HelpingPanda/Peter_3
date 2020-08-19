    var config = {
        apiKey: "AIzaSyCdKtyy9sBsJ9rgatNMv_g_oEFkrmhMXNQ",
        authDomain: "peter-1-9b137.firebaseapp.com",
        databaseURL: "https://peter-1-9b137.firebaseio.com",
        projectId: "peter-1-9b137",
        storageBucket: "peter-1-9b137.appspot.com",
        messagingSenderId: "595599457775",
        appId: "1:595599457775:web:9e1a6d5113c83541058a1a",
        measurementId: "G-K7T63613K4"
    };
    var email;

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
                CampaignAddn: $('#CampaignAddnDetails').val()                
            };
            
            //'push' (aka add) your order to the existing list
            firebaseOrdersCollection.set(order); //'orders' is the name of the 'collection' (aka database table)
            alert("Done!! Expect a verification mail from us very soon !!!");
            location.replace("https://helpingpanda.in/");
        };

        function check(){
            auth.onAuthStateChanged(function(user){
    
            if(user){
              
                end(); 
            }
            else{
                alert("Please sign in, to access this page");
                location.replace("https://helpingpanda.in/");
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
          var ci = document.forms["campaign"]["CampaignAuthPhone"].value;                                                  
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
          else
          {
            ProfileEdit();
            location.replace("https://helpingpanda.in/");
          }
    }


        function end() {
        var user = firebase.auth().currentUser;
        var firebaseOrdersCollection = database.ref().child('Campaigns/');  
        //create a 'listener' which waits for changes to the values inside the firebaseOrdersCollection 
        firebaseOrdersCollection.on('value',function(orders){
            
            //create an empty string that will hold our new HTML
            var CName, NGO, CGoal, CSDate, CEDate, CAim, CSummary, CVideo, CAuth, CAddn, CPhone;
            
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
                }
                //add the individual order html to the end of the allOrdersHtml list
                //allOrdersHtml = allOrdersHtml + individialOrderHtml;
            });
            
            //actaull put the html on the page inside the element with the id PreviousOrders
            $('#CName').html(CName);
            $('#NGO').html(NGO);
            $('#CGoal').html(CGoal);
            $('#CSDate').html(CSDate);
            $('#CEDate').html(CEDate);
            $('#CAim').html(CAim);
            $('#CSummary').html(CSummary);
            $('#CVideo').html(CVideo);
            $('#CAuth').html(CAuth);
            $('#CPhone').html(CPhone);
            $('#CWeb').html(CWeb);
            $('#CAddn').html(CAddn);
            $('#CPlan').html(CPlan);                 

            document.getElementById('CampaignName').value = CName;
            document.getElementById('NGOName').value = NGO; 
            document.getElementById('CampaignGoal').value = CGoal; 
            document.getElementById('CampaignStartDate').value = CSDate; 
            document.getElementById('CampaignEndDate').value = CEDate; 
            document.getElementById('CampaignAim').value = CAim; 
            document.getElementById('CampaignSummary').value = CSummary; 
            document.getElementById('CampaignVideoURL').value = CVideo; 
            document.getElementById('CampaignAuthName').value = CAuth;   
            document.getElementById('CampaignWeb').value = CWeb;
            document.getElementById('CampaignAddnDetails').value = CAddn;
            document.getElementById('CampaignPlan').value = CPlan;         
            document.getElementById('CampaignAuthPhone').value = CPhone;     
            //note: an alternative approach would be to create a hidden html element for one order on the page, duplicate it in the forEach loop, unhide it, and replace the information, and add it back. 
        });
    }
