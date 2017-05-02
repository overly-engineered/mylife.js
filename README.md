# mylife.js

An animated timeline for showing off the best of your work.

See the code pen demo <a target="_blank" href="http://codepen.io/overlyenginnered/full/doNNOw/">here</a> <br>

Fully responsive.

Animation is optional.

<small>Works best with some space above not as the first element if using animtion</small>

<h2>Small markup:</h2>

```
<div id="mylife">
	<ul>
		<li><span>1</span></li>
		<li><span>2</span></li>
		<li><span>3</span></li>
		<li><span>4</span></li>
		<li><span>5</span></li>
		<li><span>6</span></li>
	</ul>
</div>
```
add your text in the span.

add frosted glass effect by including before your span
<br>
```
<li><div class="frost"></div><span>1</span></li>
```
<h2>Activate</h2>
Add the function below either at the bottom of the page or in `$(document).ready(function({});`. Be sure to include jquery before this.
```
<script>
	createmylife();
</script>
```
<h2>Features:</h2>
A more customised feel with options:
```
<script>
	createmylife({
		lineheight : 400, // distance between branches default is 300
		branchrad : 30, // branchradius default is 20
		branchwidth : 5, // branch thickness default is 4
		branchtype : "dash", // branch type. currently "circle", "arrow", "date"(see below for extra markup) or "dash" default is "circle"
		branchfill : "none", // fill color for branches default is none
		treecolor : "#fff", // tree color default is #181818
		treewidth : 5, // tree width default is 4
		animation : true, // disable slide in animations default is true
		extratop : true, // adds an extra spacer at the top of the tree default is false
		extratopsize : 200, // sets the size for the extra spacer default is 200
		title : "mylife.js", // adds title to the top of the tree default is ""
		titlecolor: "#fff" // title color default is #fff
	});
</script>
```

For Date Branch use the "data-date" attr in your markup
```
<li data-date="05/05/1991"><div class="frost"></div><span>1</span></li>
```
CSS and SCSS files included use whatever takes your fancy.

Minified files to come.
