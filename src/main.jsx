const { useMemo, useState } = React

function SvgIcon({ children, className = '', size = 24, strokeWidth = 1.8 }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      width={size}
    >
      {children}
    </svg>
  )
}

const ShieldCheck = (props) => (
  <SvgIcon {...props}>
    <path d="M12 3l7 3v5c0 5-3.2 8.2-7 10-3.8-1.8-7-5-7-10V6l7-3z" />
    <path d="m9 12 2 2 4-5" />
  </SvgIcon>
)
const ClipboardCheck = (props) => (
  <SvgIcon {...props}>
    <path d="M9 5h6" />
    <path d="M9 3h6v4H9z" />
    <path d="M7 5H5v16h14V5h-2" />
    <path d="m9 14 2 2 4-5" />
  </SvgIcon>
)
const ArrowRight = (props) => (
  <SvgIcon {...props}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </SvgIcon>
)
const MessageCircle = (props) => (
  <SvgIcon {...props}>
    <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-5.1A8.5 8.5 0 1 1 21 11.5z" />
  </SvgIcon>
)
const Building2 = (props) => (
  <SvgIcon {...props}>
    <path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16" />
    <path d="M9 21v-4h3v4" />
    <path d="M8 7h1M12 7h1M8 11h1M12 11h1M19 21V9h1" />
  </SvgIcon>
)
const CheckCircle2 = (props) => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12.5 2.2 2.2 4.8-5.4" />
  </SvgIcon>
)
const AlertTriangle = (props) => (
  <SvgIcon {...props}>
    <path d="M12 3 2.5 20h19L12 3z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </SvgIcon>
)
const UsersRound = (props) => (
  <SvgIcon {...props}>
    <path d="M17 20a5 5 0 0 0-10 0" />
    <circle cx="12" cy="9" r="4" />
    <path d="M22 20a4 4 0 0 0-4-3.8" />
    <path d="M2 20a4 4 0 0 1 4-3.8" />
  </SvgIcon>
)
const GraduationCap = (props) => (
  <SvgIcon {...props}>
    <path d="M3 8l9-4 9 4-9 4-9-4z" />
    <path d="M7 10v5c3 2 7 2 10 0v-5" />
  </SvgIcon>
)
const Phone = (props) => (
  <SvgIcon {...props}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6.1 6.1l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </SvgIcon>
)
const Mail = (props) => (
  <SvgIcon {...props}>
    <path d="M4 4h16v16H4z" />
    <path d="m4 7 8 6 8-6" />
  </SvgIcon>
)

// Altere este número para o WhatsApp comercial da MANTHO, incluindo DDI e DDD.
const WHATSAPP_NUMBER = '5500000000000'

const initialFields = {
  schoolName: '',
  responsibleName: '',
  role: '',
  phone: '',
  email: '',
  city: ''
}

const questions = [
  'A escola possui um plano formal de emergência?',
  'Todos os funcionários conhecem esse plano?',
  'Os professores sabem como agir em caso de ameaça interna?',
  'A equipe de portaria possui protocolo claro de controle de acesso?',
  'A escola realiza treinamentos periódicos com seus colaboradores?',
  'Existe procedimento definido para comunicação com pais em situação de crise?',
  'A escola possui protocolo para evacuação, abrigo ou confinamento?',
  'Há plano específico para casos de violência, bullying ou cyberbullying?',
  'Os funcionários sabem identificar sinais de comportamento de risco?',
  'A escola já realizou algum simulado de emergência?',
  'Existe integração entre direção, coordenação, professores e segurança?',
  'Há protocolo para atendimento inicial em primeiros socorros?',
  'A escola mantém registro formal de incidentes e ocorrências internas?',
  'Existe equipe responsável pela gestão de segurança escolar?',
  'A escola revisa seus protocolos pelo menos uma vez ao ano?'
]

const answerOptions = [
  { label: 'Sim', value: 0 },
  { label: 'Parcialmente', value: 1 },
  { label: 'Não', value: 2 }
]

const services = [
  'Diagnóstico de vulnerabilidade escolar',
  'Treinamento de professores e funcionários',
  'Protocolos de emergência',
  'Prevenção ao bullying e cyberbullying',
  'Simulados orientados',
  'Gestão e governança de segurança escolar',
  'Palestras para pais, alunos e educadores'
]

const problems = [
  'Falta de protocolo claro',
  'Equipe sem treinamento prático',
  'Comunicação falha com pais',
  'Ausência de plano de contingência',
  'Falta de integração entre direção, professores, funcionários e segurança'
]

function getRiskResult(score) {
  if (score <= 10) {
    return {
      title: 'Baixa vulnerabilidade',
      tone: 'from-emerald-500 to-emerald-700',
      message:
        'Sua escola demonstra bons indicadores iniciais de preparo. Ainda assim, segurança escolar exige revisão contínua, treinamento periódico e atualização dos protocolos.'
    }
  }

  if (score <= 20) {
    return {
      title: 'Vulnerabilidade moderada',
      tone: 'from-amber-400 to-mantho-gold',
      message:
        'Sua escola possui alguns elementos de segurança, mas ainda apresenta lacunas importantes. Em uma situação real, essas falhas podem comprometer a resposta da equipe.'
    }
  }

  return {
    title: 'Alta vulnerabilidade',
    tone: 'from-red-500 to-red-700',
    message:
      'Sua escola apresenta sinais relevantes de exposição operacional. A ausência de protocolos, treinamento e governança pode gerar improviso em momentos críticos.'
  }
}

function App() {
  const [formData, setFormData] = useState(initialFields)
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)

  const totalScore = useMemo(
    () => Object.values(answers).reduce((sum, value) => sum + Number(value), 0),
    [answers]
  )

  const result = getRiskResult(totalScore)
  const answeredQuestions = Object.keys(answers).length
  const isComplete = answeredQuestions === questions.length
  const whatsappMessage = encodeURIComponent(
    `Olá, sou da escola ${formData.schoolName || '[NOME DA ESCOLA]'}. Fiz o diagnóstico de segurança escolar da MANTHO e gostaria de agendar uma reunião técnica.`
  )
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`

  function updateField(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  function updateAnswer(index, value) {
    setAnswers({ ...answers, [index]: value })
    setShowResult(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (isComplete) {
      setShowResult(true)
      setTimeout(() => {
        document.getElementById('resultado')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }

  return (
    <main className="min-h-screen bg-mantho-light text-mantho-ink">
      <Hero />
      <ProblemSection />
      <AboutSection />
      <DiagnosticSection
        answers={answers}
        formData={formData}
        handleSubmit={handleSubmit}
        isComplete={isComplete}
        result={result}
        showResult={showResult}
        totalScore={totalScore}
        updateAnswer={updateAnswer}
        updateField={updateField}
        whatsappUrl={whatsappUrl}
      />
      <Footer />
    </main>
  )
}

function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
      <a href="#topo" className="group flex items-center gap-3" aria-label="MANTHO">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-mantho-gold/50 bg-white/10 text-mantho-gold shadow-lg shadow-black/10 transition group-hover:bg-mantho-gold group-hover:text-mantho-navy">
          <ShieldCheck size={24} strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-xl font-bold tracking-[0.26em] text-white">MANTHO</p>
          <p className="text-xs uppercase tracking-[0.22em] text-white/60">Proteção • Método • Governança</p>
        </div>
      </a>
      <a
        href="#diagnostico"
        className="hidden rounded-full border border-mantho-gold/60 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-mantho-gold hover:text-mantho-navy md:inline-flex"
      >
        Diagnóstico gratuito
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-mantho-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,164,92,0.25),transparent_34%),linear-gradient(135deg,rgba(16,42,76,0.92),rgba(8,23,43,1))]" />
      <div className="absolute -right-24 top-24 h-72 w-72 rounded-full border border-mantho-gold/20" />
      <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-black/20 to-transparent" />
      <div className="relative">
        <Header />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-12 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:pb-32 lg:pt-20">
          <div className="flex flex-col justify-center">
            <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-mantho-gold/40 bg-white/[0.08] px-4 py-2 text-sm font-medium text-mantho-gold backdrop-blur">
              <ClipboardCheck size={18} /> Diagnóstico gratuito de segurança escolar
            </span>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Sua escola está preparada para uma emergência real?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
              A MANTHO ajuda instituições de ensino a estruturarem protocolos, treinamentos e governança para prevenção, resposta e gestão de crises no ambiente escolar.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#diagnostico"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-mantho-gold px-7 py-4 font-bold text-mantho-navy shadow-premium transition hover:-translate-y-0.5 hover:bg-[#d8b971]"
              >
                Fazer diagnóstico gratuito <ArrowRight size={19} />
              </a>
              <a
                href="#diagnostico"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:border-mantho-gold hover:text-mantho-gold"
              >
                Falar com especialista <MessageCircle size={19} />
              </a>
            </div>
          </div>
          <div className="relative lg:pl-8">
            <div className="rounded-[2rem] border border-white/12 bg-white/10 p-5 shadow-premium backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-white p-6 text-mantho-ink">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-mantho-gold">MANTHO Framework</p>
                    <h2 className="mt-3 text-2xl font-bold text-mantho-navy">Prevenção estruturada para ambientes escolares</h2>
                  </div>
                  <div className="rounded-2xl bg-mantho-navy p-3 text-mantho-gold">
                    <Building2 size={26} />
                  </div>
                </div>
                <div className="space-y-4">
                  {['Diagnóstico de vulnerabilidades', 'Protocolos institucionais', 'Treinamento prático', 'Governança e melhoria contínua'].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                      <CheckCircle2 className="shrink-0 text-mantho-gold" size={22} />
                      <span className="font-semibold text-mantho-blue">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-2xl bg-mantho-navy p-5 text-white">
                  <p className="text-sm uppercase tracking-[0.18em] text-mantho-gold">Governança</p>
                  <p className="mt-2 text-2xl font-bold">Método antes da crise. Clareza durante a resposta.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProblemSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <span className="section-kicker">O problema</span>
          <h2 className="section-title mt-4">O risco não começa no dia da crise. Ele começa na ausência de preparo.</h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-slate-600">
            Segurança escolar exige protocolos objetivos, treinamento aplicável, cultura preventiva e capacidade de resposta coordenada. Quando esses elementos não estão claros, a instituição depende de improviso justamente no momento de maior pressão.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {problems.map((problem) => (
              <div key={problem} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <AlertTriangle className="mt-0.5 shrink-0 text-mantho-gold" size={21} />
                <p className="font-semibold text-mantho-blue">{problem}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border-l-4 border-mantho-gold bg-mantho-navy p-6 text-white shadow-premium">
            <p className="text-2xl font-bold">Na emergência, improviso não é estratégia. É exposição.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="bg-mantho-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Sobre a MANTHO</span>
          <h2 className="section-title mt-4">Proteção, Método e Governança</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            A MANTHO atua na estruturação de segurança escolar com foco em prevenção, capacitação, diagnóstico de vulnerabilidades, protocolos institucionais e cultura de proteção dentro das escolas.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={service} className="group rounded-3xl border border-white bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-mantho-navy text-mantho-gold transition group-hover:bg-mantho-gold group-hover:text-mantho-navy">
                {index % 3 === 0 ? <ShieldCheck /> : index % 3 === 1 ? <UsersRound /> : <GraduationCap />}
              </div>
              <h3 className="text-xl font-bold text-mantho-navy">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DiagnosticSection({
  answers,
  formData,
  handleSubmit,
  isComplete,
  result,
  showResult,
  totalScore,
  updateAnswer,
  updateField,
  whatsappUrl
}) {
  return (
    <section id="diagnostico" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="h-fit rounded-[2rem] bg-mantho-navy p-8 text-white shadow-premium lg:sticky lg:top-8">
            <span className="section-kicker text-mantho-gold">Diagnóstico</span>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">Diagnóstico de Segurança Escolar</h2>
            <p className="mt-5 leading-7 text-white/72">
              Responda ao questionário para identificar indicadores iniciais de vulnerabilidade operacional. O resultado é calculado no próprio navegador, sem banco de dados nesta versão.
            </p>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.08] p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-mantho-gold">Progresso</p>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/12">
                <div
                  className="h-full rounded-full bg-mantho-gold transition-all"
                  style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }}
                />
              </div>
              <p className="mt-3 text-sm text-white/70">{Object.keys(answers).length} de {questions.length} perguntas respondidas</p>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-100 bg-slate-50 p-5 shadow-sm sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField label="Nome da escola" name="schoolName" value={formData.schoolName} onChange={updateField} required />
              <TextField label="Nome do responsável" name="responsibleName" value={formData.responsibleName} onChange={updateField} required />
              <TextField label="Cargo" name="role" value={formData.role} onChange={updateField} required />
              <TextField label="Telefone/WhatsApp" name="phone" value={formData.phone} onChange={updateField} type="tel" required />
              <TextField label="E-mail" name="email" value={formData.email} onChange={updateField} type="email" required />
              <TextField label="Cidade" name="city" value={formData.city} onChange={updateField} required />
            </div>

            <div className="mt-10 space-y-5">
              {questions.map((question, index) => (
                <fieldset key={question} className="rounded-3xl border border-slate-200 bg-white p-5">
                  <legend className="px-1 text-base font-bold text-mantho-navy">
                    {index + 1}. {question}
                  </legend>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {answerOptions.map((option) => (
                      <label
                        key={option.label}
                        className={`flex cursor-pointer items-center justify-between rounded-2xl border px-4 py-3 font-semibold transition ${
                          answers[index] === option.value
                            ? 'border-mantho-gold bg-mantho-gold/12 text-mantho-navy ring-2 ring-mantho-gold/25'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-mantho-gold/50'
                        }`}
                      >
                        <span>{option.label}</span>
                        <input
                          checked={answers[index] === option.value}
                          className="h-4 w-4 accent-mantho-gold"
                          name={`question-${index}`}
                          onChange={() => updateAnswer(index, option.value)}
                          required
                          type="radio"
                          value={option.value}
                        />
                      </label>
                    ))}
                  </div>
                </fieldset>
              ))}
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-mantho-navy px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-mantho-blue disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              disabled={!isComplete}
            >
              Ver resultado do diagnóstico <ArrowRight size={19} />
            </button>

            {showResult && (
              <section id="resultado" className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-premium sm:p-8">
                <div className={`mb-6 h-2 rounded-full bg-gradient-to-r ${result.tone}`} />
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-mantho-gold">Resultado automático</p>
                <h3 className="mt-3 text-3xl font-bold text-mantho-navy">{result.title}</h3>
                <p className="mt-2 text-sm font-semibold text-slate-500">Pontuação total: {totalScore} de 30</p>
                <p className="mt-5 text-lg leading-8 text-slate-600">{result.message}</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-mantho-gold px-7 py-4 font-bold text-mantho-navy transition hover:-translate-y-0.5 hover:bg-[#d8b971] sm:w-auto"
                >
                  <MessageCircle size={20} /> Agendar reunião técnica
                </a>
              </section>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function TextField({ label, name, onChange, type = 'text', value, required = false }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-mantho-blue">{label}</span>
      <input
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-mantho-ink outline-none transition placeholder:text-slate-300 focus:border-mantho-gold focus:ring-4 focus:ring-mantho-gold/15"
        name={name}
        onChange={onChange}
        required={required}
        type={type}
        value={value}
      />
    </label>
  )
}

function Footer() {
  return (
    <footer className="bg-mantho-navy px-6 py-10 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold tracking-[0.2em]">MANTHO — Proteção, Método e Governança</p>
          <p className="mt-2 text-white/60">Segurança escolar não é sobre medo. É sobre preparo.</p>
        </div>
        <div className="flex gap-3 text-white/70">
          <Phone size={18} />
          <Mail size={18} />
          <MessageCircle size={18} />
        </div>
      </div>
    </footer>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
