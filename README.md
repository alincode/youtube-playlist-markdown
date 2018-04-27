# Youtube playlist markdown

![GitHub package version](https://img.shields.io/github/package-json/v/badges/shields.svg)
[![](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![node version](https://img.shields.io/node/v/youtube-playlist-markdown.svg)

it could help you scan all playlist information and generate friendly markdown table.

<!-- [![Dependency Status](https://img.shields.io/david/alincode/youtube-playlist-markdown.svg?style=flat)](https://david-dm.org/alincode/youtube-playlist-markdown) -->

### Features

* you could choice get all playlist or only one.
* you could use `TODO` variable to change the table style.
### Requirements

* node 8.x.x
### Install

```
npm i youtube-playlist-markdown --save
```

## Example

* [How to Get YouTube API Key - Easy way - YouTube](https://www.youtube.com/watch?v=_U_VS12uu-o)
### try it

```js
const youtubePlaylistMarkdown = require('youtube-playlist-markdown');

// if you want to get all playlist
const config = {
    "GOOOGLE_API_KEY": "YOUR_GOOOGLE_API_KEY",
    "MARKDOWN_FILE_NAME": "generator.md", // option
    "CHANNEL_ID": "UCJi9ZAuo99MqMuJUXiJjpsA",
    "TODO": false // option
}

// if you only want to get a playlist
const config = {
    "GOOOGLE_API_KEY": "YOUR_GOOOGLE_API_KEY",
    "MARKDOWN_FILE_NAME": "generator.md", // option
    "PLAYLIST_ID": "PL0y7qCn3hjLbmQ5_aQZEfQDQCgcK6A2CP",
    "TODO": false // option
}

youtubePlaylistMarkdown(config);
```

or

Then make your own config, you could copy `config/example.json` to `config/development.json`.

```bash
git clone https://github.com/alincode/youtube-playlist-markdown
cd youtube-playlist-markdown
cp config/default.json config/development.json
vi config/development.json
npm start
```

### Output Example

![](assets/output.png)

## Relevant Projects

* [youtube-playlist-summary](https://github.com/alincode/youtube-playlist-summary)

## License

MIT © [alincode](https://github.com/alincode/youtube-playlist-markdown)