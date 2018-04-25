const debug = require('debug')('youtubePlaylistMarkdown');
const fs = require('fs')
const table = require('markdown-table')
const PlaylistSummary = require('youtube-playlist-summary');
const config = require('config');
const ps = new PlaylistSummary(config);

const generator = async function (config) {
  debug('=== generator ===');
  try {
    let result = await ps.getSummary(config.CHANNEL_ID);
    let file = fs.createWriteStream(config.MARKDOWN_FILE_NAME);
    result.forEach(function (playlist, index) {
      let tableContent = [];
      playlist.items.forEach(function (item, index2) {
        if (index2 == 0) {
          tableContent.push(['title', 'Published At'])
        }
        
        let videoTitle = `[${item.title}](${item.videoUrl})`;
        let publishedAt = item.publishedAt.substr(0, 10);
        tableContent.push([videoTitle, publishedAt]);
      });
      file.write(`\n\n#### ${playlist.title} \n\n`);
      file.write(`* [playlist link](${playlist.playlistUrl}) \n`);
      file.write(`* video count: ${playlist.items.length} \n\n`);
      file.write(table(tableContent));
      debug(table(tableContent));
    });
    file.end();
  } catch (error) {
    throw error;
  }
};

module.exports = generator;
