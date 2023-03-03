import React from 'react';
import pizza_img from '/Users/donnyho/code/cs_app/src/Assets/pizza_bolognese.jpg';
import margherita_img from '/Users/donnyho/code/cs_app/src/Assets/margherita.webp';
import diavola_img from '/Users/donnyho/code/cs_app/src/Assets/diavola.jpg';
import burrata_pesto_di_pistachi_img from '/Users/donnyho/code/cs_app/src/Assets/Pizza-con-mortadella-burrata-e-pesto-di-pistacchi.jpg';


const url = 'http://localhost:3000'; 
export interface Pizza {
  name: string;
  description: string;
  image_source: string;
  price: number
};


export const Pizzas: Array<Pizza> = [{
  name: "Margherita",
  description: "Pizza Margherita is a typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.",
  image_source: margherita_img,
  price: 10.00
},
{

  name: "Napoletana",
  description: "Neapolitan pizza, also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese. The tomatoes must be either San Marzano tomatoes or Pomodorino del Piennolo del Vesuvio, which grow on the volcanic plains to the south of Mount Vesuvius.",
  image_source: pizza_img,
  price: 11.90
},
{

  name: "Diavola",
  description: "The Diavola is also known under the name Diavolo. The name means devil pizza.",
  image_source: diavola_img,
  price: 13.50
},
{

  name: "Mortadella, burrata e pesto di pistacchi",
  description: "Pizza with mortadella, burrata, and pistachios, the pizza of all pizzas hosting some pretty amazing Italian favorite ingredients. A beautiful thin crisp crust meets melted mozzarella and yellow date tomatoes, topped with fresh mortadella, strands of burrata, and crushed pistachios. The end result, simply exquisite.",
  image_source: burrata_pesto_di_pistachi_img,
  price: 15.90
}
];
