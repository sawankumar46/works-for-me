const {
  HEAD_TITLE_CONTEXT,
  HEAD_DESCRIPTION_CONTEXT
} = require('../constants');

function render (content = []) {
  let title = content
    .find(context => context.get('type') === HEAD_TITLE_CONTEXT)
    .get('content');
  let description = content
    .find(context => context.get('type') === HEAD_DESCRIPTION_CONTEXT)
    .get('content');

  return `
    <head lang="en">
      <title>${ title }</title>
      
      <meta charset="utf-8">
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <meta name="description" content="${ description }">

      <meta name="author" content="${ title }">
      
      <link rel="stylesheet" href="../statics/setup.css">
      
      <link rel="stylesheet" href="../statics/setup.mobile.css">
    </head> 
  `;
}

module.exports = {
  render
};