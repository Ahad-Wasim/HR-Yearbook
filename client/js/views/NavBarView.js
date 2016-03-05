var NavBarView = Backbone.View.extend({

  template: _.template("<button class='cohortNum'> <%= cohortNumber %> </button>"),

  cohorts:[36, 37],

  el: '#navbar-container',

  events:{
    "click .cohortNum, .home":"monitorRoute"
  },

  monitorRoute:function(event){
    var cNumber = event.target.innerText;
    this.router.trigger('clickedButton',cNumber);
  },

  initialize: function(router) {
    this.router = router;
    this.render();
  },
  render: function() {
    var homeBar = (new HomeButton).render();

    var navLinks = this.cohorts.map(function(data){
      return this.template( {cohortNumber: data });
    }.bind(this));

    this.$el.append(homeBar,navLinks);
  }

});

