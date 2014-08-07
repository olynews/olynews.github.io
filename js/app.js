var TumblrPosts = require('tumblr-posts');
var Handlebars = require('handlebars');
var fs = require('fs');
var moment = require('moment');
window.moment = moment;
Handlebars.registerHelper('formatDate', function(date) {
  return moment(date.slice(0, -4)).format('DD MMMM, YYYY');
});

var latest = new TumblrPosts({
  el: 'latest-tumblr-posts',
  blog: 'percivalnews.tumblr.com',
  key: 'GucczLgzlxYpKSfLcg79KqzbyYQA3QtubHJ9jYqh89r6IptwIt',
  template: Handlebars.compile(fs.readFileSync('./_client-templates/post.html', 'utf8'))
});
