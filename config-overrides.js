// Overrides create-react-app webpack configs without ejecting
// https://github.com/timarney/react-app-rewired

const { addBabelPlugins, override } = require("customize-cra");
module.exports = override(
  ...addBabelPlugins(
    "babel-plugin-glsl"
    /* Add plug-in names here (separate each value by a comma) */
  )
);