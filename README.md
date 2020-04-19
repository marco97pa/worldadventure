# World Adventure
Il classico gioco dell'oca realizzato come pagina Web usando HTML5, CSS3 e Javascript vanilla.

Il gioco è stato realizzato per l'associazione [scout FSE](https://fse.it/) insieme alla [Pattuglia Tecnica Nazionale](https://www.youtube.com/channel/UCnnSXqParYHr_RVrvfeyMRA).

## Giocare
Per giocare basta visitare https://marco97pa.github.io/worldadventure/

Per accedere alle istruzioni di gioco e alla documentazione è possibile visitare questo [Dropbox](https://www.dropbox.com/sh/12b3iac3dif6lb5/AADfI_bjY9Zv_9tXLNk8WjqHa?dl=0) 

## Novità
* *19-04-2020* **Lancio** ufficiale, disponibile la versione **Esporatori**



## Sviluppo
Visti i tempi ristretti e la necessità di avere un prodotto funzionante su ogni computer, ho optato per la combinazione HTML5, CSS3 e Javascript vanilla.

Il gioco è disponibile in diverse varianti per le varie branche scout.


Il file [index.html](https://github.com/marco97pa/worldadventure/blob/master/index.html) si occupa di indirizzare gli utenti verso la versione del gioco più adatta a loro, è responsive e si adatta anche su mobile.
Contiene inoltre i link alla documentazione e alle istruzioni specifiche per ogni branca.

Il file [main.html](https://github.com/marco97pa/worldadventure/blob/master/main.html) è la vera e propria piattaforma di gioco, **comune a ogni branca**.

Le varianti di gioco sono gestite dal file [customization.js](https://github.com/marco97pa/worldadventure/blob/master/assets/customization.js) e possono essere invocate aggiungendo un `?[id]` all'URL di main.html, dove **[id]** è l'identificativo della branca.

Per esempio, per avviare la versione per **esploratori** basta seguire questo link:
`https://marco97pa.github.io/worldadventure/main.html?0`

La logica del gioco è gestita dal file [game.js](https://github.com/marco97pa/worldadventure/blob/master/game.js).

Il design e la disposizione delle caselle è gestita da [style.css](https://github.com/marco97pa/worldadventure/blob/master/style.css).

Il gioco supporta massimo **12 giocatori** e **52 caselle** (comprese inizio e fine).

Il gioco funziona **solo su desktop**, non è responsive.
Sono supportati tutti i browser correnti ad eccezione di Internet Explorer.

Diverse parti dell'interfaccia sono state realizzate sfruttando i `<dialog>` di HTML5: su browser che non li supportano (Firefox e Safari) vengono renderizzati sfruttando i classici `alert()` di Javascript.

Ai fini della pubblicazione online è stato sfruttato **GitHub Pages**.

## Segnalare problemi
E' possibile segnalare eventuali problemi nella sezione Issues di Gihub oppure inviandomi una mail a marco97pa@gmail.com

## Contribuire
Attualmente il gruppo di lavoro è un gruppo chiuso, ma è possibile forkare questa repository e aprire una pull request includendo dettagli sulle feature aggiunte che mi riserverò di unire con il progetto attuale in master.

