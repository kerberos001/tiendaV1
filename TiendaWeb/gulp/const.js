'use strict';

export const  ROOT_TEMP = 'public';
export const  ROOT = 'src';

export const  COMPILER_OPTIONS = {
    modules: 'system',
    moduleIds: false,
    externalHelpers: true,
    comments: true,
    compact: true
};
export const SERVER_PORT = 9001;
export const SERVER_PATH = `./${ROOT}`;
export const SERVER = {
    port: SERVER_PORT,
    rootPath: SERVER_PATH
}
