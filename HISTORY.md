
0.21.0 / 2015-02-02
==================

  * added oban-image-fit mixin

0.20.0 / 2015-01-30 
==================

  * Made modal a bit more responsive.

0.19.0 / 2015-01-11 
==================

  * added oban-respond-to helpers

0.18.0 / 2014-06-18 
==================

  * Added border support to arrows.

0.17.0 / 2014-05-27 
==================

  * added google-fonts mixin

0.16.0 / 2014-05-20 
==================

  * responsive: renamed from mobile, smarter vars

0.15.1 / 2014-05-08 
==================

  * buttons: reset with no underline

0.15.0 / 2014-05-04 
==================

  * feat(buttons): use less contrast and darken functions for buttons
  * updated grunt deps

0.14.0 / 2014-04-18 
==================

  * feature(base): added oban-base() mixing for opinionated classes

0.13.0 / 2014-02-18 
==================

  * feature(mobile): added oban-mobile mixin
  * refactor(grid): moved example css into sample.less
  * refactor(colors): changed bl prefix with oban

0.12.1 / 2014-01-07 
==================

  * feat(form): added child selectors

0.12.0 / 2014-01-06 
==================

  * refactor(form): changed legend to p tag

0.11.0 / 2013-12-31 
===================

  * chore(grunt): only watch html and css files
  * refactor(form): updated the markup for forms
  * feat(form): added support for password, email and url input fields
  * added clearfix to defaults
  * added border-box to defaults

0.10.1 / 2013-12-18 
==================

  * added ignore to bower.json

0.10.0 / 2013-12-13 
==================

  * initial work on form mixin.  #7
  * tweaked watch grunt task
  * updated build scripts to use load-grunt-config.  fixes #10

0.9.2 / 2013-09-08 
==================

  * [grid] added support for naming the fixed columns to allow for fixed on both sides

0.9.1 / 2013-07-18 
==================

  * Merge pull request #2 from apermanentwreck/feature/arrows-location
  * [arrows] - updated arrows mixin to pass in location

0.9.0 / 2013-07-18 
==================

  * [grid] changed to oban-grid-border and oban-grid-fluid
  * Merge pull request #1 from apermanentwreck/feature/border-grid-mixin
  * MINOR - converted to 1 mixin; changed to ie8 support psuedo-element syntax
  * MINOR - removed the border bottom
  * MINOR - added the border grid mixin for left side border
  * Update package.json
  * updated docs

0.8.0 / 2013-06-23 
==================

  * updated docs
  * updated fluid-grid example
  * updated examples css
  * added .oban-defaults for set classes
  * renamed .oban-grid to .oban-fluid-grid
  * added install and usage docs
  * added more docs
  * moved size into helpers
  * updated namespace on spacing
  * changed docs to use css styling
  * initial work on docs
  * removed mixins dir

0.7.0 / 2013-06-17 
==================

  * [refactor] changed .bl prefix to .oban
  * [refactor] renamed baseline to oban
  * [grunt] updated to latest grunt and less

0.6.2 / 2013-05-19 
==================

  * [lib/bar] added option for font-size
  * [lib/bar] added box-shadow to bar
  * [examples] added colors example
  * [lib] add colors less for warning, error and success

0.6.1 / 2013-05-09 
==================

  * [lib/typography] fixed font-family

0.6.0 / 2013-05-09 
==================

  * [examples/button] added class to reset button
  * [example/modal] updated
  * [lib/modal] added button.close style and tweaked padding
  * [example] updated typography example
  * [lib] updated typography to be closer to what bootstrap does
  * [example] added tabs example
  * [lib] added bl-tabs
  * [bower] renamed component.json to bower.json
  * [example] fixed title on arrows example
  * [example] added bar example
  * [lib] added bl-bar

0.5.2 / 2013-03-08 
==================

  * [grunt] hostname="*"
  * [modal] fixed opacity for ie8

0.5.1 / 2013-03-04 
==================

  * [examples/grid] added right side fixed column example
  * [grid] added .bl-grid-fixed-right for a right side fixed column

0.5.0 / 2013-03-01 
==================

  * [maint] moved info to component.json
  * [spacing] namespaced variables
  * [examples] added spacing example
  * [lib] added spacing.less to provide helper mixins/classes for margin
  * [examples] updated sample.less to include a .bl-size example
  * [lib] .bl-size now will take 1 or 2 args
  * [examples] added reset example
  * [lib] added .bl-reset() and .bl-reset-html5()

0.4.4 / 2013-02-13 
==================

  * [grid] add option to change the grid prefix

0.4.3 / 2013-01-16 
==================

  * [mixin/vendor] added bl-transition
  * [lists] changed list-inline to float with clearfix
  * [arrows] renamed up/down to top/bottom

0.4.2 / 2013-01-15 
==================

  * [helpers] removed !important from hide

0.4.1 / 2013-01-15 
==================

  * [messages] fixed bl-messages to be a mixing and not auto include

0.4.0 / 2013-01-15 
==================

  * [arrows] added bl-arrow-[dir]
  * [mixins/utils] added bl-size and bl-vcenter mixins
  * [helpers] added !important to hide
  * [lib] bl-messages helper

0.3.2 / 2013-01-04 
==================

  * [grid] fixed bug in fixed grid

0.3.1 / 2013-01-03 
==================

  * [examples] updated grid example
  * [grid] fixed equal columns

0.3.0 / 2012-12-18 
==================

  * example[grid] option to go between fluid and fixed width
  * example[grid] added fixed column example
  * feature[grid] added support for a fixed column
  * feature[grid] added bl-grid-debug to draw outlines around all grids
  * fix[grid] fixed padding when using offset, more accurate gutter size, updated example

0.2.0 / 2012-12-17 
==================

  * fix[sample] pointed to correct baseline include, added lists
  * feature[lists] added list helpers

0.1.0 / 2012-12-14 
==================

  * refactor[core] prefixed all mixins with .bl-

0.0.5 / 2012-12-14 
==================

  * built[example]
  * fix[grunt] watch for subfolder canges in lib
  * refactor[vendor] removed box-shadow and border-radius vendor helpers
  * added grunt-reloadr

0.0.4 / 2012-12-11 
==================

  * build[example] rebuilt
  * feature[core] build single file instead of includes
  * fix[grid] updated comment to use less comment instead of css
  * fix[modal] added () to bl-modal-backdrop

0.0.3 / 2012-12-11 
==================

  * [refactor] update grid to use bl-border-box helper
  * [feature] modal
  * [grid] added docs inline

0.0.2 / 2012-12-11 
==================

  * [bower] updated main

0.0.1 / 2012-12-11 
==================

  * [grunt] removed unneeded code
  * tweaks to examples
  * [grid] update to use box-sizing mixin
  * buttons, gradient mixins, vendor mixins, renamed utils to helpers
  * [grid] offset
  * removed recss
  * removed dist, moved sample into examples
  * gitignore
  * built default css
  * initial work on buttons
  * added component.json for bower
  * initial commit.  grid, normalize, typography, utils
