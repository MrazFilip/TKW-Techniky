const content = document.getElementById('content');
const allTechniques = {
    "categories": [
        {
            "category:": "Bloky - Makki",
            "technique-names": [
                { "name": "Arae Kodureo Makki" },
                { "name": "Arae Makki" },
                { "name": "Momtong Bakkat Makki" },
                { "name": "Olgul Makki" },
                { "name": "Sonnal Makki" }
            ]
        },
        {
            "category:": "Postoje - Seogi",
            "technique-names": [
                { "name": "Ap Kubi" },
                { "name": "Ap Seogi" },
                { "name": "Apkkoa Seogi" },
                { "name": "Beom Seogi" },
                { "name": "Dwitkubi" },
                { "name": "Hakdari Seogi" },
                { "name": "Juchum Seogi" },
                { "name": "Moa Seogi" },
                { "name": "Ogeum Seogi" },
                { "name": "Oreun Seogi" },
                { "name": "Wen Seogi" }
            ]
        },
        {
            "category:": "Kopy - Chagi",
            "technique-names": [
                { "name": "Ap Chagi" },
                { "name": "Dollyo Chagi" },
                { "name": "Yop Chagi" }
            ]
        },
        {
            "category:": "Rány - Chigi",
            "technique-names": [
                { "name": "Ap Chigi" },
                { "name": "Olgul Bakkat Chigi" },
                { "name": "Palkup Dollyo Chigi" }
            ]
        },
        {
            "category:": "Vpichy - Tzireugi",
            "technique-names": [
                { "name": "Pyonsonkkeut Jeucho Tzireugi" },
                { "name": "Pyonsonkkeut Sewo Tzireugi" },
                { "name": "Pyonsonkkeut Upeo Tzireugi" }
            ]
        },
        {
            "category:": "Údery - Jireugi",
            "technique-names": [
                { "name": "Bandae Jireugi" },
                { "name": "Baro Jireugi" },
                { "name": "Jeocho Jireugi" },
                { "name": "Momtong Jireugi" },
                { "name": "Olgul Jireugi" },
                { "name": "Yop Jireugi" }
            ]
        }
    ]
}

allTechniques.categories.forEach(category => {
        let catList = document.createElement("div");
        catList.classList.add("category");

        let h = document.createElement("h3");
        h.innerText = category["category:"];
        catList.appendChild(h);

        let path = "https://tkw-techniky-4d426.web.app/Techniky-obrazky/" + category["category:"] + "/";

        category["technique-names"].forEach(technique => {
            let card = document.createElement("div");
            card.classList.add("card");

            let img = document.createElement("img");
            img.src = path + technique.name + ".jpg"

            let imgWrapper = document.createElement("div");
            imgWrapper.classList.add("img-wrapper");
            imgWrapper.appendChild(img);

            let text = document.createElement("h4");
            text.innerText = technique.name;

            let textArea = document.createElement("div");
            textArea.classList.add("text-wrapper")
            textArea.appendChild(text);

            card.appendChild(imgWrapper);
            card.appendChild(textArea);

            catList.appendChild(card);
        });

        content.appendChild(catList);
    }
)