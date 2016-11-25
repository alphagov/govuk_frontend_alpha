var nunjucks = require('nunjucks');
var path = require('path');

const appViews = [
  path.join(__dirname, '/templates/'),
  path.join(__dirname, '/components/')
]

var nunjucksEnv = new nunjucks.Environment(new nunjucks.FileSystemLoader(appViews));

exports.addRoutes = function(app) {
  app.get('/styleguide', function (req, res) {
    var tmpl = nunjucksEnv.getTemplate("styleguide.html.nunjucks");
    res.send(tmpl.render({asset_path: '/public/'}))
  });
};
