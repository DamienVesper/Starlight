import common from './webpack.common';

import { merge } from 'webpack-merge';

export default merge(common, {
    mode: `development`,
    devtool: `source-map`
});
