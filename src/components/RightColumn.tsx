import { useEffect, useState } from "react";
import Corners from "./Corners";

const skills = [
  { label: "REACT", pct: 90 },
  { label: "NEXT.JS", pct: 85 },
  { label: "TYPESCRIPT", pct: 90 },
  { label: "NODE.JS", pct: 85 },
  { label: "TAILWIND", pct: 90 },
];

const SkillRow = ({ label, pct }: { label: string; pct: number }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => { const t = setTimeout(() => setWidth(pct), 300); return () => clearTimeout(t); }, [pct]);
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex justify-between text-[11.5px] text-[#d8c8c8] mb-[5px] font-[600]">
        {label}
        <span className="font-[family-name:var(--font-mono)] text-blood-bright text-[10.5px]">{pct}%</span>
      </div>
      <div className="h-[5px] bg-white/[0.05] rounded-[3px] overflow-hidden">
        <div className="h-full rounded-[3px] bg-gradient-to-r from-blood-dim to-blood-bright transition-all duration-[1100ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
};

const RightColumn = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    let cur = 0;
    const target = 1;
    const step = () => {
      cur += Math.ceil((target - cur) / 8) || (target > cur ? 1 : 0);
      setVisitorCount(cur);
      if (cur < target) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end gap-2.5">
        {[
          { href: "https://github.com/caiqueDeOliveira-dev", title: "GitHub", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.4-3.4-1.4-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5A10.2 10.2 0 0 0 22 12.2C22 6.6 17.5 2 12 2z"/></svg> },
          { href: "https://www.instagram.com/caique.o.castaldeli/", title: "Instagram", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="16" height="16"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1"/></svg> },
          { href: "https://www.linkedin.com/in/caique-deoliveira-dev", title: "LinkedIn", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4 0 4.7 2.6 4.7 6.1V21h-4v-5.4c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V21H9z"/></svg> },
          { href: "mailto:caiquedeoliveira.dev@gmail.com", title: "E-mail", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="16" height="16"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg> },
        ].map((s) => (
          <a key={s.title} href={s.href} target={s.href.startsWith("#") ? undefined : "_blank"} title={s.title} className="w-[38px] h-[38px] flex items-center justify-center border border-line rounded-[4px] text-blood-bright transition-all duration-[180ms] ease-linear hover:bg-[rgba(179,18,28,0.12)] hover:border-blood hover:-translate-y-0.5">{s.icon}</a>
        ))}
      </div>

      <div className="relative bg-gradient-to-b from-panel to-panel-2 border border-line rounded-[4px] p-5">
        <Corners />
        <div className="font-[family-name:var(--font-mono)] text-[10.5px] tracking-[0.16em] uppercase text-text-dim">&gt; OLÁ,</div>
        <h1 className="font-[family-name:var(--font-cinzel)] font-[900] text-[34px] tracking-[0.02em] leading-[1.05] text-blood-bright mt-2 mb-0.5" style={{ textShadow: "0 0 22px rgba(255,33,48,0.35)" }}>EU SOU<br />CAIQUE</h1>
        <div className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.35em] text-[#d8c8c8]">O CASTALDELI</div>
        <div className="mt-[18px] flex flex-col gap-3">
          <div className="flex items-center gap-2.5 text-[12px] text-text-dim"><svg className="w-4 shrink-0 text-blood-bright" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m8 6-6 6 6 6M16 6l6 6-6 6"/></svg><div><b className="block text-[#e9dede] font-[600] text-[12.5px]">DESENVOLVEDOR FULL STACK</b></div></div>
          <div className="flex items-center gap-2.5 text-[12px] text-text-dim"><svg className="w-4 shrink-0 text-blood-bright" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 5c4-2 8-2 8 1v13c0-3-4-3-8-1zM20 5c-4-2-8-2-8 1v13c0-3 4-3 8-1z"/></svg><div>CRIADOR DO<br /><b className="text-[#e9dede] font-[600] text-[12.5px]">HISTÓRIAS ESQUECIDAS</b></div></div>
          <div className="flex items-center gap-2.5 text-[12px] text-text-dim"><svg className="w-4 shrink-0 text-blood-bright" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="20" height="11" rx="4"/></svg><div>CRIADOR DO<br /><b className="text-[#e9dede] font-[600] text-[12.5px]">NEGO CAOS</b></div></div>
        </div>
        <div className="mt-[18px] flex items-center justify-between px-3.5 py-3 border border-line rounded-[4px] bg-[rgba(179,18,28,0.05)]">
          <div><div className="font-[family-name:var(--font-mono)] text-[9px] text-text-faint tracking-[0.08em]">DISPONÍVEL PARA</div><div className="text-[12.5px] font-[700] text-[#f3e9e9] mt-0.5">NOVOS DESAFIOS</div></div>
          <div className="w-[9px] h-[9px] rounded-full bg-blood-bright shadow-[0_0_10px_#ff2130] animate-[blink_1.8s_infinite_ease-in-out]" />
        </div>
      </div>

      <div className="relative bg-gradient-to-b from-panel to-panel-2 border border-line rounded-[4px] text-center py-6 px-5">
        <Corners />
        <div className="font-[family-name:var(--font-mono)] text-[10.5px] tracking-[0.16em] uppercase text-text-dim mb-1.5">STATUS</div>
        <div className="font-[family-name:var(--font-cinzel)] font-[700] text-[19px] text-blood-bright" style={{ textShadow: "0 0 16px rgba(255,33,48,0.3)" }}>DISPONÍVEL</div>
        <div className="font-[family-name:var(--font-mono)] text-[9.5px] text-text-faint tracking-[0.06em] mt-0.5">PARA OPORTUNIDADES</div>
        <svg viewBox="0 0 100 100" fill="none" stroke="#ff2130" strokeWidth="1.3" className="w-[52px] h-[52px] mx-auto mt-4 opacity-85"><path d="M50 15c-11 0-18 8-18 19 0 8 4 13 7 17-1 4-3 9-1 13 3-3 6-6 9-7 1 2 3 4 3 4s2-2 3-4c3 1 6 4 9 7 2-4 0-9-1-13 3-4 7-9 7-17 0-11-7-19-18-19z"/></svg>
      </div>

      <div className="relative bg-gradient-to-b from-panel to-panel-2 border border-line rounded-[4px] p-5">
        <Corners />
        <div className="font-[family-name:var(--font-mono)] text-[10.5px] tracking-[0.16em] uppercase text-text-dim">VISITANTES</div>
        <div className="font-[family-name:var(--font-cinzel)] text-[32px] font-[900] text-blood-bright my-1.5">{visitorCount.toLocaleString("pt-BR")}</div>
        <div className="font-[family-name:var(--font-mono)] text-[9.5px] text-text-faint">DESDE 07/2026</div>
        <svg viewBox="0 0 200 50" preserveAspectRatio="none" className="w-full h-[50px] mt-3"><polyline points="0,40 20,36 40,38 60,28 80,32 100,20 120,24 140,14 160,18 180,8 200,10" fill="none" stroke="#ff2130" strokeWidth="2" /></svg>
      </div>

      <div className="relative bg-gradient-to-b from-panel to-panel-2 border border-line rounded-[4px] p-5">
        <Corners />
        <div className="font-[family-name:var(--font-mono)] text-[10.5px] tracking-[0.16em] uppercase text-text-dim mb-3.5">SKILLS</div>
        {skills.map((s) => <SkillRow key={s.label} label={s.label} pct={s.pct} />)}
      </div>

      <div className="relative bg-gradient-to-b from-panel to-panel-2 border border-line rounded-[4px] p-3 overflow-hidden">
        <Corners />
        <div className="flex justify-between items-center mb-2.5 px-1"><span className="font-[family-name:var(--font-mono)] text-[10.5px] tracking-[0.16em] uppercase text-text-dim">PLAYLIST</span></div>
        <div className="relative">
          <iframe
            src="https://open.spotify.com/embed/playlist/5aFmMeOlw2goqpgPtEIby9?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-[3px]"
          />
        </div>
        <p className="font-[family-name:var(--font-mono)] text-[8.5px] text-text-faint tracking-[0.06em] mt-2 text-center">Spotify não permite autoplay — clique no play do embed</p>
      </div>
    </div>
  );
};

export default RightColumn;
