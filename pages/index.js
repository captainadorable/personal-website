import { Navbar } from "../components/navbar/navbar";
import { Hero } from "../components/hero/hero";
import { About } from "../components/about/about";
import { Repos } from "../components/repos/repos";
import { Contact } from "../components/contact/contact";
import { Footer } from "../components/footer/footer";
import { NextSeo } from "next-seo";


function Home({ repos, status, statusColor, spotify, song }) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center content-center ">
        <NextSeo title="Home" />
        <Navbar />
        <Hero
          status={status}
          statusColor={statusColor}
          spotify={spotify}
          song={song}
        />
        <About />
        <Repos repos={repos} />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

const apiURL =
  "https://api.github.com/users/captainadorable/repos?per_page=100";
  

const lanyardURL = "https://api.lanyard.rest/v1/users";
const DISCORD_ID = "529982737298358289";
const axios = require("axios");

Home.getInitialProps = async () => {
  //----------------------------------------------------------------------------------------------------------
  //GITHUB REPOS
  console.log(process.env.DISCORD_ID)
  const repos = [];
  const data = (await axios.get(apiURL)).data;

  data.map((repo) => {
    let repoProps = {
      repoName: repo.name,
      repoDesc: repo.description,
      repoStars: repo.stargazers_count,
      repoURL: repo.html_url,
    };
    repos.push(repoProps);
  });

  //-----------------------------------------------------------------------------------------------------------
  //DISCORD DATA

  const lanyardData = (await axios.get(`${lanyardURL}/${DISCORD_ID}`)).data;

  const status = lanyardData.data.discord_status;
  const spotify = lanyardData.data.spotify;

  var statusColor;
  if (status == "dnd") statusColor = "#AA3737";
  if (status == "online") statusColor = "#0EC661";
  if (status == "idle") statusColor = "#FDE68A";
  if (status == "offline") statusColor = "#98ACAE";

  return {
    repos: repos,
    status: status,
    spotify: spotify,
    statusColor: statusColor,
  };
};

export default Home;
