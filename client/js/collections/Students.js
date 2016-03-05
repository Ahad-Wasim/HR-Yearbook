var Students = Backbone.Collection.extend({

  model: Student,
  
  initialize: function (options) {
    // In order for fetch to work we need to provide a url key on the collection.

    this.url = 'https://hr-yearbook.herokuapp.com/api/students?cohort=' + options.cohort;
    this.populateCohort();
  },
  populateCohort: function() {
    
    // Use .fetch to populate your Students collection from the API
    // The method incredibly useful (and flexible!) – you can even pass AJAX success/error/complete handlers to it!
    this.fetch({
      success:function(data){
        var cohortView = ( new StudentsView({collection:data}) ).render(); 
      },
      error:function(err){
        throw err
      }
    });



  }
});
