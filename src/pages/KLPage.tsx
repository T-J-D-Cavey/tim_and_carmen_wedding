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
              happens in the morning of a Malaysian Chinese wedding, and is
              taking place in one of Carmen's family homes in{"  "}
              <a
                href="https://www.google.com/maps/place/8,+Jalan+Setia+Marina+2%2F6,+Cyberjaya,+63000+Cyberjaya,+Selangor,+Malaysia/@2.9374212,101.6211728,15z/data=!3m1!4b1!4m6!3m5!1s0x31cdb6b8c01dcc2d:0x9d239945897f28d!8m2!3d2.9373998!4d101.6314725!16s%2Fg%2F11pdpxsd50?entry=ttu"
                target="_blank"
              >
                Setia Eco Glades, Cyberjaya
              </a>
            </li>
            <li>
              Before we can meet as a couple, Tim has to gatecrash with the help
              of his groomsmen as a test of his sincerity and love, and
              represented by the reluctance of Carmen's family to marry their
              youngest daughter off.
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
              in traditional Chinese wedding attire, we will pay our respects by
              addressing our elders by their formal titles and serving them a
              cup of tea. In return, our relatives will gift us either a red
              packet or gold jewelry to bless our union and welcome us into the
              family.
            </li>
            <li>
              The younger relatives will serve us tea and address us by our new
              formal titles in the family. In return, we will gift them a red
              packet to thank and bless them.
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
              Join us for drinks at the beautiful cocktail bar at{"  "}
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
              A Chinese wedding banquet is a spectacle to behold and an
              experience to be had. We will have speeches from the bride, groom
              and a few special people throughout the evening. The emcee will
              then invite the couple and their families up on stage for a lively
              toast known affectionately as Yam Seng. The emcee will cue for the
              couple and their families on stage to start with a Yam Seng cheer,
              and prompt the rest of the guests on the floor to follow suit.
            </li>
            <li>
              The Yam Seng cheers will continue for at least three rounds before
              everyone is invited to return to their seats. The couple will then
              make their rounds and greet their guests at their respective
              tables and more rounds of Yam Seng cheers will ensue.
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
              beaches, Malaysia is often neglected in favour of neighbouring
              Thailand, Indonesia or Singapore.
            </li>
            <li>
              Tim went to Malaysia for the first time early 2023 and has fallen
              in love with the cheap varied food and rich culture that the
              country has to offer. We think Malaysia should be firmly at the
              top of every discerning traveller's bucket list, and with its hot
              climate year-round, it's a no brainer destination for a slice of
              winter sun.
            </li>
            <li>
              A stopover in the capital, Kuala Lumpur where the wedding will be
              held, is a natural starting point for your adventure. From
              marveling at local architecture to sampling the tastiest street
              food at the world famous night markets and enjoying cocktails at
              skyscrapers with skyline views of Kuala Lumpur, here are some good
              recommendations to start on:
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
              Lumpur International Airport (KLIA). The direct flight time from
              the UK is typically 13 hours by Malaysia Airlines. If you prefer
              to break up your flight journey and have a leg stretch in between,
              we would recommend airlines which have a transit stop mid-way of
              the journey such as Emirates (Dubai) or Etihad (Abu Dhabi). Other
              notable airlines would be KLM or Singapore Airlines but these have
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
              Otherwise,{"  "}
              <a
                href="https://shewandersabroad.com/where-to-stay-in-kuala-lumpur/"
                target="_blank"
              >
                here are recommendations
              </a>
              {"  "}
              on which neighbourhood in KL to stay in.
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
              A: If you're joining the morning celebrations as a family member
              or a guest, feel free to wear smart casual as some of the
              gatecrashing games will happen outdoors where it may be rather hot
              and humid. Please wear comfortable shoes which can be easily taken
              off as it is common etiquette to remove shoes before entering
              Chinese households.
            </li>
            <li>
              We would suggest formal evening wear for the evening wedding
              reception at the Concorde Hotel.
            </li>
            <li>
              Please avoid wearing red as this is the bride's colour in the
              morning ceremonies. Avoid wearing white or black. These colours
              are often worn at Chinese funerals and therefore considered bad
              luck, so best to stay away from wearing these colours. However,
              black or white accents are just fine!
            </li>
            <h4 className="mt_1 font_main medium_v_small_font">
              Q: What dishes should I expect at a Chinese wedding banquet?
            </h4>
            <li>
              A: Each and every entree dish served at a Chinese wedding banquet
              is carefully selected and served for a reason, usually to do with
              a certain blessing that is wished toward the lucky bride and
              groom. These blessings often symbolize happiness,
              prosperity, longevity or fertility. All eight Chinese (non-halal)
              dishes will be shared by ten people at
              each banquet table. Unfortunately the restaurant won't be able to
              accomodate specific dietary requirements. If you are a vegan,
              vegetarian, or can only consume halal food, please let Carmen know
              such that she can arrange a separate meal that will be sourced
              from outside of the restaurant.
            </li>
            <h4 className="mt_1 font_main medium_v_small_font">
              Q: What to gift the couple?
            </h4>
            <li>
              A: Chinese wedding traditions are very different from Western
              wedding traditions, including wedding gifts. Traveling to Malaysia
              to celebrate Tim and Carmen's union is already the greatest gift
              to the couple. If you are stubborn and would still like to get
              something for the newlyweds, then traditional Chinese wedding
              gifts such as red packets and gold jewelry are the first choice of
              gifts.
            </li>
            <li>
              Red packet is called “hong bao” or “li shi” in Chinese, which
              represents good fortune. The money stuffed red packet is the most
              common and feasible Chinese wedding gift as it helps the newlyweds
              to begin to establish their life together.
            </li>
            <li>
              Gold jewelry is only typically given by the elders of the family
              members during the morning tea ceremony. Since gold is the most
              valuable item in Chinese culture, giving gold jewelry to the bride
              represents that she is the most precious person in the family.
            </li>
            <li>
              Older family members typically gift red packets and gold jewelry
              in the morning tea ceremony where wedding guests gift red packets
              to the wedding entourage desk at the evening reception when they
              arrive.
            </li>
            <h4 className="mt_1 font_main medium_v_small_font">
              Q: Is it easy to travel to all the locations over the day?
            </h4>
            <li>
              A: If you're a non-Malaysian, we would suggest that you download
              the Grab taxi app (equivalent of our Uber / Bolt in UK) to travel
              to the morning ceremony location. Carmen's family homes are not
              located near a public transport stop where it would be comfortable
              to walk in such humid weather!
            </li>
            <li>
              Concorde Hotel Kuala Lumpur is located in central Kuala Lumpur so
              you can easily walk from your accommodation if you live nearby and
              wish to do so. Otherwise, Bukit Nanas is the closest monorail
              station which is a 2 minutes walk to the hotel or Grab taxi it is!
            </li>
            <li>
              If you're a Malaysian and considering driving to the morning
              ceremony location, can we please ask you to kindly carpool as much
              as possible and let Carmen know your vehicle registration numbers
              beforehand. Carmen's family home is in a gated neighbourhood so
              there will be limited parking spaces and will require notification
              to the security guard house beforehand. If you're driving to the
              Concorde Hotel in the evening, the hotel parking fee is RM10 flat
              fee.
            </li>
            <li>
              Traffic congestion in Kuala Lumpur may be bad during rush hour or
              in the evenings so please allow sufficient amount of traveling
              time to get to the respective locations if you're driving or in a
              taxi.
            </li>
            <h4 className="mt_1 font_main medium_v_small_font">
              Q: What will the weather be like in November?
            </h4>
            <li>
              A: Hot and humid. Malaysia has only one season - summer; so
              temperatures are usually in the low to mid 30s during the day
              before cooling down to 20s in the evenings.
            </li>
            <li>
              The eastern monsoon will hit Kuala Lumpur during November, but
              even in the monsoon season, rainfall is still quite unpredictable.
              Showers are always possible, but if you do encounter one, it's not
              likely that it will ruin your day - you might even welcome it
              after a scorching hot day of hiding in air-conditioned shopping
              malls.
            </li>
            <h4 className="mt_1 font_main medium_v_small_font">
              Q: Is the wedding indoors or outdoors?
            </h4>
            <li>
              The groom's procession and the start of the gatecrashing will be
              outdoors, with the rest of the day to be indoors. It can be easily
              flexed to be fully indoors if the weather turns sour in the
              morning.
            </li>
            <h4 className="mt_1 font_main medium_v_small_font">
              Q: Where would you recommend staying in Kuala Lumpur?
            </h4>
            <li>
              As the wedding is only a full day long with only the morning
              ceremony located outside central KL, we would recommend that you
              base yourself in central KL or anywhere that has good train links
              into the city where all the tourist attractions would be.
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
