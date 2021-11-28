const mainDiv = document.querySelector(".main");

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

    let children = mainDiv.children

    for (let i=0; i < children.length + 1; i++) {
        children[i].remove()
    }

    while (mainDiv.lastChild) {
        mainDiv.lastChild.remove();
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

    let children = mainDiv.children

    for (let i=0; i < children.length + 1; i++) {
        children[i].remove()
    }

    while (mainDiv.lastChild) {
        mainDiv.lastChild.remove();
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

function cleanUpCreate() {

    let children = mainDiv.children

    for (let i=0; i < children.length + 1; i++) {
        children[i].remove()
    }

    while (mainDiv.lastChild) {
        mainDiv.lastChild.remove();
    }
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
}

