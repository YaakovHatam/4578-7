// https://regexr.com/

/* 3 functions:
    r: the regular expression
    str: the string
    test(): r.test(str)
    match(): str.match(r)
    exec():
*/

// https://stackoverflow.com/questions/9214754/what-is-the-difference-between-regexp-s-exec-function-and-string-s-match-fun

var str = `054-696234
asdasda asd ada sd asd asd ax  lkfgkll3563j09u03gu3 02-4353454
054-696234
asdasda asd ada sd asd asd ax  lkfgkll3563j09u03gu3 02-4353454
054-696234
asdasda asd ada sd asd asd ax  lkfgkll3563j09u03gu3 02-4353454
054-2342342
asdasda asd ada sd asd asd ax  lkfgkll3563j09u03gu3 02-4353454
054-5675675
asdasda asd ada sd asd asd ax  lkfgkll3563j09u03gu3 02-4353454
054-9090989
asdasda asd ada sd asd asd ax  lkfgkll3563j09u03gu3 02-4353454
054-696234
asdasda asd ada sd asd asd ax  lkfgkll3563j09u03gu3 02-4353454
`;


// long way:
// var r = new RegExp('[0-9]*-[0-9]*', 'mg');

// short way:
var r = /0[2-57-9]{1}[\d]{0,1}-[\d]{7}/mg;

/*
Symbols
    {number} - Match exact 
    . — (period) Matches any single character, except for line breaks.
    * — Matches the preceding expression 0 or more times.
    + — Matches the preceding expression 1 or more times.
    ? — Preceding expression is optional (Matches 0 or 1 times).
    ^ — Matches the beginning of the string.
    $ — Matches the end of the string.
Character groups
    \d — Matches any single digit character. is the same as [0-9]
    \w — Matches any word character (alphanumeric & underscore).  is the same as [A-Za-z0-9_]
    [XYZ] — Character Set: Matches any single character from the character within the brackets. You can also do a range such as [A-Z]
    [^A-Z] — Inside a character set, the ^ is used for negation. In this example, match anything that is NOT an uppercase letter.
Flags:
There are five optional flags. They can be used separately or together and are placed after the closing slash. Example: /[A-Z]/g I’ll only be introducing 2 here.
    g — Global search
    i — case insensitive search

*/

