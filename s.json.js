var S = require('s');

var json = {
  parse         : function( a ) { return JSON.parse(a); },
  stringify     : function( a ) { return JSON.stringify(a,null,2); },
  clone         : function( a ) { return JSON.parse( JSON.stringify( a ) ); },
};

exports = module.exports = json;
