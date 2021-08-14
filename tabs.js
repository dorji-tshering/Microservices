
// tab open function
function openTab(evt, tabName) {
        // gets executed only if the device width is above 700px
        if(!window.matchMedia("(max-width: 700px)").matches) {
                let i, tabContent, tabLinks;

                tabContent = document.getElementsByClassName("tabcontent");
                tabLinks = document.getElementsByClassName("tablinks");

                // get all tab contents and set display to none
                for( let i=0; i<tabContent.length; i++) {
                        tabContent[i].style.display = "none";
                }
                
                // get all tab links and set the classname to an empty string
                for(let i=0; i<tabLinks.length; i++) {
                        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
                }

                // get the current tab and set display to value other than none/assign active classname
                document.getElementById(tabName).style.display = "grid";
                evt.currentTarget.className += " active"; 
        }
}

// media query script
function openMobileTab(evt, tabName) {
        // changes the value of menu toggler to hide and show the menu
        if(evt.currentTarget.textContent === "🠽") {
                document.getElementById(tabName).style.display = "none";
                evt.currentTarget.textContent = "🠿";
                return;
        }
        let menuToggler = document.getElementsByClassName("dropdown");
        let tabContent = document.getElementsByClassName("m-tabcontent");

        // hide all tab content
        for(let i=0; i<tabContent.length; i++) {
                tabContent[i].style.display = "none";
        }

        // reset the value of menu toggler
        for(let i=0; i<menuToggler.length; i++) {
                menuToggler[i].textContent = "🠿";
        }

        // shoe the active tab content and change the menu toggler sign
        document.getElementById(tabName).style.display = "grid";
        evt.currentTarget.textContent = "🠽";       
}








