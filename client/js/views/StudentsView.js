var StudentsView = Backbone.View.extend({

  el:'#page-content-container',

  render: function() {

    this.$el.html("");
    
    var students = this.collection.map(function(student){
        return (new StudentEntryView({ model:student })).$el;
    });


    this.$el.append(students)

  }

});
