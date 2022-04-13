import React from 'react';
import { Media } from 'reactstrap';

const events = () => {
    return (
        <section id="events">
            <h1>Events</h1>
            <p>Western Washington is home to a wide variety of tournaments. Check out descriptions for each below, then start following the <a href="https://discord.gg/2NcUmC3" target="_blank" rel="noopener noreferrer">WWA Discord server</a> and <a href="https://www.facebook.com/groups/pnwsmash" target="_blank" rel="noopener noreferrer">Facebook group</a> for links to all of the latest events!</p>
            <p> <strong>NOTE: Due to venue restrictions, health concerns, and other factors, some events currently have attendance caps and may require preregistration.</strong> Be sure to consult the WWA Discord server or a TO before planning your trip to make sure there’s room.</p>
            {/* <div style={{ marginBottom: '1rem' }} className="back-button">
                <Link to="/calendar"><Button>View Calendar</Button></Link>
            </div> */}
            <h3>Seattle Metro</h3>
            <Media list>
                <Media>
                    <Media body>
                        <Media heading>Orbitar</Media>
                        <Media body>Sprouting up from humble beginnings in 2015, this bi-weekly at downtown Seattle has blossomed into WWA’s biggest regular series. It draws out PR players and newcomers alike, forming a great snapshot of all the scene has to offer. Preregistration is required, so make sure you watch the <a href="https://discord.gg/2NcUmC3" target="_blank" rel="noopener noreferrer">WWA Discord server</a> and <a href="https://www.facebook.com/groups/pnwsmash" target="_blank" rel="noopener noreferrer">Facebook group</a> for sign-ups!</Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/GooseGusty" target="_blank" rel="noopener noreferrer">Goose</a>, <a href="https://twitter.com/Bleggaman" target="_blank" rel="noopener noreferrer">Bleggaman</a></li>
                            <li>Location: 925 Westlake Ave N, Seattle, WA, 98109</li>
                            <li>Brackets: Singles, varies</li>
                            <li>Entry: $10 venue, $10 bracket</li>
                            <li>Schedule: Every other Friday at 6:30 PM</li>
                        </ul>
                    </Media>
                    <Media right top >
                        <img className="rounded" src={require('../assets/orbitar.png')} alt="Orbitar"></img>
                    </Media>
                </Media>
                <Media>
                    <Media body>
                        <Media heading>WGA Holy Colosseum</Media>
                        <Media>Located at the Every Nation Church near the University of Washington, this esteemed tournament series has risen and ascended into one of the scene’s most popular locals.</Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/DukelowDukelow" target="_blank" rel="noopener noreferrer">Dukelow</a></li>
                            <li>Location: Maple Hall 216/217 at UW, Seattle, WA 98195</li>
                            <li>Brackets: Singles</li>
                            <li>Entry: $10 venue, $5 bracket</li>
                            <li>Schedule: Mondays at 6:00 PM</li>
                        </ul>
                    </Media>
                    <Media right top >
                        <img className="rounded" src={require('../assets/wga.png')} alt="Orbitar"></img>
                    </Media>
                </Media>
                <Media>
                    <Media body>
                        <Media heading>UW Smash Weeklies</Media>
                        <p>Smash Club at the University of Washington cycles through a variety of different events and often charges no entry, giving players of all skill levels an easy entry point into the tournament scene. Occasional Singles brackets give UW students a shot at Smash Club’s quarterly PR, but meetings are open to everyone--student or not!</p>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/DukelowDukelow" target="_blank" rel="noopener noreferrer">Dukelow</a>, WGA Smash Club officers</li>
                            <li>Location: Maple Hall 216/217 at UW, Seattle, WA 98195</li>
                            <li>Brackets: varies</li>
                            <li>Entry: Free (most brackets), $2 (PR brackets)</li>
                            <li>Every Thursday (while UW is in session) at 7:00 PM</li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/wga.png')} alt="WGA Weeklies"></img>
                    </Media>
                </Media>
                <Media>
                    <Media body>
                        <Media heading>Smashed to Pieces</Media>
                        <Media>Looking for something to fill the Smash void in West Seattle? You’ll find it at the Missing Piece. When you mix great competition with great coffee, you’ve got a recipe for a good time.
                        </Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/GooseGusty" target="_blank" rel="noopener noreferrer">Goose</a></li>
                            <li>Location: 9456 35th Ave SW, Seattle, WA 98126</li>
                            <li>Brackets: Singles</li>
                            <li>Entry: $11 venue, $5 bracket</li>
                            <li>Schedule: Every other Wednesday at 6:30 PM</li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/stp.jpeg')} alt="Smashed to Pieces"></img>
                    </Media>
                </Media>
                <Media>
                    <Media body>
                        <Media heading>The Pub Brawl</Media>
                        <Media>Another round of Smash comes to the Dubliner Irish Pub, and all ages are welcome! If you’re on the east side, be sure to stop by and raise a glass in support.
                        </Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/DukelowDukelow" target="_blank" rel="noopener noreferrer">Dukelow</a>, <a href="https://twitter.com/Bleggaman" target="_blank" rel="noopener noreferrer">Bleggaman</a></li>
                            <li>Location: 15327 NE 90th St, Redmond, WA 98052</li>
                            <li>Brackets: Alternating Singles and Doubles</li>
                            <li>Entry: $5 venue, $5 bracket</li>
                            <li>Schedule: Every Tuesday starting at 6:30 PM</li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/tpb.png')} alt="The Pub Brawl"></img>
                    </Media>
                </Media>
                <Media>
                    <Media body>
                        <Media heading>Invictus Insurgency</Media>
                        <Media>PLAYlive Nation’s Smash saga continues with a new captain at the helm! Head east every Thursday for a piece of the action.
                        </Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/InvictusZSS" target="_blank" rel="noopener noreferrer">Invictus</a></li>
                            <li>Location: 7330 164th Ave NE STE E252, Redmond, WA 98052</li>
                            <li>Brackets: Singles</li>
                            <li>Entry: $5 venue, $5 bracket</li>
                            <li>Schedule: Every Thursday at 6:00 PM</li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/ii.png')} alt="Invictus Insurgency"></img>
                    </Media>
                </Media>
                <Media>
                    <Media body>
                        <Media heading>Domino Effect</Media>
                        <Media>With two Smash titles and six brackets to choose from, this
                            regional series offers something for everyone. Most of the revenue
                            is donated to the Coalition of Rainforest Nations.
                        </Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/DE_maxper" target="_blank" rel="noopener noreferrer">Max</a></li>
                            <li>Location: 4001 E Stevens Way NE, Seattle, WA 98195</li>
                            <li>Brackets: Ultimate Singles, Ultimate Doubles, Melee Singles, Melee Doubles, Rivals of Aether Singles, rotation of FGC games</li>
                            <li>Entry: $15 venue, $5 per bracket</li>
                            <li>Schedule: One Saturday every other month</li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/de.png')} alt="Domino Effect"></img>
                    </Media>
                </Media>
                <Media>
                    <Media body>
                        <Media heading>Basement Tier</Media>
                        <Media>Stationed in The Anthill, a classic venue for Seattle’s music scene, this series features
                            multiple brackets and encore performances every month.
                        </Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/goosegusty" target="_blank" rel="noopener noreferrer">Goose</a></li>
                            <li>Location: 1314 NE 75th St, Seattle, WA 98115, USA</li>
                            <li>Brackets: Singles, Doubles, varies</li>
                            <li>Entry: $5 venue, $5 bracket</li>
                            <li>Schedule: One weekend per month (currently on hiatus)</li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/bt.jpg')} alt="Basement Tier"></img>
                    </Media>
                </Media>
                <Media>
                    <Media body>
                        <Media heading>Wake-n-Cake Hyperbolic Time Chamber</Media>
                        <Media>Capped at 10 players each week, Wake-n-Cake offers round-robin matches, stream opportunities, and snacks for all attendees--a pretty sweet deal for anyone on the grind.
                        </Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/ctrlaltnotice" target="_blank" rel="noopener noreferrer">NOTICE</a></li>
                            <li>Location: 12507 NE 183rd St #302, Bothell, WA 98011</li>
                            <li>Brackets: Singles</li>
                            <li>Entry: $10 venue, $5 bracket</li>
                            <li>Schedule: Every Saturday at 1:00 PM</li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/whtc.png')} alt="WHTC"></img>
                    </Media>
                </Media>
                <Media>
                    <Media body>
                        <Media heading>Substation Smash</Media>
                        <Media>Hosted at one of Seattle’s most well-known concert venues, this 21+ monthly boasts good vibes, stiff drinks, and even stiffer competition for both Melee and Ultimate.
                        </Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/GooseGusty" target="_blank" rel="noopener noreferrer">Goose</a></li>
                            <li>Location: 12507 NE 183rd St #302, Bothell, WA 98011</li>
                            <li>Brackets: Ultimate Singles, Melee Singles</li>
                            <li>Entry: $10 venue, $5 bracket</li>
                            <li>Schedule: Monthly, Sundays</li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/subs.png')} alt="Substation Smash"></img>
                    </Media>
                </Media>
                {/* <Media>
                    <Media body>
                        <Media heading>That's Not Safe</Media>
                        <Media>Now at a brand-new location, TNS offers spirited Ultimate brackets every Monday. You can expect brackets for other Smash titles as well.</Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/harmdissonance" target="_blank" rel="noopener noreferrer">Scruffymagic</a></li>
                            <li>Location: 7324 NE 175th St, Ste A, Kenmore, Washington 98028</li>
                            <li>Brackets: Singles, varies</li>
                            <li>Entry: $5 venue, $5 bracket</li>
                            <li>Schedule: Every Monday at 6:30 PM</li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/tns.png')} alt="orbitar"></img>
                    </Media>
                </Media> */}
                {/* <Media>
                    <Media body>
                        <Media heading>ePG Weeklies</Media>
                        <Media>A legacy tournament in WWA Smash, ePG is back at it with the release of Ultimate. Head a ways south of Seattle to get your grind on at this training house every Thursday.</Media>
                        <ul>
                            <li>TO(s): <a href="https://www.facebook.com/EpeenGaming/" target="_blank" rel="noopener noreferrer">ePeenGaming</a></li>
                            <li>Location: 9436 S 196th Pl, Renton, WA 98055</li>
                            <li>Brackets: Singles</li>
                            <li>Entry: $6 bracket</li>
                            <li>Schedule: Every Thursday at 7:00 PM</li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/epeen.jpg')} alt="orbitar"></img>
                    </Media>
                </Media> */}
                {/* <Media>
                    <Media body>
                        <Media heading>Bangers & Smash</Media>
                        <Media>Stationed on the Eastside, this friendly bar tournament draws in Ultimate and Melee fans alike.</Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/reindhir" target="_blank" rel="noopener noreferrer">Dhir</a></li>
                            <li>Location: 15327 NE 90th St, Redmond, Washington 98052</li>
                            <li>Brackets: Ultimate Singles, Melee Singles</li>
                            <li>Entry: $3 venue, $5 bracket</li>
                            <li>Schedule: Every Tuesday at 6:30 PM</li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/bns.png')} alt="orbitar"></img>
                    </Media>
                </Media> */}
                {/* <Media>
                    <Media body>
                        <Media heading>SmashWorks</Media>
                        <Media>SmashWorks leverages GameWorks Seattle for another event on the last Saturday of every month. If you’re looking for a weekend tournament downtown, it’s tough to beat this location and time slot.</Media>
                        <ul>
                            <li>TO(s): <a href="https://www.facebook.com/GWeSportsSEA/" target="_blank" rel="noopener noreferrer">Deniz Bengisoy</a></li>
                            <li>Location: 1511 7th Ave Seattle, Washington 98101</li>
                            <li>Brackets: Singles, Doubles</li>
                            <li>Entry: $5 venue, $5 per bracket</li>
                            <li>Schedule: Last Saturday of each month starting at 1:00 PM</li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/gameworks.jpg')} alt="orbitar"></img>
                    </Media>
                </Media> */}
                {/* <Media>
                    <Media body>
                        <Media heading>Monthly Mashers</Media>
                        <Media>Monthly Mashers unites tons of different fighting games under one roof, giving Smashers plenty of room to broaden their horizons. Who knows what other fighters you're missing out on?</Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/ChadDrawsThings" target="_blank" rel="noopener noreferrer">ChadDrawsThings</a></li>
                            <li>Location: 124 Fir St NE, Olympia, Washington 98506</li>
                            <li>Brackets: Singles</li>
                            <li>Entry: $10 venue, $5 bracket</li>
                            <li>Schedule: Listed Saturdays starting at 3:00 PM</li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/monthly.jpg')} alt="Monthly Mashers"></img>
                    </Media>
                </Media> */}
            </Media>
            <h3>Southern WWA</h3>
            <Media list>
                <Media>
                    <Media body>
                        <Media heading>Games Unlimited</Media>
                        <Media>For anyone south of Seattle, Games Unlimited is the prime weekly around. Run in a family-owned card shop, this intimate event features two brackets, a casual atmosphere, and plenty of good Smash.</Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/Hellviper" target="_blank" rel="noopener noreferrer">Hellviper</a></li>
                            <li>Location: 15413 1st Avenue Ct S Ste G19, Tacoma, Washington 98444</li>
                            <li>Brackets: Singles, Doubles</li>
                            <li>Entry: $3 venue, $5 Singles, free Doubles</li>
                            <li>Schedule: Every Sunday starting at 2:00 PM</li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/roadside.jpg')} alt="Roadside Hobbies"></img>
                    </Media>
                </Media>
                <Media>
                    <Media body>
                        <Media heading>Ultimate Thursdays</Media>
                        <Media>Debuting in late 2018, Ultimate Thursdays offers southern Smashers a great place to level up during the week. Its low price point makes it accessible for players of all levels.</Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/ChadDrawsThings" target="_blank" rel="noopener noreferrer">ChadDrawsThings</a>, <a href="https://twitter.com/superblanketman">BlanketMan</a></li>
                            <li>Location: 124 Fir St NE, Olympia, Washington 98506</li>
                            <li>Brackets: Singles</li>
                            <li>Entry: $3 venue, $1 bracket</li>
                            <li>Schedule: Every Thursday at 6:30 PM</li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/ultthurs.jpg')} alt="Ultimate Thursdays"></img>
                    </Media>
                </Media>
                <Media>
                    <Media body>
                        <Media heading>Mika’s Gallery</Media>
                        <Media>Looking to add a splash of color to your weekend? Check out Mika’s Gallery in downtown Olympia for two brackets and some frame-perfect play.
                        </Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/BlueMikazuchi" target="_blank" rel="noopener noreferrer">Mika</a></li>
                            <li>Location: 500 Washington St SE, Olympia, WA 98501</li>
                            <li>Brackets: Singles, Doubles</li>
                            <li>Entry: $10 venue, $5 singles, $5 doubles</li>
                            <li>Schedule: One Saturday per month</li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/mg.png')} alt="Mika’s Gallery"></img>
                    </Media>
                </Media>
            </Media>
            <h3>Northern WWA</h3>
            <Media list>
                <Media>
                    <Media body>
                        <Media heading>Sinistar Saga</Media>
                        <Media>Sinistar Saga brings northern Washington together in a cozy lounge setting every other Saturday for two brackets, including a redemption run.
                        </Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/SwSSBU" target="_blank" rel="noopener noreferrer">Sw</a></li>
                            <li>Location: 1300 Mahogany Ave, Bellingham, WA 98226</li>
                            <li>Brackets: Singles, Redemption</li>
                            <li>Entry: $5 venue, $5 bracket</li>
                            <li>Schedule: Every other Saturday starting at 3:30 PM</li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/ss.png')} alt="Sinister Saga"></img>
                    </Media>
                </Media>
                <Media>
                    <Media body>
                        <Media heading>ROC Smash</Media>
                        <Media>Led by a scene veteran, ROC Smash supports the Snohomish Boys and Girls Club
                            with Ultimate tournaments every week.
                        </Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/JCOnyx_117" target="_blank" rel="noopener noreferrer">JCOnyx</a></li>
                            <li>Location: 1207 13th St Suite K, Snohomish, Washington 98290</li>
                            <li>Brackets: Ultimate Singles, P+ Singles, Rivals of Aether</li>
                            <li>Entry: $5 venue, $5 bracket</li>
                            <li>Schedule: Every Sunday</li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/roc.png')} alt="ROC Smash"></img>
                    </Media>
                </Media>
                <Media>
                    <Media body>
                        <Media heading>WWU Smash</Media>
                        <Media>If you’re up north, don’t miss out on this free bracket. It’s a great place to practice for students and non-students alike!
                        </Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/SwSSBU" target="_blank" rel="noopener noreferrer">Sw</a></li>
                            <li>Location:  Western Washington University CF 226/227</li>
                            <li>Brackets: Singles</li>
                            <li>Entry: free</li>
                            <li>Schedule: Every Friday (while WWU is in session) at 6:15 PM</li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/wwu.png')} alt="WWU Smash"></img>
                    </Media>
                </Media>
                <Media>
                    <Media body>
                        <Media heading>Stairway to Heaven</Media>
                        <Media>Hosted at Gamers Heaven in Lynnwood, this biweekly Friday tournament alternates with Orbitar and is shaping up to be one of Washington’s biggest locals, drawing talent from all across the region.
                        </Media>
                        <ul>
                            <li>TO(s): GatoDelFuego, <a href="https://twitter.com/noticenlife" target="_blank" rel="noopener noreferrer">NOTICE</a></li>
                            <li>Location:  Western Washington University CF 226/227</li>
                            <li>Brackets: Singles</li>
                            <li>Entry: $10 venue, $5 bracket</li>
                            <li>Schedule: Biweekly Fridays, alternating with Orbitar</li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/sth.png')} alt="Stairway to Heaven"></img>
                    </Media>
                </Media>
            </Media>
            <h3>Special Events</h3>
            <Media list>
                <Media>
                    <Media body>
                        <Media heading>Port Priority</Media>
                        <Media>The Pacific Northwest’s biggest tournament, this annual major tournament draws PGR talent, national attention, and plenty of hype. While all installments feature Singles and Doubles, each one also focuses on a specific theme, giving every Port Priority a distinct flavor. Keep an eye out for the next one!</Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/ssbgyromight" target="_blank" rel="noopener noreferrer">Gyromight</a></li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/pp.jpg')} alt="Port Priority"></img>
                    </Media>
                </Media>
                <Media>
                    <Media body>
                        <Media heading>Orbitar Stars</Media>
                        <Media>This special event features a charity invitational with some of Orbitar’s top performers as well as an Arcadian bracket designed to highlight the scene’s rising stars. It’s part prestige, part celebration!</Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/GooseGusty" target="_blank" rel="noopener noreferrer">Goose</a>, <a href="https://twitter.com/Bleggaman" target="_blank" rel="noopener noreferrer">Bleggaman</a></li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/stars.jpg')} alt="Orbitar Stars"></img>
                    </Media>
                </Media>
                <Media>
                    <Media body>
                        <Media heading>Emerald City</Media>
                        <Media>Seattle’s original Smash series, this annual tournament features Ultimate, Melee, Rivals, other fighting games, a convention, and an esteemed history. Hosted at the University of Washington on a yearly basis.</Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/DukelowDukelow" target="_blank" rel="noopener noreferrer">Dukelow</a>, <a href="https://twitter.com/DE_maxper" target="_blank" rel="noopener noreferrer">Max</a></li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/ec.png')} alt="Emerald City"></img>
                    </Media>
                </Media>
                {/* <Media>
                    <Media body>
                        <Media heading>Northwest Majors</Media>
                        <Media>This recurring gauntlet houses all manner of fighting games, including both Ultimate and Melee. It runs pricier than some of its cousins, but it’s an experience all its own.</Media>
                        <ul>
                            <li>TO(s): <a href="https://www.facebook.com/northwestmajors/" target="_blank" rel="noopener noreferrer">Chris Anderson</a></li>
                        </ul>
                    </Media>
                    <Media right top>
                        <img className="rounded" src={require('../assets/nwm.png')} alt="Northwest Majors"></img>
                    </Media>
                </Media> */}
                {/* <Media>
                    <Media body>
                        <Media heading>Don't Park on the Grass</Media>
                        <Media>This fusion of Melee and Ultimate brings players of all kinds up to Seattle for a two-day throwdown. And as one of the first majors in the country to run Ultimate, DPotG is poised to broaden its reach even further in coming years.</Media>
                        <ul>
                            <li>TO(s): <a href="https://twitter.com/aidencalvin" target="_blank" rel="noopener noreferrer">Aiden</a>, <a href="https://twitter.com/TO_Aveean" target="_blank" rel="noopener noreferrer">Aveean</a></li>
                        </ul>
                    </Media>
                    <Media right>
                        <img className="rounded" src={require('../assets/dp.jpeg')} alt="Don't Park on the Grass"></img>
                    </Media>
                </Media> */}
            </Media>
        </section>
    );
}

export default events;