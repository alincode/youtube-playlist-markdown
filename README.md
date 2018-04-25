# Youtube playlist markdown

### Install

```
npm i youtube-playlist-markdown --save
```

## Example

### try it

```
const youtubePlaylistMarkdown = require('youtube-playlist-markdown');
const CHANNEL_ID = 'UCJi9ZAuo99MqMuJUXiJjpsA';

const config = {
    "GOOOGLE_API_KEY": "YOUR_GOOOGLE_API_KEY",
    "MARKDOWN_FILE_NAME": "generator.md"
}

youtubePlaylistMarkdown(CHANNEL_ID, config);
```

### Output Example

#### 【Modern Web 2015】Keynote 

* [playlist link](https://www.youtube.com/playlist?list=PLr0GICQoHA0J0LHVHVqbhckIF7pnUCsjX) 
* video count: 4 

| title                                                                                                           | Published At |
| --------------------------------------------------------------------------------------------------------------- | ------------ |
| [【Modern Web 2015】JavaScript at 20 Years - Brendan Eich](https://www.youtube.com/watch?v=UZetViiy4jo)           | 2015-06-12   |
| [【Modern Web 2015】開源之道，Open Source Enlightenment - 唐鳳](https://www.youtube.com/watch?v=A6bBcvSyg0k)             | 2015-06-12   |
| [【Modern Web 2015】Speeding up the Web with PHP 7 - Rasmus Lerdorf](https://www.youtube.com/watch?v=eBJdi_h_rKM) | 2015-06-12   |
| [【Modern Web 2015】How the East Was Won - 松田明](https://www.youtube.com/watch?v=pMQzkjs1VxA)                      | 2015-06-12   |