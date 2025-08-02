import useFeature from "@/hooks/useFeature";

type FeatureProps = {
    flag: string;
    children: React.ReactNode | React.ReactNode[];
};

export default function FeatureTest({ flag, children }: FeatureProps) {
    const isFeatureEnabled = useFeature(flag);
    return isFeatureEnabled && <>{children}</>;
}
