'use strict';

import {SERVER_PORT,SERVER_PATH} from '../const';
import browserSync from 'browser-sync';
import gulp from 'gulp';


gulp.task('server', (done)=> {
  browserSync({
    open: false,
    port: SERVER_PORT,
    server: {
    baseDir: [SERVER_PATH],
    middleware:  (req, res, next)=> {
      res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});
