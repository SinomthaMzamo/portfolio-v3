import Realm from "@/components/game/Realm";
import { Terminal } from "@/components/Terminal";
import { Button } from "@/components/ui/button";
import { Code, Joystick } from "lucide-react";
import { useMemo, useState } from "react";

const Index = () => {
  const [view, setView] = useState<"terminal" | "game" | "basic">("game");

  const themeClass = useMemo(() => {
    if (view === "terminal") return "theme-terminal";
    if (view === "game") return "theme-game";
    return "theme-basic"; // later
  }, [view]);

  const showTerminalView = () => {setView("terminal")}
  const showGameView = () => {
    setView("game");
  };

  return (
    <div className={themeClass}>
      <div className="grid grid-cols-2 width-200">
        <Button
          variant="ghost"
          onClick={showTerminalView}
          className="mb-4 text-muted-foreground hover:text-foreground"
        >
          {" "}
          <Code /> terminal
        </Button>
        <Button
          variant="ghost"
          onClick={showGameView}
          className="mb-4 text-muted-foreground hover:text-foreground"
        >
          {" "}
          <Joystick /> game
        </Button>
      </div>
      {view === "terminal" && <Terminal />}
      {view === "game" && <Realm />}
      {view === "basic" && <div>Basic view</div>}
    </div>
  );
};

export default Index;
