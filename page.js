const TITLES = ["Om Mig", "Vad Jag Gör", "Mina Kunskaper","Min Framtid", "Kontakter"]
const TEXTS =
    [
        "Jag heter Loke Vigstrand, jag är 17 år gammal, och jag är en person som är väldigt dator fokuserad. Bara för tre år sedan så började jag programmera, men redan så tycker vissa att jag är en väldigt duktig programmerare. Jag gillar även att animera i 3D, oftast med ett program som heter \"Source Filmmaker\". Just det programmet fick mig till slut att börja programmera, och jag lärde mig C#. Sedans dess har jag försökt utvidga mina förståelser av andra programmeringsspråk, t.ex. på C++/C, JavaScript osv.",
        "Jag har ett särskilt intresse inom spelmotorn \"Source 2\" från spelutvecklarna \"Valve\". Det börjades med utsläppningen av spelet \"Half-Life: Alyx\", där, efter jag spelade igenom spelet, märkte jag av att det fanns möjligheter till att göra egna saker till spelet, och det som fick mig mest intresserad var \"Source Filmmaker\", ett vanligtvis gratis, men nu gammal program för att göra animationer. Detta nya spelet inledde en ny version för programmet, som använde den nya spelmotorn, och jag bestämde mig att utnyttja det till att äntligen lära mig hur man gör animationer. Jag utvecklade från en nybörjare till en mindre nybörjare, och fortsätter göra små animationer när jag har tråkigt eller får inspiration. Nu kan jag även använda de mesta program som finns tillgänligt i spelmotorn, och kan göra nästan vad jag vill för andra att se eller spela igenom. Efter jag lärde mig spelmotorn så fick jag också tillgänlighet till ett annat program, \"s&box\", som använder samma spelmotor. Detta programmet fick mig inspirerad till att även lära mig programmera i C#, då man kunde använda det språket till att göra vilket spel som helst i programmet. Jag började med att göra enkla ändringar på redan existerande spel, för att få en bas att lära mig mera om hur man använder språket osv, och nu kan jag göra helt egna spel och program i C#, och utvidgar mina möjligheter till andra språk, såsom JS eller C++/C.",
        "Fram tills årskurs 5 så gick jag i Diö Skola, då, efter det årets sommarlov, så bytte jag till Thorén Framtid i Älmhult. Denna skolan är nu bestämd att bli nedstängd, och det är utav bra skäl, i min egen erfarenhet så var Thorén Framtid en dålig skola som alldrig riktigt lärde ut de saker som de skulle. Nu går jag på LBS i Växjö, under Teknik programmet, där jag har valt System / App- och Webbutveckling, där jag lär mig mer inom HTML, CSS och JavaScript, med särskild, viktig information inom hur man gör en webbsida som ser bra ut. Jag kan prata, skriva och läsa bra engelska, har några små kunskaper inom franska, och, naturligtvis, kan bra svenska, då jag var född och uppväxt här i Sverige. Jag kan även C#, andelar av JavaScript, C++ och C, men lär mig mera om dem alla nästan varje dag. Mina kunskaper inom animering är lite låst bakom det program som jag pratat ständigt om i de andra sidorna, \"Source Filmmaker\", de är inte de bästa animationerna någonsin, men det är något jag tycker om att göra och vissa tycker jag är duktig på. Jag har lite jobberfarenhet hos ",
        "Mina planer för framtiden är att landa ett jobb någonstans som betalar mig väl medans jag gör det jag gillar, alltså programmerar, animerar, eller liknande. För det så kommer jag såklart att behöva bli mycket bättre inom det jag gör, och det tänker jag försöka mitt bästa på. Det jag mest planerar för är ett liknande jobb som min egna pappa har, IT-tekniker eller liknande hos IKEA. Antingen det eller bara någonting som är liknande, behöver inte vara ett liknande stort företag som IKEA, utan bara något smått där jag betalas väl. Med detta har jag planer att lära så mycket programmering som jag kan, inklusive olika språk.",
        "Min E-Mail är loke@jenjen.se, och min mobiltelefon kan nås från 073-1XX-XX-XX."
    ]

class Page {
    constructor(pageIndex) {
        this.pageIndex = pageIndex;
        this.title = TITLES[pageIndex];
        this.text = TEXTS[pageIndex];
    }

    // Get the page's title
    getTitle() {
        return this.title;
    }

    // Get the page's text
    getText() {
        return this.text;
    }
}