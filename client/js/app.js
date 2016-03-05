var approuter = new AppRouter();
var navBar = new NavBarView(approuter);

var app = new AppView({ router: approuter, navbar: navBar });


// http://backbonejs.org/#History
// Begins monitoring the url after a hashtag
Backbone.history.start()
