# Popular 
Using `document` objects:
- `addEventListener('click', function() {})`
- `getElementById`
- `querySelector` / `querySelectorAll`

## Dataset
using custom `data-` attribute in HTML, access from `dataset` in JS

for ex:

```html
    <div id='d1' class='name' data-item='cpu'>CPU: 2400MHZ</div>
```

and use in js:

```javascript
    docuement.getElementById('d1').dataset.item // cpu
```