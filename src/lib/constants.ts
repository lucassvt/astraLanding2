export const REGISTER_URL = "https://www.astrapet.com.ar/astra/register";

export const NAV_LINKS = [
  { label: "Qué es", href: "#que-es" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Ganancias", href: "#ganancias" },
  { label: "La App", href: "#app" },
  { label: "FAQ", href: "#faq" },
];

export const RANKS = [
  {
    name: "Aprendiz",
    level: 1,
    xp: "0",
    foodMarkup: "29%",
    accessoryMarkup: "43%",
    color: "#94a3b8",
    gradient: "from-slate-500 to-slate-400",
  },
  {
    name: "Iniciado",
    level: 2,
    xp: "500",
    foodMarkup: "33%",
    accessoryMarkup: "50%",
    color: "#22c55e",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    name: "Avanzado",
    level: 3,
    xp: "1500",
    foodMarkup: "38%",
    accessoryMarkup: "55%",
    color: "#3b82f6",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    name: "Experto",
    level: 4,
    xp: "2500",
    foodMarkup: "43%",
    accessoryMarkup: "60%",
    color: "#a855f7",
    gradient: "from-purple-500 to-violet-400",
  },
  {
    name: "Maestro",
    level: 5,
    xp: "4000",
    foodMarkup: "48%",
    accessoryMarkup: "67%",
    color: "#f59e0b",
    gradient: "from-amber-500 to-yellow-400",
  },
];

export const STEPS = [
  {
    number: "01",
    title: "Registrate gratis",
    description:
      "Creá tu cuenta en minutos. Sin inversión inicial obligatoria, sin contratos.",
    icon: "UserPlus",
  },
  {
    number: "02",
    title: "Elegí tus productos",
    description:
      "Accedé al catálogo con +134 productos para mascotas a precio mayorista.",
    icon: "ShoppingBag",
  },
  {
    number: "03",
    title: "Vendé y subí de nivel",
    description:
      "Cada venta te da XP. Subí de rango, desbloqueá mejores márgenes y recompensas.",
    icon: "TrendingUp",
  },
];

export const FEATURES = [
  {
    icon: "LayoutDashboard",
    title: "Dashboard en Tiempo Real",
    description:
      "Controlá tus ventas, ganancias y métricas clave desde un panel profesional.",
  },
  {
    icon: "Users",
    title: "CRM de Clientes",
    description:
      "Agenda de recompra inteligente. Te avisa cuándo contactar a cada cliente.",
  },
  {
    icon: "BookOpen",
    title: "Catálogo Inteligente",
    description:
      "Vista vendedor con tus márgenes y vista cliente para compartir sin precios de costo.",
  },
  {
    icon: "GraduationCap",
    title: "ASTRA Academy",
    description:
      "Módulos de capacitación en ventas, productos y estrategias. Ganá XP aprendiendo.",
  },
  {
    icon: "Trophy",
    title: "Ligas y Competencias",
    description:
      "Competí bimestralmente con ~50 resellers de tu nivel. Top 3 gana premios reales.",
  },
  {
    icon: "Gift",
    title: "Cajas de Recompensa",
    description:
      "Completá metas para ganar cajas con productos reales. De Común a Legendaria.",
  },
];

export const FAQS = [
  {
    question: "¿Necesito experiencia previa en ventas?",
    answer:
      "No. ASTRA Academy te capacita desde cero con módulos prácticos. Muchos resellers empezaron sin experiencia.",
  },
  {
    question: "¿Cuánto tengo que invertir para empezar?",
    answer:
      "Podés empezar desde $100.000 ARS con un pack básico. No hay cuotas mensuales ni costos ocultos.",
  },
  {
    question: "¿Es un esquema piramidal?",
    answer:
      "No. ASTRA es reventa directa de productos reales. Tus ingresos vienen 100% de vender productos, no de reclutar gente.",
  },
  {
    question: "¿Puedo hacerlo part-time?",
    answer:
      "Sí. Muchos resellers combinan ASTRA con su trabajo principal y generan entre $322K-$452K extra por mes.",
  },
  {
    question: "¿Cómo recibo los productos?",
    answer:
      "Tenemos 22 puntos de retiro en Tucumán. También hacemos envíos a domicilio.",
  },
  {
    question: "¿Qué pasa si no vendo todo?",
    answer:
      "No hay penalización. Los productos son tuyos y no tienen vencimiento cercano. Vendé a tu ritmo.",
  },
  {
    question: "¿Los márgenes son reales?",
    answer:
      "Sí. Van del 29% al 48% en alimentos y del 43% al 67% en accesorios, según tu rango.",
  },
  {
    question: "¿Hay soporte si tengo dudas?",
    answer:
      "Sí. Tenés soporte directo de lunes a viernes, comunidad de resellers y la Academia con contenido actualizado.",
  },
];

export const INCOME_DATA = {
  avgTicket: 32404,
  partTime: { min: 322000, max: 452000 },
  fullTime: { min: 645000, max: 905000 },
};
