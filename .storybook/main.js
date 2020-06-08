const path = require("path");

//Here, we're instructing Storybook where to find our stories,
// specifying our Stoprybook addons (none so far, but check out all the addons available)
// and using sass-loader + babel-loader to compile our Sass + TypeScript files.
module.exports = {
    stories: ["../src/**/*.stories.tsx"],
    // Add any Storybook addons you want here: https://storybook.js.org/addons/
    addons: [],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "sass-loader",
                }
            ],
            include: path.resolve(__dirname, "../")
        });

        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve("babel-loader"),
            options: {
                presets: [["react-app", { flow: false, typescript: true }]]
            }
        });
        config.resolve.extensions.push(".ts", ".tsx");

        return config;
    }
};
