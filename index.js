var moon = document.getElementById("moon");

moon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        moon.classList.remove("fa-moon", "moon");
        moon.classList.add("fa-sun", "sun-see")
    }else{
        moon.classList.remove("fa-sun", "sun-see");
        moon.classList.add("fa-moon", "moon");
    }
}