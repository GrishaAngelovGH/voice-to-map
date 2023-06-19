# Voice-To-Map Visualization

Front-end project implementing visualization of geographical map locations by voice input from the user. When the voice input is recorded it is passed for processing by [MDN Speech Recognition Service](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API). After the string representation is received then is passed to [LocationIQ's Forward Geocoding Service](https://locationiq.com/geocoding). When the geocoordinates are received they are visualized as markers on the geographical map. The user is able to see history with all visualized locations and some location suggestions.

## The front-end project is using the following technologies:

* Initial structure is created with **create-react-app**
* Integrated **ReactJS 18**
* Integrated **reduxjs/toolkit**
* Integrated **react-redux**
* Integrated **redux-mock-store**
* Integrated **react-leaflet**
* Integrated **axios**
* Integrated **material ui**
* Integrated **material ui icons**
* Integrated **bootstrap 5**
* Integrated notifications with **react-toastify**
* Integrated **Web Speech API**
* Integrated **LocationIQ's Forward Geocoding API**
