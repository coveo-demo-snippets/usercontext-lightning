({
    onInterfaceContentLoaded: function(component, event, helper) {
        var userTitle;
     
        var action = component.get('c.getUserTitle');
        
        action.setCallback(this, function(response){
                if(response.getState() == 'SUCCESS') {
                    userTitle = response.getReturnValue();
                }
            })
            $A.enqueueAction(action);
        
  	 	Coveo.$('.CoveoSearchInterface').on('buildingQuery', function(e, args) {
           
            	//add pizza to query
                //args.queryBuilder.expression.add('pizza');
            
            	//add user context to query
         		args.queryBuilder.context = {};
            	console.log(userTitle);
                args.queryBuilder.context.userTitle = userTitle;              
        });
    },
    generateSearchToken: function(component, event, helper) {
            var deferred = event.getParam('deferred');        
            var action = component.get('c.getToken');
        	console.log('hello');
     
            action.setCallback(this, function(response){
                if(response.getState() == 'SUCCESS') {
                    component.set("v.usertitle", response.getReturnValue()[1]);
                    deferred.resolve({searchToken: response.getReturnValue()[0]});
                }
            })
            $A.enqueueAction(action);
        }
})
