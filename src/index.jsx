/** @jsx createElement */
import { createElement } from 'elliptical'
import { Command, URL, String } from 'lacona-phrases'
import { openURL } from 'lacona-api'

const wundergroundUrl = 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query='

export const Weather = {
  extends: [Command],
  execute (result) {
    openURL({url: `${wundergroundUrl}${result}`})
  },

  describe ({config}) {
    return (
      <literal
        text='weather'
        value= {config.weather} />
    )
  }
}

export const extensions = [Weather]
