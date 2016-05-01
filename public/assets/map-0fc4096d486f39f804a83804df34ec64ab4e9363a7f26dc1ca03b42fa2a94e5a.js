function initMap(){map=new google.maps.Map(document.getElementById("map"),{center:{lat:42.366719,lng:-71.258604},zoom:16,icon:brandeis_logo}),createSidebar(json_array),map.data.addGeoJson(test),map.data.setStyle(function(e){var o=e.getProperty("color");return{fillColor:o,strokeColor:o,strokeWeight:2}}),map.data.addListener("mouseover",function(e){map.data.revertStyle(),map.data.overrideStyle(e.feature,{strokeWeight:8})}),map.data.addListener("mouseout",function(){map.data.revertStyle()}),map.data.addListener("click",function(){window.location.href="/quads/1#ziv 127"})}function createSidebar(e){initialized=!0,_.each(e,function(e){var o=$("<div class='pointer'>"+e.name+"</div>");o.appendTo("#sidebar_container"),o.on("click",function(){createForSideBar(e)})})}function createForSideBar(e){controlMarkers(markers,ifKeep),null==ifKeep&&(markers=[]);var o=create(e);o.setMap(map),map.panTo({lat:e.lat,lng:e.lng}),markers.push(o)}function controlMarkers(e,o){for(var t=0;t<e.length;t++)e[t].setMap(o)}function create(e){var o=new google.maps.InfoWindow({content:e.infowindow}),t={lat:e.lat,lng:e.lng},r=new google.maps.Marker({position:t,animation:google.maps.Animation.DROP,map:map});return r.addListener("click",function(){o.open(map,r)}),r}function create_interest_marker(e){for(var o=0;o<e.length;o++){var t=new google.maps.InfoWindow({content:e[o].infowindow}),r={lat:e[o].lat,lng:e[o].lng},n=donut;"Starbucks"===e[o].name?n=starbucks:"Einstein Bros Bagels"===e[o].name&&(n=einstein);var a=new google.maps.Marker({position:r,map:map,icon:n});a.addListener("click",function(){t.open(map,a)}),interest_markers.push(a)}firstTime=!1}function show(e){firstTime&&create_interest_marker(e),controlMarkers(interest_markers,map);for(var o=0;o<interest_markers.length;o++){var t=interest_markers[o];t.setAnimation(google.maps.Animation.BOUNCE),stopAnimation(t)}map.panTo({lat:42.366719,lng:-71.258604})}function stopAnimation(e){setTimeout(function(){e.setAnimation(null)},1420)}function hide(){controlMarkers(interest_markers,null)}function keepMarkers(e){e.checked?ifKeep=map:(ifKeep=null,controlMarkers(markers,ifKeep),markers=[])}function interestMarkersBox(e){e.checked?show(places_of_interest):hide(places_of_interest)}var test={type:"FeatureCollection",features:[{type:"Feature",properties:{name:"Ridgewood A",color:"blue"},geometry:{type:"Polygon",coordinates:[[[-71.260632,42.364164],[-71.260732,42.364025],[-71.260328,42.363883],[-71.260309,42.364038],[-71.260632,42.364164]]]}},{type:"Feature",properties:{naem:"Ridgewood B",color:"blue"},geometry:{type:"Polygon",coordinates:[[[-71.260888,42.363692],[-71.261032,42.363591],[-71.260551,42.363424],[-71.260446,42.363567],[-71.260888,42.363692]]]}},{type:"Feature",properties:{name:"Ridgewood C",color:"blue"},geometry:{type:"Polygon",coordinates:[[[-71.261439,42.363941],[-71.261404,42.363784],[-71.260931,42.36384],[-71.260856,42.363981],[-71.261439,42.363941]]]}},{type:"Feature",properties:{name:"Village A",color:"red"},geometry:{type:"Polygon",coordinates:[[[-71.260149,42.363832],[-71.259809,42.363769],[-71.259844,42.363509],[-71.260044,42.363529],[-71.260058,42.363408],[-71.260155,42.363446],[-71.260139,42.363628],[-71.260018,42.363614],[-71.260013,42.363677],[-71.260131,42.363705],[-71.260149,42.363832]]]}},{type:"Feature",properties:{name:"Villiage B",color:"red"},geometry:{type:"Polygon",coordinates:[[[-71.26028307247907,42.36349277578464],[-71.26030050683767,42.36339764722126],[-71.26020797062665,42.36336692859189],[-71.26024954486638,42.363299545739395],[-71.26035146880895,42.363333237174686],[-71.26040108967572,42.363254954106104],[-71.26044534612447,42.36318063464693],[-71.26035146880895,42.363150906838634],[-71.26030184794217,42.36322126262883],[-71.26013823319227,42.363166761671486],[-71.26003899145871,42.36332927347734],[-71.26002692151815,42.36332729162858],[-71.26002021599561,42.3633570193534],[-71.25999741721898,42.36339269260463],[-71.26028307247907,42.36349277578464]]]}},{type:"Feature",properties:{name:"Village C",color:"red"},geometry:{type:"Polygon",coordinates:[[[-71.26044534612447,42.363178652793486],[-71.26062237191945,42.36315487054725],[-71.26065053511411,42.36310631509987],[-71.26067601609975,42.36307460539968],[-71.26072295475751,42.362992358290256],[-71.26073502469808,42.36299830386804],[-71.2607739167288,42.36294082992588],[-71.26075916457921,42.362939838995395],[-71.26077123451978,42.36291605665875],[-71.26065359450877,42.36286651009514],[-71.2605516705662,42.36303298639391],[-71.2604604754597,42.36304289568349],[-71.26043097116053,42.36295965760239],[-71.26037732698023,42.36296758504343],[-71.26030222512782,42.362969566903544],[-71.26035050489008,42.36314793405707],[-71.26044534612447,42.363178652793486]]]}},{type:"Feature",properties:{name:"Ziv A",color:"yellow"},geometry:{type:"Polygon",coordinates:[[[-71.26164563465863,42.36354727645917],[-71.26173548866063,42.363414492914856],[-71.26175158191472,42.3634184566068],[-71.26182534266263,42.363302518513834],[-71.26172341872007,42.36326783613674],[-71.26166977453977,42.36335008288553],[-71.26148067880422,42.36328369094008],[-71.26143374014646,42.36336296489667],[-71.26157455611974,42.363412511068766],[-71.26158394385129,42.36340061999104],[-71.26161478925496,42.36340953829955],[-71.26154505182058,42.363511603295734],[-71.26164563465863,42.36354727645917]]]}},{type:"Feature",properties:{name:"Ziv B",color:"yellow"},geometry:{type:"Polygon",coordinates:[[[-71.26149140764028,42.36320243503073],[-71.26158126164228,42.363058750543594],[-71.26168989110738,42.363093433036084],[-71.26173414755613,42.36301514966871],[-71.26159199047834,42.36296560318324],[-71.2615852849558,42.36298145806286],[-71.26138948369771,42.36291407479696],[-71.26133986283094,42.362991367360564],[-71.26148738432676,42.36304289568349],[-71.2614766554907,42.36305974147223],[-71.26146190334111,42.36305280497154],[-71.26139082480222,42.363165770744565],[-71.26149140764028,42.36320243503073]]]}},{type:"Feature",properties:{name:"Ziv C",color:"yellow"},geometry:{type:"Polygon",coordinates:[[[-71.261081029661,42.36297551248348],[-71.26106493640691,42.36296758504343],[-71.26108505297452,42.36294281178683],[-71.26122318673879,42.36299434014958],[-71.26126744318753,42.36292299317452],[-71.26107566524297,42.36285164611845],[-71.26108505297452,42.36284173679872],[-71.26094155479223,42.36279020831079],[-71.26089461613446,42.36286651009514],[-71.26100458670408,42.36290614734914],[-71.26091339159757,42.36304586847007],[-71.26101263333112,42.363083523754476],[-71.261081029661,42.36297551248348]]]}},{type:"Feature",properties:{name:"Ziv D",color:"yellow"},geometry:{type:"Polygon",coordinates:[[[-71.26108907628804,42.36334909196148],[-71.26094557810575,42.363300536664205],[-71.26095898915082,42.36328170908986],[-71.2609724001959,42.36328567279021],[-71.26103543210775,42.36317667093997],[-71.26094155479223,42.363142979420736],[-71.26084901858121,42.363288645565284],[-71.26074173022062,42.36324999947822],[-71.26069747377187,42.36332630070417],[-71.26084231305867,42.36337584690517],[-71.26085304189473,42.36335999212511],[-71.26103945542127,42.36342539306712],[-71.26108907628804,42.36334909196148]]]}},{type:"Feature",properties:{name:"Massell Usen",color:"black"},geometry:{type:"Polygon",coordinates:[[[-71.26063846517354,42.36736022447007],[-71.26067601609975,42.36700747704028],[-71.26051374245435,42.36700054097547],[-71.26047485042363,42.3673522975833],[-71.26063846517354,42.36736022447007]]]}},{type:"Feature",properties:{name:"Massell Renfield",color:"black"},geometry:{type:"Polygon",coordinates:[[[-71.26123257447034,42.36759307632295],[-71.2612795131281,42.36749200881621],[-71.2608476774767,42.367375087380104],[-71.26079939771444,42.367477145933854],[-71.26123257447034,42.36759307632295]]]}},{type:"Feature",properties:{name:"Massell Deroy",color:"black"},geometry:{type:"Polygon",coordinates:[[[-71.26153700519353,42.36752867057765],[-71.26177706290036,42.36729879107136],[-71.26166709233075,42.36723537588713],[-71.2614243524149,42.36746327390716],[-71.26153700519353,42.36752867057765]]]}},{type:"Feature",properties:{name:"Massel Shapiro",color:"black"},geometry:{type:"Polygon",coordinates:[[[-71.2614528927952,42.36714718904012],[-71.26165942288935,42.36705602947262],[-71.26120881177485,42.36650708754125],[-71.26124099828303,42.36648925180237],[-71.26116053201258,42.36638620076747],[-71.26105324365199,42.366437726306046],[-71.26114443875849,42.366556631233784],[-71.26109884120524,42.36657843044614],[-71.26144752837718,42.36701044963926],[-71.26141265965998,42.367030266962196],[-71.26142607070506,42.367052066010174],[-71.26138851977885,42.36706990158924],[-71.2614528927952,42.36714718904012]]]}},{type:"Feature",properties:{name:"North Pomerantz",color:"grey"},geometry:{type:"Polygon",coordinates:[[[-71.25476710963994,42.36802409768789],[-71.25484757591039,42.36794383876127],[-71.25483684707433,42.367939875354836],[-71.25481538940221,42.367953747276296],[-71.25477247405797,42.367914113206865],[-71.25480197835714,42.367896277867466],[-71.25468396116048,42.367791247432756],[-71.25466250348836,42.367808091948255],[-71.25462092924863,42.367769448641276],[-71.25463836360723,42.36775854924268],[-71.25463165808469,42.36773972300433],[-71.25460885930806,42.36774269556867],[-71.2545967893675,42.367698107088984],[-71.25463031698018,42.36769315281153],[-71.25462361145765,42.36765649114609],[-71.25448145437986,42.367674326553576],[-71.2544881599024,42.367714951629495],[-71.25450022984296,42.36771098820858],[-71.25450827647,42.36775359496998],[-71.25449888873845,42.36775656753365],[-71.25453912187368,42.3678219638988],[-71.25454582739621,42.367815027923925],[-71.25458740163594,42.36785565290882],[-71.2545793550089,42.3678635797321],[-71.254687984474,42.36796464664099],[-71.25469871331006,42.36795870153319],[-71.2547416286543,42.36799734472377],[-71.25473224092275,42.368004280678534],[-71.25476710963994,42.36802409768789]]]}},{type:"Feature",properties:{name:"East Hassenfeld",color:"grey"},geometry:{type:"Polygon",coordinates:[[[-71.25517260516062,42.36819947794854],[-71.25527318799868,42.368132595703514],[-71.2552034505643,42.36807463103357],[-71.25521753216162,42.36806571338729],[-71.2551410892047,42.36802310683758],[-71.25513706589118,42.368035987890565],[-71.25507403397933,42.36801617088489],[-71.25507805729285,42.36800725323034],[-71.25491176033393,42.367959196958886],[-71.2548990198411,42.36798198653549],[-71.25484738731757,42.36796613291783],[-71.25485610449687,42.36794928844472],[-71.2548453756608,42.36794433418706],[-71.25477362656966,42.368025583963366],[-71.25480849528685,42.36804441011605],[-71.2548091658391,42.3680394558659],[-71.25486079836264,42.36805481404012],[-71.25485744560137,42.36806125456366],[-71.2550324597396,42.36810980618155],[-71.25504318857566,42.3680904846238],[-71.25510286772624,42.36810683363458],[-71.25509951496497,42.36812070551917],[-71.25511627877131,42.36813210027923],[-71.25513170147315,42.36812417348984],[-71.25516992295161,42.36815786233779],[-71.25514444196597,42.36817421133101],[-71.25517260516062,42.36819947794854]]]}},{type:"Feature",properties:{name:"Castle",color:"blue"},geometry:{type:"Polygon",coordinates:[[[-71.25591949559748,42.36761487517561],[-71.25602141954005,42.367472191638974],[-71.25596777535975,42.36743453898498],[-71.25594899989665,42.367464264766326],[-71.2558873090893,42.3674385024233],[-71.25580147840083,42.36755542374139],[-71.25569150783122,42.36744048414237],[-71.25573978759348,42.367398868028786],[-71.25575051642954,42.36735725188763],[-71.25573710538447,42.36732554433302],[-71.2557961139828,42.36731959916477],[-71.25576392747462,42.36723834847532],[-71.25574515201151,42.36723834847532],[-71.2557236943394,42.36722249467001],[-71.25569687224925,42.367234385024354],[-71.25567809678614,42.36725816572635],[-71.25557617284358,42.367266092624966],[-71.25557080842555,42.36721853121805],[-71.25564322806895,42.36721853121805],[-71.25562713481486,42.367032248694116],[-71.25555471517146,42.36703423042601],[-71.25555203296244,42.3670163948368],[-71.25557349063456,42.36699459577645],[-71.25564859248698,42.366992614043305],[-71.25576929189265,42.36698865057684],[-71.25576660968363,42.367030266962196],[-71.25593022443354,42.36702234003378],[-71.25590876676142,42.36697279670852],[-71.25588999129832,42.36697279670852],[-71.25588999129832,42.36694307069461],[-71.25589267350733,42.36691334466663],[-71.25586316920817,42.36691928987335],[-71.25564322806895,42.36692721681477],[-71.25564054585993,42.36689947251543],[-71.2555815372616,42.36689947251543],[-71.25554130412638,42.366871728203854],[-71.25548497773707,42.366865782992626],[-71.25542060472071,42.36688560036118],[-71.25540987588465,42.366915326402264],[-71.25539914704859,42.366954961101854],[-71.2554179225117,42.36698865057684],[-71.25545010901988,42.36701441310434],[-71.25547693111002,42.36702234003378],[-71.25547961331904,42.36720465913424],[-71.25551716424525,42.36720267740774],[-71.25552252866328,42.36729581848606],[-71.25549570657313,42.367339416390145],[-71.25549302436411,42.367379050822166],[-71.25550643540919,42.36741670350941],[-71.2555439863354,42.367444447580304],[-71.25560835935175,42.36746228304799],[-71.25574515201151,42.367622802029274],[-71.25579074956477,42.36769018024487],[-71.25580416060984,42.367713960774275],[-71.2558497581631,42.36771594248467],[-71.25587926246226,42.36769414366705],[-71.25587658025324,42.36767036313012],[-71.25590072013438,42.367676308265196],[-71.2559409532696,42.36762478374252],[-71.25591949559748,42.36761487517561]]]}},{type:"Feature",properties:{name:"567 South Street",color:"red"},geometry:{type:"Polygon",coordinates:[[[-71.26157589722425,42.36141378748323],[-71.2617113487795,42.36124334306523],[-71.26154505182058,42.36116902122654],[-71.26141094136983,42.361337483934655],[-71.26157589722425,42.36141378748323]]]}},{type:"Feature",properties:{name:"Ollie A. Cohen, 164 Charles River Road",color:"green"},geometry:{type:"Polygon",coordinates:[[[-71.25780471134931,42.35986193345562],[-71.25777386594564,42.35979851076446],[-71.25775911379606,42.35980346566453],[-71.25774704385549,42.35978364606194],[-71.25776179600507,42.35977869116033],[-71.25771619845182,42.35969445777309],[-71.25770144630224,42.359701394644546],[-71.25769071746618,42.35968058402787],[-71.25771083403379,42.35967562911814],[-71.25766657758504,42.35959635050913],[-71.25765048433095,42.359599323458774],[-71.25763841439039,42.359575539857666],[-71.25765450764447,42.359569593956],[-71.25760354567319,42.35947644142293],[-71.25759147573262,42.359482387333415],[-71.25757538247854,42.35946157664422],[-71.25759415794164,42.359456621717214],[-71.2575499014929,42.359374369871716],[-71.2575338082388,42.35938031579189],[-71.25752307940274,42.359356532107924],[-71.25754185486585,42.3593505861855],[-71.25749491620809,42.3592713071664],[-71.25748150516301,42.359276262108004],[-71.25747192883864,42.359258919810614],[-71.25748802209273,42.35925297387898],[-71.25743437791243,42.35915288394527],[-71.25741962576285,42.3591588298864],[-71.25740889692679,42.359141487556585],[-71.2574276723899,42.35913554161383],[-71.25739079201594,42.35906864971912],[-71.25727478647605,42.35910432540518],[-71.25730764353648,42.35916527132197],[-71.25732306623831,42.3591588298864],[-71.25733580673113,42.359184595624704],[-71.25732507789508,42.35918905507834],[-71.25737201655284,42.35928567649602],[-71.25739749753848,42.3592792350728],[-71.25740621471778,42.35930004582237],[-71.25739079201594,42.35930351427997],[-71.25743236625567,42.35938229776514],[-71.2574477889575,42.35937783832523],[-71.25745918834582,42.35940063101482],[-71.2574377306737,42.3594065769325],[-71.25747930491343,42.359488828735806],[-71.25749204540625,42.35948436930345],[-71.25750076258555,42.359503693508074],[-71.25748601043597,42.359508648431365],[-71.2575376429595,42.35960378288297],[-71.25756312394515,42.35959684600075],[-71.25757452333346,42.3596211250852],[-71.25756178284064,42.35962558450784],[-71.25760201597586,42.35970634955227],[-71.25760805094615,42.35970436758921],[-71.25762012088671,42.35972616917919],[-71.25761341536418,42.35972914212269],[-71.2576549896039,42.359809411544056],[-71.2576623656787,42.359806438604345],[-71.25767309451476,42.35982972662828],[-71.25766035402194,42.35983418603611],[-71.25769186997786,42.35989612222354],[-71.25780471134931,42.35986193345562]]]}},{type:"Feature",properties:{name:"Max and Ann Coffman, 150 Charles River Road",color:"green"},geometry:{type:"Polygon",coordinates:[[[-71.25747662270442,42.35993972526285],[-71.25742297852412,42.35988026656536],[-71.25740688527003,42.359889185373575],[-71.25738945091143,42.35986986128752],[-71.25740487361327,42.3598599514975],[-71.25733983004466,42.3597920693938],[-71.25732843065634,42.35979801527443],[-71.25731166685,42.35978017763086],[-71.25731770182028,42.35977324076809],[-71.25723388278857,42.35968900737355],[-71.2572204717435,42.35969743071811],[-71.25720236683264,42.35967860206403],[-71.25720773125067,42.359669187734916],[-71.25714268768206,42.359601800916685],[-71.25712994718924,42.35960972878143],[-71.25711184227839,42.35959040460942],[-71.2571232416667,42.359580494775315],[-71.25704881036654,42.35950171153863],[-71.25703606987372,42.359504684492755],[-71.25702802324668,42.359496756614774],[-71.25706557417288,42.35947693691551],[-71.25692408764735,42.35932878446524],[-71.2567812600173,42.3594031084806],[-71.25691134715453,42.35954184640738],[-71.25694152200595,42.35952450418333],[-71.25695828581229,42.35954234189943],[-71.25694755697623,42.35954878329569],[-71.25703003490344,42.35963797179134],[-71.25704277539626,42.359631530404215],[-71.25705752754584,42.35964986358118],[-71.25704746926203,42.359654323001806],[-71.25711050117388,42.359725673688594],[-71.25712659442797,42.35971824132916],[-71.25714268768206,42.35973855644285],[-71.25713397050276,42.359742520366694],[-71.25721376622096,42.35982824015892],[-71.25723723554984,42.359815852912924],[-71.25725466990843,42.35984013191276],[-71.25724528217688,42.35984409583019],[-71.25730630243197,42.359913464345055],[-71.25731837237254,42.35990900494284],[-71.25733714783564,42.35992882450586],[-71.25732574844733,42.35993477037353],[-71.25737671041861,42.35999175157698],[-71.25747662270442,42.35993972526285]]]}},{type:"Feature",properties:{name:"George E. Lewis, 178 Charles River Road",color:"green"},geometry:{type:"Polygon",coordinates:[[[-71.25717755639926,42.3601299927167],[-71.2571044662036,42.360086885297164],[-71.25709373736754,42.360096795051405],[-71.2570695974864,42.36008093944387],[-71.25707898521796,42.3600690477356],[-71.25697035575286,42.360008102695396],[-71.25696230912581,42.36001702148547],[-71.25693548703566,42.360002652323075],[-71.25694085145369,42.35999175157698],[-71.25684965634719,42.359940716240665],[-71.25683557474986,42.35995359895082],[-71.25681076431647,42.35993972526285],[-71.25681881094351,42.35992733803885],[-71.25671286368743,42.35986887030858],[-71.25670347595587,42.35987580716078],[-71.25667732441798,42.359860942476566],[-71.25668335938826,42.35985152817475],[-71.256590152625,42.35979900625448],[-71.2565814354457,42.35980742958428],[-71.25656198943034,42.35979702429437],[-71.2565653421916,42.35978909645329],[-71.25648353481665,42.35974301585716],[-71.25640910351649,42.35981733938256],[-71.25649024033919,42.359866392861186],[-71.2565016397275,42.35985351013312],[-71.25652309739962,42.35986738384014],[-71.25651370966807,42.35987332971365],[-71.25660691643134,42.359929815483845],[-71.25661831581965,42.35991742825788],[-71.25664312625304,42.35993427488459],[-71.25663910293952,42.35993823879609],[-71.25674907350913,42.36000314781147],[-71.25675779068843,42.35999571548488],[-71.25678260112181,42.360010084648856],[-71.25677388394251,42.36001652599716],[-71.25686172628775,42.36007053419926],[-71.25687312567607,42.360061119928844],[-71.25690195942298,42.36007697554137],[-71.2568972655572,42.360081434931665],[-71.25700723612681,42.36014634379914],[-71.25701394164935,42.3601394069768],[-71.25703741097823,42.3601532806207],[-71.25703003490344,42.360159226467154],[-71.25710580730811,42.360202829323875],[-71.25717755639926,42.3601299927167]]]}},{type:"Feature",properties:{name:"Morton May, 110 Angleside Road",color:"green"},geometry:{type:"Polygon",coordinates:[[[-71.25699449563399,42.360437194160475],[-71.2569160410203,42.36040251020173],[-71.256907323841,42.36041489733205],[-71.25688050175086,42.36040449214275],[-71.25688988948241,42.36039160952502],[-71.25678528333083,42.36035197068468],[-71.25677924836054,42.36036435782497],[-71.25675510847941,42.36035444811294],[-71.25675712013617,42.36034503388505],[-71.25665050232783,42.360305890501365],[-71.25664580846205,42.3603143137632],[-71.25661563361064,42.360303908557235],[-71.2566189863719,42.36029697175229],[-71.25649627530947,42.360247423123354],[-71.2564842053689,42.36026129674339],[-71.25646207714453,42.36025386444732],[-71.25647213542834,42.360236026933165],[-71.25634405994788,42.36018895569092],[-71.25633266055956,42.360202829323875],[-71.25630919123068,42.36019589250781],[-71.25631388509646,42.36018895569092],[-71.25622403109446,42.360153776107914],[-71.25617172801867,42.36023107206723],[-71.25625420594588,42.36026278320251],[-71.25626091146842,42.36025634187946],[-71.25629510963336,42.36026773806596],[-71.25629041576758,42.36027417938784],[-71.25641446793452,42.36032273702392],[-71.25642251456156,42.36031332279129],[-71.25644129002467,42.36031976410849],[-71.25643659615889,42.36032769188263],[-71.25656467163935,42.360379717875546],[-71.2565740593709,42.36036633976718],[-71.25660356367007,42.360378231419205],[-71.25659685814753,42.360387150156726],[-71.25669945264235,42.36042827543005],[-71.25671152258292,42.36041341087657],[-71.25674102688208,42.360426293489795],[-71.25673365080729,42.360435707705506],[-71.25683423364535,42.36047386003893],[-71.25684093916789,42.36046642776801],[-71.25686642015353,42.36047633746238],[-71.2568610557355,42.360484265216755],[-71.25694085145369,42.360515480739885],[-71.25699449563399,42.360437194160475]]]}},{type:"Feature",properties:{name:"Upper Mods",color:"orange"},geometry:{type:"Polygon",coordinates:[[[-71.25421369448304,42.36627026815116],[-71.25417480245233,42.36623261477674],[-71.25427404418588,42.36617018939575],[-71.25422844663262,42.36612857244065],[-71.2542431987822,42.366116681876996],[-71.25420028343797,42.36607803752953],[-71.25418955460191,42.36608695545797],[-71.25414932146668,42.366042365803054],[-71.25412518158555,42.366056238143535],[-71.25403935089707,42.36597894935047],[-71.25394413247705,42.366044347566195],[-71.25384220853448,42.36608893721968],[-71.2537550367415,42.366011648466845],[-71.25365981832147,42.36607407400536],[-71.25363165512681,42.36605524726218],[-71.25353375449777,42.366120645398446],[-71.25354984775186,42.36614046300208],[-71.25349754467607,42.36616523499779],[-71.25358471646905,42.366237569169385],[-71.25352839007974,42.366274231662935],[-71.25361958518624,42.366352510969406],[-71.25363701954484,42.36634656570904],[-71.25367725268006,42.366379264634055],[-71.2537013925612,42.36636539236491],[-71.25374028459191,42.36640304565972],[-71.2538448907435,42.366338638694344],[-71.25389451161027,42.36630792150298],[-71.2539548613131,42.36636539236491],[-71.25400984659791,42.36633368430966],[-71.25403130427003,42.36635350184608],[-71.2540795840323,42.366324766416255],[-71.25410104170442,42.36634161132497],[-71.25421369448304,42.36627026815116]]]}},{type:"Feature",properties:{name:"Lower Mods",color:"orange"},geometry:{type:"Polygon",coordinates:[[[-71.25370005145669,42.36594525933401],[-71.25367188826203,42.36591553283389],[-71.2537751533091,42.36585607979143],[-71.25369602814317,42.36577680898062],[-71.25358739867806,42.36584418917618],[-71.2536128796637,42.365870943057324],[-71.25350693240762,42.36592742343563],[-71.2534143961966,42.36583824386773],[-71.25343719497323,42.365821398824],[-71.25335806980729,42.36574906417321],[-71.25332588329911,42.36576987277993],[-71.25327760353684,42.36572627378653],[-71.25324139371514,42.365751045945586],[-71.2531984783709,42.36571141048643],[-71.2531783618033,42.3657242920134],[-71.2530898489058,42.365642048372706],[-71.2530710734427,42.36563412126913],[-71.2531783618033,42.36557169529343],[-71.25320384278893,42.36559349484755],[-71.253304425627,42.3655320597211],[-71.25322530046105,42.36545873384639],[-71.25312203541398,42.36551620548517],[-71.25310325995088,42.365496387684644],[-71.25298792496324,42.36555980462433],[-71.25300670042634,42.365575658849274],[-71.25295171514153,42.36560241284478],[-71.25303754583001,42.36568465653735],[-71.25299060717225,42.36571141048643],[-71.25307912006974,42.36578869960862],[-71.25309789553285,42.36577779986638],[-71.25313946977258,42.365816444398526],[-71.25317165628076,42.36579959934898],[-71.25321054831147,42.365837252982914],[-71.25325614586473,42.365813471743046],[-71.25333392992616,42.365888778971744],[-71.25331783667207,42.365898687810905],[-71.2533956207335,42.365975976702714],[-71.2534492649138,42.36594823198327],[-71.25352973118424,42.3660255208141],[-71.25358471646905,42.36599381258731],[-71.25359678640962,42.366005703174245],[-71.25370005145669,42.36594525933401]]]}},{type:"Feature",properties:{name:"North Gordon",color:"green"},geometry:{type:"Polygon",coordinates:[[[-71.25590436626226,42.36995919854307],[-71.25600897241384,42.36975707098084],[-71.25604652334005,42.369764997564175],[-71.25608675647527,42.36968474086182],[-71.25605054665357,42.36967384179557],[-71.2561269896105,42.369523236322884],[-71.25613771844655,42.369527199629395],[-71.25618733931333,42.36941820860846],[-71.25601433683187,42.36937263048905],[-71.2559472816065,42.36951035557488],[-71.2559848325327,42.36952026384279],[-71.25577696133405,42.3699215473798],[-71.25590436626226,42.36995919854307]]]}},{type:"Feature",properties:{name:"North Reitman",color:"green"},geometry:{type:"Polygon",coordinates:[[[-71.25563614536077,42.369828410194735],[-71.25568978954107,42.36972932793136],[-71.2549924151972,42.36953215376223],[-71.25494145322591,42.36962727303667],[-71.2552458839491,42.36971644722561],[-71.25523113179952,42.36974220863442],[-71.25537462998182,42.36978580484063],[-71.25538804102689,42.369756080157856],[-71.25563614536077,42.369828410194735]]]}},{type:"Feature",properties:{name:"North Cable",color:"green"},geometry:{type:"Polygon",coordinates:[[[-71.25523381400853,42.369470722487605],[-71.25548460055143,42.368975306786695],[-71.2553531723097,42.36894062754129],[-71.2552445428446,42.369159601883815],[-71.25520296860486,42.369150684391556],[-71.25514932442456,42.369264630030635],[-71.25518553424627,42.36927751082902],[-71.25510506797582,42.369434061859614],[-71.25523381400853,42.369470722487605]]]}},{type:"Feature",properties:{name:"Rosenthal West",color:"pink"},geometry:{type:"Polygon",coordinates:[[[-71.25997845316306,42.36723289873021],[-71.25998113537207,42.36716452916025],[-71.25996839487925,42.36716403372833],[-71.25996839487925,42.36715412508873],[-71.26002941513434,42.36715660224878],[-71.26003477955237,42.36706048836759],[-71.25992615008727,42.36705751577099],[-71.25992950284854,42.36701441310434],[-71.25995632493868,42.367015899403704],[-71.2599603482522,42.366945052429294],[-71.25984098995104,42.36694059352615],[-71.25983897829428,42.36701144050558],[-71.25984970713034,42.36701193593869],[-71.25984903657809,42.367017881136086],[-71.25978935742751,42.3670163948368],[-71.25978399300948,42.367107059029415],[-71.25989463413134,42.36710904075894],[-71.25988994026557,42.367161556568576],[-71.2598590948619,42.36716106113663],[-71.25985373044387,42.36722893527888],[-71.25997845316306,42.36723289873021]]]}},{type:"Feature",properties:{name:"Rosenthal South",color:"pink"},geometry:{type:"Polygon",coordinates:[[[-71.26018900657073,42.36696635607335],[-71.26019705319777,42.36689055470233],[-71.2602661200799,42.36689501360903],[-71.2602647789754,42.366909876629116],[-71.2603559740819,42.366914830968376],[-71.2603646912612,42.36682317562908],[-71.26027148449793,42.36681921215191],[-71.26026947284117,42.36683060714804],[-71.26025337958708,42.36682961627889],[-71.2602560617961,42.36678403628129],[-71.26014475012198,42.36677957736667],[-71.26013603294268,42.36685686517474],[-71.26006696606055,42.3668529016997],[-71.26006830716506,42.36683357975541],[-71.25997711205855,42.36683011171349],[-71.25996973598376,42.36691780357173],[-71.26005623722449,42.36692176704267],[-71.260057578329,42.366915326402264],[-71.26007568323985,42.36691730813784],[-71.26007098937407,42.366959420003994],[-71.26018900657073,42.36696635607335]]]}},{type:"Feature",properties:{name:"Rosenthal North",color:"pink"},geometry:{type:"Polygon",coordinates:[[[-71.26033001113683,42.36736220619161],[-71.26033805776387,42.36727005607395],[-71.26024552155286,42.36726807434951],[-71.26024552155286,42.367283928143316],[-71.26022004056722,42.367282937281324],[-71.26022406388074,42.367237357612616],[-71.26011409331113,42.36723240329879],[-71.26010604668409,42.367310681411304],[-71.26004435587674,42.36730770882653],[-71.26004435587674,42.367289873314974],[-71.25997461844236,42.367287891591154],[-71.25996657181531,42.36736914221651],[-71.2600175337866,42.367372114798385],[-71.2600188748911,42.36736517877379],[-71.26008458901197,42.36736815135586],[-71.26008056569844,42.367408776629766],[-71.26015700865537,42.36741075834978],[-71.2601637141779,42.36733644380673],[-71.26024149823934,42.36734139811232],[-71.26024149823934,42.36735725188763],[-71.26033001113683,42.36736220619161]]]}}]},json_array=gon.buildings,places_of_interest=[{lat:42.366327,lng:-71.258744,name:"Dunkin' Donuts",infowindow:"food info and shop info"},{lat:42.367854,lng:-71.258671,name:"Starbucks",infowindow:"Starbucks in Farber Library"},{lat:42.36573,lng:-71.260188,name:"Einstein Bros Bagels",infowindow:"Selling bagels and softdrinks here"},{lat:42.368043,lng:-71.256617,name:"Usdan Dinning Hall",infowindow:"Lower Usdan Dinning hall"},{lat:42.366412,lng:-71.260546,name:"Sherman Dinning Hall",infowindow:"Student dinning hall"}],markers=[],brandeis_logo="https://s3.amazonaws.com/deis-dorms-devel/pictures/static/map_icons/brandeis_logo.png",starbucks="https://s3.amazonaws.com/deis-dorms-devel/pictures/static/map_icons/s_logo.png",donut="https://s3.amazonaws.com/deis-dorms-devel/pictures/static/map_icons/d_logo.png",einstein="https://s3.amazonaws.com/deis-dorms-devel/pictures/static/map_icons/e_logo.png",map,ifKeep=null,kids;$("#search").on("input",function(){kids=$("#sidebar_container div");for(var e=$("#search").val().toLowerCase(),o=0;o<kids.length;o++){var t=-1!=kids[o].textContent.toLowerCase().indexOf(e);kids[o].style.display=t?"block":"none"}}),$("body > #sidebar_container").remove();var interest_markers=[],firstTime=!0;