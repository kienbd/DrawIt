var answers = function() //must be same as file name
{
  var answers = new Array();

  answers.push({
    "name" : "quiz0",
    "strokes" : JSON.parse('[[{"X":259,"Y":82},{"X":259,"Y":81},{"X":258,"Y":81},{"X":258,"Y":80},{"X":257,"Y":78},{"X":256,"Y":77},{"X":255,"Y":76},{"X":254,"Y":76},{"X":254,"Y":75},{"X":253,"Y":75},{"X":251,"Y":74},{"X":248,"Y":72},{"X":246,"Y":71},{"X":243,"Y":70},{"X":238,"Y":69},{"X":234,"Y":68},{"X":232,"Y":68},{"X":232,"Y":67},{"X":231,"Y":67},{"X":230,"Y":67},{"X":229,"Y":67},{"X":224,"Y":67},{"X":219,"Y":67},{"X":215,"Y":66},{"X":214,"Y":66},{"X":213,"Y":66},{"X":211,"Y":66},{"X":207,"Y":66},{"X":204,"Y":66},{"X":201,"Y":66},{"X":198,"Y":66},{"X":197,"Y":66},{"X":193,"Y":66},{"X":190,"Y":66},{"X":185,"Y":66},{"X":182,"Y":66},{"X":180,"Y":66},{"X":179,"Y":66},{"X":176,"Y":66},{"X":175,"Y":66},{"X":173,"Y":66},{"X":171,"Y":66},{"X":168,"Y":66},{"X":167,"Y":66},{"X":165,"Y":67},{"X":163,"Y":67},{"X":162,"Y":68},{"X":159,"Y":69},{"X":156,"Y":69},{"X":155,"Y":70},{"X":153,"Y":70},{"X":151,"Y":70},{"X":149,"Y":71},{"X":148,"Y":71},{"X":148,"Y":72},{"X":147,"Y":72},{"X":146,"Y":73},{"X":141,"Y":77},{"X":139,"Y":78},{"X":136,"Y":81},{"X":132,"Y":84},{"X":129,"Y":85},{"X":126,"Y":87},{"X":124,"Y":87},{"X":123,"Y":90},{"X":121,"Y":92},{"X":121,"Y":93},{"X":119,"Y":94},{"X":118,"Y":95},{"X":118,"Y":96},{"X":116,"Y":97},{"X":115,"Y":99},{"X":113,"Y":102},{"X":112,"Y":104},{"X":111,"Y":106},{"X":110,"Y":107},{"X":109,"Y":109},{"X":106,"Y":112},{"X":103,"Y":118},{"X":102,"Y":120},{"X":101,"Y":122},{"X":100,"Y":123},{"X":100,"Y":124},{"X":99,"Y":128},{"X":99,"Y":129},{"X":98,"Y":132},{"X":97,"Y":135},{"X":97,"Y":136},{"X":97,"Y":137},{"X":97,"Y":139},{"X":97,"Y":140},{"X":97,"Y":143},{"X":97,"Y":145},{"X":97,"Y":147},{"X":97,"Y":149},{"X":97,"Y":152},{"X":97,"Y":153},{"X":97,"Y":156},{"X":98,"Y":158},{"X":98,"Y":161},{"X":98,"Y":164},{"X":98,"Y":167},{"X":99,"Y":171},{"X":100,"Y":174},{"X":101,"Y":177},{"X":101,"Y":179},{"X":101,"Y":181},{"X":102,"Y":183},{"X":102,"Y":184},{"X":103,"Y":186},{"X":103,"Y":187},{"X":103,"Y":190},{"X":103,"Y":191},{"X":104,"Y":194},{"X":105,"Y":195},{"X":106,"Y":197},{"X":106,"Y":198},{"X":107,"Y":200},{"X":108,"Y":201},{"X":108,"Y":202},{"X":110,"Y":203},{"X":111,"Y":205},{"X":112,"Y":207},{"X":113,"Y":208},{"X":113,"Y":209},{"X":113,"Y":210},{"X":114,"Y":211},{"X":114,"Y":212},{"X":115,"Y":213},{"X":117,"Y":215},{"X":118,"Y":216},{"X":119,"Y":217},{"X":120,"Y":218},{"X":120,"Y":219},{"X":122,"Y":219},{"X":124,"Y":221},{"X":125,"Y":222},{"X":126,"Y":223},{"X":126,"Y":225},{"X":127,"Y":225},{"X":128,"Y":226},{"X":128,"Y":227},{"X":129,"Y":228},{"X":131,"Y":230},{"X":134,"Y":231},{"X":136,"Y":233},{"X":137,"Y":234},{"X":138,"Y":234},{"X":139,"Y":234},{"X":140,"Y":235},{"X":144,"Y":237},{"X":146,"Y":238},{"X":149,"Y":240},{"X":154,"Y":242},{"X":159,"Y":244},{"X":162,"Y":246},{"X":163,"Y":246},{"X":164,"Y":246},{"X":165,"Y":247},{"X":168,"Y":248},{"X":170,"Y":250},{"X":171,"Y":250},{"X":174,"Y":251},{"X":176,"Y":252},{"X":178,"Y":252},{"X":181,"Y":253},{"X":182,"Y":254},{"X":183,"Y":254},{"X":184,"Y":256},{"X":187,"Y":257},{"X":189,"Y":257},{"X":191,"Y":258},{"X":192,"Y":258},{"X":195,"Y":260},{"X":202,"Y":262},{"X":207,"Y":263},{"X":211,"Y":264},{"X":215,"Y":265},{"X":218,"Y":265},{"X":219,"Y":267},{"X":221,"Y":267},{"X":222,"Y":267},{"X":228,"Y":267},{"X":235,"Y":267},{"X":241,"Y":268},{"X":246,"Y":268},{"X":251,"Y":269},{"X":260,"Y":269},{"X":265,"Y":269},{"X":266,"Y":269},{"X":270,"Y":269},{"X":271,"Y":269},{"X":272,"Y":269},{"X":275,"Y":269},{"X":279,"Y":269},{"X":280,"Y":268},{"X":283,"Y":268},{"X":287,"Y":266},{"X":289,"Y":264},{"X":291,"Y":264},{"X":292,"Y":263},{"X":294,"Y":263},{"X":296,"Y":261},{"X":299,"Y":258},{"X":304,"Y":256},{"X":308,"Y":255},{"X":311,"Y":253},{"X":314,"Y":251},{"X":315,"Y":249},{"X":318,"Y":248},{"X":319,"Y":246},{"X":321,"Y":244},{"X":322,"Y":242},{"X":323,"Y":241},{"X":324,"Y":240},{"X":325,"Y":238},{"X":326,"Y":235},{"X":328,"Y":233},{"X":328,"Y":232},{"X":329,"Y":231},{"X":330,"Y":228},{"X":331,"Y":225},{"X":332,"Y":222},{"X":334,"Y":219},{"X":335,"Y":217},{"X":335,"Y":213},{"X":336,"Y":210},{"X":337,"Y":206},{"X":338,"Y":203},{"X":338,"Y":202},{"X":338,"Y":199},{"X":339,"Y":194},{"X":340,"Y":192},{"X":341,"Y":188},{"X":341,"Y":185},{"X":341,"Y":183},{"X":342,"Y":181},{"X":342,"Y":178},{"X":342,"Y":176},{"X":344,"Y":174},{"X":344,"Y":172},{"X":344,"Y":171},{"X":344,"Y":169},{"X":344,"Y":167},{"X":344,"Y":165},{"X":344,"Y":164},{"X":344,"Y":162},{"X":344,"Y":160},{"X":345,"Y":159},{"X":345,"Y":156},{"X":345,"Y":152},{"X":345,"Y":150},{"X":345,"Y":147},{"X":345,"Y":145},{"X":345,"Y":142},{"X":345,"Y":141},{"X":345,"Y":139},{"X":345,"Y":137},{"X":345,"Y":136},{"X":345,"Y":135},{"X":344,"Y":134},{"X":344,"Y":133},{"X":343,"Y":133},{"X":343,"Y":132},{"X":341,"Y":130},{"X":340,"Y":129},{"X":339,"Y":127},{"X":339,"Y":126},{"X":338,"Y":124},{"X":337,"Y":122},{"X":336,"Y":121},{"X":336,"Y":119},{"X":335,"Y":117},{"X":334,"Y":116},{"X":333,"Y":115},{"X":333,"Y":113},{"X":331,"Y":111},{"X":330,"Y":110},{"X":329,"Y":109},{"X":328,"Y":107},{"X":327,"Y":107},{"X":326,"Y":106},{"X":325,"Y":104},{"X":324,"Y":102},{"X":323,"Y":102},{"X":323,"Y":101},{"X":322,"Y":101},{"X":321,"Y":100},{"X":321,"Y":99},{"X":320,"Y":99},{"X":320,"Y":98},{"X":319,"Y":97},{"X":318,"Y":97},{"X":317,"Y":96},{"X":316,"Y":96},{"X":314,"Y":95},{"X":313,"Y":94},{"X":310,"Y":92},{"X":308,"Y":91},{"X":306,"Y":89},{"X":304,"Y":88},{"X":303,"Y":87},{"X":302,"Y":87},{"X":302,"Y":86},{"X":300,"Y":86},{"X":295,"Y":85},{"X":294,"Y":84},{"X":292,"Y":84},{"X":291,"Y":84},{"X":287,"Y":82},{"X":284,"Y":81},{"X":282,"Y":81},{"X":281,"Y":81},{"X":281,"Y":80},{"X":279,"Y":80},{"X":278,"Y":80},{"X":277,"Y":79},{"X":276,"Y":78},{"X":275,"Y":78},{"X":274,"Y":77},{"X":273,"Y":77},{"X":272,"Y":77},{"X":271,"Y":76},{"X":270,"Y":76},{"X":269,"Y":76},{"X":269,"Y":75},{"X":266,"Y":75},{"X":265,"Y":74},{"X":262,"Y":73},{"X":261,"Y":73},{"X":259,"Y":73},{"X":257,"Y":71},{"X":254,"Y":70},{"X":249,"Y":68},{"X":247,"Y":67},{"X":245,"Y":67},{"X":244,"Y":66}]]')
  });

  answers.push({
    "name" : "quiz0",
    "strokes" : JSON.parse('[[{"X":266,"Y":107},{"X":266,"Y":106},{"X":266,"Y":105},{"X":265,"Y":104},{"X":264,"Y":102},{"X":263,"Y":102},{"X":262,"Y":101},{"X":261,"Y":99},{"X":260,"Y":98},{"X":258,"Y":97},{"X":255,"Y":96},{"X":252,"Y":95},{"X":241,"Y":91},{"X":236,"Y":89},{"X":230,"Y":88},{"X":226,"Y":85},{"X":210,"Y":82},{"X":205,"Y":81},{"X":200,"Y":81},{"X":194,"Y":81},{"X":187,"Y":85},{"X":181,"Y":88},{"X":180,"Y":89},{"X":176,"Y":92},{"X":166,"Y":101},{"X":161,"Y":105},{"X":156,"Y":108},{"X":147,"Y":114},{"X":141,"Y":121},{"X":135,"Y":133},{"X":130,"Y":142},{"X":129,"Y":146},{"X":127,"Y":150},{"X":125,"Y":159},{"X":125,"Y":166},{"X":125,"Y":171},{"X":126,"Y":172},{"X":128,"Y":181},{"X":130,"Y":188},{"X":133,"Y":195},{"X":135,"Y":198},{"X":138,"Y":203},{"X":139,"Y":205},{"X":142,"Y":209},{"X":144,"Y":210},{"X":145,"Y":211},{"X":146,"Y":214},{"X":149,"Y":216},{"X":153,"Y":220},{"X":156,"Y":225},{"X":160,"Y":228},{"X":167,"Y":233},{"X":172,"Y":236},{"X":175,"Y":238},{"X":180,"Y":240},{"X":184,"Y":242},{"X":186,"Y":243},{"X":191,"Y":244},{"X":199,"Y":245},{"X":204,"Y":245},{"X":207,"Y":246},{"X":210,"Y":248},{"X":213,"Y":248},{"X":214,"Y":248},{"X":218,"Y":248},{"X":224,"Y":248},{"X":233,"Y":249},{"X":239,"Y":250},{"X":243,"Y":250},{"X":246,"Y":250},{"X":251,"Y":248},{"X":259,"Y":245},{"X":267,"Y":243},{"X":273,"Y":240},{"X":276,"Y":237},{"X":278,"Y":234},{"X":282,"Y":231},{"X":285,"Y":225},{"X":288,"Y":222},{"X":290,"Y":218},{"X":293,"Y":214},{"X":295,"Y":210},{"X":297,"Y":204},{"X":297,"Y":199},{"X":299,"Y":191},{"X":299,"Y":186},{"X":299,"Y":182},{"X":299,"Y":178},{"X":299,"Y":172},{"X":299,"Y":167},{"X":299,"Y":163},{"X":299,"Y":159},{"X":298,"Y":156},{"X":297,"Y":150},{"X":296,"Y":147},{"X":293,"Y":143},{"X":292,"Y":137},{"X":292,"Y":134},{"X":291,"Y":131},{"X":290,"Y":129},{"X":289,"Y":126},{"X":288,"Y":123},{"X":287,"Y":121},{"X":286,"Y":118},{"X":285,"Y":116},{"X":284,"Y":113},{"X":284,"Y":112},{"X":283,"Y":112},{"X":283,"Y":111},{"X":282,"Y":109},{"X":281,"Y":109},{"X":281,"Y":108},{"X":280,"Y":107},{"X":279,"Y":107},{"X":278,"Y":106},{"X":275,"Y":105},{"X":274,"Y":104},{"X":272,"Y":104},{"X":271,"Y":103},{"X":269,"Y":102},{"X":268,"Y":102},{"X":267,"Y":101},{"X":266,"Y":101},{"X":265,"Y":101},{"X":263,"Y":101}]]')
  });

  answers.push({
    "name" : "elip",
    "strokes" : JSON.parse('[[{"X":291,"Y":98},{"X":290,"Y":98},{"X":286,"Y":98},{"X":281,"Y":98},{"X":272,"Y":98},{"X":259,"Y":99},{"X":241,"Y":106},{"X":226,"Y":113},{"X":210,"Y":122},{"X":194,"Y":132},{"X":175,"Y":143},{"X":158,"Y":154},{"X":149,"Y":162},{"X":140,"Y":174},{"X":132,"Y":187},{"X":129,"Y":190},{"X":127,"Y":193},{"X":123,"Y":199},{"X":122,"Y":204},{"X":122,"Y":205},{"X":122,"Y":207},{"X":122,"Y":211},{"X":122,"Y":215},{"X":122,"Y":218},{"X":123,"Y":220},{"X":125,"Y":221},{"X":127,"Y":224},{"X":130,"Y":226},{"X":142,"Y":232},{"X":153,"Y":234},{"X":165,"Y":235},{"X":178,"Y":235},{"X":191,"Y":235},{"X":200,"Y":235},{"X":203,"Y":235},{"X":211,"Y":229},{"X":220,"Y":224},{"X":231,"Y":217},{"X":245,"Y":208},{"X":259,"Y":197},{"X":267,"Y":191},{"X":276,"Y":184},{"X":285,"Y":176},{"X":289,"Y":172},{"X":291,"Y":168},{"X":291,"Y":166},{"X":292,"Y":161},{"X":293,"Y":151},{"X":293,"Y":143},{"X":294,"Y":136},{"X":295,"Y":132},{"X":295,"Y":128},{"X":295,"Y":122},{"X":295,"Y":120},{"X":293,"Y":116},{"X":293,"Y":114},{"X":292,"Y":112},{"X":292,"Y":111},{"X":292,"Y":109},{"X":291,"Y":109},{"X":291,"Y":108},{"X":290,"Y":108},{"X":289,"Y":107},{"X":284,"Y":105},{"X":278,"Y":103},{"X":270,"Y":100},{"X":264,"Y":97},{"X":260,"Y":94}]]')
  });

  answers.push({
    "name" : "elip",
    "strokes" : JSON.parse('[[{"X":259,"Y":110},{"X":259,"Y":109},{"X":257,"Y":109},{"X":245,"Y":110},{"X":234,"Y":113},{"X":229,"Y":117},{"X":226,"Y":121},{"X":221,"Y":125},{"X":217,"Y":132},{"X":212,"Y":143},{"X":209,"Y":152},{"X":206,"Y":164},{"X":202,"Y":182},{"X":198,"Y":193},{"X":195,"Y":202},{"X":195,"Y":208},{"X":195,"Y":221},{"X":194,"Y":239},{"X":194,"Y":261},{"X":194,"Y":277},{"X":194,"Y":287},{"X":195,"Y":290},{"X":198,"Y":297},{"X":200,"Y":305},{"X":201,"Y":309},{"X":204,"Y":312},{"X":204,"Y":314},{"X":206,"Y":316},{"X":208,"Y":318},{"X":209,"Y":319},{"X":210,"Y":319},{"X":211,"Y":320},{"X":213,"Y":320},{"X":219,"Y":321},{"X":224,"Y":321},{"X":230,"Y":321},{"X":234,"Y":317},{"X":238,"Y":314},{"X":241,"Y":309},{"X":244,"Y":302},{"X":248,"Y":292},{"X":253,"Y":280},{"X":257,"Y":270},{"X":260,"Y":261},{"X":264,"Y":248},{"X":266,"Y":235},{"X":273,"Y":220},{"X":277,"Y":207},{"X":277,"Y":200},{"X":278,"Y":196},{"X":278,"Y":193},{"X":279,"Y":187},{"X":279,"Y":177},{"X":279,"Y":160},{"X":279,"Y":151},{"X":278,"Y":147},{"X":277,"Y":142},{"X":276,"Y":136},{"X":276,"Y":132},{"X":275,"Y":127},{"X":274,"Y":126},{"X":273,"Y":125},{"X":272,"Y":123},{"X":271,"Y":120},{"X":270,"Y":118},{"X":270,"Y":117},{"X":269,"Y":116},{"X":268,"Y":115},{"X":267,"Y":114},{"X":267,"Y":113},{"X":266,"Y":112},{"X":265,"Y":112}]]')
  });

  answers.push({
    "name" : "quiz1",
    "strokes" : JSON.parse('[[{"X":239,"Y":94},{"X":238,"Y":94},{"X":237,"Y":94},{"X":236,"Y":94},{"X":234,"Y":95},{"X":232,"Y":98},{"X":229,"Y":99},{"X":225,"Y":102},{"X":221,"Y":107},{"X":217,"Y":110},{"X":216,"Y":113},{"X":213,"Y":116},{"X":213,"Y":119},{"X":212,"Y":123},{"X":210,"Y":128},{"X":209,"Y":130},{"X":207,"Y":136},{"X":206,"Y":140},{"X":203,"Y":145},{"X":202,"Y":149},{"X":200,"Y":153},{"X":199,"Y":156},{"X":199,"Y":159},{"X":198,"Y":163},{"X":198,"Y":166},{"X":197,"Y":169},{"X":197,"Y":171},{"X":197,"Y":174},{"X":197,"Y":176},{"X":197,"Y":179},{"X":197,"Y":184},{"X":197,"Y":186},{"X":198,"Y":186},{"X":198,"Y":188},{"X":201,"Y":193},{"X":202,"Y":194},{"X":202,"Y":196},{"X":202,"Y":197},{"X":203,"Y":199},{"X":204,"Y":200},{"X":205,"Y":202},{"X":206,"Y":204},{"X":207,"Y":205},{"X":208,"Y":206},{"X":210,"Y":209},{"X":211,"Y":211},{"X":211,"Y":212},{"X":214,"Y":213},{"X":216,"Y":215},{"X":217,"Y":215},{"X":218,"Y":215},{"X":218,"Y":216},{"X":219,"Y":216},{"X":220,"Y":216},{"X":225,"Y":217},{"X":232,"Y":218},{"X":241,"Y":221},{"X":246,"Y":221},{"X":252,"Y":222},{"X":253,"Y":222},{"X":255,"Y":220},{"X":258,"Y":218},{"X":259,"Y":216},{"X":261,"Y":214},{"X":261,"Y":213},{"X":262,"Y":210},{"X":264,"Y":205},{"X":266,"Y":202},{"X":268,"Y":199},{"X":269,"Y":196},{"X":270,"Y":193},{"X":272,"Y":187},{"X":272,"Y":185},{"X":272,"Y":181},{"X":272,"Y":180},{"X":272,"Y":179},{"X":271,"Y":175},{"X":270,"Y":172},{"X":269,"Y":170},{"X":269,"Y":167},{"X":268,"Y":166},{"X":265,"Y":162},{"X":265,"Y":161},{"X":262,"Y":158},{"X":261,"Y":155},{"X":259,"Y":154},{"X":258,"Y":153},{"X":257,"Y":152},{"X":256,"Y":152},{"X":255,"Y":150},{"X":252,"Y":149},{"X":249,"Y":148},{"X":247,"Y":147},{"X":246,"Y":146},{"X":245,"Y":146},{"X":244,"Y":146},{"X":243,"Y":145},{"X":241,"Y":145},{"X":239,"Y":144},{"X":237,"Y":144},{"X":235,"Y":144},{"X":231,"Y":144},{"X":230,"Y":144},{"X":227,"Y":144},{"X":226,"Y":144},{"X":224,"Y":144},{"X":223,"Y":144},{"X":221,"Y":144},{"X":218,"Y":146},{"X":215,"Y":146},{"X":212,"Y":147},{"X":210,"Y":148},{"X":209,"Y":148},{"X":208,"Y":149},{"X":207,"Y":150},{"X":206,"Y":150},{"X":205,"Y":151},{"X":204,"Y":152},{"X":204,"Y":153},{"X":203,"Y":153},{"X":202,"Y":154}]]')
  });

  answers.push({
    "name" : "quiz1",
    "strokes" : JSON.parse('[[{"X":292,"Y":73},{"X":291,"Y":73},{"X":283,"Y":72},{"X":270,"Y":71},{"X":258,"Y":68},{"X":247,"Y":66},{"X":238,"Y":65},{"X":232,"Y":64},{"X":219,"Y":63},{"X":211,"Y":63},{"X":209,"Y":63},{"X":208,"Y":63},{"X":208,"Y":64},{"X":208,"Y":66},{"X":208,"Y":72},{"X":208,"Y":84},{"X":208,"Y":94},{"X":208,"Y":103},{"X":208,"Y":114},{"X":207,"Y":123},{"X":205,"Y":137},{"X":203,"Y":151},{"X":202,"Y":163},{"X":202,"Y":174},{"X":202,"Y":181},{"X":202,"Y":184},{"X":202,"Y":188},{"X":202,"Y":193},{"X":202,"Y":198},{"X":202,"Y":200},{"X":205,"Y":200},{"X":212,"Y":200},{"X":217,"Y":200},{"X":236,"Y":200},{"X":263,"Y":202},{"X":285,"Y":207},{"X":294,"Y":209},{"X":299,"Y":210},{"X":300,"Y":210},{"X":302,"Y":210},{"X":302,"Y":209},{"X":302,"Y":208},{"X":302,"Y":206},{"X":302,"Y":204},{"X":302,"Y":200},{"X":302,"Y":191},{"X":302,"Y":182},{"X":302,"Y":177},{"X":302,"Y":171},{"X":301,"Y":165},{"X":301,"Y":162},{"X":300,"Y":157},{"X":299,"Y":152},{"X":299,"Y":149},{"X":299,"Y":147},{"X":299,"Y":144},{"X":299,"Y":143},{"X":299,"Y":141},{"X":299,"Y":140},{"X":298,"Y":140},{"X":297,"Y":140},{"X":295,"Y":139},{"X":283,"Y":139},{"X":270,"Y":138},{"X":260,"Y":138},{"X":249,"Y":136},{"X":237,"Y":134},{"X":230,"Y":134},{"X":225,"Y":134},{"X":224,"Y":134},{"X":223,"Y":134},{"X":222,"Y":134},{"X":215,"Y":134},{"X":213,"Y":134}]]')
  });

  answers.push({
    "name" : "quiz1",
    "strokes" : JSON.parse('[[{"X":247,"Y":116},{"X":245,"Y":116},{"X":245,"Y":115},{"X":242,"Y":115},{"X":237,"Y":115},{"X":231,"Y":117},{"X":217,"Y":123},{"X":203,"Y":132},{"X":196,"Y":136},{"X":190,"Y":143},{"X":182,"Y":156},{"X":177,"Y":168},{"X":174,"Y":180},{"X":174,"Y":190},{"X":174,"Y":198},{"X":174,"Y":205},{"X":175,"Y":211},{"X":177,"Y":219},{"X":180,"Y":226},{"X":183,"Y":230},{"X":186,"Y":232},{"X":187,"Y":233},{"X":190,"Y":234},{"X":192,"Y":235},{"X":198,"Y":235},{"X":204,"Y":235},{"X":213,"Y":231},{"X":224,"Y":227},{"X":232,"Y":223},{"X":235,"Y":220},{"X":236,"Y":217},{"X":236,"Y":206},{"X":232,"Y":195},{"X":230,"Y":191},{"X":226,"Y":187},{"X":218,"Y":181},{"X":202,"Y":179},{"X":191,"Y":180},{"X":184,"Y":183},{"X":179,"Y":188},{"X":176,"Y":193}]]')
  });

  answers.push({
    "name" : "9",
    "strokes" : JSON.parse('[[{"X":270,"Y":91},{"X":270,"Y":90},{"X":270,"Y":88},{"X":269,"Y":86},{"X":267,"Y":85},{"X":265,"Y":82},{"X":262,"Y":82},{"X":260,"Y":81},{"X":259,"Y":81},{"X":257,"Y":81},{"X":253,"Y":81},{"X":237,"Y":81},{"X":220,"Y":82},{"X":206,"Y":85},{"X":199,"Y":87},{"X":197,"Y":88},{"X":196,"Y":89},{"X":196,"Y":90},{"X":196,"Y":92},{"X":196,"Y":93},{"X":196,"Y":96},{"X":196,"Y":100},{"X":196,"Y":101},{"X":196,"Y":105},{"X":196,"Y":109},{"X":197,"Y":111},{"X":198,"Y":114},{"X":199,"Y":115},{"X":200,"Y":117},{"X":201,"Y":120},{"X":203,"Y":122},{"X":204,"Y":124},{"X":208,"Y":127},{"X":209,"Y":129},{"X":212,"Y":131},{"X":213,"Y":132},{"X":214,"Y":133},{"X":215,"Y":133},{"X":215,"Y":134},{"X":217,"Y":134},{"X":218,"Y":136},{"X":219,"Y":136},{"X":221,"Y":136},{"X":223,"Y":136},{"X":225,"Y":136},{"X":227,"Y":136},{"X":229,"Y":136},{"X":232,"Y":135},{"X":237,"Y":133},{"X":243,"Y":131},{"X":251,"Y":128},{"X":259,"Y":124},{"X":261,"Y":122},{"X":264,"Y":120},{"X":268,"Y":117},{"X":271,"Y":112},{"X":272,"Y":108},{"X":272,"Y":104},{"X":273,"Y":100},{"X":273,"Y":97},{"X":273,"Y":92},{"X":273,"Y":89},{"X":273,"Y":87},{"X":273,"Y":86},{"X":272,"Y":84},{"X":272,"Y":85},{"X":272,"Y":88},{"X":272,"Y":96},{"X":272,"Y":112},{"X":272,"Y":135},{"X":272,"Y":151},{"X":272,"Y":165},{"X":271,"Y":179},{"X":267,"Y":196},{"X":263,"Y":208},{"X":261,"Y":217},{"X":258,"Y":224},{"X":254,"Y":232},{"X":253,"Y":239},{"X":251,"Y":243},{"X":251,"Y":244},{"X":250,"Y":244},{"X":249,"Y":245},{"X":247,"Y":246}]]')
  });

  answers.push({
    "name" : "9",
    "strokes" : JSON.parse('[[{"X":251,"Y":108},{"X":251,"Y":107},{"X":251,"Y":103},{"X":247,"Y":99},{"X":243,"Y":96},{"X":239,"Y":93},{"X":231,"Y":90},{"X":215,"Y":89},{"X":204,"Y":88},{"X":195,"Y":88},{"X":188,"Y":91},{"X":182,"Y":94},{"X":178,"Y":99},{"X":173,"Y":106},{"X":170,"Y":112},{"X":168,"Y":117},{"X":168,"Y":126},{"X":168,"Y":132},{"X":170,"Y":137},{"X":173,"Y":140},{"X":177,"Y":144},{"X":181,"Y":148},{"X":186,"Y":150},{"X":189,"Y":151},{"X":194,"Y":152},{"X":203,"Y":152},{"X":213,"Y":152},{"X":222,"Y":150},{"X":227,"Y":147},{"X":232,"Y":142},{"X":236,"Y":138},{"X":237,"Y":134},{"X":238,"Y":130},{"X":240,"Y":122},{"X":245,"Y":114},{"X":246,"Y":111},{"X":248,"Y":108},{"X":249,"Y":105},{"X":250,"Y":103},{"X":250,"Y":102},{"X":250,"Y":100},{"X":250,"Y":103},{"X":250,"Y":108},{"X":250,"Y":121},{"X":244,"Y":144},{"X":236,"Y":164},{"X":229,"Y":174},{"X":218,"Y":189},{"X":211,"Y":203},{"X":207,"Y":212},{"X":199,"Y":223},{"X":192,"Y":232},{"X":181,"Y":238},{"X":176,"Y":242},{"X":173,"Y":244},{"X":172,"Y":244}]]')
  });

  answers.push({
    "name" : "8",
    "strokes" : JSON.parse('[[{"X":241,"Y":93},{"X":241,"Y":92},{"X":240,"Y":92},{"X":238,"Y":90},{"X":231,"Y":89},{"X":220,"Y":89},{"X":212,"Y":89},{"X":209,"Y":89},{"X":206,"Y":90},{"X":205,"Y":92},{"X":203,"Y":99},{"X":200,"Y":104},{"X":200,"Y":107},{"X":200,"Y":113},{"X":200,"Y":116},{"X":203,"Y":121},{"X":206,"Y":128},{"X":212,"Y":136},{"X":219,"Y":141},{"X":233,"Y":149},{"X":245,"Y":155},{"X":257,"Y":159},{"X":260,"Y":161},{"X":261,"Y":162},{"X":261,"Y":163},{"X":262,"Y":164},{"X":262,"Y":168},{"X":262,"Y":173},{"X":261,"Y":182},{"X":257,"Y":189},{"X":252,"Y":193},{"X":242,"Y":197},{"X":236,"Y":199},{"X":224,"Y":201},{"X":216,"Y":201},{"X":208,"Y":201},{"X":204,"Y":200},{"X":199,"Y":196},{"X":197,"Y":191},{"X":196,"Y":185},{"X":196,"Y":176},{"X":201,"Y":168},{"X":208,"Y":158},{"X":216,"Y":149},{"X":222,"Y":142},{"X":232,"Y":134},{"X":239,"Y":129},{"X":247,"Y":124},{"X":251,"Y":121},{"X":254,"Y":116},{"X":254,"Y":115},{"X":254,"Y":110},{"X":254,"Y":108},{"X":254,"Y":106},{"X":253,"Y":105},{"X":252,"Y":103},{"X":251,"Y":102},{"X":251,"Y":101},{"X":249,"Y":101},{"X":246,"Y":100},{"X":245,"Y":100},{"X":243,"Y":99}]]')
  });

  answers.push({
    "name" : "quiz2",
    "strokes" : JSON.parse('[[{"X":128,"Y":273},{"X":128,"Y":272},{"X":129,"Y":270},{"X":131,"Y":266},{"X":133,"Y":258},{"X":136,"Y":249},{"X":140,"Y":241},{"X":146,"Y":231},{"X":151,"Y":218},{"X":154,"Y":213},{"X":155,"Y":212},{"X":155,"Y":210},{"X":157,"Y":207},{"X":160,"Y":199},{"X":162,"Y":192},{"X":164,"Y":184},{"X":167,"Y":175},{"X":169,"Y":167},{"X":171,"Y":165},{"X":182,"Y":130},{"X":184,"Y":125},{"X":186,"Y":121},{"X":188,"Y":117},{"X":190,"Y":114},{"X":191,"Y":111},{"X":192,"Y":108},{"X":194,"Y":103},{"X":195,"Y":102},{"X":195,"Y":101},{"X":196,"Y":99},{"X":196,"Y":98},{"X":197,"Y":95},{"X":198,"Y":93},{"X":199,"Y":92},{"X":199,"Y":91},{"X":200,"Y":91},{"X":200,"Y":93},{"X":201,"Y":96},{"X":204,"Y":99},{"X":206,"Y":104},{"X":208,"Y":109},{"X":210,"Y":115},{"X":213,"Y":124},{"X":217,"Y":132},{"X":218,"Y":138},{"X":220,"Y":143},{"X":222,"Y":149},{"X":224,"Y":155},{"X":225,"Y":159},{"X":226,"Y":163},{"X":227,"Y":167},{"X":228,"Y":171},{"X":229,"Y":176},{"X":232,"Y":182},{"X":233,"Y":186},{"X":234,"Y":188},{"X":236,"Y":193},{"X":236,"Y":196},{"X":238,"Y":200},{"X":238,"Y":203},{"X":239,"Y":206},{"X":241,"Y":210},{"X":242,"Y":214},{"X":244,"Y":217},{"X":245,"Y":221},{"X":246,"Y":222},{"X":246,"Y":224},{"X":247,"Y":229},{"X":248,"Y":231},{"X":249,"Y":233},{"X":249,"Y":234},{"X":250,"Y":235},{"X":250,"Y":236},{"X":251,"Y":237},{"X":251,"Y":238},{"X":253,"Y":240},{"X":254,"Y":242},{"X":255,"Y":244},{"X":255,"Y":245},{"X":257,"Y":246},{"X":259,"Y":250},{"X":260,"Y":251},{"X":260,"Y":252},{"X":261,"Y":252},{"X":261,"Y":253},{"X":262,"Y":253},{"X":262,"Y":254},{"X":263,"Y":254},{"X":263,"Y":256},{"X":264,"Y":257},{"X":265,"Y":257},{"X":265,"Y":258},{"X":265,"Y":259},{"X":265,"Y":260},{"X":266,"Y":260},{"X":267,"Y":262},{"X":268,"Y":263},{"X":268,"Y":264}],[{"X":159,"Y":165},{"X":160,"Y":165},{"X":161,"Y":165},{"X":165,"Y":165},{"X":169,"Y":165},{"X":172,"Y":165},{"X":177,"Y":165},{"X":180,"Y":165},{"X":182,"Y":164},{"X":185,"Y":164},{"X":190,"Y":164},{"X":192,"Y":163},{"X":194,"Y":163},{"X":197,"Y":163},{"X":200,"Y":163},{"X":203,"Y":163},{"X":206,"Y":163},{"X":210,"Y":163},{"X":213,"Y":163},{"X":214,"Y":163},{"X":215,"Y":163},{"X":216,"Y":163},{"X":217,"Y":163},{"X":218,"Y":163},{"X":219,"Y":163},{"X":221,"Y":163},{"X":223,"Y":163},{"X":224,"Y":163},{"X":225,"Y":163},{"X":227,"Y":163},{"X":228,"Y":163},{"X":229,"Y":163}]]')
  });

  answers.push({
    "name" : "quiz2",
    "strokes" : JSON.parse('[[{"X":220,"Y":46},{"X":222,"Y":45},{"X":222,"Y":46},{"X":222,"Y":51},{"X":217,"Y":64},{"X":209,"Y":82},{"X":199,"Y":109},{"X":191,"Y":138},{"X":180,"Y":166},{"X":172,"Y":195},{"X":162,"Y":223},{"X":156,"Y":236},{"X":155,"Y":242},{"X":155,"Y":245},{"X":155,"Y":246},{"X":156,"Y":246},{"X":157,"Y":245},{"X":158,"Y":244},{"X":161,"Y":237}],[{"X":209,"Y":46},{"X":210,"Y":46},{"X":214,"Y":51},{"X":219,"Y":55},{"X":225,"Y":61},{"X":233,"Y":69},{"X":238,"Y":75},{"X":244,"Y":85},{"X":249,"Y":97},{"X":256,"Y":118},{"X":266,"Y":142},{"X":272,"Y":155},{"X":273,"Y":156},{"X":275,"Y":162},{"X":276,"Y":164},{"X":276,"Y":165},{"X":276,"Y":167},{"X":278,"Y":172},{"X":278,"Y":174},{"X":279,"Y":175},{"X":280,"Y":179},{"X":281,"Y":182},{"X":282,"Y":183},{"X":283,"Y":187},{"X":284,"Y":193},{"X":288,"Y":197},{"X":290,"Y":200},{"X":291,"Y":203},{"X":292,"Y":205},{"X":295,"Y":209},{"X":297,"Y":213},{"X":300,"Y":218},{"X":301,"Y":221},{"X":302,"Y":222},{"X":303,"Y":225},{"X":304,"Y":227},{"X":305,"Y":230},{"X":306,"Y":232},{"X":306,"Y":233},{"X":306,"Y":234}],[{"X":175,"Y":120},{"X":177,"Y":120},{"X":179,"Y":120},{"X":186,"Y":120},{"X":195,"Y":120},{"X":209,"Y":120},{"X":222,"Y":120},{"X":237,"Y":120},{"X":240,"Y":120},{"X":243,"Y":120},{"X":246,"Y":120},{"X":248,"Y":120},{"X":250,"Y":119},{"X":251,"Y":119},{"X":252,"Y":119},{"X":253,"Y":119},{"X":254,"Y":119},{"X":255,"Y":119},{"X":256,"Y":119}]]')
  });

  answers.push({
    "name" : "quiz2",
    "strokes" : JSON.parse('[[{"X":222,"Y":92},{"X":222,"Y":93},{"X":222,"Y":94},{"X":222,"Y":107},{"X":217,"Y":124},{"X":212,"Y":140},{"X":203,"Y":162},{"X":193,"Y":183},{"X":184,"Y":211},{"X":181,"Y":220},{"X":172,"Y":251},{"X":167,"Y":262},{"X":165,"Y":272}],[{"X":198,"Y":107},{"X":199,"Y":107},{"X":203,"Y":107},{"X":213,"Y":119},{"X":230,"Y":139},{"X":248,"Y":163},{"X":265,"Y":183},{"X":275,"Y":200},{"X":284,"Y":217},{"X":290,"Y":228},{"X":295,"Y":236},{"X":297,"Y":241},{"X":298,"Y":244},{"X":299,"Y":247},{"X":301,"Y":252},{"X":303,"Y":255},{"X":303,"Y":257},{"X":304,"Y":257}],[{"X":174,"Y":182},{"X":174,"Y":182},{"X":190,"Y":185},{"X":210,"Y":188},{"X":234,"Y":190},{"X":255,"Y":190},{"X":276,"Y":190},{"X":293,"Y":190},{"X":299,"Y":190},{"X":301,"Y":190},{"X":302,"Y":190},{"X":303,"Y":190}]]')
  });

  return answers;
}

// doan nay file nao cung~ the
var event;
if (document.createEvent) {
  event = document.createEvent("HTMLEvents");
  event.initEvent("answersloaded", true, true);
} else {
  event = document.createEventObject();
  event.eventType = "answersloaded";
}

if (document.createEvent) {
  if(typeof document.getElementsByTagName('canvas')[0] != 'undefined')
    document.getElementsByTagName('canvas')[0].dispatchEvent(event);
} else {
  document.getElementsByTagName('canvas')[0].fireEvent("on" + event.eventType, event);
}
