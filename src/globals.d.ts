type FeatureFlags = {
    [key: string]: {
        enabled: boolean;
    };
};

declare const __FEATURES__: FeatureFlags;
