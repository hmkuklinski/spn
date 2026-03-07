# The Winchesters Archive API: Overview
The Winchester's Archive API provides comprehensive access to information about the CW's hit series, Supernatural. This RESTful API is designed for:

* Fans who want to start a deep dive into the stats that makes Supernatural one of a kind
* Fellow developers that want to make other Supernatural-based applications
* Researchers analyzing data
* Students learning API Integration
* All endpoints return JSON responses and support standard HTTP request methods.

The application is split into these categories: Seasons, Episodes, Characters, and Monsters.

## Introduction
The Winchester's Archive API exposes structured data originally made for my Supernatural Website, with information from all 15 seasons of Supernatural.
Each endpoint is designed to be predictable, readable, and easy to integrate into front-end or back-end aplications

Core features:
* Consistent JSON formatting
* Defined Query Parameters
* Endpoints organized based on categories
* Sample request and response examples
* All responses allow for parsing to be simple and efficient.

## Getting Started- How to use the API
Enter the full URL (with all the arguments passed) into the browser of your choice.
<code>
https://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1&type=body_count
</code> 

Using JavaScript:


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
              


Using Async/Await:
                   
    async function getBodyCount() {
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

            
Using cURL:

    curl -X GET "https://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1&type=body_count"


Using Axios:


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
            

## Output- What to Expect
Example of a JSON Response:

    [
      {"id":"dean","name":"Dean Winchester","text":"A loyal, battle-ready hunter searching for their missing father."},
      {"id":"sam","name":"Sam Winchester","text":"A reluctant hunter drawn back in after his girlfriend's death."},
      {"id":"john","name":"John Winchester","text":"A missing hunter whose quest for revenge drives the story."},
      {"id":"mary","name":"Mary Winchester","text":"Sam and Dean's mom. Once a hunter herself, she was killed by Azazel."},
      {"id":"azazel","name":"Azazel","text":"The Yellow-Eyed Demon who killed Mary and has eyes for Sam."},
      {"id":"meg","name":"Meg","text":"A demon who is originally loyal to Hell, but ends up helping the Winchesters."},
      {"id":"bobby","name":"Bobby Singer","text":"A father figure to Sam and Dean, Bobby is an experienced, no-nonsense hunter who helps guide and support them."},
      {"id":"missouri","name":"Missouri Mosely","text":"A powerful psychic who helps the Winchesters during a hunt."},
      {"id":"jess","name":"Jessica (Jess) Moore","text":"Sam's supportive girlfriend at Stanford."},
      {"id":"harry","name":"Harry Spangler","text":"A supernaturalist who is best friends with Ed. Will eventually launch the Ghostfacers."},
      {"id":"ed","name":"Ed Zeddmore","text":"A supernaturalist who is friends with Harry. Will eventually launch the Ghostfacers."}
    ]

All responses return in JSON, except num_episodes, year_aired, and other simple stats that only require one single return VALUE.



## Example of an Error Response

The API returns an error message with information about why the request failed.

    { "error": "Invalid season number" }

Parameters are validated with checks ensuring that numbers passed are within the required range and that string parameters match a valid endpoint category.


## Status Codes

200- Success
400- Bad Request
404- Not Found
500- Server Error
Documentation
This API only operates under a single version. Future versions may introduce new endpoints or filter options based on user feedback.

## Performance and Usage:

* No authentication required
* No API key required
* Public read-only access

Possible Endpoints are listed below. Click on the section to expand it and see a sneak preview of the possible endpoints for that section!

<br>
<br>
<br>
<hr>

# Season Endpoints
### [GET] Season- All Information
Fetches detailed information about a specific Supernatural season, including the season title, titlecard images, episode list, character introductions, major deaths, episode count, ratings, and other season metadata.
              
        sample request: GET http://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1

### [GET] Season- Episode List
Fetches detailed information about the episodes of a specific Supernatural season, including information about the id, title, num, photo, description, date aired, directors, and writers.

      sample request: GET http://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1&type=epList

### [GET] Season- Summary
Fetches a generated summary about what the main themes of the specified season are.

    sample request: GET http://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1&type=summary

### [GET] Season- Character Introductions
Fetches a generated list that holds character objects (containing the name, character id, description of the character.

    sample request: GET http://supernatural-lore.vercel.ap/api/episodesAPI?seasonNum=1&type=character_intro

### [GET] Season- Character Deaths
Fetches a generated list that holds character objects (containing the name, character id, description of how character died.

    sample request: GET http://supernatural-lore.vercel.ap/api/episodesAPI?seasonNum=1&type=major_deaths

### [GET] Season- Major Character Updates
Fetches a generated list that holds character objects (containing the name, character id and description of what the major character update was for the season.

    sample request: GET http://supernatural-lore.vercel.ap/api/episodesAPI?seasonNum=1&type=major_updates

### [GET] Season- Number of Episodes
Gets the number of episodes that premiered in the specified season

    sample request: GET http://supernatural-lore.vercel.ap/api/episodesAPI?seasonNum=1&type=num_episodes

### [GET] Season- Year Aired
Gets the year that the specified season premiered on television.

    sample request: GET http://supernatural-lore.vercel.ap/api/episodesAPI?seasonNum=1&type=year_aired

### [GET] Season- Ratings
Gets the IDMB rating for the specified season.

    sample request: GET http://supernatural-lore.vercel.ap/api/episodesAPI?seasonNum=1&type=ratings

### [GET] Season- Monster Count
Gets information about the type of monsters that appear and how frequently they appear in the specified season

    sample request: GET http://supernatural-lore.vercel.ap/api/episodesAPI?seasonNum=1&type=season_monsters

### [GET] Season- Body Count
Gets information about how many people are killed on screen in the specified season.

    sample request: GET http://supernatural-lore.vercel.ap/api/episodesAPI?seasonNum=1&type=body_count

<br>
<br>
<br>
<hr>

# Episode Endpoints

### [GET] Episodes- Get All Episodes
Gets information about every episode in the series

    sample request: GET http://supernatural-lore.vercel.ap/api/episodeListAPI?type=all_episodes

### [GET] Episodes- Get Random Episode (All)
Randomly selects an episode in the series and returns its information

    sample request: GET http://supernatural-lore.vercel.ap/api/episodeListAPI?type=random_episode

### [GET] Episodes- Search By Title
Goes through all the episodes to see if the episode matches a title

    sample request: GET http://supernatural-lore.vercel.ap/api/episodeListAPI?type=search_title&title_keyword=mystery%20spot

### [GET] Episodes- Get Title
Gets the individual episode data based on passed seasonNum and epNum values and returns the title

    sample request: GET https://supernatural-lore.vercel.app/api/episodeListAPI?seasonNum=1&epNum=2&type=get_title

### [GET] Episodes- Get Description
Gets the individual episode data based on passed seasonNum and epNum values and returns the episode description

    sample request: GET https://supernatural-lore.vercel.app/api/episodeListAPI?seasonNum=1&epNum=1&type=get_desc or GET http://supernatural-lore.vercel.app/api/episodeListAPI?epId=s1e1&type=get_desc

### [GET] Episodes- Get Director
Gets the information who the directors were on a passed seasonNum and epNum values

    sample request: GET https://supernatural-lore.vercel.app/api/episodeListAPI?seasonNum=1&epNum=1&type=get_director or GET http://supernatural-lore.vercel.app/api/episodeListAPI?epId=s1e1&type=get_director

### [GET] Episodes- Get Writers
Gets the information who the writers were on a passed seasonNum and epNum values

    sample request: GET https://supernatural-lore.vercel.app/api/episodeListAPI?seasonNum=1&epNum=1&type=get_writers or GET http://supernatural-lore.vercel.app/api/episodeListAPI?epId=s1e1&type=get_writers

### [GET] Episodes- Get Aired Date
Gets the original air date of the episode based on the passed seasonNum and epNum values

    sample request: GET https://supernatural-lore.vercel.app/api/episodeListAPI?seasonNum=1&epNum=1&type=get_aired or GET http://supernatural-lore.vercel.app/api/episodeListAPI?epId=s1e1&type=get_aired

<br>
<br>
<br>
<hr>

# Character Endpoints

### [GET] Character- Get Character by ID
Gets the character object of the character searched (if applicable). The character's ID is normally their first name only, in lowercase. otherwise returns error.

    sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?character_id=dean

### [GET] Character- Get Random Character
Gets the character object of a randomly generated character.

    sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?type=get_random

### [GET] Character- Get Character Description
Gets the character description of a specified character.

    sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_description OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_description

### [GET] Character- Get Character Species/Type
Gets the species of a specified character.

    sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_species OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_species

### [GET] Character- Get Character Status
Gets the status of a specified character.

    sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_alive OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_alive

### [GET] Character- Get Character's Job
Gets the job of a specified character.

    sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_occupation OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_occupation

### [GET] Character- Get Character's Age
Gets the age of a specified character.

    sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_age OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_age

### [GET] Character- Get Character's Nicknames
Gets the nicknames of a specified character.

    sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_nicknames OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_nicknames

### [GET] Character- Get Character's Relationships
Gets the relationships of a specified character.

    sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_relationships OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_relationships

### [GET] Character- Get Character's Catchphrases
Gets the catchphrases of a specified character.

    sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=sam&type=get_catchphrases OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=sam%20winchester&type=get_catchphrases

### [GET] Character- Get Character's Strengths
Gets the strengths of a specified character.

    sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_strengths OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_strengths

### [GET] Character- Get Character's Weaknesses
Gets the weaknesses of a specified character.

    sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_weaknesses OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_weaknesses

### [GET] Character- Get Character's Quotes
Gets the quotes of a specified character.

    sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_char_quotes OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_char_quotes


### [GET] Character- Get Character's Death Count
Gets the number of deaths of a specified character.

    sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_deaths OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_deaths

### [GET] Character- Get Character's Death Information
Gets information about the deaths of a specified character.

    sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_deaths_info OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_deaths_info

### [GET] Character- Get Character's Cast Information
Gets information about the actor/actress of a specified character.

    sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_actor OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_actor
