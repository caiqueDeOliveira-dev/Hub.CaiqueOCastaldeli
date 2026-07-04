import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);
  const sx = useSpring(cx, { stiffness: 300, damping: 25 });
  const sy = useSpring(cy, { stiffness: 300, damping: 25 });

  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cx.set(e.clientX - 16);
      cy.set(e.clientY - 16);
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cx, cy]);

  return (
    <>
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9998] mix-blend-difference transition-[width,height] duration-300"
        style={{
          background: "radial-gradient(circle, rgba(255,33,48,0.3), transparent 70%)",
          transition: "transform 0.15s ease-out",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: sx, y: sy }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-blood-bright absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(255,33,48,0.8)]" />
        <div className="w-8 h-8 rounded-full border border-blood-bright/60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
