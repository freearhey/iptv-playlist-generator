const { Playlist, Link } = require('../src/index.js')

it('can add up two numbers', () => {
  const playlist = new Playlist()
  playlist.header = { 'x-tvg-url': 'https://example.com/epg.xml', custom: 'value' }

  const link = new Link('http://example.com/stream.m3u8')
  link.title = 'CNN (1080p)'
  link.attrs = {
    'tvg-id': 'CNN.us',
    'tvg-name': 'CNN',
    'tvg-url': 'http://195.154.221.171/epg/guide.xml.gz',
    'tvg-logo': 'http://example.com/logo.png',
    'group-title': 'News'
  }
  link.vlcOpts = {
    'http-referrer': 'http://example.com/',
    'http-user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5)'
  }
  playlist.links.push(link)

  expect(playlist.toString()).toBe(
    `#EXTM3U x-tvg-url="https://example.com/epg.xml" custom="value"
#EXTINF:-1 tvg-id="CNN.us" tvg-name="CNN" tvg-url="http://195.154.221.171/epg/guide.xml.gz" tvg-logo="http://example.com/logo.png" group-title="News",CNN (1080p)
#EXTVLCOPT:http-referrer=http://example.com/
#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5)
http://example.com/stream.m3u8`
  )
})
