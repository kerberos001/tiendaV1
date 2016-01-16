'use strict';
import gulp from 'gulp';
import {paths} from '../path';
import del from 'del';





gulp.task('clean',()=>{
  let files = [].concat(paths.build.compiled,paths.build.ignore.basePath,paths.build.ignore.jspmPackages);
  console.log(files);
  return del.sync(files);
});
