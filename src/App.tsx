import FeatureTest from "./components/feature-test";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";

function App() {
    return (
        <ThemeProvider>
            <div className={"bg-background flex min-h-svh flex-col items-center justify-center gap-4"}>
                <ModeToggle />
                <Button className="hover:cursor-pointer">Click me</Button>
                <FeatureTest flag="counter" children={<div>counter</div>} />
                <FeatureTest flag="react_logo" children={<div>react_logo</div>} />
            </div>
        </ThemeProvider>
    );
}

export default App;
