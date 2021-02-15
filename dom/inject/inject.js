/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document.
 */
console.log("hello");

const inject = document.getElementById("inject");

const center = document.createElement("center");

// h1 and i
const h1 = document.createElement("h1");
const i = document.createElement("i");
i.innerText = "HTML Practice Exercise TEKcamp";
h1.appendChild(i);

const h2 = document.createElement("h2");
const a = document.createElement("a");
a.innerText = `TEKsystems "TEKcamp"`;
a.href = "";
h2.appendChild(a);

const p1 = document.createElement("p");
p1.innerHTML = "I love <i>HTML</i> for the following reasons:";

const ol = document.createElement("ol");
ol.type = "1";

const l1 = document.createElement("li");
l1.innerText = "I learned it Quickly";

const l2 = document.createElement("li");
l2.innerText = "I can make web pages using code";

const l3 = document.createElement("li");
l3.innerText = "It's fun";

const p2 = document.createElement("p");
p2.innerHTML = `My instructor’s email address is: <a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>.</p>`;

const h12 = document.createElement("h1");
h12.innerText = "Have a great day!";

ol.appendChild(l1);
ol.appendChild(l2);
ol.appendChild(l3);

center.appendChild(h1);
center.appendChild(h2);
center.appendChild(document.createElement("hr"));

inject.appendChild(center);
inject.appendChild(p1);
inject.appendChild(ol);
inject.appendChild(document.createElement("hr"));
inject.appendChild(p2);
inject.appendChild(h12);
inject.innerHTML += `  I really look forward to learning how to code!  Have a great day.  
-[Team "Git'er Done"]
`;
