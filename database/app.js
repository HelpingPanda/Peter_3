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
                CampaignWeb: $('#CampaignWeb').val(),                
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

        function end() {
        var user = firebase.auth().currentUser;
        var firebaseOrdersCollection = database.ref().child('Campaigns/');  
        //create a 'listener' which waits for changes to the values inside the firebaseOrdersCollection 
        firebaseOrdersCollection.on('value',function(orders){
            
            //create an empty string that will hold our new HTML
            var CName, NGO, CGoal, CSDate, CEDate, CAim, CSummary, CVideo, CAuth;
            
            //this is saying foreach order do the following function...
            orders.forEach(function(firebaseOrderReference){
                
                //this gets the actual data (JSON) for the order.
                var order = firebaseOrderReference.val();
                console.log(order); //check your console to see it!

                 //create html for the individual order
                //note: this is hard to make look pretty! Be sure to keep your indents nice :-)
                //IMPORTANT: we use ` here instead of ' (notice the difference?) That allows us to use enters
                CName =   `Campaign Name: `+order.CampaignName+``
                NGO =  `NGO: `+order.NGOName+``
                CGoal =    `Goal: `+order.CampaignGoal+``
                CSDate =     `Start Date: `+order.CampaignStartDate+``
                CEDate =     `End Date: `+order.CampaignEndDate+``
                CAim =     `Aim: `+order.CampaignAim+``
                CSummary =     `Sumamry: `+order.CampaignSummary+``
                CVideo =     `URL: `+order.CampaignVideoURL+``
                CAuth =     `Signatory: `+order.CampaignAuthName+``
                CWeb = `<a>`+order.CampaignWeb+`</a>`
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
            $('#CWeb').html(CWeb);         
   
            //note: an alternative approach would be to create a hidden html element for one order on the page, duplicate it in the forEach loop, unhide it, and replace the information, and add it back. 
        });
    }
