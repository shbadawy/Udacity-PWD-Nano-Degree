/* Global Variables */
const apiKey = "YOUR_API_KEY";
const baseURL = "http://api.openweathermap.org/data/2.5/weather";
const contentArea = document.getElementById('feelings')
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click', buttonClicked);

const postData = async (url="", data={}) => {

    const response = await fetch ( url,{
      method: 'POST',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header
      body: JSON.stringify(data),
    });

}

function buttonClicked () {

  const zip = document.getElementById('zip').value;
  const content = contentArea.value;

  const temp = getData(baseURL,zip,apiKey)
  .then(function (temp){

    data={"date":newDate, "temp":temp, "content":content};
    postData("/add", data );

  })
  .then(function(){

     const data = getContent()

     .then(function(data){
        updateUI(data)
     })

  })



}

const getData = async (baseURL,zip,apiKey)=>{

  const url = `${baseURL}?zip=${zip}&appid=${apiKey}&units=imperial`;
  const response = await fetch(url);

  try {
    const data = await response.json();
    return data.main.temp;
  } catch (e) {console.log("error", e);}

}

const getContent = async () => {

  const response = await fetch ("/get")
  const data = await response.json()
  return data

}

function updateUI(data){

  console.log(data)
  const dateElement = document.createElement("p");
  const tempElement = document.createElement("p");
  const contentElement = document.createElement("p");

  dateElement.innerHTML = `Date: ${data.date}`;
  tempElement.innerHTML = `Temp: ${data.temp}`;
  contentElement.innerHTML = `Feel: ${data.content}`

  document.getElementById('date').appendChild(dateElement)
  document.getElementById('date').appendChild(tempElement)
  document.getElementById('date').appendChild(contentElement)

}
