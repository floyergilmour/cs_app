import React from 'react';
import {IErpSystems} from "./IErpSystems";



export const Systems: Array<IErpSystems> = [
  {
    name: "Fortnox",
    description: "Paketlösningar för ett framgångsrikt företagande",
    image_source: 'Assets/fortnox.jpeg',
    available: true
  },
  {
    name: "Microsoft Dynamics 365",
    description: "Dynamics 365 is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'Assets/dynamics_365.jpeg',
    available: true
  },
  {
    name: "Visma",
    description: "Ekonomisystem för din passion",
    image_source: 'Assets/visma.webp',
    available: false
  },
  {
    name: "Bokio",
    description: "Gör bokslut och årsredovisning digitalt med Bokio",
    image_source: 'Assets/bokio.png',
    available: false
  },

  {
    name: "Acconomy",
    description: "Bokföring och fakturering i samma system",
    image_source: 'Assets/acconomy.webp',
    available: false
  },
  {
    name: "Dooer",
    description: "Gratis bokföringsprogram. Hantera din bokföring, fakturering och lön på ett ställe. Designat för dig som företagare, kraftfullt, enkelt och gratis.",
    image_source: 'Assets/dooer.jpg',
    available: false
  },
  {
    name: "Enkelbok",
    description: "Hantera din bokföring, fakturering och lön online. Enkelt och gratis stöd för ditt företag.",
    image_source: 'Assets/enkelbok.jpg',
    available: false
  },
];
