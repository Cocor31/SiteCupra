const path = require('path')
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    style: {
        sass: {
            loaderOptions: {
                additionalData: `
                  @import "src/Assets/Style/Utils/_Variables.scss";
                  @import "src/Assets/Style/Utils/Mixins.scss";
                  @import "src/Assets/Style/Utils/Fonts.scss";
                  @import "src/Assets/Style/Utils/Keyframes.scss";
                  @import "src/Assets/Style/Utils/Placeholders.scss";
                `,
            },
        },
    }
}