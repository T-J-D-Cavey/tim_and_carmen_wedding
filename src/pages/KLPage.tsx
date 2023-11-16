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
              The fetching of the bride and gatecrash traditionally happens in
              the morning of a Chinese Malaysian wedding, and is taking place in
              one of Carmen's family homes in{"  "}
              <a
                href="https://www.google.com/maps/place/Isle+of+Kamares,+Setia+Eco+Glades/@2.9376358,101.6339128,19.09z/data=!4m10!1m2!2m1!1sSETIA+ECO+GLADES,+CYBERJAYA+kuala+lumpur!3m6!1s0x31cdb7eef2206123:0xaa00094464aed8c1!8m2!3d2.9376229!4d101.6348313!15sCihTRVRJQSBFQ08gR0xBREVTLCBDWUJFUkpBWUEga3VhbGEgbHVtcHVyWikiJ3NldGlhIGVjbyBnbGFkZXMgY3liZXJqYXlhIGt1YWxhIGx1bXB1cpIBD2hvdXNpbmdfc29jaWV0eZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSTk16UmZVMGgzRUFF4AEA!16s%2Fg%2F11h3jh81ry?entry=ttu"
                target="_blank"
              >
                Setia Eco Glades, Cyberjaya
              </a>
              .
            </li>
            <li>
              The Groom and his groomsmen will have to be generous and succeed
              at all challenges set by the bridesmaids if Tim is to gain their
              permission to marry the bride.
            </li>
            <li>
              Everyone is welcome to observe this tradition. There will be a
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
              Taking place in the same location as the gatecrashing, this
              traditional ceremony is where the family of the bride and groom
              sit down together.
            </li>
            <li>
              Dressed in traditional Chinese wedding suits, tea will be served,
              gifts offered and a roast pork shared between famalies.
            </li>
            <li>
              Fireworks are lit to signify the blessing of both families for the
              marriage.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="fact-sheet_list_header font_main medium_v_small_font">
            Concorde Kuala Lumpur - 6pm
          </h3>
          <ul>
            <li>
              Join us for drinks in the beautiful bar at{" "}
              <a
                href="https://kualalumpur.concordehotelsresorts.com/"
                target="_blank"
              >
                Concorde Kuala Lumpur hotel
              </a>
              .
            </li>
            <li>
              Dress code: comfortable wedding attire. We would ask anyone
              wearing a dress to avoid wearing white, red or black, as this is
              traditionally seen as unlucky on a wedding day.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="fact-sheet_list_header font_main medium_v_small_font">
            Xin Cuisine, Concorde Kuala Lumpur - 7pm
          </h3>
          <ul>
            <li>
              Head into the neibouring banquet hall for a sumptuous 8 course
              wedding breakfast.
            </li>
            <li>
              We will be having speeches from the bride and groom, both fathers
              and some special friends.
            </li>
            <li>
              Pictures of our UK celebration will be available and a video of
              the morning's gatecrashing and tea cermoney will be played just
              before the 10pm finish.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="fact-sheet_list_header font_main medium_v_small_font">
            What Happens Afterwards
          </h3>
          <ul>
            <li>
              Everyone is welcome to join the bride and groom as we head into KL
              for drinks.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="fact-sheet_list_header font_main medium_v_small_font">
            Kuala Lumpur Travel and Accommodation
          </h3>
          <ul>
            <li>
              The bride and groom will be staying in the{" "}
              <a
                href="https://kualalumpur.concordehotelsresorts.com/"
                target="_blank"
              >
                Concorde Kuala Lumpur hotel
              </a>{" "}
              on the night of the wedding. The hotel is kindly offering friends
              and family of the bride and groom discounted rates on their rooms.
              Reach out to Carmen or Tim for more details.
            </li>
            <li>Content here is yet to be written</li>
          </ul>
        </div>
        <div>
          <h3 className="fact-sheet_list_header font_main medium_v_small_font">
            Our Kuala Lumpur Recommondations
          </h3>
          <ul>
            <li>Content here is yet to be written</li>
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
