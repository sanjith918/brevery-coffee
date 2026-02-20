
/* hamburger menu */
function toggleMenu(){
    var menu = document.getElementById("navLinks");

    if(menu.style.display === "block"){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "block";
    }
}

/* contact form */
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    var name = document.getElementById("name").value;

    alert("Thank you " + name + "! Your message has been sent ☕");

    document.getElementById("contactForm").reset();
});
/* order buttons */
const orderButtons = document.querySelectorAll(".coffee-bottom button");

orderButtons.forEach(function(btn){
    btn.addEventListener("click", function(){
        alert("Item added to cart ☕");
    });
});
/* SEARCH FUNCTIONALITY */

const searchInput = document.getElementById("searchInput");
const coffeeCards = document.querySelectorAll(".coffee-card");

searchInput.addEventListener("keyup", function(){
    const value = searchInput.value.toLowerCase();

    coffeeCards.forEach(function(card){
        const title = card.querySelector("h3").innerText.toLowerCase();

        if(title.includes(value)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
/* LOGIN MODAL */

function openLogin(){
    document.getElementById("loginModal").style.display = "flex";
}

function closeLogin(){
    document.getElementById("loginModal").style.display = "none";
}

function showSignup(){
    alert("Signup feature coming soon ☕");
}