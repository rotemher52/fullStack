const numbers = [56, 89, 88, 77, 36, 20, 100, 96, 35, 48, 77, 80];
// ✕ //
function addToArray(ev) {
    // באובייקט של האוונט שקיבלנו - יש פרמטר שמביא לנו את האלמנט (target)
    const value = ev.target.value;

    // אנחנו מריצים את הקוד רק אם המשתמש לחץ על אנטר (Enter)
    // ורק אם יש ערך
    if (ev.keyCode === 13 && value) {
        numbers.push(+value);

        // איפסנו את האינפוט
        ev.target.value = "";
    }
}
// ✕ //

// ✓ //
function showArray() {
    document.getElementById("output1").innerHTML = numbers.join(", ");
}
// ✓ //

// ✕ ✓ //
function sum() {
    // מה זה אומר רס //
    let res = 0;

    for (let i = 0; i < numbers.length; i++) {
        // res + numbers = i ?? // 
        res += numbers[i];
    }
    document.getElementById("output2").innerHTML
    // למה זה שווה לרס?
= res;
}
// ✕ ✓ //

// ✓ //
function avg() {
    let res = 0;

    for (let i = 0; i < numbers.length; i++) {
        res += numbers[i];
    }

    document.getElementById("output3").innerHTML = Math.round(res / numbers.length);
}
// ✓ //

// ✕ //
function max() {
    // מה זה אומר המשנה עם מערך שיש בו //סוגריים
    let res = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        // איך בסוגריים יש איי ולא את //האפס כמו במשתנה שהגדרנו למעלה
        if (numbers[i] > res) {
            res = numbers[i];
        }
    }

    document.getElementById("output4").innerHTML = res;
}
// ✕ //

// ✕ //
// אותה בעיה כמו בפונקציה למעלה //
function min() {
    let res = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < res) {
            res = numbers[i];
        }
    }

    document.getElementById("output5").innerHTML = res;
}
// ✕ //

// ✓ //
function allFunctions() {
    showArray();
    sum();
    avg();
    max();
    min();
}
// ✓ //