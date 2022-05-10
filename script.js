function changeTheme() {
    var light = document.getElementById("light")
    var dark = document.getElementById("dark")
    console.log(light);
    console.log(dark);
    if (light !== null) {
        light.innerText = "Dark"
        light.classList = "btn btn-dark"
        light.id = "dark"
        document.getElementById("theme").setAttribute("href", "dark-theme.css")
    } else if (dark !== null) {
        dark.innerText = "Light"
        dark.classList = "btn btn-light"
        dark.id = "light"
        document.getElementById("theme").setAttribute("href", "light-theme.css")
    }
}