/* Lynn's Jewelry storefront engine
   Catalog data, SVG sprite, shared chrome, cart, page controllers.
   Sample brand built as a design demonstration. */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
     1. Palette + collections
     ------------------------------------------------------------------ */

  var FOX = {
    amber: "#DD8D29",
    yellow: "#E2D200",
    teal: "#46ACC8",
    orange: "#E58601",
    red: "#B40F20"
  };

  var COLLECTIONS = [
    {
      id: "forge",
      name: "The Forge",
      color: FOX.amber,
      blurb: "Raw metal worked cold on the anvil. Hammer marks stay where they fall."
    },
    {
      id: "stone",
      name: "Set in Stone",
      color: FOX.teal,
      blurb: "Cabochons and rough cuts, bezel-set by hand so the stone is held low and protected."
    },
    {
      id: "everyday",
      name: "Everyday Weight",
      color: FOX.orange,
      blurb: "Light enough to forget you have it on. Built to survive a dish sink."
    },
    {
      id: "anime",
      name: "Ink & Enamel",
      color: FOX.red,
      blurb: "Anime-inspired enamel work. Fox masks, star sigils, jointed mecha bands."
    },
    {
      id: "limited",
      name: "One of One",
      color: FOX.yellow,
      blurb: "Single pieces. When the listing goes quiet, that piece is gone."
    }
  ];

  /* ------------------------------------------------------------------
     2. Catalog
     ------------------------------------------------------------------ */

  var PRODUCTS = [
    {
      id: "ember-signet",
      name: "Ember Signet Ring",
      collection: "stone",
      price: 186,
      sprite: "ember",
      metal: "Cast brass",
      metals: ["Cast brass", "Sterling silver"],
      stone: "Carnelian cabochon, 12 x 9 mm",
      dims: "Face 14 x 11 mm, band 3.4 mm wide",
      weight: "9.2 g in size 7",
      sizes: ["5", "6", "7", "8", "9", "10"],
      lead: "7 to 10 days",
      made: true,
      rating: 4.9,
      reviews: 63,
      anime: false,
      badge: "Best seller",
      blurb: "Carved wax, cast in brass, carnelian set low.",
      story: "The wax master for this one took three tries before the shoulders felt right. Each ring gets cast from that master, filed by hand, then polished to a soft satin so the brass reads warm instead of shiny. The carnelian is a flat-top cabochon in a closed bezel, which keeps the stone from catching on a coat sleeve.",
      care: "Brass darkens as it wears. A minute with a polishing cloth brings it back. Keep the carnelian away from ultrasonic cleaners.",
      pairs: ["kintsugi-cuff", "moss-agate", "wheat-chain"]
    },
    {
      id: "kintsugi-cuff",
      name: "Kintsugi Cuff",
      collection: "forge",
      price: 248,
      sprite: "cuff",
      metal: "Oxidised sterling silver",
      metals: ["Oxidised sterling silver", "Raw sterling silver"],
      stone: "None",
      dims: "Band 11 mm wide, 58 mm inner span, 22 mm gap",
      weight: "24 g",
      sizes: ["Small 15 cm", "Medium 16.5 cm", "Large 18 cm"],
      lead: "10 to 14 days",
      made: true,
      rating: 5,
      reviews: 41,
      anime: false,
      badge: "Studio favourite",
      blurb: "A forged break, rejoined with a gold-filled seam.",
      story: "I forge the band flat, score it, then open the break on purpose. The seam gets filled with 14k gold-filled wire and burnished down until it is flush with the silver. Every cuff breaks along a different line, so the gold runs somewhere new each time. The silver is oxidised black and hand-rubbed back on the high points.",
      care: "The dark patina wears off the edges over a year or two. Send it back for a free re-oxidise any time, you pay postage one way.",
      pairs: ["ember-signet", "tidepool-hoops", "onmyoji-talisman"]
    },
    {
      id: "tidepool-hoops",
      name: "Tidepool Hoops",
      collection: "forge",
      price: 124,
      sprite: "hoops",
      metal: "Sterling silver",
      metals: ["Sterling silver", "14k gold fill"],
      stone: "None",
      dims: "28 mm outer diameter, 2 mm wire",
      weight: "3.1 g per pair",
      sizes: ["24 mm", "28 mm", "34 mm"],
      lead: "3 to 5 days",
      made: false,
      rating: 4.8,
      reviews: 128,
      anime: false,
      badge: "Ships in 3 days",
      blurb: "Round wire, hammered until it holds the light unevenly.",
      story: "Plain round wire goes under a texturing hammer and comes out with a surface that scatters light the way wet stone does. The posts are sterling with silicone backs. Light enough at three grams a pair that most people forget they are wearing them.",
      care: "Silver tarnishes in humid air. Store them in the cotton pouch that ships with the order.",
      pairs: ["wheat-chain", "sakura-drops", "kintsugi-cuff"]
    },
    {
      id: "copper-leaf",
      name: "Copper Leaf Climbers",
      collection: "forge",
      price: 98,
      sprite: "leaf",
      metal: "Copper with sterling posts",
      metals: ["Copper with sterling posts", "Brass with sterling posts"],
      stone: "None",
      dims: "31 mm long, 9 mm at the widest",
      weight: "2.4 g per pair",
      sizes: ["Standard"],
      lead: "5 to 7 days",
      made: true,
      rating: 4.7,
      reviews: 54,
      anime: false,
      badge: null,
      blurb: "Cut, chased, and curved to sit along the ear.",
      story: "Each leaf is sawn from copper sheet, veined with a chasing tool, then domed over a wooden block so it curves with the ear instead of standing off it. The posts are sterling, soldered at an angle that makes the leaf climb. Copper against skin bothers some people, so the posts are sterling and the copper never touches a piercing.",
      care: "Copper develops a warm brown patina. Lemon and salt takes it back to bright pink if you want that.",
      pairs: ["tidepool-hoops", "moss-agate", "sakura-drops"]
    },
    {
      id: "moss-agate",
      name: "Moss Agate Pendant",
      collection: "stone",
      price: 164,
      sprite: "agate",
      metal: "Sterling silver",
      metals: ["Sterling silver", "14k gold fill"],
      stone: "Moss agate teardrop, 18 x 13 mm",
      dims: "Pendant 26 mm with bail, 45 cm chain",
      weight: "6.8 g",
      sizes: ["40 cm", "45 cm", "50 cm"],
      lead: "7 to 10 days",
      made: true,
      rating: 4.9,
      reviews: 87,
      anime: false,
      badge: "Stone varies",
      blurb: "Green moss agate in a hand-cut bezel.",
      story: "No two moss agates carry the same green pattern. I cut the bezel strip to the exact stone, solder it closed, and burnish the wall down over the edge. The photograph shows the pattern family rather than the exact piece, and I send a photo of your actual stone before it goes in the post.",
      care: "Agate is hard enough for daily wear. Take it off before the gym, since a hard knock can chip any stone.",
      pairs: ["ember-signet", "wheat-chain", "star-sigil"]
    },
    {
      id: "wheat-chain",
      name: "Wheat Chain Necklace",
      collection: "everyday",
      price: 142,
      sprite: "chain",
      metal: "Sterling silver",
      metals: ["Sterling silver", "14k gold fill"],
      stone: "None",
      dims: "2.6 mm link width, 45 cm long",
      weight: "11.4 g",
      sizes: ["40 cm", "45 cm", "50 cm", "60 cm"],
      lead: "5 to 7 days",
      made: true,
      rating: 4.9,
      reviews: 96,
      anime: false,
      badge: null,
      blurb: "Woven four-strand chain with a hand-made clasp.",
      story: "Wheat chain gets woven from four strands of round wire, which is why it drapes like fabric and stays flat against the collarbone. Every link is turned, closed, and soldered before the next one goes on. The clasp is a hand-fabricated hook and loop rather than a bought spring ring, so nothing on the piece is off the shelf.",
      care: "Wipe it down after a hot day. Sweat and sunscreen speed up tarnish more than anything else.",
      pairs: ["moss-agate", "star-sigil", "onmyoji-talisman"]
    },
    {
      id: "kitsune-studs",
      name: "Kitsune Mask Studs",
      collection: "anime",
      price: 88,
      sprite: "kitsune",
      metal: "Sterling silver with vitreous enamel",
      metals: ["Sterling silver with vitreous enamel"],
      stone: "None",
      dims: "11 x 9 mm each",
      weight: "1.8 g per pair",
      sizes: ["Standard"],
      lead: "7 to 10 days",
      made: true,
      rating: 4.9,
      reviews: 212,
      anime: true,
      badge: "Anime-inspired",
      blurb: "Fox-mask studs in kiln-fired red and white enamel.",
      story: "The mask shape comes from festival fox masks, redrawn small enough for an earlobe. I saw each blank from sheet, sink the recesses, then fire powdered glass enamel in a kiln at 800 degrees, three coats, stoning flat between each one. Kiln enamel is glass, so the red stays red for decades instead of chipping off like paint.",
      care: "Enamel is glass. It survives water and soap and it does not survive a concrete floor.",
      pairs: ["star-sigil", "sakura-drops", "chibi-cat"]
    },
    {
      id: "star-sigil",
      name: "Star Sigil Locket",
      collection: "anime",
      price: 212,
      sprite: "locket",
      metal: "Brass with sterling hinge",
      metals: ["Brass with sterling hinge", "Sterling silver"],
      stone: "Cubic zirconia, 2 mm",
      dims: "24 mm case, 60 cm chain",
      weight: "14 g",
      sizes: ["50 cm", "60 cm", "70 cm"],
      lead: "12 to 16 days",
      made: true,
      rating: 5,
      reviews: 74,
      anime: true,
      badge: "Opens",
      blurb: "A working locket with an engraved star inside the lid.",
      story: "Two domed brass discs, a sterling hinge, and a snap catch filed until the lid closes with an audible click. The transformation-sigil star is hand-engraved into the inside of the lid, so it only shows when the locket is open. There is room for a photo cut to 19 mm, and a paper template ships in the box.",
      care: "Oil the hinge once a year with a pinhead of sewing machine oil. Do not force the catch.",
      pairs: ["kitsune-studs", "wheat-chain", "onmyoji-talisman"]
    },
    {
      id: "mecha-joint",
      name: "Mecha Joint Ring",
      collection: "anime",
      price: 158,
      sprite: "mecha",
      metal: "Stainless steel with brass rivets",
      metals: ["Stainless steel with brass rivets", "Sterling silver with brass rivets"],
      stone: "None",
      dims: "Five segments, 8 mm tall at the knuckle plate",
      weight: "7.6 g in size 8",
      sizes: ["6", "7", "8", "9", "10", "11"],
      lead: "10 to 14 days",
      made: true,
      rating: 4.8,
      reviews: 118,
      anime: true,
      badge: "Articulated",
      blurb: "Five riveted segments that flex with the knuckle.",
      story: "Five plates, four brass rivets, and enough clearance that the ring bends as the finger bends. Getting the tolerance right is the whole job, since a tenth of a millimetre too tight and it locks, a tenth too loose and it rattles. The plates are brushed in one direction so the panel lines read the way mecha panel lines do.",
      care: "Steel needs almost nothing. If a rivet ever loosens, send it back and I will re-set it at no charge.",
      pairs: ["kitsune-studs", "chibi-cat", "kintsugi-cuff"]
    },
    {
      id: "sakura-drops",
      name: "Sakura Petal Drops",
      collection: "everyday",
      price: 76,
      sprite: "sakura",
      metal: "Sterling silver with enamel",
      metals: ["Sterling silver with enamel", "14k gold fill with enamel"],
      stone: "None",
      dims: "9 mm blossom on a 22 mm drop",
      weight: "1.4 g per pair",
      sizes: ["Standard"],
      lead: "5 to 7 days",
      made: false,
      rating: 4.8,
      reviews: 166,
      anime: true,
      badge: "Anime-inspired",
      blurb: "Five-petal blossoms in pale pink enamel on a fine drop.",
      story: "The smallest thing in the studio. Each blossom is pierced out with a 4/0 saw blade, which is about the thickness of a hair, then filled with pale pink enamel and fired twice. They hang from a fine sterling drop so the blossom turns when you move.",
      care: "Put them on last and take them off first. Hairspray dulls enamel faster than anything.",
      pairs: ["kitsune-studs", "tidepool-hoops", "copper-leaf"]
    },
    {
      id: "chibi-cat",
      name: "Chibi Cat Bracelet",
      collection: "anime",
      price: 112,
      sprite: "cat",
      metal: "Sterling silver with enamel",
      metals: ["Sterling silver with enamel"],
      stone: "None",
      dims: "Three 8 mm charms on a 3 mm curb chain",
      weight: "8.4 g",
      sizes: ["16 cm", "18 cm", "20 cm"],
      lead: "7 to 10 days",
      made: true,
      rating: 4.7,
      reviews: 143,
      anime: true,
      badge: null,
      blurb: "Three cat-head charms with enamel faces on a curb chain.",
      story: "Three cast cat heads, each with a different expression, enamelled in cream, black, and ginger. They hang from a hand-linked curb chain with a lobster clasp rated for the weight. Extra charms are available if you want a fourth cat, which most people eventually do.",
      care: "Charms swing and knock against each other, so expect the enamel to soften at the edges over years of wear.",
      pairs: ["kitsune-studs", "mecha-joint", "sakura-drops"]
    },
    {
      id: "onmyoji-talisman",
      name: "Onmyoji Talisman Pendant",
      collection: "limited",
      price: 395,
      sprite: "talisman",
      metal: "Hand-engraved brass on waxed cord",
      metals: ["Hand-engraved brass on waxed cord"],
      stone: "Black spinel bead, 4 mm",
      dims: "Plate 44 x 22 mm, cord adjusts 46 to 70 cm",
      weight: "18 g",
      sizes: ["One size, adjustable"],
      lead: "Ships in 2 days",
      made: false,
      oneOf: true,
      rating: 5,
      reviews: 9,
      anime: true,
      badge: "One of one",
      blurb: "A single engraved brass talisman. There is one, and this is it.",
      story: "Eleven hours of hand engraving on a 2 mm brass plate. The sigil is my own drawing in the style of paper talismans, cut with a graver rather than stamped, so the lines have the depth and the burr that only a graver leaves. Strung on Japanese waxed cord with a sliding knot and a black spinel bead at the tail. When this sells, the listing closes.",
      care: "Brass patinas. Leave it or polish it, both look right on this one.",
      pairs: ["star-sigil", "kintsugi-cuff", "ember-signet"]
    }
  ];

  /* ------------------------------------------------------------------
     3. SVG sprite
     ------------------------------------------------------------------ */

  var SPRITE = [
    '<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true" focusable="false">',

    /* signet ring */
    '<symbol id="p-ember" viewBox="0 0 400 400">',
    '<circle cx="200" cy="258" r="82" fill="none" stroke="#DD8D29" stroke-width="23"/>',
    '<circle cx="200" cy="258" r="93.5" fill="none" stroke="#16110C" stroke-width="2.8"/>',
    '<circle cx="200" cy="258" r="70.5" fill="none" stroke="#16110C" stroke-width="2.8"/>',
    '<g stroke="#16110C" stroke-width="1.3" opacity=".38" stroke-linecap="round">',
    '<path d="M120 296l10 6"/><path d="M154 328l11 5"/><path d="M235 333l11-5"/><path d="M270 302l10-6"/><path d="M112 226l11-4"/><path d="M283 226l-11-4"/>',
    '</g>',
    '<ellipse cx="200" cy="152" rx="80" ry="56" fill="#DD8D29" stroke="#16110C" stroke-width="3"/>',
    '<ellipse cx="200" cy="152" rx="64" ry="43" fill="none" stroke="#16110C" stroke-width="1.6" opacity=".45"/>',
    '<ellipse cx="200" cy="152" rx="49" ry="32" fill="#B40F20" stroke="#16110C" stroke-width="2.6"/>',
    '<g fill="none" stroke="#FBF7F0" stroke-width="1.6" opacity=".6"><path d="M172 145l28-12 28 12"/><path d="M164 160l36 14 36-14"/></g>',
    '</symbol>',

    /* kintsugi cuff */
    '<symbol id="p-cuff" viewBox="0 0 400 400">',
    '<path d="M118 118a132 132 0 1 0 164 0" fill="none" stroke="#16110C" stroke-width="39" stroke-linecap="round"/>',
    '<path d="M118 118a132 132 0 1 0 164 0" fill="none" stroke="#3A3128" stroke-width="33" stroke-linecap="round"/>',
    '<path d="M118 118a132 132 0 1 0 164 0" fill="none" stroke="#6B5F51" stroke-width="7" opacity=".4" stroke-linecap="round"/>',
    '<path d="M155 317L144 327L150 343L134 351L133 365" fill="none" stroke="#DD8D29" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>',
    '<path d="M155 317L144 327L150 343L134 351L133 365" fill="none" stroke="#E2D200" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>',
    '<g stroke="#FBF7F0" stroke-width="2" opacity=".22" stroke-linecap="round">',
    '<path d="M76 208l14 5"/><path d="M88 268l15 5"/><path d="M310 212l-14 5"/><path d="M298 270l-15 4"/><path d="M196 372l0 0"/>',
    '</g>',
    '</symbol>',

    /* hammered hoops */
    '<symbol id="p-hoops" viewBox="0 0 400 400">',
    '<circle cx="148" cy="214" r="86" fill="none" stroke="#16110C" stroke-width="13"/>',
    '<circle cx="148" cy="214" r="86" fill="none" stroke="#6B5F51" stroke-width="4" opacity=".45"/>',
    '<circle cx="256" cy="180" r="86" fill="none" stroke="#16110C" stroke-width="13" opacity=".92"/>',
    '<circle cx="256" cy="180" r="86" fill="none" stroke="#6B5F51" stroke-width="4" opacity=".45"/>',
    '<g stroke="#FBF7F0" stroke-width="2" opacity=".45" stroke-linecap="round">',
    '<path d="M84 176l8 6"/><path d="M96 268l9 5"/><path d="M198 258l9 5"/><path d="M318 140l8 6"/><path d="M328 224l9 5"/><path d="M212 118l8 6"/>',
    '</g>',
    '<g fill="#F4EDE1" stroke="#16110C" stroke-width="2.4">',
    '<circle cx="148" cy="128" r="9"/><circle cx="256" cy="94" r="9"/>',
    '</g>',
    '</symbol>',

    /* copper leaf climbers */
    '<symbol id="p-leaf" viewBox="0 0 400 400">',
    '<g transform="translate(-6 0)">',
    '<path d="M150 322c-42-52-46-124-8-186 44 30 62 118 8 186z" fill="#DD8D29" stroke="#16110C" stroke-width="2.6" stroke-linejoin="round"/>',
    '<path d="M150 322c-8-64-6-124 -8-186" fill="none" stroke="#16110C" stroke-width="2"/>',
    '<g fill="none" stroke="#16110C" stroke-width="1.5" opacity=".65">',
    '<path d="M147 288l22-18"/><path d="M145 254l24-20"/><path d="M144 220l23-20"/><path d="M143 186l20-18"/>',
    '</g>',
    '<circle cx="145" cy="118" r="9" fill="#F4EDE1" stroke="#16110C" stroke-width="2.4"/>',
    '</g>',
    '<g transform="translate(96 26) scale(.92)">',
    '<path d="M150 322c-42-52-46-124-8-186 44 30 62 118 8 186z" fill="#E58601" stroke="#16110C" stroke-width="2.8" stroke-linejoin="round"/>',
    '<path d="M150 322c-8-64-6-124 -8-186" fill="none" stroke="#16110C" stroke-width="2.1"/>',
    '<g fill="none" stroke="#16110C" stroke-width="1.6" opacity=".65">',
    '<path d="M147 288l22-18"/><path d="M145 254l24-20"/><path d="M144 220l23-20"/><path d="M143 186l20-18"/>',
    '</g>',
    '<circle cx="145" cy="118" r="9.5" fill="#F4EDE1" stroke="#16110C" stroke-width="2.6"/>',
    '</g>',
    '</symbol>',

    /* moss agate pendant */
    '<symbol id="p-agate" viewBox="0 0 400 400">',
    '<path d="M54 62c24 54 76 88 146 88s122-34 146-88" fill="none" stroke="#16110C" stroke-width="3"/>',
    '<g fill="#F4EDE1" stroke="#16110C" stroke-width="2">',
    '<circle cx="70" cy="96" r="6"/><circle cx="94" cy="122" r="6"/><circle cx="126" cy="139" r="6"/>',
    '<circle cx="274" cy="139" r="6"/><circle cx="306" cy="122" r="6"/><circle cx="330" cy="96" r="6"/>',
    '</g>',
    '<rect x="185" y="150" width="30" height="26" rx="12" fill="none" stroke="#16110C" stroke-width="6"/>',
    '<path d="M200 184c37 31 56 64 56 90 0 35-25 60-56 60s-56-25-56-60c0-26 19-59 56-90z" fill="#6B5F51" stroke="#16110C" stroke-width="3" stroke-linejoin="round"/>',
    '<path d="M200 196c31 27 47 55 47 79 0 30-21 51-47 51s-47-21-47-51c0-24 16-52 47-79z" fill="#46ACC8" stroke="#16110C" stroke-width="2" stroke-linejoin="round"/>',
    '<g fill="#16110C" opacity=".32">',
    '<path d="M178 246c11 4 15 18 8 28-5 8-17 8-24 2 7-4 9-12 5-18 3-5 7-9 11-12z"/>',
    '<path d="M214 276c10-2 17 6 15 16-2 8-11 12-18 6 5-6 5-16 3-22z"/>',
    '<circle cx="222" cy="238" r="7"/><circle cx="170" cy="288" r="5"/><circle cx="198" cy="300" r="6"/><circle cx="192" cy="222" r="4"/>',
    '</g>',
    '<path d="M200 196c31 27 47 55 47 79 0 30-21 51-47 51s-47-21-47-51c0-24 16-52 47-79z" fill="none" stroke="#16110C" stroke-width="2"/>',
    '<path d="M174 232c-8 12-12 26-11 38" fill="none" stroke="#FBF7F0" stroke-width="3" opacity=".4" stroke-linecap="round"/>',
    '</symbol>',

    /* wheat chain */
    '<symbol id="p-chain" viewBox="0 0 400 400">',
    '<path d="M74 92c0 96 56 176 126 176S326 188 326 92" fill="none" stroke="#16110C" stroke-width="22" stroke-linecap="round" opacity=".16"/>',
    '<path d="M74 92c0 96 56 176 126 176S326 188 326 92" fill="none" stroke="#16110C" stroke-width="3" stroke-linecap="round"/>',
    '<g fill="#F4EDE1" stroke="#16110C" stroke-width="2.4">',
    '<ellipse cx="80" cy="122" rx="9" ry="14" transform="rotate(-14 80 122)"/>',
    '<ellipse cx="90" cy="158" rx="9" ry="14" transform="rotate(-22 90 158)"/>',
    '<ellipse cx="106" cy="192" rx="9" ry="14" transform="rotate(-34 106 192)"/>',
    '<ellipse cx="128" cy="222" rx="9" ry="14" transform="rotate(-48 128 222)"/>',
    '<ellipse cx="156" cy="245" rx="9" ry="14" transform="rotate(-64 156 245)"/>',
    '<ellipse cx="188" cy="259" rx="9" ry="14" transform="rotate(-80 188 259)"/>',
    '<ellipse cx="222" cy="257" rx="9" ry="14" transform="rotate(-98 222 257)"/>',
    '<ellipse cx="252" cy="242" rx="9" ry="14" transform="rotate(-114 252 242)"/>',
    '<ellipse cx="276" cy="219" rx="9" ry="14" transform="rotate(-130 276 219)"/>',
    '<ellipse cx="296" cy="190" rx="9" ry="14" transform="rotate(-144 296 190)"/>',
    '<ellipse cx="311" cy="157" rx="9" ry="14" transform="rotate(-158 311 157)"/>',
    '<ellipse cx="320" cy="122" rx="9" ry="14" transform="rotate(-166 320 122)"/>',
    '</g>',
    '<g fill="none" stroke="#16110C" stroke-width="2.6" stroke-linecap="round">',
    '<path d="M74 92a14 14 0 0 1 0-28"/><path d="M326 92a14 14 0 0 0 0-28"/>',
    '</g>',
    '<circle cx="200" cy="292" r="13" fill="#DD8D29" stroke="#16110C" stroke-width="2.4"/>',
    '</symbol>',

    /* kitsune mask studs */
    '<symbol id="p-kitsune" viewBox="0 0 400 400">',
    '<g transform="translate(52 88) scale(1.02)">',
    '<path d="M40 34l16 46M124 34l-16 46" fill="none" stroke="#16110C" stroke-width="3"/>',
    '<path d="M40 30l22 8 4 30-30-14z" fill="#B40F20" stroke="#16110C" stroke-width="2.6" stroke-linejoin="round"/>',
    '<path d="M124 30l-22 8-4 30 30-14z" fill="#B40F20" stroke="#16110C" stroke-width="2.6" stroke-linejoin="round"/>',
    '<path d="M82 56c30 0 52 18 52 46 0 34-24 66-52 66s-52-32-52-66c0-28 22-46 52-46z" fill="#FBF7F0" stroke="#16110C" stroke-width="3" stroke-linejoin="round"/>',
    '<path d="M46 92c10-8 22-8 30 0-8 8-20 8-30 0z" fill="#16110C"/>',
    '<path d="M118 92c-10-8-22-8-30 0 8 8 20 8 30 0z" fill="#16110C"/>',
    '<path d="M82 118c8 0 12 6 12 12s-6 10-12 10-12-4-12-10 4-12 12-12z" fill="#B40F20" stroke="#16110C" stroke-width="2.2"/>',
    '<g stroke="#B40F20" stroke-width="4" stroke-linecap="round"><path d="M40 122l16 8"/><path d="M124 122l-16 8"/><path d="M50 146l14 4"/><path d="M114 146l-14 4"/></g>',
    '<circle cx="82" cy="74" r="5" fill="#B40F20"/>',
    '</g>',
    '<g transform="translate(212 176) scale(.62)">',
    '<path d="M40 30l22 8 4 30-30-14z" fill="#B40F20" stroke="#16110C" stroke-width="4" stroke-linejoin="round"/>',
    '<path d="M124 30l-22 8-4 30 30-14z" fill="#B40F20" stroke="#16110C" stroke-width="4" stroke-linejoin="round"/>',
    '<path d="M82 56c30 0 52 18 52 46 0 34-24 66-52 66s-52-32-52-66c0-28 22-46 52-46z" fill="#FBF7F0" stroke="#16110C" stroke-width="4.6" stroke-linejoin="round"/>',
    '<path d="M46 92c10-8 22-8 30 0-8 8-20 8-30 0z" fill="#16110C"/>',
    '<path d="M118 92c-10-8-22-8-30 0 8 8 20 8 30 0z" fill="#16110C"/>',
    '<path d="M82 118c8 0 12 6 12 12s-6 10-12 10-12-4-12-10 4-12 12-12z" fill="#B40F20" stroke="#16110C" stroke-width="3.4"/>',
    '</g>',
    '</symbol>',

    /* star sigil locket */
    '<symbol id="p-locket" viewBox="0 0 400 400">',
    '<path d="M110 58c-4 60 20 96 90 96s94-36 90-96" fill="none" stroke="#16110C" stroke-width="3" stroke-linecap="round"/>',
    '<g fill="#F4EDE1" stroke="#16110C" stroke-width="2.2">',
    '<circle cx="128" cy="104" r="7"/><circle cx="164" cy="134" r="7"/><circle cx="236" cy="134" r="7"/><circle cx="272" cy="104" r="7"/>',
    '</g>',
    '<circle cx="126" cy="238" r="72" fill="#F4EDE1" stroke="#16110C" stroke-width="3"/>',
    '<circle cx="126" cy="238" r="58" fill="none" stroke="#16110C" stroke-width="1.6" opacity=".5"/>',
    '<path d="M126 196l11 26 28 3-21 19 6 28-24-14-24 14 6-28-21-19 28-3z" fill="#E2D200" stroke="#16110C" stroke-width="2.4" stroke-linejoin="round"/>',
    '<circle cx="264" cy="222" r="76" fill="#DD8D29" stroke="#16110C" stroke-width="3"/>',
    '<circle cx="264" cy="222" r="62" fill="none" stroke="#16110C" stroke-width="1.8" opacity=".45"/>',
    '<g fill="none" stroke="#16110C" stroke-width="2" opacity=".6">',
    '<path d="M264 174v96"/><path d="M216 222h96"/><path d="M230 188l68 68"/><path d="M298 188l-68 68"/>',
    '</g>',
    '<circle cx="264" cy="222" r="14" fill="#FBF7F0" stroke="#16110C" stroke-width="2.4"/>',
    '<rect x="186" y="196" width="16" height="52" rx="7" fill="#F4EDE1" stroke="#16110C" stroke-width="2.4"/>',
    '<circle cx="200" cy="158" r="12" fill="none" stroke="#16110C" stroke-width="4"/>',
    '</symbol>',

    /* mecha joint ring */
    '<symbol id="p-mecha" viewBox="0 0 400 400">',
    '<circle cx="200" cy="252" r="84" fill="none" stroke="#6B5F51" stroke-width="21"/>',
    '<circle cx="200" cy="252" r="94.5" fill="none" stroke="#16110C" stroke-width="2.8"/>',
    '<circle cx="200" cy="252" r="73.5" fill="none" stroke="#16110C" stroke-width="2.8"/>',
    '<g stroke="#16110C" stroke-width="2" opacity=".5">',
    '<path d="M128 310l-14 14"/><path d="M272 310l14 14"/><path d="M118 218l-16-8"/><path d="M282 218l16-8"/>',
    '</g>',
    '<g stroke="#16110C" stroke-width="2.8" stroke-linejoin="round">',
    '<g transform="rotate(-52 200 252)"><rect x="178" y="139" width="44" height="34" rx="4" fill="#F4EDE1"/><circle cx="200" cy="156" r="5.5" fill="#DD8D29"/></g>',
    '<g transform="rotate(-26 200 252)"><rect x="176" y="137" width="48" height="38" rx="4" fill="#F4EDE1"/><circle cx="200" cy="156" r="6" fill="#DD8D29"/></g>',
    '<g><rect x="172" y="132" width="56" height="46" rx="5" fill="#F4EDE1"/>',
    '<rect x="184" y="142" width="32" height="12" rx="3" fill="#46ACC8"/>',
    '<circle cx="200" cy="166" r="6.5" fill="#DD8D29"/></g>',
    '<g transform="rotate(26 200 252)"><rect x="176" y="137" width="48" height="38" rx="4" fill="#F4EDE1"/><circle cx="200" cy="156" r="6" fill="#DD8D29"/></g>',
    '<g transform="rotate(52 200 252)"><rect x="178" y="139" width="44" height="34" rx="4" fill="#F4EDE1"/><circle cx="200" cy="156" r="5.5" fill="#DD8D29"/></g>',
    '</g>',
    '</symbol>',

    /* sakura drops */
    '<symbol id="p-sakura" viewBox="0 0 400 400">',
    '<g fill="#F4EDE1" stroke="#16110C" stroke-width="2.4"><circle cx="132" cy="86" r="9"/><circle cx="266" cy="106" r="9"/></g>',
    '<path d="M132 95v78" fill="none" stroke="#16110C" stroke-width="2.6"/>',
    '<path d="M266 115v78" fill="none" stroke="#16110C" stroke-width="2.6"/>',
    '<g transform="translate(132 224)">',
    '<g fill="#E58601" stroke="#16110C" stroke-width="2.4" stroke-linejoin="round" opacity=".92">',
    '<path d="M0-48c14 0 24 12 20 26-4 12-14 16-20 16s-16-4-20-16c-4-14 6-26 20-26z"/>',
    '<path d="M0-48c14 0 24 12 20 26-4 12-14 16-20 16s-16-4-20-16c-4-14 6-26 20-26z" transform="rotate(72)"/>',
    '<path d="M0-48c14 0 24 12 20 26-4 12-14 16-20 16s-16-4-20-16c-4-14 6-26 20-26z" transform="rotate(144)"/>',
    '<path d="M0-48c14 0 24 12 20 26-4 12-14 16-20 16s-16-4-20-16c-4-14 6-26 20-26z" transform="rotate(216)"/>',
    '<path d="M0-48c14 0 24 12 20 26-4 12-14 16-20 16s-16-4-20-16c-4-14 6-26 20-26z" transform="rotate(288)"/>',
    '</g>',
    '<circle cx="0" cy="0" r="10" fill="#E2D200" stroke="#16110C" stroke-width="2.2"/>',
    '</g>',
    '<g transform="translate(266 244) scale(.86)">',
    '<g fill="#E58601" stroke="#16110C" stroke-width="2.8" stroke-linejoin="round" opacity=".92">',
    '<path d="M0-48c14 0 24 12 20 26-4 12-14 16-20 16s-16-4-20-16c-4-14 6-26 20-26z"/>',
    '<path d="M0-48c14 0 24 12 20 26-4 12-14 16-20 16s-16-4-20-16c-4-14 6-26 20-26z" transform="rotate(72)"/>',
    '<path d="M0-48c14 0 24 12 20 26-4 12-14 16-20 16s-16-4-20-16c-4-14 6-26 20-26z" transform="rotate(144)"/>',
    '<path d="M0-48c14 0 24 12 20 26-4 12-14 16-20 16s-16-4-20-16c-4-14 6-26 20-26z" transform="rotate(216)"/>',
    '<path d="M0-48c14 0 24 12 20 26-4 12-14 16-20 16s-16-4-20-16c-4-14 6-26 20-26z" transform="rotate(288)"/>',
    '</g>',
    '<circle cx="0" cy="0" r="11" fill="#E2D200" stroke="#16110C" stroke-width="2.6"/>',
    '</g>',
    '</symbol>',

    /* chibi cat bracelet */
    '<symbol id="p-cat" viewBox="0 0 400 400">',
    '<path d="M56 96c0 78 64 142 144 142s144-64 144-142" fill="none" stroke="#16110C" stroke-width="3"/>',
    '<g fill="#F4EDE1" stroke="#16110C" stroke-width="2.2">',
    '<ellipse cx="61" cy="120" rx="8" ry="12"/><ellipse cx="72" cy="154" rx="8" ry="12" transform="rotate(-18 72 154)"/>',
    '<ellipse cx="92" cy="186" rx="8" ry="12" transform="rotate(-34 92 186)"/><ellipse cx="120" cy="212" rx="8" ry="12" transform="rotate(-52 120 212)"/>',
    '<ellipse cx="280" cy="212" rx="8" ry="12" transform="rotate(52 280 212)"/><ellipse cx="308" cy="186" rx="8" ry="12" transform="rotate(34 308 186)"/>',
    '<ellipse cx="328" cy="154" rx="8" ry="12" transform="rotate(18 328 154)"/><ellipse cx="339" cy="120" rx="8" ry="12"/>',
    '</g>',
    '<g stroke="#16110C" stroke-width="2.6" fill="none"><path d="M144 224v20"/><path d="M200 240v20"/><path d="M256 224v20"/></g>',
    '<g stroke-width="3" stroke="#16110C" stroke-linejoin="round">',
    '<path d="M144 256l-21-13 4 27zM144 256l21-13-4 27z" fill="#FBF7F0"/>',
    '<circle cx="144" cy="288" r="31" fill="#FBF7F0"/>',
    '<path d="M200 272l-21-13 4 27zM200 272l21-13-4 27z" fill="#16110C"/>',
    '<circle cx="200" cy="304" r="31" fill="#3A3128"/>',
    '<path d="M256 256l-21-13 4 27zM256 256l21-13-4 27z" fill="#DD8D29"/>',
    '<circle cx="256" cy="288" r="31" fill="#DD8D29"/>',
    '</g>',
    '<g fill="#16110C"><circle cx="132" cy="282" r="4.4"/><circle cx="156" cy="282" r="4.4"/><circle cx="244" cy="282" r="4.4"/><circle cx="268" cy="282" r="4.4"/></g>',
    '<g fill="#FBF7F0"><circle cx="188" cy="298" r="4.4"/><circle cx="212" cy="298" r="4.4"/></g>',
    '<g stroke="#16110C" stroke-width="2" fill="none" stroke-linecap="round">',
    '<path d="M139 298q5 6 10 0"/><path d="M251 298q5 6 10 0"/>',
    '<path d="M118 288h-12M170 288h12"/><path d="M230 288h-12M282 288h12"/>',
    '</g>',
    '<g stroke="#FBF7F0" stroke-width="2" fill="none" stroke-linecap="round">',
    '<path d="M195 314q5 6 10 0"/><path d="M174 304h-12M226 304h12"/>',
    '</g>',
    '</symbol>',

    /* onmyoji talisman */
    '<symbol id="p-talisman" viewBox="0 0 400 400">',
    '<path d="M136 40c-18 58-10 100 64 100s82-42 64-100" fill="none" stroke="#3A3128" stroke-width="6" stroke-linecap="round"/>',
    '<rect x="184" y="128" width="32" height="18" rx="6" fill="#F4EDE1" stroke="#16110C" stroke-width="2.4"/>',
    '<rect x="128" y="152" width="144" height="196" rx="8" fill="#DD8D29" stroke="#16110C" stroke-width="3"/>',
    '<rect x="140" y="164" width="120" height="172" rx="4" fill="none" stroke="#16110C" stroke-width="1.8" opacity=".55"/>',
    '<g fill="none" stroke="#16110C" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">',
    '<path d="M200 182v46"/><path d="M166 200h68"/><path d="M176 228h48"/>',
    '<path d="M200 228v44"/><path d="M172 252l28 20 28-20"/>',
    '<path d="M162 288h76"/><path d="M176 306h48"/><path d="M200 288v34"/>',
    '</g>',
    '<g fill="none" stroke="#B40F20" stroke-width="2" opacity=".85"><path d="M154 172v156"/><path d="M246 172v156"/></g>',
    '<path d="M200 348v22" fill="none" stroke="#3A3128" stroke-width="5" stroke-linecap="round"/>',
    '<circle cx="200" cy="378" r="11" fill="#16110C"/>',
    '<circle cx="196" cy="374" r="3" fill="#6B5F51"/>',
    '</symbol>',

    /* empty cart */
    '<symbol id="i-empty" viewBox="0 0 120 120">',
    '<circle cx="60" cy="52" r="30" fill="none" stroke="#16110C" stroke-width="3"/>',
    '<circle cx="60" cy="52" r="18" fill="none" stroke="#16110C" stroke-width="2" opacity=".5"/>',
    '<path d="M28 96h64" stroke="#16110C" stroke-width="3" stroke-linecap="round"/>',
    '</symbol>',

    /* studio bench illustration */
    '<symbol id="i-bench" viewBox="0 0 400 400">',
    '<rect x="40" y="242" width="320" height="18" rx="4" fill="#DD8D29" stroke="#16110C" stroke-width="3"/>',
    '<path d="M66 260v96M334 260v96" stroke="#16110C" stroke-width="3" stroke-linecap="round"/>',
    '<path d="M156 242v-42h88v42" fill="#F4EDE1" stroke="#16110C" stroke-width="3"/>',
    '<circle cx="200" cy="168" r="34" fill="#46ACC8" stroke="#16110C" stroke-width="3"/>',
    '<circle cx="200" cy="168" r="20" fill="none" stroke="#16110C" stroke-width="2" opacity=".55"/>',
    '<path d="M200 134V62" stroke="#16110C" stroke-width="3"/>',
    '<path d="M170 62h60l-8 22h-44z" fill="#E2D200" stroke="#16110C" stroke-width="3" stroke-linejoin="round"/>',
    '<g stroke="#16110C" stroke-width="3" stroke-linecap="round">',
    '<path d="M84 242l14-56 16 56"/><path d="M286 242l16-46 12 46"/>',
    '</g>',
    '<g fill="#B40F20" stroke="#16110C" stroke-width="2.4"><circle cx="120" cy="228" r="10"/><circle cx="272" cy="228" r="10"/></g>',
    '<g stroke="#16110C" stroke-width="2" opacity=".5" stroke-linecap="round">',
    '<path d="M150 300h100"/><path d="M170 320h60"/>',
    '</g>',
    '</symbol>',

    '</svg>'
  ].join("");

  /* ------------------------------------------------------------------
     4. Helpers
     ------------------------------------------------------------------ */

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function money(n) {
    return "$" + n.toFixed(2).replace(/\.00$/, "");
  }

  function coll(id) {
    for (var i = 0; i < COLLECTIONS.length; i++) {
      if (COLLECTIONS[i].id === id) return COLLECTIONS[i];
    }
    return COLLECTIONS[0];
  }

  function prod(id) {
    for (var i = 0; i < PRODUCTS.length; i++) {
      if (PRODUCTS[i].id === id) return PRODUCTS[i];
    }
    return null;
  }

  function stars(r) {
    var full = Math.round(r);
    var out = "";
    for (var i = 0; i < 5; i++) out += i < full ? "★" : "☆";
    return out;
  }

  function piece(spriteId, cls) {
    return '<svg class="piece ' + (cls || "") + '" viewBox="0 0 400 400" role="img" aria-hidden="true"><use href="#p-' + spriteId + '"/></svg>';
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /* ------------------------------------------------------------------
     5. Cart
     ------------------------------------------------------------------ */

  var KEY = "lynns-cart-v1";
  var FREE_SHIP = 150;
  var mem = [];

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return mem;
    }
  }

  function save(items) {
    mem = items;
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) { /* file:// fallback uses mem */ }
  }

  var Cart = {
    items: function () { return load(); },
    count: function () {
      return load().reduce(function (n, l) { return n + l.qty; }, 0);
    },
    subtotal: function () {
      return load().reduce(function (n, l) {
        var p = prod(l.id);
        return n + (p ? p.price * l.qty : 0);
      }, 0);
    },
    add: function (id, size, metal, qty) {
      var items = load();
      var key = id + "|" + size + "|" + metal;
      var found = false;
      for (var i = 0; i < items.length; i++) {
        if (items[i].id + "|" + items[i].size + "|" + items[i].metal === key) {
          items[i].qty += qty || 1;
          found = true;
        }
      }
      if (!found) items.push({ id: id, size: size, metal: metal, qty: qty || 1 });
      save(items);
      paintCart();
      return true;
    },
    bump: function (idx, delta) {
      var items = load();
      if (!items[idx]) return;
      items[idx].qty += delta;
      if (items[idx].qty < 1) items.splice(idx, 1);
      save(items);
      paintCart();
    },
    remove: function (idx) {
      var items = load();
      items.splice(idx, 1);
      save(items);
      paintCart();
    }
  };

  /* ------------------------------------------------------------------
     6. Shared chrome
     ------------------------------------------------------------------ */

  var NAV = [
    { href: "index.html", label: "Home", page: "home" },
    { href: "shop.html", label: "Shop", page: "shop" },
    { href: "shop.html?tag=anime", label: "Anime", page: "anime" },
    { href: "about.html", label: "The Studio", page: "about" }
  ];

  function headerHTML(active) {
    var nav = NAV.map(function (n) {
      var cur = n.page === active ? ' aria-current="page"' : "";
      return '<a href="' + n.href + '"' + cur + '>' + n.label + "</a>";
    }).join("");

    return [
      '<div class="ticker">Free UK shipping over <b>$150</b> &nbsp;&#9670;&nbsp; Every piece made by one pair of hands in Sheffield &nbsp;&#9670;&nbsp; <b>Sample site</b>, no real orders taken</div>',
      '<header class="hdr">',
      '<div class="hdr-in">',
      '<nav class="nav" id="nav" aria-label="Main">' + nav + "</nav>",
      '<button class="icon-btn burger" id="burger" aria-expanded="false" aria-controls="nav" aria-label="Menu">&#9776;</button>',
      '<a class="brand" href="index.html"><span class="bn">Lynn\'s Jewelry</span><span class="bs">Hand made &#183; since 2014</span></a>',
      '<div class="hdr-r">',
      '<a class="icon-btn" href="shop.html"><span class="lbl">Shop</span></a>',
      '<button class="icon-btn" id="cart-open" aria-label="Open cart"><span class="lbl">Cart</span><span class="count" id="cart-count" data-empty="1">0</span></button>',
      "</div></div></header>"
    ].join("");
  }

  function footerHTML() {
    var swatch = [FOX.amber, FOX.yellow, FOX.teal, FOX.orange, FOX.red]
      .map(function (c) { return '<i style="--s:' + c + '"></i>'; }).join("");

    var cols = COLLECTIONS.map(function (c) {
      return '<li><a href="shop.html?c=' + c.id + '">' + c.name + "</a></li>";
    }).join("");

    return [
      '<footer class="ftr">',
      '<div class="wrap"><div class="ftr-grid">',
      '<div><a class="brand" style="text-align:left" href="index.html"><span class="bn">Lynn\'s Jewelry</span><span class="bs">Hand made &#183; since 2014</span></a>',
      '<p class="blurb">A one-bench studio in Sheffield. Forged metal, kiln-fired enamel, stones set by hand.</p>',
      '<div class="swatches">' + swatch + "</div></div>",
      "<div><h4>Collections</h4><ul>" + cols + "</ul></div>",
      '<div><h4>Care</h4><ul>',
      '<li><a href="about.html#process">How it is made</a></li>',
      '<li><a href="about.html#care">Care guide</a></li>',
      '<li><a href="about.html#sizing">Ring sizing</a></li>',
      '<li><a href="about.html#faq">Repairs</a></li>',
      "</ul></div>",
      '<div><h4>Shop</h4><ul>',
      '<li><a href="shop.html">All pieces</a></li>',
      '<li><a href="shop.html?tag=anime">Anime-inspired</a></li>',
      '<li><a href="shop.html?c=limited">One of one</a></li>',
      '<li><a href="about.html#faq">Shipping and returns</a></li>',
      "</ul></div>",
      "</div>",
      '<div class="ftr-base">',
      "<span>Sample storefront built as a design demonstration. Brand, products, and reviews are invented.</span>",
      "<span>Palette: Fantastic Mr. Fox (Wes Anderson)</span>",
      "</div></div></footer>"
    ].join("");
  }

  function drawerHTML() {
    return [
      '<div class="scrim" id="scrim" data-open="0"></div>',
      '<aside class="drawer" id="drawer" data-open="0" role="dialog" aria-modal="true" aria-label="Shopping bag" aria-hidden="true">',
      '<div class="drawer-h"><h3>Your bag</h3><button class="x" id="cart-close" aria-label="Close cart">&#215;</button></div>',
      '<div class="ship-bar" id="ship-bar"></div>',
      '<div class="drawer-b" id="cart-body"></div>',
      '<div class="drawer-f" id="cart-foot"></div>',
      "</aside>",
      '<div class="toast" id="toast" role="status" aria-live="polite"></div>'
    ].join("");
  }

  /* ------------------------------------------------------------------
     7. Cart painting + drawer behaviour
     ------------------------------------------------------------------ */

  function paintCart() {
    var items = Cart.items();
    var n = Cart.count();
    var sub = Cart.subtotal();

    var badge = $("#cart-count");
    if (badge) {
      badge.textContent = String(n);
      badge.setAttribute("data-empty", n === 0 ? "1" : "0");
    }

    var bar = $("#ship-bar");
    if (bar) {
      var left = FREE_SHIP - sub;
      var pct = Math.min(100, (sub / FREE_SHIP) * 100);
      bar.innerHTML = left > 0
        ? "<p>Add <strong>" + money(left) + "</strong> for free shipping</p><div class=\"track\"><div class=\"fill\" style=\"width:" + pct + "%\"></div></div>"
        : "<p>Free shipping unlocked</p><div class=\"track\"><div class=\"fill\" style=\"width:100%\"></div></div>";
    }

    var body = $("#cart-body");
    if (body) {
      if (!items.length) {
        body.innerHTML = '<div class="empty"><svg viewBox="0 0 120 120" aria-hidden="true"><use href="#i-empty"/></svg>'
          + "<p>Nothing in the bag yet.</p>"
          + '<a class="btn ghost small" href="shop.html">Browse the shop</a></div>';
      } else {
        body.innerHTML = items.map(function (l, i) {
          var p = prod(l.id);
          if (!p) return "";
          var c = coll(p.collection);
          return '<div class="line">'
            + '<a class="thumb" href="product.html?id=' + p.id + '">' + piece(p.sprite) + "</a>"
            + "<div><h4>" + esc(p.name) + "</h4>"
            + '<div class="v">' + esc(l.metal) + (l.size && l.size !== "Standard" ? " &#183; " + esc(l.size) : "") + "</div>"
            + '<div class="qty"><button data-bump="' + i + '" data-d="-1" aria-label="Reduce quantity">&#8722;</button>'
            + "<span>" + l.qty + '</span><button data-bump="' + i + '" data-d="1" aria-label="Increase quantity">+</button></div></div>'
            + '<div class="rt"><span class="p">' + money(p.price * l.qty) + "</span>"
            + '<button class="rm" data-rm="' + i + '">Remove</button></div>'
            + '<span style="display:none">' + c.name + "</span></div>";
        }).join("");
      }
    }

    var foot = $("#cart-foot");
    if (foot) {
      if (!items.length) {
        foot.innerHTML = '<p class="fine">Shipping is worked out at checkout.</p>';
      } else {
        var ship = sub >= FREE_SHIP ? 0 : 8;
        foot.innerHTML = '<div class="row"><span>Subtotal</span><span>' + money(sub) + "</span></div>"
          + '<div class="row"><span>Shipping</span><span>' + (ship === 0 ? "Free" : money(ship)) + "</span></div>"
          + '<div class="row tot"><span>Total</span><span>' + money(sub + ship) + "</span></div>"
          + '<button class="btn full" id="checkout">Checkout</button>'
          + '<p class="fine">This is a sample site. Checkout is disabled.</p>';
        var co = $("#checkout");
        if (co) {
          co.addEventListener("click", function () {
            toast("Sample site, so <b>no payment</b> is taken. The cart logic itself is live.");
          });
        }
      }
    }
  }

  var toastTimer = null;
  function toast(html) {
    var t = $("#toast");
    if (!t) return;
    t.innerHTML = html;
    t.setAttribute("data-open", "1");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.setAttribute("data-open", "0"); }, 3600);
  }

  function openCart(open) {
    var d = $("#drawer"), s = $("#scrim");
    if (!d) return;
    d.setAttribute("data-open", open ? "1" : "0");
    d.setAttribute("aria-hidden", open ? "false" : "true");
    s.setAttribute("data-open", open ? "1" : "0");
    document.body.style.overflow = open ? "hidden" : "";
    if (open) { var c = $("#cart-close"); if (c) c.focus(); }
  }

  /* ------------------------------------------------------------------
     8. Card renderer
     ------------------------------------------------------------------ */

  function cardHTML(p) {
    var c = coll(p.collection);
    var flag = p.badge
      ? '<span class="flag' + (p.oneOf ? " accent" : "") + '" style="--c:' + c.color + '">' + esc(p.badge) + "</span>"
      : "";
    return '<article class="card" style="--c:' + c.color + '">'
      + '<a class="card-a" href="product.html?id=' + p.id + '" aria-label="' + esc(p.name) + '">'
      + flag + piece(p.sprite)
      + '<span class="quick"><span class="btn" data-quick="' + p.id + '">Add to bag</span></span>'
      + "</a>"
      + '<div class="card-b"><span class="card-col">' + esc(c.name) + "</span>"
      + '<a class="card-t" href="product.html?id=' + p.id + '">' + esc(p.name) + "</a>"
      + '<span class="card-m">' + esc(p.blurb) + "</span>"
      + '<span class="card-p"><b>' + money(p.price) + '</b><span class="stars">' + stars(p.rating) + "</span>"
      + '<span style="color:var(--ink-3)">' + p.reviews + "</span></span></div></article>";
  }

  function wireQuickAdd(root) {
    $$("[data-quick]", root).forEach(function (el) {
      el.addEventListener("click", function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        var p = prod(el.getAttribute("data-quick"));
        if (!p) return;
        Cart.add(p.id, p.sizes[Math.min(2, p.sizes.length - 1)], p.metals[0], 1);
        toast("<b>" + esc(p.name) + "</b> added to your bag.");
      });
    });
  }

  /* ------------------------------------------------------------------
     9. Page controllers
     ------------------------------------------------------------------ */

  var WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight",
    "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen"];

  function word(n) { return WORDS[n] || String(n); }

  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  function initHome() {
    var hero = $("#hero-art");
    if (hero) hero.insertAdjacentHTML("afterbegin", piece("ember"));

    // Counts are derived from the catalog so the copy cannot drift from the data.
    var animeCount = PRODUCTS.filter(function (p) { return p.anime; }).length;
    var reviewTotal = PRODUCTS.reduce(function (n, p) { return n + p.reviews; }, 0);
    var avgRating = PRODUCTS.reduce(function (n, p) { return n + p.rating; }, 0) / PRODUCTS.length;

    var lede = $("#lede-tally");
    if (lede) {
      lede.textContent = cap(word(PRODUCTS.length)) + " pieces in the shop today, "
        + word(animeCount) + " of them anime-inspired.";
    }
    var mc = $("#meta-count");
    if (mc) mc.textContent = String(PRODUCTS.length);
    var rt = $("#review-tally");
    if (rt) {
      rt.textContent = reviewTotal.toLocaleString("en-US") + " reviews · "
        + avgRating.toFixed(2) + " average";
    }

    var tiles = $("#tiles");
    if (tiles) {
      tiles.innerHTML = COLLECTIONS.map(function (c) {
        var n = PRODUCTS.filter(function (p) { return p.collection === c.id; }).length;
        return '<a class="tile" style="--c:' + c.color + '" href="shop.html?c=' + c.id + '">'
          + '<span class="dot"></span><h3>' + c.name + "</h3><p>" + c.blurb + "</p>"
          + '<span class="n">' + n + (n === 1 ? " piece" : " pieces") + "</span></a>";
      }).join("");
    }

    var feat = $("#featured");
    if (feat) {
      var ids = ["kitsune-studs", "kintsugi-cuff", "moss-agate", "mecha-joint"];
      feat.innerHTML = ids.map(function (id) { return cardHTML(prod(id)); }).join("");
      wireQuickAdd(feat);
    }

    var anime = $("#anime-row");
    if (anime) {
      anime.innerHTML = PRODUCTS.filter(function (p) { return p.anime; }).slice(0, 4)
        .map(cardHTML).join("");
      wireQuickAdd(anime);
    }

    var bench = $("#bench-art");
    if (bench) bench.insertAdjacentHTML("afterbegin", '<svg viewBox="0 0 400 400" aria-hidden="true"><use href="#i-bench"/></svg>');

    var steps = $("#steps");
    if (steps) {
      var S = [
        ["Draw", "Every piece starts as a pencil drawing at actual size, so the proportions are settled before any metal gets cut."],
        ["Forge", "Sheet and wire get sawn, hammered, and soldered at the bench. No casting house, no outside supplier."],
        ["Fire", "Enamel goes into the kiln at 800 degrees, three coats, stoned flat between each firing."],
        ["Finish", "Hand-filed, sanded through five grits, then polished. Your piece gets photographed before it is boxed."]
      ];
      steps.innerHTML = S.map(function (s, i) {
        var c = COLLECTIONS[i % COLLECTIONS.length];
        return '<div class="step" style="--c:' + c.color + '"><span class="num">0' + (i + 1) + "</span><h3>" + s[0] + "</h3><p>" + s[1] + "</p></div>";
      }).join("");
    }

    var quotes = $("#quotes");
    if (quotes) {
      var Q = [
        ["The kitsune studs are tiny and the enamel is properly glossy. I get asked about them every time I wear them.", "Priya R.", "Kitsune Mask Studs"],
        ["Lynn sent a photo of my actual agate before setting it. That is not something a big shop does.", "Dan H.", "Moss Agate Pendant"],
        ["The mecha ring bends with my finger and has not loosened in eight months of daily wear.", "Sam O.", "Mecha Joint Ring"]
      ];
      quotes.innerHTML = Q.map(function (q, i) {
        var c = COLLECTIONS[(i + 2) % COLLECTIONS.length];
        return '<figure class="quote" style="--c:' + c.color + '"><blockquote>&#8220;' + q[0] + '&#8221;</blockquote>'
          + '<figcaption class="who"><b>' + q[1] + "</b><br>" + q[2] + "</figcaption></figure>";
      }).join("");
    }
  }

  function initShop() {
    var params = new URLSearchParams(location.search);
    var state = {
      colls: params.get("c") ? [params.get("c")] : [],
      metals: [],
      bands: [],
      anime: params.get("tag") === "anime",
      sort: "featured"
    };

    var METAL_GROUPS = [
      { id: "silver", label: "Sterling silver", test: /sterling/i },
      { id: "brass", label: "Brass", test: /brass/i },
      { id: "copper", label: "Copper", test: /copper/i },
      { id: "steel", label: "Steel and titanium", test: /steel|titanium/i },
      { id: "gold", label: "Gold fill", test: /gold fill/i }
    ];
    var BANDS = [
      { id: "u100", label: "Under $100", test: function (p) { return p.price < 100; } },
      { id: "100-200", label: "$100 to $200", test: function (p) { return p.price >= 100 && p.price < 200; } },
      { id: "200-300", label: "$200 to $300", test: function (p) { return p.price >= 200 && p.price < 300; } },
      { id: "o300", label: "$300 and up", test: function (p) { return p.price >= 300; } }
    ];

    function matches(p) {
      if (state.colls.length && state.colls.indexOf(p.collection) === -1) return false;
      if (state.anime && !p.anime) return false;
      if (state.metals.length) {
        var hit = state.metals.some(function (mid) {
          var g = METAL_GROUPS.filter(function (x) { return x.id === mid; })[0];
          return g && p.metals.some(function (m) { return g.test.test(m); });
        });
        if (!hit) return false;
      }
      if (state.bands.length) {
        var bh = state.bands.some(function (bid) {
          var b = BANDS.filter(function (x) { return x.id === bid; })[0];
          return b && b.test(p);
        });
        if (!bh) return false;
      }
      return true;
    }

    function countIf(fn) { return PRODUCTS.filter(fn).length; }

    var rail = $("#filters");
    rail.innerHTML = [
      '<div class="fgroup"><h4>Collection</h4>'
      + COLLECTIONS.map(function (c) {
        return '<label class="chk" style="--c:' + c.color + '"><input type="checkbox" data-f="coll" value="' + c.id + '"'
          + (state.colls.indexOf(c.id) > -1 ? " checked" : "") + '><span class="cd"></span>' + c.name
          + '<span class="cn">' + countIf(function (p) { return p.collection === c.id; }) + "</span></label>";
      }).join("") + "</div>",
      '<div class="fgroup"><h4>Theme</h4><label class="chk" style="--c:' + FOX.red + '"><input type="checkbox" data-f="anime"'
      + (state.anime ? " checked" : "") + '><span class="cd"></span>Anime-inspired<span class="cn">'
      + countIf(function (p) { return p.anime; }) + "</span></label></div>",
      '<div class="fgroup"><h4>Metal</h4>'
      + METAL_GROUPS.map(function (g) {
        return '<label class="chk" style="--c:' + FOX.amber + '"><input type="checkbox" data-f="metal" value="' + g.id + '"><span class="cd"></span>'
          + g.label + '<span class="cn">'
          + countIf(function (p) { return p.metals.some(function (m) { return g.test.test(m); }); }) + "</span></label>";
      }).join("") + "</div>",
      '<div class="fgroup"><h4>Price</h4>'
      + BANDS.map(function (b) {
        return '<label class="chk" style="--c:' + FOX.teal + '"><input type="checkbox" data-f="band" value="' + b.id + '"><span class="cd"></span>'
          + b.label + '<span class="cn">' + countIf(b.test) + "</span></label>";
      }).join("") + "</div>",
      '<div class="fgroup"><button class="clear" id="clear">Clear all filters</button></div>'
    ].join("");

    function render() {
      var list = PRODUCTS.filter(matches);
      if (state.sort === "low") list.sort(function (a, b) { return a.price - b.price; });
      if (state.sort === "high") list.sort(function (a, b) { return b.price - a.price; });
      if (state.sort === "rated") list.sort(function (a, b) { return b.rating - a.rating || b.reviews - a.reviews; });

      var g = $("#shop-grid");
      g.innerHTML = list.length
        ? list.map(cardHTML).join("")
        : '<div class="empty" style="grid-column:1/-1"><svg viewBox="0 0 120 120" aria-hidden="true"><use href="#i-empty"/></svg>'
          + "<p>No pieces match that combination.</p>"
          + '<button class="btn ghost small" id="clear2">Clear filters</button></div>';
      wireQuickAdd(g);
      var c2 = $("#clear2");
      if (c2) c2.addEventListener("click", clearAll);

      $("#count").textContent = list.length + (list.length === 1 ? " piece" : " pieces");
      var heading = $("#shop-title");
      if (heading) {
        heading.textContent = state.anime && !state.colls.length
          ? "Anime-inspired"
          : (state.colls.length === 1 ? coll(state.colls[0]).name : "Every piece");
      }
    }

    function clearAll() {
      state.colls = []; state.metals = []; state.bands = []; state.anime = false;
      $$("#filters input").forEach(function (i) { i.checked = false; });
      render();
    }

    rail.addEventListener("change", function (ev) {
      var el = ev.target;
      var f = el.getAttribute("data-f");
      if (f === "anime") { state.anime = el.checked; }
      else if (f === "coll") { toggle(state.colls, el.value, el.checked); }
      else if (f === "metal") { toggle(state.metals, el.value, el.checked); }
      else if (f === "band") { toggle(state.bands, el.value, el.checked); }
      render();
    });

    function toggle(arr, v, on) {
      var i = arr.indexOf(v);
      if (on && i === -1) arr.push(v);
      if (!on && i > -1) arr.splice(i, 1);
    }

    $("#clear").addEventListener("click", clearAll);
    $("#sort").addEventListener("change", function (e) { state.sort = e.target.value; render(); });

    render();
  }

  function initProduct() {
    var id = new URLSearchParams(location.search).get("id") || "ember-signet";
    var p = prod(id) || PRODUCTS[0];
    var c = coll(p.collection);
    var sel = { size: p.sizes[Math.min(2, p.sizes.length - 1)], metal: p.metals[0], qty: 1, view: 0 };

    document.title = p.name + " · Lynn's Jewelry";

    $("#crumb").innerHTML = '<a href="index.html">Home</a> / <a href="shop.html">Shop</a> / <a href="shop.html?c='
      + c.id + '">' + c.name + "</a> / " + esc(p.name);

    function pieceAt(scale, dy) {
      return '<g transform="translate(200 ' + (200 + (dy || 0)) + ') scale(' + scale
        + ') translate(-200 -200)"><use href="#p-' + p.sprite + '"/></g>';
    }

    function ruler() {
      return '<g stroke="#6B5F51" stroke-width="2.4" stroke-linecap="round" fill="none">'
        + '<path d="M140 356h120"/><path d="M140 348v16"/><path d="M260 348v16"/></g>'
        + '<text x="200" y="382" text-anchor="middle" fill="#6B5F51" '
        + 'style="font:500 19px \'JetBrains Mono\',monospace;letter-spacing:.08em">10 mm</text>';
    }

    function benchBed() {
      return '<g opacity=".16"><use href="#i-bench"/></g>'
        + '<path d="M28 318h344" stroke="#6B5F51" stroke-width="2" opacity=".5"/>';
    }

    var VIEWS = [
      { tag: "Full view", build: function () { return pieceAt(1); } },
      { tag: "Detail", build: function () { return pieceAt(1.75); } },
      { tag: "Scale", build: function () { return pieceAt(0.72, -26) + ruler(); } },
      { tag: "On the bench", build: function () { return benchBed() + pieceAt(0.96, -14); } }
    ];

    function paintStage() {
      var v = VIEWS[sel.view];
      $("#stage").innerHTML = '<span class="tag">' + v.tag + "</span>"
        + '<svg class="piece" viewBox="0 0 400 400" role="img" aria-label="' + esc(p.name) + ", " + v.tag.toLowerCase() + '">'
        + v.build() + "</svg>";
      $$("#thumbs button").forEach(function (b, i) {
        b.setAttribute("aria-current", i === sel.view ? "true" : "false");
      });
    }

    $("#thumbs").innerHTML = VIEWS.map(function (v, i) {
      return '<button type="button" data-v="' + i + '" aria-label="' + v.tag + '">'
        + '<svg viewBox="0 0 400 400" aria-hidden="true">' + v.build() + "</svg></button>";
    }).join("");
    $$("#thumbs button").forEach(function (b) {
      b.addEventListener("click", function () { sel.view = +b.getAttribute("data-v"); paintStage(); });
    });
    paintStage();

    $("#pd-col").textContent = c.name;
    $("#pd-col").style.setProperty("--c", c.color);
    $("#pd-title").textContent = p.name;
    $("#pd-price").innerHTML = "<b>" + money(p.price) + "</b>"
      + (p.made ? '<span style="font-size:.74rem;color:var(--ink-3)">Made to order, ' + p.lead + "</span>"
        : '<span style="font-size:.74rem;color:var(--ink-3)">' + p.lead + "</span>");
    $("#pd-rating").innerHTML = '<span class="stars">' + stars(p.rating) + "</span>" + p.rating.toFixed(1)
      + " from " + p.reviews + " reviews";
    $("#pd-desc").innerHTML = "<p>" + esc(p.story) + "</p>";

    var opts = $("#pd-opts");
    var sizeBlock = p.sizes.length > 1
      ? '<div class="opt"><h4>' + (p.id.indexOf("ring") > -1 || p.sizes[0].length < 3 ? "Size" : "Length")
        + ' <span id="size-val">' + esc(sel.size) + "</span></h4><div class=\"pills\" id=\"sizes\">"
        + p.sizes.map(function (s) {
          return '<button class="pill" type="button" data-size="' + esc(s) + '" aria-pressed="' + (s === sel.size) + '">' + esc(s) + "</button>";
        }).join("") + "</div></div>"
      : "";
    var metalBlock = p.metals.length > 1
      ? '<div class="opt"><h4>Metal <span id="metal-val">' + esc(sel.metal) + "</span></h4><div class=\"pills\" id=\"metals\">"
        + p.metals.map(function (m) {
          return '<button class="pill" type="button" data-metal="' + esc(m) + '" aria-pressed="' + (m === sel.metal) + '">' + esc(m) + "</button>";
        }).join("") + "</div></div>"
      : '<div class="opt"><h4>Metal <span>' + esc(p.metals[0]) + "</span></h4></div>";
    opts.innerHTML = sizeBlock + metalBlock;

    $$("#sizes .pill").forEach(function (b) {
      b.addEventListener("click", function () {
        sel.size = b.getAttribute("data-size");
        $$("#sizes .pill").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        $("#size-val").textContent = sel.size;
      });
    });
    $$("#metals .pill").forEach(function (b) {
      b.addEventListener("click", function () {
        sel.metal = b.getAttribute("data-metal");
        $$("#metals .pill").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        $("#metal-val").textContent = sel.metal;
      });
    });

    $("#qty-val").textContent = "1";
    $("#qty-dn").addEventListener("click", function () {
      sel.qty = Math.max(1, sel.qty - 1);
      $("#qty-val").textContent = String(sel.qty);
    });
    $("#qty-up").addEventListener("click", function () {
      sel.qty = Math.min(9, sel.qty + 1);
      $("#qty-val").textContent = String(sel.qty);
    });

    $("#add").addEventListener("click", function () {
      Cart.add(p.id, sel.size, sel.metal, sel.qty);
      toast("<b>" + esc(p.name) + "</b> added, " + sel.qty + " in the bag.");
      openCart(true);
    });

    $("#assure").innerHTML = [
      ["Made by hand", p.made ? "Cut and finished after you order" : "Finished and in the drawer"],
      ["Ships from", "Sheffield, tracked and insured"],
      ["Returns", "30 days on stock pieces"],
      ["Repairs", "Free for the first two years"]
    ].map(function (a) { return "<div><b>" + a[0] + "</b><span>" + a[1] + "</span></div>"; }).join("");

    $("#acc").innerHTML = [
      '<details open><summary>Materials and measurements</summary><div class="body"><dl>'
      + "<dt>Metal</dt><dd>" + esc(p.metal) + "</dd>"
      + "<dt>Stone</dt><dd>" + esc(p.stone) + "</dd>"
      + "<dt>Size</dt><dd>" + esc(p.dims) + "</dd>"
      + "<dt>Weight</dt><dd>" + esc(p.weight) + "</dd>"
      + "<dt>Made</dt><dd>" + (p.made ? "To order, " + esc(p.lead) : esc(p.lead)) + "</dd>"
      + "</dl></div></details>",
      '<details><summary>Care</summary><div class="body"><p>' + esc(p.care) + "</p></div></details>",
      '<details><summary>Shipping and returns</summary><div class="body"><p>Tracked shipping is $8, free over $150. '
      + "Made-to-order pieces leave the bench inside the lead time above, and you get a photo of the finished piece before it goes in the post. "
      + "Stock pieces post the next working day. Returns run 30 days on stock pieces, and made-to-order work is covered for faults and sizing rather than change of mind.</p></div></details>",
      '<details><summary>Sizing</summary><div class="body"><p>Ring sizes run UK letters and US numbers, and the listing uses US. '
      + "A paper sizer ships free on request before you order. Chain lengths are measured end to end including the clasp. "
      + "One free resize inside the first year on any ring.</p></div></details>"
    ].join("");

    var pairs = $("#pairs");
    if (pairs) {
      pairs.innerHTML = p.pairs.map(function (pid) {
        var q = prod(pid);
        return q ? cardHTML(q) : "";
      }).join("");
      wireQuickAdd(pairs);
    }
  }

  function initAbout() {
    var bench = $("#about-art");
    if (bench) bench.insertAdjacentHTML("afterbegin", '<svg viewBox="0 0 400 400" aria-hidden="true"><use href="#i-bench"/></svg>');

    var vals = $("#vals");
    if (vals) {
      var V = [
        ["One bench, one maker", "Nothing gets sent to an outside workshop. If a piece has a flaw, it is mine, and I fix it."],
        ["Recycled metal first", "Sterling and brass come from a recycled-content refiner. Offcuts and filings go back for refining."],
        ["Stones with a paper trail", "Cabochons come from two cutters I have bought from since 2016, both of whom tell me where the rough was mined."],
        ["Repairs over replacement", "Solder joints, clasps, and rivets get fixed free for two years. After that it is materials and postage."]
      ];
      vals.innerHTML = V.map(function (v, i) {
        var c = COLLECTIONS[i % COLLECTIONS.length];
        return '<div class="val" style="--c:' + c.color + '"><h3>' + v[0] + "</h3><p>" + v[1] + "</p></div>";
      }).join("");
    }

    var st = $("#stats");
    if (st) {
      var S = [["2014", "Bench opened"], ["11", "Years at it"], ["4,180", "Pieces finished"], ["2", "Stone cutters"], ["1", "Pair of hands"]];
      st.innerHTML = S.map(function (s, i) {
        var c = COLLECTIONS[i % COLLECTIONS.length];
        return '<div class="stat" style="--c:' + c.color + '"><b>' + s[0] + "</b><span>" + s[1] + "</span></div>";
      }).join("");
    }

    var faq = $("#faq-list");
    if (faq) {
      var F = [
        ["How long does a made-to-order piece take?", "The lead time on each listing is the real bench time, between three days and sixteen. Enamel work takes the longest because each coat has to fire and cool before the next one goes on."],
        ["Can I ask for a piece that is not listed?", "Yes. Commissions start at $250 and begin with a drawing you approve before any metal is cut. Anime commissions are welcome so long as the design is an original motif rather than a copy of a licensed character."],
        ["Do you take licensed anime characters?", "No. The Ink and Enamel pieces use motifs from folklore and from anime visual language, fox masks, star sigils, mecha panel lines, drawn here rather than copied from a series."],
        ["Is the enamel going to chip?", "Kiln-fired vitreous enamel is glass fused to metal, so it will not peel or fade. A hard knock on a stone floor can chip it, and I re-fire chipped pieces for the cost of postage."],
        ["What if the ring does not fit?", "One free resize inside the first year. Send it back and it goes out again inside a week."],
        ["Do you ship outside the UK?", "Yes, tracked and insured worldwide. Customs and import charges are on the buyer."]
      ];
      faq.innerHTML = F.map(function (f, i) {
        return "<details" + (i === 0 ? " open" : "") + "><summary>" + f[0] + '</summary><div class="body"><p>' + f[1] + "</p></div></details>";
      }).join("");
    }
  }

  /* ------------------------------------------------------------------
     10. Boot
     ------------------------------------------------------------------ */

  function boot() {
    document.body.insertAdjacentHTML("afterbegin", SPRITE);

    var hSlot = $("#site-header");
    if (hSlot) hSlot.innerHTML = headerHTML(document.body.getAttribute("data-page"));
    var fSlot = $("#site-footer");
    if (fSlot) fSlot.innerHTML = footerHTML();
    document.body.insertAdjacentHTML("beforeend", drawerHTML());

    var burger = $("#burger");
    if (burger) {
      burger.addEventListener("click", function () {
        var nav = $("#nav");
        var open = nav.getAttribute("data-open") === "1";
        nav.setAttribute("data-open", open ? "0" : "1");
        burger.setAttribute("aria-expanded", open ? "false" : "true");
      });
    }

    $("#cart-open").addEventListener("click", function () { openCart(true); });
    $("#cart-close").addEventListener("click", function () { openCart(false); });
    $("#scrim").addEventListener("click", function () { openCart(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") openCart(false);
    });

    $("#cart-body").addEventListener("click", function (e) {
      var b = e.target.closest("[data-bump]");
      if (b) { Cart.bump(+b.getAttribute("data-bump"), +b.getAttribute("data-d")); return; }
      var r = e.target.closest("[data-rm]");
      if (r) Cart.remove(+r.getAttribute("data-rm"));
    });

    var page = document.body.getAttribute("data-page");
    if (page === "home") initHome();
    if (page === "shop") initShop();
    if (page === "product") initProduct();
    if (page === "about") initAbout();

    paintCart();

    var nf = $("#news-form");
    if (nf) {
      nf.addEventListener("submit", function (e) {
        e.preventDefault();
        toast("Sample site, so <b>nothing is stored</b>. Thanks for testing the form.");
        nf.reset();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.LynnsShop = { PRODUCTS: PRODUCTS, COLLECTIONS: COLLECTIONS, Cart: Cart };
})();
