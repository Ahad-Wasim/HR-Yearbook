var HomeButton = Backbone.View.extend({
  tagName:'button',

  className:'home',

  template: _.template("<%= home %>"),

  render:function(){
    return this.$el.html(this.template({"home":"Home"}));
  }

});
