import { Architect } from '../types/architecture';
import { VERIFIED_ARCHIVE_PHOTOS } from '../utils/architecturalPlate';

export const ARCHITECTS_DATA: Architect[] = [
  {
    id: 'leandro-v-locsin',
    slug: 'leandro-v-locsin',
    archiveCode: 'ARCH-01',
    name: 'Leandro V. Locsin',
    birthYear: 1928,
    deathYear: 1994,
    activePeriod: '1955-1994',
    nationality: 'Filipino',
    nationalArtistYear: 1990,
    recognition: 'National Artist of the Philippines for Architecture (1990)',
    biography:
      'Born on August 15, 1928, in Silay, Negros Occidental, Leandro Valencia Locsin studied music at the University of Santo Tomas Conservatory before shifting to architecture, graduating in 1953. Over four decades, he designed 75 residences, 88 buildings, 11 churches and chapels, and the monumental Cultural Center of the Philippines (CCP) complex. Proclaimed National Artist for Architecture in 1990 by President Corazon C. Aquino, Locsin synthesized international Brutalism with the buoyancy and spatial ethos of the traditional Filipino nipa hut.',
    architecturalApproach:
      'Locsin is celebrated for the "floating volume"—the paradox of heavy, bush-hammered concrete and crushed shell aggregate appearing to hover effortlessly above recessed podiums and reflecting pools. His work translates vernacular elevated floors, wide overhangs, and indoor-outdoor breezeways into monumental civic concrete.',
    majorWorks: [
      {
        buildingId: 'ccp-main-building',
        title: 'Cultural Center of the Philippines Main Building (Tanghalang Pambansa)',
        year: '1969',
        location: 'Pasay City, Metro Manila',
      },
      {
        buildingId: 'parish-of-the-holy-sacrifice',
        title: 'Parish of the Holy Sacrifice (UP Diliman)',
        year: '1955',
        location: 'Quezon City, Metro Manila',
      },
      {
        buildingId: 'picc-manila',
        title: 'Philippine International Convention Center (PICC)',
        year: '1976',
        location: 'Pasay City, Metro Manila',
      },
      {
        title: 'Istana Nurul Iman (Royal Palace of Brunei)',
        year: '1984',
        location: 'Bandar Seri Begawan, Brunei',
      },
      {
        title: 'National Arts Center (Mount Makiling)',
        year: '1976',
        location: 'Los Baños, Laguna',
      },
    ],
    timeline: [
      { year: '1928', event: 'Born in Silay, Negros Occidental on August 15.' },
      { year: '1953', event: 'Graduated with a Bachelor of Science in Architecture from the University of Santo Tomas.' },
      { year: '1955', event: 'Completed the circular thin-shell concrete Parish of the Holy Sacrifice at UP Diliman at age 27.' },
      { year: '1969', event: 'Inauguration of the Cultural Center of the Philippines Main Building (Tanghalang Pambansa).' },
      { year: '1976', event: 'Completed the Philippine International Convention Center (PICC), Asia\'s first international convention center.' },
      { year: '1990', event: 'Proclaimed National Artist of the Philippines for Architecture.' },
      { year: '1994', event: 'Passed away in Makati on November 15.' },
    ],
    images: [
      {
        url: VERIFIED_ARCHIVE_PHOTOS.ccpMainBuilding,
        caption: 'Tanghalang Pambansa (CCP Main Building, 1969), Leandro V. Locsin\'s signature cantilevered Brutalist masterpiece.',
        alt: 'Cultural Center of the Philippines Main Building designed by Leandro V. Locsin',
        credit: 'Photo by Nixenzo (CC BY-SA 3.0, Wikimedia Commons) · Architect: Leandro V. Locsin',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cultural_Center_Philippines_TP.jpg',
      },
      {
        url: VERIFIED_ARCHIVE_PHOTOS.parishOfTheHolySacrifice,
        caption: 'Parish of the Holy Sacrifice (1955), UP Diliman — thin-shell concrete dome by Leandro V. Locsin.',
        alt: 'Parish of the Holy Sacrifice at UP Diliman designed by Leandro V. Locsin',
        credit: 'Photo by Allan Jay Quesada (CC BY-SA 3.0, Wikimedia Commons) · Architect: Leandro V. Locsin',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Allan_Jay_Quesada-_DSC_3670_Parish_of_the_Holy_Sacrifice,_UP,_Diliman,_Quezon_City.JPG',
      },
    ],
    sources: [
      {
        title: 'NCCA — Order of National Artists: Leandro V. Locsin',
        url: 'https://ncca.gov.ph/about-culture-and-arts/culture-profile/national-artists-of-the-philippines/leandro-v-locsin/',
        category: 'Government',
        institution: 'National Commission for Culture and the Arts (NCCA)',
      },
      {
        title: 'Cultural Center of the Philippines — Architecture & History',
        url: 'https://culturalcenter.gov.ph/',
        category: 'Cultural Institutions',
        institution: 'Cultural Center of the Philippines',
      },
    ],
  },
  {
    id: 'juan-f-nakpil',
    slug: 'juan-f-nakpil',
    archiveCode: 'ARCH-02',
    name: 'Juan F. Nakpil',
    birthYear: 1899,
    deathYear: 1986,
    activePeriod: '1926-1975',
    nationality: 'Filipino',
    nationalArtistYear: 1973,
    recognition: 'First National Artist of the Philippines for Architecture (1973)',
    biography:
      'Born on May 26, 1899, in Quiapo, Manila, to composers Julio Nakpil and Gregoria de Jesús (widow of Andres Bonifacio), Juan Felipe de Jesús Nakpil studied engineering at the University of the Philippines before earning a degree in architecture at the Fontainebleau School of Fine Arts in France and a Master of Architecture at Harvard University (1926). In 1973, he was named the Philippines\' very first National Artist for Architecture.',
    architecturalApproach:
      'Nakpil championed the belief that there is a distinctively Philippine architecture reflecting Filipino traditions, climate, and natural environment. His buildings—ranging from Art Deco theaters and streamline hospitals to postwar university halls—integrated cantilevered sun-breakers, high-ceilinged cross-ventilation, and local motifs.',
    majorWorks: [
      {
        buildingId: 'quezon-institute',
        title: 'Quezon Institute Main Building',
        year: '1938',
        location: 'Quezon City, Metro Manila',
      },
      {
        buildingId: 'up-quezon-hall',
        title: 'Quezon Hall (UP Diliman Administration Building)',
        year: '1950',
        location: 'Quezon City, Metro Manila',
      },
      {
        title: 'Gonzalez Hall (UP Diliman Main Library)',
        year: '1950',
        location: 'Quezon City, Metro Manila',
      },
      {
        title: 'Capitol Theater (Escolta)',
        year: '1935',
        location: 'Binondo, Manila',
      },
      {
        title: 'Minor Basilica of the Black Nazarene (Quiapo Church Postwar Reconstruction & Dome)',
        year: '1933 / 1954',
        location: 'Quiapo, Manila',
      },
    ],
    timeline: [
      { year: '1899', event: 'Born in Quiapo, Manila on May 26.' },
      { year: '1926', event: 'Earned Master of Architecture from Harvard University under a fellowship.' },
      { year: '1935', event: 'Designed the Art Deco Capitol Theater on Escolta Street with relief sculptures by Francesco Monti.' },
      { year: '1938', event: 'Completed the Art Deco Quezon Institute Complex in Quezon City.' },
      { year: '1950', event: 'Designed Quezon Hall and Gonzalez Hall for the new UP Diliman campus.' },
      { year: '1973', event: 'Proclaimed the first National Artist of the Philippines for Architecture.' },
      { year: '1986', event: 'Passed away in Manila on May 7.' },
    ],
    images: [
      {
        url: VERIFIED_ARCHIVE_PHOTOS.archJuanNakpil,
        caption: 'Official National Commission for Culture and the Arts (NCCA) portrait of National Artist Juan F. Nakpil (1899-1986).',
        alt: 'Official portrait of National Artist Juan F. Nakpil',
        credit: 'Photo by National Commission for Culture and the Arts (NCCA) · Public Domain',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Juan_Nakpil_National_Artist.jpg',
      },
      {
        url: VERIFIED_ARCHIVE_PHOTOS.upQuezonHall,
        caption: 'Quezon Hall at the University of the Philippines Diliman (1950), designed by Juan F. Nakpil.',
        alt: 'Quezon Hall at UP Diliman designed by Juan F. Nakpil',
        credit: 'Photo by Ramon F. Velasquez (CC BY-SA 3.0, Wikimedia Commons) · Architect: Juan F. Nakpil',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:UP_Diliman_Quezon_Hall.jpg',
      },
    ],
    sources: [
      {
        title: 'NCCA — Order of National Artists: Juan F. Nakpil',
        url: 'https://ncca.gov.ph/about-culture-and-arts/culture-profile/national-artists-of-the-philippines/juan-f-nakpil/',
        category: 'Government',
        institution: 'National Commission for Culture and the Arts (NCCA)',
      },
    ],
  },
  {
    id: 'pablo-s-antonio',
    slug: 'pablo-s-antonio',
    archiveCode: 'ARCH-03',
    name: 'Pablo S. Antonio',
    birthYear: 1901,
    deathYear: 1975,
    activePeriod: '1932-1975',
    nationality: 'Filipino',
    nationalArtistYear: 1976,
    recognition: 'National Artist of the Philippines for Architecture (1976)',
    biography:
      'Born in Binondo, Manila on January 25, 1901, Pablo Sebero Antonio worked as a draftsman at the Bureau of Public Works while studying night classes before completing his architecture degree at the University of London in three years (1927-1929). Returning to Manila, he became the foremost pioneer of Modern Philippine Architecture and Streamline Art Deco. He was posthumously conferred the Order of National Artists in 1976.',
    architecturalApproach:
      'Antonio famously declared that "buildings should be planned with austerity in mind and its stability forever as the aim of true architecture." He rejected pasted neoclassical ornament in favor of clean lines, functional massing, vertical concrete sun-fins, and natural daylighting calibrated for Manila\'s tropical glare.',
    majorWorks: [
      {
        buildingId: 'feu-nicanor-reyes-hall',
        title: 'Far Eastern University (FEU) Nicanor Reyes Hall & Campus Complex',
        year: '1939',
        location: 'Sampaloc, Manila',
      },
      {
        title: 'Ideal Theater',
        year: '1933',
        location: 'Avenida Rizal, Manila',
      },
      {
        title: 'Bel-Air Alhambra Apartments (Syquia Apartments)',
        year: '1937',
        location: 'Malate, Manila',
      },
      {
        title: 'Manila Polo Club Main Pavilion',
        year: '1950',
        location: 'Forbes Park, Makati',
      },
      {
        title: 'Galaxy Theater',
        year: '1950',
        location: 'Rizal Avenue, Manila',
      },
    ],
    timeline: [
      { year: '1901', event: 'Born in Binondo, Manila on January 25.' },
      { year: '1929', event: 'Graduated from the University of London with a degree in Architecture.' },
      { year: '1932', event: 'Passed the Philippine Architect Licensure Examination (Reg. No. 36).' },
      { year: '1933', event: 'Breakthrough commission for the Art Deco Ideal Theater on Avenida Rizal.' },
      { year: '1939', event: 'Completed Nicanor Reyes Hall, centerpiece of the Far Eastern University Art Deco campus.' },
      { year: '1975', event: 'Passed away on June 14.' },
      { year: '1976', event: 'Posthumously proclaimed National Artist of the Philippines for Architecture.' },
    ],
    images: [
      {
        url: VERIFIED_ARCHIVE_PHOTOS.archPabloAntonio,
        caption: 'Official National Commission for Culture and the Arts (NCCA) portrait of National Artist Pablo S. Antonio (1901-1975).',
        alt: 'Official portrait of National Artist Pablo S. Antonio',
        credit: 'Photo by National Commission for Culture and the Arts (NCCA) · Public Domain',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pablo_Antonio_Order_of_National_Artists_(cropped).jpg',
      },
      {
        url: VERIFIED_ARCHIVE_PHOTOS.nicanorReyesHallFeu,
        caption: 'Nicanor Reyes Hall (1939) at Far Eastern University, Manila — Streamline Art Deco landmark by Pablo S. Antonio.',
        alt: 'Nicanor Reyes Hall at Far Eastern University designed by Pablo S. Antonio',
        credit: 'Photo by Arvzk3n (CC BY-SA 3.0, Wikimedia Commons) · Architect: Pablo S. Antonio',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:FEU_Nicanor_Reyes_Hall.jpg',
      },
    ],
    sources: [
      {
        title: 'NCCA — Order of National Artists: Pablo S. Antonio',
        url: 'https://ncca.gov.ph/about-culture-and-arts/culture-profile/national-artists-of-the-philippines/pablo-s-antonio/',
        category: 'Government',
        institution: 'National Commission for Culture and the Arts (NCCA)',
      },
    ],
  },
  {
    id: 'francisco-bobby-manosa',
    slug: 'francisco-bobby-manosa',
    archiveCode: 'ARCH-04',
    name: 'Francisco "Bobby" T. Mañosa',
    birthYear: 1931,
    deathYear: 2019,
    activePeriod: '1955-2015',
    nationality: 'Filipino',
    nationalArtistYear: 2018,
    recognition: 'National Artist of the Philippines for Architecture and Allied Arts (2018)',
    biography:
      'Born in Manila on February 12, 1931, Francisco "Bobby" Tronqued Mañosa graduated in architecture from the University of Santo Tomas in 1953. Beginning with the Mañosa Brothers firm alongside his brothers Manuel Jr. and Jose, and later leading Francisco Mañosa & Partners, he devoted his career to championing "Philippine Architecture for Filipinos." He was proclaimed National Artist for Architecture and Allied Arts in 2018.',
    architecturalApproach:
      'Mañosa pioneered Neo-Vernacular Philippine architecture: combining modern structural engineering with the passive cooling geometry of the bahay kubo and bahay na bato, steeply pitched roofs, outward-sloping tukod walls, and indigenous materials such as coconut lumber, bamboo, rattan, capiz shell, and volcanic stone.',
    majorWorks: [
      {
        buildingId: 'coconut-palace',
        title: 'Coconut Palace (Tahanang Pilipino)',
        year: '1978',
        location: 'CCP Complex, Pasay City',
      },
      {
        buildingId: 'san-miguel-head-office',
        title: 'San Miguel Corporation Head Office Complex (with Mañosa Brothers & I.P. Santos)',
        year: '1984',
        location: 'Ortigas Center, Mandaluyong City',
      },
      {
        title: 'EDSA Shrine (Shrine of Mary, Queen of Peace)',
        year: '1989',
        location: 'Ortigas, Quezon City',
      },
      {
        title: 'Amanpulo Resort Pavilions',
        year: '1993',
        location: 'Pamalican Island, Palawan',
      },
      {
        title: 'Mary Immaculate Parish ("Nature Church")',
        year: '1990',
        location: 'Moonwalk Village, Las Piñas City',
      },
    ],
    timeline: [
      { year: '1931', event: 'Born in Manila on February 12.' },
      { year: '1953', event: 'Earned Bachelor of Science in Architecture from the University of Santo Tomas.' },
      { year: '1960', event: 'Co-designed the Sulo Restaurant in Makati with the Mañosa Brothers, an early neo-vernacular landmark.' },
      { year: '1978', event: 'Completed the Coconut Palace (Tahanang Pilipino) showcasing engineered coconut wood.' },
      { year: '1984', event: 'Completed the rice-terrace-inspired San Miguel Corporation Head Office Complex in Ortigas.' },
      { year: '1989', event: 'Designed the EDSA Shrine commemorating the 1986 People Power Revolution.' },
      { year: '2018', event: 'Proclaimed National Artist of the Philippines for Architecture and Allied Arts.' },
      { year: '2019', event: 'Passed away in Muntinlupa on February 20.' },
    ],
    images: [
      {
        url: VERIFIED_ARCHIVE_PHOTOS.archFranciscoManosa,
        caption: 'Portrait of National Artist Francisco "Bobby" T. Mañosa (1931-2019), father of Philippine Neo-Vernacular architecture.',
        alt: 'Portrait of National Artist Francisco Bobby Mañosa',
        credit: 'Photo by Martin Mañosa / Martinmanosa (CC BY-SA 4.0, Wikimedia Commons)',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Francisco_Ma%C3%B1osa_(cropped).jpg',
      },
      {
        url: VERIFIED_ARCHIVE_PHOTOS.coconutPalace,
        caption: 'The Coconut Palace (Tahanang Pilipino, 1978), Francisco Mañosa\'s landmark neo-vernacular pavilion.',
        alt: 'Coconut Palace designed by Francisco Bobby Mañosa',
        credit: 'Photo by Patrick Roque / Patrickroque01 (CC BY-SA 4.0, Wikimedia Commons) · Architect: Francisco T. Mañosa',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Coconut_Palace_(CCP_Complex,_Pasay;_12-13-2020).jpg',
      },
    ],
    sources: [
      {
        title: 'NCCA — Order of National Artists: Francisco T. Mañosa',
        url: 'https://ncca.gov.ph/about-culture-and-arts/culture-profile/national-artists-of-the-philippines/francisco-manosa/',
        category: 'Government',
        institution: 'National Commission for Culture and the Arts (NCCA)',
      },
    ],
  },
  {
    id: 'juan-m-arellano',
    slug: 'juan-m-arellano',
    archiveCode: 'ARCH-05',
    name: 'Juan M. Arellano',
    birthYear: 1888,
    deathYear: 1960,
    activePeriod: '1913-1956',
    nationality: 'Filipino',
    nationalArtistYear: null,
    recognition: 'Consulting Architect, Bureau of Public Works & Pioneer of Philippine Civic & Art Deco Architecture',
    biography:
      'Born on April 25, 1888, in Tondo, Manila, Juan Marcos Arellano initially trained as an impressionist painter under Lorenzo Guerrero and Fabian de la Rosa before being sent to the United States as one of the first pensionados in architecture. He graduated from the Drexel Institute in 1911, trained at the Beaux-Arts School in New York and under Paul Philippe Cret at the University of Pennsylvania, and returned to the Philippines to become Supervising and Consulting Architect of the Bureau of Public Works.',
    architecturalApproach:
      'Arellano mastered two distinct idioms: grand Beaux-Arts Neoclassicism for national civic institutions (Manila Central Post Office, Legislative Building) and an exuberantly tropicalized Art Deco (Manila Metropolitan Theater) that wove mango blossoms, banana fronds, and batik geometry into stained glass and polychrome terra-cotta.',
    majorWorks: [
      {
        buildingId: 'manila-central-post-office',
        title: 'Manila Central Post Office Building (with Tomás Mapúa)',
        year: '1926',
        location: 'Ermita, Manila',
      },
      {
        buildingId: 'manila-metropolitan-theater',
        title: 'Manila Metropolitan Theater',
        year: '1931',
        location: 'Ermita, Manila',
      },
      {
        title: 'Legislative Building (now National Museum of Fine Arts, with Ralph Doane & Antonio Toledo)',
        year: '1926',
        location: 'Ermita, Manila',
      },
      {
        title: 'Negros Occidental Provincial Capitol',
        year: '1933',
        location: 'Bacolod City, Negros Occidental',
      },
      {
        title: 'Jones Bridge (Neoclassical First Span)',
        year: '1919',
        location: 'Binondo-Ermita, Manila',
      },
    ],
    timeline: [
      { year: '1888', event: 'Born in Tondo, Manila on April 25.' },
      { year: '1911', event: 'Graduated in Architecture from the Drexel Institute in Philadelphia as a government pensionado.' },
      { year: '1926', event: 'Completed the neoclassical Manila Central Post Office and Legislative Building.' },
      { year: '1931', event: 'Inaugurated the Art Deco Manila Metropolitan Theater ("The Grand Dame").' },
      { year: '1940', event: 'Prepared the Frost-Arellano Master Plan for Quezon City with Harry T. Frost, A.D. Williams, and Louis P. Croft.' },
      { year: '1960', event: 'Passed away in Manila on December 5.' },
    ],
    images: [
      {
        url: VERIFIED_ARCHIVE_PHOTOS.archJuanArellano,
        caption: 'Historical archival portrait of Architect Juan M. Arellano (1888-1960), Consulting Architect of the Bureau of Public Works.',
        alt: 'Archival portrait of Architect Juan M. Arellano',
        credit: 'Photo from Bureau of Public Works / Arkitekturang Filipino Archive (Public Domain, Wikimedia Commons)',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Juan_Arellano_portrait.jpg',
      },
      {
        url: VERIFIED_ARCHIVE_PHOTOS.manilaMetropolitanTheater,
        caption: 'The Manila Metropolitan Theater (1931), Juan M. Arellano\'s tropical Art Deco masterpiece.',
        alt: 'Manila Metropolitan Theater designed by Juan M. Arellano',
        credit: 'Photo by GRMondala (CC BY-SA 4.0, Wikimedia Commons) · Architect: Juan M. Arellano',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:GRMondala_Manila_Metropolitan_Theater.jpg',
      },
    ],
    sources: [
      {
        title: 'National Museum of the Philippines — Architectural Heritage of the National Museum Complex',
        url: 'https://www.nationalmuseum.gov.ph/',
        category: 'Cultural Institutions',
        institution: 'National Museum of the Philippines',
      },
    ],
  },
  {
    id: 'jose-maria-zaragoza',
    slug: 'jose-maria-zaragoza',
    archiveCode: 'ARCH-06',
    name: 'Jose María V. Zaragoza',
    birthYear: 1912,
    deathYear: 1994,
    activePeriod: '1938-1994',
    nationality: 'Filipino',
    nationalArtistYear: 2014,
    recognition: 'National Artist of the Philippines for Architecture (2014)',
    biography:
      'Born on December 6, 1912, in Quiapo, Manila, Jose María Velez Zaragoza graduated from the University of Santo Tomas in 1936 and placed 7th in the 1938 licensure exam, becoming the 82nd registered architect of the Philippines. Invited to Brazil by Oscar Niemeyer and Lúcio Costa, he absorbed Latin American modern concrete plasticism and liturgical renewal. He designed 36 office buildings, 45 churches, and hundreds of residences, and was posthumously proclaimed National Artist for Architecture in 2014.',
    architecturalApproach:
      'Zaragoza fused Hispanic-Filipino ecclesiastical heritage with expressive Mid-Century Modernism and tropical brise-soleil engineering, seen in the clean modernized Spanish Mission lines of Santo Domingo Church and the sweeping concave concrete sun-louvers of the Meralco Building.',
    majorWorks: [
      {
        buildingId: 'santo-domingo-church-qc',
        title: 'Santo Domingo Church & Convent',
        year: '1954',
        location: 'Quezon City, Metro Manila',
      },
      {
        buildingId: 'meralco-building-ortigas',
        title: 'Meralco Building (Lopez Building)',
        year: '1968',
        location: 'Ortigas Center, Pasig City',
      },
      {
        title: 'Union Church of Manila (Original Modernist Edifice)',
        year: '1975',
        location: 'Legazpi Village, Makati',
      },
      {
        title: 'National Shrine of Our Lady of the Miraculous Medal',
        year: '1980',
        location: 'Sucat, Muntinlupa',
      },
      {
        title: 'Commercial Bank and Trust Company Building',
        year: '1969',
        location: 'Escolta, Manila',
      },
    ],
    timeline: [
      { year: '1912', event: 'Born in Quiapo, Manila on December 6.' },
      { year: '1938', event: 'Licensed as the 82nd Architect of the Philippines after graduating from UST.' },
      { year: '1954', event: 'Completed the monumental Santo Domingo Church in Quezon City, a milestone of postwar liturgical modernism.' },
      { year: '1960', event: 'Conferred Fellowship at the International Institute of Liturgical Art (IILA) in Rome.' },
      { year: '1968', event: 'Completed the Meralco Building in Ortigas with curving brise-soleil louvers.' },
      { year: '1994', event: 'Passed away in Manila on November 26.' },
      { year: '2014', event: 'Posthumously proclaimed National Artist of the Philippines for Architecture.' },
    ],
    images: [
      {
        url: VERIFIED_ARCHIVE_PHOTOS.santoDomingoChurch,
        caption: 'Santo Domingo Church in Quezon City (1954), Jose María V. Zaragoza\'s landmark of Modern Spanish Mission ecclesiastical architecture.',
        alt: 'Santo Domingo Church in Quezon City designed by Jose María V. Zaragoza',
        credit: 'Photo by LMP 2001 (CC BY-SA 4.0, Wikimedia Commons) · Architect: Jose María V. Zaragoza',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Santo_Domingo_Church_QC_2023-10-30.jpg',
      },
      {
        url: VERIFIED_ARCHIVE_PHOTOS.meralcoBuildingOrtigas,
        caption: 'The Meralco Building (Lopez Building, 1968) in Ortigas Center, designed by Jose María V. Zaragoza.',
        alt: 'Meralco Building in Ortigas designed by Jose María V. Zaragoza',
        credit: 'Photo by Harshil S. Mehta / Hariboneagle927 (CC BY 4.0, Wikimedia Commons) · Architect: Jose María V. Zaragoza',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Meralco_Theatre_from_27th_Floor,_Pasig,_Manila_(cropped).jpg',
      },
    ],
    sources: [
      {
        title: 'NCCA — Order of National Artists: Jose María V. Zaragoza',
        url: 'https://ncca.gov.ph/about-culture-and-arts/culture-profile/national-artists-of-the-philippines/jose-maria-v-zaragoza/',
        category: 'Government',
        institution: 'National Commission for Culture and the Arts (NCCA)',
      },
    ],
  },
  {
    id: 'ildefonso-p-santos',
    slug: 'ildefonso-p-santos',
    archiveCode: 'ARCH-07',
    name: 'Ildefonso P. Santos Jr.',
    birthYear: 1929,
    deathYear: 2014,
    activePeriod: '1956-2012',
    nationality: 'Filipino',
    nationalArtistYear: 2006,
    recognition: 'National Artist of the Philippines for Architecture — Landscape Architecture (2006)',
    biography:
      'Born on September 5, 1929, in Malabon, Rizal, to poet Ildefonso Santos Sr., Ildefonso Paez Santos Jr. ("IP Santos") earned his degree in Architecture at the University of Santo Tomas (1954) and a Master of Architecture and Master of Landscape Architecture at the University of Southern California (1960). Recognized as the "Father of Philippine Landscape Architecture," he founded the UP Diliman Landscape Architecture program and was proclaimed National Artist in 2006.',
    architecturalApproach:
      'Santos elevated tropical landscape design into an integral structural discipline. He used endemic Philippine flora, cascading water features, weathered stone, and terraced planters—most famously on the stepped ziggurat facade of the San Miguel Corporation Head Office and at Paco Park and Rizal Park—to cool microclimates and frame civic spaces.',
    majorWorks: [
      {
        buildingId: 'san-miguel-head-office',
        title: 'San Miguel Corporation Head Office Complex Landscape & Terraced Gardens',
        year: '1984',
        location: 'Ortigas Center, Mandaluyong City',
      },
      {
        title: 'Paco Park Restoration & Landscape Master Plan',
        year: '1966',
        location: 'Paco, Manila',
      },
      {
        title: 'Rizal Park (Luneta) Chinese & Japanese Gardens and Open-Air Auditorium',
        year: '1967',
        location: 'Ermita, Manila',
      },
      {
        title: 'Cultural Center of the Philippines Complex Landscape',
        year: '1969',
        location: 'Pasay City, Metro Manila',
      },
      {
        title: 'Nayong Pilipino Cultural Park Landscape',
        year: '1970',
        location: 'Pasay City, Metro Manila',
      },
    ],
    timeline: [
      { year: '1929', event: 'Born in Malabon on September 5.' },
      { year: '1954', event: 'Graduated in Architecture from the University of Santo Tomas.' },
      { year: '1960', event: 'Completed Master of Landscape Architecture at the University of Southern California.' },
      { year: '1966', event: 'Transformed historic Paco Park and key sections of Rizal Park into premier public landscapes.' },
      { year: '1984', event: 'Collaborated with the Mañosa Brothers on the terraced hanging gardens of the San Miguel Corporation Head Office.' },
      { year: '2006', event: 'Proclaimed National Artist of the Philippines for Architecture (Landscape Architecture).' },
      { year: '2014', event: 'Passed away on January 29.' },
    ],
    images: [
      {
        url: VERIFIED_ARCHIVE_PHOTOS.archIldefonsoSantos,
        caption: 'Official National Commission for Culture and the Arts (NCCA) portrait of National Artist Ildefonso P. Santos Jr. (1929-2014).',
        alt: 'Official portrait of National Artist Ildefonso P. Santos Jr.',
        credit: 'Photo by National Commission for Culture and the Arts (NCCA) · Public Domain',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ildefonso_P_Santos.jpg',
      },
      {
        url: VERIFIED_ARCHIVE_PHOTOS.sanMiguelHeadOffice,
        caption: 'San Miguel Corporation Head Office Complex (1984), featuring terraced tropical gardens designed by Ildefonso P. Santos Jr.',
        alt: 'San Miguel Corporation Head Office terraced landscape by Ildefonso P. Santos Jr.',
        credit: 'Photo by Ralff Nestor Nacor / Ralffralff (CC BY-SA 4.0, Wikimedia Commons) · Landscape Architect: Ildefonso P. Santos Jr.',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:San_Miguel_Corporation_-_HOC_Building,_Mandaluyong,_June_2025.jpg',
      },
    ],
    sources: [
      {
        title: 'NCCA — Order of National Artists: Ildefonso P. Santos Jr.',
        url: 'https://ncca.gov.ph/about-culture-and-arts/culture-profile/national-artists-of-the-philippines/ildefonso-p-santos-jr/',
        category: 'Government',
        institution: 'National Commission for Culture and the Arts (NCCA)',
      },
    ],
  },
  {
    id: 'tomas-b-mapua',
    slug: 'tomas-b-mapua',
    archiveCode: 'ARCH-08',
    name: 'Tomás B. Mapúa',
    birthYear: 1888,
    deathYear: 1965,
    activePeriod: '1912-1965',
    nationality: 'Filipino',
    nationalArtistYear: null,
    recognition: 'First Registered Architect of the Philippines (PRC License No. 1) & Founder of Mapúa Institute of Technology',
    biography:
      'Born on December 21, 1888, in Binondo, Manila, Tomás Bautista Mapúa was sent to the United States in 1903 under the Pensionado Act and graduated with a Bachelor of Architecture from Cornell University in 1911. Upon the establishment of the Philippine Board of Examiners for Architects in 1921, he received Architect License No. 1. In 1925, he founded the Mapúa Institute of Technology, the country\'s premier engineering and architectural school.',
    architecturalApproach:
      'Mapúa brought rigorous Beaux-Arts compositional clarity, reinforced-concrete engineering, and tropicalized classical proportions to civic hospitals, universities, and government landmarks across the archipelago.',
    majorWorks: [
      {
        buildingId: 'manila-central-post-office',
        title: 'Manila Central Post Office Building (with Juan M. Arellano)',
        year: '1926',
        location: 'Ermita, Manila',
      },
      {
        title: 'De La Salle University — St. La Salle Hall',
        year: '1924',
        location: 'Malate, Manila',
      },
      {
        title: 'Philippine General Hospital Nurses\' Home',
        year: '1919',
        location: 'Ermita, Manila',
      },
      {
        title: 'Centro Escolar University — Librada Avelino Hall',
        year: '1932',
        location: 'San Miguel, Manila',
      },
    ],
    timeline: [
      { year: '1888', event: 'Born in Binondo, Manila on December 21.' },
      { year: '1911', event: 'Graduated with a Bachelor of Architecture from Cornell University.' },
      { year: '1918', event: 'Appointed Supervising Architect of the Bureau of Public Works alongside Juan Arellano.' },
      { year: '1921', event: 'Awarded Philippine Architect Registration Certificate No. 1.' },
      { year: '1924', event: 'Completed St. La Salle Hall for De La Salle College on Taft Avenue.' },
      { year: '1925', event: 'Founded the Mapúa Institute of Technology in Manila.' },
      { year: '1965', event: 'Passed away in Manila on December 22.' },
    ],
    images: [
      {
        url: VERIFIED_ARCHIVE_PHOTOS.stLaSalleHall,
        caption: 'St. La Salle Hall (De La Salle University, Taft Avenue, Manila, 1924), designed by Tomás B. Mapúa, First Registered Architect of the Philippines.',
        alt: 'St. La Salle Hall at De La Salle University Manila designed by Tomás B. Mapúa',
        credit: 'Photo by Sean Ronquillo / Ubediplomacy (CC0 1.0 Public Domain, Wikimedia Commons) · Architect: Tomás B. Mapúa',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:St._La_Salle_Hall_Facade_June_2025.jpg',
      },
      {
        url: VERIFIED_ARCHIVE_PHOTOS.manilaCentralPostOffice,
        caption: 'Manila Central Post Office Building (1926), co-designed by Tomás B. Mapúa and Juan M. Arellano.',
        alt: 'Manila Central Post Office designed by Tomás B. Mapúa and Juan M. Arellano',
        credit: 'Photo by SeamanWell (CC BY-SA 3.0, Wikimedia Commons) · Architects: Juan M. Arellano & Tomás B. Mapúa',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:PhilippinePostOffice.JPG',
      },
    ],
    sources: [
      {
        title: 'National Historical Commission of the Philippines — Tomás Mapúa Registry',
        url: 'https://nhcp.gov.ph/',
        category: 'Government',
        institution: 'National Historical Commission of the Philippines (NHCP)',
      },
    ],
  },
  {
    id: 'cesar-h-concio',
    slug: 'cesar-h-concio',
    archiveCode: 'ARCH-09',
    name: 'Cesar H. Concio',
    birthYear: 1907,
    deathYear: 2003,
    activePeriod: '1933-1995',
    nationality: 'Filipino',
    nationalArtistYear: null,
    recognition: 'First University Architect of UP Diliman & Pioneer of Postwar Philippine Modernism',
    biography:
      'Born on November 30, 1907, Cesar Homero Concio earned a degree in Chemical Engineering from the University of the Philippines (1928), a Bachelor of Architecture from Mapúa Institute of Technology (1932, topping the board exam), and a Master in Architecture and Town Planning from the Massachusetts Institute of Technology (MIT, 1940). Appointed by UP President Bienvenido Gonzalez as the first University Architect of UP, he shaped the postwar Diliman campus.',
    architecturalApproach:
      'Concio championed rational, structurally expressive reinforced-concrete modernism and parabolic thin-shell forms—matching the symmetrical massing of Palma Hall and Melchor Hall with deep tropical corridors, sun-louvers, and acoustic shell vaults.',
    majorWorks: [
      {
        buildingId: 'up-melchor-hall',
        title: 'Melchor Hall (UP College of Engineering) & Palma Hall (AS Building)',
        year: '1950',
        location: 'UP Diliman, Quezon City',
      },
      {
        title: 'Church of the Risen Lord (UP Diliman Protestant Chapel)',
        year: '1956',
        location: 'UP Diliman, Quezon City',
      },
      {
        title: 'Insular Life Building (First Building on Ayala Avenue)',
        year: '1962',
        location: 'Makati Central Business District',
      },
      {
        title: 'National Press Club Building (with Angel Nakpil)',
        year: '1955',
        location: 'Intramuros, Manila',
      },
      {
        title: 'Redemptorist Church (National Shrine of Our Mother of Perpetual Help)',
        year: '1958',
        location: 'Baclaran, Parañaque',
      },
    ],
    timeline: [
      { year: '1907', event: 'Born on November 30.' },
      { year: '1932', event: 'Graduated in Architecture from Mapúa Institute of Technology and placed 1st in the licensure exam.' },
      { year: '1940', event: 'Completed Master of Architecture at Massachusetts Institute of Technology (MIT).' },
      { year: '1949', event: 'Appointed First University Architect of the University of the Philippines.' },
      { year: '1950', event: 'Completed Melchor Hall and Palma Hall on the UP Diliman Academic Oval.' },
      { year: '1956', event: 'Designed the parabolic saddle-shell Church of the Risen Lord at UP Diliman.' },
      { year: '2003', event: 'Passed away in April 2003.' },
    ],
    images: [
      {
        url: VERIFIED_ARCHIVE_PHOTOS.upMelchorHall,
        caption: 'Melchor Hall (UP College of Engineering, 1950) at UP Diliman, designed by First UP University Architect Cesar H. Concio.',
        alt: 'Melchor Hall at UP Diliman designed by Cesar H. Concio',
        credit: 'Photo by Ralff Nestor Nacor / Ralffralff (CC BY-SA 4.0, Wikimedia Commons) · Architect: Cesar H. Concio',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Melchor_Hall,_U.P._Diliman,_April_2023.jpg',
      },
    ],
    sources: [
      {
        title: 'University of the Philippines Office of the Campus Architect — Heritage Buildings',
        url: 'https://upd.edu.ph/',
        category: 'Academic / Reference',
        institution: 'University of the Philippines Diliman',
      },
    ],
  },
  {
    id: 'carlos-d-arguelles',
    slug: 'carlos-d-arguelles',
    archiveCode: 'ARCH-10',
    name: 'Carlos D. Arguelles',
    birthYear: 1917,
    deathYear: 2008,
    activePeriod: '1946-2000',
    nationality: 'Filipino',
    nationalArtistYear: null,
    recognition: 'Pioneer of the Tropical International Style & Postwar Corporate Modernism',
    biography:
      'Born in Manila on September 15, 1917, to architect Tomás Arguelles, Carlos "Charlie" Corcuera Arguelles earned his Bachelor of Architecture from the University of Santo Tomas (1940) and both his Bachelor (1941) and Master of Architecture (1946) from the Massachusetts Institute of Technology (MIT) after serving during World War II. As Dean of the UST College of Architecture and Fine Arts (1954-1959), he mentored generations of modernist architects.',
    architecturalApproach:
      'Arguelles adapted the glass-and-aluminum International Style to the humid equatorial sun of Manila through wrap-around aluminum brise-soleil screens, deep podium arcades, and modular curtain walls—exemplified by the 1961 Philamlife Building on United Nations Avenue.',
    majorWorks: [
      {
        buildingId: 'philamlife-building-manila',
        title: 'Philamlife Building (United Nations Avenue)',
        year: '1961',
        location: 'Ermita, Manila',
      },
      {
        title: 'Philamlife Homes Suburban Master Plan & Bungalows',
        year: '1955',
        location: 'West Avenue, Quezon City',
      },
      {
        title: 'International Rice Research Institute (IRRI) Campus',
        year: '1962',
        location: 'Los Baños, Laguna',
      },
      {
        title: 'Development Bank of the Philippines (DBP) Head Office',
        year: '1968',
        location: 'Makati Central Business District',
      },
      {
        title: 'Manila Hilton (now Manila Pavilion Hotel)',
        year: '1968',
        location: 'Ermita, Manila',
      },
    ],
    timeline: [
      { year: '1917', event: 'Born in Manila on September 15.' },
      { year: '1940', event: 'Graduated in Architecture from the University of Santo Tomas.' },
      { year: '1946', event: 'Earned Master of Architecture from Massachusetts Institute of Technology (MIT).' },
      { year: '1954', event: 'Appointed Dean of the UST College of Architecture and Fine Arts.' },
      { year: '1961', event: 'Completed the landmark Philamlife Building on UN Avenue with acoustic consultant Bolt, Beranek & Newman.' },
      { year: '2008', event: 'Passed away on August 19.' },
    ],
    images: [
      {
        url: VERIFIED_ARCHIVE_PHOTOS.philamlifeBuilding,
        caption: 'The Philamlife Building on United Nations Avenue, Manila (1961), Carlos D. Arguelles\'s icon of Tropical International Style architecture.',
        alt: 'Philamlife Building in Manila designed by Carlos D. Arguelles',
        credit: 'Photo by Judgefloro (CC0 1.0 Public Domain, Wikimedia Commons) · Architect: Carlos D. Arguelles',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Philamlife_Center_on_United_Nations_Avenue.jpg',
      },
    ],
    sources: [
      {
        title: 'Docomomo International & Philippine Modern Movement Documentation',
        url: 'https://docomomo.com/',
        category: 'Architecture',
        institution: 'Docomomo International',
      },
    ],
  },
  {
    id: 'antonio-m-toledo',
    slug: 'antonio-m-toledo',
    archiveCode: 'ARCH-11',
    name: 'Antonio M. Toledo',
    birthYear: 1889,
    deathYear: 1972,
    activePeriod: '1912-1954',
    nationality: 'Filipino',
    nationalArtistYear: null,
    recognition: 'Consulting Architect of the Bureau of Public Works & Master of Philippine Civic Neoclassicism',
    biography:
      'Born in 1889, Antonio Manalac Toledo was among the earliest Filipino pensionado architects sent to the United States, graduating in architecture from Ohio State University in 1910. Entering the Bureau of Public Works in 1911 and rising to Consulting Architect in 1938, Toledo designed many of the Philippines\' most enduring neoclassical capitol buildings, museums, and university halls.',
    architecturalApproach:
      'Toledo translated the Burnham Plan for Manila into stately Beaux-Arts masonry and reinforced-concrete monuments—integrating Corinthian colonnades, central courtyard lightwells, and tall arched windows suited to the tropics.',
    majorWorks: [
      {
        title: 'Manila City Hall',
        year: '1941',
        location: 'Ermita, Manila',
      },
      {
        title: 'Department of Finance Building (now National Museum of Anthropology)',
        year: '1940',
        location: 'Agrifina Circle, Rizal Park, Manila',
      },
      {
        title: 'Department of Agriculture and Commerce Building (now National Museum of Natural History)',
        year: '1940',
        location: 'Agrifina Circle, Rizal Park, Manila',
      },
      {
        title: 'Cebu Provincial Capitol',
        year: '1938',
        location: 'Cebu City, Cebu',
      },
      {
        title: 'UP Manila Campus (Padre Faura Halls)',
        year: '1920s-1930s',
        location: 'Ermita, Manila',
      },
    ],
    timeline: [
      { year: '1889', event: 'Born in the Philippines and selected as a government pensionado scholar.' },
      { year: '1910', event: 'Graduated in Architecture from Ohio State University.' },
      { year: '1928', event: 'Appointed Supervising Architect at the Bureau of Public Works.' },
      { year: '1938', event: 'Completed the Cebu Provincial Capitol and became Consulting Architect.' },
      { year: '1940', event: 'Completed the twin Finance and Agriculture buildings at Agrifina Circle, Luneta.' },
      { year: '1941', event: 'Completed Manila City Hall with its iconic hexagonal clock tower.' },
      { year: '1972', event: 'Passed away in 1972.' },
    ],
    images: [
      {
        url: VERIFIED_ARCHIVE_PHOTOS.manilaCityHall,
        caption: 'Manila City Hall (1941) with its iconic hexagonal clock tower, designed by Bureau of Public Works Consulting Architect Antonio M. Toledo.',
        alt: 'Manila City Hall designed by Antonio M. Toledo',
        credit: 'Photo by Patrick Roque / Patrickroque01 (CC BY-SA 4.0, Wikimedia Commons) · Architect: Antonio M. Toledo',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Manila_City_Hall_(Manila;_07-22-2020).jpg',
      },
    ],
    sources: [
      {
        title: 'National Museum of the Philippines — History of the Agrifina Circle Buildings',
        url: 'https://www.nationalmuseum.gov.ph/',
        category: 'Cultural Institutions',
        institution: 'National Museum of the Philippines',
      },
    ],
  },
  {
    id: 'indigenous-austronesian-builders',
    slug: 'indigenous-austronesian-builders',
    archiveCode: 'ARCH-12',
    name: 'Indigenous Austronesian Master Builders',
    birthYear: null,
    deathYear: null,
    activePeriod: 'Pre-Colonial Era - Present',
    nationality: 'Filipino',
    nationalArtistYear: null,
    recognition: 'Traditional Vernacular Guilds, Carpenters & Stone Masons of the Philippine Archipelago',
    biography:
      'Long before formal academic licensing, indigenous master builders across the Philippine archipelago—including Ifugao munhabat carpenters in the Cordillera, Ivatan community stone masons in Batanes, Maranao okir woodcarvers in Lanao, and Tausug and Bajau coastal builders in Sulu—developed sophisticated, climate-resilient tectonic systems handed down through oral and apprenticeship traditions.',
    architecturalApproach:
      'Vernacular Philippine architecture responds directly to typhoons, earthquakes, flooding, and tropical humidity through mortise-and-tenon joinery without nails, raised post-and-beam piles, steep thatched roofs, lime-and-boulder masonry, and seismic rocker beams.',
    majorWorks: [
      {
        buildingId: 'ifugao-bale-batad',
        title: 'Ifugao Bale (Fale) Traditional Elevated Granary-House',
        year: 'Traditional Vernacular',
        location: 'Batad & Banaue, Ifugao',
      },
      {
        buildingId: 'ivatan-rakuh-dakay-house',
        title: 'Ivatan Rakuh Stone & Cogon House (House of Dakay)',
        year: '1887',
        location: 'San Jose de Ivana, Batanes',
      },
      {
        buildingId: 'kawayan-torogan-lanao',
        title: 'Kawayan Torogan (Maranao Royal Ancestral House)',
        year: '19th Century',
        location: 'Marantao, Lanao del Sur',
      },
    ],
    timeline: [
      { year: 'Pre-1500s', event: 'Development of Austronesian stilt, mortise-and-tenon timber, and thatched roof tectonics across Luzon, Visayas, and Mindanao.' },
      { year: '1790s-1880s', event: 'Adoption of lime-and-stone cal y canto masonry in Batanes resulting in the typhoon-proof Ivatan rakuh.' },
      { year: '1995', event: 'UNESCO inscription of the Rice Terraces of the Philippine Cordilleras and their vernacular bale settlements.' },
      { year: '2008', event: 'Declaration of the Kawayan Torogan in Lanao del Sur as a National Cultural Treasure.' },
    ],
    images: [
      {
        url: VERIFIED_ARCHIVE_PHOTOS.ifugaoBaleBatad,
        caption: 'Traditional Ifugao Bale timber joinery and pyramidal thatched roof in Banaue, Ifugao.',
        alt: 'Ifugao Bale traditional house in Banaue, Ifugao',
        credit: 'Photo by Patrick Roque / Patrickroque01 (CC BY-SA 4.0, Wikimedia Commons) · Builders: Ifugao Munhabat Master Carpenters',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hiwang_Native_House_Inn_(Banaue,_Ifugao;_11-29-2022).jpg',
      },
      {
        url: VERIFIED_ARCHIVE_PHOTOS.ivatanDakayHouse,
        caption: 'House of Dakay (1887) in Ivana, Batanes — typhoon-resilient Ivatan stone and cogon vernacular architecture.',
        alt: 'House of Dakay in Ivana, Batanes',
        credit: 'Photo by Irishandys (CC0 1.0 Public Domain, Wikimedia Commons) · Builders: Luisa Estrella & Ivatan Master Masons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:House_of_Dakay_Batanes,_Philippines.jpg',
      },
    ],
    sources: [
      {
        title: 'NCCA — Philippine Vernacular Architecture & Cultural Heritage',
        url: 'https://ncca.gov.ph/',
        category: 'Government',
        institution: 'National Commission for Culture and the Arts (NCCA)',
      },
    ],
  },
  {
    id: 'indigenous-colonial-artisans',
    slug: 'indigenous-colonial-artisans',
    archiveCode: 'ARCH-13',
    name: 'Hispanic-Filipino Maestro de Obras & Colonial Builders',
    birthYear: null,
    deathYear: null,
    activePeriod: '1571-1898',
    nationality: 'Filipino',
    nationalArtistYear: null,
    recognition: 'Master Masons, Carpenters, Sculptors & Friar-Architects of the Spanish Colonial Era',
    biography:
      'During the Spanish Colonial Period (1571-1898), monumental churches, fortifications, and domestic bahay na bato residences were built through the collaboration of missionary friar-architects (such as Juan Macías and Antonio Estavillo), European military and civil engineers (such as Juan Sicarra and Genaro Palacios), and guilds of Filipino and Chinese-Filipino maestro de obras (master builders), stone carvers, and master carpenters.',
    architecturalApproach:
      'Confronted by destructive earthquakes and tropical typhoons, colonial-era builders invented Earthquake Baroque—lowering church profiles, thickening coral-stone and brick walls, adding massive scrolled volute buttresses, detaching bell towers, and fusing indigenous botanical motifs into bas-relief facades.',
    majorWorks: [
      {
        buildingId: 'san-agustin-church',
        title: 'San Agustin Church (Juan Macías & Augustinian Builders)',
        year: '1607',
        location: 'Intramuros, Manila',
      },
      {
        buildingId: 'paoay-church',
        title: 'Paoay Church — San Agustin Church of Paoay',
        year: '1710',
        location: 'Paoay, Ilocos Norte',
      },
      {
        buildingId: 'miagao-church',
        title: 'Miagao Church — Santo Tomas de Villanueva Parish',
        year: '1797',
        location: 'Miagao, Iloilo',
      },
      {
        buildingId: 'vigan-ancestral-houses',
        title: 'Vigan Bahay na Bato Ancestral Houses (Calle Crisologo & Syquia Mansion)',
        year: '18th-19th Century',
        location: 'Vigan City, Ilocos Sur',
      },
      {
        buildingId: 'san-sebastian-basilica',
        title: 'Minor Basilica of San Sebastian (Genaro Palacios)',
        year: '1891',
        location: 'Quiapo, Manila',
      },
    ],
    timeline: [
      { year: '1587-1607', event: 'Construction of the stone San Agustin Church in Intramuros under Juan Macías.' },
      { year: '1710', event: 'Completion of the Earthquake Baroque Paoay Church in Ilocos Norte.' },
      { year: '1773', event: 'Completion of the volcanic-stone Daraga Church in Albay.' },
      { year: '1797', event: 'Completion of the fortress-like Miagao Church in Iloilo with tropical botanical reliefs.' },
      { year: '1891', event: 'Completion of the prefabricated all-steel San Sebastian Basilica in Quiapo, Manila.' },
    ],
    images: [
      {
        url: VERIFIED_ARCHIVE_PHOTOS.paoayChurch,
        caption: 'San Agustin Church of Paoay (1710), Ilocos Norte — UNESCO World Heritage Earthquake Baroque monument.',
        alt: 'Paoay Church in Ilocos Norte',
        credit: 'Photo by Luzviminda7641 (CC0 1.0 Public Domain, Wikimedia Commons) · Builders: Fray Antonio Estavillo & Ilocano Maestro de Obras',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Paoay_Church_and_Bell_Tower.jpg',
      },
      {
        url: VERIFIED_ARCHIVE_PHOTOS.sanAgustinChurch,
        caption: 'San Agustin Church in Intramuros, Manila (1607), the oldest stone church in the Philippines.',
        alt: 'San Agustin Church in Intramuros, Manila',
        credit: 'Photo by Johngaje92 (CC BY-SA 4.0, Wikimedia Commons) · Builder: Juan Macías, O.S.A.',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:San_Agustin_Church,_Intramuros,_Manila_City.jpg',
      },
    ],
    sources: [
      {
        title: 'UNESCO World Heritage Centre — Baroque Churches of the Philippines',
        url: 'https://whc.unesco.org/en/list/677/',
        category: 'Heritage',
        institution: 'UNESCO World Heritage Centre',
      },
    ],
  },
  {
    id: 'contemporary-filipino-collaboratives',
    slug: 'contemporary-filipino-collaboratives',
    archiveCode: 'ARCH-14',
    name: 'Budji+Royal, Kenneth Cobonpue & Contemporary Collaborative Practices',
    birthYear: null,
    deathYear: null,
    activePeriod: '1990s-Present',
    nationality: 'Filipino',
    nationalArtistYear: null,
    recognition: 'Pioneers of Contemporary Tropical Modernism & Engineered Timber-Craft Architecture',
    biography:
      'Contemporary Philippine architecture is led by collaborative practices—including Budji+Royal Architecture+Design (founded by Budji Layug and Royal Pineda), Cebuano industrial designer Kenneth Cobonpue, WTA Architecture and Design Studio, CS Architecture, and international partners such as Integrated Design Associates (Winston Shu)—who fuse long-span glulam engineering, passive tropical ventilation, and Filipino material craft.',
    architecturalApproach:
      'By combining parametric structural engineering with rattan weaving, mother-of-pearl, volcanic stone, and laminated timber arches, contemporary Filipino designers create climate-resilient civic terminals, museums, and sports arenas.',
    majorWorks: [
      {
        buildingId: 'mactan-cebu-airport-t2',
        title: 'Mactan-Cebu International Airport Terminal 2',
        year: '2018',
        location: 'Lapu-Lapu City, Cebu',
      },
      {
        title: 'New Clark City Athletics Stadium & Aquatics Center (Budji+Royal)',
        year: '2019',
        location: 'Capas, Tarlac',
      },
    ],
    timeline: [
      { year: '2001', event: 'Budji Layug and Royal Pineda establish Budji+Royal Architecture+Design.' },
      { year: '2018', event: 'Completion of Mactan-Cebu International Airport Terminal 2, winner of the World Architecture Festival category award.' },
      { year: '2019', event: 'Completion of the Sacobia-inspired New Clark City Athletics Stadium in Tarlac.' },
    ],
    images: [
      {
        url: VERIFIED_ARCHIVE_PHOTOS.mactanCebuAirportT2,
        caption: 'Mactan-Cebu International Airport Terminal 2 (2018) in Lapu-Lapu City, Cebu — designed by Integrated Design Associates (Winston Shu) with Budji+Royal and Kenneth Cobonpue.',
        alt: 'Mactan-Cebu International Airport Terminal 2 aerial view',
        credit: 'Photo by Lucky Ambago Purok Otso (CC BY-SA 4.0, Wikimedia Commons) · Architects: IDA (Winston Shu), Budji+Royal & Kenneth Cobonpue',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:MACTAN_CEBU_INTERNATIONAL_AIRPORT_AERIAL_VIEW.jpg',
      },
    ],
    sources: [
      {
        title: 'United Architects of the Philippines (UAP) — Contemporary Practice Index',
        url: 'https://united-architects.org/',
        category: 'Architecture',
        institution: 'United Architects of the Philippines (UAP)',
      },
    ],
  },
];

export const architectsData = ARCHITECTS_DATA;
