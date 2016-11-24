var nunjucks = require('nunjucks');
var nunjucksEnv = new nunjucks.Environment(new nunjucks.FileSystemLoader(__dirname ));

exports.addRoutes = function(app) {
  app.get('/styleguide', function (req, res) {
    var tmpl = nunjucksEnv.getTemplate("templates/styleguide.html.nunjucks");
    res.send(tmpl.render({asset_path: '/public/'}))
  });
};
