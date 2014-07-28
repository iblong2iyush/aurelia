//----------------------------------------------------------------
// store (contains the products)
//
// NOTE: nutritional info from http://www.cspinet.org/images/fruitcha.jpg
// score legend:
// 0: below 5% of daily value (DV)
// 1: 5-10% DV
// 2: 10-20% DV
// 3: 20-40% DV
// 4: above 40% DV
//
function store() {
    this.fruits = [
        new product("APL", "Apple", "Eat one every day to keep the doctor away!", 12, 90, 0, 2, 0, 12, false),
        new product("BAN", "Banana", "These are rich in Potassium and easy to peel.", 4, 120, 0, 2, 1, 2, false),
        new product("GRP", "Grape", "Wine is great, but grapes are even better.", 8, 100, 0, 3, 0, 67, true),
        new product("MAN", "Mango", "Messy to eat, but well worth it.", 8, 70, 3, 4, 0, 8, false),
        new product("BLC", "Blackberries", "Messy to eat, but well worth it.", 8, 70, 3, 4, 0, 8, false),
        new product("LIM", "Lime", "Messy to eat, but well worth it.", 8, 70, 3, 4, 0, 8, false),
        new product("ORG", "Orange", "Vitamin C anyone? Go ahead, make some juice.", 9, 70, 1, 4, 2, 12, true),
        new product("PAP", "Papaya", "Super-popular for breakfast.", 5, 60, 3, 4, 2, 27, false),
        new product("PER", "Pear", "Delicious fresh, or cooked in red wine, or distilled.", 8, 100, 0, 2, 0, 422, true),
        new product("PNP", "Pineapple", "Enjoy it (but don't forget to peel first).", 4, 60, 0, 3, 0, 3, false),
        new product("STR", "Strawberry", "Beautiful, healthy, and delicious.", 7, 40, 0, 4, 1, 65, false),
        new product("WML", "Watermelon", "Nothing comes close on those hot summer days.", 4, 90, 4, 4, 0, 32, false)
    ];
    this.vegetables = [
        new product("CAU", "Cauliflower", "", 12, 90, 0, 2, 0),
        new product("BRI", "Brinjal", "", 16, 90, 0, 1, 1),
        new product("BIT", "Bitter-gourd", "", 4, 120, 0, 2, 1),
        new product("BOT", "Bottle-gourd", "", 3, 50, 4, 4, 1),
        new product("RED", "Red-chilli", "", 10, 100, 0, 0, 0),
        new product("CAP", "Capsicum", "", 11, 50, 4, 4, 1),
        new product("CAR", "Carrot", "", 8, 100, 0, 3, 0),
        new product("ONI", "Onion", "", 8, 50, 4, 4, 0),
        new product("BRO", "Broccoli", "", 14, 90, 1, 4, 0),
        new product("TOM", "Tomato", "", 18, 125, 1, 4, 0),
        new product("MUS", "Mushroom", "", 8, 70, 3, 4, 0),
        new product("POT", "Potato", "", 9, 70, 1, 4, 2),
        new product("CAB", "Cabbage", "", 5, 60, 3, 4, 2),
        new product("CUC", "Cucumber", "", 19, 70, 1, 2, 0)


    ];
    this.favorites = [
        new product("APL", "Apple", "Eat one every day to keep the doctor away!", 12, 90, 0, 2, 0, 12),
        new product("BAN", "Banana", "These are rich in Potassium and easy to peel.", 4, 120, 0, 2, 1, 245),
        new product("CAR", "Carrot", "", 8, 100, 0, 3, 0),
        new product("ONI", "Onion", "", 8, 50, 4, 4, 0, 4),
        new product("BRO", "Broccoli", "", 14, 90, 1, 4, 0),
        new product("PNP", "Pineapple", "Enjoy it (but don't forget to peel first).", 4, 60, 0, 3, 0, 3),
        new product("STR", "Strawberry", "Beautiful, healthy, and delicious.", 7, 40, 0, 4, 1, 65),
        new product("WML", "Watermelon", "Nothing comes close on those hot summer days.", 4, 90, 4, 4, 0, 32),
        new product("TOM", "Tomato", "", 18, 125, 1, 4, 0)
        ];
    this.sugar = [
        new product("SUG", "Sugar", "1kg",64,16,0.0,4.20,0.0 ),
        new product("SWE", "Sweetener", "100gm",12,17,0.0,5.20,0.0 ),
        new product("SAL", "Salt", "1kg", 12,0.0,0.0,0.0,0.0),
        new product("JAG", "Jaggery", "1kg",34,15,18,0.3,5.0,0.8 ),
        new product("SUC", "Sugar Cube", "1kg",42,15,12,41,95.39,1.22 )

    ];
    this.flour = [
        new product("ATA", "Atta", "1kg",16,339,100,200,0),
        new product("CHA", "Chana", "500gm",45,500,200,20,0),
        new product("KAB", "Kabul Chana", "1kg",64,350,200,30,0),
        new product("BOT", "Chitkabra Rajma", "500gm",95,300,100,40,0),
        new product("RAJ", "Rajma", "500gm", 90,350,200,50,0),
        new product("MOO", "Moong", "200gm", 27,300,500,45,0),
        new product("MAS", "Masoor", "500gm",54,350,450,50,0),
        new product("WHE", "Wheat Daliya", "100gm",20,250,300,40,0),
        new product("URA", "Urad", "500gm",22,341,25,59,1.6),
        new product("TUR", "Turdal", "500gm",30,415,30,68,1.5),
        new product("YEL", "Yellow Lentil", "500gm",40,400,25,65,2)
    ];
    this.spices = [
        new product("ATA", "Ajwain", "50gm",20,305,0,43,25),
        new product("BLA", "Black Pepper", "50gm",65,251,10,69,3 ),
        new product("COO", "Cooking powder", "50gm",60,5,0,2,3,2 ),
        new product("GAR", "Garam Masala", "50gm", 28,250,13,25,15),
        new product("WHI", "White Pepper", "50gm",62,7,25,1,0 ),
        new product("TUR", "Turmeric", "50gm",11,18,17,43,22 ),
        new product("KAS", "Kasuri Methi", "50gm",25,375,50,45,18 ),
        new product("ANI", "Anise seeds", "50gm",40,28,18,35,2),
        new product("CAR", "Cardemom", "50gm",45,67,0.45,80,76),
        new product("CIN", "Cinnamon", "50gm",65,6,9,84,0.07),
        new product("BUT", "Butter Chicken", "50gm",55,485,33.28,10.36,26 ),
        new product("CAT", "Catch Masala", "50gm", 48,130,21,0.0,6),
        new product("CHM", "Chana Masala", "50gm",46,224,8.0,66,56 ),
        new product("KIK", "Kitchen King", "50gm",20,23,56,45,3.4),
        new product("SAM", "Sambar", "50gm",18,34,32,56,0,7),
        new product("GIN","Ginger Garlic","100gm",25,34,35,667,0,5)
    ];
    this.pasta = [
        new product("CUP", "Cup Noodles", "250gm",50,50,20,25,5),
        new product("MAG", "Pasta Maggi", "250gm",30,70,32,25,9),
        new product("SHR", "Koka", "250gm",60,55,35,28,6),
        new product("SKI", "Pasta", "250gm",70,60,45,30,5),
        new product("YIP", "Yippee", "250gm",35,48,55,40,6),
        new product("PRA", "Prawn Noodles", "250gm",50,55,34,56,7)
    ];

    this.soup = [
        new product("CLS", "Chicken leek soup", "250gm",40,4,2,1,3),
        new product("CHI", "Chinese", "250gm",45,4,2,1,0,4),
        new product("TVS", "Thick veg soup", "250gm",42,2,3,4,0,3 ),
        new product("TOM", "Tomato soup", "250gm",45,2,3,1,0,2),
        new product("CAS", "Cup-a-soup", "250gm",45,2,3,1, 0,2 ),
        new product("HNS", "Hot n Sour soup", "250gm",2,3,2,1,0,3 )
    ];

    this.juice = [
        new product("DEL", "Delmonte", "250ml",100,150,20,20,0),
        new product("MAN", "Mango Juice", "250ml",150,100,30,30,0),
        new product("MIX", "Mixed Fruit Juice", "250ml",150, 23,23,0),
        new product("ORA", "Orange", "250ml", 120,23,34,30,0),
        new product("PIN", "Pineapple Juice", "500ml",150,23,34,45,0 ),
        new product("RAS", "Rasna Fruitplus", "500ml",130,23,23,34,0 ),
        new product("RSP", "Rasna Pineapple", "500ml", 100,23,23,44,0),
        new product("TAN", "Tang", "500ml", 110,23,44,55,0),
        new product("TAN", "Tang Powder", "500ml", 117,23,44,55,0),
        new product("TNG", "Tangerina", "500ml", 115,23,44,34,0),
        new product("TAN", "Tang Nimbu", "500ml", 100,23,44,55,0),
        new product("PLJ","Plum Juice","500ml",120,35,45,44,0)
    ];
    this.facialcare = [
        new product("AFT", "After Sun Gel", "50ml",120 ,0.0,0.0,0.0,0.0),
        new product("FRU", "Fruit blast", "50ml",130 ,0.0,0.0,0.0,0.0),
        new product("GAR", "Garnier", "100ml", 145,0.0,0.0,0.0,0.0),
        new product("LAK", "Lakme combo", "100ml", 140,0.0,0.0,0.0,0.0),
        new product("LKC", "Lakme creame","120ml",130 ,0.0,0.0,0.0,0.0),
        new product("LFS", "Lakme face shear", "150ml",250 ,0.0,0.0,0.0,0.0),
        new product("RVB", "Revlon blush", "10ml",230 ,0.0,0.0,0.0,0.0),
        new product("RLS", "Revlon nailpaints", "10ml", 75,0.0,0.0,0.0,0.0),
        new product("REL","Revlon lipsticks","5ml", 120,0.0,0.0,0.0,0.0),
        new product("RLS", "Sun expert", "150ml",170 ,0.0,0.0,0.0,0.0),
        new product("PEA", "Pears", "200ml", 50,0.0,0.0,0.0,0.0),
        new product("OLA", "Olay", "50ml", 95,0.0,0.0,0.0,0.0),
        new product("MEN", "Men", "50ml", 120,0.0,0.0,0.0,0.0),
        new product("PON", "Ponds", "30ml",250 ,0.0,0.0,0.0,0.0),
        new product("HIM", "Himalaya", "100ml",130 ,0.0,0.0,0.0,0.0),
        new product("DOV", "Dove", "100ml",45 ,0.0,0.0,0.0,0.0),
        new product("FAI", "Fair", "100ml", 150,0.0,0.0,0.0,0.0),
        new product("VAS", "Vaseline", "120ml",120 ,0.0,0.0,0.0,0.0),
        new product("VIV", "Vivel", "130ml",100 ,0.0,0.0,0.0,0.0),
        new product("LKM", "Lakme mascara", "140ml",130 ,0.0,0.0,0.0,0.0)
    ];
    this.haircare = [
        new product("DOV", "Dove", "250ml", 150,0.0,0.0,0.0,0.0),
        new product("FRU", "Fructis combo", "250ml",120 ,0.0,0.0,0.0,0.0),
        new product("FRC", "Fructis conditioner", "250ml",115 ,0.0,0.0,0.0,0.0),
        new product("FRT", "Fructis", "250ml",250 ,0.0,0.0,0.0,0.0),
        new product("LOR", "Loreal", "300ml", 215,0.0,0.0,0.0,0.0),
        new product("PAN", "Pantene", "250ml", 90,0.0,0.0,0.0,0.0),
        new product("SUN", "Sunsilk", "250ml",40 ,0.0,0.0,0.0,0.0),
        new product("TRE", "Tresemme", "250ml", 160,0.0,0.0,0.0,0.0)
    ];
    this.chips = [
        new product("BIN", "Bingo", "100gm",160,2,15,1,10),
        new product("FUN", "Funjabi", "100gm",160,2,15,2,10 ),
        new product("GRE", "Green chutney", "100gm",150,1,14,3,11),
        new product("JUI", "Juicy tomato", "100gm",150,2,15,4,10),
        new product("LAB", "Lays baked", "100gm",160,2,15,5,11),
        new product("LBO", "Lays bolognese originale", "100gm",175,3,15,6,10,2),
        new product("LAC", "Lays cannabis", "100gm",160,2,15,5,10),
        new product("LCL", "Lays chilli lemon", "100gm",150,2,15,5,10),
        new product("LCY", "Lays classic", "100gm",160,2,15,5,10),
        new product("LAF", "Lays fromage", "100gm",150,2,15,6,10),
        new product("LMM", "Lays magic masti", "100gm",160,2,15,6,10),
        new product("LPK", "Lays papryka", "100gm",150,2,15,5,11),
        new product("LAS", "Lays skittles", "100gm",160,1,15,4,10),
        new product("SMT", "Spanish tomato tango", "100gm",160,2,15,5,10),
        new product("LST", "Lays sunkissed tomato","100gm",150,2,15,5,10,4),
        new product("LAW", "Lays wavy", "100gm",160,2,14,4,10),
        new product("LSC", "Lays swiss cheese", "100gm",175,3,15,5,11),
        new product("MAM", "Masala munch", "100gm",170,4,15,6,12),
        new product("NAT", "Naughty tomato", "100gm",160,5,15,7,11),
        new product("PLS", "Plain salted", "100gm",150,5,15,6,12),
        new product("POT", "Potato", "100gm",160,5,14,5,10),
        new product("SAL", "Salt", "100gm",170,5,15,6,11,3),
        new product("SOM", "Solid masti", "100gm",175,4,14,6,10),
        new product("SPT", "Spicy treat", "100gm",170,5,15,5,11),
        new product("YUM", "Yumitos", "100gm",160,5,14,4,10)
    ];

    this.energydrinks = [
        new product("BOO", "Boost", "250gm",150,38,1,8,0),
        new product("BOU", "Bournvita", "250gm",120,27,2,7,0),
        new product("COM", "Complan", "250gm",130,26,3,4,0 ),
        new product("HOR", "Horlicks", "250gm",165,26,3,4,0),
        new product("JUN", "Junior Horlicks", "250gm",170,45,1,2,0.1 ),
        new product("WOM", "Women Horlicks", "250gm",130,56,3,4,2 ),
        new product("WOB", "Women Bournvita", "250gm",180,23,3,4,1 )
    ];

    this.biscuits= [
        new product("HEY", "50 50", "100gm",20,353,7,35,16 ),
        new product("BOU", "Bourbon", "100gm",35,331,6,32,14),
        new product("BOR", "Bournville", "100gm", 65,321,3,40,18),
        new product("BUT", "Butter & cookies", "100gm",30,230,5,48,20),
        new product("DIG", "Digestive", "100gm",45,320,45,2,12 ),
        new product("FRU", "Fruit & nut", "100gm",30,330,3,12,1),
        new product("GLU", "Glucose", "100gm",102,100,4,12,0.2 ),
        new product("GOO", "Good day", "100gm",30,90,3,12,1.2),
        new product("GRA", "Grain Biscuits", "100gm",10,79,2,3,1),
        new product("LIT", "Little Heart", "50gm",10,23,3,2,1),
        new product("ORE", "Oreo","100gm",30,233,12,2,1),
        new product("PUM", "Pure magic", "100gm",212,23,12,1 ),
        new product("TIG", "Tiger", "100gm",20,34,23,3,1 ),
        new product("TRJ", "Treat jam", "100gm", 25,221,2,3,1)

];
    this.chocolates = [
        new product("DAI", "Dairymilk silk", "100gm",50,148,15,41,69 ),
        new product("FRN", "Fruit & nuts", "100gm",35,141,12,21,60 ),
        new product("VAN", "Vanilla", "100gm",45,130,12,23,65 ),
        new product("COO", "Cookie", "100gm",45,135,34,34,56 ),
        new product("COD", "Cookie delight", "100gm",50,123,23,34,43 ),
        new product("VAC", "Vanilla Creame", "100gm",35,123,23,32,24 ),
        new product("KIT", "Kitkat cookies", "100gm",50,231,34,34,56 ),
        new product("NES", "Nestle cookie crisp", "100gm",30,341,56,12,39),
        new product("NEC", "Nestle cookies", "100gm",45,34,56,77,23 ),
        new product("NET", "Nestle tollhouse", "100gm",40,323,45,35,65 )
    ];
    this.household = [
        new product("AJX", "Ajax", "50gm", 35,0.0,0.0,0.0,0.0),
        new product("ARO", "Ariel Oxyblu", "50gm",30 ,0.0,0.0,0.0,0.0),
        new product("AXE", "Axe", "100ml", 250,0.0,0.0,0.0,0.0),
        new product("FOG", "Fogg", "250ml",120 ,0.0,0.0,0.0,0.0),
        new product("NIK", "Nike", "250ml", 257,0.0,0.0,0.0,0.0),
        new product("RBK", "Reebok", "250ml",30 ,0.0,0.0,0.0,0.0),
        new product("RIN", "Rin", "50gm",25 ,0.0,0.0,0.0,0.0),
        new product("TID", "Tide", "50gm", 30,0.0,0.0,0.0,0.0),
        new product("VIM", "Vim", "50gm",25,0.0,0.0,0.0,0.0 ),
        new product("WHL", "Wheel", "100gm", 35,0.0,0.0,0.0,0.0)
];

    this.cheese = [
        new product("BUT", "Butter", "100ml",30,10,35,25,5),
        new product("CHE", "Cheese", "100ml",30,12,15,30,5),
        new product("CRE", "Cream", "100ml",25,15,25,46,2),
        new product("PAN", "Paneer","100ml",110,23,44,55,4),
        new product("PIZ", "Pizza cheese","100ml",110,23,44,55,3)
    ];
    this.milk = [
        new product("AMU", "Amul masti", "100ml",25,10,45,23,3),
        new product("AMM", "Amul milk", "100ml",30,15,40,20,2),
        new product("DAI", "Dairy fresh", "100ml",20,15,20,25,4),
        new product("DAN", "Danone", "100ml",25,13,34,24,2),
        new product("MIL", "Milk shake", "100ml",40,20,13,3,5),
        new product("YOG", "Yogurt","100ml",110,23,44,55,0 ),
        new product("GHE", "Ghee", "100ml",150,20,14,20,2)
    ];
    this.eggs = [
        new product("DES", "Desi-eggs", "100ml",20,13,23,34,2),
        new product("EGG", "Eggs", "1dozen",50,23,60,23,1),
        new product("BRE", "Brown eggs", "100ml",35,15,30,4)
    ];
    this.tea = [
        new product("ACA", "Acai tea", "500gm",250,2,0,0.71,0 ),
        new product("BRO", "Brookebond", "500gm",300,3,0,0.50,0),
        new product("GRT", "Green tea", "500gm",300,1,0,0.3,0 ),
        new product("LIP", "Lipton", "500gm",300,0,0,0,0 ),
        new product("ORG", "Organic tea", "250gm",250,0,0,0,0 )

    ];
    this.coffee = [
        new product("BAR", "Barista coffee","50gm",150,30,1,3,0,0 ),
        new product("BRU", "Bru", "50gm",100,45,5,0,1,0),
        new product("BRG", "Bru Gold", "100gm",150,40,4,0,1,0),
        new product("NES", "Nescafe Espresso", "100gm",200,75,0.20,13.0,2.7 ),
        new product("NSG", "Nescafe Gold", "100gm",250,80,0.30,15.0,3.5 ),
        new product("NGD", "Nescafe Gold Decaffo", "100",300,110,3.00,16,4)
    ];
    this.water = [
        new product("", "Aquapura", "200ml",20,48,1,12,0),
        new product("", "Bisleri", "200ml", 20,34,1,11,0),
        new product("", "Kinley", "200ml", 30,40,1,11,0)

    ];
    this.oil = [
        new product("", "Dalda bottle", "200ml",20,48,1,12,0),
        new product("", "Dalda packet", "200ml", 20,34,1,11,0),
        new product("", "Kissan oil", "200ml", 30,40,1,11,0),
        new product("", "Kissan", "200ml", 30,40,1,11,0),
        new product("", "Oil", "200ml", 30,40,1,11,0),
        new product("", "Raos", "200ml", 30,40,1,11,0),
        new product("", "Saffola", "200ml", 30,40,1,11,0),
    ];
    this.jam = [
        new product("BAR", "Kissan mango","50gm",150,30,1,3,0,0 ),
        new product("BRU", "Kissan mixed fruit", "50gm",100,45,5,0,1,0),
        new product("BRG", "Kissan Pineapple jam", "100gm",150,40,4,0,1,0),
        new product("NES", "Tops apple","100gm",200,75,20,130,2),
        new product("NSG", "Tops mixed fruit", "100gm",250,80,0.30,15.0,3.5 ),
        new product("NGD", "Tops Pineapple ", "100",300,110,3.00,16,4)
];
    this.sauce = [
        new product("ACA", "Kissan bottle", "500gm",250,2,0,0.71,0 ),
        new product("BRO", "Kissan chilli", "500gm",300,3,0,0.50,0),
        new product("GRT", "Kissan creamy spread", "500gm",300,1,0,0.3,0 ),
        new product("LIP", "Kissan Ketchup", "500gm",300,0,0,0,0 ),
        new product("ORG", "Kissan Squeezo ","250gm",250,0,0,0,0)
        ];
}

store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
};

