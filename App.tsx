import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  Clock, 
  Calendar, 
  Infinity, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  ShieldCheck, 
  Zap, 
  BookOpen, 
  Target, 
  MinusCircle, 
  PlusCircle,
  Lightbulb
} from 'lucide-react';

// --- Constants ---
const CHECKOUT_URL = "https://pay.hotmart.com/D103955496L?checkoutMode=10";

// --- Reusable Components ---

const CTAButton: React.FC<{ 
  text: string; 
  fullWidth?: boolean;
  className?: string;
}> = ({ text, fullWidth, className }) => (
  <a 
    href={CHECKOUT_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block bg-[#FF6600] hover:bg-[#E65C00] text-white font-[800] py-5 px-8 rounded-lg shadow-xl transition-all transform hover:scale-105 active:scale-95 text-center uppercase tracking-wider ${fullWidth ? 'w-full' : ''} ${className}`}
  >
    {text}
  </a>
);

const SectionTitle: React.FC<{ children: React.ReactNode; dark?: boolean; center?: boolean; blue?: boolean }> = ({ children, dark, center, blue }) => (
  <h2 className={`text-3xl md:text-4xl font-[800] mb-8 ${dark ? 'text-white' : (blue ? 'text-[#003366]' : 'text-gray-900')} ${center ? 'text-center' : ''}`}>
    {children}
  </h2>
);

// --- Sections ---

const HeroSection = () => (
  <section className="bg-[#003366] text-white py-16 md:py-24 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="z-10 order-2 lg:order-1">
        <span className="text-yellow-400 font-bold tracking-widest text-sm uppercase mb-4 block">
          ENTRENAMIENTO CAT 2026
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[800] mb-6 leading-tight">
          Cómo Asegurar tu Ingreso a la SUNAT (y un sueldo de S/ 5,100) en tu Primer Intento...
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-[600] mb-8 leading-relaxed">
          Entrena con el Banco de Preguntas Filtrado (Aptitud + Conocimientos) diseñado exclusivamente para el CAT SUNAT. La alternativa inteligente a las academias costosas.
        </p>
        <CTAButton text="SÍ, QUIERO ASEGURAR MI VACANTE POR S/ 49" className="text-lg md:text-xl" />
      </div>
      <div className="relative order-1 lg:order-2">
        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-white/5">
          <img 
            src="https://res.cloudinary.com/dl2kmdtnb/image/upload/v1769436277/imagen_principal_zopycx.png" 
            alt="Entrenamiento CAT SUNAT 2026" 
            className="w-full h-auto transition-all duration-700"
          />
          <div className="absolute bottom-4 right-4 bg-[#FF6600] px-4 py-2 rounded-md font-bold text-white shadow-lg animate-pulse">
            S/ 5,100 Mensuales
          </div>
        </div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF6600]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="bg-white py-20 px-6">
    <div className="max-w-3xl mx-auto">
      <SectionTitle center>¡ATENCIÓN BACHILLERES!</SectionTitle>
      
      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          Has trabajado duro para obtener tu <strong className="text-black">Bachiller</strong>. Buscas <strong className="text-black">estabilidad laboral real</strong>, un sueldo digno y la tranquilidad de trabajar en una institución sólida como la <strong className="text-[#003366]">SUNAT</strong>.
        </p>
        
        <p className="font-[600] text-gray-800 border-l-4 border-yellow-500 pl-4 bg-yellow-50 py-3">
          Atención: Debido a la demanda operativa del Puerto de Chancay, se estima que la convocatoria inicie en Abril 2026. El reloj ya está corriendo y estar listo antes del anuncio oficial marcará la diferencia.
        </p>
        
        <div className="bg-[#F4F4F4] p-8 rounded-xl border-l-4 border-red-500 my-8">
          <p className="italic mb-4 font-semibold text-red-600 uppercase text-sm tracking-widest flex items-center gap-2">
            ⚠️ ¿POR QUÉ EL 80% DE TUS RIVALES YA PERDIÓ?
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 text-xl leading-none">📊</span>
              <span><strong>El Dato Real:</strong> Postulan 33,000 personas, pero el 80% va sin preparación específica. Son competencia "fantasma".</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 text-xl leading-none">⛔</span>
              <span><strong>El Error Común:</strong> La mayoría pierde puntos porque intentan adivinar (-0.25). Al entrenar con ejercicios tipo examen, tendrás la seguridad para marcar la respuesta correcta sin dudar.</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="text-red-500 mt-1 flex-shrink-0" size={20} />
              <span><strong>Preparación Incompleta:</strong> El examen mide dos frentes: Conocimientos y Aptitud. La mayoría domina la teoría técnica, pero falla estrepitosamente en la agilidad mental y espacial, perdiendo puntos valiosos.</span>
            </li>
          </ul>
        </div>

        <p className="font-[600] text-center text-xl italic text-gray-800">
          "Deja que ellos dependan de la suerte. Tú asegura tu vacante con estrategia."
        </p>
        
        <p className="text-2xl font-[800] text-[#003366] text-center mt-12">
          ¿La diferencia? El sistema correcto de preparación.
        </p>
      </div>
    </div>
  </section>
);

const SolutionSection = () => {
  const steps = [
    { title: "Acceso Inmediato", desc: "Plataforma disponible 24/7 sin esperas.", icon: <Zap /> },
    { title: "Solucionario Detallado", desc: "Entiende el paso a paso de cada solución", icon: <Lightbulb /> },
    { title: "Material Filtrado", desc: "Banco de 500+ preguntas filtradas.", icon: <BookOpen /> },
    { title: "Simulacro Real", desc: "Replica las condiciones del examen.", icon: <Target /> }
  ];

  return (
    <section className="bg-[#F4F4F4] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle center blue>Presentamos: El PACK DE ENTRENAMIENTO INTENSIVO CAT</SectionTitle>
        <p className="text-center text-gray-600 mb-12 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Es un entrenamiento intensivo con los ejercicios tipo y preguntas fijas que realmente vienen en el examen CAT SUNAT.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-[#003366]/5 text-[#003366] group-hover:bg-[#003366] group-hover:text-white rounded-full flex items-center justify-center mb-6 transition-colors">
                {React.cloneElement(step.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-xl font-[800] text-[#003366] mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StackSection = () => (
  <section className="bg-white py-20 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="relative order-2 lg:order-1">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-green-100 rounded-full -z-10"></div>
        <img 
          src="https://res.cloudinary.com/dl2kmdtnb/image/upload/v1769436617/Imagen_secundaria_xw6q2d.png" 
          alt="Contenido del Entrenamiento CAT" 
          className="rounded-3xl shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="order-1 lg:order-2">
        <SectionTitle>Lo que incluye (El Pack)</SectionTitle>
        <ul className="space-y-6">
          {[
            { t: "Dominio de Razonamiento Verbal", d: "Acelera tu lectura crítica. Entrena con textos densos, sinónimos y analogías diseñadas para que ganes velocidad y comprensión bajo presión." },
            { t: "Agilidad en Razonamiento Matemático", d: "Pierde el miedo a los números. Domina series, problemas lógicos y planteo de ecuaciones con métodos que no requieren calculadora." },
            { t: "Destreza en Razonamiento Espacial", d: "Entrena tu \"ojo clínico\". Ejercicios clave de rotación de sólidos y matrices visuales para superar la sección psicotécnica que filtra a la mayoría." },
            { t: "Banco \"Filtrado\" de 500+ Preguntas", d: "No pierdas tiempo con relleno. Practica exclusivamente con material 100% depurado de las convocatorias más recientes." },
            { t: "Solucionario Inteligente Paso a Paso", d: "No solo te damos la clave. Entiende la lógica exacta detrás de cada respuesta para aprender del error y no volver a fallar." }
          ].map((item, i) => (
            <li key={i} className="flex gap-4">
              <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={28} />
              <div>
                <h4 className="text-xl font-[800] text-[#003366]">{item.t}</h4>
                <p className="text-gray-600">{item.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const TransformationSection = () => (
  <section className="bg-bone py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <SectionTitle center>LA DIFERENCIA ENTRE INTENTAR E INGRESAR</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
          <h3 className="text-xl font-[800] text-red-700 mb-6 flex items-center gap-2">
            <MinusCircle size={24} /> EL POSTULANTE PROMEDIO
          </h3>
          <ul className="space-y-4 text-red-900/80">
            <li className="flex gap-2"><span>❌</span> <span>Estudias sin dirección, perdiendo tiempo.</span></li>
            <li className="flex gap-2"><span>❌</span> <span>Ansiedad por no saber qué esperar del examen.</span></li>
            <li className="flex gap-2"><span>❌</span> <span>Regala sus puntos (-0.25) por intentar adivinar.</span></li>
            <li className="flex gap-2"><span>❌</span> <span>Puntaje insuficiente y pérdida de oportunidad.</span></li>
          </ul>
        </div>
        <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
          <h3 className="text-xl font-[800] text-green-700 mb-6 flex items-center gap-2">
            <PlusCircle size={24} /> TÚ CON ESTRATEGIA
          </h3>
          <ul className="space-y-4 text-green-900/80">
            <li className="flex gap-2"><span>✅</span> <span>Seguridad total al conocer el formato real.</span></li>
            <li className="flex gap-2"><span>✅</span> <span>Ahorras miles de soles en academias.</span></li>
            <li className="flex gap-2"><span>✅</span> <span>Dominio total de las estrategias de tiempo.</span></li>
            <li className="flex gap-2"><span>✅</span> <span>Aprobación y sueldo de S/ 5,100 mensuales.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const BonusSection = () => (
  <section className="bg-[#003366] py-20 px-6">
    <div className="max-w-7xl mx-auto text-white">
      <SectionTitle dark center>Bonos Exclusivos (GRATIS HOY)</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          { 
            title: "Solucionario Detallado", 
            icon: <Calendar size={40} />, 
            val: "S/ 15", 
            desc: "Entiende el razonamiento lógico de cada respuesta paso a paso." 
          },
          { 
            title: "Estrategia de Tiempo", 
            icon: <Clock size={40} />, 
            val: "S/ 25", 
            desc: "Manual para gestionar tus minutos y no fallar." 
          },
          { 
            title: "Actualizaciones de por vida", 
            icon: <Infinity size={40} />, 
            val: "S/ 97", 
            desc: "Acceso permanente a nuevas preguntas y cambios." 
          }
        ].map((bonus, i) => (
          <div key={i} className="bg-white/5 border border-white/20 p-8 rounded-2xl flex flex-col items-center text-center relative group overflow-hidden">
            <div className="absolute top-4 right-4 text-xs font-bold uppercase tracking-widest text-yellow-400">VALOR {bonus.val}</div>
            <div className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform">{bonus.icon}</div>
            <h3 className="text-xl font-[800] mb-3">{bonus.title}</h3>
            <p className="text-gray-300">{bonus.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <CTAButton text="SÍ, QUIERO LOS BONOS y EL ENTRENAMIENTO" className="px-12" />
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section className="bg-white py-24 px-6 border-b border-gray-100">
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="bg-[#003366] text-white py-8 text-center">
          <h3 className="text-3xl font-[800] uppercase tracking-widest">Oferta de Lanzamiento</h3>
          <p className="text-yellow-400 font-semibold mt-2">Válido para la convocatoria 2026</p>
        </div>
        
        <div className="p-10 text-center">
          <div className="mb-8">
            <p className="text-gray-400 text-xl line-through font-semibold mb-2">Precio Regular: S/ 199</p>
            <div className="flex items-center justify-center gap-4">
              <span className="text-gray-900 text-2xl font-bold">Precio Hoy:</span>
              <span className="text-green-600 text-7xl md:text-8xl font-[800]">S/ 49</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#003366]" size={48} />
              <div className="text-left">
                <p className="font-[800] text-gray-900 leading-none">7 Días de Garantía</p>
                <p className="text-gray-500 text-sm">100% Reembolso</p>
              </div>
            </div>
            <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
            <div className="flex items-center gap-3">
              <Zap className="text-[#FF6600]" size={48} />
              <div className="text-left">
                <p className="font-[800] text-gray-900 leading-none">Acceso Inmediato</p>
                <p className="text-gray-500 text-sm">Empieza HOY</p>
              </div>
            </div>
          </div>
          
          <CTAButton text="SÍ, QUIERO MI VACANTE EN SUNAT POR S/ 49" fullWidth className="text-xl md:text-2xl py-6" />
          
          <p className="mt-8 text-gray-400 text-sm flex items-center justify-center gap-2">
            <ShieldCheck size={16} /> Pago 100% Seguro a través de Pasarelas Certificadas
          </p>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialSection = () => (
  <section className="bg-white py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionTitle center>Historias de Éxito Reales</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "María Fernanda Torres", role: "Abogada, 25 años", text: "Ingresé a SUNAT en mi primer intento gracias a este entrenamiento. El banco de preguntas es IDÉNTICO al examen real." },
          { name: "Carlos Mendoza", role: "Contador Público, 27 años", text: "Las preguntas están actualizadas 2026, los temas son exactamente los que evalúan. Recomiendo este entrenamiento al 100%." },
          { name: "Roberto Cahuana", role: "Ingeniero Industrial, 34 años", text: "La Guía de Estrategia es oro puro. Terminé el examen con 5 minutos de sobra para revisar mis respuestas." }
        ].map((t, i) => (
          <div key={i} className="bg-bone p-8 rounded-2xl shadow-sm border border-gray-100 italic">
            <div className="flex gap-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
            </div>
            <p className="text-gray-600 mb-6">"{t.text}"</p>
            <div className="font-[800] text-[#003366] text-sm uppercase">{t.name}</div>
            <div className="text-gray-400 text-xs">{t.role}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-[600] text-[#003366]">{q}</span>
        {isOpen ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

const FAQSection = () => (
  <section className="bg-bone py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionTitle center>Preguntas Frecuentes</SectionTitle>
      <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-10 shadow-sm">
        <FAQItem 
          q="¿El Entrenamiento CAT realmente me ayudará a aprobar?" 
          a="Es la herramienta más efectiva para maximizar tu puntaje. Nuestro banco replica el formato y nivel del examen real CAT SUNAT." 
        />
        <FAQItem 
          q="¿Está actualizado para la convocatoria 2026?" 
          a="Sí, todo el contenido está basado en el temario oficial 2026 y las últimas actualizaciones de la SUNAT." 
        />
        <FAQItem 
          q="¿Cuánto tiempo necesito para completar el entrenamiento?" 
          a="Está diseñado para 4-8 semanas dedicando 1-2 horas diarias, pero puedes ir a tu propio ritmo." 
        />
        <FAQItem 
          q="¿Cómo accedo al contenido después de comprar?" 
          a="Recibirás un correo inmediato con tus credenciales. Podrás entrar desde cualquier PC, Tablet o Smartphone." 
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-gray-500 py-12 px-6 text-center text-sm">
    <div className="max-w-7xl mx-auto">
      <div className="font-[800] text-white text-xl mb-4">ENTRENAMIENTO CAT PERÚ</div>
      <p className="max-w-2xl mx-auto mb-8 leading-relaxed">
        Este sitio web no es parte del sitio web de Facebook ni de Facebook Inc. Además, este sitio NO está respaldado por Facebook de ninguna manera. FACEBOOK es una marca comercial de FACEBOOK, Inc. SUNAT es una marca registrada de la Superintendencia Nacional de Aduanas y de Administración Tributaria del Perú.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400 font-semibold">
        <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
        <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
        <a href="#" className="hover:text-white transition-colors">Contacto</a>
      </div>
      <p>© 2026 Entrenamiento CAT Perú. Todos los derechos reservados.</p>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <StackSection />
      <TransformationSection />
      <BonusSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <Footer />

      {/* Sticky Mobile CTA */}
      <div className={`fixed bottom-0 left-0 w-full p-4 bg-white/95 backdrop-blur shadow-[0_-4px_10px_rgba(0,0,0,0.1)] md:hidden transition-transform duration-300 z-50 ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
        <CTAButton text="QUIERO MI VACANTE S/ 49" fullWidth className="py-4 text-base" />
      </div>
    </div>
  );
}
