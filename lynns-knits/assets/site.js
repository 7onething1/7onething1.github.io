/* Lynn's Knits storefront engine
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
      id: "market",
      name: "Market & Tote",
      color: FOX.amber,
      blurb: "Big carriers in cotton and linen. Sized for a full shop, built to take the weight."
    },
    {
      id: "small",
      name: "Small Goods",
      color: FOX.yellow,
      blurb: "Coin purses, pouches, and clutches. The pieces that live inside a bigger bag."
    },
    {
      id: "cable",
      name: "Cable Work",
      color: FOX.teal,
      blurb: "Heavy cable and Aran texture, crossed by hand every fourth round."
    },
    {
      id: "story",
      name: "Stitch & Story",
      color: FOX.red,
      blurb: "Anime-inspired colourwork. Fox faces, star sigils, mecha panel blocks."
    },
    {
      id: "oneoff",
      name: "One of One",
      color: FOX.orange,
      blurb: "Knit from a single hand-dyed skein. When it sells, that colourway is gone."
    }
  ];

  /* ------------------------------------------------------------------
     2. Catalog
     ------------------------------------------------------------------ */

  var PRODUCTS = [
    {
      id: "harvest-tote",
      name: "Harvest Market Tote",
      collection: "market",
      price: 78,
      sprite: "market",
      fibre: "Organic cotton, 8 ply",
      lining: "None, open mesh by design",
      dims: "34 cm wide, 38 cm deep, stretches to 52 cm loaded",
      weight: "180 g empty",
      gauge: "Crocheted mesh, 14 stitches to 10 cm",
      colours: ["Oatmeal", "Moss", "Rust", "Slate"],
      sizes: ["Regular", "Large"],
      lead: "Ships in 2 days",
      made: false,
      rating: 4.8,
      reviews: 214,
      anime: false,
      badge: "Best seller",
      blurb: "Open mesh that folds to a fist and holds a full shop.",
      story: "Worked in a chain-and-picot mesh that opens up under load and springs back empty. Cotton has almost no memory, so the handles keep their length instead of stretching to the knee after a month. It packs down to about the size of a fist. The base is doubled for two rounds, which is where a market bag usually gives out first.",
      care: "Machine wash cool on its own, then pull it back to shape while damp. Cotton takes a tumble dry on low without complaint.",
      pairs: ["linen-day", "bobble-purse", "sakura-tote"]
    },
    {
      id: "linen-day",
      name: "Linen Day Bag",
      collection: "market",
      price: 124,
      sprite: "daybag",
      fibre: "Belgian linen and cotton, 50/50",
      lining: "Waxed cotton canvas, hand-stitched",
      dims: "30 x 26 x 11 cm, strap drops 52 cm",
      weight: "420 g",
      gauge: "Stockinette, 22 stitches to 10 cm",
      colours: ["Flax", "Indigo", "Olive"],
      sizes: ["One size"],
      lead: "10 to 14 days",
      made: true,
      rating: 4.9,
      reviews: 88,
      anime: false,
      badge: null,
      blurb: "A boxy knit body on a stitched canvas lining.",
      story: "Linen knits stiff and softens for years, which suits a bag better than it suits a jumper. The body is worked flat in four panels, seamed with mattress stitch so the joins disappear, then blocked square over a board. Inside is waxed canvas cut to the panel and stitched in by hand, with one patch pocket. The strap is a doubled i-cord that takes the load without digging in.",
      care: "Hand wash cool, roll in a towel, dry flat and square. Linen creases and that is the material behaving normally.",
      pairs: ["harvest-tote", "aran-shoulder", "halfmoon-clutch"]
    },
    {
      id: "sakura-tote",
      name: "Sakura Colourwork Tote",
      collection: "market",
      price: 96,
      sprite: "sakura",
      fibre: "Merino and cotton blend, DK weight",
      lining: "Cotton twill, machine-stitched",
      dims: "28 x 32 x 9 cm, shoulder handles drop 24 cm",
      weight: "310 g",
      gauge: "Stranded colourwork, 24 stitches to 10 cm",
      colours: ["Cream and blush", "Charcoal and blush"],
      sizes: ["One size"],
      lead: "12 to 16 days",
      made: true,
      rating: 4.8,
      reviews: 132,
      anime: true,
      badge: "Anime-inspired",
      blurb: "A blossom band worked in two-colour stranded knitting.",
      story: "The blossom band runs right round the bag in stranded colourwork, two colours per round and never more, so the floats stay short and the fabric keeps its stretch. I charted the five-petal repeat myself over eleven stitches. Colourwork pulls in tighter than plain knitting, so the body is worked on a larger needle above and below the band to keep the sides straight.",
      care: "Hand wash cool with wool soap, no wringing. Block flat and the colourwork will even out on the first wash.",
      pairs: ["kitsune-purse", "star-pouch", "harvest-tote"]
    },
    {
      id: "bobble-purse",
      name: "Bobble Coin Purse",
      collection: "small",
      price: 34,
      sprite: "coin",
      fibre: "Merino wool, DK weight",
      lining: "Cotton, machine-stitched",
      dims: "11 x 9 cm",
      weight: "45 g",
      gauge: "Bobble texture, 24 stitches to 10 cm",
      colours: ["Mustard", "Teal", "Rust", "Cream"],
      sizes: ["One size"],
      lead: "Ships in 2 days",
      made: false,
      rating: 4.7,
      reviews: 268,
      anime: false,
      badge: "Ships in 2 days",
      blurb: "Seven bobbles, a lined body, and a hand-set brass zip.",
      story: "The cheapest thing in the shop and the one that sells out first. Seven five-stitch bobbles across a plain ground, lined in cotton so coins do not push through the fabric, and finished with a brass zip sewn in by hand. Machine-set zips pucker on knitting, which is why this one takes twenty minutes.",
      care: "Hand wash cool, press the water out with a towel, dry flat. The bobbles fluff back up as it dries.",
      pairs: ["halfmoon-clutch", "star-pouch", "harvest-tote"]
    },
    {
      id: "halfmoon-clutch",
      name: "Half-Moon Clutch",
      collection: "small",
      price: 68,
      sprite: "clutch",
      fibre: "Baby alpaca, sport weight",
      lining: "Silk-cotton, hand-stitched",
      dims: "24 cm across, 14 cm at the deepest point",
      weight: "120 g",
      gauge: "Seed stitch, 26 stitches to 10 cm",
      colours: ["Fog", "Plum", "Camel"],
      sizes: ["One size"],
      lead: "7 to 10 days",
      made: true,
      rating: 4.9,
      reviews: 76,
      anime: false,
      badge: null,
      blurb: "Seed stitch in alpaca on a turned beech clasp frame.",
      story: "Alpaca has a halo and no bounce, so it wants a shape that hangs rather than one that stands up. A half-moon does that. Worked in seed stitch for a dense fabric that will not sag, then sewn into a turned beech clasp frame. The frame comes from a woodturner two streets over, and each one is a slightly different shade of beech.",
      care: "Hand wash cool, dry flat away from a radiator. Alpaca sheds a little for the first fortnight, which then stops.",
      pairs: ["bobble-purse", "linen-day", "sunset-hobo"]
    },
    {
      id: "aran-shoulder",
      name: "Aran Cable Shoulder Bag",
      collection: "cable",
      price: 148,
      sprite: "cable",
      fibre: "Peruvian highland wool, aran weight",
      lining: "Cotton canvas, hand-stitched",
      dims: "32 x 28 x 12 cm, wooden handles 15 cm",
      weight: "520 g",
      gauge: "Cable panel, 18 stitches to 10 cm",
      colours: ["Undyed cream", "Heather grey", "Forest"],
      sizes: ["One size"],
      lead: "14 to 18 days",
      made: true,
      rating: 5,
      reviews: 61,
      anime: false,
      badge: "Studio favourite",
      blurb: "A six-strand cable braid on turned beech handles.",
      story: "A six-strand braid crossed by hand every fourth round, forty-two crossings per side. Cable pulls the fabric in hard, so the panel is cast on a third wider than the finished width and blocked out to size. The wool is undyed highland from a Cumbrian mill, which still holds enough lanolin to shrug off rain. Handles are turned beech, screwed rather than glued so they can be replaced.",
      care: "Hand wash cool with wool soap and block the cables out flat. Never hang it wet, since the weight will pull the panel long.",
      pairs: ["fisherman-bucket", "linen-day", "mecha-crossbody"]
    },
    {
      id: "fisherman-bucket",
      name: "Fisherman Bucket Bag",
      collection: "cable",
      price: 132,
      sprite: "bucket",
      fibre: "Undyed Shetland wool, worsted weight",
      lining: "Cotton drill, machine-stitched",
      dims: "24 cm across the base, 30 cm tall",
      weight: "460 g",
      gauge: "Honeycomb and 2x2 rib, 20 stitches to 10 cm",
      colours: ["Natural", "Peat", "Oat"],
      sizes: ["One size"],
      lead: "12 to 16 days",
      made: true,
      rating: 4.8,
      reviews: 54,
      anime: false,
      badge: null,
      blurb: "Honeycomb stitch, a rib collar, and a leather drawstring.",
      story: "Worked in the round from a doubled base, so there is no side seam to give out. The body is honeycomb stitch, which is dense enough to hold the bucket shape without a stiffener, and the collar is 2x2 rib that grips the drawstring shut. The cord is vegetable-tanned leather from an offcut bundle, so the colour varies between bags.",
      care: "Hand wash cool, stuff it with a towel while it dries so the bucket keeps its shape. Take the leather cord out first.",
      pairs: ["aran-shoulder", "harvest-tote", "sunset-hobo"]
    },
    {
      id: "kitsune-purse",
      name: "Kitsune Colourwork Purse",
      collection: "story",
      price: 92,
      sprite: "kitsune",
      fibre: "Merino wool, DK weight",
      lining: "Cotton, hand-stitched",
      dims: "20 x 17 cm, wrist strap 18 cm",
      weight: "140 g",
      gauge: "Stranded colourwork, 24 stitches to 10 cm",
      colours: ["Cream and vermilion", "Black and vermilion"],
      sizes: ["One size"],
      lead: "10 to 14 days",
      made: true,
      rating: 4.9,
      reviews: 341,
      anime: true,
      badge: "Anime-inspired",
      blurb: "A festival fox face charted over 44 stitches.",
      story: "The fox mask is charted over 44 stitches and 52 rounds, which is enough resolution for the eye slits to read as slits rather than as blobs. Two colours per round, floats caught every fifth stitch. The vermilion is a small-batch dye that I buy four skeins at a time. Lined in cotton and closed with a hidden magnetic snap, so the front stays flat and nothing interrupts the chart.",
      care: "Hand wash cool with wool soap and block flat. Colourwork always looks uneven off the needles and evens out in the first block.",
      pairs: ["star-pouch", "chibi-bag", "sakura-tote"]
    },
    {
      id: "star-pouch",
      name: "Star Sigil Drawstring Pouch",
      collection: "story",
      price: 58,
      sprite: "pouch",
      fibre: "Merino and nylon, 4 ply",
      lining: "None, tight gauge",
      dims: "16 x 20 cm, cord adjusts to 40 cm",
      weight: "85 g",
      gauge: "Intarsia, 28 stitches to 10 cm",
      colours: ["Midnight and gold", "Cream and gold"],
      sizes: ["One size"],
      lead: "7 to 10 days",
      made: true,
      rating: 4.8,
      reviews: 187,
      anime: true,
      badge: null,
      blurb: "A single intarsia star on a knitted i-cord drawstring.",
      story: "One big star worked in intarsia rather than stranded, so there is no float behind it and the pouch stays soft enough to roll. Intarsia over a knitted round means twisting the yarns at every colour change by hand, twelve changes a round. The nylon in the blend is what stops the base going baggy once there is anything in it. The cord is a four-stitch i-cord, about a metre of knitting for 40 cm of finished cord.",
      care: "Hand wash cool, dry flat. Sock-weight merino nylon takes a lot of handling before it pills.",
      pairs: ["kitsune-purse", "bobble-purse", "chibi-bag"]
    },
    {
      id: "mecha-crossbody",
      name: "Mecha Panel Crossbody",
      collection: "story",
      price: 138,
      sprite: "mecha",
      fibre: "Merino wool, DK weight",
      lining: "Cotton canvas, hand-stitched",
      dims: "26 x 19 x 8 cm, webbing strap adjusts 70 to 120 cm",
      weight: "380 g",
      gauge: "Modular colourblock, 24 stitches to 10 cm",
      colours: ["Slate, bone and vermilion", "Charcoal, bone and teal"],
      sizes: ["One size"],
      lead: "14 to 18 days",
      made: true,
      rating: 4.9,
      reviews: 149,
      anime: true,
      badge: "Modular panels",
      blurb: "Seven knitted panels seamed into mecha plate lines.",
      story: "Seven panels knitted separately and seamed so the joins read as plate lines rather than as mistakes. Each panel is picked up from the edge of the last one, which means no sewn seam sits under load. The strap is cotton webbing on a ladder-lock, and the flap closes on a hidden snap under a knitted tab. Getting the panel angles to meet cleanly at the corners took four samples.",
      care: "Hand wash cool with wool soap, block flat with the panels squared. Spot clean the webbing separately.",
      pairs: ["aran-shoulder", "kitsune-purse", "chibi-bag"]
    },
    {
      id: "chibi-bag",
      name: "Chibi Cat Bobble Bag",
      collection: "story",
      price: 86,
      sprite: "cat",
      fibre: "Cotton and merino blend, DK weight",
      lining: "Cotton, machine-stitched",
      dims: "22 x 18 x 7 cm, shoulder strap drops 30 cm",
      weight: "210 g",
      gauge: "Duplicate stitch on stockinette, 24 stitches to 10 cm",
      colours: ["Cream", "Charcoal", "Ginger"],
      sizes: ["One size"],
      lead: "10 to 14 days",
      made: true,
      rating: 4.7,
      reviews: 226,
      anime: true,
      badge: null,
      blurb: "Three cat faces, six knitted ears, and a bobble border.",
      story: "Three faces worked in duplicate stitch over a plain stockinette ground, which lets the features sit right without any floats behind them. The ears are knitted separately as small triangles and sewn on, so they stand up instead of lying flat. Each face gets a different expression. The bobble border round the top edge is eight bobbles and takes about as long as one of the faces.",
      care: "Hand wash cool, dry flat, and give the bobbles a squeeze as they dry. The cotton in the blend keeps the faces from stretching out.",
      pairs: ["kitsune-purse", "star-pouch", "bobble-purse"]
    },
    {
      id: "sunset-hobo",
      name: "Hand-Dyed Sunset Hobo",
      collection: "oneoff",
      price: 265,
      sprite: "hobo",
      fibre: "Hand-dyed BFL wool, single 400 g skein",
      lining: "Silk-cotton, hand-stitched",
      dims: "38 x 30 cm slouched, strap drops 28 cm",
      weight: "410 g",
      gauge: "Stockinette with short rows, 22 stitches to 10 cm",
      colours: ["This skein only"],
      sizes: ["One size"],
      lead: "Ships in 2 days",
      made: false,
      oneOf: true,
      rating: 5,
      reviews: 7,
      anime: false,
      badge: "One of one",
      blurb: "One dyer, one skein, one bag. There is no second.",
      story: "A 400 g skein of Bluefaced Leicester dyed in a long gradient by a dyer in Todmorden, worked so the gradient runs base to rim without a single break. A gradient skein cannot be re-ordered, so this bag exists once. Short rows shape the slouch into the body rather than relying on the weight of the yarn to do it later. Lined in silk-cotton by hand, because a bag at this price should not have a machine seam inside it.",
      care: "Hand wash cool with wool soap on its own, since hand-dyed yarn can release a little colour on the first wash. Dry flat.",
      pairs: ["halfmoon-clutch", "aran-shoulder", "fisherman-bucket"]
    }
  ];

  /* ------------------------------------------------------------------
     3. SVG sprite
     Knit texture comes from reusable patterns, so every bag reads as
     knitted fabric rather than as a flat vector shape.
     ------------------------------------------------------------------ */

  var SPRITE = [
    '<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true" focusable="false">',
    "<defs>",
    '<pattern id="kn-st" width="15" height="13" patternUnits="userSpaceOnUse">',
    '<path d="M1.5 12L7.5 3L13.5 12" fill="none" stroke="#16110C" stroke-width="1.5" opacity=".2"/>',
    "</pattern>",
    '<pattern id="kn-rib" width="14" height="10" patternUnits="userSpaceOnUse">',
    '<path d="M4 0v10M10 0v10" stroke="#16110C" stroke-width="1.8" opacity=".18"/>',
    "</pattern>",
    '<pattern id="kn-seed" width="14" height="14" patternUnits="userSpaceOnUse">',
    '<path d="M2 3h4M9 10h4" stroke="#16110C" stroke-width="2.2" opacity=".2" stroke-linecap="round"/>',
    "</pattern>",
    '<pattern id="kn-hc" width="22" height="20" patternUnits="userSpaceOnUse">',
    '<path d="M0 4c5 0 6 12 11 12s6-12 11-12" fill="none" stroke="#16110C" stroke-width="1.7" opacity=".22"/>',
    "</pattern>",
    '<pattern id="kn-mesh" width="24" height="24" patternUnits="userSpaceOnUse">',
    '<path d="M12 0L24 12L12 24L0 12Z" fill="none" stroke="#16110C" stroke-width="2.1" opacity=".5"/>',
    "</pattern>",
    "</defs>",

    /* ---- market mesh tote ---- */
    '<symbol id="p-market" viewBox="0 0 400 400">',
    '<g fill="none" stroke="#16110C" stroke-width="7" stroke-linecap="round">',
    '<path d="M122 176V112a34 34 0 0 1 68 0v64"/>',
    '<path d="M210 176V112a34 34 0 0 1 68 0v64"/>',
    "</g>",
    '<path d="M96 176h208l-16 158a22 22 0 0 1-22 20H134a22 22 0 0 1-22-20z" fill="#DD8D29" stroke="#16110C" stroke-width="3.4" stroke-linejoin="round"/>',
    '<path d="M96 176h208l-16 158a22 22 0 0 1-22 20H134a22 22 0 0 1-22-20z" fill="url(#kn-mesh)" stroke="none"/>',
    '<path d="M96 176h208l-4 34H100z" fill="#B40F20" stroke="#16110C" stroke-width="3.2" stroke-linejoin="round"/>',
    '<path d="M96 176h208l-4 34H100z" fill="url(#kn-rib)" stroke="none"/>',
    '<path d="M112 318h176" stroke="#16110C" stroke-width="3" opacity=".4" fill="none"/>',
    "</symbol>",

    /* ---- linen day bag ---- */
    '<symbol id="p-daybag" viewBox="0 0 400 400">',
    '<path d="M122 186c-6-72 32-108 78-108s84 36 78 108" fill="none" stroke="#16110C" stroke-width="10" stroke-linecap="round"/>',
    '<path d="M122 186c-6-72 32-108 78-108s84 36 78 108" fill="none" stroke="#6B5F51" stroke-width="3" stroke-linecap="round" opacity=".5"/>',
    '<rect x="98" y="182" width="204" height="164" rx="12" fill="#46ACC8" stroke="#16110C" stroke-width="3.4"/>',
    '<rect x="98" y="182" width="204" height="164" rx="12" fill="url(#kn-st)" stroke="none"/>',
    '<path d="M98 194a12 12 0 0 1 12-12h180a12 12 0 0 1 12 12v34H98z" fill="#F4EDE1" stroke="#16110C" stroke-width="3.2"/>',
    '<path d="M98 194a12 12 0 0 1 12-12h180a12 12 0 0 1 12 12v34H98z" fill="url(#kn-rib)" stroke="none"/>',
    '<rect x="158" y="250" width="84" height="58" rx="6" fill="#FBF7F0" stroke="#16110C" stroke-width="3"/>',
    '<rect x="158" y="250" width="84" height="58" rx="6" fill="url(#kn-seed)" stroke="none"/>',
    '<circle cx="200" cy="232" r="9" fill="#DD8D29" stroke="#16110C" stroke-width="2.6"/>',
    "</symbol>",

    /* ---- sakura colourwork tote ---- */
    '<symbol id="p-sakura" viewBox="0 0 400 400">',
    '<g fill="none" stroke="#16110C" stroke-width="8" stroke-linecap="round">',
    '<path d="M128 174v-30a26 26 0 0 1 52 0v30"/>',
    '<path d="M220 174v-30a26 26 0 0 1 52 0v30"/>',
    "</g>",
    '<path d="M104 174h192v152a20 20 0 0 1-20 20H124a20 20 0 0 1-20-20z" fill="#F4EDE1" stroke="#16110C" stroke-width="3.4" stroke-linejoin="round"/>',
    '<path d="M104 174h192v152a20 20 0 0 1-20 20H124a20 20 0 0 1-20-20z" fill="url(#kn-st)" stroke="none"/>',
    '<path d="M104 236h192v72H104z" fill="#E58601" stroke="none" opacity=".26"/>',
    '<g stroke="#16110C" stroke-width="2" opacity=".55" fill="none"><path d="M104 236h192M104 308h192"/></g>',
    '<g stroke="#16110C" stroke-width="2.2" stroke-linejoin="round">',
    '<g transform="translate(148 272)"><g fill="#B40F20">',
    '<path d="M0-21c7 0 11 6 9 12-2 6-6 8-9 8s-7-2-9-8c-2-6 2-12 9-12z"/>',
    '<path d="M0-21c7 0 11 6 9 12-2 6-6 8-9 8s-7-2-9-8c-2-6 2-12 9-12z" transform="rotate(72)"/>',
    '<path d="M0-21c7 0 11 6 9 12-2 6-6 8-9 8s-7-2-9-8c-2-6 2-12 9-12z" transform="rotate(144)"/>',
    '<path d="M0-21c7 0 11 6 9 12-2 6-6 8-9 8s-7-2-9-8c-2-6 2-12 9-12z" transform="rotate(216)"/>',
    '<path d="M0-21c7 0 11 6 9 12-2 6-6 8-9 8s-7-2-9-8c-2-6 2-12 9-12z" transform="rotate(288)"/>',
    '</g><circle r="6" fill="#E2D200"/></g>',
    '<g transform="translate(200 272) scale(1.18)"><g fill="#B40F20">',
    '<path d="M0-21c7 0 11 6 9 12-2 6-6 8-9 8s-7-2-9-8c-2-6 2-12 9-12z"/>',
    '<path d="M0-21c7 0 11 6 9 12-2 6-6 8-9 8s-7-2-9-8c-2-6 2-12 9-12z" transform="rotate(72)"/>',
    '<path d="M0-21c7 0 11 6 9 12-2 6-6 8-9 8s-7-2-9-8c-2-6 2-12 9-12z" transform="rotate(144)"/>',
    '<path d="M0-21c7 0 11 6 9 12-2 6-6 8-9 8s-7-2-9-8c-2-6 2-12 9-12z" transform="rotate(216)"/>',
    '<path d="M0-21c7 0 11 6 9 12-2 6-6 8-9 8s-7-2-9-8c-2-6 2-12 9-12z" transform="rotate(288)"/>',
    '</g><circle r="6" fill="#E2D200"/></g>',
    '<g transform="translate(252 272)"><g fill="#B40F20">',
    '<path d="M0-21c7 0 11 6 9 12-2 6-6 8-9 8s-7-2-9-8c-2-6 2-12 9-12z"/>',
    '<path d="M0-21c7 0 11 6 9 12-2 6-6 8-9 8s-7-2-9-8c-2-6 2-12 9-12z" transform="rotate(72)"/>',
    '<path d="M0-21c7 0 11 6 9 12-2 6-6 8-9 8s-7-2-9-8c-2-6 2-12 9-12z" transform="rotate(144)"/>',
    '<path d="M0-21c7 0 11 6 9 12-2 6-6 8-9 8s-7-2-9-8c-2-6 2-12 9-12z" transform="rotate(216)"/>',
    '<path d="M0-21c7 0 11 6 9 12-2 6-6 8-9 8s-7-2-9-8c-2-6 2-12 9-12z" transform="rotate(288)"/>',
    '</g><circle r="6" fill="#E2D200"/></g>',
    "</g>",
    "</symbol>",

    /* ---- bobble coin purse ---- */
    '<symbol id="p-coin" viewBox="0 0 400 400">',
    '<rect x="86" y="140" width="228" height="148" rx="30" fill="#E2D200" stroke="#16110C" stroke-width="3.6"/>',
    '<rect x="86" y="140" width="228" height="148" rx="30" fill="url(#kn-st)" stroke="none"/>',
    '<g fill="#DD8D29" stroke="#16110C" stroke-width="2.8">',
    '<circle cx="132" cy="202" r="17"/><circle cx="178" cy="202" r="17"/><circle cx="224" cy="202" r="17"/><circle cx="270" cy="202" r="17"/>',
    '<circle cx="155" cy="246" r="17"/><circle cx="201" cy="246" r="17"/><circle cx="247" cy="246" r="17"/>',
    "</g>",
    '<g fill="none" stroke="#16110C" stroke-width="1.6" opacity=".38">',
    '<path d="M126 196q6-6 12 0M172 196q6-6 12 0M218 196q6-6 12 0M264 196q6-6 12 0"/>',
    "</g>",
    '<path d="M86 156h228" stroke="#16110C" stroke-width="3" fill="none"/>',
    '<g stroke="#6B5F51" stroke-width="3.4" stroke-linecap="round">',
    '<path d="M102 150v12M118 150v12M134 150v12M150 150v12M166 150v12M182 150v12M198 150v12M214 150v12M230 150v12M246 150v12M262 150v12M278 150v12"/>',
    "</g>",
    '<rect x="288" y="144" width="26" height="24" rx="6" fill="#B40F20" stroke="#16110C" stroke-width="2.8"/>',
    '<path d="M301 168v22" stroke="#16110C" stroke-width="3.4" stroke-linecap="round"/>',
    "</symbol>",

    /* ---- half-moon clutch ---- */
    '<symbol id="p-clutch" viewBox="0 0 400 400">',
    '<path d="M74 172h252c0 92-56 148-126 148S74 264 74 172z" fill="#46ACC8" stroke="#16110C" stroke-width="3.6" stroke-linejoin="round"/>',
    '<path d="M74 172h252c0 92-56 148-126 148S74 264 74 172z" fill="url(#kn-seed)" stroke="none"/>',
    '<g fill="none" stroke="#16110C" stroke-width="2" opacity=".3">',
    '<path d="M108 172c0 66 38 112 92 112"/><path d="M292 172c0 66-38 112-92 112"/>',
    "</g>",
    '<rect x="64" y="150" width="272" height="26" rx="13" fill="#DD8D29" stroke="#16110C" stroke-width="3.4"/>',
    '<g fill="none" stroke="#16110C" stroke-width="1.8" opacity=".38"><path d="M86 156v14M122 156v14M278 156v14M314 156v14"/></g>',
    '<circle cx="200" cy="163" r="15" fill="#E2D200" stroke="#16110C" stroke-width="3"/>',
    '<circle cx="200" cy="163" r="6" fill="#16110C" opacity=".5"/>',
    "</symbol>",

    /* ---- aran cable shoulder bag ---- */
    '<symbol id="p-cable" viewBox="0 0 400 400">',
    /* two rigid turned-beech handles */
    '<g fill="none" stroke-linecap="round">',
    '<path d="M126 176C126 128 190 128 190 176" stroke="#16110C" stroke-width="15"/>',
    '<path d="M126 176C126 128 190 128 190 176" stroke="#DD8D29" stroke-width="10"/>',
    '<path d="M210 176C210 128 274 128 274 176" stroke="#16110C" stroke-width="15"/>',
    '<path d="M210 176C210 128 274 128 274 176" stroke="#DD8D29" stroke-width="10"/>',
    "</g>",
    '<rect x="94" y="172" width="212" height="170" rx="16" fill="#F4EDE1" stroke="#16110C" stroke-width="3.6"/>',
    '<rect x="94" y="172" width="212" height="170" rx="16" fill="url(#kn-st)" stroke="none"/>',
    /* three cable columns: under-strand, then a cream casing so the
       over-strand visibly crosses on top, which is what reads as a cable */
    '<g fill="none" stroke-linecap="round">',
    '<path d="M149 196C149 213 125 213 125 230C125 247 149 247 149 264C149 281 125 281 125 298C125 315 149 315 149 332" stroke="#16110C" stroke-width="9"/>',
    '<path d="M125 196C125 213 149 213 149 230C149 247 125 247 125 264C125 281 149 281 149 298C149 315 125 315 125 332" stroke="#F4EDE1" stroke-width="16"/>',
    '<path d="M125 196C125 213 149 213 149 230C149 247 125 247 125 264C125 281 149 281 149 298C149 315 125 315 125 332" stroke="#16110C" stroke-width="9"/>',
    '<path d="M212 196C212 213 188 213 188 230C188 247 212 247 212 264C212 281 188 281 188 298C188 315 212 315 212 332" stroke="#16110C" stroke-width="9"/>',
    '<path d="M188 196C188 213 212 213 212 230C212 247 188 247 188 264C188 281 212 281 212 298C212 315 188 315 188 332" stroke="#F4EDE1" stroke-width="16"/>',
    '<path d="M188 196C188 213 212 213 212 230C212 247 188 247 188 264C188 281 212 281 212 298C212 315 188 315 188 332" stroke="#16110C" stroke-width="9"/>',
    '<path d="M275 196C275 213 251 213 251 230C251 247 275 247 275 264C275 281 251 281 251 298C251 315 275 315 275 332" stroke="#16110C" stroke-width="9"/>',
    '<path d="M251 196C251 213 275 213 275 230C275 247 251 247 251 264C251 281 275 281 275 298C275 315 251 315 251 332" stroke="#F4EDE1" stroke-width="16"/>',
    '<path d="M251 196C251 213 275 213 275 230C275 247 251 247 251 264C251 281 275 281 275 298C275 315 251 315 251 332" stroke="#16110C" stroke-width="9"/>',
    "</g>",
    '<rect x="94" y="172" width="212" height="170" rx="16" fill="none" stroke="#16110C" stroke-width="3.6"/>',
    "</symbol>",

    /* ---- fisherman bucket bag ---- */
    '<symbol id="p-bucket" viewBox="0 0 400 400">',
    '<path d="M116 158h168l-16 172a20 20 0 0 1-20 18H152a20 20 0 0 1-20-18z" fill="#E58601" stroke="#16110C" stroke-width="3.6" stroke-linejoin="round"/>',
    '<path d="M116 158h168l-16 172a20 20 0 0 1-20 18H152a20 20 0 0 1-20-18z" fill="url(#kn-hc)" stroke="none"/>',
    '<path d="M112 136h176v42H112z" fill="#F4EDE1" stroke="#16110C" stroke-width="3.4"/>',
    '<path d="M112 136h176v42H112z" fill="url(#kn-rib)" stroke="none"/>',
    '<path d="M92 152c22 18 62 26 108 26s86-8 108-26" fill="none" stroke="#6B5F51" stroke-width="6" stroke-linecap="round"/>',
    '<g fill="#3A3128" stroke="#16110C" stroke-width="2.4"><circle cx="92" cy="152" r="10"/><circle cx="308" cy="152" r="10"/></g>',
    '<g fill="#FBF7F0" stroke="#16110C" stroke-width="2.4">',
    '<circle cx="148" cy="150" r="7"/><circle cx="200" cy="154" r="7"/><circle cx="252" cy="150" r="7"/>',
    "</g>",
    "</symbol>",

    /* ---- kitsune colourwork purse ---- */
    '<symbol id="p-kitsune" viewBox="0 0 400 400">',
    '<path d="M158 104a44 30 0 0 1 84 0" fill="none" stroke="#16110C" stroke-width="7" stroke-linecap="round"/>',
    '<rect x="90" y="130" width="220" height="196" rx="22" fill="#FBF7F0" stroke="#16110C" stroke-width="3.6"/>',
    '<rect x="90" y="130" width="220" height="196" rx="22" fill="url(#kn-st)" stroke="none"/>',
    '<path d="M126 172l22-32 22 32z" fill="#B40F20" stroke="#16110C" stroke-width="3" stroke-linejoin="round"/>',
    '<path d="M230 172l22-32 22 32z" fill="#B40F20" stroke="#16110C" stroke-width="3" stroke-linejoin="round"/>',
    '<path d="M200 160c40 0 66 22 66 54 0 38-30 72-66 72s-66-34-66-72c0-32 26-54 66-54z" fill="#FBF7F0" stroke="#16110C" stroke-width="3.4" stroke-linejoin="round"/>',
    '<path d="M200 160c40 0 66 22 66 54 0 38-30 72-66 72s-66-34-66-72c0-32 26-54 66-54z" fill="url(#kn-st)" stroke="none"/>',
    '<path d="M154 204c14-10 30-10 40 0-10 10-26 10-40 0z" fill="#16110C"/>',
    '<path d="M246 204c-14-10-30-10-40 0 10 10 26 10 40 0z" fill="#16110C"/>',
    '<path d="M200 238c11 0 16 7 16 15s-7 13-16 13-16-5-16-13 5-15 16-15z" fill="#B40F20" stroke="#16110C" stroke-width="2.6"/>',
    '<g stroke="#B40F20" stroke-width="5.4" stroke-linecap="round">',
    '<path d="M144 242l22 10"/><path d="M256 242l-22 10"/><path d="M154 270l20 6"/><path d="M246 270l-20 6"/>',
    "</g>",
    '<circle cx="200" cy="182" r="7" fill="#B40F20"/>',
    "</symbol>",

    /* ---- star sigil drawstring pouch ---- */
    '<symbol id="p-pouch" viewBox="0 0 400 400">',
    '<path d="M116 172h168l-14 148a22 22 0 0 1-22 20H152a22 22 0 0 1-22-20z" fill="#3A3128" stroke="#16110C" stroke-width="3.6" stroke-linejoin="round"/>',
    '<path d="M116 172h168l-14 148a22 22 0 0 1-22 20H152a22 22 0 0 1-22-20z" fill="url(#kn-st)" stroke="none"/>',
    '<path d="M200 204l17 40 43 4-33 29 10 43-37-22-37 22 10-43-33-29 43-4z" fill="#E2D200" stroke="#16110C" stroke-width="3" stroke-linejoin="round"/>',
    '<path d="M200 204l17 40 43 4-33 29 10 43-37-22-37 22 10-43-33-29 43-4z" fill="url(#kn-st)" stroke="none"/>',
    '<path d="M116 172c24 14 52 20 84 20s60-6 84-20z" fill="#F4EDE1" stroke="#16110C" stroke-width="3.4"/>',
    '<path d="M78 152c30 22 76 32 122 32s92-10 122-32" fill="none" stroke="#DD8D29" stroke-width="7" stroke-linecap="round"/>',
    '<g fill="#DD8D29" stroke="#16110C" stroke-width="2.6"><circle cx="78" cy="152" r="11"/><circle cx="322" cy="152" r="11"/></g>',
    "</symbol>",

    /* ---- mecha panel crossbody ---- */
    '<symbol id="p-mecha" viewBox="0 0 400 400">',
    '<path d="M104 208c-22-56 4-108 44-116" fill="none" stroke="#6B5F51" stroke-width="11" stroke-linecap="round"/>',
    '<path d="M296 208c22-56-4-108-44-116" fill="none" stroke="#6B5F51" stroke-width="11" stroke-linecap="round"/>',
    '<rect x="96" y="200" width="208" height="152" rx="10" fill="#46ACC8" stroke="#16110C" stroke-width="3.6"/>',
    '<rect x="96" y="200" width="208" height="152" rx="10" fill="url(#kn-st)" stroke="none"/>',
    '<path d="M166 200h68v58h-68z" fill="#F4EDE1" stroke="none"/>',
    '<path d="M166 200h68v58h-68z" fill="url(#kn-st)" stroke="none"/>',
    '<path d="M140 258h60v50h-60z" fill="#B40F20" stroke="none"/>',
    '<path d="M140 258h60v50h-60z" fill="url(#kn-st)" stroke="none"/>',
    '<g stroke="#16110C" stroke-width="3" fill="none">',
    '<path d="M96 258h208"/><path d="M96 308h208"/><path d="M166 200v58"/><path d="M234 200v58"/><path d="M140 258v50"/><path d="M260 258v50"/><path d="M200 308v44"/>',
    "</g>",
    '<path d="M96 178a10 10 0 0 1 10-10h188a10 10 0 0 1 10 10v22H96z" fill="#3A3128" stroke="#16110C" stroke-width="3.4"/>',
    '<path d="M96 178a10 10 0 0 1 10-10h188a10 10 0 0 1 10 10v22H96z" fill="url(#kn-rib)" stroke="none"/>',
    '<rect x="182" y="192" width="36" height="26" rx="6" fill="#E2D200" stroke="#16110C" stroke-width="3"/>',
    "</symbol>",

    /* ---- chibi cat bobble bag ---- */
    '<symbol id="p-cat" viewBox="0 0 400 400">',
    '<path d="M132 152a68 44 0 0 1 136 0" fill="none" stroke="#16110C" stroke-width="8" stroke-linecap="round"/>',
    '<rect x="88" y="162" width="224" height="184" rx="18" fill="#F4EDE1" stroke="#16110C" stroke-width="3.6"/>',
    '<rect x="88" y="162" width="224" height="184" rx="18" fill="url(#kn-st)" stroke="none"/>',
    '<g fill="#DD8D29" stroke="#16110C" stroke-width="2.4">',
    '<circle cx="112" cy="178" r="11"/><circle cx="140" cy="178" r="11"/><circle cx="168" cy="178" r="11"/><circle cx="196" cy="178" r="11"/>',
    '<circle cx="224" cy="178" r="11"/><circle cx="252" cy="178" r="11"/><circle cx="280" cy="178" r="11"/>',
    "</g>",
    '<g stroke="#16110C" stroke-width="3" stroke-linejoin="round">',
    '<path d="M136 246l-16-16 2 22zM136 246l16-16-2 22z" fill="#FBF7F0"/>',
    '<circle cx="136" cy="272" r="27" fill="#FBF7F0"/>',
    '<path d="M200 262l-16-16 2 22zM200 262l16-16-2 22z" fill="#16110C"/>',
    '<circle cx="200" cy="288" r="27" fill="#3A3128"/>',
    '<path d="M264 246l-16-16 2 22zM264 246l16-16-2 22z" fill="#DD8D29"/>',
    '<circle cx="264" cy="272" r="27" fill="#DD8D29"/>',
    "</g>",
    '<g fill="#16110C"><circle cx="126" cy="266" r="4"/><circle cx="146" cy="266" r="4"/><circle cx="254" cy="266" r="4"/><circle cx="274" cy="266" r="4"/></g>',
    '<g fill="#FBF7F0"><circle cx="190" cy="282" r="4"/><circle cx="210" cy="282" r="4"/></g>',
    '<g fill="none" stroke="#16110C" stroke-width="2" stroke-linecap="round">',
    '<path d="M131 282q5 6 10 0"/><path d="M259 282q5 6 10 0"/><path d="M105 272h-9M167 272h9"/><path d="M233 272h-9M295 272h9"/>',
    "</g>",
    '<g fill="none" stroke="#FBF7F0" stroke-width="2" stroke-linecap="round"><path d="M195 298q5 6 10 0"/></g>',
    "</symbol>",

    /* ---- hand-dyed sunset hobo ---- */
    '<symbol id="p-hobo" viewBox="0 0 400 400">',
    '<path d="M130 180a70 46 0 0 1 140 0" fill="none" stroke="#16110C" stroke-width="12" stroke-linecap="round"/>',
    '<g stroke="none">',
    '<path d="M92 182h216c1 8 2 16 2 24H90c0-8 1-16 2-24z" fill="#E2D200"/>',
    '<path d="M90 206h220c0 14-1 27-3 40H93c-2-13-3-26-3-40z" fill="#DD8D29"/>',
    '<path d="M93 246h214c-2 15-6 30-11 43H104c-5-13-9-28-11-43z" fill="#E58601"/>',
    '<path d="M104 289h192c-6 16-15 31-27 41H131c-12-10-21-25-27-41z" fill="#B40F20"/>',
    '<path d="M131 330h138c-15 12-33 18-69 18s-54-6-69-18z" fill="#7A0A16"/>',
    "</g>",
    '<path d="M92 182h216c10 74-30 158-108 158S82 256 92 182z" fill="url(#kn-st)" stroke="none"/>',
    '<path d="M92 182h216c10 74-30 158-108 158S82 256 92 182z" fill="none" stroke="#16110C" stroke-width="3.6"/>',
    '<g fill="none" stroke="#16110C" stroke-width="2.4" opacity=".34">',
    '<path d="M126 200c-6 46 6 88 34 112"/><path d="M274 200c6 46-6 88-34 112"/>',
    "</g>",
    "</symbol>",

    /* ---- empty bag icon ---- */
    '<symbol id="i-empty" viewBox="0 0 120 120">',
    '<path d="M32 46h56l-6 54H38z" fill="none" stroke="#16110C" stroke-width="3" stroke-linejoin="round"/>',
    '<path d="M46 46V34a14 14 0 0 1 28 0v12" fill="none" stroke="#16110C" stroke-width="3"/>',
    "</symbol>",

    /* ---- studio bench ---- */
    '<symbol id="i-bench" viewBox="0 0 400 400">',
    '<rect x="36" y="256" width="328" height="18" rx="4" fill="#DD8D29" stroke="#16110C" stroke-width="3"/>',
    '<path d="M62 274v90M338 274v90" stroke="#16110C" stroke-width="3" stroke-linecap="round"/>',
    '<path d="M118 256l-14-58h96l-14 58z" fill="#F4EDE1" stroke="#16110C" stroke-width="3" stroke-linejoin="round"/>',
    '<circle cx="134" cy="224" r="20" fill="#B40F20" stroke="#16110C" stroke-width="2.6"/>',
    '<circle cx="176" cy="228" r="17" fill="#46ACC8" stroke="#16110C" stroke-width="2.6"/>',
    '<g fill="none" stroke="#16110C" stroke-width="1.8" opacity=".5"><path d="M124 216q10 8 20 0"/><path d="M168 222q8 6 16 0"/></g>',
    '<path d="M228 256l-8-72" stroke="#16110C" stroke-width="4" stroke-linecap="round"/>',
    '<path d="M300 256l8-72" stroke="#16110C" stroke-width="4" stroke-linecap="round"/>',
    '<path d="M222 202h88l-6 54h-76z" fill="#E2D200" stroke="#16110C" stroke-width="3" stroke-linejoin="round"/>',
    '<path d="M222 202h88l-6 54h-76z" fill="url(#kn-st)" stroke="none"/>',
    '<g fill="none" stroke="#16110C" stroke-width="2" opacity=".5"><path d="M150 302h100"/><path d="M172 322h56"/></g>',
    "</symbol>",

    "</svg>"
  ].join("");

  /* ------------------------------------------------------------------
     4. Helpers
     ------------------------------------------------------------------ */

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function money(n) { return "$" + n.toFixed(2).replace(/\.00$/, ""); }

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

  var WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight",
    "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen"];

  function word(n) { return WORDS[n] || String(n); }

  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  /* ------------------------------------------------------------------
     5. Cart
     ------------------------------------------------------------------ */

  var KEY = "lynns-knits-cart-v1";
  var FREE_SHIP = 120;
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
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) { /* file:// falls back to mem */ }
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
    add: function (id, size, colour, qty) {
      var items = load();
      var key = id + "|" + size + "|" + colour;
      var found = false;
      for (var i = 0; i < items.length; i++) {
        if (items[i].id + "|" + items[i].size + "|" + items[i].colour === key) {
          items[i].qty += qty || 1;
          found = true;
        }
      }
      if (!found) items.push({ id: id, size: size, colour: colour, qty: qty || 1 });
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
      return '<a href="' + n.href + '"' + cur + ">" + n.label + "</a>";
    }).join("");

    return [
      '<div class="ticker">Free UK shipping over <b>$120</b> &nbsp;&#9670;&nbsp; Every bag knitted by one pair of hands in Sheffield &nbsp;&#9670;&nbsp; <b>Sample site</b>, no real orders taken</div>',
      '<header class="hdr">',
      '<div class="hdr-in">',
      '<nav class="nav" id="nav" aria-label="Main">' + nav + "</nav>",
      '<button class="icon-btn burger" id="burger" aria-expanded="false" aria-controls="nav" aria-label="Menu">&#9776;</button>',
      '<a class="brand" href="index.html"><span class="bn">Lynn\'s Knits</span><span class="bs">Hand knitted &#183; since 2014</span></a>',
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
      '<div><a class="brand" style="text-align:left" href="index.html"><span class="bn">Lynn\'s Knits</span><span class="bs">Hand knitted &#183; since 2014</span></a>',
      '<p class="blurb">A one-chair studio in Sheffield. Knitted purses, bags, and totes in wool, cotton, and linen.</p>',
      '<div class="swatches">' + swatch + "</div></div>",
      "<div><h4>Collections</h4><ul>" + cols + "</ul></div>",
      '<div><h4>Care</h4><ul>',
      '<li><a href="about.html#process">How it is made</a></li>',
      '<li><a href="about.html#care">Washing and blocking</a></li>',
      '<li><a href="about.html#sizing">Sizing and straps</a></li>',
      '<li><a href="about.html#faq">Repairs</a></li>',
      "</ul></div>",
      '<div><h4>Shop</h4><ul>',
      '<li><a href="shop.html">All bags</a></li>',
      '<li><a href="shop.html?tag=anime">Anime-inspired</a></li>',
      '<li><a href="shop.html?c=oneoff">One of one</a></li>',
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
        ? '<p>Add <strong>' + money(left) + '</strong> for free shipping</p><div class="track"><div class="fill" style="width:' + pct + '%"></div></div>'
        : '<p>Free shipping unlocked</p><div class="track"><div class="fill" style="width:100%"></div></div>';
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
          return '<div class="line">'
            + '<a class="thumb" href="product.html?id=' + p.id + '">' + piece(p.sprite) + "</a>"
            + "<div><h4>" + esc(p.name) + "</h4>"
            + '<div class="v">' + esc(l.colour) + (l.size && l.size !== "One size" ? " &#183; " + esc(l.size) : "") + "</div>"
            + '<div class="qty"><button data-bump="' + i + '" data-d="-1" aria-label="Reduce quantity">&#8722;</button>'
            + "<span>" + l.qty + '</span><button data-bump="' + i + '" data-d="1" aria-label="Increase quantity">+</button></div></div>'
            + '<div class="rt"><span class="p">' + money(p.price * l.qty) + "</span>"
            + '<button class="rm" data-rm="' + i + '">Remove</button></div></div>';
        }).join("");
      }
    }

    var foot = $("#cart-foot");
    if (foot) {
      if (!items.length) {
        foot.innerHTML = '<p class="fine">Shipping is worked out at checkout.</p>';
      } else {
        var ship = sub >= FREE_SHIP ? 0 : 7;
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
        Cart.add(p.id, p.sizes[0], p.colours[0], 1);
        toast("<b>" + esc(p.name) + "</b> added to your bag.");
      });
    });
  }

  /* ------------------------------------------------------------------
     9. Page controllers
     ------------------------------------------------------------------ */

  function initHome() {
    var hero = $("#hero-art");
    if (hero) hero.insertAdjacentHTML("afterbegin", piece("cable"));

    // Counts derive from the catalog so the copy cannot drift from the data.
    var animeCount = PRODUCTS.filter(function (p) { return p.anime; }).length;
    var reviewTotal = PRODUCTS.reduce(function (n, p) { return n + p.reviews; }, 0);
    var avgRating = PRODUCTS.reduce(function (n, p) { return n + p.rating; }, 0) / PRODUCTS.length;

    var lede = $("#lede-tally");
    if (lede) {
      lede.textContent = cap(word(PRODUCTS.length)) + " bags in the shop today, "
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
          + '<span class="n">' + n + (n === 1 ? " bag" : " bags") + "</span></a>";
      }).join("");
    }

    var feat = $("#featured");
    if (feat) {
      var ids = ["aran-shoulder", "kitsune-purse", "harvest-tote", "sunset-hobo"];
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
        ["Swatch", "Every design starts as a 15 cm swatch, washed and measured, because gauge off the needles is not gauge after a wash."],
        ["Cast on", "Yarn wound by hand from the skein, then each panel knitted in one sitting so the tension stays even across it."],
        ["Block", "Wet blocked flat and pinned to the finished measurement. This is the step that turns knitting into a shape."],
        ["Line", "Lining cut to the blocked panel and stitched in, hardware fitted, then photographed before it goes in the box."]
      ];
      steps.innerHTML = S.map(function (s, i) {
        var c = COLLECTIONS[i % COLLECTIONS.length];
        return '<div class="step" style="--c:' + c.color + '"><span class="num">0' + (i + 1) + "</span><h3>" + s[0] + "</h3><p>" + s[1] + "</p></div>";
      }).join("");
    }

    var quotes = $("#quotes");
    if (quotes) {
      var Q = [
        ["The fox chart is knitted right into the fabric. You can see the stitches making the shape of the mask.", "Priya R.", "Kitsune Colourwork Purse"],
        ["Six months of daily use and the cables still stand up. It has not gone baggy at all.", "Dan H.", "Aran Cable Shoulder Bag"],
        ["Lynn sent a photo of the actual skein before knitting it. Nobody else does that.", "Sam O.", "Hand-Dyed Sunset Hobo"]
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
      fibres: [],
      bands: [],
      anime: params.get("tag") === "anime",
      sort: "featured"
    };

    var FIBRE_GROUPS = [
      { id: "wool", label: "Wool and merino", test: /wool|merino|shetland|alpaca/i },
      { id: "cotton", label: "Cotton", test: /cotton/i },
      { id: "linen", label: "Linen", test: /linen/i },
      { id: "handdyed", label: "Hand-dyed", test: /hand-dyed/i }
    ];
    var BANDS = [
      { id: "u60", label: "Under $60", test: function (p) { return p.price < 60; } },
      { id: "60-100", label: "$60 to $100", test: function (p) { return p.price >= 60 && p.price < 100; } },
      { id: "100-150", label: "$100 to $150", test: function (p) { return p.price >= 100 && p.price < 150; } },
      { id: "o150", label: "$150 and up", test: function (p) { return p.price >= 150; } }
    ];

    function matches(p) {
      if (state.colls.length && state.colls.indexOf(p.collection) === -1) return false;
      if (state.anime && !p.anime) return false;
      if (state.fibres.length) {
        var hit = state.fibres.some(function (fid) {
          var g = FIBRE_GROUPS.filter(function (x) { return x.id === fid; })[0];
          return g && g.test.test(p.fibre);
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
      '<div class="fgroup"><h4>Fibre</h4>'
      + FIBRE_GROUPS.map(function (g) {
        return '<label class="chk" style="--c:' + FOX.amber + '"><input type="checkbox" data-f="fibre" value="' + g.id + '"><span class="cd"></span>'
          + g.label + '<span class="cn">' + countIf(function (p) { return g.test.test(p.fibre); }) + "</span></label>";
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
          + "<p>No bags match that combination.</p>"
          + '<button class="btn ghost small" id="clear2">Clear filters</button></div>';
      wireQuickAdd(g);
      var c2 = $("#clear2");
      if (c2) c2.addEventListener("click", clearAll);

      $("#count").textContent = list.length + (list.length === 1 ? " bag" : " bags");
      var heading = $("#shop-title");
      if (heading) {
        heading.textContent = state.anime && !state.colls.length
          ? "Anime-inspired"
          : (state.colls.length === 1 ? coll(state.colls[0]).name : "Every bag");
      }
    }

    function clearAll() {
      state.colls = []; state.fibres = []; state.bands = []; state.anime = false;
      $$("#filters input").forEach(function (i) { i.checked = false; });
      render();
    }

    rail.addEventListener("change", function (ev) {
      var el = ev.target;
      var f = el.getAttribute("data-f");
      if (f === "anime") { state.anime = el.checked; }
      else if (f === "coll") { toggle(state.colls, el.value, el.checked); }
      else if (f === "fibre") { toggle(state.fibres, el.value, el.checked); }
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
    var id = new URLSearchParams(location.search).get("id") || "aran-shoulder";
    var p = prod(id) || PRODUCTS[0];
    var c = coll(p.collection);
    var sel = { size: p.sizes[0], colour: p.colours[0], qty: 1, view: 0 };

    document.title = p.name + " · Lynn's Knits";

    $("#crumb").innerHTML = '<a href="index.html">Home</a> / <a href="shop.html">Shop</a> / <a href="shop.html?c='
      + c.id + '">' + c.name + "</a> / " + esc(p.name);

    function pieceAt(scale, dy) {
      return '<g transform="translate(200 ' + (200 + (dy || 0)) + ') scale(' + scale
        + ') translate(-200 -200)"><use href="#p-' + p.sprite + '"/></g>';
    }

    function ruler() {
      return '<g stroke="#6B5F51" stroke-width="2.4" stroke-linecap="round" fill="none">'
        + '<path d="M130 356h140"/><path d="M130 348v16"/><path d="M270 348v16"/></g>'
        + '<text x="200" y="382" text-anchor="middle" fill="#6B5F51" '
        + "style=\"font:500 19px 'JetBrains Mono',monospace;letter-spacing:.08em\">10 cm</text>";
    }

    function benchBed() {
      return '<g opacity=".16"><use href="#i-bench"/></g>'
        + '<path d="M28 318h344" stroke="#6B5F51" stroke-width="2" opacity=".5"/>';
    }

    var VIEWS = [
      { tag: "Full view", build: function () { return pieceAt(1); } },
      { tag: "Stitch detail", build: function () { return pieceAt(1.8); } },
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
      + (p.made ? '<span style="font-size:.74rem;color:var(--ink-3)">Knitted to order, ' + p.lead + "</span>"
        : '<span style="font-size:.74rem;color:var(--ink-3)">' + p.lead + "</span>");
    $("#pd-rating").innerHTML = '<span class="stars">' + stars(p.rating) + "</span>" + p.rating.toFixed(1)
      + " from " + p.reviews + " reviews";
    $("#pd-desc").innerHTML = "<p>" + esc(p.story) + "</p>";

    var opts = $("#pd-opts");
    var sizeBlock = p.sizes.length > 1
      ? '<div class="opt"><h4>Size <span id="size-val">' + esc(sel.size) + '</span></h4><div class="pills" id="sizes">'
        + p.sizes.map(function (s) {
          return '<button class="pill" type="button" data-size="' + esc(s) + '" aria-pressed="' + (s === sel.size) + '">' + esc(s) + "</button>";
        }).join("") + "</div></div>"
      : "";
    var colourBlock = p.colours.length > 1
      ? '<div class="opt"><h4>Colourway <span id="colour-val">' + esc(sel.colour) + '</span></h4><div class="pills" id="colours">'
        + p.colours.map(function (m) {
          return '<button class="pill" type="button" data-colour="' + esc(m) + '" aria-pressed="' + (m === sel.colour) + '">' + esc(m) + "</button>";
        }).join("") + "</div></div>"
      : '<div class="opt"><h4>Colourway <span>' + esc(p.colours[0]) + "</span></h4></div>";
    opts.innerHTML = sizeBlock + colourBlock;

    $$("#sizes .pill").forEach(function (b) {
      b.addEventListener("click", function () {
        sel.size = b.getAttribute("data-size");
        $$("#sizes .pill").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        $("#size-val").textContent = sel.size;
      });
    });
    $$("#colours .pill").forEach(function (b) {
      b.addEventListener("click", function () {
        sel.colour = b.getAttribute("data-colour");
        $$("#colours .pill").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        $("#colour-val").textContent = sel.colour;
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
      Cart.add(p.id, sel.size, sel.colour, sel.qty);
      toast("<b>" + esc(p.name) + "</b> added, " + sel.qty + " in the bag.");
      openCart(true);
    });

    $("#assure").innerHTML = [
      ["Knitted by hand", p.made ? "Cast on after you order" : "Finished and on the shelf"],
      ["Ships from", "Sheffield, tracked and insured"],
      ["Returns", "30 days on stock bags"],
      ["Repairs", "Free for the first two years"]
    ].map(function (a) { return "<div><b>" + a[0] + "</b><span>" + a[1] + "</span></div>"; }).join("");

    $("#acc").innerHTML = [
      '<details open><summary>Yarn and measurements</summary><div class="body"><dl>'
      + "<dt>Fibre</dt><dd>" + esc(p.fibre) + "</dd>"
      + "<dt>Lining</dt><dd>" + esc(p.lining) + "</dd>"
      + "<dt>Gauge</dt><dd>" + esc(p.gauge) + "</dd>"
      + "<dt>Size</dt><dd>" + esc(p.dims) + "</dd>"
      + "<dt>Weight</dt><dd>" + esc(p.weight) + "</dd>"
      + "<dt>Knitted</dt><dd>" + (p.made ? "To order, " + esc(p.lead) : esc(p.lead)) + "</dd>"
      + "</dl></div></details>",
      '<details><summary>Washing and blocking</summary><div class="body"><p>' + esc(p.care) + "</p></div></details>",
      '<details><summary>Shipping and returns</summary><div class="body"><p>Tracked shipping is $7, free over $120. '
      + "Knitted-to-order bags leave the studio inside the lead time above, and you get a photo of the finished bag before it goes in the post. "
      + "Stock bags post the next working day. Returns run 30 days on stock bags, and knitted-to-order work is covered for faults and sizing rather than change of mind.</p></div></details>",
      '<details><summary>Sizing and straps</summary><div class="body"><p>Every measurement on this listing is taken after blocking, which is the size the bag actually is. '
      + "Knitted fabric gives, so a bag carries more than its stated dimensions and settles a centimetre or two wider in the first month. "
      + "Strap length can be changed at no cost if you ask before it is cast on. Put the drop you want in the order note.</p></div></details>"
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
        ["One chair, one knitter", "Nothing goes out to a knitting mill or a piecework knitter. If a stitch is wrong, it is mine, and I fix it."],
        ["Named mills and dyers", "Wool comes from two British mills and one independent dyer, all named on the listing. Nothing arrives here with an unknown origin."],
        ["Blocked to a measurement", "Every bag is wet blocked and pinned to the size on the listing, so what arrives measures what it says."],
        ["Repairs over replacement", "Seams, linings, and hardware get fixed free for two years. After that it is materials and postage."]
      ];
      vals.innerHTML = V.map(function (v, i) {
        var c = COLLECTIONS[i % COLLECTIONS.length];
        return '<div class="val" style="--c:' + c.color + '"><h3>' + v[0] + "</h3><p>" + v[1] + "</p></div>";
      }).join("");
    }

    var st = $("#stats");
    if (st) {
      var S = [["2014", "Studio opened"], ["11", "Years at it"], ["2,940", "Bags finished"], ["3", "Yarn suppliers"], ["1", "Pair of hands"]];
      st.innerHTML = S.map(function (s, i) {
        var c = COLLECTIONS[i % COLLECTIONS.length];
        return '<div class="stat" style="--c:' + c.color + '"><b>' + s[0] + "</b><span>" + s[1] + "</span></div>";
      }).join("");
    }

    var faq = $("#faq-list");
    if (faq) {
      var F = [
        ["How long does a knitted-to-order bag take?", "The lead time on each listing is the real time at the chair, between seven days and eighteen. Colourwork and cable bags sit at the long end, since a cable round takes about three times as long as a plain one."],
        ["Will a knitted bag hold its shape?", "The ones here will. Every bag is either lined, worked at a tight gauge, or both, and each one is blocked to its finished measurement before it ships. A knitted bag goes baggy when it is knitted loose and left unlined, which is the thing this studio spends most of its effort avoiding."],
        ["Can I ask for a bag that is not listed?", "Yes. Commissions start at $180 and begin with a swatch and a sketch you approve before anything is cast on. Anime commissions are welcome so long as the chart is an original motif rather than a copy of a licensed character."],
        ["Do you knit licensed anime characters?", "No. The Stitch and Story bags use motifs from folklore and from anime visual language, fox masks, star sigils, mecha panel blocks, charted here rather than copied from a series."],
        ["Is the wool going to pill?", "Some. Merino pills at friction points on any garment or bag, and the blends here use cotton or nylon at the wear points to slow it down. A sweater comb takes pills off in a minute and does no damage to the fabric."],
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
