/*docs*/
// https://habrahabr.ru/post/309958/
// https://habrahabr.ru/post/310284/
// https://habrahabr.ru/post/310952/
// https://reacttraining.com/react-router/web/example/basic
// StaticRouter 4 // https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/server-rendering.md
// пример StaticRouter https://crypt.codemancers.com/posts/2017-06-03-reactjs-server-side-rendering-with-router-v4-and-redux/
/*material*/
//https://bootswatch.com/
/*commands*/
// npm run nodemon
// npm run webpack-devserver
require('babel-core/register');
['.css', '.less', '.sass', '.ttf', '.woff', '.woff2'].forEach((ext) => require.extensions[ext] = () => {});
require('babel-polyfill');
require('server.js');