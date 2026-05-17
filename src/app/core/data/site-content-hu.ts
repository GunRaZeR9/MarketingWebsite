import { LegalPageContent, SiteContent } from '../models/site-content';

const HUNGARIAN_COOKIE_POLICY: LegalPageContent = {
  title: 'Cookie Irányelvek',
  lastUpdated: 'Április 2026',
  sections: [
    {
      heading: '1. Mik azok a cookie-k?',
      paragraphs: [
        'Az "internetes cookie" (más néven "böngésző cookie", "HTTP cookie" vagy egyszerűen "cookie") egy kis fájl, amely betűkből és számokból áll, és a számítógépéde, mobil eszközéde vagy más berendezésedben tárolódik, amelyen keresztül az internetet hozzáférhetted.',
        'A cookie-kat egy webszerver által az internetes böngészőhöz (pl. Internet Explorer, Firefox, Chrome) küldött kérés telepíti.',
        'A telepített cookie-knak meghatározott élettartama van, és "passzívak" abban az értelemben, hogy nem tartalmaznak szoftverprogramokat, vírusokat vagy kémprogramokat, és nem férnek hozzá a felhasználó merevlemezén lévő információkhoz.',
        'A cookie két részből áll: a cookie neve és a cookie tartalma/értéke.',
        'Technikai szempontból csak az a webszerver érheti el újra a cookie-t, amely azt elküldte, amikor a felhasználó visszatér az adott webszerverhez társított weblapra.'
      ]
    },
    {
      heading: '2. Milyen célokra használják a cookie-kat ezen a webhelyen?',
      paragraphs: [
        'A cookie-kat arra használják, hogy jobb böngészési élményt és az egyes felhasználó igényeihez és érdeklődéséhez igazított szolgáltatásokat nyújtsanak az erre a webhelyre érkezőknek.',
        'Ennek keretében a cookie-k a következő célok elérésére szolgálnak:',
        'A webhelynek a felhasználók által végzett felkeresésének/használatának javítása, ideértve az esetleges hibák azonosítását;',
        'Az erre a webhelyre vonatkozó anonim statisztikák biztosítása a webhely tulajdonosának;',
        'A felhasználók számára potenciálisan jövőbeli szolgáltatások/termékek előrejelzése az aktuálisan megkeresett szolgáltatások/termékek alapján.',
        'A webhelyre vonatkozó cookie-kal küldött visszajelzésre alapozva intézkedéseket lehet tenni, hogy a webhely hatékonyabb és könnyebben hozzáférhető legyen a felhasználók számára.'
      ]
    },
    {
      heading: '3. Milyen az élettartama a cookie-knak?',
      paragraphs: [
        'A cookie-k élettartama attól függhet, hogy milyen céllal helyezik el. Az alábbi cookie-kategóriák határozzák meg az élettartamukat:',
        'Munkamenet cookie-k - olyan cookie, amely automatikusan törlődik, amikor a felhasználó bezárja a böngészőjét.',
        'Tartós/rögzített cookie-k - olyan cookie, amely a felhasználó eszközén marad, amíg el nem éri a lejárati dátumot (néhány perc, nap vagy év múlva), vagy amíg a felhasználó manuálisan nem törli azt a böngésző beállításain keresztül.'
      ]
    },
    {
      heading: '4. Melyek az harmadik fél által elhelyezett cookie-k?',
      paragraphs: [
        'A webhely egyes tartalmait harmadik fél által biztosíthatják, nem a webhely tulajdonosa által, ebben az esetben ezeket az cookie-kat harmadik fél cookie-nak nevezzük.',
        'Ezek az cookie-k az alábbi harmadik felektől származhatnak:',
        'Google Analytics',
        'Facebook Pixel'
      ]
    },
    {
      heading: '5. Milyen cookie-kat használnak ezen a webhelyen?',
      paragraphs: [
        'A webhely felkeresésével/használatával az alábbi cookie-k helyezhetők el:',
        'a. Webhely teljesítménycookie-k',
        'b. Felhasználóelemzési cookie-k',
        'c. Geotargetálási cookie-k',
        'd. Regisztrációs cookie-k',
        'e. Hirdetési cookie-k',
        'f. Hirdetésszolgáltató cookie-k',
        'a. Teljesítménycookie-k - Ez a típusú cookie-kat a webhely felhasználója beállításainak megtartására szolgálnak, így az ezt követő webhelyre történő látogatás során nincs szükség az előferenciaik újbóli beállítására.',
        'b. Felhasználóelemzési cookie-k - Ezek a cookie-k tájékoztatnak arról, hogy egy adott webhely-felhasználó már látogatta-e korábban a webhelyet. Ezek a cookie-k kizárólag statisztikai célokra használhatók.',
        'c. Geotargetálási cookie-k - Ezeket a cookie-kat egy olyan szoftver használja, amely a webhely felhasználójának eredeti országát határozza meg. Függetlenül a kiválasztott nyelvtől azonos hirdetések fognak érkezni.',
        'd. Regisztrációs cookie-k - Ha regisztrálsz erre az oldalra, akkor a rendszer cookie-kat hoz létre, amelyek ezt a tényt megjegyzik. A szerverek ezeket a cookie-kat arra használják, hogy megmutassák az adott regisztrált fiók bejelentkezési állapotát.',
        'Ezenkívül ezeknek a cookie-knak a segítségével lehetőség van a webhelyre beküldött megjegyzéseket az adott felhasználó fiók felhasználónevéhez társítani. Ha a "tartsd magad bejelentkezve" lehetőség nem volt kiválasztva, akkor ezek a cookie-k automatikusan törlődnek a böngészési munkamenet végén.',
        'e. Hirdetési cookie-k - Ezek a cookie-k lehetővé teszik annak megállapítását, hogy egy felhasználó megtekintett egy online hirdetést, annak típusát és az eltelt időt az adott hirdetési üzenet megtekintésétől.',
        'Ennek megfelelően ezek a cookie-kat az online hirdetések célzására használják. Anonim, és a megtekintett tartalom információit tárolják, nem a felhasználók információit.'
      ]
    },
    {
      heading: '6. Milyen típusú információk tárolódnak és érhetők el a cookie-kon keresztül?',
      paragraphs: [
        'A cookie-k egy kis szövegfájlban tárolnak információkat, amely lehetővé teszi a böngésző felismerését. Ez a webhely felismeri a böngészőt, amíg a cookie-k lejárnak vagy törlődnek.'
      ]
    },
    {
      heading: '7. Hogyan lehet letiltani a cookie-kat?',
      paragraphs: [
        'A cookie-k letiltása vagy elutasítása megnehezítheti a webhely meglátogatását, és korlátozza annak használhatóságát.',
        'A felhasználók úgy konfigurálhatják böngészőjüket, hogy elutasítsa a cookie fájlokat, vagy csak egy adott webhelyről fogadjon el cookie-kat. Az cookie-k elutasítása vagy letiltása azonban nem jelenti azt, hogy nem fogsz további online hirdetéseket kapni - csak azt, hogy azok nem lesznek igazodva az előferenciaaidhoz és érdeklődésedhez, amelyeket a böngészési viselkedésed mutat.',
        'Az összes modern böngésző lehetőséget biztosít a cookie beállítások módosítására. Ezek a beállítások általában az "opciók" szakaszban vagy a böngésző "preferenciák" menüjében érhetők el.',
        'Ezen beállítások megértéséhez az alábbi linkek hasznosak lehetnek:',
        'Cookie beállítások a Google Chrome-hoz',
        'Cookie beállítások a Mozilla Firefox-hoz',
        'Cookie beállítások az Apple Safari-hoz',
        'Cookie beállítások a Microsoft Internet Explorer-hez',
        'Az erre a webhelyre vonatkozó cookie-k használatáról további kérdésekhez kérjük, hogy kapcsolatba lépjen velünk:'
      ]
    },
    {
      heading: 'Használt cookie-k típusai',
      paragraphs: [
        '1. Szükséges a webhely működéséhez - Ez a webhely cookie-kat használ a felhasználói munkamenetek mentéséhez és az olyan tevékenységekhez, amelyek a működéséhez szükségesek, például bevásárlókocsik vagy közelmúltban megtekintett termékek.',
        '2. Analitika - Ez a típusú szolgáltatás lehetővé teszi a webhelyre irányuló forgalom figyelemmel kísérését és elemzését. Ez felhasználható a felhasználói viselkedés nyomon követésére.',
        'Google Analytics (Google Inc.) - A Google által biztosított webes analitikai szolgáltatás. Ez figyelemmel kíséri a webhelyek használatát, hogy jelentéseket hozzon létre, és segít javítani a felhasználói élményt az oldalakon.',
        '3. Marketing és viselkedéselemzés - Ez a típusú szolgáltatás lehetővé teszi a webhely és annak partnerei számára, hogy a felhasználó webhelye használatának módja alapján hirdetéseket jelenítsetek meg.',
        'Facebook (Facebook Inc.) - Ez egy viselkedésalapú átcélzási szolgáltatás, amely elemzi a webhely látogatóit, és lehetővé teszi a személyre szabott hirdetések megjelenítését.',
        'Feldolgozási helye: USA',
        '4. Tartalom megjelenítése más platformokról - Ez a típusú szolgáltatás lehetővé teszi a külső tartalom betöltését és interakciót vele közvetlenül a webhelyen. Ezek a szolgáltatások akkor is gyűjthetnek forgalmi információkat, ha a felhasználó nem használja őket.',
        'YouTube videómodul - Ez egy viselkedésalapú átcélzási szolgáltatás, amely elemzi a webhely látogatóit, és lehetővé teszi a személyre szabott hirdetések megjelenítését.',
        'Feldolgozási helye: USA',
        'Vimeo videólejátszó - Az InterActiveCorp által biztosított videómegjelenítési szolgáltatás, amely lehetővé teszi számunkra videótartalom hozzáadását a weboldalakhoz.',
        'Feldolgozási helye: USA'
      ]
    }
  ]
};

export const SITE_CONTENT_HU: SiteContent = {
  language: 'hu',
  brandName: 'InsideGrowth',
  heroTitle: 'Több, mint egy ügynökség — Egy növekedési partner',
  heroSubtitle:
    'Egy digitális marketing ügynökség, amely segít az üzleteknek növekedni teljesítményre összpontosított stratégiákon keresztül — egy tanúsított szakemberekből álló csapat támogatásával, amely 20+ év kombinált tapasztalattal rendelkezik.',
  introTitle: 'Növekedés, Együtt Felépítve',
  introSubtitle: 'Megbízva kezelünk €50K+ havi hirdetési költséget',
  introBody: [
    'Egy csapat volt Google és Meta szakember, 20+ év kombinált tapasztalattal.',
    'Nem csak kampányokat futtatunk — növekedési rendszereket építünk. Amikor az üzleted nyereségesen skálázódik, mi is skálázódunk veled. Így mérjük a sikert.'
  ],
  aboutIntroTitle: 'Hogyan Gondolkozunk a Növekedésről',
  aboutIntroBody: [
    'Nem kezeljük a marketinget külön szolgáltatásokként.',
    'Olyan rendszereket építünk, ahol minden rész — a forgalom, konverzió és megtartás — együtt működik a valódi üzleti növekedés meghajtásához.',
    'A legtöbb ügynökség a kampányokra fókuszál. Mi az eredményekre.'
  ],
  aboutPlatformItems: [
    'Egyértelmű stratégia, nem találgatás',
    'Bevételre fókusz, nem csak forgalomra',
    'Skálázható rendszerek, nem egyszeri sikerek'
  ],
  aboutTeamEyebrow: 'Csapatunk',
  aboutTeamTitle: 'Ismerd meg az InsideGrowth mögötti csapatot',
  aboutTeamSubtitle: 'Egy csapat szakember, akik mind az üzleted növekedésének egy kulcsfontosságú területére fókuszálnak.',
  aboutTeamTagline: 'Egy csapatként dolgozunk, egy célra fókuszálva: a te növekedésedre.',
  aboutTeamMembers: [
    {
      name: 'Razvan Puscas',
      role: 'Alapító & Növekedési Stratéga',
      bio: 'Irányítja a stratégiát, a fizetett médiát és az SEO-t, biztosítva, hogy a rendszer minden része együtt dolgozzon a valódi üzleti növekedésért.',
      photo: 'images/placeholders/studio-grid.svg'
    },
    {
      name: 'Andrei Puscas',
      role: 'Fizetett Média Szakértő',
      bio: 'Google és Meta kampányokat kezel és optimalizál, a teljesítményre, skálázásra és jövedelmezőségre fókuszálva.',
      photo: 'images/placeholders/studio-grid.svg'
    },
    {
      name: 'Paul Tatar',
      role: 'Web és Funnel Szakértő',
      bio: 'Magas konverziójú weboldalakat és landing page-eket épít, amelyek a forgalmat ügyfelekké alakítják.',
      photo: 'images/placeholders/studio-grid.svg'
    },
    {
      name: 'Mihai Borsan',
      role: 'Kreatív Szakértő',
      bio: 'Fotó- és videótartalmakat készít, amelyek célja a figyelem megragadása és a konverziók növelése.',
      photo: 'images/placeholders/studio-grid.svg'
    },
    {
      name: 'Nico Puscas',
      role: 'Ügyfél Növekedés & Értékesítés',
      bio: 'Közvetlenül dolgozik az ügyfelekkel, hogy megértse a céljaikat, és biztosítsa a megfelelő stratégia megvalósítását.',
      photo: 'images/placeholders/studio-grid.svg'
    }
  ],
  problemTitle: 'A Forgalom és Bevétel Közötti Rés',
  problemPoints: [
    'Hirdetések futtatása világos stratégia nélkül.',
    'Nincs igazítás a forgalom, webhely és konverziók között.',
    'Mi mindent egy rendszerbe hozunk, amely valódi eredményeket hajt meg.'
  ],
  solutionsTitle: 'Megoldásaink',
  solutions: [
    {
      title: 'Célzott PPC Indítás Meta és Google Platformokon',
      description:
        'Adatalapú kampányokat indítunk magas szándékú, luxusmennyiségi közönségek számára ott, ahol a prémium vásárlók már keresnek.'
    },
    {
      title: 'Teljes Funnel Fizetett Médiarendszer',
      description:
        'A potenciális ügyfeleket az első interakciótól a vásárlásig vezetjük tudatosság, megfontolás és konverziós szintekkel.'
    },
    {
      title: 'Új Piacokra Belépés Geo-Célzással',
      description:
        'A költségvetést a legmagasabb konverziós potenciálú régiókhöz és városokhoz összpontosítjuk a hatékony nemzetközi növekedés érdekében.'
    }
  ],
  servicesTitle: 'Szolgáltatások az Üzlet Méretezésére Kialakítva',
  services: [
    {
      title: 'Audit & Növekedés Elemzés',
      description:
        'Elemezzük az egész marketing ökoszisztémádat — a webhely teljesítménytől és a nyomkövetési beállítástól a hirdetési kampányokig és a keresőoptimalizálásig — hogy azonosítsuk, mi működik, mi korlátoz és ahol a legnagyobb növekedési lehetőségek vannak.',
      features: [
        'Webhely sebessége és teljesítménye',
        'Nyomkövetési beállítás (GTM, GA4, pixelek)',
        'Google és Meta Ads audit',
        'SEO struktúra és technikai felülvizsgálat',
        'Konverziós folyamat és felhasználói utazás'
      ],
      imagePosition: 'left',
      image: 'images/services/Audit%26GrowthAnalysis.webp'
    },
    {
      title: 'Fizetett Média, Amely Konvertál',
      description:
        'Magas teljesítményű kampányokat kezelünk és skálázunk a Google, Meta és TikTok között — a minőségi forgalom felkeltésére összpontosítva, amely valódi ügyfelekké és bevételekké alakul.',
      features: [
        'Google Ads (Keresés, Vásárlás, Performance Max)',
        'Meta Ads (Facebook és Instagram)',
        'TikTok Ads',
        'Kampányadaptálás és skálázás'
      ],
      imagePosition: 'right',
      image: 'images/services/PaidMediaThatConverts.webp'
    },
    {
      title: 'SEO és Szerves Növekedés',
      description:
        'Optimalizáljuk webhelyed, hogy magasabbra rangsoroljuk, konzisztens forgalmat vonzz és hosszú távú láthatóságot építsük, amely támogatja a fizetett kampányokat.',
      features: [
        'Technikai SEO',
        'On-page optimalizálás',
        'Kulcsszó és struktúra stratégia',
        'Tartalom optimalizálás'
      ],
      imagePosition: 'left',
      image: 'images/services/Seo%26OrganicGrowth.webp'
    },
    {
      title: 'Konverzióra Tervezett Webhelyek',
      description:
        'Egyedi weboldalakat és e-kereskedelmi platformokat tervezünk és fejlesztünk, amelyek a sebességre, felhasználói élményre és konverzióra összpontosítanak — a látogatókat fizető ügyfelekké alakítva.',
      features: [
        'Egyedi bemutatóhelyek',
        'E-kereskedelmi fejlesztés',
        'Konverziófókuszú tervezés',
        'Mobilés sebesség-optimalizálás'
      ],
      imagePosition: 'right',
      image: 'images/services/WebsiteBuiltToConvert.webp'
    },
    {
      title: 'Kreatív Produkcio',
      description:
        'Magas minőségű fotó- és videótartalmakat készítünk, amelyeket úgy terveztünk, hogy felhívjuk a figyelmet és javítsuk a teljesítményt a marketing csatornákon.',
      features: [
        'Termékes fotózás',
        'Márka- és helyszín-fotozás',
        'Videoprodukcio és szerkesztés',
        'Hirdetési kreatívok'
      ],
      imagePosition: 'left',
      image: 'images/services/CreativeProduction.webp'
    },
    {
      title: 'Nyomkövetés és Teljesítményi Rendszerek',
      description:
        'Felépítjük a marketinged mögött lévő infrastruktúrát — biztosítva, hogy minden cselekvés nyomon követett, mért és valós adatok alapján optimalizált.',
      features: [
        'Google Tag Manager beállítás',
        'GA4 és esemény nyomkövetés',
        'Konverziós nyomkövetés',
        'Adatok pontossága és jelentéskészítés'
      ],
      imagePosition: 'right',
      image: 'images/services/Trackig%26PerformanceSystems.webp'
    }
  ],
  advantagesTitle: 'Mi Tesz Minket Másabbá',
  advantages: [
    {
      title: 'Szakemberek, Nem Általánosok',
      description:
        'A növekedés minden része dedikált szakértő által kezelhető — a hirdetésektől és az SEO-tól a weboldalakig és a kreatívekig.'
    },
    {
      title: 'Az Eredmények Köré Felépítve',
      description:
        'Nem a kattintásokra vagy impressziókra fókuszálunk — mindaz, amit teszünk, valódi ügyfelek és bevételek generálása érdekében van megtervezve.'
    },
    {
      title: 'Rendszerek, Nem Csak Kampányok',
      description:
        'Teljes növekedési rendszereket építünk, ahol a forgalom, konverzió és teljesítmény együtt működnek.'
    },
    {
      title: 'Adatok a Találgatás Helyett',
      description:
        'Minden döntés tesztelésen, adaton és teljesítményen alapul — nem feltevéseken.'
    }
  ],
  pricingTitle: 'Átlátható Árazás. Valódi Növekedésre Felépítve',
  pricingSubtitle:
    'Az árazást az üzleted, a növekedési potenciál és a nyereséges skálázáshoz szükséges bevonódás szintje alapján strukturáljuk.',
  pricingComparisonTitle: 'Termék Összehasonlítás',
  pricingVatNote: 'Az összes ár az ÁFÁ nélkül, és a projekt hatálya alapján változhat.',
  pricingSpotlightsTitle: 'A munkához kialakítva, amely valóban mozgatja a bevételt',
  pricingFaqTitle: 'Gyakran Ismételt Kérdések',
  pricingCustomTitle: 'Egyedi Növekedési Rendszerek',
  pricingCustomSubtitle: 'Az igényeidre szabott díjak',
  pricingLimitedClientsTitle: 'Korlátozott Számú Ügyféllel Dolgozunk',
  pricingLimitedClientsBody:
    'Partnerségekre összpontosítunk, nem volumenre. Csak azokat a projekteket végezzük el, ahol tudjuk, hogy mérhető növekedést és hosszú távú sikert érhetünk el.',
  pricingBuildRightSystemTitle: 'Készítsük el az Üzletedhez Szükséges Rendszert',
  pricingBuildRightSystemBody:
    'Elemezzük az üzletedet és ajánljuk a legjobb megközelítést — az igényeidhez szabott díjakkal is.',
  pricingNoCommitment: 'Nincs kötelezettség. Csak jelenlét.',
  pricingPlans: [
    {
      name: 'Növekedés Alapítványa',
      price: 'Kezdve €500 / hó',
      description: 'Azon üzletek számára, amelyek strukturált kampányokkal és konzisztens optimalizálással indulnak.',
      ctaLabel: 'Kezdje El',
      recommendedBudget: 'under-1000',
      features: [
        'Google Ads kezelése',
        'Kampánya beállítás és optimalizálás',
        'SEO alapozás',
        'Alapszintű nyomkövetési beállítás',
        'Havi jelentéskészítés'
      ]
    },
    {
      name: 'Növekedés és Skálázás',
      price: 'Kezdve €800 / hó',
      description: 'Azon üzletek számára, amelyek egy teljes funnel megközelítéssel és mélyebb optimalizálással készen állnak a skálázásra.',
      ctaLabel: 'Beszélgessünk',
      featured: true,
      recommendedBudget: '1000-3000',
      features: [
        'Mindaz, ami az alapítványban van',
        'Meta Ads kezelése',
        'Folyamatos SEO optimalizálás',
        'Funnel optimalizálás',
        'Konverziós ráta fejlesztések',
        'Kreatív tesztelés és iteráció',
        'Fejlett nyomkövetés és adati elemzések'
      ]
    },
    {
      name: 'Teljesítményi Partner',
      price: '€1.300+ / hó',
      description: 'Azok a márkák számára, amelyek agresszív növekedést keresnek teljes stratégiai bevonással.',
      ctaLabel: 'Pályázz Nekünk',
      recommendedBudget: '3000-10000',
      features: [
        'Mindaz, ami a skálázásban van',
        'TikTok Ads kezelése',
        'Teljes növekedési stratégia és tervezés',
        'Napi teljesítményelemzés és döntések',
        'Költségvetési skálázási stratégia',
        'Kreatív irányítás (mit forgatni, tesztelni, skálázni)',
        'Közvetlen közreműködés és prioritási végrehajtás',
        'Folyamatos skálázás a csatornák között'
      ]
    }
  ],
  pricingSpotlights: [
    {
      eyebrow: '1',
      title: 'Egyedi webhelyek a projekt hatálya alapján',
      description: 'Bemutató oldalak és konverziófókuszú lapok az üzleti modelld és növekedési szinted körül kialakítva.'
    },
    {
      eyebrow: '2',
      title: 'Fotó- és videoprodukcio a projekt hatálya alapján',
      description: 'Kreatív eszközök a fizetett médiaértékesítés, márkagyártás és konverziófókuszú kampányok támogatására.'
    },
    {
      eyebrow: '3',
      title: 'Egyedi növekedési rendszerek',
      description: 'Stratégia, nyomkövetés, kreativ, SEO és média együttműködve egy teljesítményi rendszerként.'
    }
  ],
  pricingFeatures: [
    { label: 'Google Ads', foundation: true, scaling: true, partner: true },
    { label: 'Meta Ads', foundation: false, scaling: true, partner: true },
    { label: 'TikTok Ads', foundation: false, scaling: false, partner: true },
    { label: 'Fizetett Ads kezelése', foundation: true, scaling: true, partner: true },
    { label: 'Jelentéskészítés', foundation: true, scaling: true, partner: true },
    { label: 'SEO alapozás', foundation: true, scaling: true, partner: true },
    { label: 'Folyamatos SEO Optimalizálás', foundation: false, scaling: true, partner: true },
    { label: 'Nyomkövetési Beállítás', foundation: true, scaling: true, partner: true },
    { label: 'Fejlett Nyomkövetés és Hozzárendelés', foundation: false, scaling: true, partner: true },
    { label: 'Funnel Optimalizálás', foundation: false, scaling: true, partner: true },
    { label: 'Konverziós Ráta Optimalizálás', foundation: false, scaling: true, partner: true },
    { label: 'Kreatív Tesztelés', foundation: false, scaling: true, partner: true },
    { label: 'Növekedési Stratégia és Tervezés', foundation: false, scaling: false, partner: true },
    { label: 'Költségvetési Skálázási Stratégia', foundation: false, scaling: false, partner: true },
    { label: 'Kreatív Irányítás', foundation: false, scaling: false, partner: true },
    { label: 'Napi Optimalizálás és Döntések', foundation: false, scaling: false, partner: true },
    { label: 'Prioritási Támogatás', foundation: false, scaling: false, partner: true },
    { label: 'Webhely/Tartalom', foundation: false, scaling: false, partner: 'Egyedi' }
  ],
  pricingFaqs: [
    {
      question: 'Hány ügyféllel dolgozik?',
      answer:
        'Korlátozott ügyfélterhelést tartunk fenn, így minden számla valódi figyelmet kap. Átlagosan körülbelül 10-15 fiókot kezelünk specilistánként.'
    },
    {
      question: 'Garantálható az eredmények?',
      answer:
        'Egyetlen marketingpartner sem garantálhat eredményeket, de mi garantálhatjuk a mély bevonást, az egyértelműségjelentéskészítést és a konzisztens teljesítményfejlesztésre épített eljárást.'
    },
    {
      question: 'Mi a csomagokban?',
      answer:
        'Az összes csomag tartalmaz stratégiát, SEO-t, fizetett médiát, auditot, nyomkövetést és jelentéskészítést. A különbség az optimalizálás mélysége, a csatornakeverék és az együttműködés szintje.'
    },
    {
      question: 'Dolgozik egyedi webhelyekkel és tartalomgyártással?',
      answer:
        'Igen. Támogathatunk bemutató weboldalakat, e-kereskedelmi projekteket, fotózást és videoprodukciot mint egyedi növekedési rendszer részét.'
    }
  ],
  contactTitle: 'Beszéljünk a Növekedésedről',
  contactSubtitle:
    'Mesélj az üzletedről és céljaidról — világos stratégiával és az igényeidre szabott következő lépésekkel térünk vissza.',
  primaryCta: 'Nőjünk Együtt',
  growthServices: [
    {
      title: 'Fizetett Média, Amely Konvertál',
      description:
        'Magas teljesítményű kampányokat kezelünk a Google, Meta és TikTok között — a minőségi forgalom felkeltésére összpontosítva, amely valódi ügyfelekké és bevételekké alakul.'
    },
    {
      title: 'Teljesítményt Hajtó Kreativ',
      description:
        'Magas konverziós hirdetési kreatívokat, fotókat és videókat készítünk, amelyeket úgy terveztünk, hogy felhívjuk a figyelmet és javítsuk a konverziókat — nem csak jól nézzenek ki.'
    },
    {
      title: 'A Kattintástól az Ügyfelig',
      description:
        'Strukturált marketing funnel-eket építünk, amelyek a felhasználókat az első interakciótól a végső vásárlásig vezetik, maximalizálva az ügyfélút minden lépését.'
    },
    {
      title: 'Konverziőra Tervezett Webhelyek',
      description:
        'Webhelyeket és landingoldalakat tervezünk és optimalizálunk, amelyek a sebességre, felhasználói élményre és konverzióra összpontosítanak — a látogatókat fizető ügyfelekké alakítva.'
    },
    {
      title: 'SEO és Szerves Növekedés',
      description:
        'Optimalizáljuk webhelyed, hogy magasabbra rangsoroljuk, konzisztens forgalmat vonzz és hosszú távú láthatóságot építsük a fizetett hirdetéseken túl.'
    },
    {
      title: 'Nyomkövetés és Adatok Pontossága',
      description:
        'Nyomkövetési rendszereket állítunk be és optimalizálunk, hogy biztosítsuk, hogy minden döntés pontos adatokon alapuljon — a konverziótól az ügyfélviselkedésig.'
    }
  ],
  howWeWork: [
    {
      step: '01',
      title: 'Audit és Elemzés',
      description:
        'Elemezzük az üzleted, webhelyed, jelenlegi kampányaidat, nyomkövetésed és teljesítményed, hogy azonosítsuk, mi működik, mi hiányzik, és ahol a növekedés blokkolva van.'
    },
    {
      step: '02',
      title: 'Stratégia és Tervezés',
      description:
        'Egyedi növekedési tervet építünk az igényeid, budzsed, piaci és ügyfélutazások alapján — hogy minden csatornának legyen egyértelmű célja.'
    },
    {
      step: '03',
      title: 'Indítás és Megvalósítás',
      description:
        'Beállítjuk és elindítjuk a megfelelő kampányokat, kreatívokat, landingoldalakat és optimalizálásokat a legfontosabb csatornákon.'
    },
    {
      step: '04',
      title: 'Optimalizálás és Skálázás',
      description:
        'Folyamatosan tesztelünk, javítunk és skálázunk — jobb teljesítményre, magasabb konverziókra és nyereséges növekedésre összpontosítva.'
    }
  ],
  contact: {
    person: 'InsideGrowth',
    role: 'Digitális Marketing Ügynökség',
    email: 'contact@insidegrowth.ro',
    phone: '+40799900187'
  },
  ui: {
    nav: {
      home: 'Kezdőlap',
      about: 'Rólunk',
      growthResults: 'Növekedési Eredmények',
      services: 'Szolgáltatások',
      pricing: 'Árak',
      contact: 'Kapcsolat'
    },
    languageLabel: 'Nyelv',
    homeExploreServices: 'Nézd Meg a Szolgáltatásokat',
    headerCta: 'Nőjünk Együtt',
    footerTagline: 'Volt Google és Meta szakemberek, akik segítik a márkákat globálisan növekedni.',
    footerContactLabel: 'Kapcsolat',
    footerNavigateLabel: 'Navigáció',
    footerAllRightsReserved: 'Minden jog fenntartva',
    footerPrivacyPolicy: 'Adatvédelmi Irányelvek',
    footerCookiePolicy: 'Cookie Irányelvek',
    footerTermsConditions: 'Általános Feltételek',
    footerCopyrightPrefix: 'Szerzői jogok',
    homeWhoWeAre: 'INSIDEGROWTH',
    homeStrategiesTitle: 'Stratégiák, Amelyek Valódi Eredményeket Hoznak',
    homeAboutUs: 'Nőjünk Együtt',
    homeReadyTitle: 'A Növekedés Nem a Találgatásból Történik',
    homeStartGrowing: 'Nőjünk Együtt',
    homeViewPricing: 'Árak megtekintése',
    homeResultsEyebrow: 'Eredmények',
    homeResultsTitle: 'Lásd, mit tud nyújtani a folyamatunk',
    homeResultsBody: 'A stratégiát mérhető eredményekké alakítjuk a kiadások, a hatékonyság és a növekedés terén. Ez a szakasz hamarosan egy dedikált eredmények oldalra fog bővülni.',
    homeResultsLink: 'Tudj meg többet',
    statsCampaignsRun: 'Kampánya Optimalizálások',
    statsAverageRoi: 'Havi hirdetési költés',
    statsTopPlatforms: 'Google & Meta Fő Platformok',
    statsDataDriven: 'Teljesítményre Összpontosítva',
    aboutMissionEyebrow: 'Küldetésünk',
    aboutPlatformsEyebrow: 'Ez Mit Jelent Neked',
    aboutWhyChooseUs: 'Miért Minket Válassz',
    aboutTeamEyebrow: 'Csapatunk',
    aboutTeamTitle: 'Ismerd meg az InsideGrowth mögötti csapatot',
    aboutTeamSubtitle: 'Egy csapat szakember, akik mind az üzleted növekedésének egy kulcsfontosságú területére fókuszálnak.',
    aboutTeamTagline: 'Egy csapatként dolgozunk, egy célra fókuszálva: a te növekedésedre.',
    servicesApproachEyebrow: 'Megközelítésünk',
    cookieConsentMessage: 'Cookie-kat használunk a jobb felhasználói élmény érdekében. A folytatással elfogadod a Cookie Irányelveinket.',
    cookieConsentAccept: 'Elfogadom',
    cookieConsentDecline: 'Elutasítom',
    aboutEyebrow: 'Rólunk',
    aboutTitle: 'Szakemberek a Teljesítményi Marketing Szolgálatában',
    aboutLead:
      'Csapatunk a Google Ads, Meta, SEO és kreatívok közötti szakértelmet egyesít, hogy valódi, mérhető növekedést generáló rendszereket építsen.',
    servicesEyebrow: 'Szolgáltatások',
    servicesLead:
      'Nem izolált szolgáltatásokat kínálunk — teljes rendszereket építünk, amelyeket arra terveztek, hogy forgalmat generáljanak, ügyfeleket konvertáljanak és nyereségesen skálázza az üzletedet.',
    pricingEyebrow: 'Árak',
    pricingFeatureComparison: 'Funkció Összehasonlítás',
    pricingTableAriaLabel: 'Árcsomag funkció összehasonlítás',
    pricingFeatureHeader: 'Funkció',
    pricingStandardHeader: 'Alapozás',
    pricingPremiumHeader: 'Skálázás',
    pricingIncluded: 'Tartalmazza',
    pricingOptional: 'Opcionális',
    contactEyebrow: 'Kapcsolat',
    contactShareGoals: 'Mesélj az Üzletedről és Céljaidról',
    contactForm: {
      planLabel: 'Üzleti terv',
      planPlaceholder: 'Válassz tervet',
      planValidation: 'Kérjük, válassz tervet.',
      budgetLabel: 'Fizetett média költségvetés',
      budgetPlaceholder: 'Válassz költségvetési tartományt',
      budgetValidation: 'A költségvetési tartomány szükséges.',
      businessLabel: 'Cégnév',
      businessPlaceholder: 'Az üzleted neve',
      businessValidation: 'A cégnév szükséges.',
      fullNameLabel: 'Teljes név',
      fullNamePlaceholder: 'A neved',
      fullNameValidation: 'A név szükséges.',
      emailLabel: 'Üzleti e-mail',
      emailPlaceholder: 'te@ceg.hu',
      emailValidation: 'Írj be érvényes e-mail-t.',
      websiteLabel: 'Webhely',
      websitePlaceholder: 'weboldalad.hu',
      websiteValidation: 'A webhely szükséges.',
      phoneLabel: 'Telefonszám',
      phonePlaceholder: 'A telefonszámod',
      phoneValidation: 'Kérjük, adj meg érvényes telefonszámot.',
      budgetOptions: [
        { value: 'under-1000', label: '€500 – €1.000' },
        { value: '1000-3000', label: '€1.000 – €3.000' },
        { value: '3000-10000', label: '€3.000 – €10.000' },
        { value: '10000-plus', label: '€10.000+' }
      ],
      goalsLabel: 'Növekedési célok',
      goalsPlaceholder: 'Mesélj az üzletedről, céljaidról és azokról amit tudnunk kellene',
      goalsValidation: 'Kérjük, írj legalább 50 karaktert.',
      submitLabel: 'Küld Lekérdezést'
    },
    contactNextStepsTitle: 'Mi Történik Utána',
    contactNextSteps: [
      'Áttekintjük az üzleted',
      'Azonosítjuk a növekedési lehetőségeket',
      'Visszajövünk egy egyértelmű tervvel'
    ],
    contactResponseTimeTitle: 'Válaszidő',
    contactResponseTimeBody: 'Általában 24 órán belül válaszolunk',
    contactDirectContactTitle: 'Közvetlen kapcsolat',
    contactLimitedClientsNote: 'Korlátozott számú ügyféllel dolgozunk a minőség és teljesítmény biztosítása érdekében.',
    contactFaqTitle: 'Gyakran ismételt kérdések',
    contactFaqs: [
      {
        question: 'Hogyan működik a díjszabás?',
        answer:
          'A díjszabást az üzleted, céljaid és a hatékony skálázáshoz szükséges támogatás szintje alapján szabjuk testre. A megjelenített csomagok kiindulópontok — a végső díjszabás az konkrét igények körül épül.'
      },
      {
        question: 'Meddig tart az eredmények meglátásához?',
        answer:
          'A legtöbb kampánya az első 1-3 hónapban kezd javulni. Az egészséges növekedés azonban idővel, tesztelésen, optimalizáláson és skálázáson keresztül épül fel.'
      },
      {
        question: 'Nagy költségvetésre van szükségem az induláshoz?',
        answer:
          'Nem feltétlenül. Különböző költségvetési szintekkel dolgozunk, de az értelmes skálázáshoz mind a hirdetésekbe, mind az optimalizálásba megfelelő befektetésre van szükség.'
      },
      {
        question: 'Milyen platformokon dolgozik?',
        answer:
          'A Google, Meta (Facebook és Instagram) és TikTok között menedzselem a kampányokat — az üzleted legjobban illő szerint.'
      },
      {
        question: 'Csak hirdetéseket futtat, vagy mindent kezel?',
        answer:
          'Túlmegyünk a hirdetéseken. A teljes rendszerre összpontosítunk — beleértve a SEO-t, a webhely optimalizálást, a nyomkövetést és a kreatíveket — hogy biztosítsuk, hogy minden együttesen működik.'
      },
      {
        question: 'Mi tesz minket másabbá a többi ügynökségtől?',
        answer:
          'Nem a volumenre vagy a rövid távú sikerekre fókuszálunk. Olyan rendszereket építünk, amelyek hosszú távú növekedésre vannak tervezve, és csak azokkal az üzletekkel dolgozunk, ahol valódi hatást tudunk létrehozni.'
      },
      {
        question: 'Kínál egyszeri szolgáltatásokat?',
        answer:
          'A legtöbb esetben nem. Az folyamatos partnerségekre összpontosítunk, mivel az egységes optimalizálás az ami valódi eredményeket vezet.'
      },
      {
        question: 'Vagyok bevonva a folyamatba?',
        answer:
          'Igen. Hiszünk abban, hogy az erős kolaboráció jobb eredményekhez vezet, különösen amikor a termék insightok, ajánlatokés irány jönnek szóba.'
      }
    ],
    leadSavedMessage:
      'Köszönjük. Megkaptuk az részleteidet, és egy személyre szabott növekedési javaslatot készítünk.',
    leadSendingMessage: 'Az üzeneted küldése folyamatban…',
    leadErrorMessage: 'Hiba történt. Kérjük, próbálkozzon újra, vagy írjon nekünk közvetlenül.',
    homeGrowthEyebrow: 'Növekedési Rendszerek',
    homeHowWeScaleTitle: 'Hogyan Skálázunk az Üzletedet',
    homeHowWeScaleSubtitle: 'Növekedési Rendszerek, Nem Csak Szolgáltatások',
    homeHowWeWorkEyebrow: 'A Folyamatunk',
    homeHowWeWorkTitle: 'Hogyan Dolgozunk',
    homeHowWeWorkSubtitle:
      'Egy világos folyamat, amelyet arra terveztek, hogy a marketinget kiszámítható növekedési rendszerre fordítsa — az audittól a skálázható teljesítményig.',
    homeCredentialsTitle: 'Adatok, Audit és Skálázási Stratégia',
    homeCredentialsBody:
      'Elemezzük az adataidat, auditáljuk a teljesítményed, és folyamatosan optimalizáljuk a kampányokat az működőket skálázva és az nem működőket kiküszöbölve.',
    homeCredentialsBadge: 'Google & Meta Tanúsított Csapat · 20+ Év Kombinált Tapasztalat',
    homeMiniCta: 'Kész az üzleted skálázására?',
    homeModalCta: 'Kezdje El'
  },
  portfolio: [
    {
      eyebrow: 'Eredmények',
      title: 'Valódi Eredmények. Valódi Növekedés.',
      subtitle: 'Az olyan rendszerekre összpontosítunk, amelyek konzisztens teljesítményt generálnak — nem izolált győzelmeket.',
      description:
        'Mint adatalapú marketing ügynökség, az olyan rendszerekre összpontosítunk, amelyek konzisztens teljesítményt és skálázható növekedést generálnak — nem izolált győzelmeket. A valódi növekedés a megfelelő rendszerből származik. Az alábbi minden eredmény stratégia, végrehajtás és kollaboráció kombinációjával épül fel. Nem rövid távú győzelmeket követünk — az olyan rendszerekre összpontosítunk, amelyek konzisztens, skálázható növekedést generálnak az idő során.'
    },
    {
      title: 'E-kereskedelmi Növekedés Rendszer',
      metrics: ['48.6x ROAS (Kampánya Teljesítmény)', '€112K+ Bevétel Generálva'],
      description:
        'Az üzlet nagy potenciállal rendelkezett, de nem volt teljes optimalizálás az SEO és fizetett kampányok között. Az SEO szerkezetet az összes oldal és termék között újraépítettük, folyamatosan optimalizálva a kulcsszavakat és biztosítva a megfelelő indexelést a top keresési láthatóság megőrzéséhez. Ugyanakkor finomítottuk és skálázattuk a hirdetési kampányokat — a teljesítményre, termékkiválasztásra és full funnel optimalizálásra összpontosítva. Az eredmények 3 hónapok alatt fokozatosan épültek fel, amely konzisztens és skálázható növekedéshez vezetett.',
      imagePosition: 'left',
      image: 'images/results/Results1.webp',
    },
    {
      title: 'Lead Generálás és Helyi Növekedés',
      metrics: ['1M+ Impresszió', '144+ Konverzió'],
      description:
        'A cél nem csupán forgalom volt — hanem minőségi lead generálás egy fizikai üzlethez, amely szolgáltatásokat nyújt. Az SEO alapozást újraépítettük, strukturált hirdetési csoportokat hoztunk létre, és folyamatosan teszteltük a különböző kreatívokat és célzási stratégiákat. A fókusz az elsődleges szolgáltatás promóciójára volt, másodlagos hangsúllyal az eladásokon. Az folyamatos optimalizáláson keresztül állandó lead-folyamot értek el, és a kampányadaptálási hatékonyságot fejlesztettük az idővel.',
      imagePosition: 'right',
      image: 'images/results/Results2.webp',
    },
    {
      title: 'Teljes Növekedési Támogatás a Helyi Üzlethez',
      metrics: ['7.85x ROAS', 'A közel-nulláról a konzisztens növekedésig'],
      description:
        'Ez a projekt egy minimális online jelenléten alapuló helyi üzletből indult. Mindent az alapoktól építettünk fel — webhely, SEO szerkezet, terméklátványok és marketing kampányok. Több elem egyetlen rendszerbe kombinálásával segítettük az üzletet fokozatos növekedésben és egy erős online jelenlét felépítésében.',
      imagePosition: 'left',
      image: 'images/results/Results3.webp',
    },
    {
      title: 'Nem Mindenki Dolgozik',
      subtitle: 'Kész Meglátni Mit Tudunk Javítani az Üzletedben?',
      description:
        'Azt hiszünk, hogy a teljesítmény erős partnerségekből fakad. Ezért korlátozott számú ügyféllel dolgozunk — üzletek, ahol tudjuk, hogy valódi hatást tehetünk és együtt növekedhetünk. Minden projekt bizalomra, kommunikációra és hosszú távú együttműködésre épül. Az eredmények az iparág, költségvetés és piaci feltételek szerint változnak. A fokuszunk mindig ugyanaz: olyan rendszereket építeni, amelyek az működőket skálázza. Az jelenlegi beállítást elemezzük és pontosan megmutatjuk, hol van a növekedési lehetőség. Nincs kötelezettség. Csak működésbe helyezhető felmérés.',
      imagePosition: 'right'
    },
  ],
  seo: {
    home: {
      title: 'InsideGrowth | Digital Marketing Agency',
      description: 'We are a digital marketing agency helping businesses grow through Google Ads, Meta Ads, and SEO strategies focused on real results and scalable growth.',
      keywords: ['digital marketing agency', 'google ads', 'meta ads', 'SEO', 'InsideGrowth', 'performance marketing']
    },
    about: {
      title: 'About Our Marketing Agency | Growth-Focused Team',
      description: 'Learn more about our digital marketing agency and how we combine Google Ads, SEO, and performance strategies to help businesses scale.',
      keywords: ['about InsideGrowth', 'marketing agency team', 'google ads experts', 'SEO agency']
    },
    services: {
      title: 'Marketing Services | Google Ads, SEO & Website Growth',
      description: 'Explore our marketing services including Google Ads management, Meta Ads campaigns, SEO optimization, and website development.',
      keywords: ['marketing services', 'google ads management', 'meta ads', 'SEO optimization', 'website development']
    },
    growthResults: {
      title: 'Growth Results | Marketing Agency Case Studies',
      description: 'See real results from Google Ads, Meta Ads, and SEO campaigns focused on consistent growth and performance.',
      keywords: ['growth results', 'case studies', 'google ads results', 'SEO results', 'marketing performance']
    },
    pricing: {
      title: 'Marketing Agency Pricing | Google Ads & SEO Services',
      description: 'Transparent pricing for marketing services including Google Ads, SEO, and full growth systems tailored to your business.',
      keywords: ['marketing agency pricing', 'google ads pricing', 'SEO pricing', 'growth systems pricing']
    },
    contact: {
      title: 'Contact Our Marketing Agency | Start Your Growth Plan',
      description: 'Get in touch with our digital marketing agency to discuss your business, strategy, and growth opportunities.',
      keywords: ['contact InsideGrowth', 'start growth plan', 'marketing agency contact', 'insidegrowth.ro']
    },
    privacyPolicy: {
      title: 'Adatvédelmi Irányelvek',
      description: 'Olvasd el az InsideGrowth adatvédelmi irányelveit. Tudj meg az adataid védelméről.',
      keywords: ['InsideGrowth adatvédelem', 'adatvédelem', 'GDPR', 'insidegrowth.ro']
    },
    cookiePolicy: {
      title: 'Cookie Irányelvek',
      description: 'Tudj meg, hogyan használja az InsideGrowth a cookie-kat a jobb felhasználói élmény érdekében.',
      keywords: ['InsideGrowth cookie', 'cookie irányelvek', 'analitika', 'insidegrowth.ro']
    },
    termsConditions: {
      title: 'Általános Feltételek',
      description: 'Olvasd el az InsideGrowth általános feltételeit, amelyek a szolgáltatások és webhely használatát szabályozzák.',
      keywords: ['InsideGrowth feltételek', 'általános feltételek', 'szolgáltatás szerződés', 'insidegrowth.ro']
    }
  },
  geo: {
    organization: {
      name: 'InsideGrowth',
      url: 'https://insidegrowth.ro',
      logo: 'https://insidegrowth.ro/images/logos/inside_growth_logo_512p.webp',
      description: 'Az InsideGrowth egy romániai teljesítménymarketing-ügynökség, amely Google Ads, Meta Ads, SEO és konverzióközpontú webfejlesztés területén specializálódott. A csapat volt Google és Meta szakemberekből áll, és helyi vállalkozások, e-kereskedelmi márkák és növekedési potenciállal rendelkező cégek számára épít teljes növekedési rendszereket.',
      email: 'contact@insidegrowth.ro',
      phone: '+40799900187',
      address: {
        streetAddress: '',
        addressLocality: 'Targu Mures',
        addressRegion: 'Mures',
        postalCode: '540000',
        addressCountry: 'RO'
      },
      sameAs: ['https://twitter.com/insideads'],
      areaServed: ['Romania'],
      foundingDate: '2024',
      numberOfEmployees: 5
    },
    servicesSchema: [
      {
        name: 'Audit & Növekedés Elemzés',
        description: 'Elemezzük az egész marketing ökoszisztémát — a webhely teljesítménytől és a nyomkövetési beállítástól a hirdetési kampányokig és a keresőoptimalizálásig — hogy azonosítsuk, mi működik, mi korlátoz és ahol a legnagyobb növekedési lehetőségek vannak.',
        serviceType: 'DigitalMarketingService',
        areaServed: 'Romania'
      },
      {
        name: 'Fizetett Média, Amely Konvertál',
        description: 'Magas teljesítményű kampányokat kezelünk és skálázunk a Google, Meta és TikTok között — a minőségi forgalom felkeltésére összpontosítva, amely valódi ügyfelekké és bevételekké alakul.',
        serviceType: 'DigitalMarketingService',
        areaServed: 'Romania'
      },
      {
        name: 'SEO és Szerves Növekedés',
        description: 'Optimalizáljuk a webhelyet, hogy magasabbra rangsoroljuk, konzisztens forgalmat vonzz és hosszú távú láthatóságot építsük, amely támogatja a fizetett kampányokat.',
        serviceType: 'DigitalMarketingService',
        areaServed: 'Romania'
      },
      {
        name: 'Konverzióra Tervezett Webhelyek',
        description: 'Egyedi weboldalakat és e-kereskedelmi platformokat tervezünk és fejlesztünk, amelyek a sebességre, felhasználói élményre és konverzióra összpontosítanak.',
        serviceType: 'DigitalMarketingService',
        areaServed: 'Romania'
      },
      {
        name: 'Kreatív Produkció',
        description: 'Magas minőségű fotó- és videótartalmakat készítünk, amelyeket úgy terveztünk, hogy felhívjuk a figyelmet és javítsuk a teljesítményt a marketing csatornákon.',
        serviceType: 'DigitalMarketingService',
        areaServed: 'Romania'
      },
      {
        name: 'Nyomkövetés és Teljesítményi Rendszerek',
        description: 'Felépítjük a marketinged mögött lévő infrastruktúrát — biztosítva, hogy minden cselekvés nyomon követett, mért és valós adatok alapján optimalizált.',
        serviceType: 'DigitalMarketingService',
        areaServed: 'Romania'
      }
    ],
    pricingFaqs: [
      {
        question: 'Hány ügyféllel dolgozik?',
        answer: 'Korlátozott ügyfélterhelést tartunk fenn, így minden számla valódi figyelmet kap. Átlagosan körülbelül 10-15 fiókot kezelünk specialistánként.'
      },
      {
        question: 'Garantálható az eredmények?',
        answer: 'Egyetlen marketingpartner sem garantálhat eredményeket, de mi garantálhatjuk a mély bevonást, az egyértelmű jelentéskészítést és a konzisztens teljesítményfejlesztésre épített eljárást.'
      },
      {
        question: 'Mi a csomagokban?',
        answer: 'Az összes csomag tartalmaz stratégiát, SEO-t, fizetett médiát, auditot, nyomkövetést és jelentéskészítést. A különbség az optimalizálás mélysége, a csatornakeverék és az együttműködés szintje.'
      },
      {
        question: 'Dolgozik egyedi webhelyekkel és tartalomgyártással?',
        answer: 'Igen. Támogathatunk bemutató weboldalakat, e-kereskedelmi projekteket, fotózást és videóprodukciót mint egyedi növekedési rendszer részét.'
      }
    ],
    contactFaqs: [
      {
        question: 'Hogyan működik a díjszabás?',
        answer: 'A díjszabást az üzleted, céljaid és a hatékony skálázáshoz szükséges támogatás szintje alapján szabjuk testre. A megjelenített csomagok kiindulópontok — a végső díjszabás az konkrét igények körül épül.'
      },
      {
        question: 'Meddig tart az eredmények meglátásához?',
        answer: 'A legtöbb kampány az első 1-3 hónapban kezd javulni. Az egészséges növekedés azonban idővel, tesztelésen, optimalizáláson és skálázáson keresztül épül fel.'
      },
      {
        question: 'Nagy költségvetésre van szükségem az induláshoz?',
        answer: 'Nem feltétlenül. Különböző költségvetési szintekkel dolgozunk, de az értelmes skálázáshoz mind a hirdetésekbe, mind az optimalizálásba megfelelő befektetésre van szükség.'
      },
      {
        question: 'Milyen platformokon dolgozik?',
        answer: 'A Google, Meta (Facebook és Instagram) és TikTok között menedzseljük a kampányokat — az üzleted legjobban illő szerint.'
      },
      {
        question: 'Csak hirdetéseket futtat, vagy mindent kezel?',
        answer: 'Túlmegyünk a hirdetéseken. A teljes rendszerre összpontosítunk — beleértve a SEO-t, a webhely optimalizálást, a nyomkövetést és a kreatíveket — hogy biztosítsuk, hogy minden együttesen működik.'
      },
      {
        question: 'Mi tesz minket másabbá a többi ügynökségtől?',
        answer: 'Nem a volumenre vagy a rövid távú sikerekre fókuszálunk. Olyan rendszereket építünk, amelyek hosszú távú növekedésre vannak tervezve, és csak azokkal az üzletekkel dolgozunk, ahol valódi hatást tudunk létrehozni.'
      },
      {
        question: 'Kínál egyszeri szolgáltatásokat?',
        answer: 'A legtöbb esetben nem. Az folyamatos partnerségekre összpontosítunk, mivel az egységes optimalizálás az ami valódi eredményeket vezet.'
      },
      {
        question: 'Vagyok bevonva a folyamatba?',
        answer: 'Igen. Hiszünk abban, hogy az erős kollaboráció jobb eredményekhez vezet, különösen amikor a termék insightok, ajánlatok és irány jönnek szóba.'
      }
    ],
    team: [
      {
        name: 'Razvan Puscas',
        jobTitle: 'Alapító & Növekedési Stratéga',
        description: 'Irányítja a stratégiát, a fizetett médiát és az SEO-t, biztosítva, hogy a rendszer minden része együtt dolgozzon a valódi üzleti növekedésért.'
      },
      {
        name: 'Andrei Puscas',
        jobTitle: 'Fizetett Média Szakértő',
        description: 'Google és Meta kampányokat kezel és optimalizál, a teljesítményre, skálázásra és jövedelmezőségre fókuszálva.'
      },
      {
        name: 'Paul Tatar',
        jobTitle: 'Web és Funnel Szakértő',
        description: 'Magas konverziójú weboldalakat és landing page-eket épít, amelyek a forgalmat ügyfelekké alakítják.'
      },
      {
        name: 'Mihai Borsan',
        jobTitle: 'Kreatív Szakértő',
        description: 'Fotó- és videótartalmakat készít, amelyek célja a figyelem megragadása és a konverziók növelése.'
      },
      {
        name: 'Nico Puscas',
        jobTitle: 'Ügyfél Növekedés & Értékesítés',
        description: 'Közvetlenül dolgozik az ügyfelekkel, hogy megértse a céljaikat, és biztosítsa a megfelelő stratégia megvalósítását.'
      }
    ],
    caseStudies: [
      {
        title: 'E-kereskedelmi Növekedés Rendszer',
        description: 'Az üzlet nagy potenciállal rendelkezett, de nem volt teljes optimalizálás az SEO és fizetett kampányok között. Az SEO szerkezetet újraépítettük és skálázattuk a hirdetési kampányokat, elérve 48.6x ROAS-t és €112K+ bevételt.',
        keywords: ['e-kereskedelem', 'Google Ads', 'SEO', 'ROAS', 'fizetett kampányok', 'szerves növekedés']
      },
      {
        title: 'Lead Generálás és Helyi Növekedés',
        description: 'Minőségi lead generálás egy fizikai üzlethez, amely szolgáltatásokat nyújt. Az SEO alapozást újraépítettük és strukturált hirdetési csoportokat hoztunk létre, elérve 1M+ impressziót és 144+ konverziót.',
        keywords: ['lead generálás', 'helyi üzlet', 'Google Ads', 'Meta Ads', 'helyi SEO', 'konverziók']
      },
      {
        title: 'Teljes Növekedési Támogatás a Helyi Üzlethez',
        description: 'Minimális online jelenléttől a konzisztens növekedésig. Mindent az alapoktól építettünk fel — webhely, SEO, termékvizualizációk és kampányok — elérve 7.85x ROAS-t.',
        keywords: ['helyi üzlet', 'webhely fejlesztés', 'SEO', 'digitális marketing', 'ROAS', 'nulláról indulás']
      }
    ],
    breadcrumbs: {
      home: [
        { name: 'Kezdőlap', url: 'https://insidegrowth.ro/' }
      ],
      about: [
        { name: 'Kezdőlap', url: 'https://insidegrowth.ro/' },
        { name: 'Rólunk', url: 'https://insidegrowth.ro/about' }
      ],
      services: [
        { name: 'Kezdőlap', url: 'https://insidegrowth.ro/' },
        { name: 'Szolgáltatások', url: 'https://insidegrowth.ro/services' }
      ],
      pricing: [
        { name: 'Kezdőlap', url: 'https://insidegrowth.ro/' },
        { name: 'Árak', url: 'https://insidegrowth.ro/pricing' }
      ],
      contact: [
        { name: 'Kezdőlap', url: 'https://insidegrowth.ro/' },
        { name: 'Kapcsolat', url: 'https://insidegrowth.ro/contact' }
      ],
      growthResults: [
        { name: 'Kezdőlap', url: 'https://insidegrowth.ro/' },
        { name: 'Növekedési Eredmények', url: 'https://insidegrowth.ro/growth-results' }
      ],
      privacyPolicy: [
        { name: 'Kezdőlap', url: 'https://insidegrowth.ro/' },
        { name: 'Adatvédelmi Irányelvek', url: 'https://insidegrowth.ro/privacy-policy' }
      ],
      cookiePolicy: [
        { name: 'Kezdőlap', url: 'https://insidegrowth.ro/' },
        { name: 'Cookie Irányelvek', url: 'https://insidegrowth.ro/cookie-policy' }
      ],
      termsConditions: [
        { name: 'Kezdőlap', url: 'https://insidegrowth.ro/' },
        { name: 'Általános Feltételek', url: 'https://insidegrowth.ro/terms-conditions' }
      ]
    },
    aiContext: 'Az InsideGrowth egy romániai teljesítménymarketing-ügynökség, amely Google Ads, Meta Ads, SEO és konverzióközpontú webfejlesztés területén specializálódott. A csapat volt Google és Meta szakemberekből áll, és helyi vállalkozások, e-kereskedelmi márkák és növekedési potenciállal rendelkező cégek számára épít teljes növekedési rendszereket.',
    inLanguage: 'hu-HU'
  },
  legal: {
    privacyPolicy: {
      title: 'Adatvédelmi Irányelvek',
      lastUpdated: '2026. április 30.',
      sections: [
        {
          heading: 'I. fejezet. Általános áttekintés',
          paragraphs: [
            'Az insidegrowth.ro weboldal a SELLMOTION S.R.L. tulajdonában és üzemeltetésében áll („Insidegroth”, „mi”). A SELLMOTION S.R.L. székhelye Targu Muresben található, a Kereskedelmi Nyilvántartásban J2025039552007 számon van bejegyezve, adószáma pedig RO51902547.',
            'Az „insidegrowth.ro” alatt minden olyan weboldalt, landing oldalt vagy aldomaint értünk, amelyet a SELLMOTION S.R.L. birtokol, kezel vagy üzemeltet.',
            'Jelen Adatvédelmi Irányelvek ismertetik, hogyan gyűjtjük és kezeljük a személyes adatokat, amikor használod az oldalt, űrlapokat töltesz ki, anyagokat töltesz le, feliratkozol a hírlevélre vagy kapcsolatba lépsz velünk a megjelenített elérhetőségeken keresztül.',
            'Az oldal használatával megerősíted, hogy elolvastad és megértetted ezeket az Adatvédelmi Irányelveket. Ha nem értesz egyet az alábbiakkal, kérjük, ne használd az űrlapokat, és ne adj meg személyes adatokat az oldalon keresztül.'
          ]
        },
        {
          heading: 'II. fejezet. Fogalmak és meghatározások',
          paragraphs: [
            'Online platform / Oldal: Az insidegrowth.ro és a SELLMOTION S.R.L. által kezelt kapcsolódó oldalak.',
            'Adatkezelő: SELLMOTION S.R.L., Targu Mures, J2025039552007, RO51902547',
            'Felhasználó: Az az egyén vagy jogi személy, aki az oldalt használja',
            'Személyes adat: Olyan információ, amely közvetve vagy közvetlenül azonosíthat egy személyt, például név, e-mail cím, telefonszám és a küldött üzenetek tartalma',
            'Beküldés: Az adatok továbbítása a Felhasználó által az oldalon keresztül, például kapcsolatfelvételi űrlap kitöltése, hírlevélre feliratkozás vagy anyag letöltése által',
            'Adatfeldolgozó: Olyan szerződéses partner, aki az Adatkezelő nevében, megállapodás alapján dolgoz fel adatokat'
          ]
        },
        {
          heading: 'III. fejezet. Elérhetőségek',
          paragraphs: [
            'Személyes adatokkal kapcsolatos kérdések vagy megkeresések esetén az alábbi elérhetőségeken kereshetsz meg minket:',
            'E-mail: office@insidegrowth.ro',
            'Telefon: +40 799 900 187',
            'Nincs kijelölt adatvédelmi tisztviselőnk (DPO). A személyes adatokkal kapcsolatos megkereséseket a fenti e-mail címen kezeljük.'
          ]
        },
        {
          heading: 'IV. fejezet. Milyen adatokat gyűjtünk',
          paragraphs: [
            'Az oldal használatának módjától függően az alábbi adatkategóriákat gyűjthetjük: név és vezetéknév, e-mail cím, telefonszám, az üzenet és a szabad szöveges mezőkben megadott információk, az űrlapokban, kérdőívekben vagy kvízekben adott válaszok, a hírlevél-feliratkozáshoz megadott adatok, valamint az anyagok (lead magnetek) eléréséhez vagy letöltéséhez megadott adatok.',
            'Nem végzünk automatizált profilalkotást, és nem hozunk olyan, kizárólag automatizált döntéseket, amelyek joghatással vagy hasonló hatással járnának a Felhasználókra.'
          ]
        },
        {
          heading: 'V. fejezet. Az adatkezelés céljai és jogalapjai',
          paragraphs: [
            'A személyes adatokat az alábbi célokból kezeljük: az űrlapokon vagy közvetlen kapcsolaton keresztül indított megkeresésekre és beszélgetésekre való válaszadás, ajánlattétel és előzetes szerződéses lépések, hírlevél útján történő kommunikáció küldése, a kért anyagok elérhetővé tétele letöltés útján, a weboldal teljesítményének mérése és a felhasználói élmény javítása, valamint a konverziók mérése és a marketingkampányok optimalizálása.',
            'Az ehhez kapcsolódó jogalapok: az ajánlatkérésekre és az űrlapokon indított egyeztetésekre adott válaszoknál az előzetes szerződéses lépések teljesítése; a marketingkommunikáció (hírlevél), az anyagok letöltése (lead magnetek) és a követési eszközök (pixelek / cookie-k) aktiválásánál az hozzájárulás; a weboldal teljesítményének mérésénél, a kampányok optimalizálásánál és a platform biztonságánál az jogos érdek.'
          ]
        },
        {
          heading: 'VI. fejezet. Használt eszközök és technikai adatok',
          paragraphs: [
            'Az oldal mérési és marketingeszközöket használhat, amelyeket a Google Tag Manageren keresztül valósítunk meg. A cookie-bannerben megadott hozzájárulástól függően aktiválhatjuk a Google Analyticset a forgalom és teljesítmény elemzésére, a Google Ads-et a konverziók mérésére és a kampányok optimalizálására, valamint a Meta Ads-et a Meta Business Manageren keresztül a konverziók mérésére és a kampányok optimalizálására.',
            'A gyakorlatban az elemző szolgáltatások az IP-címet ideiglenesen feldolgozhatják technikai funkciók, például biztonság és helymeghatározás céljából. Ezt az adatot nem használjuk azonosításra, és nem követjük az IP-címet azonosító elemként a jelentéseinkben.'
          ]
        },
        {
          heading: 'VII. fejezet. Címzettek, adatfeldolgozók és adattovábbítások',
          paragraphs: [
            'Az adatokat a Hostico tárhelyszolgáltató, a Google Workspace, a Google Tag Manager, a Google Analytics, a Google Ads, a Meta Business Manager, valamint együttműködők és szerződéses partnerek, beleértve a szabadúszókat is, kezelhetik, amikor ez a szolgáltatások nyújtásához szükséges.',
            'Amennyiben bizonyos szolgáltatók az Európai Gazdasági Térségen kívül találhatók, az adattovábbításra a GDPR által megengedett feltételek mellett kerülhet sor, beleértve az általános szerződési kikötéseket és adott esetben további intézkedéseket. Személyes adatokat nem értékesítünk, és nem adjuk át azokat harmadik feleknek a szolgáltatásainktól független kereskedelmi célokra.',
            'Az elemző és hirdetési szolgáltatások használata során bizonyos adatok a Google és a Meta Egyesült Államokban található anyavállalataihoz továbbíthatók vagy azok számára hozzáférhetővé válhatnak. Ezek az adattovábbítások az EU-U.S. Data Privacy Framework alapján (tanúsított szervezetek esetén) vagy az Európai Bizottság által jóváhagyott Standard Contractual Clauses (SCC) alapján történnek, és az Európai Unióban elvárhatóval egyenértékű adatvédelmi szintet biztosítanak.'
          ]
        },
        {
          heading: 'VIII. fejezet. Megőrzési idő',
          paragraphs: [
            'A kapcsolatfelvételi űrlapokon gyűjtött adatokat legfeljebb 1 évig őrizzük meg olyan megkeresések esetén, amelyek nem vezettek szerződéshez. A hírlevél-feliratkozáshoz vagy anyagok letöltéséhez megadott adatokat 3 évig őrizzük az utolsó interakciótól számítva, vagy a hozzájárulás visszavonásáig.',
            'A hozzájárulás bármikor visszavonható a kommunikációkban található leiratkozási lehetőséggel vagy az office@insidegrowth.ro címre küldött kéréssel.'
          ]
        },
        {
          heading: 'IX. fejezet. Az érintettek jogai',
          paragraphs: [
            'A GDPR szerint a következő jogok illetnek meg: hozzáféréshez való jog, helyesbítéshez való jog, törléshez való jog, az adatkezelés korlátozásához való jog, tiltakozáshoz való jog, adathordozhatósághoz való jog, a hozzájárulás visszavonásának joga, ha az adatkezelés hozzájáruláson alapul, valamint a panasztétel joga az illetékes hatóságnál.',
            'A jogok gyakorlásához a hello@agensio.ro címre írhatsz. Szükség esetén további információkat kérhetünk a személyazonosság megerősítésére.'
          ]
        },
        {
          heading: 'X. fejezet. Kiskorúak',
          paragraphs: [
            'Az oldal és a bemutatott szolgáltatások nem kiskorúak számára készültek. Nem gyűjtünk szándékosan 18 év alatti személyek adatait. Ha azt gyanítod, hogy ilyen adatokat kaptunk, kérjük, vedd fel velünk a kapcsolatot a törlés érdekében.'
          ]
        },
        {
          heading: 'XI. fejezet. Cookie-k és hozzájárulás',
          paragraphs: [
            'Az oldal cookie-kat és hasonló technológiákat használ. A hozzájárulás kezelése a Cookie Consent by Moove bővítményen keresztül történik. Az opcionális cookie-k, például az elemzési és marketing cookie-k, a Felhasználó által kifejezett választások alapján aktiválódnak.',
            'A kategóriákkal és kezelésükkel kapcsolatos részletekért kérjük, tekintsd meg az oldalon elérhető Cookie-szabályzatot.'
          ]
        },
        {
          heading: 'XII. fejezet. Adatbiztonság',
          paragraphs: [
            'Technikai és szervezési intézkedéseket alkalmazunk az adatok védelme érdekében, beleértve a hozzáférés-ellenőrzést, a szerepkörök szétválasztását, a szerveroldali védelmet és a biztonságos kommunikációs csatornák használatát.',
            'Az űrlapokon keresztüli információküldés a Felhasználó önkéntes adatszolgáltatását jelenti. Javasoljuk, hogy ne küldj olyan érzékeny információt, amely nem szükséges a kérés elbírálásához.'
          ]
        },
        {
          heading: 'XIII. fejezet. Harmadik félhez vezető linkek',
          paragraphs: [
            'Az oldal tartalmazhat harmadik felek által üzemeltetett weboldalakra mutató linkeket. Nem ellenőrizzük azok tartalmát vagy szabályzatait, és használatuk saját felelősségre történik. Javasoljuk az érintett oldalak adatvédelmi szabályzatainak áttekintését.'
          ]
        },
        {
          heading: 'XIV. fejezet. A szabályzat frissítése',
          paragraphs: [
            'Ezt az Adatvédelmi Irányelvet frissíthetjük, ha változások történnek a tevékenységünkben, a használt eszközökben vagy a jogszabályi követelményekben. A frissített verziót ezen az oldalon tesszük közzé.'
          ]
        },
        {
          heading: 'XV. fejezet. Elérhetőségek',
          paragraphs: [
            'Az ezzel a szabályzattal kapcsolatos kérdések, javaslatok és megkeresések az office@insidegrowth.ro címre vagy a +40 799 900 187 telefonszámra küldhetők.'
          ]
        },
        {
          heading: 'XVI. fejezet. Záró rendelkezések',
          paragraphs: [
            'Ha a fenti rendelkezések bármelyike semmisnek vagy érvénytelennek bizonyul, ez nem érinti a többi rendelkezés érvényességét.',
            'Frissített verzió dátuma: 30.04.2026'
          ]
        }
      ]
    },
    cookiePolicy: HUNGARIAN_COOKIE_POLICY,
    termsConditions: {
      title: 'Általános Szerződési Feltételek',
      lastUpdated: '2026. április 30.',
      sections: [
        {
          heading: 'I. fejezet. Általános áttekintés',
          paragraphs: [
            'Az insidegrowth.ro weboldal a SELLMOTION S.R.L. tulajdonában és üzemeltetésében áll („Insidegroth”, „mi”). A SELLMOTION S.R.L. székhelye Targu Muresben található, a Kereskedelmi Nyilvántartásban J2025039552007 számon van bejegyezve, adószáma pedig RO51902547.',
            'Az „insidegrowth.ro” alatt minden olyan weboldalt, landing oldalt vagy aldomaint értünk, amelyet a SELLMOTION S.R.L. birtokol, kezel vagy üzemeltet. A webhelyen böngészés közben az olyan kifejezések, mint a „mi” vagy „minket”, a fent említett társaságra utalnak.',
            'Az insidegrowth.ro online információkat biztosít az alábbi feltételeket elfogadó felhasználók számára, valamint az oldalon elérhető további szabályzatok számára.',
            'Online platformunk meglátogatásával és használatával vállalod, hogy betartod ezeket az Általános Szerződési Feltételeket, valamint az oldalon említett kapcsolódó szabályzatokat. Ezek a feltételek minden felhasználóra vonatkoznak, beleértve a böngésző látogatókat, a megkereséseket küldő és az anyagokat letöltő felhasználókat is.',
            'Kérjük, használd előtt olvasd el ezeket a feltételeket. Az oldal bármely részének elérésével vagy használatával megerősíted, hogy elfogadod a rendelkezéseket. Ha nem fogadod el a feltételeket, kérjük, hagyd abba az oldal használatát, és ne használd az elérhető űrlapokat vagy anyagokat.',
            'Az oldalhoz hozzáadott minden új funkció vagy szakasz ezeknek a feltételeknek lesz alárendelve. Fenntartjuk a jogot, hogy bármely részt frissítsünk, módosítsunk vagy lecseréljünk a frissített változat közzétételével ezen az oldalon. A lap tartalmának rendszeres ellenőrzése a te felelősséged. Az oldal használatának folytatása a változások közzététele után az elfogadást jelenti.'
          ]
        },
        {
          heading: 'II. fejezet. Fogalmak és meghatározások',
          paragraphs: [
            'Online platform / Oldal: Az insidegrowth.ro és a SELLMOTION S.R.L. által kezelt kapcsolódó oldalak.',
            'Tulajdonos: SELLMOTION S.R.L., Targu Muresben található székhellyel, a Kereskedelmi Nyilvántartásban J2025039552007 számon bejegyezve, adószáma RO51902547',
            'Felhasználó: Az oldalt használó természetes vagy jogi személy',
            'Beküldés: Az adatok továbbítása a Felhasználó által az oldalon keresztül, például kapcsolatfelvételi űrlap kitöltésével, hírlevélre feliratkozással vagy anyag letöltésével',
            'Link: Belső vagy külső oldalra mutató, kattintással elérhető hivatkozás',
            'Szolgáltatások: Az oldalon bemutatott online marketing- és webfejlesztési szolgáltatások, beleértve a Google és Meta kampányokat, a tanácsadást és a kapcsolódó szolgáltatásokat'
          ]
        },
        {
          heading: 'III. fejezet. Szellemi tulajdonjog',
          paragraphs: [
            'Az insidegrowth.ro weboldal tartalma, beleértve a szövegeket, képeket, grafikai elemeket, letölthető anyagokat, szkripteket, oldalszerkezeteket, kódot és vizuális arculati elemeket, az insidegrowth.ro tulajdonát képezi, vagy jogszerűen, használati joggal kerül felhasználásra. Bármely elem írásos hozzájárulás nélküli használata tilos, és az alkalmazandó jogszabályok szerint felelősséget vonhat maga után.',
            'Egyes anyagok használatára külön megállapodás vagy az anyag átadásakor kifejezetten jelzett feltételek alapján adhatunk jogot a Felhasználónak. Ez a jog kizárólag a megjelölt célra, időtartamra és személyre korlátozódik, és nem biztosít jogot az oldal más elemeire.',
            'Az oldalon harmadik felekhez tartozó márkanevek vagy logók használata tájékoztató jellegű, és kifejezett kijelentés hiányában nem jelent kapcsolatot, szponzorációt vagy ajánlást.',
            'Ha esetleges szerzői jogsértést észlelsz az oldalon, kérjük, vedd fel velünk a kapcsolatot az office@insidegrowth.ro címen.'
          ]
        },
        {
          heading: 'IV. fejezet. Általános használati feltételek',
          paragraphs: [
            'Az oldal használatával megerősíted, hogy legalább 18 éves vagy, és jogképes vagy jognyilatkozatok megtételére. Az oldal nem kiskorúaknak szól, és nem gyűjtünk szándékosan 18 év alatti személyektől adatot.',
            'Az oldal tartalma tájékoztató jellegű. A tartalom egyetlen része sem minősül a szolgáltatások nyújtására vonatkozó végleges és kötelező ajánlatnak. Bármely együttműködés ajánlat, szerződés vagy írásos megállapodás elfogadásával jön létre, az adott esettől függően.',
            'Ésszerű erőfeszítéseket teszünk az információk naprakészen tartására, de előfordulhatnak tipográfiai hibák, pontatlanságok vagy kihagyások. A tartalmat bármikor kijavíthatjuk és frissíthetjük.',
            'Tilos az oldalt rosszindulatú kód továbbítására, jogosulatlan hozzáférési kísérletekre, spamre, jogosulatlan adatgyűjtésre vagy bármilyen olyan cselekményre használni, amely az oldal működését befolyásolhatja vagy kárt okozhat.',
            'Az oldalhoz való hozzáférést részben vagy egészben korlátozhatjuk vagy megszüntethetjük a jelen feltételek megsértése esetén, vagy ha ésszerűen úgy ítéljük meg, hogy ez a platform biztonsága érdekében szükséges.'
          ]
        },
        {
          heading: 'V. fejezet. Szolgáltatások, becslések és eredmények',
          paragraphs: [
            'Az oldalon bemutatott szolgáltatások közé tartozhat az online marketing, a Google és Meta kampányok, az elemzés és követés, a stratégia, az optimalizálás és a webfejlesztés. A teljesítések, határidők és kereskedelmi feltételek pontos részleteit a szerződéses dokumentumok határozzák meg.',
            'Bármely becslés, előrejelzés vagy eredményre példa tájékoztató jellegű, és olyan tényezőktől függ, mint a költségvetés, az iparág, az évszak, a verseny, a népszerűsített termék vagy szolgáltatás minősége, a technikai feltételek és a közönség viselkedése. Kifejezett szerződéses kikötés hiányában nem garantálunk konkrét pénzügyi eredményeket.',
            'A Felhasználó tudomásul veszi, hogy az online marketing szolgáltatások olyan technikai és piaci változókat tartalmaznak, amelyeket az Adatkezelő nem tud teljes mértékben ellenőrizni. A megadott becslések és előrejelzések tájékoztató jellegűek, és történeti adatokon vagy pillanatnyi elemzésen alapulnak, nem jelentenek eredménykötelezettséget. Az Adatkezelő nem felel semmilyen közvetlen vagy közvetett veszteségért, amely harmadik fél platformjainak algoritmusváltozásaiból (például Google, Meta, TikTok) vagy azok hirdetési szabályzatának változásaiból ered. Minden hirdetési költségvetés kizárólag a Felhasználó felelőssége.'
          ]
        },
        {
          heading: 'VI. fejezet. Személyes adatok kezelése',
          paragraphs: [
            'Tiszteletben tartjuk a weboldal felhasználóinak bizalmas adatkezelését. Az oldal személyes adatok megadása nélkül is látogatható. Az adatokat akkor kezeljük, amikor a Felhasználó űrlapokon keresztül információt küld, feliratkozik a hírlevélre, anyagokat tölt le vagy a rendelkezésre álló csatornákon keresztül felveszi velünk a kapcsolatot.',
            'Az adatkategóriákra, célokra és jogokra vonatkozó részletekért kérjük, tekintsd meg az oldalon elérhető Adatvédelmi Irányelveket.'
          ]
        },
        {
          heading: 'VII. fejezet. Cookie-k használata',
          paragraphs: [
            'Az insidegrowth.ro cookie-kat és hasonló technológiákat használ. A kategóriákról, a hozzájárulásról és a kezelésről az oldalon elérhető Cookie-szabályzatból tájékozódhatsz.'
          ]
        },
        {
          heading: 'VIII. fejezet. Az adatok és a platform biztonsága',
          paragraphs: [
            'Műszaki és szervezési intézkedéseket alkalmazunk az oldal biztonságának és az adatok védelmének érdekében. Ugyanakkor egyetlen online platform sem tud teljes körű biztonságot garantálni. A Felhasználó felelősséget vállal az általa továbbított adatokért és saját eszközének biztonságáért. Személyes adatokat érintő biztonsági incidens esetén az érintett felhasználókat a hatályos jogszabályoknak megfelelően értesítjük.'
          ]
        },
        {
          heading: 'IX. fejezet. Harmadik felekhez vezető linkek',
          paragraphs: [
            'Az oldal tartalmazhat harmadik felek által üzemeltetett oldalakra mutató linkeket. Ezek a linkek tájékoztató jellegűek. Nem ellenőrizzük e weboldalak tartalmát vagy szabályzatait, és nem vállalunk felelősséget használatukért. Javasoljuk az érintett oldalak feltételeinek és szabályzatainak áttekintését.'
          ]
        },
        {
          heading: 'X. fejezet. Hibák, pontatlanságok és kihagyások',
          paragraphs: [
            'Időről időre az oldal tartalma tipográfiai hibákat, pontatlanságokat vagy kihagyásokat tartalmazhat. Fenntartjuk a jogot, hogy ezeket a helyzeteket kijavítsuk és a tartalmat előzetes értesítés nélkül frissítsük, amikor szükséges.'
          ]
        },
        {
          heading: 'XI. fejezet. Tiltott felhasználások',
          paragraphs: [
            'Az oldal nem használható a következőkre: bármely jogellenes cselekményre vagy harmadik fél jogainak megsértésére; szellemi tulajdonjog megsértésére; zaklatásra, fenyegetésre, rágalmazásra vagy diszkriminációra; hamis vagy félrevezető információ továbbítására vagy más személynek való kiadásra; vírusok, malware vagy pusztító kód továbbítására; más felhasználók adatainak jogosulatlan gyűjtésére vagy figyelésére; jogosulatlan hozzáférési kísérletekre, sérülékenység-tesztelésre vagy biztonsági rendszerek elleni támadásokra; az oldal normális és ésszerű böngészést meghaladó automatikus vagy visszaélésszerű használatára.',
            'Fenntartjuk a jogot a hozzáférés korlátozására, beleértve az IP-címek blokkolását is, ha olyan viselkedést észlelünk, amely az oldal működését vagy biztonságát veszélyeztetheti.'
          ]
        },
        {
          heading: 'XII. fejezet. Garancia kizárása; felelősségkorlátozás',
          paragraphs: [
            'Az oldal és annak tartalma tájékoztató jelleggel kerül biztosításra. Nem garantáljuk, hogy az oldal megszakítások és hibák nélkül működik, és a törvény által megengedett mértékben nem vállalunk felelősséget az oldal használatából vagy használhatatlanságából eredő közvetett károkért.',
            'Nem felelünk az olyan döntések következményeiért, amelyek kizárólag az oldalon közzétett információk alapján születnek, szerződés vagy írásos megerősítés hiányában, amely az adott konkrét esetre való alkalmazhatóságot igazolja.'
          ]
        },
        {
          heading: 'XIII. fejezet. A használat megszüntetése',
          paragraphs: [
            'Az oldal használatát bármikor megszüntetheted az oldalaink elérésének abbahagyásával. Ha úgy ítéljük meg, hogy megsértetted ezeket a feltételeket, vagy megalapozott gyanú merül fel a megsértésre, a weboldalhoz való hozzáférést előzetes értesítés nélkül felfüggeszthetjük vagy megszüntethetjük.'
          ]
        },
        {
          heading: 'XIV. fejezet. Jogviták rendezése. Irányadó jog',
          paragraphs: [
            'Bármilyen jogosulatlan hozzáférési kísérletet vagy csalást jelentünk az illetékes hatóságoknak. A SELLMOTION S.R.L. és a Felhasználó közötti bármely vitát megpróbáljuk békés úton rendezni. Kérjük, küldj bármilyen bejelentést az office@insidegrowth.ro címre, hogy gyors megoldást találhassunk.',
            'Amennyiben a békés rendezés nem lehetséges, a román jog alkalmazandó, és az illetékes bíróságok Romániában találhatók.'
          ]
        },
        {
          heading: 'XV. fejezet. Kapcsolat',
          paragraphs: [
            'Az Általános Szerződési Feltételekkel vagy a kapcsolódó szabályzatokkal kapcsolatos kérdések, javaslatok és panaszok az office@insidegrowth.ro címre vagy a +40 799 900 187 telefonszámra küldhetők.'
          ]
        },
        {
          heading: 'XVI. fejezet. Záró rendelkezések',
          paragraphs: [
            'Ha a fenti rendelkezések bármelyike semmisnek vagy érvénytelennek bizonyul, ez nem érinti a többi rendelkezés érvényességét.',
            'Frissített verzió dátuma: 30.04.2026'
          ]
        }
      ]
    }
  }
};
