#Oban

Oban is a set up Less mixins to speed up your development process.  It is an opt-in framework.  Meaning if you don't call any of the mixins, it won't add anything to your css files.  Likewise, if you just wanted to use the Grid module, you could use `.oban-grid()` in your less file and it would just include that module into your css.  Oban also tries to make no assumptions on how you name your classes.  If you want to name your classes with camelCase or under_scores, that's fine by me.

##Installation

####Manual

[Download less file](https://raw.github.com/jgallen23/oban/master/oban.less)

####Bower

```
bower install oban
```

##Usage

Using Oban is very simple, just import it at the top of your less file.

```
@import "path/to/oban.less";
```

##Reset

Oban provides three mixins to handle resets for your site.  The first is [Eric Meyer's reset](http://meyerweb.com/eric/thoughts/2007/05/01/reset-reloaded/) and second is [normalize]() and the third is an html5 reset.

####Less Usage

```css
//eric meyer's
.oban-reset();

//normalize
.oban-normalize();

html5
.oban-reset-html5();
```

##Clearfix

Oban provides a mixin for a basic clearfix for auto clearing floated elements across browsers.

####Less Usage

```css
.clearfix {
	.oban-clearfix();
}
```


##Fluid Grid

The grid module is a fully responsive grid.  Each column width is set as a percentage, so if you container grows or shrinks, so will your columns.

####Example

<iframe class="embed" src="examples/fluid-grid.html" height="530"></iframe>

[View Full Example](examples/fluid-grid.html)

####Less Usage

```css
.grid {
	.oban-fluid-grid(@columnCount: 12, @gutterSize: 20px, @columnPrefix: column, @offsetPrefix: offset);
}

//defaults to 12 column, 20px gutter size and prefix of grid
.grid12 {
	.oban-fluid-grid();
}

//16 column with 40px gutter size
.grid16 {
	.oban-fluid-grid(16, 40px);
}

//16 column with 40px gutter size, set prefix to row: <div class="row12">
.grid16 {
	.oban-fluid-grid(16, 40px, "row");
}
```

####HTML Usage

```html
<div class="grid12">
	<div class="column2">Sidebar</div>
	<div class="column10">Content</div>
</div>
```

###Offsets

You can offset a column by using the offsetX class.

####HTML Usage

```html
<div class="grid12">
	<div class="offset1 column2">Sidebar</div>
	<div class="column9">Content</div>
</div>
```

###Fixed Grid Column

If you want a column to be set to a fixed size no matter the parent size.

####Less Usage

```css
.grid-left-fixed {
	.oban-grid-fixed-left([columnSize], [gutterSize]);
}
.grid-right-fixed {
	.oban-grid-fixed-right([columnSize], [gutterSize]);
}
```

####HTML Usage

```html
<div class="grid12 grid-left-fixed">
	<div class="column-fixed">Sidebar</div>
	<div class="column12">Content</div>
</div>
<div class="grid12 grid-right-fixed">
	<div class="column12">Content</div>
	<div class="column-fixed">Sidebar</div>
</div>
```
###Grid Debug

If you want so assistance in figuring out your grids, there is a debug mode that will draw red lines around your grid columns.

```css
.oban-grid-debug();
```


##Typography

The typography mixin gives you one simple mixin to set all of your body copy and headlines across the site.  You just pass in a body size and a line height and Oban will generate the sizes and line heights for h1-h6 as well as p tags.

####Example

<iframe class="embed" src="examples/typography.html"></iframe>

####Less Usage
```css
.oban-typography(@family: ~"'Helvetica Neue', Helvetica, Arial, sans-serif", @bodySize: 14px, @lineHeight: 20px);
```

[View Example](examples/typography.html)

##Spacing

Most sites end up with inconsistence spacing between copy, modules, etc.  Oban gives you 4 spacing helpers to make sure that your spacing stays consistent.

By default, the spacing sizes are small (10px), medium (20px), large (40px) and xlarge (60px), but these can be changed.

####Setting spacing

```
@oban-spacing-small: 10px;
@oban-spacing-medium: 20px;
@oban-spacing-large: 40px;
@oban-spacing-xlarge: 60px;
```

####Usage

```
.header {
	.oban-spacing-xlarge();
}

.module1 {
	.oban-spacing-medium();
}
```


##Buttons

The buttons module provides a quick way to make elegate flat and gradient buttons.

####Example

<iframe class="embed" src="examples/buttons.html" height="250"></iframe>

[View Full Example](examples/buttons.html)

####Less Usage

```css
.btn-flat {
	.oban-button-flat(@bgColor: #333, @textColor: #fff, @hoverBgColor: #336699, @hoverTextColor: #fff);
}

.btn-fancy {
	.oban-button-gradient(@bgColor: #fff, @textColor: #333, @hoverBgColor: #666, @hoverTextColor: #fff);
}
```

####HTML Usage

```html
<button class="btn-flat">Flat Button</button>
<button class="btn-fancy">Gradient Button</button>
<a class="btn-fancy">Fancy Button on an anchor tag</a>
```


##Lists

Oban gives you a few helpers to style your list elements

####Example

<iframe class="embed" src="examples/lists.html" height="475"></iframe>

[View Full Example](examples/lists.html)

####Less Usage

```css
.list-unstyled {
	.oban-list-unstyled();
}

.list-inline {
	.oban-list-inline();
}
```

####HTML Usage

```html
<ul class="list-inline">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>
<ul class="list-unstyled">
	<li>
		Item 1
		<ul>
			<li>SubItem 1</li>
			<li>SubItem 2</li>
			<li>SubItem 3</li>
		</ul>
	</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>
```


##Modal

The modal module provides all of the necessary styling to show a modal.  It doesn't provide any of the logic to show or hide the modal, but that should be trivial.  If you don't feel like writing it, the [Fidel Modal]() lib should work for you.

####Example

[View Example](examples/modal.html)

####Less Usage

```css
.model {
	.oban-modal([width]);
}

.modal-backdrop {
	.oban-modal-backdrop();
}
```

####HTML Usage

```html
<div class="modal">
	<button class="close">&times;</button>
	<h1>Heading 1</h1>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo ligula, tincidunt vel congue nec, tristique vel nisl. Nullam laoreet elementum justo sed tempor. In volutpat mollis lectus non ultrices. Sed pharetra odio eget ipsum dapibus in rutrum odio facilisis. Curabitur in diam sit amet elit rutrum auctor ut sed mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris nec erat gravida leo vestibulum pharetra. Proin ut libero sed purus dictum bibendum sit amet quis ipsum. Nulla elementum sodales mauris a rutrum. Nulla porta porttitor nibh, a posuere est condimentum sit amet. Etiam viverra commodo justo ut porttitor. Nam id tristique odio.</p>
</div>
<div class="modal-backdrop"></div>
```


##Bar

The bar module gives you a quick way to make a nice gradient bar for your header or navigation.  You just pass in the background and foreground color and out comes a nice gradient bar.

####Example

<iframe class="embed" src="examples/bar.html" height="75"></iframe>

[View Full Example](examples/bar.html)

####Less Usage

```css
.bar {
	.oban-bar(@bg: #333, @fg: #fff, @height: 50px, @fontSize: 20px, @degree: 10);
}
```

####HTML Usage
```html
<div class="bar"><h1 class="title">App Title</h1></div>
```


##Gradients

The gradient module gives you a simple way of adding gradients to backgrounds.  It handles all of the cross browser issues and gives you a nice fallback for older browsers.

####Less Usage

```css
.module1 {
	.oban-gradient(@startColor: #555, @endColor: #333);
}

.module2 {
	.oban-gradient-three-color(@startColor: #00b3ee, @midColor: #7a43b6, @colorStop: 50%, @endColor: #c3325f);
}
```

##Tabs

A mixin to build out basic tabs.

####Example

<iframe class="embed" src="examples/tabs.html" height="100"></iframe>

####Less Usage

```
.oban-tabs(@bg: #f5f5f5, @borderColor: #e5e5e5, @activeBg: #fff, @borderRadius: 5px);
```

####HTML Usage

```html
<ul class="tabs">
	<li class="active"><a href="#">Tab 1</a></li>
	<li><a href="#">Tab 2</a></li>
	<li><a href="#">Tab 3</a></li>
	<li><a href="#">Tab 4</a></li>
	<li><a href="#">Tab 5</a></li>
</ul>
```

##Arrows

The arrow mixins allow you do add ticks to any side of a block level element.  They are great for Tooltips.

####Example

<iframe class="embed" src="examples/arrows.html"></iframe>

[View Full Example](examples/arrows.html)

####Less Usage

```css
.arrow-top {
	//.oban-arrow-top(@color, @size: 10px);
	.oban-arrow-top(red);
}
.arrow-right {
	.oban-arrow-right(@color, @size: 10px);
}
.arrow-left {
	.oban-arrow-bottom(@color, @size: 10px);
}
.arrow-right {
	.oban-arrow-left(@color, @size: 10px);
}
```

####HTML Usage

```html
<div class="arrow-top">This has an up arrow</div>
<div class="arrow-right">This has a right arrow</div>
<div class="arrow-bottom">This has a down arrow</div>
<div class="arrow-left">This has a left arrow</div>
```
