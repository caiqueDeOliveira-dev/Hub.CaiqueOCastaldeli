import { useEffect } from "react";
import { motion } from "framer-motion";
import loadingVideo from "../assets/wolf-loading.mp4";

interface Props {
  onFinish: () => void;
}

const LoadingScreen = ({ onFinish }: Props) => {
  useEffect(() => {
    const t = setTimeout(onFinish, 3200);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* scratch marks */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 400 200" preserveAspectRatio="none">
        <line x1="30%" y1="20%" x2="70%" y2="25%" stroke="#ff2130" strokeWidth="1.5" strokeLinecap="round" opacity="0.4">
          <animate attributeName="opacity" values="0;0.5;0.3;0.6;0.2;0" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="40%" y1="30%" x2="80%" y2="35%" stroke="#ff2130" strokeWidth="1" strokeLinecap="round" opacity="0.3">
          <animate attributeName="opacity" values="0;0.4;0.2;0.5;0.1;0" dur="3.5s" repeatCount="indefinite" />
        </line>
        <line x1="20%" y1="40%" x2="60%" y2="42%" stroke="#ff2130" strokeWidth="1.2" strokeLinecap="round" opacity="0.3">
          <animate attributeName="opacity" values="0;0.3;0.5;0.2;0.4;0" dur="2.8s" repeatCount="indefinite" />
        </line>
      </svg>

      <video src={loadingVideo} autoPlay loop muted playsInline className="w-[140px] h-[140px] object-cover mb-4 rounded-[4px]" />

      <motion.span
        className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] text-blood-bright uppercase mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Loading Hub
      </motion.span>

      <motion.h1
        className="font-[family-name:var(--font-cinzel)] font-[900] text-[clamp(32px,8vw,72px)] text-blood-bright text-center leading-[1.05]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        CAIQUE
        <br />
        O CASTALDELI
      </motion.h1>

      <div className="w-[200px] max-w-[60vw] h-px bg-line mt-8 mb-4 overflow-hidden">
        <motion.div
          className="h-full bg-blood-bright"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.8, delay: 0.7, ease: "easeInOut" }}
        />
      </div>

      <motion.span
        className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.15em] text-text-faint uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.9 }}
      >
        Carregando...
      </motion.span>
    </motion.div>
  );
};

export default LoadingScreen;
