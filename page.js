const TITLES = ["Om Mig", "Vad Jag Gör", "Min Framtid", "Kontakter"]
const TEXTS =
    [
        "Jag heter Loke Vigstrand, jag är 17 år gammal och är en person som är väldigt dator fokuserad. Bara tre år sedan så började jag programmera, men redan så tycker vissa att jag är en väldigt duktig programmerare. Jag gillar även att animera i 3D, oftast med ett program som heter \"Source Filmmaker\". Just det programmet fick mig till slut att börja programmera, och lärde mig då senare C#. Sedans dess har jag försökt utvidga mina förståelser av andra programmeringsspråk, t.ex. på C++/C, JavaScript osv.",
        "Jag har ett särskilt intresse inom spelmotorn \"Source 2\" från spelutvecklarna \"Valve\". Det börjades med utsläppningen av spelet \"Half-Life: Alyx\", där, efter jag spelade igenom spelet, märkte jag av att det fanns möjligheter till att göra egna saker till spelet, och det som fick mig mest intresserad var \"Source Filmmaker\", ett vanligtvis gratis, men nu gammal program för att göra animationer. Detta nya spelet inledde en ny version för programmet, som använde den nya spelmotorn, och jag bestämde mig att utnyttja det till att äntligen lära mig hur man gör animationer. Jag utvecklade från en nybörjare till en mindre nybörjare, och fortsätter göra små animationer när jag har tråkigt eller får inspiration. Nu kan jag även använda de mesta program som finns tillgänligt i spelmotorn, och kan göra nästan vad jag vill för andra att se eller spela igenom. Efter jag lärde mig spelmotorn så fick jag också tillgänlighet till ett annat program, \"s&box\", som använder samma spelmotor. Detta programmet fick mig inspirerad till att även lära mig programmera i C#, då man kunde använda det språket till att göra vilket spel som helst i programmet. Jag började med att göra enkla ändringar på redan existerande spel, för att få en bas att lära mig mera om hur man använder språket osv, och nu kan jag göra helt egna spel och program i C#, och utvidgar mina möjligheter till andra språk, såsom JS eller C++/C.",
        "Mina planer för framtiden är att landa ett jobb någonstans som betalar mig väl medans jag gör det jag gillar, alltså programmerar, animerar, eller liknande. För det så kommer jag såklart att behöva bli mycket bättre inom det jag gör, och det tänker jag försöka mitt bästa på. Det jag mest planerar för är ett liknande jobb som min egna pappa har, IT-tekniker eller liknande hos IKEA. Antingen det eller bara någonting som är liknande, behöver inte vara ett liknande stort företag som IKEA, utan bara något smått där jag betalas väl. Med detta har jag planer att lära så mycket programmering som jag kan, inklusive olika språk.",
        "Min E-Mail är loke@jenjen.se, och min mobiltelefon kan nås från 073-1XX-XX-XX."
    ]

class Page {
    constructor(pageIndex) {
        this.pageIndex = pageIndex;
        this.title = TITLES[pageIndex];
        this.text = TEXTS[pageIndex];
        this.imgs = [];

        // Fills the imgs array with essentially empty PageImg's
        for (let i = 0; i < 4; i++) {
            this.setImg("source", "image", i);
        }
    }

    // Set an image in the array
    setImg(src, alt, imgIndex) {
        this.imgs[imgIndex] = new PageImg(src, alt);
    }

    getTitle() {
        return this.title;
    }

    getText() {
        return this.text;
    }

    // Returns the whole imgs array
    getImg() {
        return this.imgs;
    }

    // Gets the image on the input index
    getImg(index) {
        return this.imgs[index];
    }
}