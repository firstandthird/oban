#Oban

Oban is a set up Less mixins to speed up your development process.  It is an opt-in framework.  Meaning if you don't call any of the mixins, it won't add anything to your css files.  Likewise, if you just wanted to use the Grid module, you could use `.oban-grid()` in your less file and it would just include that module into your css.  Oban also tries to make no assumptions on how you name your classes.  If you want to name your classes with camelCase or under_scores, that's fine by me.

##Grid

The grid module is a fully responsive grid.  Each column width is set as a percentage, so if you container grows or shrinks, so will your columns.

####Less Usage

```css
//.oban-grid([columnCount], [gutterSize], [gridPrefix]);

//defaults to 12 column, 20px gutter size and prefix of grid
.oban-grid();

//16 column with 40px gutter size
.oban-grid(16, 40px);

//16 column with 40px gutter size, set prefix to row: <div class="row12">
.oban-grid(16, 40px, "row");
```

####HTML Usage

```html
<div class="grid12">
	<div class="column2">Sidebar</div>
	<div class="column10">Content</div>
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

[View Example]()

##Bar

The bar module gives you a quick way to make a nice gradient bar for your header or navigation.  You just pass in the background and foreground color and out comes a nice gradient bar.

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

[View Example]()

##Buttons

The buttons module provides a quick way to make elegate flat and gradient buttons.

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

[View Example]()

##Lists

Oban gives you a few helpers to style your list elements

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

[View Example]()

##Modal

The modal module provides all of the necessary styling to show a modal.  It doesn't provide any of the logic to show or hide the modal, but that should be trivial.  If you don't feel like writing it, the [Fidel Modal]() lib should work for you.

####Less Usage

```css
.model {
	.oban-modal([width]);
}

.modal-backdrop {
	.oban-modal-backdrop();
}
```

```html
<div class="modal">
	<button class="close">&times;</button>
	<h1>Heading 1</h1>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo ligula, tincidunt vel congue nec, tristique vel nisl. Nullam laoreet elementum justo sed tempor. In volutpat mollis lectus non ultrices. Sed pharetra odio eget ipsum dapibus in rutrum odio facilisis. Curabitur in diam sit amet elit rutrum auctor ut sed mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris nec erat gravida leo vestibulum pharetra. Proin ut libero sed purus dictum bibendum sit amet quis ipsum. Nulla elementum sodales mauris a rutrum. Nulla porta porttitor nibh, a posuere est condimentum sit amet. Etiam viverra commodo justo ut porttitor. Nam id tristique odio.</p>
</div>
<div class="modal-backdrop"></div>
```

[View Example]()

##Clearfix

Oban provides a mixin for a basic clearfix for auto clearing floated elements across browsers.

####Less Usage

```css
.clearfix {
	.oban-clearfix();
}
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

##Arrows

The arrow mixins allow you do add ticks to any side of a block level element.  They are great for Tooltips.

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

```html
<div class="arrow-top">This has an up arrow</div>
<div class="arrow-right">This has a right arrow</div>
<div class="arrow-bottom">This has a down arrow</div>
<div class="arrow-left">This has a left arrow</div>
```

[View Example]()
