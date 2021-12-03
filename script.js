const mainDiv = document.querySelector(".main"); // Queries any page's main div

let contactList = [
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

function removeAllChildren() {
    while (mainDiv.lastChild) {
        mainDiv.lastChild.remove()
    }
}

function createSingleIndex(contact) {

    let n = document.createElement("a");
    let p = document.createElement("p");
    t = document.createElement("div");

    n.href="page3.html",
    t.classList.add("contact"),
    t.append(p), 
    p.innerHTML=contact.name,
    n.append(t)

    n.addEventListener("click", (e) => {
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
        mainDiv.appendChild(createSingleIndex(contactList[i])) // Parses through and renders each contact card
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

    const saveButton = document.querySelector("#savecontact");

    saveButton.addEventListener("click", (e) => {

        e.preventDefault();
        var contactName = document.getElementById("contactname");
        var contactPhone = document.getElementById("contactphone");
        var contactAddress = document.getElementById("contactaddress");
        var contactEmail = document.getElementById("contactemail");
        console.log(contactName)

        contactList.push({
            name: contactName,
            phone: contactPhone,
            address: contactAddress,
            email: contactEmail,
        })
    })
}

// Event Listeners for Lab 11

// 10 

renderIndex(contactList);

// 2

const contactHome = document.querySelector("#contactshome");

contactHome.addEventListener("click", (e) => {
    removeAllChildren();
    renderIndex(contactList);
    e.preventDefault();

})

// 3

const newContact = document.querySelector("#newcontact");

newContact.addEventListener("click", (e) => {
    removeAllChildren();
    renderCreate();
    e.preventDefault();

})

// 4

const contactElements = document.querySelector(".nav-home")

contactElements.addEventListener("click", createSingleIndex)

/*

// 5

const closeContact = document.querySelector(".close");

closeContact.addEventListener("click", (e) => {
    removeAllChildren();
    renderIndex(contactList);

})

// 7

const closeCreate = document.querySelector(".cancel");

closeCreate.addEventListener("click", (e) => {
    removeAllChildren();
    renderIndex(contactList);
    e.preventDefault()

})

*/

// 8
