


class Dropdown {

    constructor(selector, options) {

        this.$el = document.querySelector(selector)

        this.$el.querySelector(".dropdown_label").addEventListener("click",  () => {

            if(    this.$el.querySelector(".dropdown_menu").classList.contains("hide")          ) {


                this.open()
            }


            else {

                this.close()


            }


        })

        this.$el.querySelector(".dropdown_label").textContent = options.items[0].label


        let textHTML = options.items.map(


            function (y){

                return ` <li> ${y.label} </li>  `


            }


        ).join(" ")




        this.$el.querySelector(".dropdown_menu").insertAdjacentHTML("afterbegin", textHTML)


        this.$el.querySelector(".dropdown_menu").addEventListener("click", (event) => {




            if (event.target.tagName.toLowerCase() === "li")

            {

                this.$el.querySelector(".dropdown_label").textContent = event.target.textContent


            }




        })



    }

    close(){



        this.$el.querySelector(".dropdown_menu").classList.add("hide")


    }

    open(){

        this.$el.querySelector(".dropdown_menu").classList.remove("hide")

    }





}









const dropdown = new Dropdown("#dropdown",
    {
        items: [

            { label: "Москва", id: "msk" },
            { label: "Санкт-петербург", id: "spb" },
            { label: "Новосибирск", id: "nsk" },
            { label: "Краснодар", id: "krdr" }

        ]
    }
)


