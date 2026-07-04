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
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25-1.844-.276-3.68-.276-5.487 0-.163-.394-.406-.875-.617-1.25a.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.028C.533 9.046-.32 13.58.1 18.058a.082.082 0 0 0 .031.056c2.053 1.508 4.041 2.423 5.993 3.03a.077.077 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.042-.106c-.653-.247-1.274-.55-1.872-.892a.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.01c.12.099.246.198.373.292a.077.077 0 0 1-.007.128c-.598.345-1.22.647-1.873.893a.077.077 0 0 0-.041.107c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.029c1.961-.607 3.95-1.522 6.002-3.03a.077.077 0 0 0 .032-.055c.5-5.178-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.175 1.095 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/></svg>,
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
