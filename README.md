# mylife.js

An animated timeline for showing off the best of your work.

See the code pen demo <a target="_blank" href="http://codepen.io/overlyenginnered/full/doNNOw/">here</a><br>
<a href="#mylifefeatures">Click here for Features</a>

Fully responsive.

Animation is optional.

Small markup:

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

This:
```
<li><span>1</span></li>
```
becomes this
```
<li><div class="frost"></div><span>1</span></li>
```
Then add the script. Be sure to include jquery before this.
```
<script>
	createmylife();
</script>
```
<a id="mylifefeatures" class="anchor" href="#mylifefeatures" aria-hidden="true">Features:</a>
A more customised feel with options:
```
<script>
	createmylife({
		lineheight : 400, // distance between branches default is 300
		branchrad : 20, // branchradius default is 20
		branchwidth : 5, // branch thickness default is 4
		branchtype : "arrow", // branch type. currently "circle", "arrow" or "date"(see below for extra markup) default is "circle"
		branchfill : "#fff", // fill color for branches default is none
		treecolor : "#fff", // tree color default is #181818
		treewidth : 5, // tree width default is 4
		animation : true // disable slide in animations default is on
	});
</script>
```



For Date Branch use the "data-date" attr in your markup
This
```
<li><div class="frost"></div><span>1</span></li>
```
Becomes
```
<li data-date="05/05/1991"><div class="frost"></div><span>1</span></li>
```
CSS and SCSS files included use whatever takes your fancy.

Minified files to come.