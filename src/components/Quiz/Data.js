const data = {

    questions: [
      {
        tag: "duration",
        text: "HOW LONG IS YOUR TRIP?",
        answerFormat: "radio",
        answerChoices: ["1 Week", "2 Weeks", "3 Weeks", "4 Weeks"],
        image: "./Images/lanterns.JPG"
      },
      {
        tag: "travelerType",
        text: "HAVE YOU TRAVELED HERE BEFORE?",
        answerFormat: "radio",
        answerChoices: ["First-Timer", "Return Traveler"],
        image: "./Images/pagodas.JPG"
      },
      {
        tag: "pace",
        text: "WHAT'S YOUR TRAVEL PACE?",
        answerFormat: "radio",
        answerChoices: ["Slow and Leisurely", "Average Pace", "Pack it all in!"],
        image: "./Images/bridge.JPG"
      },
      {
        tag: "sites",
        text: "WHAT DO YOU WANT TO SEE WHEN YOU TRAVEL?",
        answerFormat: "radio",
        answerChoices: ["Iconic Highlights", "Hidden Gems", "A Bit of Both"],
        image: "./Images/mountainTemple.JPG"
      },
      {
        tag: "internalTravel",
        text: "HOW WOULD YOU LIKE TO TRAVEL WITHIN THE COUNTRY? (SELECT ALL THAT APPLY)",
        answerFormat: "checkbox",
        answerChoices: ["Train", "Bus", "Internal Flights", "Private Driver"],
        image: "./Images/trainStation.JPG"
      },
      {
        tag: "cityTravel",
        text: "HOW WOULD YOU LIKE TO GET AROUND WITHIN A CITY? (SELECT ALL THAT APPLY)",
        answerChoices: ["Walk", "Public transport", "Bike", "Taxi"],
        image: "./Images/shanghai.JPG"
      },
      {
        tag: "travelParty",
        text: "WHICH OF THE FOLLOWING BEST DESCRIBES YOUR TRAVEL PARTY?",
        answerFormat: "radio",
        answerChoices: ["Solo", "Couple", "Friends", "Family"],
        image: "./Images/riceTerrace.JPG"
      },
      {
        tag: "budget",
        text: "WHAT'S YOUR BUDGET?",
        answerFormat: "radio",
        answerChoices: ["Budget Backpacker ($)", "Mid-Range ($$)", "Luxury ($$$)"],
        image: "./Images/terraCotta.JPG"
      },
      {
        tag: "interests",
        text: "RATE YOUR INTEREST IN THE FOLLOWING...",
        answerFormat: "checkbox",
        answerChoices: ["Culture", "Nature", "Beaches", "Museums", "History", "Shopping", "Art", "Adventure", "Cuisine", "Relaxation", "Guided Tours", "Romance", "Wildlife", "Hiking"],
        image: "./Images/bamboo.JPG"
      },
      {
        tag: "entertainment",
        text: "RATE YOUR INTEREST IN THE FOLLOWING...",
        answerFormat: "checkbox",
        answerChoices: ["Music", "Bars/Pubs", "Clubs/Lounges", "Events & Festivals", "Family Fun", "Culture Shows", "Lectures"],
        image: "./Images/pagoda.JPG"
      }
    ]
};

export default data;
