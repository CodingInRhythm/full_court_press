import React, {useState} from 'react'


const MainInterface = () => {

    const [imgSrc, setImgSrc] = useState('')

    const displayJson = async (e) => {
      e.preventDefault();

      //Fetching individual team
      // let res = await fetch(
      //   "http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/1"
      // );
      // let data = await res.json()
      // console.log(data)

      //Fetching news

      // let res = await fetch(
      //   "http://site.api.espn.com/apis/site/v2/sports/basketball/nba/news?limit=2000"
      // );
      // let data = await res.json();

      // console.log(data.articles[0])
      // let i = 0
      // while (i < data.articles.length) {
      //     if (data.articles[i].description.toLowerCase().includes("brooklyn")){
      //         console.log(data.articles[i])
      //     }
      //     i++
      // }

      //Fetching Logo

      // let logo = data.team.logos[1]
      // console.log(logo.href)
      // setImgSrc(logo.href)

    //   Fetching individual team
      let res = await fetch(
        "http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams?limit=50"
      );
      let data = await res.json()
      console.log(data)
    }
    //     //   Fetching individual player
    //   let res = await fetch(
    //     "http://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/1"
    //   );
    //   let data = await res.json()
    //   console.log(data)
    // }
    return (
        <>
            <form onSubmit={displayJson}>
                <button type="submit">Click me!</button>
            </form>
            <img src={imgSrc} alt="not here yet" height="100px" width="100px"></img>
        </>
    )
}

export default MainInterface