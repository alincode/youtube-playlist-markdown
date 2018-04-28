# Youtube playlist markdown

![GitHub package version](https://img.shields.io/github/package-json/v/alincode/youtube-playlist-markdown.svg)
[![](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![node version](https://img.shields.io/node/v/youtube-playlist-markdown.svg)
<!-- [![Dependency Status](https://img.shields.io/david/alincode/youtube-playlist-markdown.svg?style=flat)](https://david-dm.org/alincode/youtube-playlist-markdown) -->

it could help you scan all playlist information and generate friendly markdown table.

Look like this.

[Output Example](https://github.com/alincode/youtube-playlist-markdown/blob/master/output_example.md)

---
### [Modern Web](https://www.youtube.com/channel/UCJi9ZAuo99MqMuJUXiJjpsA)

#### [【Modern Web 2015】國際會議廳 議程](https://www.youtube.com/playlist?list=PLr0GICQoHA0KDNV0HkH10_ieusLd_KVaz) created by [Modern Web](https://www.youtube.com/channel/UCJi9ZAuo99MqMuJUXiJjpsA)

* video count: 12 

| title                                                                                                                              | Published At |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| [【Modern Web 2015】三維架構方法 - 蔡學鏞](https://www.youtube.com/watch?v=6mxmVh0u8_k)                                                       | 2015-06-12   |
| [【Modern Web 2015】雲端系統對爆量的測試與準備 ­ 以張惠妹秒殺售票為例 - 邱光宗](https://www.youtube.com/watch?v=-bLYwGTcNRc)                                   | 2015-06-12   |
| [【Modern Web 2015】TypeScript 過去現在未來 - 高偉格OThree](https://www.youtube.com/watch?v=qFrvC7TQS14)                                      | 2015-06-12   |
| [【Modern Web 2015】ASP.NET 5 的創新與變革 - 保哥Will](https://www.youtube.com/watch?v=zqzZVSdKy1Y)                                          | 2015-06-12   |
| [【Modern Web 2015】1UA MultiScreen - 郭志偉Alive Kuo](https://www.youtube.com/watch?v=dLI3rS_x0fQ)                                     | 

---
### Features

* you could choice get all playlist or only one.
* you could use `TODO` variable to change the table style.
### Requirements

* node 8.x.x
### Install

```
npm i youtube-playlist-markdown --save
```

<!--
#### Command Line Options

This generator can also be further configured with the following command line flags.

    -h, --help          output usage information
    -V, --version       output the version number
    -C, --channel       generate all playlists
    -P, --playlist      generate a playlist
        --video         generate all videos
    -f, --force         force on non-empty directory
-->
### Usage

First, you need to get your API key, if you don't know how to do, maybe this video could help you.

[How to Get YouTube API Key - Easy way - YouTube](https://www.youtube.com/watch?v=_U_VS12uu-o)

then

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

## Relevant Projects

* [youtube-playlist-summary](https://github.com/alincode/youtube-playlist-summary)

## License

MIT © [alincode](https://github.com/alincode/youtube-playlist-markdown)