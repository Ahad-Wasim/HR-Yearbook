var AppView = Backbone.View.extend({



  el: '#app-container',

  initialize: function(options) {

    window.router = options.router;

    options.router.on('route:landing', function() {
      this.renderLanding();
    }.bind(this));

    options.router.on('route:cohortData',function(cohortNumber){
      this.renderCohort(cohortNumber);
    }.bind(this));

  },

  renderCohort: function(cohortNumber) {
    var cohort = new Students({cohort:cohortNumber});
    $('#Comment-Wall').append();
  },

  renderLanding: function() {
    $('#page-content-container').html(new LandingView().render());   
  }
})
