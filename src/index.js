const app = require('./app');

// We use app.get('port') which is set in app.js
app.listen(app.get('port'), () => {
  console.log('App is running on port', app.get('port'))
});
