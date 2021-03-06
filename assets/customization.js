class Branca {
    constructor(name, len, desc, background, color, logo, link, link_prove, link_allegati) {
      this.name = name;
      this.len = len;
      this.desc = desc;
      this.background = background;
      this.logo = logo;
      this.link = link;
      this.link_allegati = link_allegati;
      this.link_prove = link_prove;
      this.color = color;
    }
  }

branca = [];

branca[0] = new Branca(
    "Esploratori",
    50,
    ["0°26'13''S 36°57'28''E","25°51'21''S 25°38'25''E","50°41'29''N 1°58'26''W","51°29'43''N 0°10'45''W","48°51'30''N 2°17'40''E","37°45'09''N 15°00'24''E","37°53'00''N 13°22'33''E","17°35'18''N  9°45'13''E","27°59'18''N 86°55'29''E","24°29'15''S 46°40'27''W","3°27'54''S 62°12'56''W","45°47'23''N 7°28'42''E","43°46'49''N 11°15'03''E","45°28'02''N  9°11'22''E","42°26'04''N  12°11'37''E","41°54'08''N 12°27'12''E","RIDICULUS","0°26'13''S 36°57'28''E","25°51'21''S 25°38'25''E","50°41'29''N 1°58'26''W","51°29'43''N 0°10'45''W","48°51'30''N 2°17'40''E","37°45'09''N 15°00'24''E","37°53'00''N 13°22'33''E","17°35'18''N  9°45'13''E","27°59'18''N 86°55'29''E","24°29'15''S 46°40'27''W","3°27'54''S  62°12'56''W","45°47'23''N  7°28'42''E","43°46'49''N 11°15'03''E","45°28'02''N  9°11'22''E","42°26'04''N 12°11'37''E","41°54'08''N 12°27'12''E","RIDICULUS","0°26'13''S 36°57'28''E","25°51'21''S 25°38'25''E","50°41'29''N 1°58'26''W","51°29'43''N 0°10'45''W","48°51'30''N 2°17'40''E","37°45'09''N 15°00'24''E","37°53'00''N 13°22'33''E","17°35'18''N  9°45'13''E","27°59'18''N 86°55'29''E","24°29'15''S 46°40'27''W","3°27'54''S 62°12'56''W","45°47'23''N 7°28'42''E","43°46'49''N 11°15'03''E","45°28'02''N  9°11'22''E","42°26'04''N  12°11'37''E","41°54'08''N 12°27'12''E"],
    "background-image: url('assets/tile2.jpg'); background-repeat: repeat;",
    "rgba(32, 88, 25, 0.89)",
    "assets/esploratori.png",
    "https://scout.fse.it/esploratori/",
    "https://www.dropbox.com/s/ywqt6qjifxi4cq7/prove%20soluzioni.pdf?dl=0",
    "https://www.dropbox.com/sh/rzcwuvesx77yd09/AAAGmOR3HxoE2dY3mcnK8KlZa?dl=0"
)

/*
branca[1] = new Branca(
    "Rover",
    10,
    ["0°26'13''S 36°57'28''E","25°51'21''S 25°38'25''E","50°41'29''N 1°58'26''W","51°29'43''N 0°10'45''W","48°51'30''N 2°17'40''E","37°45'09''N 15°00'24''E","37°53'00''N 13°22'33''E","17°35'18''N  9°45'13''E","27°59'18''N 86°55'29''E","24°29'15''S 46°40'27''W","3°27'54''S 62°12'56''W","45°47'23''N 7°28'42''E","43°46'49''N 11°15'03''E","45°28'02''N  9°11'22''E","42°26'04''N  12°11'37''E","41°54'08''N 12°27'12''E","RIDICULUS","0°26'13''S 36°57'28''E","25°51'21''S 25°38'25''E","50°41'29''N 1°58'26''W","51°29'43''N 0°10'45''W","48°51'30''N 2°17'40''E","37°45'09''N 15°00'24''E","37°53'00''N 13°22'33''E","17°35'18''N  9°45'13''E","27°59'18''N 86°55'29''E","24°29'15''S 46°40'27''W","3°27'54''S  62°12'56''W","45°47'23''N  7°28'42''E","43°46'49''N 11°15'03''E","45°28'02''N  9°11'22''E","42°26'04''N 12°11'37''E","41°54'08''N 12°27'12''E","RIDICULUS","0°26'13''S 36°57'28''E","25°51'21''S 25°38'25''E","50°41'29''N 1°58'26''W","51°29'43''N 0°10'45''W","48°51'30''N 2°17'40''E","37°45'09''N 15°00'24''E","37°53'00''N 13°22'33''E","17°35'18''N  9°45'13''E","27°59'18''N 86°55'29''E","24°29'15''S 46°40'27''W","3°27'54''S 62°12'56''W","45°47'23''N 7°28'42''E","43°46'49''N 11°15'03''E","45°28'02''N  9°11'22''E","42°26'04''N  12°11'37''E","41°54'08''N 12°27'12''E"],
    "background-image: url('assets/tile1.jpg'); background-repeat: repeat;",
    "rgba(136, 4, 4, 0.89)",
    "assets/fse.png",
    "https://marco97pa.github.io",
    "",
    "https://www.dropbox.com/sh/rzcwuvesx77yd09/AAAGmOR3HxoE2dY3mcnK8KlZa?dl=0"
)
*/