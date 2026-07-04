import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import SmokeBackground from "./components/SmokeBackground";
import LeftColumn from "./components/LeftColumn";
import CenterColumn from "./components/CenterColumn";
import RightColumn from "./components/RightColumn";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      <SmokeBackground />

      <div className="fog-layer w-[600px] h-[600px] bottom-[-200px] left-[-100px] bg-[radial-gradient(circle,rgba(179,18,28,0.09)_0%,transparent_70%)] animate-[fog-drift_22s_infinite_ease-in-out]" />
      <div className="fog-layer w-[800px] h-[800px] top-[-250px] right-[-150px] bg-[radial-gradient(circle,rgba(179,18,28,0.06)_0%,transparent_70%)] animate-[fog-drift-2_28s_infinite_ease-in-out]" />
      <div className="fog-layer w-[500px] h-[500px] bottom-[60px] right-[60px] bg-[radial-gradient(circle,rgba(255,33,48,0.04)_0%,transparent_70%)] animate-[fog-drift_20s_infinite_2s_ease-in-out]" />

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onFinish={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative z-[1] max-w-[1400px] mx-auto"
            style={{ display: "grid", gridTemplateColumns: "280px 1fr 320px", gap: "20px", alignItems: "start" }}
          >
            <LeftColumn />
            <CenterColumn />
            <RightColumn />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
