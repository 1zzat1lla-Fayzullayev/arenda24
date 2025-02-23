function toggleMenu() {
    let menu = document.getElementById("customMenu");
    let body = document.body;
  
    if (menu.style.width === "250px") {
      menu.style.width = "0";
      body.classList.remove("menu-open");
    } else {
      menu.style.width = "250px";
      body.classList.add("menu-open");
    }
  }