const express = require('express');
const fs = require('fs');

const USER_AGENTS = [
  'Apple TV',
  'tvOS',
  'CrKey',
  'Tizen 2.3',
  'Web0S',
  'Linux/SmartTV',
  'BRAVIA 4K 2015',
  'Opera TV Store',
  'DTTVNetBrowser',
  'InettvBrowser',
  'PhillipsTV',
  'SMART-TV',
  'Tizen 2.4.0',
  'Tizen 2.4',
  'NetCast',
]

const app = express();

app
  .use((req, res) => {
    const ua = req.get('User-Agent');

    const TELEVISION_PAGE = fs.readFileSync('./television.html', { encoding: 'utf-8' })
    const WELCOME_PAGE = fs.readFileSync('./welcome.html', { encoding: 'utf-8' })

    if (!ua) {
      res.send(TELEVISION_PAGE)
    } else if (USER_AGENTS.some(tv => ua.includes(tv))) {
      res.send(WELCOME_PAGE)
    } else {
      res.send(TELEVISION_PAGE)
    }
  })

app.listen(41832)
