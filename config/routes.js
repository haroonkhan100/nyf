/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  //JIM// '/': {
  //JIM//  view: 'homepage'
  //JIM//}
  
  'GET /register': {view: 'register'},
  'GET /dashboard': {view: 'dashboard'},

  'GET /admin/country/create': {view: 'countryCreate'},
  'POST /admin/country/create': 'CountryController.create',
  //'GET /admin/country/edit/:id': 'CountryController.editview',
  'GET /admin/country/list': 'CountryController.listview',
  'GET /admin/country/edit': {view: 'countryUpdate'},
    
  'GET /admin/usergroup/create': {view: 'userGroupCreate'},
  'POST /admin/usergroup/create': 'UserGroupController.create',
  //'GET /admin/usergroup/edit/:id': 'UserGroupController.editview',
  'GET /admin/usergroup/list': 'UserGroupController.listview',
  'GET /admin/usergroup/view': {view: 'userGroupView'},
  'GET /admin/usergroup/edit': {view: 'userGroupUpdate'},


  //'GET /admin/piece': {view: 'piece'},
  'GET /admin/piece/create': {view: 'pieceCreate'},
  'POST /admin/piece/create': 'PieceController.create',
  //'GET /admin/piece/edit/:id': 'PieceController.editview',
  'GET /admin/piece/list': 'PieceController.listview',
  'GET /admin/piece/view': {view: 'pieceView'},
  'GET /admin/piece/edit': {view: 'pieceUpdate'},
  'GET /admin/console': {view: 'console'}


  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/
  
  

};
