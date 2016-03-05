var Student = Backbone.Model.extend({
  
  // Setting the default values for data that will be coming from the yearbook API.
  
  defaults: {
    id: 0,
    name: '',
    cohort: 0,
    image: '',
    first: '',
    last: '',
    nickname: ''
  },

});
