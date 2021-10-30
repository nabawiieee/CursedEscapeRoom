window.onload=function(){
    
const btn = document.getElementById("about");
const section = document.getElementById("welcome");

btn.addEventListener("click", (e) => {
  section.scrollIntoView({ behavior: "smooth" });
});
const rooms = document.getElementById("rooms");
const our_rooms= document.getElementById("our_rooms");

rooms.addEventListener("click", (e) => {
  our_rooms.scrollIntoView({ behavior: "smooth" });
});
const contactus = document.getElementById("contactus");
const location= document.getElementById("location");

contactus.addEventListener("click", (e) => {
  location.scrollIntoView({ behavior: "smooth" });
});
}