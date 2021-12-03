const mainDiv = document.querySelector(".main"); // Queries any page's main div

// Lab 11 #1

let contactList = [
    {
      name: "Mr Ditkovich",
      phone: "778-555-1234",
      address: "101 Main St, New York City, USA",
      email: "ditkovich@rent.example.com",
    },
    {
      name: "Mr Aziz",
      phone: "123-867-5309",
      address: "Joe's 29 Minute Guarantee Pizza",
      email: "aziz@pizza.gOoOoOo.com",
    },
    {
      name: "Bonesaw",
      phone: "100-100-3000",
      address: "$3000 For 3 Minutes in the Ring Stadium",
      email: "bonesaw@isready.example.com",
    }
]

function removeAllChildren() { // Clear main div
    while (mainDiv.lastChild) {
        mainDiv.lastChild.remove();
    }
}

function createSingleIndex(contact) { // Creates single card for the index page

    let n = document.createElement("a");
    let p = document.createElement("p");
    t = document.createElement("div");

    n.href="page3.html";
    t.classList.add("contact");
    t.append(p);
    p.innerHTML=contact.name;
    n.append(t);

    // Lab 11 #4 (View)

    n.addEventListener("click", (e) => { // Creates the view for the appropriate card
        e.preventDefault();
        for (let i = 0; i < contactList.length; i++) {
            if (p.innerHTML == contactList[i].name) {
                removeAllChildren();
                renderView(contactList[i]);
            }
        }
    })
    return (n);
}

function renderIndex(contacts) {
    
    for(let i = 0; i < contacts.length; i++ ) {
        mainDiv.appendChild(createSingleIndex(contactList[i])); // Parses through and renders each contact card on the Index page
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

function renderCreate() {
    
    mainDiv.insertAdjacentHTML (
        'beforeend',
        `<div class="contactedit">
            <div class="contactimg">
                <img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">
            </div>
            <div class="form">
                <form>
                    <div class="inputcontainer">
                        <input type="text" id="contactname" name="contactname" placeholder="Contact Name">
                        <button class="extrafield" id="extranamefield" name="extranamefield">+</button>
                    </div>

                    <div class="inputcontainer">
                        <input type="tel" id="contactphone" name="contactphone" placeholder="Contact Phone">
                        <button class="extrafield" id="extraphonefield" name="extraphonefield">+</button>
                    </div>

                    <div class="inputcontainer">
                        <input type="text" id="contactaddress" name="contactaddress" placeholder="Contact Address">
                        <button class="extrafield" id="extraaddressfield" name="extraaddressfield">+</button>
                    </div>
                    
                    <div class="inputcontainer">
                        <input type="email" id="contactemail" name="contactemail" placeholder="Contact Email">
                        <button class="extrafield" id="extraemailfield" name="extraemailfield">+</button>
                    </div>

                    <div class="buttons">
                        <button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>
                        <button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>
                    </div>
                </form>
            </div>
        </div>`
    );

    // Lab 11 #8

    const saveButton = document.querySelector("#savecontact"); // Queries the save button

    saveButton.addEventListener("click", (e) => { // Takes in input for creating a new contact, pushes it to contactList

        var contactName = document.getElementById("contactname").value;
        var contactEmail = document.getElementById("contactemail").value;
        var contactPhone = document.getElementById("contactphone").value;
        var contactAddress = document.getElementById("contactaddress").value;
        e.preventDefault();

        // Lab 11 #9

        contactList.push({
            name: contactName,
            email: contactEmail,
            phone: contactPhone,
            address: contactAddress,
        })
    })
}

// Event Listeners for Lab 11

// Lab 11 #10 

renderIndex(contactList);

// Lab 11 #2

const contactHome = document.querySelector("#contactshome");

contactHome.addEventListener("click", (e) => {
    removeAllChildren();
    renderIndex(contactList);
    e.preventDefault();

})

// Lab 11 #3

const newContact = document.querySelector("#newcontact");

newContact.addEventListener("click", (e) => {
    removeAllChildren();
    renderCreate();
    e.preventDefault();

})

// Lab 11 #4 (Index Page)

const contactElements = document.querySelector(".nav-home"); // Queries the index cards

contactElements.addEventListener("click", createSingleIndex);

// The scripts seems to

// Lab 11 #5

const closeContact = document.querySelector(".close"); // Returns null, no way to fix

closeContact.addEventListener("click", (e) => {
    removeAllChildren();
    renderIndex(contactList);
    e.preventDefault();

})

// Lab 11 #6 - Edit button does not do anything.

// Lab 11 #7

const closeCreate = document.querySelector(".cancel"); // Returns null, no way to fix

closeCreate.addEventListener("click", (e) => {
    removeAllChildren();
    renderIndex(contactList);
    e.preventDefault();

})
