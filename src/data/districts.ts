export type DistrictLanding = {
  slug: string;
  name: string;
  intro: string;
  description: string;
  services: string[];
  locations: string[];
};

export const warsawDistricts: DistrictLanding[] = [
  {
    slug: "bialoleka",
    name: "Białołęka",
    intro:
      "Organizujemy urodziny i wydarzenia rodzinne na Białołęce – dojeżdżamy do domów jednorodzinnych, osiedlowych klubów mieszkańca oraz sal zabaw.",
    description:
      "Animatorzy Świata Wrażeń prowadzą urodziny tematyczne, warsztaty kreatywne i zabawy ruchowe w przedszkolach oraz szkołach podstawowych tej dzielnicy. Gwarantujemy dojazd wraz ze sprzętem muzycznym i kompletem rekwizytów.",
    services: [
      "Urodziny domowe i w ogródku",
      "Warsztaty kreatywne w świetlicach",
      "Animacje na festynach szkolnych",
      "Mini pokazy baniek i fluo party",
    ],
    locations: ["dom jednorodzinny", "sala zabaw na Tarchominie", "przedszkole", "klub mieszkańca"],
  },
  {
    slug: "mokotow",
    name: "Mokotów",
    intro:
      "Na Mokotowie wspieramy mieszkańców w organizacji eleganckich przyjęć w mieszkaniach, ogródkach i kameralnych salach przy ul. Puławskiej czy w okolicach Królikarni.",
    description:
      "Przywozimy dekoracje startowe, zestawy nagłośnienia i rekwizyty do zabaw, aby wydarzenie było gotowe w ciągu kilkunastu minut. Animatorzy pracują po polsku i angielsku, dlatego świetnie sprawdzają się także w przedszkolach międzynarodowych.",
    services: [
      "Animacje tematyczne z kostiumami",
      "Candy bar i dekoracje balonowe",
      "Oprawa przyjęć w restauracjach",
      "Strefa kids corner na eventach firmowych",
    ],
    locations: ["apartament", "ogród na Sadybie", "restauracja", "przedszkole międzynarodowe"],
  },
  {
    slug: "ursynow",
    name: "Ursynów",
    intro:
      "Na Ursynowie realizujemy animacje w popularnych salach zabaw, klubach osiedlowych oraz na plenerowych piknikach rodzinnych.",
    description:
      "Najczęściej obsługujemy wydarzenia przy metrze Natolin i Kabaty, ale docieramy też do szkół i przedszkoli w całej dzielnicy. Każdy scenariusz dopasowujemy do wieku dzieci i wielkości przestrzeni.",
    services: [
      "Pakiety urodzinowe Standard i Premium",
      "Animacje sportowe na orlikach",
      "Pokazy baniek XXL",
      "Warsztaty z malowania fluorescencyjnego",
    ],
    locations: ["sala zabaw", "klub osiedlowy", "przedszkole publiczne", "wydarzenie plenerowe"],
  },
  {
    slug: "wola",
    name: "Wola",
    intro:
      "Dla rodzin z Woli tworzymy mobilne strefy zabaw, które świetnie sprawdzają się w mieszkaniach w nowych apartamentowcach oraz podczas wydarzeń w biurowcach na rondzie Daszyńskiego.",
    description:
      "Zapewniamy kompleksową obsługę: od animacji przez dekoracje po koordynację tortu. Dzięki doświadczonym animatorom utrzymujemy porządek nawet przy większych grupach.",
    services: [
      "Animacje w języku polskim i angielskim",
      "Strefy kreatywne na eventach biurowych",
      "Balonowe dekoracje loftowe",
      "Mini warsztaty chemiczne",
    ],
    locations: ["apartamentowiec", "biurowiec", "przedszkole prywatne", "salka osiedlowa"],
  },
  {
    slug: "zoliborz",
    name: "Żoliborz",
    intro:
      "Na Żoliborzu obsługujemy kameralne przyjęcia w klimatycznych przestrzeniach, kawiarniach rodzinnych i ogrodach domów szeregowych.",
    description:
      "Animatorzy dbają o subtelny charakter zabaw, łącząc ruch z warsztatami artystycznymi. Zapewniamy również mobilne nagłośnienie dopasowane do mniejszych przestrzeni.",
    services: [
      "Warsztaty artystyczne i sensoryczne",
      "Kąciki zabaw podczas chrzcin i komunii",
      "Animatorzy w kostiumach bajkowych",
      "Koordynacja tortu i ceremonii świeczek",
    ],
    locations: ["kawiarnia rodzinna", "ogród", "dom szeregowy", "sala parafialna"],
  },
];
