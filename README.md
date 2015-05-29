# mylife.js

An animated timeline for showing off the best of your work.

Fully resposnive.

Animation is optional.

simple syntax
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
or with options if you want a more customised feel:
```
<script>
	createmylife({
		lineheight : 400,
		branchrad : 20,
		branchwidth : 5,
		branchtype : "arrow",
		branchfill : "#fff",
		treecolor : "#fff",
		treewidth : 5,
		animation : true
	});
</script>
```