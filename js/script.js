const body = document.querySelector("body")
const darklight = document.querySelector(".darklight")
const dark = document.querySelector("#dark")
const text = document.querySelector(".text")
const form = document.querySelector("form")
const input = document.querySelector("input")
const card = document.querySelector(".card")

let mode = localStorage.getItem("night") ? localStorage.getItem("night") : "light"

const darkMode = () => {
    if (mode == "dark") {
        body.classList.add("active")
        darklight.innerHTML = `<span class="Te">DARK</span><i id="dark"class="fa-solid fa-moon"></i>`
    } else {
        body.classList.remove("active")
        darklight.innerHTML = `<span class="Te">LIGHT</span><i id="dark"class="fa-solid fa-sun"></i>`
    }
}
darkMode()


darklight.addEventListener("click", () => {
    if (mode == "dark") {
        mode = "light"
    } else {
        mode = "dark"
    }
    darkMode()
    localStorage.setItem("night", mode)
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const api = `https://api.github.com/users/${input.value}`
    console.log(api);
    getData(api)
    input.value = ""

})

const getData = async (api) => {
    console.log(api);
    const rec = await fetch(api)
    const data = await rec.json()
    writeData(data)
}

const writeData = (item) => {
    console.log(item);

    card.innerHTML = ""
    card.innerHTML = `<div class="image">
                    <img src=${item.avatar_url} alt="">
                </div>
                <div class="info">
                    <div class="namePart">
                        <div class="part-one">
                            <h1>${item.name}</h1>
                            <a class="email" href="">${item.login}</a>
                        </div>
                        <h4 class="col">${item.created_at}
                    </div>

                    <p class="col">${item.bio.slice(0,70)}</p>
                    <div class="row">

                        <div class="call">
                            <h4 class="blow">Repos</h4>
                            <h2 class="num">${item.public_repos}</h2>
                        </div>
                        <div class="call">
                            <h4 class="blow">Followers</h4>
                            <h2 class="num">${item.followers}</h2>
                        </div>
                        <div class="call">
                            <h4 class="blow">Following</h4>
                            <h2 class="num">${item.following}</h2>
                        </div>

                    </div>
                    <div class="links">

                        <a href="">
                            <div class="loc">
                                <i class="fa-solid fa-location-dot"></i>
                                <h3>${item.location}</h3>
                            </div>
                        </a>
                        <a href="">
                            <div class="loc">
                                <i class="fa-brands fa-twitter"></i>
                                <h3>${item.Twitter_username}</h3>
                            </div>
                        </a>
                        <a href=${item.blog}>
                            <div class="loc">
                                <i class="fa-solid fa-link"></i>
                                <h3>${item.blog.slice(0,20)}</h3>
                            </div>
                        </a>
                        <a href="">
                            <div class="loc">
                                <i class="fa-solid fa-tree-city"></i>
                                <h3>${item.company}</h3>
                            </div>
                        </a>

                    </div>

                </div>`
}




