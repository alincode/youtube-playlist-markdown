# Youtube playlist markdown

![GitHub package version](https://img.shields.io/github/package-json/v/alincode/youtube-playlist-markdown.svg)
[![](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![node version](https://img.shields.io/node/v/youtube-playlist-markdown.svg)
<!-- [![Dependency Status](https://img.shields.io/david/alincode/youtube-playlist-markdown.svg?style=flat)](https://david-dm.org/alincode/youtube-playlist-markdown) -->

It could help you scan all playlist information and generate friendly markdown table, look like below.

[Output markdown example](https://github.com/alincode/youtube-playlist-markdown/blob/master/output_example.md)

---
### [Modern Web](https://www.youtube.com/channel/UCJi9ZAuo99MqMuJUXiJjpsA)

#### [【Modern Web 2015】國際會議廳 議程](https://www.youtube.com/playlist?list=PLr0GICQoHA0KDNV0HkH10_ieusLd_KVaz) created by [Modern Web](https://www.youtube.com/channel/UCJi9ZAuo99MqMuJUXiJjpsA)

* video count: 3

| title                                                                                                                              | Published At |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| [【Modern Web 2015】三維架構方法 - 蔡學鏞](https://www.youtube.com/watch?v=6mxmVh0u8_k)                                                       | 2015-06-12   |
| [【Modern Web 2015】雲端系統對爆量的測試與準備 ­ 以張惠妹秒殺售票為例 - 邱光宗](https://www.youtube.com/watch?v=-bLYwGTcNRc)                                   | 2015-06-12   |
| [【Modern Web 2015】TypeScript 過去現在未來 - 高偉格OThree](https://www.youtube.com/watch?v=qFrvC7TQS14)                                      | 2015-06-12   |

---
### Features

* You could choose get all playlist or only one.
* You could use `TODO` variable to change the table style.
### Requirements

* node 8.x.x
### Install

```
npm i youtube-playlist-markdown --save
```
### Usage

First, you need to get your API key, if you don't know how to do, maybe this video could help you.

[How to Get YouTube API Key - Easy way - YouTube](https://www.youtube.com/watch?v=_U_VS12uu-o)

then

```js
const YoutubePlaylistMarkdown = require('youtube-playlist-markdown');

const config = {
  "GOOOGLE_API_KEY": "========== YOUR_GOOGLE_API_KEY =========="
};

let ypm = new YoutubePlaylistMarkdown(config);

const playlistId = 'PLrG78JjvL7hWqX2FW54Ck8UP45fbWQXcu';
ypm.generatorPlaylist(playlistId);

const channelId = 'UCJi9ZAuo99MqMuJUXiJjpsA';
ypm.generatorAll(channelId);
```

## Relevant Projects

* [youtube-playlist-summary](https://github.com/alincode/youtube-playlist-summary)

## License

MIT © [alincode](https://github.com/alincode/youtube-playlist-markdown)