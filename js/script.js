const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Q1

const cat = {
    complain: function() {
        console.log("Meow!")
    }
};

cat.complain();

// Q2

const heading = document.querySelector("h3");

console.log(heading.innerHTML)

heading.innerHTML = "Updated Heading";

// Q3

heading.style.fontSize = "2em";

// Q4 added class subheading on h3

// Q5

const paragraph = document.querySelectorAll("p");

console.log(paragraph);

for(let i = 0; i < paragraph.length; i++) {

    paragraph[i].style.color = "red";

}

// Q6

