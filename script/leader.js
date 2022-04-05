// Deep Pomal
var $ = function (id) { return document.getElementById(id); };

let listData = [];

//using getItem method we access the value of the variable that we stored in the home page.
let b = localStorage.getItem("myValue");
//Then we push the user's score in an array of objects
listData.push({title:'You ',score:b})

makeList();

function makeList() {
    //We here push some static leaderboard data for user to compete against
    listData.push({title:'Deep',score:30})
    listData.push({title:'Saitama',score:17})
    listData.push({title:'Goku',score:15})
    listData.push({title:'Light',score:5})

    // using the sort method we sort the array in descending manner
    listData.sort((a, b) => {
        if (a.score > b.score) return -1
        return a.score < b.score ? 1 : 0
    })

    //We get listContainer div
    let listContainer = $('listContainer');
    // We make a new unordered list and other variables
    let listElement = document.createElement('ul');
    let numberOfListItems = listData.length;
    let listItem=null;
    let title='';
    let score=0;
    let i=0;

    //we add the listelement to div
    listContainer.appendChild(listElement);

    // This loop will go through each item of array
    for (i = 0; i < numberOfListItems; ++i) {
        // it will create a new item
        listItem = document.createElement('li')

        //This will create 2 <p>
        title = document.createElement('p')
        score = document.createElement('p')

        // This will populate the data in respective <p> 
        title.innerHTML = listData[i].title;
        score.innerHTML= listData[i].score;

        //Finally we will add the <p> to list item
        listItem.appendChild(title);
        listItem.appendChild(score);


        //Here we will add list item  to list element
        listElement.appendChild(listItem);
    }
}

