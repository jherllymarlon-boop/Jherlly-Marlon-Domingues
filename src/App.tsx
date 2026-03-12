import React from 'react';
import { Phone, MoreVertical, Check, X } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen font-dm-sans text-dark bg-off-white selection:bg-green-brand selection:text-white">
      {/* TOP BAR */}
      <div className="bg-green-brand text-white text-center py-3 px-5 text-[13px] font-bold tracking-wider">
        📘 Ebook educativo • Conteúdo 100% prático • Entrega imediata por e-mail
      </div>

      {/* HERO */}
      <section className="bg-gradient-to-br from-navy via-navy-mid to-navy-light pt-[70px] px-5 pb-[80px] relative overflow-hidden">
        <div className="absolute -bottom-[120px] -left-[120px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,168,107,0.18)_0%,transparent_65%)] pointer-events-none"></div>
        <div className="absolute -top-[80px] -right-[80px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.12)_0%,transparent_65%)] pointer-events-none"></div>
        
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_280px] gap-[60px] items-center relative z-10">
          <div className="animate-fade-up text-center md:text-left">
            <span className="inline-block bg-green-brand/20 border border-green-brand text-green-light text-[11px] font-bold tracking-[0.15em] uppercase py-1.5 px-3.5 rounded-full mb-[22px]">
              MCMV — Terreno + Construção
            </span>
            <h1 className="font-fraunces text-[clamp(1.9rem,4.5vw,3rem)] font-black leading-[1.1] text-white mb-[18px]">
              Construa sua casa com o MCMV <em className="text-amber-brand not-italic italic">sem travar</em> na burocracia
            </h1>
            <p className="text-[1.05rem] text-white/75 leading-[1.7] mb-[28px] max-w-full md:max-w-[480px]">
              O guia prático que te mostra, em 60 minutos, como escolher o terreno certo, aprovar o crédito e liberar as medições — sem erros caros.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-[32px] justify-center md:justify-start">
              <span className="flex items-center gap-[7px] text-[13px] font-semibold text-white/90 bg-white/10 border border-white/15 py-1.5 px-3.5 rounded-full">
                <Check className="w-3.5 h-3.5 text-green-light" strokeWidth={3} /> Direto ao ponto
              </span>
              <span className="flex items-center gap-[7px] text-[13px] font-semibold text-white/90 bg-white/10 border border-white/15 py-1.5 px-3.5 rounded-full">
                <Check className="w-3.5 h-3.5 text-green-light" strokeWidth={3} /> Checklists práticos
              </span>
              <span className="flex items-center gap-[7px] text-[13px] font-semibold text-white/90 bg-white/10 border border-white/15 py-1.5 px-3.5 rounded-full">
                <Check className="w-3.5 h-3.5 text-green-light" strokeWidth={3} /> Passo a passo completo
              </span>
            </div>
            <a 
              href="https://pay.kiwify.com.br/ur5jGIF" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-gradient-to-br from-green-brand to-green-dark text-white font-dm-sans text-base font-bold py-[18px] px-[40px] rounded-md no-underline tracking-[0.01em] transition-transform duration-150 shadow-[0_6px_28px_rgba(0,168,107,0.5)] animate-pulse-btn hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,168,107,0.7)]"
            >
              Quero meu ebook por R$ 47,00
            </a>
            <p className="mt-[14px] text-[11.5px] text-white/45 italic">
              Sem promessas de taxa fixa. Você aprende o processo, executa com segurança e simula no agente financeiro.
            </p>
          </div>
          
          <div className="relative flex flex-col items-center gap-[14px] animate-fade-up-delay order-first md:order-last">
            <div className="relative w-[200px] md:w-[260px] drop-shadow-[-12px_20px_40px_rgba(0,0,0,0.5)]">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
                alt="Capa do ebook Casa Própria do Zero MCMV" 
                className="w-full rounded-[10px] block object-cover aspect-[3/4]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-[16px] -left-[12px] bg-amber-brand text-dark text-[11px] font-extrabold py-1.5 px-3.5 rounded-sm shadow-[0_4px_14px_rgba(0,0,0,0.3)] tracking-[0.04em] uppercase">
                🔥 Oferta
              </div>
              <div className="absolute -bottom-[14px] -right-[10px] bg-navy border-[3px] border-green-brand text-white text-[15px] font-black py-2.5 px-4.5 rounded-md shadow-[0_6px_20px_rgba(0,0,0,0.35)] leading-none text-center">
                <small className="block text-[9px] font-medium text-green-light tracking-[0.06em] mb-[3px]">por apenas</small>
                R$ 47,00
              </div>
            </div>
            <div className="text-[11px] text-white/50 text-center border border-white/15 rounded-full py-1.5 px-3.5 mt-2">
              🇧🇷 Conteúdo educativo • Brasil
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="bg-white py-[80px] px-5 border-b border-border-color">
        <div className="max-w-[900px] mx-auto">
          <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-green-brand mb-2.5">Público-alvo</div>
          <h2 className="font-fraunces text-[clamp(1.6rem,4vw,2.3rem)] font-bold leading-[1.15] text-navy mb-[36px]">
            Para quem é este guia?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-[30px] rounded-[10px] border-2 bg-gradient-to-br from-[#E6F9F2] to-[#CCF2E3] border-green-brand">
              <div className="font-bold text-[14px] mb-4 text-green-dark">✅ Para você, se...</div>
              <ul className="flex flex-col gap-[11px]">
                <li className="text-[14px] pl-[22px] relative leading-[1.5] font-medium text-[#1A2A3A]">
                  <span className="absolute left-0 text-green-brand font-black">✓</span>
                  Quer sair do aluguel construindo com MCMV (casa térrea)
                </li>
                <li className="text-[14px] pl-[22px] relative leading-[1.5] font-medium text-[#1A2A3A]">
                  <span className="absolute left-0 text-green-brand font-black">✓</span>
                  Está perdendo tempo por falta de clareza no processo
                </li>
                <li className="text-[14px] pl-[22px] relative leading-[1.5] font-medium text-[#1A2A3A]">
                  <span className="absolute left-0 text-green-brand font-black">✓</span>
                  Quer evitar reprovação por terreno, projeto ou documentação
                </li>
              </ul>
            </div>
            <div className="p-[30px] rounded-[10px] border-2 bg-gradient-to-br from-[#FEF2F2] to-[#FDE0E0] border-[#F4A0A0]">
              <div className="font-bold text-[14px] mb-4 text-[#B91C1C]">🚫 Não é para você, se...</div>
              <ul className="flex flex-col gap-[11px]">
                <li className="text-[14px] pl-[22px] relative leading-[1.5] font-medium text-[#1A2A3A]">
                  <span className="absolute left-0 text-[#DC2626] font-black">✕</span>
                  Busca "jeitinho" com terreno irregular
                </li>
                <li className="text-[14px] pl-[22px] relative leading-[1.5] font-medium text-[#1A2A3A]">
                  <span className="absolute left-0 text-[#DC2626] font-black">✕</span>
                  Não pretende trabalhar com profissional habilitado (ART/RRT)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-gradient-to-br from-[#0A1929] to-navy py-[80px] px-5 relative overflow-hidden">
        <div className="absolute -top-[80px] -right-[80px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,168,107,0.12)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-[900px] mx-auto relative z-10">
          <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-green-light mb-2.5">O que está travando você</div>
          <h2 className="font-fraunces text-[clamp(1.6rem,4vw,2.3rem)] font-bold leading-[1.15] text-white mb-[14px]">
            90% das pessoas travam aqui.
          </h2>
          <p className="text-white/60 text-[1.05rem] mb-[36px] font-medium">Você se identifica com alguma dessas dúvidas?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-[36px]">
            <div className="bg-white/5 border border-green-brand/25 rounded-[10px] pt-[28px] px-[18px] pb-[18px] text-[14.5px] text-white/80 italic leading-[1.55] relative transition-colors hover:bg-green-brand/10 hover:border-green-brand/50">
              <span className="font-fraunces text-[52px] text-green-brand opacity-60 absolute top-1 left-3 leading-none">"</span>
              <span className="block mt-2">"Não sei se meu terreno é aprovado pelo banco…"</span>
            </div>
            <div className="bg-white/5 border border-green-brand/25 rounded-[10px] pt-[28px] px-[18px] pb-[18px] text-[14.5px] text-white/80 italic leading-[1.55] relative transition-colors hover:bg-green-brand/10 hover:border-green-brand/50">
              <span className="font-fraunces text-[52px] text-green-brand opacity-60 absolute top-1 left-3 leading-none">"</span>
              <span className="block mt-2">"Não entendo como funciona a liberação por medição…"</span>
            </div>
            <div className="bg-white/5 border border-green-brand/25 rounded-[10px] pt-[28px] px-[18px] pb-[18px] text-[14.5px] text-white/80 italic leading-[1.55] relative transition-colors hover:bg-green-brand/10 hover:border-green-brand/50">
              <span className="font-fraunces text-[52px] text-green-brand opacity-60 absolute top-1 left-3 leading-none">"</span>
              <span className="block mt-2">"Tenho medo de errar na taxa de evolução de obra…"</span>
            </div>
            <div className="bg-white/5 border border-green-brand/25 rounded-[10px] pt-[28px] px-[18px] pb-[18px] text-[14.5px] text-white/80 italic leading-[1.55] relative transition-colors hover:bg-green-brand/10 hover:border-green-brand/50">
              <span className="font-fraunces text-[52px] text-green-brand opacity-60 absolute top-1 left-3 leading-none">"</span>
              <span className="block mt-2">"Quais documentos pedem, afinal?"</span>
            </div>
          </div>
          
          <div className="bg-green-brand/15 border-l-4 border-green-brand py-5 px-6 rounded-r-lg text-[15px] text-white/90 font-medium">
            <strong className="text-green-light font-bold">Resultado sem o guia certo:</strong> atraso, retrabalho e gasto desnecessário. Este ebook foi criado para cortar esse ruído e te colocar no caminho certo desde o início.
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-light-gray py-[80px] px-5">
        <div className="max-w-[900px] mx-auto">
          <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-green-brand mb-2.5">Conteúdo do ebook</div>
          <h2 className="font-fraunces text-[clamp(1.6rem,4vw,2.3rem)] font-bold leading-[1.15] text-navy mb-[36px]">
            O que você vai aprender
          </h2>
          
          <div className="border-2 border-border-color rounded-xl overflow-hidden mt-[36px] shadow-[0_4px_24px_rgba(13,43,69,0.08)]">
            {[
              { num: 1, title: "Mapa em 7 etapas — do pré-crédito ao habite-se", desc: "Visão geral do processo completo para você não se perder em nenhuma fase." },
              { num: 2, title: "Elegibilidade e simulação", desc: "Renda, FGTS, composição familiar e documentação. Saiba se você já pode começar." },
              { num: 3, title: "Terreno certo: jurídico, urbanístico, físico e infraestrutura", desc: "Os erros que reprovam o financiamento antes mesmo de você saber. Evite-os." },
              { num: 4, title: "Projeto e aprovações — ART/RRT, memorial, orçamento e cronograma", desc: "O que o banco exige do projeto e como organizar os documentos técnicos corretamente." },
              { num: 5, title: "Alvará na Prefeitura", desc: "Como protocolar e aprovar sem dor de cabeça. Dicas práticas por etapa." },
              { num: 6, title: "Contratação no banco — fluxo, custos e taxa de evolução", desc: "Entenda o que acontece depois da análise e como a liberação de parcelas funciona." },
              { num: 7, title: "Execução e medições", desc: "Como evitar glosas e acelerar a liberação de cada etapa da obra." },
              { num: 8, title: "Riscos, mitos e atalhos", desc: "O que acelera e o que trava — direto ao ponto, sem enrolação." },
              { num: 9, title: "Próximos passos — roteiro de 7 dias para sair do papel", desc: "Um plano de ação concreto para você começar ainda essa semana." }
            ].map((chapter) => (
              <div key={chapter.num} className="flex items-start gap-[18px] py-5 px-6 border-b border-border-color bg-white transition-all hover:bg-[#EEF8F4] hover:translate-x-1 last:border-b-0">
                <div className="shrink-0 w-[34px] h-[34px] bg-gradient-to-br from-green-brand to-green-dark text-white rounded-full flex items-center justify-center text-[13px] font-extrabold mt-0.5 shadow-[0_2px_10px_rgba(0,168,107,0.4)]">
                  {chapter.num}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[15px] text-navy mb-[3px]">{chapter.title}</div>
                  <div className="text-[13px] text-mid-gray leading-[1.5]">{chapter.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#DFE8F0] py-[80px] px-5">
        <div className="max-w-[900px] mx-auto">
          <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#075E54] mb-2.5">O que dizem os leitores</div>
          <h2 className="font-fraunces text-[clamp(1.6rem,4vw,2.3rem)] font-bold leading-[1.15] text-navy mb-[36px]">
            Quem já leu e aplicou
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-[14px] overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.1)] font-sans transition-all hover:scale-105 hover:shadow-[0_12px_36px_rgba(0,0,0,0.16)] -rotate-[0.3deg] hover:rotate-0">
              <div className="bg-[#075E54] py-3 px-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg text-white shrink-0 bg-[#25A244]">M</div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-[15px] leading-[1.2]">Marcos T.</div>
                  <div className="text-white/60 text-[11px]">online</div>
                </div>
                <div className="flex gap-3.5 text-lg text-white/70">
                  <Phone className="w-4 h-4" />
                  <MoreVertical className="w-4 h-4" />
                </div>
              </div>
              <div className="bg-[#ECE5DD] py-3.5 px-3 flex flex-col gap-1 min-h-[130px]">
                <div className="max-w-[86%] pt-2 px-2.5 pb-5 rounded-lg text-[13.5px] leading-[1.45] relative break-words bg-white self-start rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.1)] text-[#111]">
                  cara comprei o ebook ontem e já entendi o que tava me travando faz meses 😅
                  <span className="absolute bottom-1 right-2 text-[10px] text-[#999]">09:14</span>
                </div>
                <div className="max-w-[86%] pt-2 px-2.5 pb-5 rounded-lg text-[13.5px] leading-[1.45] relative break-words bg-white self-start rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.1)] text-[#111]">
                  o capítulo do terreno salvou minha vida, ia assinar um que tinha problema de escritura e eu nem sabia
                  <span className="absolute bottom-1 right-2 text-[10px] text-[#999]">09:15</span>
                </div>
                <div className="max-w-[86%] pt-2 px-2.5 pb-5 rounded-lg text-[13.5px] leading-[1.45] relative break-words bg-white self-start rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.1)] text-[#111]">
                  valeu demais 🙏🏽
                  <span className="absolute bottom-1 right-2 text-[10px] text-[#999]">09:15</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-[14px] overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.1)] font-sans transition-all hover:scale-105 hover:shadow-[0_12px_36px_rgba(0,0,0,0.16)] rotate-[0.3deg] hover:rotate-0">
              <div className="bg-[#075E54] py-3 px-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg text-white shrink-0 bg-[#1A6BB5]">A</div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-[15px] leading-[1.2]">Ana Paula R.</div>
                  <div className="text-white/60 text-[11px]">online</div>
                </div>
                <div className="flex gap-3.5 text-lg text-white/70">
                  <Phone className="w-4 h-4" />
                  <MoreVertical className="w-4 h-4" />
                </div>
              </div>
              <div className="bg-[#ECE5DD] py-3.5 px-3 flex flex-col gap-1 min-h-[130px]">
                <div className="max-w-[86%] pt-2 px-2.5 pb-5 rounded-lg text-[13.5px] leading-[1.45] relative break-words bg-white self-start rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.1)] text-[#111]">
                  oi!! queria agradecer pelo guia
                  <span className="absolute bottom-1 right-2 text-[10px] text-[#999]">14:02</span>
                </div>
                <div className="max-w-[86%] pt-2 px-2.5 pb-5 rounded-lg text-[13.5px] leading-[1.45] relative break-words bg-white self-start rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.1)] text-[#111]">
                  fui no banco hoje e o gerente ficou impressionado com os documentos todos organizados kkkkk
                  <span className="absolute bottom-1 right-2 text-[10px] text-[#999]">14:03</span>
                </div>
                <div className="max-w-[86%] pt-2 px-2.5 pb-5 rounded-lg text-[13.5px] leading-[1.45] relative break-words bg-white self-start rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.1)] text-[#111]">
                  crédito pré-aprovado!! 🎉🏠
                  <span className="absolute bottom-1 right-2 text-[10px] text-[#999]">14:04</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-[14px] overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.1)] font-sans transition-all hover:scale-105 hover:shadow-[0_12px_36px_rgba(0,0,0,0.16)] -rotate-[0.3deg] hover:rotate-0">
              <div className="bg-[#075E54] py-3 px-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg text-white shrink-0 bg-[#7B3FA0]">R</div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-[15px] leading-[1.2]">Roberto S.</div>
                  <div className="text-white/60 text-[11px]">online</div>
                </div>
                <div className="flex gap-3.5 text-lg text-white/70">
                  <Phone className="w-4 h-4" />
                  <MoreVertical className="w-4 h-4" />
                </div>
              </div>
              <div className="bg-[#ECE5DD] py-3.5 px-3 flex flex-col gap-1 min-h-[130px]">
                <div className="max-w-[86%] pt-2 px-2.5 pb-5 rounded-lg text-[13.5px] leading-[1.45] relative break-words bg-white self-start rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.1)] text-[#111]">
                  tava prestes a contratar um despachante pra me ajudar no processo
                  <span className="absolute bottom-1 right-2 text-[10px] text-[#999]">18:30</span>
                </div>
                <div className="max-w-[86%] pt-2 px-2.5 pb-5 rounded-lg text-[13.5px] leading-[1.45] relative break-words bg-white self-start rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.1)] text-[#111]">
                  aí um amigo me mandou o link do ebook. li em 1 hora e dispensei o despachante kkk
                  <span className="absolute bottom-1 right-2 text-[10px] text-[#999]">18:31</span>
                </div>
                <div className="max-w-[86%] pt-2 px-2.5 pb-5 rounded-lg text-[13.5px] leading-[1.45] relative break-words bg-white self-start rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.1)] text-[#111]">
                  por R$47,00 foi o melhor investimento do processo inteiro sem dúvida 👏
                  <span className="absolute bottom-1 right-2 text-[10px] text-[#999]">18:32</span>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white rounded-[14px] overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.1)] font-sans transition-all hover:scale-105 hover:shadow-[0_12px_36px_rgba(0,0,0,0.16)] rotate-[0.3deg] hover:rotate-0">
              <div className="bg-[#075E54] py-3 px-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg text-white shrink-0 bg-[#C0392B]">F</div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-[15px] leading-[1.2]">Fernanda L.</div>
                  <div className="text-white/60 text-[11px]">online</div>
                </div>
                <div className="flex gap-3.5 text-lg text-white/70">
                  <Phone className="w-4 h-4" />
                  <MoreVertical className="w-4 h-4" />
                </div>
              </div>
              <div className="bg-[#ECE5DD] py-3.5 px-3 flex flex-col gap-1 min-h-[130px]">
                <div className="max-w-[86%] pt-2 px-2.5 pb-5 rounded-lg text-[13.5px] leading-[1.45] relative break-words bg-white self-start rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.1)] text-[#111]">
                  meu marido e eu ficamos rodando em círculo por 4 meses tentando entender o MCMV
                  <span className="absolute bottom-1 right-2 text-[10px] text-[#999]">20:11</span>
                </div>
                <div className="max-w-[86%] pt-2 px-2.5 pb-5 rounded-lg text-[13.5px] leading-[1.45] relative break-words bg-white self-start rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.1)] text-[#111]">
                  o guia explicou tudo que o banco nunca explicou direito 😤
                  <span className="absolute bottom-1 right-2 text-[10px] text-[#999]">20:12</span>
                </div>
                <div className="max-w-[86%] pt-2 px-2.5 pb-5 rounded-lg text-[13.5px] leading-[1.45] relative break-words bg-white self-start rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.1)] text-[#111]">
                  já temos o terreno aprovado e o projeto na prefeitura! obrigada ❤️
                  <span className="absolute bottom-1 right-2 text-[10px] text-[#999]">20:13</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-[11px] text-[#999] mt-6 italic">
            * Depoimentos fictícios para fins ilustrativos. Substitua pelos reais antes de publicar.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="comprar" className="bg-gradient-to-br from-navy via-navy-mid to-navy-light py-[90px] px-5 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_30px,rgba(255,255,255,0.02)_30px,rgba(255,255,255,0.02)_31px)] pointer-events-none"></div>
        <div className="max-w-[900px] mx-auto relative z-10">
          <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-green-light mb-2.5">Investimento</div>
          <h2 className="font-fraunces text-[clamp(1.6rem,4vw,2.3rem)] font-bold leading-[1.15] text-white max-w-[560px] mx-auto mb-2.5">
            Comece hoje. O processo te espera.
          </h2>
          <p className="text-white/65 text-base mb-1.5">
            Um único pagamento. Acesso imediato. Sem mensalidade.
          </p>
          
          <div className="inline-flex flex-col items-center bg-white/5 border-2 border-green-brand/50 rounded-[14px] py-7 px-[52px] my-7 backdrop-blur-sm">
            <div className="text-[12px] tracking-[0.12em] uppercase text-green-light font-bold mb-1.5">🔥 Oferta por tempo limitado</div>
            <div className="text-[14px] text-white/50 mb-1">De <span className="line-through">R$ 67,90</span></div>
            <div className="font-fraunces text-[3.6rem] font-black text-white leading-none">
              <span className="text-[1.6rem] align-super font-normal">R$</span> 47<span className="text-[1.5rem]">,00</span>
            </div>
            <div className="text-[12px] text-white/55 mt-2.5">Entrega imediata por e-mail • PDF em português</div>
          </div>
          
          <div>
            <a 
              href="https://pay.kiwify.com.br/ur5jGIF" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-gradient-to-br from-green-brand to-green-dark text-white font-dm-sans text-[1.05rem] font-bold py-5 px-[52px] mt-1.5 rounded-md no-underline tracking-[0.01em] transition-transform duration-150 shadow-[0_6px_28px_rgba(0,168,107,0.5)] animate-pulse-btn hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,168,107,0.7)]"
            >
              Quero meu ebook agora por R$ 47,00
            </a>
          </div>
          
          <div className="mt-6 flex items-center justify-center gap-2.5 text-white/55 text-[13px] font-medium">
            🔒 Pagamento seguro &nbsp;•&nbsp; Satisfação garantida &nbsp;•&nbsp; Suporte por e-mail
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark py-8 px-5 text-center">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[12px] text-[#3A5060] leading-[1.7]">
            Este é um produto educativo. Não nos responsabilizamos por decisões financeiras, contratuais ou legais tomadas pelo comprador.<br />
            As condições do MCMV são definidas pela Caixa Econômica Federal e podem ser alteradas a qualquer momento. Simule sempre com um agente financeiro habilitado.<br /><br />
            &copy; 2026 · Todos os direitos reservados · 
            <a href="https://pay.kiwify.com.br/ur5jGIF" target="_blank" rel="noopener noreferrer" className="text-green-dark underline ml-1">Política de Privacidade</a> · 
            <a href="https://pay.kiwify.com.br/ur5jGIF" target="_blank" rel="noopener noreferrer" className="text-green-dark underline ml-1">Termos de Uso</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
