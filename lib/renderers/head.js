const {
  TITLE,
  HEAD_TITLE_CONTEXT,
  HEAD_DESCRIPTION_CONTEXT
} = require('../constants')

function render (content = []) {
  let title = content
    .find(context => context.get('type') === HEAD_TITLE_CONTEXT)
    .get('content')
  let description = content
    .find(context => context.get('type') === HEAD_DESCRIPTION_CONTEXT)
    .get('content')

  return `
    <head>
      <title>${title}</title>
      
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="${description}">
      <meta name="author" content="${title}">
      
      <link rel="icon" href="../../statics/favicon-16x16.png" sizes="16x16">
      <link rel="icon" href="../../statics/favicon-32x32.png" sizes="32x32">
      <link rel="icon" href="../../statics/favicon-48x48.png" sizes="48x48">
      <link rel="icon" href="../../statics/favicon-180x180.png" sizes="180x180">
      
      <link rel="stylesheet" href="../../statics/global.css">
      <link rel="stylesheet" href="../../statics/header.css">
      <link rel="stylesheet" href="../../statics/setup.css">
      <link rel="stylesheet" href="../../statics/setup.mobile.css">
      <link rel="alternate" 
            type="application/rss+xml" 
            title="${TITLE}" 
            href="../../rss.xml"
      >
    </head> 
  `
}

module.exports = {
  render
}
