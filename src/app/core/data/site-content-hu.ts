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
  heroTitle: 'Globális Növekedés Adatalapú Marketinggal',
  heroSubtitle:
    'Teljesítményi marketing ügynökség, volt Google és Meta szakemberekkel, akik a kattintásokat valódi növekedésé alakítják.',
  introTitle: 'Bevezetés',
  introSubtitle: 'Megbízhatóan kezelünk havi 50 ezer eurónál is nagyobb hirdetési költést',
  introBody: [
    'Stratégiai gondolkodást, kreatív storytellinget és platformszintű szakértelmet egyesítünk, hogy mérhető kampányokkal skálázzuk a márkákat.',
    'A tudatosságnövelésből a konverzióig és nemzetközi expanzióig, küldetésünk a fizetett médiatartalmak kiszámítható üzleti növekedésé alakítása.'
  ],
  aboutIntroTitle: 'Bevezetés',
  aboutIntroBody: [
    'Stratégiai gondolkodást, kreatív storytellinget és platformszintű szakértelmet egyesítünk, hogy mérhető kampányokkal skálázzuk a márkákat.',
    'A tudatosságnövelésből a konverzióig és nemzetközi expanzióig, küldetésünk a fizetett médiatartalmak kiszámítható üzleti növekedésé alakítása.'
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
  problemTitle: 'Problémameghatározás',
  problemPoints: [
    'Korlátozott elérés a magas értékű új ügyfelek felé, és alacsony fizetett láthatóság a prémium, designorientált közönség között.',
    'A prémium pozicionáláshoz precíz célzás és konverziós átláthatóság szükséges, de jelenleg nincs teljes fizetett hirdetési keretrendszer.'
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
        'Elemzem az egész marketing ökoszisztémádat — a webhely teljesítménytől és a nyomkövetési beállítástól a hirdetési kampányokig és a keresőoptimalizálásig — hogy azonosítsam, mi működik, mi korlátoz és ahol a legnagyobb növekedési lehetőségek vannak.',
      features: [
        'Webhely sebessége és teljesítménye',
        'Nyomkövetési beállítás (GTM, GA4, pixelek)',
        'Google és Meta Ads audit',
        'SEO struktúra és technikai felülvizsgálat',
        'Konverziós folyamat és felhasználói utazás'
      ],
      imagePosition: 'left',
      image: 'images/services/Audit%26GrowthAnalysis.png'
    },
    {
      title: 'Fizetett Média, Amely Konvertál',
      description:
        'Magas teljesítményű kampányokat kezelek és skálázok a Google, Meta és TikTok között — a minőségi forgalom felkeltésére összpontosítva, amely valódi ügyfelekké és bevételekké alakul.',
      features: [
        'Google Ads (Keresés, Vásárlás, Performance Max)',
        'Meta Ads (Facebook és Instagram)',
        'TikTok Ads',
        'Kampányadaptálás és skálázás'
      ],
      imagePosition: 'right',
      image: 'images/services/PaidMediaThatConverts.png'
    },
    {
      title: 'SEO és Szerves Növekedés',
      description:
        'Optimalizálom webhelyed, hogy magasabbra rangsoroljam, konzisztens forgalmat vonzz és hosszú távú láthatóságot építsek, amely támogatja a fizetett kampányokat.',
      features: [
        'Technikai SEO',
        'On-page optimalizálás',
        'Kulcsszó és struktúra stratégia',
        'Tartalom optimalizálás'
      ],
      imagePosition: 'left',
      image: 'images/services/Seo%26OrganicGrowth.png'
    },
    {
      title: 'Konverzióra Tervezett Webhelyek',
      description:
        'Egyedi weboldalakat és e-kereskedelmi platformokat tervezek és fejlesztek, amelyek a sebességre, felhasználói élményre és konverzióra összpontosítanak — a látogatókat fizető ügyfelekké alakítva.',
      features: [
        'Egyedi bemutatóhelyek',
        'E-kereskedelmi fejlesztés',
        'Konverziófókuszú tervezés',
        'Mobilés sebesség-optimalizálás'
      ],
      imagePosition: 'right',
      image: 'images/services/WebsiteBuiltToConvert.png'
    },
    {
      title: 'Kreatív Produkcio',
      description:
        'Magas minőségű fotó- és videótartalmakat készítok, amelyeket úgy terveztem, hogy felhívjam a figyelmet és javítsam a teljesítményt a marketing csatornákon.',
      features: [
        'Termékes fotózás',
        'Márka- és helyszín-fotozás',
        'Videoprodukcio és szerkesztés',
        'Hirdetési kreatívok'
      ],
      imagePosition: 'left',
      image: 'images/services/CreativeProduction.png'
    },
    {
      title: 'Nyomkövetés és Teljesítményi Rendszerek',
      description:
        'Felépítem a marketinged mögött lévő infrastruktúrát — biztosítva, hogy minden cselekvés nyomon követett, mért és valós adatok alapján optimalizált.',
      features: [
        'Google Tag Manager beállítás',
        'GA4 és esemény nyomkövetés',
        'Konverziós nyomkövetés',
        'Adatok pontossága és jelentéskészítés'
      ],
      imagePosition: 'right',
      image: 'images/services/Trackig%26PerformanceSystems.png'
    }
  ],
  advantagesTitle: 'Legfontosabb Versenyképes Előnyök',
  advantages: [
    {
      title: 'Szakérto Csapat',
      description: 'Tapasztalt szakemberek a gyakorlati tudással összetett teljesítményi marketing programokhoz.'
    },
    {
      title: 'Platformismeret Belülről',
      description: 'Volt Google és Meta szakemberek mély megértéssel az algoritmusokról és az aukciósmechanizmusokról.'
    },
    {
      title: 'Ügyfélközpontú Megközelítés',
      description: 'Hosszú távú partnerségek az üzleti célok, az bizalom és az erős kommunikáció alapján.'
    },
    {
      title: 'Adatalapú Végrehajtás',
      description: 'Minden döntés mérésen, tesztelésen és iteratív optimalizáláson alapul a skálázható növekedéshez.'
    }
  ],
  pricingTitle: 'Árazás',
  pricingSubtitle: 'Az árazást az üzleted, a növekedési potenciálod és a skálázáshoz szükséges bevonódás szintje alapján alakítjuk ki.',
  pricingComparisonTitle: 'Csomag összehasonlítás',
  pricingVatNote: 'Az összes ár az ÁFÁ nélkül, és a projekt hatálya alapján változhat.',
  pricingSpotlightsTitle: 'A bevételt valóban mozgatómunkához kialakítva',
  pricingFaqTitle: 'Gyakran Ismételt Kérdések',
  pricingCustomTitle: 'Egyedi Növekedési Rendszerek',
  pricingCustomSubtitle: 'Az igényeidre szabott díjak',
  pricingLimitedClientsTitle: 'Korlátozott Számú Ügyféllel Dolgozunk',
  pricingLimitedClientsBody:
    'Partnerségekre összpontosítunk, nem volumenre. Csak azokat a projekteket végezzük el, ahol tudjuk, hogy mérhető növekedést és hosszú távú sikert érhetünk el.',
  pricingBuildRightSystemTitle: 'Alkossuk Meg az Üzletedhez Illő Rendszert',
  pricingBuildRightSystemBody:
    'Elemezzük az üzleted, és javasoljuk a legjobb megközelítést — az igényeidre szabott díjakkal is.',
  pricingNoCommitment: 'Nincs kötelezettség. Csak világosság.',
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
  contactTitle: 'Beszéljünk az Üzlet Növekedéséről',
  contactSubtitle:
    'Mesélj az üzletedről és céljaidról — egyértelműséggel és méretre szabott lépésekkel térünk vissza.',
  primaryCta: 'Nőjünk Együtt',
  growthServices: [
    {
      title: 'Fizetett Média, Amely Konvertál',
      description:
        'Magas teljesítményű kampányokat kezelek a Google, Meta és TikTok között — a minőségi forgalom felkeltésére összpontosítva, amely valódi ügyfelekké és bevételekké alakul.'
    },
    {
      title: 'Teljesítményt Hajtó Kreativ',
      description:
        'Magas konverziós hirdetési kreatívokat, fotókat és videókat készítok, amelyeket úgy terveztem, hogy felhívjam a figyelmet és javítsam a konverziókat — nem csak jól nézzenek ki.'
    },
    {
      title: 'A Kattintástól az Ügyfelig',
      description:
        'Strukturált marketing funnel-eket építek, amelyek a felhasználókat az első interakciótól a végső vásárlásig vezetik, maximalizálva az ügyfélút minden lépését.'
    },
    {
      title: 'Konverziőra Tervezett Webhelyek',
      description:
        'Webhelyeket és landingoldalakat tervezek és optimalizálok, amelyek a sebességre, felhasználói élményre és konverzióra összpontosítanak — a látogatókat fizető ügyfelekké alakítva.'
    },
    {
      title: 'SEO és Szerves Növekedés',
      description:
        'Optimalizálom webhelyed, hogy magasabbra rangsoroljam, konzisztens forgalmat vonzz és hosszú távú láthatóságot építsek a fizetett hirdetéseken túl.'
    },
    {
      title: 'Nyomkövetés és Adatok Pontossága',
      description:
        'Nyomkövetési rendszereket állítok be és optimalizálok, hogy biztosítsam, hogy minden döntés pontos adatokon alapuljon — a konverziótól az ügyfélviselkedésig.'
    }
  ],
  howWeWork: [
    {
      step: '01',
      title: 'Audit és Elemzés',
      description:
        'Elemzem az üzleted, webhelyed, jelenlegi kampányaidat, nyomkövetésed és teljesítményed, hogy azonosítsam, mi működik, mi hiányzik, és ahol a növekedés blokkolva van.'
    },
    {
      step: '02',
      title: 'Stratégia és Tervezés',
      description:
        'Egyedi növekedési tervet építek az igényeid, budzsed, piaci és ügyfélutazások alapján — hogy minden csatornának legyen egyértelmű célja.'
    },
    {
      step: '03',
      title: 'Indítás és Megvalósítás',
      description:
        'Beállítom és elindítom a megfelelő kampányokat, kreatívokat, landingoldalakat és optimalizálásokat a legfontosabb csatornákon.'
    },
    {
      step: '04',
      title: 'Optimalizálás és Skálázás',
      description:
        'Folyamatosan tesztelek, javítok és skálázok — jobb teljesítményre, magasabb konverziókra és nyereséges növekedésre összpontosítva.'
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
    homeExploreServices: 'Szolgáltatások megtekintése',
    headerCta: 'Növekedjünk együtt',
    footerTagline: 'Volt Google és Meta szakemberek, akik segítik a márkákat globálisan növekedni.',
    footerContactLabel: 'Kapcsolat',
    footerNavigateLabel: 'Navigáció',
    footerAllRightsReserved: 'Minden jog fenntartva',
    footerPrivacyPolicy: 'Adatvédelmi Irányelvek',
    footerCookiePolicy: 'Cookie Irányelvek',
    footerTermsConditions: 'Általános Feltételek',
    footerCopyrightPrefix: 'Szerzői jogok',
    homeWhoWeAre: 'Kik Vagyunk',
    homeStrategiesTitle: 'Stratégiák, amelyek valódi eredményeket hoznak',
    homeAboutUs: 'Rólunk',
    homeReadyTitle: 'Kész Kiemelkedni a Tömegből?',
    homeStartGrowing: 'Kezdje a Növekedést',
    homeViewPricing: 'Árak megtekintése',
    homeResultsEyebrow: 'Eredmények',
    homeResultsTitle: 'Lásd, mit tud nyújtani a folyamatunk',
    homeResultsBody: 'A stratégiát mérhető eredményekké alakítjuk a kiadások, a hatékonyság és a növekedés terén. Ez a szakasz hamarosan egy dedikált eredmények oldalra fog bővülni.',
    homeResultsLink: 'Tudj meg többet',
    statsCampaignsRun: 'Kampánya Optimalizálások',
    statsAverageRoi: 'Havi hirdetési költés',
    statsTopPlatforms: 'Fő platformok',
    statsDataDriven: 'Teljesítményre Összpontosítva',
    aboutMissionEyebrow: 'Küldetésünk',
    aboutPlatformsEyebrow: 'Platformok',
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
      'Csapatunk közvetlen platformmegértést és gyakorlati kampányleadership-et egyesít, hogy mérhető teljesítményes full-funnel rendszereket építsen.',
    servicesEyebrow: 'Szolgáltatások',
    servicesLead:
      'Csatornastratégiát, kreatív végrehajtást és analitikai infrastruktúrát építek, hogy minden kampány mérhető és skálázható legyen.',
    pricingEyebrow: 'Árak',
    pricingFeatureComparison: 'Funkció Összehasonlítás',
    pricingTableAriaLabel: 'Árcsomag funkció összehasonlítás',
    pricingFeatureHeader: 'Funkció',
    pricingStandardHeader: 'Alapozás',
    pricingPremiumHeader: 'Skálázás',
    pricingIncluded: 'Tartalmazza',
    pricingOptional: 'Opcionális',
    contactEyebrow: 'Kapcsolat',
    contactShareGoals: 'Oszd Meg Növekedési Céljaidat',
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
        question: 'Garantálható az eredmények?',
        answer:
          'Nem garantálunk konkrét számokat — mert a valódi növekedés több tényezőtől függ, mint a piac, az ajánlat és a költségvetés. Amit garantálunk az egy egyértelmű stratégia, konzisztens optimalizálás és az arra irányuló fokusz, hogy az idővel működőket skálázunk.'
      },
      {
        question: 'Hány ügyféllel dolgozik?',
        answer:
          'Korlátozott számú ügyféllel dolgozunk, hogy biztosítsuk, hogy minden projekt megkapja a szükséges figyelmet és fókuszt. Célunk a minőség és teljesítmény — nem a kötet.'
      },
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
        question: 'Garantálható az eredmények?',
        answer:
          'Nem garantálunk konkrét számokat — nem is komoly ügynökség. Amit garantálunk az egy strukturált megközelítés, amely a folyamatos javításra és a mérhető növekedésre összpontosít.'
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
        question: 'Az összes típusú üzlettel dolgozik?',
        answer:
          'A legtöbb üzlettípussal dolgozunk, de nem mindennel társulunk. Az olyan üzletekre összpontosítunk, amelyek komolyan veszik a növekedést és nyitottak egy hosszú távú kollaboráció felépítésére a bizalom és teljesítmény alapján.'
      },
      {
        question: 'Mi történik az űrlap elküldése után?',
        answer:
          'Áttekintjük az üzleted, jelenlegi beállítása és céljait. Ezután egy egyértelmű stratégiával és az helyzetre szabott javasolt lépésekkel térünk vissza.'
      },
      {
        question: 'Csak hirdetéseket futtat, vagy mindent kezel?',
        answer:
          'Túlmegyünk a hirdetéseken. A teljes rendszerre összpontosítunk — beleértve a SEO-t, a webhely optimalizálást, a nyomkövetést és a kreatíveket — hogy biztosítsuk, hogy minden együttesen működik.'
      },
      {
        question: 'Dolgozhat a meglévő webhellyel és beállítással?',
        answer:
          'Igen. Optimalizálhatjuk a jelenlegi beállítást vagy szükség szerint újraépítjük a teljesítmény javítása érdekében.'
      },
      {
        question: 'Mi deosebít minket más ügynökségektől?',
        answer:
          'Nem összpontosítunk a kötetre vagy a rövid időhöz. Olyan rendszereket építünk, amelyek hosszú távú növekedésre terveztek, és csak olyan üzletekkel dolgozunk, ahol tudjuk, hogy valódi hatást tehetünk.'
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
      },
      {
        question: 'Készítesz tartalmat is?',
        answer:
          'Igen. A hirdetésekhez és márkázáshoz fotó- és videoprodukciot kínálunk, az igények és az együttműködés szintje szerint.'
      }
    ],
    leadSavedMessage:
      'Köszönjük. Megkaptuk az részleteidet, és egy személyre szabott növekedési javaslatot készítünk.',
    leadSendingMessage: 'Az üzeneted küldése folyamatban…',
    leadErrorMessage: 'Hiba történt. Kérjük, próbálkozzon újra, vagy írjon nekünk közvetlenül.',
    homeGrowthEyebrow: 'Növekedési Rendszerek',
    homeHowWeScaleTitle: 'Hogyan Skálázunk az Üzleted',
    homeHowWeScaleSubtitle: 'Növekedési Rendszerek, Nem Csak Szolgáltatások',
    homeHowWeWorkEyebrow: 'Eljárásunk',
    homeHowWeWorkTitle: 'Hogyan Dolgozunk',
    homeHowWeWorkSubtitle:
      'Egy egyértelmű eljárás, amely a marketinget kiszámítható növekedési rendszerre fordítja — az audittól a skálázható teljesítményig.',
    homeCredentialsTitle: 'Adatok, Audit és Skálázási Stratégia',
    homeCredentialsBody:
      'Elemezzük az adataid, auditáljuk a teljesítményt és folyamatosan optimalizáljuk a kampányokat az működőket skálázva és az nem működőket kiküszöbölve.',
    homeCredentialsBadge: 'Google és Meta Tanúsított Csapat · 20+ Év Kombinált Tapasztalat',
    homeMiniCta: 'Kész az üzleted skálázására?',
    homeModalCta: 'Kezdje El'
  },
  portfolio: [
    {
      eyebrow: 'Eredmények',
      title: 'Valódi Eredmények. Valódi Növekedés.',
      subtitle: 'Az olyan rendszerekre összpontosítunk, amelyek konzisztens teljesítményt generálnak — nem izolált győzelmeket.',
      description:
        'Mint adatalapú marketing ügynökség, az olyan rendszerekre összpontosítunk, amelyek konzisztens teljesítményt és skálázható növekedést generálnak — nem izolált győzelmeket. A valódi növekedés a megfelelő rendszerből származik. Az alábbi minden eredmény stratégia, végrehajtás és kollaboráció kombinációjával épül fel. Nem rövid távú győzelmeket követünk — az olyan rendszerekre összpontosítunk, amelyek konzisztens, skálázható növekedést generálnak az idő során.',
      imagePosition: 'right',
      image: 'images/results/Results1.png'
    },
    {
      title: 'E-kereskedelmi Növekedés Rendszer',
      metrics: ['48.6x ROAS (Kampánya Teljesítmény)', '€112K+ Bevétel Generálva'],
      description:
        'Az üzlet nagy potenciállal rendelkezett, de nem volt teljes optimalizálás az SEO és fizetett kampányok között. Az SEO szerkezetet az összes oldal és termék között újraépítettük, folyamatosan optimalizálva a kulcsszavakat és biztosítva a megfelelő indexelést a top keresési láthatóság megőrzéséhez. Ugyanakkor finomítottuk és skálázattuk a hirdetési kampányokat — a teljesítményre, termékkiválasztásra és full funnel optimalizálásra összpontosítva. Az eredmények 3 hónapok alatt fokozatosan épültek fel, amely konzisztens és skálázható növekedéshez vezetett.',
      imagePosition: 'left',
      image: 'images/results/Results1.png',
    },
    {
      title: 'Lead Generálás és Helyi Növekedés',
      metrics: ['1M+ Impresszió', '144+ Konverzió'],
      description:
        'A cél nem csupán forgalom volt — hanem minőségi lead generálás egy fizikai üzlethez, amely szolgáltatásokat nyújt. Az SEO alapozást újraépítettük, strukturált hirdetési csoportokat hoztunk létre, és folyamatosan teszteltük a különböző kreatívokat és célzási stratégiákat. A fókusz az elsődleges szolgáltatás promóciójára volt, másodlagos hangsúllyal az eladásokon. Az folyamatos optimalizáláson keresztül állandó lead-folyamot értek el, és a kampányadaptálási hatékonyságot fejlesztettük az idővel.',
      imagePosition: 'right',
      image: 'images/results/Results2.png',
    },
    {
      title: 'Teljes Növekedési Támogatás a Helyi Üzlethez',
      metrics: ['7.85x ROAS', 'A közel-nulláról a konzisztens növekedésig'],
      description:
        'Ez a projekt egy minimális online jelenléten alapuló helyi üzletből indult. Mindent az alapoktól építettünk fel — webhely, SEO szerkezet, terméklátványok és marketing kampányok. Több elem egyetlen rendszerbe kombinálásával segítettük az üzletet fokozatos növekedésben és egy erős online jelenlét felépítésében.',
      imagePosition: 'left',
      image: 'images/results/Results3.png',
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
      title: 'Kezdőlap',
      description: 'InsideGrowth – adatalapú marketing ügynökség, amely márkákat segít skálázni Meta és Google kampányokkal. insideads.ro',
      keywords: ['InsideGrowth', 'marketing ügynökség', 'google ads', 'meta ads', 'teljesítményi marketing', 'üzleti növekedés']
    },
    about: {
      title: 'Rólunk',
      description: 'Ismerd meg az InsideGrowth csapatát, volt Google és Meta szakemberek a mérhető növekedésre összpontosítva.',
      keywords: ['InsideGrowth rólunk', 'google meta szakemberek', 'teljesítményi csapat', 'insideads.ro']
    },
    services: {
      title: 'Szolgáltatások',
      description: 'Fedezd fel az InsideGrowth digitális marketing és analitikai szolgáltatásait a Google Ads és Meta Ads platformokon.',
      keywords: ['InsideGrowth szolgáltatások', 'digitális marketing', 'marketing analitika', 'ga4', 'meta pixel']
    },
    pricing: {
      title: 'Árak',
      description: 'Hasonlítsd össze az InsideGrowth Alapozás és Skálázás havi teljesítményi marketing csomagokat.',
      keywords: ['InsideGrowth árak', 'havi marketing csomag', 'google ads kezelés ár']
    },
    contact: {
      title: 'Kapcsolat',
      description: 'Lépj kapcsolatba az InsideGrowth-vel — küldd el céljaidat, és személyre szabott tervet készítünk.',
      keywords: ['InsideGrowth kapcsolat', 'növekedési terv kérése', 'insideads.ro kapcsolat']
    },
    privacyPolicy: {
      title: 'Adatvédelmi Irányelvek',
      description: 'Olvasd el az InsideGrowth adatvédelmi irányelveit. Tudj meg az adataid védelméről.',
      keywords: ['InsideGrowth adatvédelem', 'adatvédelem', 'GDPR', 'insideads.ro']
    },
    cookiePolicy: {
      title: 'Cookie Irányelvek',
      description: 'Tudj meg, hogyan használja az InsideGrowth a cookie-kat a jobb felhasználói élmény érdekében.',
      keywords: ['InsideGrowth cookie', 'cookie irányelvek', 'analitika', 'insideads.ro']
    },
    termsConditions: {
      title: 'Általános Feltételek',
      description: 'Olvasd el az InsideGrowth általános feltételeit, amelyek a szolgáltatások és webhely használatát szabályozzák.',
      keywords: ['InsideGrowth feltételek', 'általános feltételek', 'szolgáltatás szerződés', 'insideads.ro']
    },
    portfolio: {
      title: 'Portfólió',
      description: 'Esettanulmányok, amelyek bemutatják, hogyan építünk növekedési rendszereket, amelyek a bevételt, a ROAS-t és a konverziókat skálázza.',
      keywords: ['portfólió', 'esettanulmányok', 'eredmények', 'növekedési rendszerek']
    }
  },
  legal: {
    privacyPolicy: {
      title: 'Adatvédelmi Irányelvek',
      lastUpdated: 'Április 2026',
      sections: [
        {
          heading: 'Kik Vagyunk',
          paragraphs: [
            'Az InsideGrowth egy Magyarországon alapított teljesítményi marketing ügynökség, amely az insideads.ro weboldalon működik. Kötelezettségünk az adataid védelme az Általános Adatvédelmi Rendelet (GDPR) és az alkalmazandó magyar jog szerint.',
            'Ez az Adatvédelmi Irányelv ismerteti, milyen személyes adatokat gyűjtünk, hogyan használjuk azokat, és milyen jogok illletik meg ezzel kapcsolatban.'
          ]
        },
        {
          heading: 'Milyen Adatokat Gyűjtünk',
          paragraphs: [
            'Gyűjthetünk a következő kategóriájú személyes adatokat: név és elérhetőségi adatok (e-mail, telefonszám), cégnév, a kapcsolatfelvételi formon megadott információk (növekedési célok, havi költségvetés), technikai adatok (IP cím, böngésző típusa, eszközadatok) és az analitikai eszközökkel gyűjtött használati adatok.'
          ]
        },
        {
          heading: 'Hogyan Használjuk az Adataidat',
          paragraphs: [
            'A személyes adataid az alábbiak céljára használjuk: a megkereséseidre válaszolni és a kért szolgáltatásokat nyújtani, személyre szabott marketing javaslatokat készíteni, webhelyünk és szolgáltatásaink fejlesztésére, jogi kötelezettségek teljesítésére, valamint releváns marketing kommunikációra az adott szövegezéseidet adataidat.'
          ]
        },
        {
          heading: 'Harmadik Fél Szolgáltatások',
          paragraphs: [
            'A Google Analytics és a Meta Pixel segítségével végzünk webhelyelemzéseket. Ezek a szolgáltatások beállíthatják saját cookie-kat, és az adatoknak a saját adatvédelmi irányelvei szerint dolgozhatnak fel.',
            'Az adataidat a Google LLC (Google Ads, Google Analytics) és a Meta Platforms Inc. (Meta Ads, Meta Pixel) dolgozhatja fel. Javasoljuk, hogy tekintse meg azok adatvédelmi irányelveit.'
          ]
        },
        {
          heading: 'Adatok Megőrzése',
          paragraphs: [
            'Személyes adataidat megőrizzük mindaddig, amíg szükséges az ebben az irányelvben felsorolt célok teljesítéséhez, vagy ahogy azt a jog előírja. A kapcsolatfelvételi form adatait az utolsó interakciótól számított legfeljebb 2 évig őrizzük.'
          ]
        },
        {
          heading: 'Az Adatok Jogai',
          paragraphs: [
            'A GDPR alapján jogod van: hozzáférer az adataiddhoz, helyesbíteni az pontatlan adatokat, kérni az adatok törléseit ("elfelejtéshez való jog"), korlátozni vagy ellenezni a feldolgozást, kérni az adatok hordozható formában és bármikor visszavonni az hozzájárulásodat.',
            'Ezen jogok bármelyikének gyakorlásához kérjük, hogy lépj kapcsolatba velünk az alábbi adatok alapján.'
          ]
        },
        {
          heading: 'Kapcsolat',
          paragraphs: [
            'Adatvédelem kapcsolatos kérdésekhez vagy jogaid gyakorlásához kérjük, hogy lépj kapcsolatba velünk: puscas.forbusiness@gmail.com',
            'InsideGrowth — insideads.ro'
          ]
        }
      ]
    },
    cookiePolicy: HUNGARIAN_COOKIE_POLICY,
    termsConditions: {
      title: 'Általános Feltételek',
      lastUpdated: 'Április 2026',
      sections: [
        {
          heading: 'A Feltételek Elfogadása',
          paragraphs: [
            'Az insideads.ro webhelyre való hozzáféréssel és használatával elfogadsz és beleegyezel az Általános Feltételek és az Adatvédelmi Irányelvünk betartásába. Ha nem értesz egyet ezekkel a feltételekkel, kérjük, ne használd webhelyünket vagy szolgáltatásainkat.'
          ]
        },
        {
          heading: 'Szolgáltatások',
          paragraphs: [
            'Az InsideGrowth teljesítményi marketing szolgáltatásokat nyújt, beleértve a Google Ads kezelést, a Meta Ads kezelést, a marketing analitikát, az SEO kezelést és a kapcsolódó digitális marketing szolgáltatásokat.',
            'A szolgáltatások részletei, a terjedelem, a szállítások és az időhatárok az InsideGrowth és az egyes ügyfelek között kötött egyedi szolgáltatási szerződésekben állnak.'
          ]
        },
        {
          heading: 'Fizetési Feltételek',
          paragraphs: [
            'A fizetési feltételeket az egyedi szolgáltatási szerződések határozzák meg. A standard fizetés havonta előre, a szolgáltatás megkezdése előtt történik.',
            'A késedelmes fizetés a szolgáltatás felfüggesztéséhez vezethet, amíg a fennmaradó egyenletet rendezik. Minden ár EUR-ban van megadva, és nem tartalmazza az alkalmazandó ÁFA-t és adókat.'
          ]
        },
        {
          heading: 'Szellemi Tulajdon',
          paragraphs: [
            'Az insideads.ro összes tartalma, beleértve a szövegeket, grafikákat, logókat, képeket és szoftvereket, az InsideGrowth tulajdona, és az alkalmazandó szellemi tulajdon törvények védenek.',
            'Nem sokszorosíthatod, nem terjesztheted, nem módosíthatod és nem hozhatsz létre származékos műveket ebből a webhelyből szóló tartalomból az InsideGrowth kifejezett írásos engedélye nélkül.'
          ]
        },
        {
          heading: 'Felelősség Korlátozása',
          paragraphs: [
            'Az InsideGrowth nem felelős semmilyen közvetett, járulékos, különleges vagy következményes károkért, amelyek a szolgáltatások vagy a webhely használatából adódnak, beleértve a bevételvesztést, az adatvesztést vagy az üzletmenet-szünetelést.',
            'Az InsideGrowth teljes felelőssége a szolgáltatások használatából eredő bármilyen igény tekintetében nem haladhatja meg az előző naptári hónapban ezen szolgáltatásokért fizetett összeget.'
          ]
        },
        {
          heading: 'Irányadó Jog',
          paragraphs: [
            'Az Általános Feltételeket a magyar jog szabályozza. A webhely vagy a szolgáltatások használatából eredő viták a magyar bíróságok kizárólagos joghatóságára tartoznak.'
          ]
        },
        {
          heading: 'Kapcsolat',
          paragraphs: [
            'Az Általános Feltételekre vonatkozó kérdésekhez kérjük, hogy lépj kapcsolatba velünk: puscas.forbusiness@gmail.com',
            'InsideGrowth — insideads.ro'
          ]
        }
      ]
    }
  }
};
