const content = document.getElementById('content');
const search = document.getElementById('search');
const allTechniques = {
    "categories": [
        {
            "category:": "Bloky - Makki",
            "technique-names": [
                {
                    "name": "Arae Kodureo Makki",
                    "koreanName": "고두로 아르 막키",
                    "desc": "Jako Are makki, ale s podpůrnou rukou"
                },
                {
                    "name": "Arae Makki",
                    "koreanName": "아래 마키",
                    "desc": ""
                },
                {
                    "name": "Momtong Bakkat Makki",
                    "koreanName": "몸통바캇마끼",
                    "desc": ""
                },
                {
                    "name": "Olgul Makki",
                    "koreanName": "올굴 마키",
                    "desc": ""
                },
                {
                    "name": "Sonnal Makki",
                    "koreanName": "손날 마키",
                    "desc": ""
                }
            ]
        },
        {
            "category:": "Postoje - Seogi",
            "technique-names": [
                {
                    "name": "Ap Kubi",
                    "koreanName": "",
                    "desc": ""
                },
                {
                    "name": "Ap Seogi",
                    "koreanName": "",
                    "desc": ""
                },
                {
                    "name": "Apkkoa Seogi",
                    "koreanName": "",
                    "desc": ""
                },
                {
                    "name": "Beom Seogi",
                    "koreanName": "",
                    "desc": ""
                },
                {
                    "name": "Dwitkubi",
                    "koreanName": "",
                    "desc": ""
                },
                {
                    "name": "Hakdari Seogi",
                    "koreanName": "",
                    "desc": ""
                },
                {
                    "name": "Juchum Seogi",
                    "koreanName": "",
                    "desc": ""
                },
                {
                    "name": "Moa Seogi",
                    "koreanName": "",
                    "desc": ""
                },
                {
                    "name": "Ogeum Seogi",
                    "koreanName": "",
                    "desc": ""
                },
                {
                    "name": "Oreun Seogi",
                    "koreanName": "",
                    "desc": ""
                },
                {
                    "name": "Wen Seogi",
                    "koreanName": "",
                    "desc": ""
                }
            ]
        },
        {
            "category:": "Kopy - Chagi",
            "technique-names": [
                {
                    "name": "Ap Chagi",
                    "koreanName": "",
                    "desc": ""
                },
                {
                    "name": "Dollyo Chagi",
                    "koreanName": "",
                    "desc": ""
                },
                {
                    "name": "Yop Chagi",
                    "koreanName": "",
                    "desc": ""
                }
            ]
        },
        {
            "category:": "Rány - Chigi",
            "technique-names": [
                {
                    "name": "Ap Chigi",
                    "koreanName": "",
                    "desc": ""
                },
                {
                    "name": "Olgul Bakkat Chigi",
                    "koreanName": "",
                    "desc": ""
                },
                {
                    "name": "Palkup Dollyo Chigi",
                    "koreanName": "",
                    "desc": ""
                }
            ]
        },
        {
            "category:": "Vpichy - Tzireugi",
            "technique-names": [
                {
                    "name": "Pyonsonkkeut Jeucho Tzireugi",
                    "koreanName": "",
                    "desc": ""
                },
                {
                    "name": "Pyonsonkkeut Sewo Tzireugi",
                    "koreanName": "",
                    "desc": ""
                },
                {
                    "name": "Pyonsonkkeut Upeo Tzireugi",
                    "koreanName": "",
                    "desc": ""
                }
            ]
        },
        {
            "category:": "Údery - Jireugi",
            "technique-names": [
                {
                    "name": "Bandae Jireugi",
                    "koreanName": "",
                    "desc": ""
                },
                {
                    "name": "Baro Jireugi",
                    "koreanName": "",
                    "desc": ""
                },
                {
                    "name": "Jeocho Jireugi",
                    "koreanName": "",
                    "desc": ""
                },
                {
                    "name": "Momtong Jireugi",
                    "koreanName": "",
                    "desc": ""
                },
                {
                    "name": "Olgul Jireugi",
                    "koreanName": "",
                    "desc": ""
                },
                {
                    "name": "Yop Jireugi",
                    "koreanName": "",
                    "desc": ""
                }
            ]
        }
    ]
}
let filteredTechniques = [];

function generateAllTechniques() {
    allTechniques.categories.forEach(category => {
        let catList = document.createElement("div");
        catList.id = category["category:"];
        catList.classList.add("category");

        let h = document.createElement("h3");
        h.innerText = category["category:"].toUpperCase();
        catList.appendChild(h);

        let line = document.createElement("div");
        line.classList.add("line");

        let section = document.createElement("section");
        section.id = category["category:"] + "_SECTION"
        section.appendChild(h);
        section.appendChild(line);

        content.appendChild(section);

        let path = "Techniky-obrazky/" + category["category:"] + "/";

        category["technique-names"].forEach(technique => {
            let card = document.createElement("div");
            card.classList.add("card");
            card.id = technique.name;

            let imgWrapper = document.createElement("div");
            imgWrapper.classList.add("img-wrapper");

            let img = document.createElement("img");
            img.src = path + technique.name + ".jpg"
            imgWrapper.appendChild(img);

            let textArea = document.createElement("div");
            textArea.classList.add("text-wrapper")

            let koreanText = document.createElement("h4");
            koreanText.classList.add("korean");
            koreanText.classList.add("red");
            koreanText.innerText = technique.koreanName;
            textArea.appendChild(koreanText);

            let text = document.createElement("h4");
            text.innerText = technique.name;
            textArea.appendChild(text);

            if(technique.desc !== "") {
                let desc = document.createElement("p");
                desc.innerText = technique.desc;
                textArea.appendChild(desc);
            }

            card.appendChild(imgWrapper);
            card.appendChild(textArea);

            catList.appendChild(card);
        });

        content.appendChild(catList);
    })
}

search.addEventListener('input', function (event) {
    filteredTechniques = [];
    allTechniques.categories.forEach(category => {
        document.getElementById(category["category:"]).classList.remove("hidden");
        document.getElementById(category["category:"] + "_SECTION").classList.remove("hidden");
        category["technique-names"].forEach(technique => {
            document.getElementById(technique.name).classList.remove("hidden");
        });
    })
    let keyWord = search.value;

    allTechniques.categories.forEach(category => {
      category["technique-names"].forEach(technique => {
          if(technique.name.toUpperCase().match(keyWord.toUpperCase())) {
            filteredTechniques.push(technique.name);
          }
      });
    });

    for (let i = filteredTechniques.length; i > 0; i--) {
        allTechniques.categories.forEach(category => {
            let catLenght = category["technique-names"].length;
            let removed = 0;
            category["technique-names"].forEach(technique => {
                let ok = false;
                for (j = 0; j < filteredTechniques.length; j++) {
                    if (technique.name === filteredTechniques[j]) {
                        ok = true;
                    }
                }
                if(ok === false) {
                    document.getElementById(technique.name).classList.add("hidden");
                    removed++;
                }
            });
            if(removed === catLenght) {
                document.getElementById(category["category:"]).classList.add("hidden");
                document.getElementById(category["category:"] + "_SECTION").classList.add("hidden");
            }
        })
    }
});