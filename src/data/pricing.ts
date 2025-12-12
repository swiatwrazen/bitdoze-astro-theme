export type PricePackage = {
  id: string;
  name: string;
  duration: string;
  maxChildren: string;
  price: string;
  description?: string;
  features: string[];
  bestFor?: string;
};

export type Addon = {
  id: string;
  name: string;
  description: string;
  price: string;
};

export type Scenario = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
};

export const pricePackages: PricePackage[] = [
  {
    id: "birthday-standard",
    name: "Pakiet Urodzinowy Standard",
    duration: "90 minut animacji",
    maxChildren: "do 12 dzieci",
    price: "od 650 zł",
    description: "Najczęściej wybierany zestaw na domowe urodziny z grami ruchowymi i oprawą muzyczną.",
    features: ["Animacje ruchowe i konkursy", "Oprawa muzyczna i mikrofon", "Podanie tortu i życzeń", "Mini warsztaty plastyczne"],
    bestFor: "Urodziny w domu lub ogrodzie",
  },
  {
    id: "birthday-premium",
    name: "Pakiet Tematyczny Premium",
    duration: "120 minut animacji",
    maxChildren: "do 18 dzieci",
    price: "od 890 zł",
    description: "Rozszerzony program z kostiumami, dekoracjami startowymi i dodatkowymi atrakcjami tematycznymi.",
    features: ["2 animatorów w kostiumach", "Zabawy tematyczne z rekwizytami", "Mini pokaz baniek lub taniec z chustą", "Gry zespołowe z nagrodami"],
    bestFor: "Sale zabaw i większe grupy",
  },
  {
    id: "express",
    name: "Pakiet Express",
    duration: "60 minut animacji",
    maxChildren: "do 10 dzieci",
    price: "od 550 zł",
    description: "Szybki scenariusz na mniejsze wydarzenia lub wstęp do większego programu.",
    features: ["1 doświadczony animator", "Energetyczne zabawy i konkursy", "Zestaw muzyczny i nagłośnienie", "Upominki dla dzieci"],
    bestFor: "Małe przyjęcia lub eventy w przedszkolu",
  },
  {
    id: "event-maxi",
    name: "Event Maxi",
    duration: "150 minut animacji",
    maxChildren: "do 25 dzieci",
    price: "od 1290 zł",
    description: "Kompleksowy pakiet na pikniki i eventy firmowe z modułami na scenę oraz strefą warsztatową.",
    features: ["2 animatorów + asystent", "Program sceniczny i strefy aktywności", "Prowadzenie konkursów z nagrodami", "Koordynacja harmonogramu"],
    bestFor: "Pikniki firmowe i szkolne festyny",
  },
];

export const addons: Addon[] = [
  {
    id: "extra-animator",
    name: "Dodatkowy animator",
    description: "Idealny przy większej liczbie dzieci lub wymagających motywach. Pozwala prowadzić równoległe strefy zabaw.",
    price: "od 250 zł / godz.",
  },
  {
    id: "face-painting",
    name: "Malowanie twarzy",
    description: "Profesjonalne farby i stanowisko tematyczne. Świetny dodatek do bajkowych urodzin i eventów plenerowych.",
    price: "od 320 zł",
  },
  {
    id: "bubble-show",
    name: "Gigantyczne bańki mydlane",
    description: "Pokaz dużych baniek oraz interaktywna strefa, w której dzieci same tworzą bańkowe tunele.",
    price: "od 280 zł",
  },
  {
    id: "balloon-decor",
    name: "Dekoracje balonowe",
    description: "Łuki, kolumny oraz personalizowane bukiety balonowe dopasowane do motywu przewodniego.",
    price: "od 350 zł",
  },
  {
    id: "cotton-candy",
    name: "Wata cukrowa",
    description: "Stanowisko z obsługą i zapasem smaków – słodka atrakcja, która zachwyci dzieci i dorosłych.",
    price: "od 290 zł / godz.",
  },
];

export const exampleScenarios: Scenario[] = [
  {
    id: "superhero",
    title: "Superbohaterska misja",
    description: "Dwugodzinny plan, w którym dzieci przechodzą trening bohaterów, rozwiązują zagadki i zdobywają odznaki odwagi.",
    highlights: ["2 animatorów w kostiumach", "Tor przeszkód i szkolenie mocy", "Ceremonia wręczenia medali"],
  },
  {
    id: "color-party",
    title: "Kolorowe Fluo Party",
    description: "Impreza z efektami UV, tańcem i mini warsztatami malowania fluorescencyjnego. Idealna dla starszych dzieci.",
    highlights: ["Zestaw oświetlenia UV i dekoracji", "Warsztat glow-in-the-dark", "Pokaz baniek + konkurs taneczny"],
  },
];
