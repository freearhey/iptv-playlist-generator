# iptv-playlist-generator

It can generate IPTV playlists.

## Installation

```sh
npm install iptv-playlist-generator
```

## Usage

```js
const generator = require('iptv-playlist-generator')
// import generator from 'iptv-playlist-generator'

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

console.log(playlist.toString())
```

Output:

```
#EXTM3U x-tvg-url="https://example.com/epg.xml" custom="value"
#EXTINF:-1 tvg-id="CNN.us" tvg-name="CNN" tvg-url="http://195.154.221.171/epg/guide.xml.gz" tvg-logo="http://example.com/logo.png" group-title="News",CNN (1080p)
#EXTVLCOPT:http-referrer=http://example.com/
#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5)
http://example.com/stream.m3u8
```

## Testing

```sh
npm test
```

## Contribution

If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/freearhey/iptv-playlist-generator/issues) or a [pull request](https://github.com/freearhey/iptv-playlist-generator/pulls).

## License

[MIT](LICENSE)
