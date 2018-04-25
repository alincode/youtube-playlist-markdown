# Youtube playlist markdown

### Features

* it could help you easy to get all playlist informations.
### Requirements

* node 8.x.x
### Install

```
npm i youtube-playlist-markdown --save
```

## Example

### try it

```
const youtubePlaylistMarkdown = require('youtube-playlist-markdown');

const config = {
    "GOOOGLE_API_KEY": "YOUR_GOOOGLE_API_KEY",
    "MARKDOWN_FILE_NAME": "generator.md",
    "CHANNEL_ID": "UCJi9ZAuo99MqMuJUXiJjpsA"
}

youtubePlaylistMarkdown(config);
```

or

```
git clone https://github.com/alincode/youtube-playlist-markdown
cd youtube-playlist-markdown
cp config/default.json config/development.json
vi config/development.json
npm start
```

### Output Example

![](assets/output.png)

## License

[MIT](LICENSE)