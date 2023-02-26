class Playlist {
  constructor() {
    this.header = {}
    this.links = []
  }

  toString() {
    return generate(this.links, this.header)
  }
}

class Link {
  constructor(url) {
    this.url = url
    this.title = ''
    this.attrs = {}
    this.vlcOpts = {}
  }
}

module.exports = {
  Playlist,
  Link
}

function generate(links = [], header = {}) {
  let output = `#EXTM3U`
  for (const attr in header) {
    const value = header[attr]
    output += ` ${attr}="${value}"`
  }

  for (const link of links) {
    output += `\n#EXTINF:-1`
    for (const name in link.attrs) {
      const value = link.attrs[name]
      if (value !== undefined) {
        output += ` ${name}="${value}"`
      }
    }
    output += `,${link.title}\n`

    for (const name in link.vlcOpts) {
      const value = link.vlcOpts[name]
      if (value !== undefined) {
        output += `#EXTVLCOPT:${name}=${value}\n`
      }
    }

    output += `${link.url}`
  }

  return output
}
