const mainDiv = document.querySelector(".main");
const contactDiv = document.querySelector('.contactinfo');

var contactList = [
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    }, 
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    },
]

function cleanUpIndex() {

    if (mainDiv) {
        mainDiv.remove();
    }
}


function createSingleIndex(contact) {
    let n = document.createElement("a"),
    t = document.createElement("div");

    return (
        n.href="page3.html",
        t.classList.add("contact"), 
        t.innerHTML=contact.name,
        n.append(t),
        n
    );
}

function renderIndex(contacts) {
    
    for(let i = 0; i < contacts.length; i++ ) {
        mainDiv.insertAdjacentHTML (
            "beforeend", 
            `<a href="page3.html">
                <div class="contact">
                    <p>${contacts[i].name}</p>
                </div>
            </a>`
        );
    }
}

function cleanUpView() {

    if (contactDiv) {
        contactDiv.remove();
    }
}

function renderView(contact) {
    
    mainDiv.insertAdjacentHTML (
        'beforeend',
        `<div class="contactinfo">
            <div class="contactname">
            ${contact.name}
                <img src="./img/profile.jpg" class="profilepic" alt="Profile picture">
            </div>
            <div class="contactemail">email: ${contact.email}</div>
            <div class="contactphone">cell: ${contact.phone}</div>
            <div class="contactaddress">address: ${contact.address}</div>
            <div class="buttons">
                <button class="button edit" value="Edit">Edit</button>
                <button class="button close" value="Close">Close</button>
            </div>
        </div>`
    );
}

