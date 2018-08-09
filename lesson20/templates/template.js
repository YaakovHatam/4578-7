var homeTemaplate = `
        <h2>Home page</h2>
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
        </div>
        `;

var aboutTemaplate = `
        <h2>About page</h2>
        <div class="row">
            {{personsName}}
        </div>
        `;

var contactTemaplate = `
        <h2>Contact page</h2>
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
        </div>
        `; 

var aElements = document.querySelectorAll('header>nav.main-menu>a');
for (let i = 0; i < aElements.length; i++) {
    aElements[i].addEventListener('click', function (e) {
        e.preventDefault();

        if (this.dataset.href === 'about') {
            const personsArray = ['p1', 'p2', 'p3'];
            let temp = aboutTemaplate;
            let temp2 ='';
            for(let i=0; i < personsArray.length; i++) {
                temp2 += `<div class="col-md-4">${personsArray[i]}</div>`;
            }
            temp = temp.replace('{{personsName}}', temp2);
            document.getElementById('content').innerHTML = temp;
        } else if (this.dataset.href === 'home')  {
            document.getElementById('content').innerHTML = homeTemaplate;
        }
    })
}