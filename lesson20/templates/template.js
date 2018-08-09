const registerTemplate = `<form class="form-horizontal ">
            <div class="form-group">
                <label for="inputText3" class="col-sm-2   border-white">UserName</label>
                <div class="col-sm-4 ">
                    <input type="text" class="form-control   border-dark" id="inputText3" placeholder="UserName">
                </div>
                <div class="col-sm-1 border border-white"></div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2  border-white">Password</label>
                <div class="col-sm-4 ">
                    <input type="password" class="form-control  border-dark" id="inputPassword3" placeholder="Password">
                </div>
            </div>
            <div class="form-group">
                    <label for="inputPasswordAgain3" class="col-sm-2  border-white">Password again</label>
                    <div class="col-sm-4 ">
                        <input type="password" class="form-control  border-dark" id="inputPasswordAgain3" placeholder="Password">
                    </div>
                </div>
            <div class="form-group">
                <div class="col-sm-offset-3">
                    <button type="submit" class="btn btn-default">Register</button>
                </div>
            </div>
            </form>`;
const addEventTemplate = `<form class="form-horizontal ">
        <div class="form-group">
            <label for="inputText3" class="col-sm-2  border-white">Movie name</label>
            <div class="col-sm-4 ">
                <input name="MovieName" type="text" class="form-control   border-dark" id="inputTextName" placeholder="UserName">
            </div>
            <div class="col-sm-1 border border-white"></div>
        </div>
        <div class="form-group">
            <label for="inputPassword3" class="col-sm-2  border-white">Desc</label>
            <div class="col-sm-4 ">
                <textarea rows="6" type="text" class="form-control  border-dark" id="textareaInfo"></textarea>
            </div>
        </div>
        <div>
            <div class="form-group">
                <label class="col-sm-2 ">Editor rating</label>
                <form>
                    <label class="radio-inline space ma">
                        <input class="bor" type="radio" name="optradio" checked> 1
                    </label>
                    <label class="radio-inline space">
                        <input class="bor" type="radio" name="optradio"> 2
                    </label>
                    <label class="radio-inline space">
                        <input class="bor" type="radio" name="optradio"> 3
                    </label>
                    <label class="radio-inline space">
                        <input class="bor" type="radio" name="optradio"> 4
                    </label>
                    <label class="radio-inline space">
                        <input class="bor" type="radio" name="optradio"> 5
                    </label>
                </form>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-1 col-sm-10">
                <button  type="submit" id="send" class="btn btn-default">Add event</button>
            </div>
        </div>
        </form>`;

        const loginTemplate = `
        <form class="form-horizontal ">
            <div class="form-group">
                <label for="inputText3" class="col-sm-1   border-white">UserName</label>
                <div class="col-sm-4 ">
                    <input type="text" class="form-control   border-dark" id="inputText3" placeholder="UserName">
                </div>
                <div class="col-sm-1 border border-white"></div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-1  border-white">Password</label>
                <div class="col-sm-4 ">
                    <input type="password" class="form-control  border-dark" id="inputPassword3" placeholder="Password">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-1 col-sm-6">
                    <button type="submit" class="btn btn-default">Login</button>
                </div>
            </div>
        </form>
        </div>`;

        const eventTemplate = `<div class="col-md-5 border"><h3 class="h3"> משחק הצעצועים</h3> <div class="divS"><p class="p1"> קוויבק, 1955. נלי, בלשית מתחילה, וסיימון, מדען חוקר, נפגשים באופן לא צפוי ויוצאים למסע מאתגר בהרי ההימלאיה כדי להוכיח את קיומה של מפלצת השלג האגדית. יחד עם טנזינג, מדריך מקומי צעיר, ויסמין, ציפור פטפטנית, הגיבורים האמיצים מתמודדים פנים מול פנים עם סכנות והרפתקאות</p></div> <p class="p2">Rating &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<i class="fas fa-star"></i>&nbsp; &nbsp;<i class="far fa-star"></i>&nbsp; &nbsp;<i class="far fa-star"></i>&nbsp; &nbsp;<i class="far fa-star"></i>&nbsp; &nbsp;<i class="far fa-star"></i></p><p class="p2 pf">Going</p><p class="pp"> 5 goiing</p><p></p><button class="btn">I GO ! </button></div>`

var aElements = document.querySelectorAll('header>nav.main-menu>a');

for (let i = 0; i < aElements.length; i++) {
    aElements[i].addEventListener('click', function (e) {
        e.preventDefault();

        if (this.dataset.href === 'login') {
            login();
        } else if (this.dataset.href === 'events') {
            events();
        } else if (this.dataset.href === 'add') {
            add();
        } else if (this.dataset.href === 'register') {
            register();
        }
    })
}

var eventsArray = [];
eventsArray.push({
    name: 'event 1'
});
eventsArray.push({
    name: 'event 2'
});
eventsArray.push({
    name: 'event 3'
});
eventsArray.push({
    name: 'event 4'
});

function login() {
    document.getElementById('content').innerHTML = loginTemplate;
}

function events() {
    document.getElementById('content').innerHTML = '';
    for (let i=0; i < eventsArray.length; i++) {
        let temp = eventTemplate;
        temp = temp.replace("{{eventName}}", eventsArray[i].name);
        document.getElementById('content').innerHTML += temp;
    }
}
function add() {
    document.getElementById('content').innerHTML = addEventTemplate;
}

function register() {
    document.getElementById('content').innerHTML = registerTemplate;
}