import { ref } from "vue";

import Falafel from "../assets/img/food/Falafel.jpg";
import Mujaddara from "../assets/img/food/Mujaddara.jpg";
import Taboon from "../assets/img/food/Taboon.jpg";
import Hummus from "../assets/img/food/Hummus.jpg";
import Maqluba from "../assets/img/food/Maqluba.jpg";
import Kunāfah from "../assets/img/food/Kunāfah.jpg";
import Qidreh from "../assets/img/food/Qidreh.jpeg";
import Labneh from "../assets/img/food/Labneh.jpg";
import Musakhan from "../assets/img/food/Musakhan.jpg";
import Shakshouka from "../assets/img/food/Shakshouka.jpg";
import Makdous from "../assets/img/food/Makdous.jpeg";
import RainRice from "../assets/img/food/Rain-Rice.jpg";
import Qizha from "../assets/img/food/Qizha.jpg";
import Arayes from "../assets/img/food/Arayes.jpg";
import Maamoul from "../assets/img/food/Maamoul.jpg";
import Mutabal from "../assets/img/food/Mutabal.jpg";
import Shishbarak from "../assets/img/food/Shishbarak.jpg";
import Rummaneyye from "../assets/img/food/Rummaneyye.jpg";
import Khobeizeh from "../assets/img/food/Khobeizeh.jpg";
import GalayetBandora from "../assets/img/food/Galayet-bandora.jpg";
import Shulbato from "../assets/img/food/Shulbato.jpg";
import MahshiLift from "../assets/img/food/Mahshi-lift.jpg";
import Qatayef from "../assets/img/food/Qatayef.jpg";
import JerusalemKaak from "../assets/img/food/Jerusalem-Kaak.jpg";

// ingredients
import Flour from "../assets/img/food/ingredients/Flour.png";
import Chickpeas from "../assets/img/food/ingredients/Chickpeas.png";
import Parsley from "../assets/img/food/ingredients/Parsley.png";
import Coriander from "../assets/img/food/ingredients/Coriander.png";
import Cumin from "../assets/img/food/ingredients/Cumin.png";
import Onion from "../assets/img/food/ingredients/Onion.png";
import Garlic from "../assets/img/food/ingredients/Garlic.png";
import SesameSeed from "../assets/img/food/ingredients/Sesame-Seed.png";
import LemonJuice from "../assets/img/food/ingredients/Lemon-Juice.png";
import OliveOil from "../assets/img/food/ingredients/Olive-Oil.png";
import Salt from "../assets/img/food/ingredients/Salt.png";
import Bred from "../assets/img/food/ingredients/Bred.png";
import Bulgur2 from "../assets/img/food/ingredients/Bulgur-2.png";
import BayLaurel from "../assets/img/food/ingredients/Bay-Laurel.png";
import BlackSeedPaste from "../assets/img/food/ingredients/Black-Seed-Paste.png";
import Sumac from "../assets/img/food/ingredients/Sumac.png";

export const items = ref([
  {
    id: 1,
    name: "Falafel",
    img: "https://tastythriftytimely.com/wp-content/uploads/2023/06/Falafel-FEATURED.jpg",
    place: "Gaza",
    type: "STREET FOOD",
    desc: "Even though these protein-packed chickpea fritters are listed as one of Israels national dishes, and are a staple in many Middle Eastern countries including Palestine and Lebanon, it is often suggested that falafel might have evolved from the Egypt dish known as taameya. By the 1950s, t...",
    fullDesc:
      '<div class="mt-5"> Even though these protein-packed chickpea fritters are listed as one of Israels national dishes, and are a staple in many Middle Eastern countries including Palestine and Lebanon, it is often suggested that falafel might have evolved from the Egypt dish known as taameya. By the 1950s, to earn a living, Yemenite immigrants in Israel started making falafel in the streets, selling it wrapped in paper, which has eventually transformed this ancient dish into an early form of Israeli fast food and facilitet the global recognition of it.</div> <div class="mt-5"> As an alternative to the Israeli version, the Egyptian taameya uses fava beans instead of chickpeas, while the mixture is typically flavored with parsley, coriander, cumin, and onions. Today, both in Israel and other Middle Eastern countries, falafel fritters are most commonly enjoyed in pita or lafa flatbread sandwiches, topped with fresh or pickled vegetables, and coated either in hummus paste, tahini dip, or a zesty, garlic-flavored yogurt sauce.</div>',
    ingredients: [
      {
        id: 1,
        name: "Flour",
        img: Flour,
      },
      {
        id: 2,
        name: "Chickpeas",
        img: Chickpeas,
        isOr: "yes",
      },
      {
        id: 3,
        name: "Fava Beans",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/8fff989ecbe24f938f3521ed825d5fa4.png?h=120&w=120",
      },
      {
        id: 4,
        name: "Parsley",
        img: Parsley,
      },
      {
        id: 5,
        name: "Coriander",
        img: Coriander,
      },
      {
        id: 6,
        name: "Cumin",
        img: Cumin,
      },
      {
        id: 7,
        name: "Onion",
        img: Onion,
      },
      {
        id: 8,
        name: "Garlic",
        img: Garlic,
      },
    ],
    countries: [
      // { name: 'Palestine', code: 'EH' },
      { name: "Egypt", code: "EG" },
      { name: "Jordan", code: "JO" },
      { name: "Lebanon", code: "LB" },
      { name: "Syria", code: "SY" },
      { name: "Iraq", code: "IQ" },

      { name: "Yemen", code: "YE" },
      { name: "Sudan", code: "SD" },
      { name: "Djibouti", code: "DJ" },
      { name: "Somalia", code: "SO" },

      { name: "Turkey", code: "TR" },
    ],
  },
  {
    id: 2,
    name: "Mujaddara",
    img: Mujaddara,
    place: "Jerusalem/Qatana",
    type: "RICE DISH",
    desc: "The vegetarian combination of lentils and rice is a classic Levantine fare that is best served with fresh salads. The dish is assembled with cooked rice and lentils that are enriched with generous amounts of onions sautéed in olive oil. When served, the combination is topped with fried oni...",
    fullDesc:
      '<div class="mt-5">The vegetarian combination of lentils and rice is a classic Levantine fare that is best served with fresh salads. The dish is assembled with cooked rice and lentils that are enriched with generous amounts of onions sautéed in olive oil. When served, the combination is topped with fried onions and is usually sided with plain or garlic-flavored yogurt (the dish is then not vegan-friendly anymore) and flatbread, which should be used instead of utensils.</div> <div class="mt-5">Apart from the traditional version, some varieties may employ bulgur instead of rice, and the dish is easily adapted with various spices and fresh herbs.</div>',
    ingredients: [
      {
        id: 1,
        name: "Lentils",
        img: "https://cdn-icons-png.flaticon.com/512/6113/6113506.png",
      },
      {
        id: 2,
        name: "Rice",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/17d658e3b3964b849c47b9469c8e6465.png?h=120&w=120",
        isOr: "yes",
      },
      {
        id: 3,
        name: "Bulgur",
        img: Bulgur2,
      },
      {
        id: 4,
        name: "Onion",
        img: Onion,
      },
      {
        id: 5,
        name: "Olive Oils",
        img: OliveOil,
      },
      {
        id: 6,
        name: "Cumin",
        img: Cumin,
      },
      {
        id: 7,
        name: "Salt",
        img: Salt,
      },
    ],
    countries: [
      { name: "Jordan", code: "JO" },
      { name: "Lebanon", code: "LB" },
      { name: "Syria", code: "SY" },
      { name: "Iraq", code: "IQ" },

      { name: "Cyprus", code: "CY" },
    ],
  },
  {
    id: 3,
    name: "Taboon",
    img: Taboon,
    place: "Nablus/Beta",
    type: "FLATBREAD",
    desc: "Taboon is a Middle Eastern flatbread that is traditionally baked in a clay oven, giving the bread its characteristical bubbly shape. It consists of flour, water, yeast, and sugar. The bread is commonly sold on the streets, stuffed with falafel, shredded meat, or hummus. It is also often used for ...",
    fullDesc:
      '<div class="mt-5">Taboon is a Middle Eastern flatbread that is traditionally baked in a clay oven, giving the bread its characteristical bubbly shape. It consists of flour, water, yeast, and sugar. The bread is commonly sold on the streets, stuffed with falafel, shredded meat, or hummus.</div><div class="mt-5">It is also often used for scooping up meat stews or gravy-based dishes.</div>',
    ingredients: [
      {
        id: 1,
        name: "Flour",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/6980492bc1fb48d292831ababd8816c3.png?h=120&w=120",
      },
      {
        id: 2,
        name: "Water",
        img: "https://cdn0.iconfinder.com/data/icons/orderdrinks/128/C_WaterGlss-512.png",
      },
      {
        id: 3,
        name: "Milk",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/32cfca5acc5c40ef8daecc359371a43e.png?h=120&w=120",
      },
      {
        id: 4,
        name: "Yeast",
        // img: 'https://cdn-icons-png.flaticon.com/512/8008/8008184.png'
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/805b01e32cd74f6fbdc87146dbad384f.png?h=120&w=120",
      },
      {
        id: 5,
        name: "Olive Oils",
        img: OliveOil,
      },
      {
        id: 6,
        name: "Suger",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/ae857e2ec0504a6590b41c0000f6678c.png?h=120&w=120",
      },
      {
        id: 7,
        name: "Salt",
        img: Salt,
      },
    ],
    countries: [
      { name: "Jordan", code: "JO" },
      { name: "Lebanon", code: "LB" },
      { name: "Syria", code: "SY" },
      { name: "Iraq", code: "IQ" },
      { name: "and most the arab world" },
    ],
  },
  {
    id: 4,
    name: "Hummus",
    img: 'https://www.modernhoney.com/wp-content/uploads/2023/03/Hummus-4-scaled.jpg',
    place: "Tulkarm/Nour Shams camp",
    type: "DIP",
    desc: "This internationally popular, beige-colored spread is traditionally made with mashed chickpeas, tahini sesame paste, lemon juice, and garlic. People across the world love hummus for its tangy flavor and the fact that it is filled with nutrients. When served, it is typically dressed with ...",
    fullDesc:
      '<div class="mt-5">This internationally popular, beige-colored spread is traditionally made with mashed chickpeas, tahini sesame paste, lemon juice, and garlic. People across the world love hummus for its tangy flavor and the fact that it is filled with nutrients.</div><div class="mt-5">When served, it is typically dressed with a drizzle of olive oil, and is then used as a dip for vegetables or a flavorful filling for flatbreads such as pita. Even today, not much is known about its origins, although the earliest mention of hummus dates back to 13th-century Egypt.</div><div class="mt-5">Hummus is sometimes additionally enriched with spices such as cumin and paprika, and it can be garnished with anything from fresh herbs, cucumbers, and chopped tomatoes to olives, pine nuts, and hard-boiled eggs.</div>',
    ingredients: [
      {
        id: 1,
        name: "Chickpeas",
        img: Chickpeas,
      },
      {
        id: 2,
        name: "Sesame Seeds",
        img: SesameSeed,
      },
      {
        id: 3,
        name: "Lemon Juices",
        img: LemonJuice,
      },
      {
        id: 4,
        name: "Garlic",
        img: Garlic,
      },
      {
        id: 5,
        name: "Olive Oils",
        img: OliveOil,
      },
      {
        id: 6,
        name: "Cumin",
        img: Cumin,
      },
      {
        id: 7,
        name: "Salt",
        img: Salt,
      },
    ],
    countries: [
      { name: "Egypt", code: "EG" },
      { name: "Jordan", code: "JO" },
      { name: "Lebanon", code: "LB" },
      { name: "Syria", code: "SY" },
      { name: "Iraq", code: "IQ" },
    ],
  },
  {
    id: 5,
    name: "Maqluba",
    img: Maqluba,
    place: "Tulkarm/Nour Shams camp",
    type: "RICE DISH",
    desc: "Maqluba is the national dish of Palestine, but it can also be found in Iraq, Syria, and Jordan. This layered one-pot dish has many versions, but the basic principle is to turn it upside down before serving, which is what the word maqluba means. The ingredients include ... ",
    fullDesc:
      '<div class="mt-5">Maqluba is the national dish of Palestine, but it can also be found in Iraq, Syria, and Jordan. This layered one-pot dish has many versions, but the basic principle is to turn it upside down before serving, which is what the word maqluba means.</div><div class="mt-5">The ingredients include rice, vegetables (often carrots, potatoes, tomatoes, cauliflower, onions), herbs and spices (often turmeric and sumac), and meat such as chicken or lamb, although the dish can be made without any meat. The ingredients are cooked and layered, then boiled until theres no liquid left.</div><div class="mt-5">Before serving, maqluba is flipped upside down, and its then often garnished with pine nuts or chopped parsley on top. Its recommended to serve the dish with a cucumber and tomato salad, olives, and yogurt on the side.</div>',
    ingredients: [
      {
        id: 1,
        name: "Lamb",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/6303dec1aa394f72b07b8bf7e4572177.png?h=120&w=120",
      },
      {
        id: 2,
        name: "Rice",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/17d658e3b3964b849c47b9469c8e6465.png?h=120&w=120",
      },
      {
        id: 3,
        name: "Allspice",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/9f382c998e6b46b79ab26b34cd3b0c2c.png?h=120&w=120",
      },
      {
        id: 4,
        name: "Potato",
        img: "https://cdn-icons-png.flaticon.com/512/1652/1652127.png",
      },
      {
        id: 5,
        name: "Olive Oils",
        img: OliveOil,
      },
      {
        id: 6,
        name: "Eggplant",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/9c53f075b64b42e1a8d446741e9904eb.png?h=120&w=120",
      },
      {
        id: 7,
        name: "Salt",
        img: Salt,
      },
      {
        id: 8,
        name: "Cauliflower",
        img: "https://cdn-icons-png.flaticon.com/512/3522/3522954.png",
      },
      {
        id: 8,
        name: "Onion",
        img: Onion,
      },
    ],
    countries: [
      { name: "Jordan", code: "JO" },
      { name: "Lebanon", code: "LB" },
      { name: "Syria", code: "SY" },
      { name: "Iraq", code: "IQ" },
    ],
  },
  {
    id: 6,
    name: "Kunāfah",
    img: "https://cdn.tasteatlas.com/images/recipes/8c828e76840b4d128e53653c521e9977.jpg",
    place: "Tulkarm/Nour Shams camp",
    type: "SWEET PASTRY",
    desc: "Kunāfah consists of two crunchy layers of shredded and buttered kataifi or knefe dough, filled with a luscious cheese cream that's often flavored with orange zest and cardamom, then drenched in a sugar syrup infused with lemon juice and orange blossom water. Turkish künefe ...",
    fullDesc:
      '<div class="mt-5">Kunāfah consists of two crunchy layers of shredded and buttered kataifi or knefe dough, filled with a luscious cheese cream that\'s often flavored with orange zest and cardamom, then drenched in a sugar syrup infused with lemon juice and orange blossom water.</div><div class="mt-5">Turkish künefe is traditionally made with Hatay, Urfa, or Antep cheese. It is usually topped with pistachios and is best served warm. Elegant and amazingly simple to make, this dessert is nothing short of what cheese-filled pastry dreams are made of.</div><div class="mt-5">Some authors speculate that it originated from the pre-Islamic Syria, while others claim that the Palestinian city of Nablus is its birthplace - hence the name kanafeh nabulsieh. Nevertheless, this decadent dessert has been a part of a long culinary tradition in Türkiye and Egypt, and it is listed as one of Egypts national dishes.</div>',
    ingredients: [
      {
        id: 1,
        name: "Akkawi",
        img: "https://cdn.tasteatlas.com/images/dishes/09a76a10b5d44cffa5e62e170de95cf9.png?h=120&w=120",
      },
      {
        id: 2,
        name: "Butter",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/82d84a396a544682bb2954283d8666e6.png?h=120&w=120",
      },
      {
        id: 3,
        name: "Cream",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/a76acdd303af40d8a855f274ac9ac6d4.png?h=120&w=120",
      },
      {
        id: 4,
        name: "Suger",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/ae857e2ec0504a6590b41c0000f6678c.png?h=120&w=120",
      },
      {
        id: 5,
        name: "Pistachios",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/c0084d87b3e6428a97e3a1585f3c03c4.png?h=120&w=120",
      },
      {
        id: 6,
        name: "Lemon",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/e72116820fd94959b9d5e570b3df6316.png?h=120&w=120",
      },
      {
        id: 7,
        name: "Rice Flour",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/42084d298fc7452f9d97fc64785e7fb6.png?h=120&w=120",
      },
      {
        id: 8,
        name: "Milk",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/32cfca5acc5c40ef8daecc359371a43e.png?h=120&w=120",
      },
    ],
    countries: [
      { name: "Egypt", code: "EG" },
      { name: "Jordan", code: "JO" },
      { name: "Lebanon", code: "LB" },
      { name: "Syria", code: "SY" },
      { name: "Turkey", code: "TR" },
    ],
  },
  {
    id: 7,
    name: "Qidreh",
    img: Qidreh,
    place: "Gaza",
    type: "RICE DISH",
    desc: "Qidreh is a traditional Palestinian dish hailing from Hebron. It consists of meat (usually lamb, sometimes chicken) that's cooked with chickpeas and rice in a broth that's spiced with ingredients such as cumin, allspice, cardamom, black pepper, and turmeric. Other common ingredients include onion...",
    fullDesc:
      '<div class="mt-5">Qidreh is a traditional Palestinian dish hailing from Hebron. It consists of meat (usually lamb, sometimes chicken) that\'s cooked with chickpeas and rice in a broth that\'s spiced with ingredients such as cumin, allspice, cardamom, black pepper, and turmeric.</div><div class="mt-5">Other common ingredients include onions and garlic. The dish is typically cooked in a heavy copper or brass pot in a communal wood-fired oven. It\'s recommended to serve it with a yogurt sauce and a fresh tomato salad.</div>',
    ingredients: [
      {
        id: 1,
        name: "Beef",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/3db7b6f60a934bc89f41a0c51acd08ac.png?h=120&w=120",
      },
      {
        id: 2,
        name: "Olive Oils",
        img: OliveOil,
      },
      {
        id: 3,
        name: "Onion",
        img: Onion,
      },
      {
        id: 4,
        name: "Garlic",
        img: Garlic,
      },
      {
        id: 5,
        name: "Water",
        img: "https://cdn0.iconfinder.com/data/icons/orderdrinks/128/C_WaterGlss-512.png",
      },
      {
        id: 6,
        name: "Salt",
        img: Salt,
      },
      {
        id: 7,
        name: "Rice",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/17d658e3b3964b849c47b9469c8e6465.png?h=120&w=120",
      },
      {
        id: 8,
        name: "Chickpeas",
        img: Chickpeas,
      },
      {
        id: 9,
        name: "7 Spices",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/9f382c998e6b46b79ab26b34cd3b0c2c.png?h=120&w=120",
      },
      {
        id: 10,
        name: "Cardamom",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/ebbde091cf4445a5ac10df8a51b7c894.png?h=120&w=120",
      },
      {
        id: 11,
        name: "Bay Laurel",
        img: "https://cdn.iconscout.com/icon/premium/png-256-thumb/bay-leaf-3907950-3239080.png?f=webp",
      },
    ],
    // countries: [{ name: "Jordan", code: "JO" }],
  },
  {
    id: 8,
    name: "Labneh",
    img: "https://www.simplyleb.com/wp-content/uploads/labneh_yogurt-3.jpg",
    place: "Jerusalem/Qatana",
    type: "DIP",
    desc: "Creamy texture and mild flavor are the main attributes of labneh; a traditional Middle Eastern strained yogurt that is prepared with yogurt and salt. No strict guidelines are used to produce it; plain full-fat yogurt is mixed with salt and left to strain for twelve to twenty-four hours. During st... ",
    fullDesc:
      '<div class="mt-5">Creamy texture and mild flavor are the main attributes of labneh; a traditional Middle Eastern strained yogurt that is prepared with yogurt and salt. No strict guidelines are used to produce it; plain full-fat yogurt is mixed with salt and left to strain for twelve to twenty-four hours.</div><div class="mt-5">During straining, the yogurt whey separates, and what is left is a thick and firm cheese-like product. Its texture can vary from creamy to dense, but it always has a relatively mild and slightly salty flavor. The name labneh is native to the Middle East, but strained yogurt varieties are found in numerous other countries and regions such as Greece, Turkey, Cyprus, Central Asia, the United States, Mexico, and the United Kingdom.</div><div class="mt-5">It usually employs cow milk, but other kinds, such as goat yogurt in Greece, are also common. In many Levantine countries, labneh is enjoyed as a part of a mezze, served alongside flatbreads and other small dishes. It can be eaten plain, garnished with olive oil or chopped mint, but it can also be served as a creamy spread over bread or bagels. It is often incorporated as a condiment in many meat and vegetable dishes.</div><div class="mt-5">Because of its thick consistency, it can be rolled into balls and preserved in olive oil, or covered in crushed nuts or spices, then served as a decorative appetizer.</div>',
    ingredients: [
      {
        id: 1,
        name: "Yogurt",
        img: "https://cdn.tasteatlas.com/images/dishes/242742c498304e40a7500080f677c360.png?h=120&w=120",
      },
      {
        id: 2,
        name: "Salt",
        img: Salt,
      },
    ],
    countries: [
      { name: "Jordan", code: "JO" },
      { name: "Lebanon", code: "LB" },
      { name: "Syria", code: "SY" },
      { name: "The Middle East" },
      { name: "The Eastern Mediterranean" },
      { name: "Central Asia and South Asia" },
      // { name: "Turkey", code: "TR" },
      // { name: "Greece", code: "GR" },
      // { name: "Cyprus", code: "CY" },
    ],
  },
  {
    id: 9,
    name: "Musakhan",
    img: Musakhan,
    place: "Nablus/Beta",
    type: "CHICKEN DISH",
    desc: "Musakhan is a Palestinian dish consisting of roasted chicken and caramelized onions that are garnished with pine nuts and arranged on top of taboon bread that's previously been dipped in olive oil. The name of the dish comes from the Arabic word sakhan, which once translated, re...",
    fullDesc:
      '<div class="mt-5">Musakhan is a Palestinian dish consisting of roasted chicken and caramelized onions that are garnished with pine nuts and arranged on top of taboon bread that\'s previously been dipped in olive oil. The name of the dish comes from the Arabic word sakhan, which once translated, reveals the method of preparing — something that\'s heated.</div><div class="mt-5">An important element when making musakhan is sumac, a spice that\'s added to onions, providing the dish with a tart, lemony flavor. Nowadays, this dish is often prepared as a wrap, a pizza, or assembled like lasagna by alternating the bread and onion mixture with chicken on top.</div><div class="mt-5">It is always served with yogurt on the side, and, if desired, some extra bread.</div>',
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/cc2384e25f3c4d52be5abe779ef2ad9b.png?h=120&w=120",
      },
      {
        id: 2,
        name: "Pine Nuts",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/2108a7804fe04f57a002907791e0e43f.png?h=120&w=120",
      },
      {
        id: 3,
        name: "Onion",
        img: Onion,
      },
      {
        id: 4,
        name: "Sumac",
        img: "https://cdn.tasteatlas.com/images/dishes/3870f3fae6b74d40a8204bee307508b2.png?h=120&w=120",
      },
      {
        id: 5,
        name: "Allspice",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/9f382c998e6b46b79ab26b34cd3b0c2c.png?h=120&w=120",
      },
      {
        id: 6,
        name: "Cinnamon",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/bf4bc7a768a044549fcdcdadcb09f80b.png?h=120&w=120",
      },
      {
        id: 7,
        name: "Coriander",
        img: Coriander,
      },
      {
        id: 8,
        name: "Black Pepper",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/deddb5ecf2b44e79a75ddcc05a5cc298.png?h=120&w=120",
      },
      {
        id: 9,
        name: "Salt",
        img: Salt,
      },
      {
        id: 10,
        name: "Bred",
        img: Bred,
      },
    ],
    // countries: [{ name: "Jordan", code: "JO" }],
  },
  {
    id: 10,
    name: "Shakshouka",
    img: Shakshouka,
    place: "Tulkarm/Nour Shams camp",
    type: "EGG DISH",
    desc: "Shakshouka is a delicious combination of eggs poached in a spicy tomato sauce. Although it has an unusual name, the dish is straightforward and easy to make. It is usually made in a skillet in which onions, tomatoes, and spices are cooked until they form a delicious tomato sauce. Eggs ...",
    fullDesc:
      '<div class="mt-5">Shakshouka is a delicious combination of eggs poached in a spicy tomato sauce. Although it has an unusual name, the dish is straightforward and easy to make. It is usually made in a skillet in which onions, tomatoes, and spices are cooked until they form a delicious tomato sauce.</div><div class="mt-5">Eggs are then added directly to the tomato sauce and poached until done. Merguez sausage can also be added to the dish. It is believed that shakshouka originated in Tunisia, but the dish is well-known and commonly eaten throughout North Africa and the Middle East as well.</div><div class="mt-5">Almost every region has formed their distinctive variety of shakshouka: in Egypt, eggs are usually scrambled and served in a sandwich. The consistency of the sauce and eggs is also variable – the sauce can be thinner or thicker, while the eggs can be completely firm or soft.</div><div class="mt-5">For a more nutritious meal, meat, most commonly sausages, can be included in the dish. Shakshouka is suitable for any meal of the day and is usually served warm or sizzling hot, with bread on the side. Because it is budget-friendly, simple, and easy to prepare, the dish has recently gained popularity both in Europe and North America.</div>',
    ingredients: [
      {
        id: 1,
        name: "Eggs",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/68062afe91e64f1ba087f7caf87a7fdb.png?h=120&w=120",
      },
      {
        id: 2,
        name: "Onion",
        img: Onion,
      },
      {
        id: 3,
        name: "Tomato",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/72ddcc5fa8d7439d9f190499aa559132.png?h=120&w=120",
      },
      {
        id: 4,
        name: "Bell Pepper",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/0f922f485f1b427393a6cd5a69f66b6f.png?h=120&w=120",
      },
      {
        id: 5,
        name: "Cumin",
        img: Cumin,
      },
      {
        id: 6,
        name: "Paprika",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/1afb03b20a704f32bbb423a55d0e07cd.png?h=120&w=120",
      },
      {
        id: 7,
        name: "Olive Oil",
        img: OliveOil,
      },
      {
        id: 7,
        name: "Salt",
        img: Salt,
      },
    ],
    countries: [
      { name: "Jordan", code: "JO" },
      // { name: "Lebanon", code: "LB" },
      // { name: "Syria", code: "SY" },
      // { name: 'Turkey', code: 'TR' },
      // { name: 'Greece', code: 'GR' },
      // { name: 'Cyprus', code: 'CY' },
      { name: "Egypt", code: "EG" },
      { name: "Algeria", code: "DZ" },
      { name: "Libya", code: "LY" },
      { name: "Morocco", code: "MA" },
      { name: "Tunisia", code: "TN" },
      { name: "Yemen", code: "YE" },
    ],
  },
  {
    id: 11,
    name: "Makdous",
    img: Makdous,
    place: "Tulkarm/Nour Shams camp",
    type: "VEGETABLE DISH",
    desc: "Oil-cured eggplants are a staple throughout Levantine and Middle Eastern cuisine. The dish is traditionally prepared with small-sized baby eggplants that are shortly boiled and stuffed with a flavorful mixture of roasted red peppers, walnuts, garlic, and salt. The eggplants are then cured in oliv...",
    fullDesc:
      '<div class="mt-5">Oil-cured eggplants are a staple throughout Levantine and Middle Eastern cuisine. The dish is traditionally prepared with small-sized baby eggplants that are shortly boiled and stuffed with a flavorful mixture of roasted red peppers, walnuts, garlic, and salt.</div><div class="mt-5">The eggplants are then cured in olive oil and are traditionally enjoyed for breakfast, usually accompanied by labneh, vegetables, and flatbread, but they also work as a standard meze dish or a snack. Though their origin is vague, preserved eggplants are strongly associated with Syria.</div>',
    ingredients: [
      {
        id: 1,
        name: "Eggplant",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/9c53f075b64b42e1a8d446741e9904eb.png?h=120&w=120",
      },
      {
        id: 2,
        name: "Peppers",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/6907265facb2440399ccfa3e56381c45.png?h=120&w=120",
      },
      {
        id: 3,
        name: "Walnuts",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/ba2b29e1021746729a5afa8899ff8d7b.png?h=120&w=120",
      },
      {
        id: 4,
        name: "Salt",
        img: Salt,
      },
    ],
    countries: [
      { name: "Syria", code: "SY" },
      { name: "Jordan", code: "JO" },
      { name: "Lebanon", code: "LB" },
    ],
  },
  {
    id: 12,
    name: "Rain Rice",
    img: RainRice,
    place: "Tulkarm/Nour Shams camp",
    type: "RICE DISH",
    desc: "Rain rice is a traditional rice dish originating from Palestine. Its made with a simple combination of jasmine rice, raisins, and cinnamon. The rice is boiled with raisins and broken cinnamon sticks over low heat. When fully cooked and the grains separate easily, the dish is taken off the heat a...",
    fullDesc:
      '<div class="mt-5">Rain rice is a traditional rice dish originating from Palestine. It\'s made with a simple combination of jasmine rice, raisins, and cinnamon. The rice is boiled with raisins and broken cinnamon sticks over low heat. When fully cooked and the grains separate easily, the dish is taken off the heat and covered with a towel that will absorb excess moisture.</div><div class="mt-5">After a few minutes, rain rice is ready to be served, usually with lemon wedges and yogurt on the side.</div>',
    ingredients: [
      {
        id: 1,
        name: "Rice",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/17d658e3b3964b849c47b9469c8e6465.png?h=120&w=120",
      },
      {
        id: 2,
        name: "Cinnamon",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/bf4bc7a768a044549fcdcdadcb09f80b.png?h=120&w=120",
      },
      {
        id: 3,
        name: "Raisins",
        img: "https://cdn.iconscout.com/icon/premium/png-256-thumb/raisins-3734958-3122845.png",
      },
    ],
  },
  {
    id: 13,
    name: "Qizha",
    img: Qizha,
    place: "Tulkarm/Nour Shams camp",
    type: "SPREAD",
    desc: "Qizha is a rare Palestinian paste that's thick in consistency and ink black in color. It's a specialty of the city of Nablus. Popularly called black tahini, it's made from ground nigella seeds. The seeds are soaked in water, roasted in the oven, dried in the sun, then ground into a paste, which i...",
    fullDesc:
      "<div class=\"mt-5\">Qizha is a rare Palestinian paste that's thick in consistency and ink black in color. It's a specialty of the city of Nablus. Popularly called black tahini, it's made from ground nigella seeds. The seeds are soaked in water, roasted in the oven, dried in the sun, then ground into a paste, which is often mixed with honey or date syrup.</div><div class=\"mt-5\">The flavor is intense and bitter with slightly sweet notes and a minty, oniony aftertaste. Qizha is most commonly used in desserts, especially in siniyyat al-qizha, a small diamond-shaped treat that's adorned with almonds on top. Interestingly, the old people in Palestine often eat a spoon of qizha every day in order not to get sick.</div>",
    ingredients: [
      {
        id: 1,
        name: "Flour",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/6980492bc1fb48d292831ababd8816c3.png?h=120&w=120",
      },
      {
        id: 2,
        name: "Suger",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/ae857e2ec0504a6590b41c0000f6678c.png?h=120&w=120",
      },
      {
        id: 3,
        name: "Olive Oil",
        img: OliveOil,
      },
      {
        id: 4,
        name: "Black seed paste",
        img: BlackSeedPaste,
      },
      {
        id: 5,
        name: "Yeast",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/805b01e32cd74f6fbdc87146dbad384f.png?h=120&w=120",
      },
      {
        id: 6,
        name: "Water",
        img: "https://cdn0.iconfinder.com/data/icons/orderdrinks/128/C_WaterGlss-512.png",
      },
      {
        id: 7,
        name: "Tahini",
        img: "https://cdn.tasteatlas.com/images/dishes/08e2555cf883451ca76b1a08c14a5247.png?h=120&w=120",
      },
      {
        id: 8,
        name: "Almonds",
        img: "https://icons.veryicon.com/png/o/food--drinks/snack/almond-27.png",
      },
    ],
    countries: [
      { name: "Jordan", code: "JO" },
      { name: "Syria", code: "SY" },
      { name: "Lebanon", code: "LB" },
    ],
  },
  {
    id: 14,
    name: "Arayes",
    img: Arayes,
    place: "Tulkarm/Nour Shams camp",
    type: "SNACK",
    desc: "Arayes, translated from Arabic as brides, is a convenient snack consisting of pita bread filled with a mixture of minced meat that is seasoned and enriched with garlic, onions, and tomatoes. The bread is typically cut in quarters and then spread with lamb or beef before it is coated in o...",
    fullDesc:
      '<div class="mt-5">Arayes, translated from Arabic as brides, is a convenient snack consisting of pita bread filled with a mixture of minced meat that is seasoned and enriched with garlic, onions, and tomatoes. The bread is typically cut in quarters and then spread with lamb or beef before it is coated in olive oil and baked, pan-fried, or grilled until crisp.</div><div class="mt-5">The dish can be served as a snack or a main course, preferably with yogurt and olives on the side. The origin of the arayes is disputed, but the variations are found throughout Middle East, Levant, and some Arabic countries.</div>',
    ingredients: [
      {
        id: 1,
        name: "Lamb",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/6303dec1aa394f72b07b8bf7e4572177.png?h=120&w=120",
        isOr: "yes",
      },
      {
        id: 2,
        name: "Beef",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/3db7b6f60a934bc89f41a0c51acd08ac.png?h=120&w=120",
      },
      {
        id: 3,
        name: "7 Spices",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/9f382c998e6b46b79ab26b34cd3b0c2c.png?h=120&w=120",
      },
      {
        id: 4,
        name: "Garlic",
        img: Garlic,
      },
      {
        id: 5,
        name: "Onion",
        img: Onion,
      },
      {
        id: 6,
        name: "Paprika",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/1afb03b20a704f32bbb423a55d0e07cd.png?h=120&w=120",
      },
      {
        id: 7,
        name: "Salt",
        img: Salt,
      },
      {
        id: 8,
        name: "Black Pepper",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/deddb5ecf2b44e79a75ddcc05a5cc298.png?h=120&w=120",
      },
      {
        id: 9,
        name: "Parsley",
        img: Parsley,
      },
      {
        id: 7,
        name: "Olive Oil",
        img: OliveOil,
      },
      {
        id: 8,
        name: "Bred",
        img: Bred,
      },
      {
        id: 6,
        name: "Tomato paste",
        img: "https://cdn1.iconfinder.com/data/icons/food-5-7/128/Vigor_Tomato-Sauce-Bottle-Ketchup-Spice-2-512.png",
      },
    ],
    countries: [
      { name: "Jordan", code: "JO" },
      { name: "Syria", code: "SY" },
      { name: "Lebanon", code: "LB" },
    ],
  },
  {
    id: 15,
    name: "Ma'amoul",
    img: Maamoul,
    place: "Tulkarm/Nour Shams camp",
    type: "COOKIE",
    desc: "Ma\'amoul is an ancient cookie filled with fruits and nuts such as dates, walnuts, and pistachios. The Ma\'amouls are traditionally prepared for Eid al-Fitr and Eid al-Adha, and they are typically shaped into balls or domes. To differentiate the cookies, the walnut version is usually...",
    fullDesc:
      '<div class="mt-5">Ma\'amoul is an ancient cookie filled with fruits and nuts such as dates, walnuts, and pistachios. The Ma\'amouls are traditionally prepared for Eid al-Fitr and Eid al-Adha, and they are typically shaped into balls or domes. To differentiate the cookies, the walnut version is usually shaped into a dome with a round top, the date ma\'amoul is shaped into a dome with a flat top, while the pistachio ma\'amoul has an elongated, oval shape.</div><div class="mt-5">It is not uncommon for the ma\'amoul to be topped with powdered sugar for extra sweetness, and they are often served with coffee or tea during the day in many Middle Eastern households.</div>',
    ingredients: [
      {
        id: 1,
        name: "Semolina",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/40a3aac8a540413980b541cbfd7f3646.png?h=120&w=120",
      },
      {
        id: 2,
        name: "Flour",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/6980492bc1fb48d292831ababd8816c3.png?h=120&w=120",
      },
      {
        id: 3,
        name: "Suger",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/ae857e2ec0504a6590b41c0000f6678c.png?h=120&w=120",
      },
      {
        id: 4,
        name: "Yeast",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/805b01e32cd74f6fbdc87146dbad384f.png?h=120&w=120",
      },
      {
        id: 5,
        name: "Ghee",
        img: "https://cdn.tasteatlas.com/images/dishes/194229dc935a45ec9d24f94a13bbe3fd.png?h=120&w=120",
      },
      {
        id: 6,
        name: "Rose Water",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/e796f033c53745bf934c231bb17c0e1b.png?h=120&w=120",
      },
      {
        id: 7,
        name: "Dates",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/015f4405f1d94b8ab3cebcd8a015ab2d.png?h=120&w=120",
      },
      {
        id: 8,
        name: "Cinnamon",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/bf4bc7a768a044549fcdcdadcb09f80b.png?h=120&w=120",
      },
    ],
    countries: [
      { name: "Jordan", code: "JO" },
      { name: "Syria", code: "SY" },
      { name: "Lebanon", code: "LB" },
      { name: "Saudi Arabia", code: "SA" },
      { name: "and most the arab world" },
    ],
  },
  {
    id: 16,
    name: "Mutabal",
    img: Mutabal,
    place: "Tulkarm/Nour Shams camp",
    type: "DIP",
    desc: "Mutabal is a Middle Eastern dip that's usually made with a combination of roasted eggplants, tahini, lemon juice, garlic, yogurt, olive oil, and salt. The ingredients are blended or mashed together until the dip develops a desired consistency, either smooth or a bit more coarse. O...",
    fullDesc:
      '<div class="mt-5">Mutabal is a Middle Eastern dip that\'s usually made with a combination of roasted eggplants, tahini, lemon juice, garlic, yogurt, olive oil, and salt. The ingredients are blended or mashed together until the dip develops a desired consistency, either smooth or a bit more coarse.</div><div class="mt-5">Once prepared, mutabal can be garnished with parsley, pomegranate seeds, or cilantro on top. If desired, onions can also be added to the mixture. It is recommended to serve mutabal as a part of a meze platter with pita bread on the side.</div>',
    ingredients: [
      {
        id: 1,
        name: "Eggplant",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/9c53f075b64b42e1a8d446741e9904eb.png?h=120&w=120",
      },
      {
        id: 2,
        name: "Tahini",
        img: "https://cdn.tasteatlas.com/images/dishes/08e2555cf883451ca76b1a08c14a5247.png?h=120&w=120",
      },
      {
        id: 3,
        name: "Lemon Juice",
        img: LemonJuice,
      },
      {
        id: 4,
        name: "Garlic",
        img: Garlic,
      },
      {
        id: 5,
        name: "Yogurt",
        img: "https://cdn.tasteatlas.com/images/dishes/242742c498304e40a7500080f677c360.png?h=120&w=120",
      },
      {
        id: 6,
        name: "Parsley",
        img: Parsley,
        isOr: "yes",
      },
      {
        id: 7,
        name: "Coriander",
        img: Coriander,
        isOr: "yes",
      },
      {
        id: 7,
        name: "Pomegranate",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/c9a43320590448f7ac2d33cb05431efe.png?h=120&w=120",
      },
    ],
    countries: [
      { name: "Jordan", code: "JO" },
      { name: "Syria", code: "SY" },
      { name: "Lebanon", code: "LB" },
    ],
  },
  {
    id: 17,
    name: "Shishbarak",
    img: Shishbarak,
    place: "Tulkarm/Nour Shams camp",
    type: "DUMPLINGS",
    desc: "This combination of meat-stuffed dumplings and yogurt is common in Levantine cuisine. The dish consists of tiny dumplings—believed to have originated in Iran under the name joshpara—that are filled with a combination of meat and onions. The dumplings are cooked in yogurt that...",
    fullDesc:
      '<div class="mt-5">This combination of meat-stuffed dumplings and yogurt is common in Levantine cuisine. The dish consists of tiny dumplings—believed to have originated in Iran under the name joshpara—that are filled with a combination of meat and onions.</div><div class="mt-5">The dumplings are cooked in yogurt that is seasoned with mint, garlic, or other spices, and the dish is then typically served warm. Because of its international status, there are many varieties of the dish that may employ labneh-based sauces, different types of meat, nuts, and various spices.</div>',
    ingredients: [
      {
        id: 1,
        name: "Lamb",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/6303dec1aa394f72b07b8bf7e4572177.png?h=120&w=120",
      },
      {
        id: 2,
        name: "Flour",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/6980492bc1fb48d292831ababd8816c3.png?h=120&w=120",
      },
      {
        id: 3,
        name: "Garlic",
        img: Garlic,
      },
      {
        id: 4,
        name: "Cumin",
        img: Cumin,
      },
      {
        id: 5,
        name: "Parsley",
        img: Parsley,
      },
      {
        id: 6,
        name: "OliveOil",
        img: OliveOil,
      },
      {
        id: 7,
        name: "Suger",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/ae857e2ec0504a6590b41c0000f6678c.png?h=120&w=120",
      },
      {
        id: 8,
        name: "Salt",
        img: Salt,
      },
      {
        id: 9,
        name: "Onion",
        img: Onion,
      },
      {
        id: 10,
        name: "Allspice",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/9f382c998e6b46b79ab26b34cd3b0c2c.png?h=120&w=120",
      },
      {
        id: 11,
        name: "Yogurt",
        img: "https://cdn.tasteatlas.com/images/dishes/242742c498304e40a7500080f677c360.png?h=120&w=120",
      },
      {
        id: 12,
        name: "Corn Starch",
        img: "https://cdn-icons-png.flaticon.com/512/8008/8008182.png",
      },
      {
        id: 13,
        name: "Water",
        img: "https://cdn0.iconfinder.com/data/icons/orderdrinks/128/C_WaterGlss-512.png",
      },
      {
        id: 14,
        name: "Paprika",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/1afb03b20a704f32bbb423a55d0e07cd.png?h=120&w=120",
      },
    ],
    countries: [
      { name: "Uzbekistan", code: "UZ" },
      { name: 'Iran', code: 'IR' },
      { name: "Jordan", code: "JO" },
      { name: "Syria", code: "SY" },
      { name: "Lebanon", code: "LB" },
      { name: "Saudi Arabia", code: "SA" },
    ],
    refs: [
      {
        id: 1,
        link: "https://www.fufuskitchen.com/shish-barak/#recipe",
      },
      {
        id: 2,
        link: "https://www.youtube.com/watch?v=cgTYqAp_XoM",
      },
    ],
  },
  {
    id: 18,
    name: "Sumaghiyyeh",
    img: "https://maktoobmedia.com/wp-content/uploads/2023/04/2D6C1E8F-5779-4E55-A7FC-DC9D5043927B.jpeg",
    place: "Tulkarm/Nour Shams camp",
    type: "DIP",
    desc: "Sumaghiyyeh is a traditional Palestinian dish originating from Gaza City. It's made with a combination of sumac-infused water, tahini, and flour. The ingredients are mixed together, and the mixture is then added to cooked meat (usually beef), herbs, sliced chard, garbanzo beans ...",
    fullDesc:
      '<div class="mt-5">Sumaghiyyeh is a traditional Palestinian dish originating from Gaza City. It\'s made with a combination of sumac-infused water, tahini, and flour. The ingredients are mixed together, and the mixture is then added to cooked meat (usually beef), herbs, sliced chard, garbanzo beans, and spices.</div><div class="mt-5">It\'s fried in olive oil, poured into bowls to chill, then served with pita bread for scooping. Sumaghiyyeh is traditionally prepared on holidays and special occasions such as weddings, funerals, and Eid.</div>',
    ingredients: [
      {
        id: 1,
        name: "Lamb",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/6303dec1aa394f72b07b8bf7e4572177.png?h=120&w=120",
      },
      {
        id: 2,
        name: "Onion",
        img: Onion,
      },
      {
        id: 3,
        name: "OliveOil",
        img: OliveOil,
      },
      {
        id: 4,
        name: "Garlic",
        img: Garlic,
      },
      {
        id: 5,
        name: "Flour",
        img: Flour,
      },
      {
        id: 6,
        name: "Coriander",
        img: "https://static.vecteezy.com/system/resources/thumbnails/007/955/977/small/illustration-of-dried-coriander-isolated-on-white-background-perfect-for-packaging-or-advertising-images-vector.jpg",
      },
      {
        id: 7,
        name: "Cumin",
        img: Cumin,
      },
      {
        id: 8,
        name: "Hot Peppers",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/e02c316cda454fff9c282a56a480b458.png?h=120&w=120",
      },
      {
        id: 9,
        name: "Salt",
        img: Salt,
      },
      {
        id: 10,
        name: "Black Pepper",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/deddb5ecf2b44e79a75ddcc05a5cc298.png?h=120&w=120",
      },
      {
        id: 11,
        name: "Allspice",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/9f382c998e6b46b79ab26b34cd3b0c2c.png?h=120&w=120",
      },
      {
        id: 12,
        name: "Chickpeas",
        img: Chickpeas,
      },
      {
        id: 13,
        name: "Tahini",
        img: "https://cdn.tasteatlas.com/images/dishes/08e2555cf883451ca76b1a08c14a5247.png?h=120&w=120",
      },
      {
        id: 14,
        name: "Chard Leaves",
        img: "https://cdn-icons-png.flaticon.com/512/3944/3944139.png",
      },
      {
        id: 15,
        name: "Sumac",
        img: "https://cdn.tasteatlas.com/images/dishes/3870f3fae6b74d40a8204bee307508b2.png?h=120&w=120",
      },
      {
        id: 7,
        name: "Shabbat seeds",
        img: "https://www.kaifalshiuokh.com/image/cache/catalog/product/Parsley%20seeds-500x500.jpg",
      },
    ],
  },
  {
    id: 19,
    name: "Rummaneyye",
    img: Rummaneyye,
    place: "Tulkarm/Nour Shams camp",
    type: "VEGETABLE DISH",
    desc: "Rummaneyye is a traditional Palestinian dish made with a combination of lentils, eggplants, olive oil, garlic, flour, pomegranate juice, cumin, and coriander. The lentils, eggplant cubes, salt, pepper, and cumin are cooked until tender. The garlic, coriander, and flour are fried in olive oil, and...",
    fullDesc:
      '<div class="mt-5">Rummaneyye is a traditional Palestinian dish made with a combination of lentils, eggplants, olive oil, garlic, flour, pomegranate juice, cumin, and coriander. The lentils, eggplant cubes, salt, pepper, and cumin are cooked until tender. The garlic, coriander, and flour are fried in olive oil, and the two are then combined with the addition of pomegranate juice.</div><div class="mt-5">The mixture is served in deep plates, then seasoned with olive oil and red chili pepper and garnished with pomegranate grains and chopped parsley. The dish can be served hot or cold, ideally with homemade pita bread on the side.</div>',
    ingredients: [
      {
        id: 1,
        name: "Lentils",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/54230c9c778849fb8b4742c78ee846ea.png?h=120&w=120",
      },
      {
        id: 2,
        name: "Eggplant",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/9c53f075b64b42e1a8d446741e9904eb.png?h=120&w=120",
      },
      {
        id: 3,
        name: "OliveOil",
        img: OliveOil,
      },
      {
        id: 4,
        name: "Garlic",
        img: Garlic,
      },
      {
        id: 5,
        name: "Flour",
        img: Flour,
      },
      {
        id: 6,
        name: "Pomegranate",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/c9a43320590448f7ac2d33cb05431efe.png?h=120&w=120",
      },
      {
        id: 7,
        name: "Cumin",
        img: Cumin,
      },
      {
        id: 8,
        name: "Hot Peppers",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/e02c316cda454fff9c282a56a480b458.png?h=120&w=120",
      },
      {
        id: 9,
        name: "Salt",
        img: Salt,
      },
    ],
    // countries: [
    //   { name: "Jordan", code: "JO" },
    //   { name: "Syria", code: "SY" },
    //   { name: "Lebanon", code: "LB" },
    // ],
  },
  {
    id: 20,
    name: "Khobeizeh",
    img: Khobeizeh,
    place: "Tulkarm/Nour Shams camp",
    type: "VEGETABLE DISH",
    desc: "Khobeizeh is a traditional Middle Eastern dish and a specialty of Palestine. The dish is made with a combination of khobeizeh leaves, olive oil, garlic, onions, and lemon juice. In order to prepare it, the khobeizeh leaves are rinsed and sautéed in olive oil with onions, garlic, and salt... ",
    fullDesc:
      '<div class="mt-5">Khobeizeh is a traditional Middle Eastern dish and a specialty of Palestine. The dish is made with a combination of khobeizeh leaves, olive oil, garlic, onions, and lemon juice. In order to prepare it, the khobeizeh leaves are rinsed and sautéed in olive oil with onions, garlic, and salt.</div><div class="mt-5">When served, the dish is drizzled with lemon juice and often garnished with red chili peppers. Khobeizeh is served warm and it\'s often accompanied by homemade pita bread, green olives, and yogurt on the side.</div>',
    ingredients: [
      {
        id: 1,
        name: "Khobizeh Leaves",
        img: "https://specialtyproduce.com/sppics/10423.png",
      },
      {
        id: 2,
        name: "Onion",
        img: Onion,
      },
      {
        id: 3,
        name: "OliveOil",
        img: OliveOil,
      },
      {
        id: 4,
        name: "Lemon",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/e72116820fd94959b9d5e570b3df6316.png?h=120&w=120",
      },
    ],
    countries: [
      { name: "Jordan", code: "JO" },
      { name: "Syria", code: "SY" },
      { name: "Lebanon", code: "LB" },
      { name: "Egypt", code: "EG" },
      { name: "Tunisia", code: "TN" },
      { name: "Algeria", code: "DZ" },
      { name: "Libya", code: "LY" },
      { name: "Morocco", code: "MA" },

      { name: "Georgia", code: "GE" },
      { name: "Armenia", code: "AM" },
      { name: "Azerbaijan", code: "AZ" },
    ],
  },
  {
    id: 21,
    name: "Galayet bandora",
    img: "https://i0.wp.com/media.zeinaskitchen.se/2020/06/galayet-bandora-13-scaled.jpg?resize=1920%2C2170&ssl=1",
    place: "Tulkarm/Nour Shams camp",
    type: "VEGAN DISH",
    desc: "Galayet bandora or qalayet bandora is a traditional dish originating from Jordan and Palestine. The dish is usually made with a combination of tomatoes, onions, garlic, olive oil, hot peppers, and salt. The ingredients are simply cooked in olive oil and the dish is then enjoyed with warm pita bre...",
    fullDesc:
      '<div class="mt-5">Galayet bandora or qalayet bandora is a traditional dish originating from Jordan and Palestine. The dish is usually made with a combination of tomatoes, onions, garlic, olive oil, hot peppers, and salt. The ingredients are simply cooked in olive oil and the dish is then enjoyed with warm pita bread served on the side.</div><div class="mt-5">If desired, the dish can be sprinkled with pine nuts for a celebratory visual appearance. Traditionally, it is served as a main course for lunch or dinner, but it can also be served as an appetizer. Galayet bandora is especially popular in autumn.</div>',
    ingredients: [
      {
        id: 1,
        name: "Tomato",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/72ddcc5fa8d7439d9f190499aa559132.png?h=120&w=120",
      },
      {
        id: 2,
        name: "Onion",
        img: Onion,
      },
      {
        id: 3,
        name: "Garlic",
        img: Garlic,
      },
      {
        id: 4,
        name: "OliveOil",
        img: OliveOil,
      },
      {
        id: 5,
        name: "Hot Peppers",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/e02c316cda454fff9c282a56a480b458.png?h=120&w=120",
      },
      {
        id: 6,
        name: "Salt",
        img: Salt,
      },
    ],
    countries: [
      { name: "Jordan", code: "JO" },
      { name: "Syria", code: "SY" },
      { name: "Lebanon", code: "LB" },
    ],
  },
  {
    id: 22,
    name: "Shulbato",
    img: Shulbato,
    place: "Tulkarm/Nour Shams camp",
    type: "SIDE DISH",
    desc: "Shulbato is a traditional Palestinian dish made with a combination of cooked bulgur, eggplants, green peppers, and tomatoes. The recipes are not set in stone and each family has its own twist – some replace eggplants with zucchini, some replace bulgur with rice, and others add beef or chick... ",
    fullDesc:
      '<div class="mt-5">Shulbato is a traditional Palestinian dish made with a combination of cooked bulgur, eggplants, green peppers, and tomatoes. The recipes are not set in stone and each family has its own twist – some replace eggplants with zucchini, some replace bulgur with rice, and others add beef or chicken to the dish.</div><div class="mt-5">The garlic and onions are sautéed in olive oil until softened, followed by the eggplant cubes, tomatoes, bulgur, green peppers, and spices such as cinnamon, black pepper, and cumin. The combination is covered with hot water and cooked until tender.</div><div class="mt-5">This side dish is often garnished with chopped almonds and parsley, while yogurt and green olives make for great accompaniments.</div>',
    ingredients: [
      {
        id: 1,
        name: "Tomato",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/72ddcc5fa8d7439d9f190499aa559132.png?h=120&w=120",
      },
      {
        id: 2,
        name: "Onion",
        img: Onion,
      },
      {
        id: 3,
        name: "Cumin",
        img: Cumin,
      },
      {
        id: 4,
        name: "OliveOil",
        img: OliveOil,
      },
      {
        id: 5,
        name: "Salt",
        img: Salt,
      },
      {
        id: 6,
        name: "Black Pepper",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/deddb5ecf2b44e79a75ddcc05a5cc298.png?h=120&w=120",
      },
      {
        id: 7,
        name: "Bulgur",
        img: Bulgur2,
      },
      {
        id: 8,
        name: "Water",
        img: "https://cdn0.iconfinder.com/data/icons/orderdrinks/128/C_WaterGlss-512.png",
      },
      {
        id: 9,
        name: "Eggplant",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/9c53f075b64b42e1a8d446741e9904eb.png?h=120&w=120",
      },
      {
        id: 10,
        name: "Zucchini",
        img: "https://cdn-icons-png.flaticon.com/512/6108/6108527.png",
      },
      {
        id: 11,
        name: "Chickpeas",
        img: Chickpeas,
      },
      {
        id: 12,
        name: "Tomato paste",
        img: "https://cdn1.iconfinder.com/data/icons/food-5-7/128/Vigor_Tomato-Sauce-Bottle-Ketchup-Spice-2-512.png",
      },
    ],
  },
  {
    id: 23,
    name: "Mahshi lift",
    img: "https://www.ounousa.com/wp-content/uploads/2020/05/150318083901572.jpg",
    place: "Tulkarm/Nour Shams camp",
    type: "RICE DISH",
    desc: "Mahshi lift is a traditional Palestinian dish originating from Hebron. The dish consists of stuffed turnips with sumac, and the list of ingredients includes beef, turnips, rice, sumac, tamarind paste, and spices such as black pepper, cardamom, cinnamon, and cloves. The rice is soaked in hot water...",
    fullDesc:
      '<div class="mt-5">Mahshi lift is a traditional Palestinian dish originating from Hebron. The dish consists of stuffed turnips with sumac, and the list of ingredients includes beef, turnips, rice, sumac, tamarind paste, and spices such as black pepper, cardamom, cinnamon, and cloves.</div><div class="mt-5">The rice is soaked in hot water, mixed with beef, and seasoned with spices. The turnips are peeled, cored, fried until golden, stuffed with the rice and meat mixture, then simmered in a combination of sumac, tamarind paste, and turnip pulp. It\'s recommended to serve the stuffed turnips with yogurt and lemon or lime slices on the side.</div>',
    ingredients: [
      {
        id: 1,
        name: "Turnip",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/e063a9431e8f4714b9ef42b808482935.png?h=120&w=120",
      },
      {
        id: 2,
        name: "Sumac",
        img: "https://cdn.tasteatlas.com/images/dishes/3870f3fae6b74d40a8204bee307508b2.png?h=120&w=120",
      },
      {
        id: 3,
        name: "Beef",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/3db7b6f60a934bc89f41a0c51acd08ac.png?h=120&w=120",
      },
      {
        id: 4,
        name: "Rice",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/17d658e3b3964b849c47b9469c8e6465.png?h=120&w=120",
      },
      {
        id: 5,
        name: "Tamarind",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/3bc14d735a994464870f3aae64819a42.png?h=120&w=120",
      },
      {
        id: 6,
        name: "Black Pepper",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/deddb5ecf2b44e79a75ddcc05a5cc298.png?h=120&w=120",
      },
      {
        id: 7,
        name: "Cardamom",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/ebbde091cf4445a5ac10df8a51b7c894.png?h=120&w=120",
      },
      {
        id: 8,
        name: "Cinnamon",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/bf4bc7a768a044549fcdcdadcb09f80b.png?h=120&w=120",
      },
      {
        id: 9,
        name: "Salt",
        img: Salt,
      },
    ],
  },
  {
    id: 24,
    name: "Qatayef",
    img: Qatayef,
    // place: "Tulkarm/Nour Shams camp",
    type: "SWEET PASTRY",
    desc: "Qatayef is believed to be of Fatimid origin. Some believe that qatayef is the creation of the Fatimid Dynasty, however, their history dates back to the Abbasid Caliphate, 750–1258 CE. Qatayef was mentioned in a tenth-century Arabic cookbook dates back to  ...",
    fullDesc:
      '<div class="mt-5">Qatayef is believed to be of Fatimid origin. Some believe that qatayef is the creation of the Fatimid Dynasty, however, their history dates back to the Abbasid Caliphate, 750–1258 CE. Qatayef was mentioned in a tenth-century Arabic cookbook dates back to the Abbasid Caliphate by Ibn Sayyar al-Warraq called Kitab al-Ṭabīḫ. Nawal Nasrallah later translated the book under the name Annals of the Caliphs\' Kitchens. </div> <div class="mt-5">The traditional stuffing of Qatayef, as evident in several Medieval Arabic cookbooks, is crushed almond and sugar. In these recipes, once the pancake was stuffed, it would sometimes be fried in walnut oil or baked in the oven. Qatayef was traditionally prepared by street vendors and households in Egypt and the Levant. It is usually filled with akkawi cheese, crushed walnuts, and crushed pistachios. Diverse fillings, such as Nutella, are also used.</div>',
    ingredients: [
      {
        id: 1,
        name: "Flour",
        img: Flour,
      },
      {
        id: 2,
        name: "Rose Water",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/e796f033c53745bf934c231bb17c0e1b.png?h=120&w=120",
      },
      {
        id: 3,
        name: "Salt",
        img: Salt,
      },
      {
        id: 4,
        name: "Suger",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/ae857e2ec0504a6590b41c0000f6678c.png?h=120&w=120",
      },
      {
        id: 5,
        name: "Pistachios",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/c0084d87b3e6428a97e3a1585f3c03c4.png?h=120&w=120",
      },
      {
        id: 6,
        name: "Yeast",
        // img: 'https://cdn-icons-png.flaticon.com/512/8008/8008184.png'
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/805b01e32cd74f6fbdc87146dbad384f.png?h=120&w=120",
      },
      {
        id: 7,
        name: "Water",
        img: "https://cdn0.iconfinder.com/data/icons/orderdrinks/128/C_WaterGlss-512.png",
      },
      {
        id: 8,
        name: "Walnuts",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/ba2b29e1021746729a5afa8899ff8d7b.png?h=120&w=120",
      },
      {
        id: 9,
        name: "Cinnamon",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/bf4bc7a768a044549fcdcdadcb09f80b.png?h=120&w=120",
      },
    ],
    countries: [
      { name: "Jordan", code: "JO" },
      { name: "Syria", code: "SY" },
      { name: "Lebanon", code: "LB" },
      { name: "Egypt", code: "EG" },
    ],
  },
  {
    id: 25,
    name: "Ka’ak Al-Quds (Jerusalem bread)",
    img: 'https://darnamag.wordpress.com/wp-content/uploads/2015/09/jerusalem-kaek-darna-magazine.jpg',
    // place: "Tulkarm/Nour Shams camp",
    type: "SANDWICH",
    desc: "There is not a corner in the Old City of Jerusalem without an Arab bakery or a kiosk selling ka’ak, the name of which has stuck to the city that has been famous for it for hundreds of years. Ka’ak spread in the Holy City during the visit of Roxlan, the Russian wife of ...",
    fullDesc:
      '<div class="mt-5">There is not a corner in the Old City of Jerusalem without an Arab bakery or a kiosk selling ka’ak, the name of which has stuck to the city that has been famous for it for hundreds of years.</div><div class="mt-5">Ka’ak spread in the Holy City during the visit of Roxlan, the Russian wife of Sultan Suleiman the Magnificent, to Jerusalem in 1552, when she ordered the making of a tekke (Hasaki Sultan), meaning the Sultan’s mistress.</div><div class="mt-5">But those ka’ak were part of a full meal of rice and meat before they turned over time into a main meal that Palestinians love and everyone who visits the city. The Palestinians prefer to eat them in the morning with chicken eggs, falafel, oil and thyme, or cheese..</div><div class="mt-5">With time, the shape of the Jerusalem ka’ak changed, which began as a circular shape without a hole, then with a hole, until it took its current rectangular shape.</div><div class="mt-5">Jerusalem ka’ak bakeries are spread throughout the neighborhoods of the Old City of Jerusalem, and their number exceeds 20. It is a profession that its owners inherited from their fathers and grandfathers.</div><div class="mt-5">Flour, yeast, water, salt, and sugar are used in making the dough. The stages of preparation include kneading, cutting, and decorating with sesame before baking. The ka’ak only needs 10 minutes in the oven to be ready for serving.</div>',
    ingredients: [
      {
        id: 1,
        name: "Flour",
        img: Flour,
      },
      {
        id: 2,
        name: "Yeast",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/805b01e32cd74f6fbdc87146dbad384f.png?h=120&w=120",
      },
      {
        id: 3,
        name: "Water",
        img: "https://cdn0.iconfinder.com/data/icons/orderdrinks/128/C_WaterGlss-512.png",
      },
      {
        id: 4,
        name: "Salt",
        img: Salt,
      },
      {
        id: 5,
        name: "Suger",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/ae857e2ec0504a6590b41c0000f6678c.png?h=120&w=120",
      },
      {
        id: 6,
        name: "Sesame Seeds",
        img: SesameSeed,
      },
    ],
    // countries: [
    //   { name: "Jordan", code: "JO" },
    //   { name: "Syria", code: "SY" },
    //   { name: "Lebanon", code: "LB" },
    //   { name: "Egypt", code: "EG" },
    // ],
  },
  {
    id: 26,
    name: "Saj bread",
    img: 'https://cdn.alweb.com/thumbs/3ajeen/article/fit727x484/1/%D9%83%D9%8A%D9%81%D9%8A%D8%A9-%D8%AA%D8%AD%D8%B6%D9%8A%D8%B1-%D8%AE%D8%A8%D8%B2-%D8%A7%D9%84%D8%B4%D8%B1%D8%A7%D9%83-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84.jpeg',
    // place: "Tulkarm/Nour Shams camp",
    type: "FLATBREAD",
    desc: "Bread varieties are distinguished by their diversity and difference, in the way they are prepared, their taste, and the way they are presented. Saj bread, or as it is also called shrak bread in some regions, is one of the types of bread that people love. This bread is one of the types of Ottoman ...",
    fullDesc:
      '<div class="mt-5">Bread varieties are distinguished by their diversity and difference, in the way they are prepared, their taste, and the way they are presented. Saj bread, or as it is also called shrak bread in some regions, is one of the types of bread that people love. This bread is one of the types of Ottoman bread that spread in Islamic and Arab countries, where flour is baked with water and salt.</div><div class="mt-5">The dough is rolled out into a large circular shape, which may reach more than a meter in diameter, and consists of one thin layer, then baked on a large, hot piece of metal called a sheet pan. It is characterized by its ease of digestion and delicious taste.</div>',
    ingredients: [
      {
        id: 1,
        name: "Flour",
        img: Flour,
      },
      {
        id: 2,
        name: "Water",
        img: "https://cdn0.iconfinder.com/data/icons/orderdrinks/128/C_WaterGlss-512.png",
      },
      {
        id: 3,
        name: "Salt",
        img: Salt,
      },
    ],
    countries: [
      { name: "Jordan", code: "JO" },
      { name: "Syria", code: "SY" },
      { name: "Lebanon", code: "LB" },
      { name: 'Iraq', code: 'IQ' },
      { name: "Egypt", code: "EG" },
      { name: 'Qatar', code: 'QA' },
      { name: 'Saudi Arabia', code: 'SA' },
    ],
  },
  {
    id: 27,
    name: "Shawarma",
    img: 'https://www.echoroukonline.com/wp-content/uploads/2022/12/%D8%B4%D8%A7%D9%88%D8%B1%D9%85%D8%A7.jpg',
    // place: "Tulkarm/Nour Shams camp",
    type: "STREET FOOD",
    desc: "Shawarma is a Middle Eastern dish that originated in the Levant region of the Arab world during the Ottoman Empire, consisting of meat that is cut into thin slices, stacked in an inverted cone, and roasted on a slow-turning vertical spit. Traditionally made with lamb or mutton, it may ...",
    fullDesc:
      '<div class="mt-5">Shawarma is a Middle Eastern dish that originated in the Levant region of the Arab world during the Ottoman Empire, consisting of meat that is cut into thin slices, stacked in an inverted cone, and roasted on a slow-turning vertical spit. Traditionally made with lamb or mutton, it may also be made with chicken, turkey, beef, or veal. The surface of the rotisserie meat is routinely shaved off once it cooks and is ready to be served. Shawarma is a popular street food throughout the Arab world and the Greater Middle East.</div><div class="mt-5">Shawarma is prepared from thin cuts of seasoned and marinated lamb, mutton, veal, beef, chicken, or turkey. Spices may include cumin, cardamom, cinnamon, turmeric, or paprika. The slices are stacked on a skewer about 60 cm (20 in) high. Pieces of fat may be added to the stack to provide extra juiciness and flavor. A motorized spit slowly turns the stack of meat in front of an electric or gas-fired heating element, continuously roasting the outer layer. Shavings are cut off the rotating stack for serving, customarily with a long, flat knife. It\'s commonly served as a sandwich or wrap.</div><div class="mt-5"> In the Middle East, chicken shawarma is typically served with garlic sauce, fries, and pickles. The garlic sauce served with the sandwich depends on the meat. Toum or toumie sauce is made from garlic, vegetable oil, lemon, and egg white or starch, and is usually served with chicken shawarma. Tarator sauce is made from garlic, tahini sauce, lemon, and water, and is served with beef shawarma.</div>',
    ingredients: [
      {
        id: 1,
        name: "Saj bread",
        img: 'https://cdn.tasteatlas.com/images/dishes/02d2664de25145a580f02a75b76f2728.png?h=120&w=120',
      },
      {
        id: 2,
        name: "Lamb",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/6303dec1aa394f72b07b8bf7e4572177.png?h=120&w=120",
        isOr: "yes",
      },     
       {
        id: 3,
        name: "Beef",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/3db7b6f60a934bc89f41a0c51acd08ac.png?h=120&w=120",
        isOr: "yes",
      },
      {
        id: 4,
        name: "Chicken",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/cc2384e25f3c4d52be5abe779ef2ad9b.png?h=120&w=120",
      },
      {
        id: 5,
        name: 'Vegetables',
        img: 'https://cdn.tasteatlas.com/images/ingredientgroups/23c55ec12d924df3af23cca250689036.png?h=120&w=120'
      },
      {
        id: 6,
        name: "Cinnamon",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/bf4bc7a768a044549fcdcdadcb09f80b.png?h=120&w=120",
      },
      {
        id: '7',
        name: 'Cloves',
        img: 'https://cdn.tasteatlas.com/images/ingredientgroups/59dd76e264aa44b3890bec8a11722eac.png?h=120&w=120'
      },
      {
        id: '8',
        name: "Salt",
        img: Salt,
      },
    ],
    countries: [
      { name: "Jordan", code: "JO" },
      { name: "Syria", code: "SY" },
      { name: "Lebanon", code: "LB" },
      { name: "Turkey", code: "TR" },
    ],
  },
  {
    id: 28,
    name: "Malabi",
    img: 'https://modo3.com/thumbs/fit630x300/100259/1589483207/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%B5%D9%86%D8%B9_%D8%A7%D9%84%D9%85%D9%87%D9%84%D8%A8%D9%8A%D8%A9.jpg',
    // place: "Tulkarm/Nour Shams camp",
    type: "PUDDING",
    desc: "Mehalabiya is a creamy Arabian dessert, in many ways similar to the French blancmange. It is made with a mixture of milk and sugar, cooked and thickened with rice flour or cornstarch, and usually flavored with orange blossom or rose water. While hot, it is distributed ...",
    fullDesc:
      '<div class="mt-5">Mehalabiya is a creamy Arabian dessert, in many ways similar to the French blancmange. It is made with a mixture of milk and sugar, cooked and thickened with rice flour or cornstarch, and usually flavored with orange blossom or rose water.</div><div class="mt-5">While hot, it is distributed in smaller molds, left to set, and it is then served cold. This simple and satisfying dessert is eaten in slightly different forms across the Arabian Peninsula, Middle East, and North Africa. Depending on the region, it can be garnished with typical local ingredients such as pistachios, almonds, shredded coconut, cinnamon, or raisins.</div><div class="mt-5">In many countries and regions, it is one of the favorite sweets served during the holy month of Ramadan, but it is also regularly served as a light restaurant dessert.</div>',
    ingredients: [
      {
        id: 1,
        name: "Rice Flour",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/42084d298fc7452f9d97fc64785e7fb6.png?h=120&w=120",
      },
      {
        id: 2,
        name: "Milk",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/32cfca5acc5c40ef8daecc359371a43e.png?h=120&w=120",
      },
      {
        id: 3,
        name: "Suger",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/ae857e2ec0504a6590b41c0000f6678c.png?h=120&w=120",
      },
      {
        id: 4,
        name: "Rose Water",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/e796f033c53745bf934c231bb17c0e1b.png?h=120&w=120",
      },
      {
        id: 5,
        name: "Cinnamon",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/bf4bc7a768a044549fcdcdadcb09f80b.png?h=120&w=120",
      },
      {
        id: 6,
        name: "Pistachios",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/c0084d87b3e6428a97e3a1585f3c03c4.png?h=120&w=120",
      },
    ],
    countries: [
      { name: "Jordan", code: "JO" },
      { name: "Syria", code: "SY" },
      { name: "Lebanon", code: "LB" },
      { name: "Iraq", code: "IQ" },
      // { name: "Turkey", code: "TR" },
      { name: "Egypt", code: "EG" },
      { name: "Algeria", code: "DZ" },
      { name: "Libya", code: "LY" },
      { name: "Morocco", code: "MA" },
      { name: "Tunisia", code: "TN" },
    ],
  },
  {
    id: 29,
    name: "Maftool",
    img: 'https://www.assawsana.com/portal/image/imgid457871.jpg?',
    // place: "Tulkarm/Nour Shams camp",
    type: "RICE DISH",
    desc: "Maftoul, or Moroccan maftoul, is one of the popular Levantine dishes consisting of small maftoul granules or balls prepared from bulgur, white and brown flour, which are prepared manually at home, or bought ready-made. In some regions it is called maftoul, after rolling balls ...",
    fullDesc:
      '<div class="mt-5">Maftoul, or Moroccan maftoul, is one of the popular Levantine dishes consisting of small maftoul granules or balls prepared from bulgur, white and brown flour, which are prepared manually at home, or bought ready-made. In some regions it is called maftoul, after rolling balls of bulgur and flour, and in some it is called Moroccan, referring to a connection to the Maghreb origin (couscous).</div><div class="mt-5">It is usually served on Eids and occasions, and some of the ingredients in its preparation differ according to different regions, but it is often served with chicken and sometimes meat, and vegetables that vary according to the region, and usually include pumpkin, onions, tomatoes, carrots, and chickpeas, which are cooked in meat broth and added, of course. Ain al-Jarada spices, onions, olive oil, salt and cumin add the special flavor that distinguishes maftool.<div class="mt-5">Its preparation varies from one country to another. In Palestine and Jordan, you find this dish, sometimes with squeezed tomatoes added to it, and sometimes peeled and chopped tomatoes. After twisting and forming the maftool, it is “steamed,” that is, cooked over boiling water steam, and it can be kept in the freezer until used.</div>',
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/cc2384e25f3c4d52be5abe779ef2ad9b.png?h=120&w=120",
      },
      {
        id: 2,
        name: "Onion",
        img: Onion,
      },
      {
        id: 3,
        name: "Garlic",
        img: Garlic,
      },
      {
        id: 4,
        name: "Chickpeas",
        img: Chickpeas,
      },
      // {
      //   id: 5,
      //   name: "Tomato",
      //   img: "https://cdn.tasteatlas.com/images/ingredientgroups/72ddcc5fa8d7439d9f190499aa559132.png?h=120&w=120",
      // },
      {
        id: 6,
        name: "Salt",
        img: Salt,
      },
      {
        id: 7,
        name: "Bulgur",
        img: Bulgur2,
      },
      {
        id: 8,
        name: "Olive Oils",
        img: OliveOil,
      },

    ],
    countries: [
      { name: "Jordan", code: "JO" },
      { name: "Syria", code: "SY" },
      { name: "Lebanon", code: "LB" },
    ],
  },
  {
    id: 30,
    name: "Grape leaves",
    img: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSRaE0xOFlIHewEP9ztk9ltimupJYh0QbYeo8H6HCW_lvDM8IX6JApD2Bz6ZIWr71mC',
    // place: "Tulkarm/Nour Shams camp",
    type: "RICE DISH",
    desc: "Grape leaves (or yabrak, or dawali leaves, or Lebanese areesh leaves, or dolma, or dulma, or ylangi, or cabbage) is a dish consisting of wrapped grape leaves and other plants stuffed with rice, vegetables, spices, sometimes meat, and others. The origin of this dish dates ...",
    fullDesc:
      '<div class="mt-5">Grape leaves (or yabrak, or dawali leaves, or Lebanese areesh leaves, or dolma, or dulma, or ylangi, or cabbage) is a dish consisting of wrapped grape leaves and other plants stuffed with rice, vegetables, spices, sometimes meat, and others. The origin of this dish dates back to the days of the Ottoman Empire, when grape leaves were stuffed with rice, spices, and minced meat. From there, it moved to other countries in the region, such as Syria, Lebanon, Jordan, Palestine, Iraq, Egypt, and to the Caucasus, the Balkans, and Greece.</div><div class="mt-5">Grape leaves are stuffed with vegetables (carrots, zucchini, potatoes, and peppers), rice, minced meat, seasonings, and spices, and cooked with red broth. However, in Egypt, they generally consist of grape leaves, cabbage, eggplant, or zucchini and are stuffed with rice mixture. As for Syria, Palestine, and Jordan, they are famous for serving two types of grape leaves: the first is the yabrak, which is stuffed with rice and meat, while the second is the yalanji, which is devoid of meat, so only rice and vegetables are used.</div>',
    ingredients: [
      {
        id: 1,
        name: "Lamb",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/6303dec1aa394f72b07b8bf7e4572177.png?h=120&w=120",
        isOr: "yes",
      },
      {
        id: 2,
        name: "Beef",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/3db7b6f60a934bc89f41a0c51acd08ac.png?h=120&w=120",
      },
      {
        id: 3,
        name: "Grape leaves",
        img: "https://cdn.tasteatlas.com//images/ingredientgroups/d513c688debe447ab21222e865ca9924.png?h=120&w=120",
      },
      {
        id: 4,
        name: "Rice",
        img: "https://cdn.tasteatlas.com/images/ingredientgroups/17d658e3b3964b849c47b9469c8e6465.png?h=120&w=120",
      },
      {
        id: 5,
        name: "Onion",
        img: Onion,
      },
      {
        id: 6,
        name: "Garlic",
        img: Garlic,
      },
      {
        id: 7,
        name: "Salt",
        img: Salt,
      },
    ],
    countries: [
      { name: 'Azerbaijan', code: 'AZ' },
      { name: "Turkey", code: "TR" },
      { name: "Jordan", code: "JO" },
      { name: "Syria", code: "SY" },
      { name: "Lebanon", code: "LB" },
      { name: "Iraq", code: "IQ" },
      { name: "Egypt", code: "EG" },
      { name: "Algeria", code: "DZ" },
      { name: "Libya", code: "LY" },
      { name: "Morocco", code: "MA" },
      { name: "Tunisia", code: "TN" },
      { name: "and most the arab world" },
    ],
  },
  // {
  //   id: 31,
  //   name: "Tabbouleh",
  //   img: 'https://static.webteb.net/images/content/tbl_articles_article_20832_781c0578c3e-fa55-4cf7-bb6b-3e3f8cbda6d2.jpg',
  //   type: "SALAD",
  //   desc: "Tabbouleh is a Levantine salad made mostly of finely chopped parsley, with tomatoes, mint, onion, soaked uncooked bulgur, and seasoned with olive oil, lemon juice, salt, and sweet pepper. Some variations add lettuce or use semolina instead of bulgur. Tabbouleh is traditionally ...",
  //   fullDesc:
  //     '<div class="mt-5">Tabbouleh is a Levantine salad made mostly of finely chopped parsley, with tomatoes, mint, onion, soaked uncooked bulgur, and seasoned with olive oil, lemon juice, salt, and sweet pepper. Some variations add lettuce or use semolina instead of bulgur.</div><div class="mt-5">Tabbouleh is traditionally served as part of a small dish in the Eastern Mediterranean and the Arab world. Like hummus, baba ghanoush, pita bread, and other elements of Arab cuisine, tabbouleh has become a popular food in the United States.</div><div class="mt-5">Edible herbs known as qaḍb formed an essential part of the Arab diet in the Middle Ages. Dishes like tabbouleh attest to their continued popularity in Middle Eastern cuisine today. Originally from the mountains of Lebanon and Syria, tabbouleh has become one of the most popular salads in the Middle East. The wheat variety salamouni cultivated in the Beqaa Valley region in Lebanon was considered (in the mid-19th century) as particularly well-suited for making bulgur, a basic ingredient of tabbouleh.</div>',
  //   ingredients: [
  //     {
  //       id: 1,
  //       name: "Rice Flour",
  //       img: "https://cdn.tasteatlas.com/images/ingredientgroups/42084d298fc7452f9d97fc64785e7fb6.png?h=120&w=120",
  //     },
  //     {
  //       id: 2,
  //       name: "Milk",
  //       img: "https://cdn.tasteatlas.com/images/ingredientgroups/32cfca5acc5c40ef8daecc359371a43e.png?h=120&w=120",
  //     },
  //     {
  //       id: 3,
  //       name: "Suger",
  //       img: "https://cdn.tasteatlas.com/images/ingredientgroups/ae857e2ec0504a6590b41c0000f6678c.png?h=120&w=120",
  //     },
  //     {
  //       id: 4,
  //       name: "Rose Water",
  //       img: "https://cdn.tasteatlas.com/images/ingredientgroups/e796f033c53745bf934c231bb17c0e1b.png?h=120&w=120",
  //     },
  //     {
  //       id: 5,
  //       name: "Cinnamon",
  //       img: "https://cdn.tasteatlas.com/images/ingredientgroups/bf4bc7a768a044549fcdcdadcb09f80b.png?h=120&w=120",
  //     },
  //     {
  //       id: 6,
  //       name: "Pistachios",
  //       img: "https://cdn.tasteatlas.com/images/ingredientgroups/c0084d87b3e6428a97e3a1585f3c03c4.png?h=120&w=120",
  //     },
  //   ],
  //   countries: [
  //     { name: "Lebanon", code: "LB" },
  //     { name: "Jordan", code: "JO" },
  //     { name: "Syria", code: "SY" },
  //   ],
  // },
]);
