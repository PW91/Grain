'use strict';

/**
 *	Config
 */

module.exports = {

	// Path to build and app folders

	dist: './dist/',
	src: './app/',

	// Path to temporary folder for css

	tmp: '.tmp',

	// Flag to add hash for assets files

	rev: false,

	// Style type [css, less, sass, stylus]. Selected when generating project

	csstype: 'sass',

	// Flag which adding support ECMAScript 6 syntax/lint

	es6syntax: false,

	// Path to project folders [folder name or false or '']

	folder: {
		fonts: '',
		icons: '',
		images: '',
		pictures: '',
		pug: false,
		styles: 'sass',
		scripts: 'scripts',
		vendors: 'bower_components'
	},

	// Browser prefixs for autoprefixer

	browsers: [
		'Firefox < 20',
		'Chrome < 20',
		'Opera < 12'
	],

	// Files and folders list just for copy

	copyfiles: [
		'favicon.ico'
	]

};