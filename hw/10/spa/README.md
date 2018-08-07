# SPA HTML, CSS & JS work

guidlines:
- Use bootstrap in this project (v3 or v4), you can download with npm local or use a cdn.
- use font awesome for icons,  you can download with npm or use a cdn.
- navigation between views should be replacing the content in the screen, you should only have one html file called `index.html`, js and css as you want.
- mockup attached

## Structure
build `header` with `nav ` and `footer` with your name

## Login and Register views
if a user enter with username `test` and password `1234` you should navigate him to events view

currently the register view is only html without any logic

## Events view
You should build a local JS array of objects that hold the events, use function constructor to build a new event and push him to the events array.

design the html template and then use a local variable to hold the html template

build the view using a loop, for every event object in the array of events mix it with the template and append to the view.

by clicking i go! button the going counter should be increased by 1.

## Add event view
this view insert to the array of events a new event.
