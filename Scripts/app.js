"use strict";

//Functions called anonymously when index.html is executed

(function(){    

    //Inject header in every page
    function DisplayHeader()
    {
        //get parent by id
        let headingArea = document.getElementById("contentArea");
        // assigning h1 element to h1 variable
        let h1 = document.createElement("h1");
        // add a class attribute to the h1 element
        h1.setAttribute("class", "display-6");
        // style h1 element
        h1.style.fontSize = "32px"; h1.style.fontWeight = "500";h1.style.color = "SlateBlue";
        // welcome message
        h1.textContent = "Welcome to the " + document.title + " Page for WEBD6201 : Lab Assignment 01";

        // append the new node to the parent mainContent div
        headingArea.appendChild(h1);  
    } 

    function DisplayHomePage()
    {
        //get a reference to parent node
        let mainContent = document.getElementById("mainContent");
        //create element to be inserted
        let p = document.createElement("p");
        //add content to the element
        p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." +
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." + 
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        //insertion
        mainContent.appendChild(p);

        //Event Listener for btnSeeProjects at click event
        document.getElementById("btnSeeProjects").addEventListener("click", SeeProjects);
        //Event Listener for btnSeeHR at click event
        document.getElementById("btnSeeHR").addEventListener("click", SeeHRTab);
    }

    /*****************
     * Function to dynamically change the href link and text content from "Products" to "Projects"
     * Linked to click event of btnSeeProjects on index.html
     */
    function SeeProjects()
    {        
        //get <a> tag for Products using id
        let toReplace = document.getElementById("nav-item2");
        //replace text content and html link
        toReplace.href = "projects.html";
        toReplace.textContent = " Projects";   
        let projectIcon = document.createElement('i');
        projectIcon.className = "fas fa-project-diagram";
        toReplace.insertBefore(projectIcon, toReplace.firstChild);         
        
    }
    /*****************
     * Function to dynamically add the Human Resources tab on NavBar
     * Linked to click event of btnSeeHR on index.html
     */
     function SeeHRTab()
     {       
         //get reference to the entry point
         let entryPoint = document.getElementById("nav-list");
         //create element to be inserted
         let hRTab = document.createElement('li');
         let hRLink = document.createElement('a'); 
         let hRIcon = document.createElement('i');
         //modify element
         hRTab.className = "nav-item";
         hRLink.className = "nav-link";
         hRLink.textContent = " Human Resources";
         hRLink.href = "humanresources.html";
         hRIcon.className = "fas fa-users";
         //insert element
         hRLink.insertBefore(hRIcon, hRLink.firstChild);
         hRTab.appendChild(hRLink);
         entryPoint.insertBefore(hRTab, entryPoint.lastElementChild);
     }

     /*****************
     * Function that displays contact information to the console 
     * as well as redirects to index.html in 3 seconds.
     * Linked to click event of btnSubmit on contact.html
     */
     function DisplayContactPage()
     {
        //get a reference to submit button relevant to this page
        let btnSubmit = document.getElementById("btnSubmit");

        //Link event listener to click event of the button
        btnSubmit.addEventListener("click", function()
        {
            //get text values from form input fields
            let name = document.getElementById("fullName").value;        
            let number = document.getElementById("contactNumber").value;
            let email = document.getElementById("emailAddress").value;
            let message = document.getElementById("message").value;

            //print values to console
            console.log("Contact Form Submitted: \nCustomer Name: " + name +
            "\nContact Number: " + number + 
            "\nEmail Address : " + email +
            "\nMessage: " + message);

            setTimeout(location.href = "index.html", 3000)
        });
        
    }

    //Determine the page being displayed and inject text accordingly
    //trigerred at load
    function Start()
    {
        switch (document.title) {
          case "Home":
            DisplayHomePage();            
            break;
          case "About Us":
            
            
            break;
          case "Projects":
            
            
            break;
          case "Services":
            
            //DisplayServicesPage();
            break;
          case "Contact-List":
            
            //DisplayContactListPage();
            break;
          case "Contact Us":
            DisplayContactPage();
            break;
        }
        //Call header on every page
        DisplayHeader();
    }
    //Event Listener for Text injection at load event
    window.addEventListener("load", Start);    

})();