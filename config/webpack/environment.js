const { environment } = require('@rails/webpacker')

<<<<<<< HEAD
const webpack = require("webpack")
environment.plugins.append("Provide", new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Popper: ['popper.js', 'default']
}))

=======
>>>>>>> 919eb8c68dd07c512a1dae904cb5151b05e33626
module.exports = environment
