({
    generateSearchToken: function(component, event, helper) {
            console.log('**** in generateSearchToken');
            var userRegion;
            var deferred = event.getParam('deferred');        
            var action = component.get('c.getToken');

            action.setCallback(this, function(response){                
                if(response.getState() == 'SUCCESS') {
                    userTitle = response.getReturnValue()[1];
                    component.set("v.usertitle", userTitle);                    
                    deferred.resolve({searchToken: response.getReturnValue()[0]});
                      // Set the Context to pass values to point-and-click Pipeline rules in Coveo Admin tool      
                    Coveo.$('.CoveoSearchInterface').on('buildingQuery', function(e, args) {            
                         args.queryBuilder.context = {};
                        console.log("**** setting Coveo args.queryBuilder.context to " + userTitle);
                        args.queryBuilder.context.userTitle = userTitle;              
                    });         
                                      
                } else {
                    console.log("Failed with state: " + state);
                    console.log("Return value: " + response.getReturnValue());                    
                };
            })
            
            $A.enqueueAction(action);        
        }    
})
