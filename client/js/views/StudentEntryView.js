var StudentEntryView = Backbone.View.extend({

  tagName: 'span',
  template: _.template("<img src='<%= image %>' /> "),
  
  initialize:function(){
    this.render();
  },

  render:function(){
    var name = this.model.get('name').split(' ').join('-');
    this.className = name;
    this.el.className = name;
    this.$el.append( this.template( this.model.attributes ) );
  }


});
