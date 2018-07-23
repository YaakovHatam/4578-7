const q1 = new Question('מידת הרעש נמדדת ב', [
    {
        aText: 'מיקרו קול',
        isTrue: false
    },
    {
        aText: 'דציבלים',
        isTrue: true
    },
    {
        aText: 'סיסמוגרף',
        isTrue: false
    },
    {
        aText: 'גלי קול',
        isTrue: false
    },
]);

const q2 = new Question('הנחל המזוהם ביותר בארץ הוא', [
    {
        aText: 'נחל אלכסנדר',
        isTrue: false
    },
    {
        aText: 'נחל הירקון',
        isTrue: false
    },
    {
        aText: 'נחל הקישון',
        isTrue: true
    },
    {
        aText: 'נחל תנינים',
        isTrue: false
    },
]);
/*

 זיהום אוויר נוצר מ...
1.	1.      קרינה רדיואקטבית.
2.	2.      רסס- ים.
3.  	3.      שרפת דלק.
4.	4.      חלקיקים באוויר.

אמנת ברצלונה נחתמה בשנת:
1.	1.      1990.
2.	2.      1971.
3.	3.      1960.
4.  	4.      1988.
 
*/
const questions = [q1, q2];

function Question(qText, answers) {
    this.qText = qText;
    this.answers = answers;
}

let sec = 3;
let questionIndex = 0;
const intervalIndex = setInterval(function () {
    const question = questions[questionIndex];

    if (sec === 0) {
        const answer = document.querySelector('input[type="radio"]:checked');
        const answerValue = Number(answer.value)-1;
        alert(question.answers[answerValue].isTrue);
        clearInterval(intervalIndex);
    }
    else if (sec ==3 ) {
        document.getElementById('qText').innerText = question.qText;
        document.getElementById('a1').innerHTML = "<input type='radio' name='a' value='1'> " + question.answers[0].aText;
        document.getElementById('a2').innerHTML = "<input type='radio' name='a' value='2'> " + question.answers[1].aText;
        document.getElementById('a3').innerHTML = "<input type='radio' name='a' value='3'> " + question.answers[2].aText;
        document.getElementById('a4').innerHTML = "<input type='radio' name='a' value='4'> " + question.answers[3].aText;
    }
    // Set the page timer
    sec--;
    document.getElementById('timer').innerText = sec;


}, 1 * 1000)