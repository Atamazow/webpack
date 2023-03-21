import path from 'path'
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import webpack from "webpack";
import {buildEnv, BuildPaths} from "./config/build/types/config";

export default (env: buildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname,  'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }
    const mode = env.mode || 'development'
    const PORT = env.port || 3000
    const isDev = mode === 'development'

    const config: webpack.Configuration = buildWebpackConfig({
        mode: "development" || "production",
        paths,
        isDev,
        port: PORT
    })
    return config
}