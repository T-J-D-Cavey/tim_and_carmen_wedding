import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import arrow_icon from "../../public/images/arrow_icon.png";

export function KLPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  function clickHander(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    navigate("/");
  }
  return (
    <>
      <div className="fact_sheet_arrow_icon" onClick={clickHander}>
        <img src={arrow_icon} alt="" />
      </div>

      <section className="fact-sheet_section_container v_small_font">
        <div className="fact-sheet_header_container">
          <h1 className="font_written mb_1">Our Malaysian Wedding</h1>
          <h2 className="font_main small_font">What To Expect On The Day</h2>
        </div>
        <div>
          <h3 className="fact-sheet_list_header font_main medium_v_small_font">
            Gatecrashing - 9:30AM
          </h3>
          <ul>
            <li>
              The fetching of the bride and gatecrashing games traditionally
              happens in the morning of a Chinese Malaysian wedding, and is
              taking place in one of Carmen's family homes in
              <a
                href="https://www.google.com/maps/place/Isle+of+Kamares,+Setia+Eco+Glades/@2.9376358,101.6339128,19.09z/data=!4m10!1m2!2m1!1sSETIA+ECO+GLADES,+CYBERJAYA+kuala+lumpur!3m6!1s0x31cdb7eef2206123:0xaa00094464aed8c1!8m2!3d2.9376229!4d101.6348313!15sCihTRVRJQSBFQ08gR0xBREVTLCBDWUJFUkpBWUEga3VhbGEgbHVtcHVyWikiJ3NldGlhIGVjbyBnbGFkZXMgY3liZXJqYXlhIGt1YWxhIGx1bXB1cpIBD2hvdXNpbmdfc29jaWV0eZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSTk16UmZVMGgzRUFF4AEA!16s%2Fg%2F11h3jh81ry?entry=ttu"
                target="_blank"
              >
                Setia Eco Glades, Cyberjaya
              </a>
            </li>
            <li>
              Before Tim can meet Carmen, he has to gatecrash with the help of
              his groomsmen as a test of his sincerity and love, and represented
              by the reluctance of Carmen's family to marry their youngest
              daughter off.
            </li>
            <li>
              Everyone is welcome to observe this fun and exciting modern
              tradition including the tea ceremony later on. There will be a
              photographer and videographer on site.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="fact-sheet_list_header font_main medium_v_small_font">
            Tea Ceremony - 11:30am
          </h3>
          <ul>
            <li>
              Taking place at the same location as the gatecrashing and dressed
              in traditional Chinese wedding attire, Tim and Carmen will pay
              their respects by addressing their elders by their formal titles
              and serving them a cup of tea. In return, their relatives will
              gift Tim and Carmen with either a red packet or gold jewelry to
              bless their union and welcome them into the family.
            </li>
            <li>
              The younger relatives will serve tea to the newlyweds by
              addressing them by their new formal titles in the family. In
              return, the bride and groom will gift them a red packet to thank
              and bless them.
            </li>
            <li>
              The morning ceremony including prayers to ancestors will be
              expected to be done by early afternoon, where guests can have a
              break in the afternoon before the evening reception starts.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="fact-sheet_list_header font_main medium_v_small_font">
            Concorde Hotel Kuala Lumpur - 6pm
          </h3>
          <ul>
            <li>
              Join us for drinks at the beautiful cocktail bar at
              <a
                href="https://kualalumpur.concordehotelsresorts.com/"
                target="_blank"
              >
                Concorde Hotel Kuala Lumpur
              </a>
            </li>
            <li>
              There will be a reception desk manned by the wedding entourage to
              receive guests close to the cocktail bar.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="fact-sheet_list_header font_main medium_v_small_font">
            Xin Cuisine, Concorde Hotel Kuala Lumpur - 7pm
          </h3>
          <ul>
            <li>
              Head into the neighboring banquet hall for a sumptuous 8 course
              wedding breakfast.
            </li>
            <li>
              A Chinese wedding banquet is a spectacle to behold, an experience
              to be had and never quiet. We will have speeches from the bride,
              groom and a few special people throughout the evening. The emcee
              will then invite the couple and their families up on stage for a
              lively toast known affectionately as Yam Seng. The emcee will cue
              for the couple and their families on stage to start with a Yam
              Seng cheer, and prompt the rest of the guests on the floor to
              follow suit.
            </li>
            <li>
              The Yam Seng cheers will continue for at least three rounds before
              everyone is invited to return to their seats. The couple will then
              make their rounds and greet their guests at their respective
              tables and more round of Yam Seng cheers will ensue.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="fact-sheet_list_header font_main medium_v_small_font">
            Our Kuala Lumpur Recommendations
          </h3>
          <ul>
            <li>
              Spanning two peninsulas and an impressive archipelago of islands
              offering lush rainforest, undulating tea country and sandy
              beaches, tMalaysia is often neglected in favour of neighbouring
              Thailand, Indonesia or Singapore.
            </li>
            <li>
              Tim went to Malaysia for the first time early 2023 and has fallen
              in love with the cheap varied food and rich culture that the
              country has to offer, so Malaysia should be firmly at the top of
              every discerning traveller's bucket list, and with its hot climate
              year-round, it's a no brainer destination for a slice of winter
              sun.
            </li>
            <li>
              The Yam Seng cheers will continue for at least three rounds before
              everyone is invited to return to their seats. The couple will then
              make their rounds and greet their guests at their respective
              tables and more round of Yam Seng cheers will ensue.
            </li>
            <li>
              A stopover in the capital, Kuala Lumpur where the wedding will be
              held, is a natural starting point for your adventure. From
              marveling at local architecture to sampling the tastiest street
              food at the world famous night markets and enjoying cocktails at
              skyscrapers with skyline views of Kuala Lumpur, here are some good
              recommendations to start on.
            </li>
            <li>
              What to do in Kuala Lumpur -{"  "}
              <a
                href="https://www.timeout.com/kuala-lumpur/things-to-do/things-to-do-in-kl"
                target="_blank"
              >
                TimeOut
              </a>
              {"  "}and{"  "}
              <a
                href="https://www.klook.com/en-MY/blog/things-to-do-kl-attractions-malaysia/"
                target="_blank"
              >
                Kloock
              </a>
            </li>
            <li>
              What to eat in Kuala Lumpur -{"  "}
              <a href="https://klfoodie.com/street-food-kl/" target="_blank">
                KLFoodie
              </a>
              {"  "},{"  "}
              <a
                href="https://migrationology.com/best-restaurants-in-kuala-lumpur/"
                target="_blank"
              >
                Migrationology
              </a>
              {"  "}and{"  "}
              <a
                href="https://www.buddyz.co/en/insights/10-exotic-malaysian-fruits-you-must-try"
                target="_blank"
              >
                don't forget our tropical fruits!
              </a>
            </li>
            <li>
              Kuala Lumpur nightlife -{"  "}
              <a
                href="https://www.buro247.my/lifestyle/food-drink/speakeasy-bars-kl-klang-valley-malaysia.html"
                target="_blank"
              >
                Speakeasy bars
              </a>
              {"  "}and{"  "}
              <a
                href="https://www.therooftopguide.com/rooftop-bars-in-kuala-lumpur.html"
                target="_blank"
              >
                rooftop bars
              </a>
            </li>
            <li>
              Where else in Malaysia to explore - {"  "}
              <a
                href="https://www.planetware.com/malaysia/best-beaches-in-malaysia-mal-1-5.htm"
                target="_blank"
              >
                Beaches
              </a>
              {"  "},{"  "}
              <a
                href="https://foreverbreak.com/travel/malaysia/best-natural-attractions/"
                target="_blank"
              >
                for nature lovers
              </a>
              {"  "}and{"  "}
              <a
                href="https://www.lonelyplanet.com/articles/malaysia-food-culture"
                target="_blank"
              >
                other cities
              </a>
            </li>
            <li>
              The best airport to fly into Kuala Lumpur would be the Kuala
              Lumpur International Airport (KLIA). The direct flight time is
              typically 13 hours by Malaysia Airlines. If you prefer to break up
              your flight journey and have a leg stretch in between, we would
              recommend airlines which have a transit stop mid-way of the
              journey such as Emirates (Dubai) or Etihad (Abu Dhabi). Other
              notable airlines would be KLM or SIngapore Airlines but these have
              transit stops either closer to the start or end of the journey.
            </li>
            <li>
              The bride and groom will be staying in the{"  "}
              <a
                href="https://kualalumpur.concordehotelsresorts.com/"
                target="_blank"
              >
                Concorde Hotel Kuala Lumpur
              </a>
              {"  "}on the night of the wedding. The hotel has kindly offered
              friends and family of the bride and groom discounted rates on
              their rooms either for that evening or for their full stay in
              Kuala Lumpur. Reach out to Carmen or Tim for more details.
              Otherwise, here are recommendations on which neighbourhood in KL
              to stay in.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font_main small_font">Q&A</h2>
          <ul>
            <h4 className="mt_1 font_main medium_v_small_font">
              Q: What should I wear?
            </h4>
            <li>
              A: The dress code is wedding guest attire. There are cobblestones
              outside of the Bristol Register Office so we would recommend
              wearing comfortable shoes.
            </li>
            <h4 className="mt_1 font_main medium_v_small_font">
              Q: Is it easy to travel there by car?
            </h4>
            <li>
              A: You're able to get into central Bristol by car. Traffic can be
              heavy so allow plenty of time. If you're coming from East or North
              of Bristol we recommend entering via the M32, into Cabot Circus
              and Old Market.
            </li>
            <h4 className="mt_1 font_main medium_v_small_font">
              Q: Where should I park?
            </h4>
            <li>
              A: The large{"  "}
              <a
                href="https://www.google.com/maps/place/NCP+Bristol+Broadmead/@51.4565202,-2.5878698,17z/data=!3m1!4b1!4m6!3m5!1s0x48718e7741f75485:0x8e4b523b8cd73674!8m2!3d51.4565202!4d-2.5852949!16s%2Fg%2F1tfjkl6s?entry=ttu"
                target="_blank"
              >
                NCP Bristol Broadmead
              </a>
              {"  "} car park is 8 minutes walk from the Bristol Register
              Office.{" "}
              <a
                href="https://www.google.com/maps/place/The+Grove+Car+Park,+Bristol+BS1+4QY/@51.4491652,-2.596059,18z/data=!4m6!3m5!1s0x48718e7f544d0a2b:0xd7f113d3d7b9971d!8m2!3d51.4491653!4d-2.5949688!16s%2Fg%2F11bvtb2xj8?entry=ttu"
                target="_blank"
              >
                The Grove car park
              </a>{" "}
              is adjacent to Harbour House itself. Please be aware that there is
              a clean air zone in central Bristol for a minority of older
              vehicles.{" "}
              <a
                href="https://www.google.com/maps/place/NCP+Bristol+Broadmead/@51.4565202,-2.5878698,17z/data=!3m1!4b1!4m6!3m5!1s0x48718e7741f75485:0x8e4b523b8cd73674!8m2!3d51.4565202!4d-2.5852949!16s%2Fg%2F1tfjkl6s?entry=ttu"
                target="_blank"
              >
                Vehicle checker here
              </a>
              .
            </li>
            <h4 className="mt_1 font_main medium_v_small_font">
              Q: Is there a nearby train station?
            </h4>
            <li>
              A: Bristol Temple Meads is the main train station and is 15
              minutes walk from the Bristol Register Office, and 12 minutes walk
              from Harbour House.
            </li>
            <h4 className="mt_1 font_main medium_v_small_font">
              Q: Are there accommodation options in Bristol?
            </h4>
            <li>
              A: If you're staying in Bristol, the city hosts several high
              quality hotels. Here is Tripadvisor's {"  "}
              <a
                href="https://www.tripadvisor.co.uk/SmartDeals-g186220-Bristol_England-Hotel-Deals.html"
                target="_blank"
              >
                Top 10 Bristol Hotels.
              </a>
            </li>
          </ul>
        </div>
        <div className="fact-sheet_header_container">
          <h2 className="font_main small_font">
            Please RSVP{"  "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeHz_Ge78j_BSThaY3NEYHd7BEi1B8QtIjHvVNSlxrSCLrCBA/viewform?usp=sf_link"
              target="_blank"
            >
              here
            </a>
            {"  "}
            by 31st January 2024
          </h2>
          <h1 className="font_written mt_1">We can't wait to see you!</h1>
        </div>
      </section>
    </>
  );
}
