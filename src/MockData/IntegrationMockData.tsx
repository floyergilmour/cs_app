import React from 'react';
import fortnox from '/Users/donnyho/code/cs_app/src/Assets/fortnox.jpeg';
import dynamics from '/Users/donnyho/code/cs_app/src/Assets/dynamics_365.jpeg';
import visma from '/Users/donnyho/code/cs_app/src/Assets/visma.webp';
import bokio from '/Users/donnyho/code/cs_app/src/Assets/bokio.png';

import acconomy from '/Users/donnyho/code/cs_app/src/Assets/acconomy.webp';
import dooer from '/Users/donnyho/code/cs_app/src/Assets/dooer.jpg';
import enkelbok from '/Users/donnyho/code/cs_app/src/Assets/enkelbok.jpg';
import {ErpSystems} from "./ErpSystems";


;


export const Systems: Array<ErpSystems> = [
  {
    name: "Fortnox",
    description: "Paketlösningar för ett framgångsrikt företagande",
    image_source: fortnox,
    available: true
  },
  {
    name: "Microsoft Dynamics 365",
    description: "Dynamics 365 is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences enabling businesses to become more agile and reduce complexity without increasing costs.",
    image_source: dynamics,
    available: true
  },
  {
    name: "Visma",
    description: "Ekonomisystem för din passion\n",
    image_source: visma,
    available: false
  },
  {
    name: "Bokio",
    description: "Gör bokslut och årsredovisning digitalt med Bokio",
    image_source: bokio,
    available: false
  },

  {
    name: "Acconomy",
    description: "Bokföring och fakturering i samma system",
    image_source: acconomy,
    available: false
  },
  {
    name: "Dooer",
    description: "Gratis bokföringsprogram. Hantera din bokföring, fakturering och lön på ett ställe. Designat för dig som företagare, kraftfullt, enkelt och gratis.",
    image_source: dooer,
    available: false
  },
  {
    name: "Enkelbok",
    description: "Hantera din bokföring, fakturering och lön online. Enkelt och gratis stöd för ditt företag.\n",
    image_source: enkelbok,
    available: false
  },
];
