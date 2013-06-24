##Fluid Grid

The grid module is a fully responsive grid.  Each column width is set as a percentage, so if you container grows or shrinks, so will your columns.

####Example

<iframe class="embed" src="examples/fluid-grid.html"></iframe>

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

