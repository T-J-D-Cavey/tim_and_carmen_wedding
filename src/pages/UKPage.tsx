import { useNavigate } from "react-router-dom";
import arrow_icon from "../../public/images/arrow_icon.png";

export function UKPage() {
  const navigate = useNavigate();
  function clickHander(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    navigate('/');
  }
  return (
    <>
      <div className="fact_sheet_arrow_icon" onClick={clickHander}>
        <img src={arrow_icon} alt="" />
      </div>
      <section className="fact-sheet_section_container v_small_font">
        <div className="fact-sheet_header_container">
          <h1 className="font_written mb_1">Our English Celebration</h1>
          <h2 className="font_main small_font">What To Expect On The Day</h2>
        </div>
        <div>
          <h3 className="fact-sheet_list_header font_main medium_v_small_font">
            Bristol Register Office - 11:15am
          </h3>
          <ul>
            <li>
              We have hired the Grand Council Chamber of Bristol Register Office
              from 11:15am - 11:45am for our marriage ceremony.
            </li>
            <li>
              The room has a capacity of 150 seats, so there's plenty of space
              for everyone.
            </li>
            <li>
              Our slot is brief so we recommend you get there early.{"  "}
              <a
                href="https://www.google.com/maps/place/NCP+Bristol+Broadmead/@51.4565202,-2.5878698,17z/data=!3m1!4b1!4m6!3m5!1s0x48718e7741f75485:0x8e4b523b8cd73674!8m2!3d51.4565202!4d-2.5852949!16s%2Fg%2F1tfjkl6s?entry=ttu"
                target="_blank"
              >
                There's of parking nearby
              </a>
              .
            </li>
            <li>
              We'll have photos outside after the marriage ceremony before
              heading to the reception which is only a five minute walk away.
            </li>
            <li>Dress code is comfortable wedding attire.</li>
          </ul>
        </div>
        <div>
          <h3 className="fact-sheet_list_header font_main medium_v_small_font">
            Harbour House - 1pm
          </h3>
          <ul>
            <li>
              This beautiful restaurant sits right on the canel and is a five
              minute walk from the Bristol Register Office.
            </li>
            <li>
              We'll have bubbly and canopes to start the celebration and a
              buffet lunch will follow. A seating plan won't be provided and
              there will be enought seats for everyone.
            </li>
            <li>
              We have the space for five hours. We'll be having speeches
              throughout as we hear from the bride, the groom, both fathers and
              a few special friends.
            </li>
            <li>
              Following food and speechers we'll create a dancefloor and get the
              party started. Interested in DJ'ing? Reach out to Tim or Carmen.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="fact-sheet_list_header font_main medium_v_small_font">
            What Happens Afterwards
          </h3>
          <ul>
            <li>
              Everyone is welcome to stay with us beyond 6pm as we head into
              town for a dance. We're near plenty of pubs, bars and clubs.
            </li>
            <li>
              We'll play it by ear based on the weather and see what the group
              are up for on the day. It's a bank holiday weekend so Bristol will
              be buzzing!
            </li>
          </ul>
        </div>
        <div>
          <h3 className="fact-sheet_list_header font_main medium_v_small_font">
            Bristol Travel and Accommodation
          </h3>
          <ul>
            <li>
              Bristol Temple Meads is the main train station and is 15 minutes
              walk from the Bristol Register Office, and 12 minutes walk from
              Harbour House.
            </li>
            <li>
              You're able to get into central Bristol by car. Traffic can be
              heavy so allow plenty of time. If you're coming from East or North
              of Bristol we recommend entering via the M32, from there a short
              drive to the recommended parking in Broadmead
            </li>
            <li>
              If you were planning on spending a night or two, Bristol hosts
              several high quality hotels.{"  "}
              <a
                href="https://www.tripadvisor.co.uk/SmartDeals-g186220-Bristol_England-Hotel-Deals.html"
                target="_blank"
              >
                Here is Tripadvisor's Top 10 Bristol Hotels.
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="fact-sheet_list_header font_main medium_v_small_font">
            Our Bristol Recommendations
          </h3>
          <ul>
            <li>
              We love Bristol and we would recommend you spend some time in the
              city to enjoy what it can offer.
            </li>
            <li>
              {" "}
              <a
                href="https://www.timeout.com/bristol/things-to-do/20-great-things-to-do-in-bristol"
                target="_blank"
              >
                Here is TimeOut magazine's top 20 things to do in Bristol
              </a>
            </li>
            <li>
              We'll be in Bristol in the days leading up to and after the
              celebration. We're based in Lockleaze, North Bristol. We'll have
              friends and family from Malaysia, New Zealand and other far flung
              places, so reach out to Tim or Carmen to arrange something.
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
            by February 2024
          </h2>
          <h1 className="font_written mt_1">We can't wait to see you!</h1>
        </div>
      </section>
    </>
  );
}
