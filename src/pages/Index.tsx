import Realm from "@/components/game/Realm";
import { Terminal } from "@/components/Terminal";
import BasicPortfolio from "@/components/basic/BasicPortfolio";
import { ModeSelector, ViewMode } from "@/components/ModeSelector";
import { useMemo, useState } from "react";

const Index = () => {
  const [view, setView] = useState<ViewMode>("basic");

  const themeClass = useMemo(() => {
    if (view === "terminal") return "theme-terminal";
    return "theme-game";
  }, [view]);

  return (
    <div className={themeClass}>
      <ModeSelector current={view} onChange={setView} />
      {view === "terminal" && <Terminal />}
      {view === "game" && <Realm />}
      {view === "basic" && <BasicPortfolio />}
    </div>
  );
};

export default Index;
