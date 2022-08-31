const axios = require('axios')
const options = {
  baseURL: 'https://api.ausmash.com.au/',
  headers: {'X-ApiKey': '1JVEPK9VAQAOGXECCIF7'},
};


async function getSmashData(){
  promise = await axios.get('/pocket/results/13',options).then(response =>
      { 
          result = response.data;              
          console.log(response.status);
          //console.log("done")          
      })
      .catch(function (error) {}); 
      return result;
      
}

async function getPlacings(dataID)
{
    promise = await axios.get('/pocket/result/placings/'+dataID[i]+'/13',options).then(response =>
      { 
        result.push(response.data);              
        console.log(response.status);
        //console.log("done")          
    })
    .catch(function (error) {}); 
    return result;
}

async function call(){
  let data =  await getSmashData();
  let tournamentData = getQLD(data)
  let placings = await getPlacings(tournamentData)
  console.log(placings.Events[0])
  //let players = await getPR(qld)
  //getName(players)
  //console.log(players);
  //console.log(results)
  // let top15 = getTop10(results)
  // console.log(top15);
  //console.log(results[0])
}
// function getTop10(data){
//   let players = [];
//   let elo = [];
//   for(let i = 0; players.length < 10; i++)
//   {
//       players.push(data[i].Player.Name) 
//       elo.push(data[i].Elo)
//       if(data[i].RankLocal == null && players.length >= -1)
//       {
//            console.log(data[i].Player.Name+' has been removed');
//            players.pop();
//            elo.pop();
//       }
//   }
//   return [players,elo];
// }


function getQLD(data)
{
  let tournamentData = [];
  for (let i = 0; i < data.length; i++)
  {
    if(data[i].RegionShort == "QLD" && data[i].Date.split(/-|T/)[0] == "2022" && parseInt(data[i].Date.split(/-|T/)[1],10) >= "5" && parseInt(data[i].Date.split(/-|T/)[1],10) <= "7")
    {
      tournamentData.push(data[i].ID) 
    }
  }
  //console.log(tournamentData[0])
  return tournamentData

  
}
function getName(data)
{
  //console.log(data.length)
 
  for (let i = 0; i < data.Players.length; i++)
    {
      console.log(data.Players[i].Player.ID)
      //playerName.push(data[i].Player)
    }
}
async function getPR(id)
{
  // promise = await axios.get('rankings/'+id,options).then(response =>
  //   {
  //       players = response.data;              
  //       console.log(response.status);
  //       console.log("done")          
  //   })
  //   .catch(function (error) {}); 
  //   return players;
}
call()