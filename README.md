# Youtube playlist markdown

![GitHub package version](https://img.shields.io/github/package-json/v/alincode/youtube-playlist-markdown.svg)
![node version](https://img.shields.io/node/v/youtube-playlist-markdown.svg)
![npm downloads](https://img.shields.io/npm/dt/youtube-playlist-markdown.svg)
[![Dependency Status](https://img.shields.io/david/alincode/youtube-playlist-markdown.svg?style=flat)](https://david-dm.org/alincode/youtube-playlist-markdown)

It could help you scan all playlist information and generate friendly markdown table, look like below. if you want to use [**cli mode**](https://www.npmjs.com/package/youtube-playlist-markdown-cli), you could go [here](https://www.npmjs.com/package/youtube-playlist-markdown-cli).

![](assets/output.jpg)

### Features

* You could choose get all playlist or only one.

### Change Log

change | version 
---------|----------
 Fixed content include special word | 1.4.3

### Requirements

* node 8.x.x
  
### Install

```
npm i youtube-playlist-markdown --save
```
### Usage

First, you need to get your API key, if you don't know how to do, maybe this video could help you.

[how to create YouTube API Key 2019 - YouTube](https://www.youtube.com/watch?v=3jZ5vnv-LZc)

then

```js
const YoutubePlaylistMarkdown = require('youtube-playlist-markdown');

const config = {
  "GOOGLE_API_KEY": "========== YOUR_GOOGLE_API_KEY =========="
};

let ypm = new YoutubePlaylistMarkdown(config);

const playlistId = 'PLrG78JjvL7hWqX2FW54Ck8UP45fbWQXcu';
ypm.generatorPlaylist(playlistId);

const channelId = 'UCJi9ZAuo99MqMuJUXiJjpsA';
ypm.generatorAll(channelId);
```

## Relevant Projects

* [youtube-playlist-summary](https://github.com/alincode/youtube-playlist-summary)
* [youtube-playlist-markdonw-cli](https://github.com/alincode/youtube-playlist-markdown-cli)

## License

MIT © [alincode](https://github.com/alincode/youtube-playlist-markdown)