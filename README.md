### Weather app
______

**Install**

`git clone https://github.com/webivan1/weather-app.git`

`yarn`

You should register https://openweathermap.org/api and get an api key

create environment file `env.local`

```
REACT_APP_WEATHER_API_KEY={YOUR_API_KEY}
REACT_APP_CITY_NAME=London
REACT_APP_WEATHER_CITY_NAME=London,UK
REACT_APP_WEATHER_TIMEZONE=GTM
```

**Development**

yarn start

Open the link http://localhost:3000

**Tests**

`yarn test`

**Fix style code**

`yarn lint`

**Production build**

`yarn build`
