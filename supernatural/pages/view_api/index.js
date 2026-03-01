import Layout from "../../src/components/Layout";
import ApiNavbar from "../../src/components/api_results/ApiNavbar";
import EndpointPreview from "../../src/components/api_results/EndpointPreview";
import { apiPreviews } from "../../src/components/data/apiInfo";
import { useState } from "react";

// Import all tab components
import ViewAllEpisodesInfo from './all_episodes';
import ViewBodyCountInfo from './bodycount';
import ViewSeasonCharacterIntroInfo from './character_intro';
import ViewSeasonEpListInfo from './epList';
import ViewSeasonDeathInfo from './major_deaths';
import ViewSeasonUpdatesInfo from './major_updates';
import ViewSeasonMonsterInfo from './monsters';
import ViewNumEpSeasonInfo from './num_episodes';
import ViewRatingsInfo from "./ratings";
import ViewSeasonInfo from "./season_info";
import ViewSummaryInfo from "./summary";
import ViewYearAiredInfo from './year_aired';
import ViewRandomEpisodeInfo from "./random_episode";
import ViewSearchedEpisodeInfo from "./search_title";
import ViewEpTitle from "./get_title";
import ViewEpDesc from "./get_desc";
import ViewDirectors from "./get_director";
import ViewWriters from "./get_writers";
import ViewAirDate from "./get_aired";
import ViewCharacterInfo from "./get_character";
import ViewCharacterInfoById from "./get_character_by_id";

export default function ShowAPIDoc() {
  const [showSeason, setShowSeason] = useState(false);
  const [showEpisode, setShowEpisode] = useState(false);
  const [selectedEndpoint, setSelectedEndpoint] = useState(null);
  const [activeTab, setActiveTab] = useState("home");

  const notOpen = (<ion-icon name="caret-forward-outline"></ion-icon>);
  const isOpen = (<ion-icon name="caret-down-outline"></ion-icon>);

  // Home tab content
  const home = (
    <div className="api-overview open-sans-regular">
      <h1 className="api-main-title">The Winchester's Archive API</h1>
      <div>
        <h2>API Overview</h2>
        <p>
          The Winchester's Archive API provides comprehensive access to information about the CW's hit series, Supernatural. 
          This RESTful API is designed for:
        </p>
        <ul>
          <li>Fans who want to start a deep dive into the stats that makes Supernatural one of a kind</li>
          <li>Fellow developers that want to make other Supernatural-based applications</li>
          <li>Researchers analyzing data</li>
          <li>Students learning API Integration</li>
        </ul>
        <p>All endpoints return JSON responses and support standard HTTP request methods.</p>
        <p>The application is split into these categories: Seasons, Episodes, Characters, and Monsters.</p>
      </div>

      <div>
        <h2>Introduction</h2>
        <p>The Winchester's Archive API exposes structured data originally made for my Supernatural Website, with information from all 15 seasons of Supernatural.</p>
        <p>Each endpoint is designed to be predictable, readable, and easy to integrate into front-end or back-end aplications</p>
        <p>Core features:</p>
        <ul>
          <li>Consistent JSON formatting</li>
          <li>Defined Query Parameters</li>
          <li>Endpoints organized based on categories</li>
          <li>Sample request and response examples</li>
        </ul>
        <p>All responses allow for parsing to be simple and efficient.</p>
      </div>

      <div>
        <h2>Getting Started- How to use the API</h2>
        <p>Enter the full URL (with all the arguments passed) into the browser of your choice. </p>
        <code>https://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1&type=body_count</code>
        <p>Using JavaScript:</p>
        <pre>
            <code>{`
              fetch("https://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1&type=body_count")
                .then(response => {
                  if (!response.ok) {
                    throw new Error("Network response was not ok");
                  }
                  return response.json();
                })
                .then(data => {
                  console.log("Season 1 Body Count:", data);
                })
                .catch(error => {
                  console.error("Error fetching data:", error);
                });
              `}
            </code>
        </pre>
        <p>Using Async/Await</p>
        <pre>
          <code>
            {`async function getBodyCount() {
              try {
                const response = await fetch(
                  "https://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1&type=body_count"
                );

                if (!response.ok) {
                  throw new Error("Request failed");
                }

                const data = await response.json();
                console.log(data);
              } catch (error) {
                console.error("Error:", error);
              }
            }

            getBodyCount();
            `}
          </code>
        </pre>
        <p>Using cURL</p>
        <code>curl -X GET "https://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1&type=body_count"</code>
        <p>Using Axios</p>
        <pre>
          <code>
            {`
            npm install axios

            import axios from "axios";

            axios
              .get("https://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1&type=body_count")
              .then(response => {
                console.log(response.data);
              })
              .catch(error => {
                console.error(error);
              });
            `}
          </code>
        </pre>
        <br></br>
      
        
      </div>
      <div>
        <h2>Output- What to Expect</h2>
        <p>Example of a JSON Response</p>
        <pre>
          <code>
            {`[{"id":"dean","name":"Dean Winchester","text":"A loyal, battle-ready hunter searching for their missing father."},{"id":"sam","name":"Sam Winchester","text":"A reluctant hunter drawn back in after his girlfriend's death."},{"id":"john","name":"John Winchester","text":"A missing hunter whose quest for revenge drives the story."},{"id":"mary","name":"Mary Winchester","text":"Sam and Dean's mom. Once a hunter herself, she was killed by Azazel."},{"id":"azazel","name":"Azazel","text":"The Yellow-Eyed Demon who killed Mary and has eyes for Sam."},{"id":"meg","name":"Meg","text":"A demon who is originally loyal to Hell, but ends up helping the Winchesters."},{"id":"bobby","name":"Bobby Singer","text":"A father figure to Sam and Dean, Bobby is an experienced, no-nonsense hunter who helps guide and support them."},{"id":"missouri","name":"Missouri Mosely","text":"A powerful psychic who helps the Winchesters during a hunt."},{"id":"jess","name":"Jessica (Jess) Moore","text":"Sam's supportive girlfriend at Stanford."},{"id":"harry","name":"Harry Spangler","text":"A supernaturalist who is best friends with Ed. Will eventually launch the Ghostfacers."},{"id":"ed","name":"Ed Zeddmore","text":"A supernaturalist who is friends with Harry. Will eventually launch the Ghostfacers."}]`}
          </code>
        </pre>
        <p>All responses return in JSON, except num_episodes, year_aired, and other simple stats that only require one single return VALUE.</p>
        <br></br>
        <p>Example of an Error Response</p>
        <p>The API returns an error message with information about why the request failed.</p>
        <code>{`{
            "error": "Invalid season number"
          }
          `}
        </code>
        <p>Parameters are validated with checks ensuring that numbers passed are within the required range and that string parameters match a valid endpoint category.</p>
        <br></br>
        <p>Status Codes</p>
        <ul>
          <li>200- Success</li>
          <li>400- Bad Request</li>
          <li>404- Not Found</li>
          <li>500- Server Error</li>
        </ul>
      </div>



      <div>
        <h2>Documentation</h2>
        <p>This API only operates under a single version. Future versions may introduce new endpoints or filter options based on user feedback.</p>
        <p>Performance and Usage:</p>
        <ul>
          <li>No authentication required</li>
          <li>No API key required</li>
          <li>PUblic read-only access</li>
        </ul>
        
        <p>Possible Endpoints are listed below. Click on the section to expand it and see a sneak preview of the possible endpoints for that section!</p>
      </div>

      <div>
        <h2 onClick={() => setShowSeason(!showSeason)} style={{ cursor: "pointer" }}>
          {showSeason ? isOpen : notOpen} Season Information
        </h2>
        <p>Click an endpoint title to view season details:</p>
        {showSeason && (
          <div>
            {apiPreviews.slice(0, 11).map((prev, key) => (
              <div key={key} style={{ cursor: "pointer", margin: "5px 0" }} onClick={() => setActiveTab(prev.key)}>
                 <EndpointPreview
                    key={key}
                    apiTitle={prev.title}
                    apiMethodType={prev.methodType}
                    apiDescription={prev.description}
                    apiCommand={prev.code}
                    apiLink={prev.link}
                    onClick={() => setSelectedEndpoint(prev)}
                  />
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <h2 onClick={() => setShowEpisode(!showEpisode)} style={{ cursor: "pointer" }}>
          {showEpisode ? isOpen : notOpen} Episode Information
        </h2>
        <p>Click an endpoint title to view episode details:</p>
        {showEpisode && (
          <div>
            {apiPreviews.slice(11).map((prev, key) => (
              <div key={key} style={{ cursor: "pointer", margin: "5px 0" }} onClick={() => setActiveTab(prev.key)}>
                 <EndpointPreview
                    key={key}
                    apiTitle={prev.title}
                    apiMethodType={prev.methodType}
                    apiDescription={prev.description}
                    apiCommand={prev.code}
                    apiLink={prev.link}
                    onClick={() => setSelectedEndpoint(prev)}
                  />
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <h2>About the Stack</h2>
        <p>The information for this project was originally gathered for a supernatural themed website. I later developed this API to help myself understand how to implement/design APIs and to allow other developers to use my work in their own creation and analyses.</p>
        <p>For the API to work, the project was converted from React.js only to using Next.js API routes</p>
        <p>The project was hosted on vercel and pushed through GitHub. Feel free to check it out!</p>
        <code>https://github.com/hmkuklinski/spn</code>
        <p>This project is based on a serverless function architecture.</p>
      </div>
      <div>
        <h2>Contact Me</h2>
        <p>If you find any issues when using the API, please feel free to send me an email: <a href="mailto:hmkuklinski@gmail.com?subject=API Inquiry&body=Hi, I have a question about your API."> Contact Developer</a>
        </p><p>If you like my work and want to connect, please feel free to check these out: </p>
        <ul className="contact-ul">
          <li><a href="https://www.linkedin.com/in/hannahkuklinski">Let's Connect on LinkedIn</a></li>
          <li><a href="https://www.github.com/hmkuklinski">Follow my work on GitHub</a></li>
          <li><a href="http://hannahkuklinski.vercel.app">View my other projects</a></li>
        </ul>
        <p>Thank you for using my API. Have a great day! :D</p>
      </div>
    </div>
  );

  // Map of all tab components
  const tabs = {
    home: home,
    all_episodes: <ViewAllEpisodesInfo />,
    body_count: <ViewBodyCountInfo />,
    character_intro: <ViewSeasonCharacterIntroInfo />,
    ep_list: <ViewSeasonEpListInfo />,
    major_deaths: <ViewSeasonDeathInfo />,
    major_updates: <ViewSeasonUpdatesInfo />,
    monsters: <ViewSeasonMonsterInfo />,
    num_episodes: <ViewNumEpSeasonInfo />,
    ratings: <ViewRatingsInfo />,
    season_info: <ViewSeasonInfo />,
    summary: <ViewSummaryInfo />,
    year_aired: <ViewYearAiredInfo />,
    random_episode: <ViewRandomEpisodeInfo />,
    search_title: <ViewSearchedEpisodeInfo />,
    get_title: <ViewEpTitle />,
    get_desc: <ViewEpDesc />,
    get_director: <ViewDirectors />,
    get_writers: <ViewWriters />,
    get_aired : <ViewAirDate />,
    get_character: <ViewCharacterInfo/>,
    get_character_by_id: <ViewCharacterInfoById />
    
  };

  return (
    <Layout>
      <div className="api-main-container">
        {/* Sidebar with SPA navigation */}
        <ApiNavbar setActiveTab={setActiveTab} />

        {/* Render active tab */}
        <div className="api-tab-content">
          {tabs[activeTab]}
        </div>
      </div>
    </Layout>
  );
}
