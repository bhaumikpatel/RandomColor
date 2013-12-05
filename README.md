Random Color jQuery Plugin
=====================

Random color add any text in website. Lightweight jquery plugin uncompressed 3kb.
<img src="https://lh6.googleusercontent.com/-jcPg4psx5Yo/UqC9fNOn8GI/AAAAAAAACfk/TYtYOLsfsd8/w679-h98-no/randomColorJquery.gif" alt="Random color" title="Random color" style="max-width:100%;" />
----------
Demo
---------
- [jsFiddle](http://jsfiddle.net/lesson8/NgtcR/show/)

Basic Usage
---------

Include jQuery and randomColor into your document's `<head>` 
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="js/randomColor.js"></script> <!-- randomColor -->
```
Call the function as follows:
```
$('h2').randomColor({
    random: true,
    colors: ["#216FF1", "#D5412D", "#FFC407", "#009856"],
    css: {
        'color': '#86C9EF',
        fontStyle: 'oblique',
        'fontSize': '30px'
    },
    complete: function () { alert('Done!') }
});
```
#### <i class="icon-file"></i> Documentation
Available options
<table border="0" cellpadding="0" cellspacing="0" class="striped" style="width:100%">
<thead>
<tr class="alt first">
<th>
Name
</th>
<th>
Description
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
css
</td>
<td>
Customizable CSS write property.
</td>
</tr>
<tr class="alt">
<td>
colors
</td>
<td>
Custom colors collection array.<code>colors: ["#216FF1", "#D5412D", "#FFC407", "#009856"]</code>
<br>
<strong>Array; Default value: null</strong>
</td>
</tr>
<tr class="last">
<td>
random
</td>
<td>
If you can not color change randomly then put false.
<br>
<strong>Boolean; Default value: true</strong>
</td>
</tr>
</tbody></table>

Callbacks
<table border="0" cellpadding="0" cellspacing="0" class="striped" style="width:100%">
<thead>
<tr class="alt first">
<th>
Name
</th>
<th>
Description
</th>
</tr>
</head>
<tbody>
<tr class="last">
<td>
complete
</td>
<td>
Called after complete process.
</td>
</tr>
</tbody></table>

