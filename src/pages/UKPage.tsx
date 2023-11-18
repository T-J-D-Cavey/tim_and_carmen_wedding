import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import arrow_icon from "../../public/images/arrow_icon.png";

export function UKPage() {
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
          <h1 className="font_written mb_1">Our English Celebration</h1>
          <h2 className="font_main small_font">What To Expect On The Day</h2>
        </div>
        <div>
          <h3 className="fact-sheet_list_header font_main medium_v_small_font">
            Bristol Register Office - 11:15am
          </h3>
          <ul>
            <li>
              We've hired the Grand Council Chamber of Bristol Register Office
              from 11:15am - 11:45am for our marriage registration ceremony. 
              Please kindly be there on time for a prompt start. 
            </li>
            <li>
              The room has a capacity of 150 people, so there's plenty of space
              for everyone.
            </li>
            <li>
              We'll have photos outside after the marriage registration ceremony before
              heading to the reception which is a nine minute walk away.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="fact-sheet_list_header font_main medium_v_small_font">
            Harbour House - 1pm
          </h3>
          <ul>
            <li>
              This beautiful restaurant sits right on the canal. We'll have
              bubbly and canapes to start the celebration and a buffet lunch
              will follow.
            </li>
            <li>
              We have the space for five hours. We'll be having speeches
              throughout as we hear from the bride, groom and a few special people.
            </li>
            <li>
              Following food and speeches we'll create a dancefloor and get the
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
            Our Bristol Recommendations
          </h3>
          <ul>
            <li>
              We love Bristol and we would recommend you spend some time in the
              city to enjoy what it can offer.
            </li>
            <li>Here is TimeOut magazine's 
              {" "}
              <a
                href="https://www.timeout.com/bristol/things-to-do/20-great-things-to-do-in-bristol"
                target="_blank"
              >
                top 20 things to do in Bristol
              </a>. Their number 15 was the location of our first date...number 19 our second!
            </li>
            <li>
              We'll be in Bristol in the days leading up to and after the
              celebration. We're based in Lockleaze, North Bristol. We'll have
              friends and family from a few far flung
              places, so reach out to Tim or Carmen in advance to arrange something.
            </li>
          </ul>
        </div>
        <div>
        <h2 className="font_main small_font">Q&A</h2>
          <ul>
            <h4 className="mt_1">Q: What is the dress code?</h4>
            <li>A: 
              The dress code is wedding guest attire. There are
              cobbles lining the outside of the Bristol Register Office. So we
              would recommend wearing comfortable shoes.
            </li>
            <h4 className="mt_1">Q: Is it easy to travel there by car?</h4>
            <li>A: 
              You're able to get into central Bristol by car. Traffic can be
              heavy so allow plenty of time. If you're coming from East or North
              of Bristol we recommend entering via the M32, into Cabot Circus
              and Old Market.
            </li>
            <h4 className="mt_1">Q: Where should I park?</h4>
            <li>A: 
              The large{"  "}
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
            <h4 className="mt_1">Q: Is there a nearby train station?</h4>
            <li>A: 
              Bristol Temple Meads is the main train station and is 15 minutes
              walk from the Bristol Register Office, and 12 minutes walk from
              Harbour House.
            </li>
            <h4 className="mt_1">Q: Are there accommodation options in Bristol?</h4>
            <li>A: 
              If you're staying in Bristol, the city hosts several high quality
              hotels.{"  "}
              <a
                href="https://www.tripadvisor.co.uk/SmartDeals-g186220-Bristol_England-Hotel-Deals.html"
                target="_blank"
              >
                Here is Tripadvisor's Top 10 Bristol Hotels.
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
            by 31st January
          </h2>
          <h1 className="font_written mt_1">We can't wait to see you!</h1>
        </div>
      </section>
    </>
  );
}
