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
                CAuth =     ``+order.NGOName+``
                CAddn =     ``+order.CampaignAddn+``
                CInc = ``+order.CampaignIncome+``
                //add the individual order html to the end of the allOrdersHtml list
                //allOrdersHtml = allOrdersHtml + individialOrderHtml;
                document.getElementById('CampaignAim1').innerHTML = CAim;
                document.getElementById('CampaignGoal1').innerHTML = CGoal;
                document.getElementById('CampaignIncome1').innerHTML = CInc;
                document.getElementById('CampaignName1').innerHTML = CName;
                document.getElementById('CampaignAuth1').innerHTML = CAuth;
                // $('#CampaignAim1').html(CAim);
                // $('#CampaignGoal1').html(CGoal);
                // $('#CampaignIncome1').html(CInc);
                // $('#CampaignName1').html(CName);
                // $('#CampaignAuth1').html(CAuth);
                var progress = (CInc*100)/CGoal;
                if(progress>0){
                document.getElementById('prog1').value = progress;
                    }
                }
                else
                if(order.ID=='Sb7QRB55GvXucB5q7DjITb2zteN2'){
                CName =   ``+order.CampaignName+``
                CGoal =    ``+order.CampaignGoal+``
                CAim =     ``+order.CampaignAim+``
                CAuth =     ``+order.NGOName+``
                CAddn =     ``+order.CampaignAddn+``
                CInc = ``+order.CampaignIncome+``

                //add the individual order html to the end of the allOrdersHtml list
                //allOrdersHtml = allOrdersHtml + individialOrderHtml;
                document.getElementById('CampaignAim3').innerHTML = CAim;
                document.getElementById('CampaignGoal3').innerHTML = CGoal;
                document.getElementById('CampaignIncome3').innerHTML = CInc;
                document.getElementById('CampaignName3').innerHTML = CName;
                document.getElementById('CampaignAuth3').innerHTML = CAuth;
                var progress = (CInc*100)/CGoal;
                if(progress>0){
                document.getElementById('prog3').value = progress;
                    }
                }

                else
                if(order.ID=='OikaE0fWx0SJclH5ta3bRDMrREN2'){
                CName =   ``+order.CampaignName+``
                CGoal =    ``+order.CampaignGoal+``
                CAim =     ``+order.CampaignAim+``
                CAuth =     ``+order.NGOName+``
                CAddn =     ``+order.CampaignAddn+``
                CInc = ``+order.CampaignIncome+``
                
                //add the individual order html to the end of the allOrdersHtml list
                //allOrdersHtml = allOrdersHtml + individialOrderHtml;
                document.getElementById('CampaignAim2').innerHTML = CAim;
                document.getElementById('CampaignGoal2').innerHTML = CGoal;
                document.getElementById('CampaignIncome2').innerHTML = CInc;
                document.getElementById('CampaignName2').innerHTML = CName;
                document.getElementById('CampaignAuth2').innerHTML = CAuth;
                var progress = (CInc*100)/CGoal;
                if(progress>0){
                document.getElementById('prog2').value = progress;
                    }
                }

                else
                if(order.ID=='IjZ49zsO3TRh8QYGuvqJDJQ8aiw1'){
                CName =   ``+order.CampaignName+``
                CGoal =    ``+order.CampaignGoal+``
                CAim =     ``+order.CampaignAim+``
                CAuth =     ``+order.NGOName+``
                CAddn =     ``+order.CampaignAddn+``
                CInc = ``+order.CampaignIncome+``
                
                //add the individual order html to the end of the allOrdersHtml list
                //allOrdersHtml = allOrdersHtml + individialOrderHtml;
                document.getElementById('CampaignAim4').innerHTML = CAim;
                document.getElementById('CampaignGoal4').innerHTML = CGoal;
                document.getElementById('CampaignIncome4').innerHTML = CInc;
                document.getElementById('CampaignName4').innerHTML = CName;
                document.getElementById('CampaignAuth4').innerHTML = CAuth;
                var progress = (CInc*100)/CGoal;
                if(progress>0){
                document.getElementById('prog4').value = progress;
                    }
                }
                else
                if(order.ID=='D47mWEE0AaV7ugwBVvkmhUBOoyg2'){
                CName =   ``+order.CampaignName+``
                CGoal =    ``+order.CampaignGoal+``
                CAim =     ``+order.CampaignAim+``
                CAuth =     ``+order.NGOName+``
                CAddn =     ``+order.CampaignAddn+``
                CInc = ``+order.CampaignIncome+``
                
                //add the individual order html to the end of the allOrdersHtml list
                //allOrdersHtml = allOrdersHtml + individialOrderHtml;
                document.getElementById('CampaignAim5').innerHTML = CAim;
                document.getElementById('CampaignGoal5').innerHTML = CGoal;
                document.getElementById('CampaignIncome5').innerHTML = CInc;
                document.getElementById('CampaignName5').innerHTML = CName;
                document.getElementById('CampaignAuth5').innerHTML = CAuth;
                var progress = (CInc*100)/CGoal;
                if(progress>0){
                document.getElementById('prog5').value = progress;
                    }
                }
            });
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