const meinDiv = document.querySelector('.meinDiv');
const meinButton = document.querySelector('#AddText');

const testClassName = document.getElementsByClassName('JsStichpunkt');
const testQuerySelector = document.querySelector('.JsStichpunkt');
const testQuerySelectorAll = document.querySelectorAll('.JsStichpunkt');
// innerListElementsToDiv();
meinButton.onclick = innerListElementsToDiv;

function innerListElementsToDiv() {
    meinDiv.innerHTML = `
    <ul>
        <li class="JsStichpunkt">Stichpunkt 1</li>
        <li class="JsStichpunkt">Stichpunkt 2</li>
    </ul>`;
}


// testQuerySelector.style.color = "red";


for (let i of testClassName) {
    i.style.color = "red";
}

// testQuerySelector.style.color = "blue";

// for schleife
for (let i of testQuerySelectorAll) {
    i.style.color = "green";

    i.classList.add("halloooooooo");

}

console.log(testClassName);
console.log(testQuerySelector);
console.log(testQuerySelectorAll);

// Objekte
const meinObjekt = {
    Name: "Julian",
    "Nachname": "Fleischmann",
    "Alter": 24,
    get fullName() {
        return meinObjekt.Name + meinObjekt.Nachname;
        // return this.Name + this.Nachname; // Alternative schreibweise
    }
}

console.log(meinObjekt);

// Anonyme funktioinen und Arrow-Funktionen
const summe = function (a, b) {
    return a + b;
}
summe(1,2);

function addAndMultiply(a,b) {
    const myAnonFunc = (x,y) => x+y;
    const res = myAnonFunc(a,b);
    return res * res;
}

// Arrays
const myArray = ["eins", "zwei", "drei"];
console.log(myArray);

// Asynchroner Code
// doTimeoutHandler();
// function doTimeoutHandler() {
//     setTimeout(() => console.log("ASYNC"), 2000);
//     console.log("should display before ASYNC");
//     console.log("even though code comes after it");
// }

// Resolve order Reject
// let myFirstPromise = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve("Succccccccccccess!"); // Yay! Everything went well!
//     }, 250);
// });
// let mySecondPromise = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         reject("Errrrrror!"); // Error!
//     }, 1000);
// });

// myFirstPromise.then((res) => console.log(res));
// Selbe funktion nicht als arrow-function
// myFirstPromise.then(
//     function (res) {
//         console.log(res);
//     }
// );

// mySecondPromise.then((res)=>console.log(res)).catch((res)=>console.log(res));

const getClassFetchTest = document.querySelector('.fetchTest');

function loadContent () {
    return fetch('./test-json.json') // holt die Daten aus der Datei
    .then(res => res.json()) // pared die Daten in eine JSON
    // .then(data => console.log(data));
}

// loadContent();

function innerFetchedText () {
    // loadContent().then(contents => {
    //     for (let content of contents) {
    //         console.log(content.title);
    //     }
    // });

    loadContent().then(writeOut => {
        for (let myText of writeOut) {
            const newElement = document.createElement('p');
            newElement.innerHTML = 
            `
                <p>${myText.title}</p>
            `;

            getClassFetchTest.appendChild(newElement);

        }
    })
}

innerFetchedText();

// Eigene Elemente erstellen
class MyCustomElement extends HTMLElement {
    constructor() { // Was ist ein Constructor?
        super(); // Extendet das HTMLElement Class
        this.innerHTML = `
        <h3>
            Mein erstes eigenes <strong>Custom-Element</strong>
        </h3>
        <p>Und hier steht noch Text</p>
        `;
    }
}
customElements.define("my-custom-element", MyCustomElement);

// Element mit Attribute-Aufruf
class MyCustomAttribute extends HTMLElement {
    constructor() { // Was ist ein Constructor?
        super(); // Extendet das HTMLElement Class
        this.innerHTML = `
        <h3>
            Mein erstes eigenes <strong>Custom-Element mit Attribut-Aufruf</strong>
        </h3>
        <p>Das Attribut wurde erstellt von ${this.getAttribute('name')}</p>
        `;
    }
}
customElements.define("my-custom-attribute", MyCustomAttribute);

// Element mit Template
const myCustomTemplate = document.createElement('template');
myCustomTemplate.innerHTML = `
<div class="my-custom-template">
    <h3></h3>
    <p></p>
</div>
`;
class MyCustomTemplate extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(myCustomTemplate.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('headline');
        this.shadowRoot.querySelector('p').innerText = this.getAttribute('content');
        // this.innerHTML = ``;
    }
}
customElements.define("my-custom-template", MyCustomTemplate);

// Slot Element
class MyCustomSlotElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <h2>Hier Steht was</h2>
            <span><slot name="headline"></slot></span>
            <span><slot name="content"></slot></span>
        `;
    }
}
customElements.define("my-custom-slot", MyCustomSlotElement);