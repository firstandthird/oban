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

