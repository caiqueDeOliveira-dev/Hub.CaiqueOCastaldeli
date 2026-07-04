import Corners from "./Corners";
import wolfVideo from "../assets/wolf-page.mp4";

const projects = [
  {
    id: "historias",
    title: "HISTÓRIAS ESQUECIDAS",
    desc: "Um universo literário sombrio, onde cada história guarda segredos profundos.",
    btn: "Explorar →",
    href: "https://www.instagram.com/caique.o.castaldeli/",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ff2130" strokeWidth="1.4" width="46" height="46"><path d="M4 5c4-2 8-2 8 1v13c0-3-4-3-8-1zM20 5c-4-2-8-2-8 1v13c0-3 4-3 8-1z"/></svg>,
    links: [{ href: "https://www.youtube.com/@Caique.O.Castaldeli", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>, title: "YouTube" }],
  },
  {
    id: "nego-caos",
    title: "NEGO CAOS",
    desc: "Um jogo inspirado no caos, na mitologia e na força de um guerreiro.",
    btn: "Jogar agora →",
    href: "https://www.twitch.tv/negocaos28",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ff2130" strokeWidth="1.4" width="46" height="46"><rect x="2" y="7" width="20" height="11" rx="4"/><circle cx="16" cy="10.5" r="1" fill="#ff2130"/><circle cx="18.5" cy="13" r="1" fill="#ff2130"/></svg>,
    links: [{ href: "https://www.instagram.com/nego.caos/", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="16" height="16"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1"/></svg>, title: "Instagram Nego Caos" }],
  },
  {
    id: "portfolio",
    title: "SITE PESSOAL",
    href: "https://site-caique-o-castald-git-d95bd7-caiquedeoliveira-devs-projects.vercel.app/",
    desc: "Meu hub pessoal com projetos, links e conteúdo exclusivo.",
    btn: "Acessar →",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ff2130" strokeWidth="1.4" width="46" height="46"><rect x="3" y="4" width="18" height="13" rx="1"/><path d="M8 21h8M12 17v4"/></svg>,
  },
];

const CenterColumn = () => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center justify-center min-h-[380px]">
      <video src={wolfVideo} autoPlay loop muted playsInline className="w-full max-w-[420px] h-auto object-contain rounded-[4px]" />
    </div>

    <div className="relative bg-gradient-to-b from-panel to-panel-2 border border-line rounded-[4px] text-center py-6 px-[30px]">
      <Corners />
      <p className="font-[family-name:var(--font-cinzel)] text-[15px] tracking-[0.02em] text-[#ddc9ca]">&ldquo;EU NÃO SIGO CAMINHOS.<br /><span className="text-blood-bright">EU CRIO O MEU.</span>&rdquo;</p>
      <svg viewBox="0 0 24 24" className="w-4 h-4 mx-auto mt-2.5 opacity-50"><path d="M12 2 L18 14 L12 22 L6 14 Z" fill="#ff2130" opacity="0.5" /></svg>
    </div>

    <div className="flex items-center gap-3 font-[family-name:var(--font-cinzel)] font-[700] text-[16px] tracking-[0.04em] text-[#f3e9e9] uppercase px-0.5 py-1">
      PROJETOS EM <span className="text-blood-bright">DESTAQUE</span>
      <span className="flex-1 h-px bg-gradient-to-r from-line to-transparent" />
    </div>

    {projects.map((project) => (
      <div key={project.id} className="relative bg-gradient-to-b from-panel to-panel-2 border border-line rounded-[4px] grid grid-cols-[150px_1fr] gap-[18px] p-4 items-center max-sm:grid-cols-1">
        <Corners />
        <div className="h-[100px] rounded-[3px] overflow-hidden border border-line bg-[radial-gradient(circle_at_30%_20%,rgba(179,18,28,0.25),#0a0505_70%)] flex items-center justify-center">{project.icon}</div>
        <div>
          <h3 className="font-[family-name:var(--font-cinzel)] text-[16px] tracking-[0.02em] text-[#f3e9e9] mb-1.5">
            {project.title.includes(" ") ? <>{project.title.slice(0, project.title.indexOf(" "))} <span className="text-blood-bright">{project.title.slice(project.title.indexOf(" ") + 1)}</span></> : project.title}
          </h3>
          <p className="text-[12.5px] text-text-dim mb-3 max-w-[420px]">{project.desc}</p>
          <div className="flex items-center gap-2 flex-wrap">
            <a href={project.href || `#${project.id}`} target={project.href ? "_blank" : undefined} className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[10.5px] tracking-[0.08em] uppercase px-3.5 py-2 border border-line rounded-[3px] text-[#e9dede] bg-white/[0.02] transition-all duration-[180ms] ease-linear hover:border-blood hover:text-white hover:bg-[rgba(179,18,28,0.14)] hover:gap-[11px]">{project.btn}</a>
            {project.links?.map((link) => (
              <a key={link.title} href={link.href} target="_blank" title={link.title} className="w-[32px] h-[32px] flex items-center justify-center border border-line rounded-[3px] text-text-dim transition-all duration-[180ms] ease-linear hover:border-blood hover:text-blood-bright hover:bg-[rgba(179,18,28,0.1)]">{link.icon}</a>
            ))}
          </div>
        </div>
      </div>
    ))}

    <div className="relative bg-gradient-to-b from-panel to-panel-2 border border-line rounded-[4px] text-center py-[26px] px-5">
      <Corners />
      <p className="font-[family-name:var(--font-cinzel)] text-[14px] text-[#ddc9ca] tracking-[0.02em] leading-[1.7]">&ldquo;LOBOS NÃO PERDEM TEMPO EXPLICANDO<br />SUA FORÇA PARA OVELHAS.&rdquo;</p>
      <div className="italic text-text-faint text-[12px] mt-3.5 font-[family-name:var(--font-inter)]">— Caique O Castaldeli</div>
    </div>

    <div className="text-center pt-[18px] pb-1">
      <div className="font-[family-name:var(--font-cinzel)] text-blood-bright font-[700] text-[13px] tracking-[0.05em]">CAIQUE HUB</div>
      <div className="font-[family-name:var(--font-mono)] text-[9.5px] text-text-faint tracking-[0.1em] mt-1">TODOS OS DIREITOS RESERVADOS © 2026</div>
    </div>
  </div>
);

export default CenterColumn;
