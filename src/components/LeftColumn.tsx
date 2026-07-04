import Corners from "./Corners";
import wolfPhoto from "../assets/Eu-Wolf.png";
import curriculo from "../assets/Curriculo-Caiquedeoliveira.dev.pdf";

const navItems = [
  {
    href: "https://site-caique-o-castald-git-d95bd7-caiquedeoliveira-devs-projects.vercel.app/",
    label: "Site Pessoal",
    sub: "Hub Caique",
    external: true,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="14" height="14"><rect x="3" y="4" width="18" height="13" rx="1"/><path d="M8 21h8M12 17v4"/></svg>,
  },
  {
    href: "#historias",
    label: "Histórias Esquecidas",
    sub: "Meu livro",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="14" height="14"><path d="M4 5c4-2 8-2 8 1v13c0-3-4-3-8-1zM20 5c-4-2-8-2-8 1v13c0-3 4-3 8-1z"/></svg>,
  },
  {
    href: "https://discord.gg/vEqm6dVmH",
    label: "Discord",
    sub: "Meu grupo",
    external: true,
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M20.3 5.5c-1.2-.6-2.6-1-4-1.1-.2 0-.4.1-.5.2-.2.4-.4.8-.5 1.2-1.5-.2-3-.2-4.5 0-.2-.4-.3-.8-.5-1.2-.1-.1-.3-.2-.5-.2-1.4.1-2.8.5-4 1.1-.1 0-.1.1-.2.1-2.5 3.7-3.2 7.3-2.8 10.9 0 .2.1.4.2.5 1.6 1.2 3.2 1.9 4.7 2.4.2.1.5 0 .6-.1.4-.5.7-1 1-1.6.1-.2 0-.4-.2-.5-.5-.2-1-.5-1.5-.8-.1-.1-.1-.2 0-.3.1-.1.2-.1.3-.1 0 0 0 0 .1 0 2.6 1.2 5.4 1.2 8 0 0 0 0 0 .1 0 .1 0 .2.1.3.1 0 .1 0 .3-.5.8-.9 1.5-1.5.8.1.1.2.2.4.6.5.1.2.2.4.6.5 1.5-.5 3.1-1.2 4.7-2.4.1-.1.2-.3.2-.5.5-3.7-.3-7.3-2.8-10.9-.1 0-.1-.1-.2-.1zM9.3 13.9c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8c0 1-.7 1.8-1.6 1.8zm5.4 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8c0 1-.7 1.8-1.6 1.8z"/></svg>,
  },
  {
    href: "#nego-caos",
    label: "Nego Caos",
    sub: "Meu game",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="14" height="14"><rect x="2" y="7" width="20" height="11" rx="4"/><path d="M7 11v3M5.5 12.5h3"/><circle cx="16" cy="10.5" r="1"/><circle cx="18.5" cy="13" r="1"/></svg>,
  },
  {
    href: "https://github.com/caiqueDeOliveira-dev",
    label: "GitHub",
    sub: "Repositórios",
    external: true,
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.4-3.4-1.4-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5A10.2 10.2 0 0 0 22 12.2C22 6.6 17.5 2 12 2z"/></svg>,
  },
  {
    href: "https://www.linkedin.com/in/caique-deoliveira-dev",
    label: "LinkedIn",
    sub: "Vamos conectar",
    external: true,
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4 0 4.7 2.6 4.7 6.1V21h-4v-5.4c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V21H9z"/></svg>,
  },
  {
    href: "https://x.com/CaahCast",
    label: "X / Twitter",
    sub: "Siga-me",
    external: true,
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    href: "https://www.instagram.com/caique.o.castaldeli/",
    label: "Instagram",
    sub: "Meu dia a dia",
    external: true,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="14" height="14"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1"/></svg>,
  },
  {
    href: "mailto:caiquedeoliveira.dev@gmail.com",
    label: "Contato",
    sub: "Fale comigo",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="14" height="14"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>,
  },
  {
    href: curriculo,
    label: "Currículo",
    sub: "Baixar PDF",
    download: true,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="14" height="14"><path d="M6 2h9l5 5v15H6z"/><path d="M14 2v5h5M9 13h6M9 17h6"/></svg>,
  },
];

const LeftColumn = () => (
  <div className="flex flex-col gap-4">
    <div className="flex flex-col gap-0.5 pb-1">
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 40 40" width="30" height="30" className="shrink-0">
          <path d="M20 2 L26 14 L38 12 L28 20 L34 32 L20 26 L6 32 L12 20 L2 12 L14 14 Z" fill="none" stroke="#ff2130" strokeWidth="1.4"/>
        </svg>
        <span className="font-[family-name:var(--font-cinzel)] font-[700] text-[21px] tracking-[0.03em] text-[#f3e9e9]">CAIQUE</span>
      </div>
      <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] text-blood-bright pl-[40px]">HUB</span>
    </div>

    <div className="relative bg-gradient-to-b from-panel to-panel-2 border border-line rounded-[4px] p-5">
      <Corners />
      <p className="font-[family-name:var(--font-mono)] text-[11.5px] text-text-dim leading-[1.7]">&ldquo;DISCIPLINA FORJA O LOBO.<br />FOCO GUIA A ALMA.<br />PROPÓSITO MOVE O <b className="text-blood-bright font-[500]">ALFA</b>.&rdquo;</p>
    </div>

    <div className="self-center w-[150px] h-[150px] relative flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0d0e] to-black border border-line overflow-hidden" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
        <img src={wolfPhoto} alt="Eu-Wolf" className="w-full h-full object-cover" />
      </div>
    </div>

    <nav className="flex flex-col gap-2">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.external ? "_blank" : undefined}
          download={item.download ? true : undefined}
          className="flex items-center gap-2.5 px-3.5 py-3 border border-transparent rounded-[4px] bg-white/[0.012] transition-all duration-[180ms] ease-linear hover:border-line hover:bg-[rgba(179,18,28,0.06)] hover:translate-x-[2px]"
        >
          <span className="w-[28px] h-[28px] shrink-0 flex items-center justify-center border border-line rounded-[4px] text-blood-bright">{item.icon}</span>
          <div>
            <div className="text-[14px] font-[600] text-[#e9dede] tracking-[0.02em]">{item.label}</div>
            <div className="font-[family-name:var(--font-mono)] text-[10px] text-text-faint uppercase tracking-[0.08em] mt-0.5">{item.sub}</div>
          </div>
        </a>
      ))}
    </nav>

    <div className="text-center font-[family-name:var(--font-mono)] text-[10px] text-text-faint tracking-[0.05em] leading-[1.8] pt-1.5">
      FEITO COM PAIXÃO<br />DISCIPLINA E PROPÓSITO
      <svg viewBox="0 0 200 20" preserveAspectRatio="none" className="w-full h-5 mt-1.5 opacity-70">
        <polyline points="0,10 40,10 50,2 60,18 70,10 200,10" fill="none" stroke="#ff2130" strokeWidth="1.3" />
      </svg>
    </div>
  </div>
);

export default LeftColumn;
