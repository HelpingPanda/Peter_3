	var firebaseOrdersCollection = database.ref().child('Campaigns/');  
        //create a 'listener' which waits for changes to the values inside the firebaseOrdersCollection 
        firebaseOrdersCollection.on('value',function(orders){
            
            //create an empty string that will hold our new HTML
            var CName,CGoal,CAim,CAuth,CInc, order;
            
            //this is saying foreach order do the following function...
            orders.forEach(function(firebaseOrderReference){
                //this gets the actual data (JSON) for the order.
                order = firebaseOrderReference.val();
                //console.log(order); //check your console to see it!
                 //create html for the individual order
                //note: this is hard to make look pretty! Be sure to keep your indents nice :-)
                //IMPORTANT: we use ` here instead of ' (notice the difference?) That allows us to use enters
                if(order.ID=='mnUHlMrhhbVTi7Ky5T1Tosc8SED2'){
                CName =   ``+order.CampaignName+``
                CGoal =    ``+order.CampaignGoal+``
                CAim =     ``+order.CampaignAim+``
                CAuth =     ``+order.CampaignAuthName+``
                CAddn =     ``+order.CampaignAddn+``
                CInc = ``+order.CampaignIncome+``
                }
                //add the individual order html to the end of the allOrdersHtml list
                //allOrdersHtml = allOrdersHtml + individialOrderHtml;
            });
            $('#CampaignAim1').html(CAim);
            $('#CampaignGoal1').html(CGoal);
            $('#CampaignIncome1').html(CInc);
            $('#CampaignName1').html(CName);
            $('#CampaignAuth1').html(CAuth);
            var progress = (CInc*100)/CGoal
            document.getElementById('prog1').value = progress;

            // $('#CampaignSummaryM').html(CSummary);
            // $('#CampaignAimM').html(CAim);
            // $('#CampaignGoalM').html(CGoal);
            // $('#CampaignIncomeM').html(CInc);
            // $('#CampaignAddnM').html(CAddn);
            // $('#CampaignNameM').html(CName);
            // $('#CampaignEndDateM').html(CEDate);
            // $('#CampaignStartDateM').html(CSDate);
            // $('#CampaignAuthM').html(CAuth);            
            // document.getElementById('fileM').value = progress;
        });            