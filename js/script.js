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

const resultsContainer = document.querySelector(".results");

console.log(resultsContainer.innerHTML)

resultsContainer.innerHTML = "<p>New Paragraph</p>";

resultsContainer.style.background = "yellow";

// Q7

function namesOfCats(list) {    

    for(let i= 0; i < list.length; i++) {
            console.log(list[i]);
        }
    
    }

    namesOfCats(cats);

// Q8 I couldnt identify the age to be Age Unknown

function createCats(cats) {

    let listcats = "";

    for(let i = 0; i < cats.length; i++) {
      //  console.log(cats[i]);

        listcats += `<h5>Name: ${cats[i].name}</h5>
                        <p>Age: ${cats[i].age}</p>`
        
           
             if (cats[i].age = undefined) {

            } 
                    
          else  {

            (cats[i].age === "Age Unknown")

          };

    };
    

    const finalHtml = "<ul>" + listcats + "</ul>";

    return finalHtml;

}

const newHtml = createCats(cats);

createCats(newHtml);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHtml;