// http://backbonejs.org/#Router
var AppRouter = Backbone.Router.extend({

  // Were alerting the appView if any Of these routes changes.
  // That way all our code is encapsulated in the appView.
  initialize:function(){
    this.on('clickedButton',this.changeURL,this);
  },

  routes: {
    '': 'landing',
    ':cohort': 'cohortData',
  },
  changeURL:function(cNumber){
    if(cNumber === 'Home'){
      this.navigate('',{trigger:true});
    } else {
      this.navigate(cNumber, {trigger:true});
    }
  }

});
