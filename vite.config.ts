import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import envConfig from "./env.json";

type Env = keyof typeof envConfig;

const featuresListProd = Object.keys(envConfig.production.features);

const allEnvsMatchProdFeatures = Object.keys(envConfig).every((env) => {
    const currentFeatureList = Object.keys(envConfig[env as Env].features);
    return JSON.stringify(currentFeatureList) === JSON.stringify(featuresListProd);
});

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    if (!allEnvsMatchProdFeatures) {
        console.error("\x1b[31m", "Features don't match across all environments.");
        process.exit(1);
    }

    return {
        plugins: [react(), tailwindcss()],
        define: {
            __FEATURES__: JSON.stringify(envConfig[mode as Env].features),
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
    };
});
