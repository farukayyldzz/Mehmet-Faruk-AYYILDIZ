import { Experience, Project } from "./types";

export const TRANSLATIONS = {
  en: {
    nav_home: '// HOME',
    nav_about: '// ABOUT',
    nav_projects: '// PROJECTS',
    nav_timeline: '// TIMELINE',
    nav_contact: '// CONTACT',
    
    hero_role_1: 'FULL STACK ENGINEER',
    hero_role_2: 'QUANTUM ARCHITECT',
    hero_role_3: 'PROBLEM SOLVER',
    hero_scroll: 'SCROLL TO EXPLORE',
    hero_system: 'SYSTEM: ONLINE',

    about_title: '// DECRYPT IDENTITY',
    about_hover: 'HOVER TO REVEAL DATA',
    about_objective: '[CORE OBJECTIVE]',
    about_desc: "I don't just write code; I build digital ecosystems. My journey spans from architecting complex management systems for enterprises to designing intuitive educational platforms that shape the future of learning. I believe in software that is not only functional but also transformative.",
    about_philosophy_title: '[ENGINEERING PHILOSOPHY]',
    about_philosophy_desc: "Scalability is not an afterthought—it's the foundation. Whether it's an ERP system handling thousands of transactions or an LMS supporting remote education, I prioritize clean architecture, security, and user-centric design.",
    about_skills: '[SKILL MATRIX]',

    projects_title: 'LAB PROJECTS',
    projects_subtitle: 'EDUCATION & MANAGEMENT SYSTEMS',
    projects_status_classified: 'Classified',
    projects_status_public: 'Public',
    projects_status_wip: 'In Progress',

    exp_title: '// SYSTEM HISTORY',

    contact_title: '// SECURE CHANNEL',
    contact_init: '> Initialize communication sequence...',
    contact_email_prompt: 'Enter your signal address (email)...',
    contact_msg_prompt: 'Type message...',
    contact_placeholder_email: 'user@example.com',
    contact_placeholder_msg: 'Your message here...',
    contact_success: '> TRANSMISSION SUCCESSFUL.',
    contact_secure: 'SECURE CONNECTION ESTABLISHED',

    drawer_status: 'ONLINE',
    drawer_help: 'Hello. Direct connection established. How can I help you deploy your next idea?',
    drawer_chat: 'INITIATE CHAT',
    
    visitor_log_title: 'LIVE ACCESS LOG',
    visitor_th_ip: 'IP ADDRESS',
    visitor_th_loc: 'LOCATION',
    visitor_th_time: 'TIMESTAMP',
    visitor_th_action: 'ACTION',
  },
  tr: {
    nav_home: '// ANASAYFA',
    nav_about: '// HAKKIMDA',
    nav_projects: '// PROJELER',
    nav_timeline: '// ZAMAN ÇİZELGESİ',
    nav_contact: '// İLETİŞİM',
    
    hero_role_1: 'YAZILIM MÜHENDİSİ',
    hero_role_2: 'SİSTEM MİMARI',
    hero_role_3: 'PROBLEM ÇÖZÜCÜ',
    hero_scroll: 'KEŞFETMEK İÇİN KAYDIR',
    hero_system: 'SİSTEM: AKTİF',

    about_title: '// KİMLİK DOĞRULAMA',
    about_hover: 'VERİYİ ÇÖZMEK İÇİN ÜZERİNE GELİN',
    about_objective: '[TEMEL HEDEF]',
    about_desc: "Sadece kod yazmıyorum; dijital ekosistemler inşa ediyorum. Yolculuğum, büyük işletmeler için karmaşık yönetim sistemleri (ERP) tasarlamaktan, öğrenmenin geleceğini şekillendiren sezgisel eğitim platformları (LMS) geliştirmeye kadar uzanıyor. Yazılımın sadece işlevsel değil, aynı zamanda dönüştürücü olması gerektiğine inanıyorum.",
    about_philosophy_title: '[MÜHENDİSLİK FELSEFESİ]',
    about_philosophy_desc: "Ölçeklenebilirlik sonradan düşünülen bir şey değil, bir temeldir. İster binlerce işlemi yöneten bir Yönetim Paneli olsun, ister uzaktan eğitimi destekleyen bir Eğitim Projesi olsun; temiz mimariyi, güvenliği ve kullanıcı odaklı tasarımı her zaman ön planda tutarım.",
    about_skills: '[YETENEK MATRİSİ]',

    projects_title: 'LAB PROJELERİ',
    projects_subtitle: 'EĞİTİM VE YÖNETİM SİSTEMLERİ',
    projects_status_classified: 'Gizli',
    projects_status_public: 'Halka Açık',
    projects_status_wip: 'Geliştiriliyor',

    exp_title: '// SİSTEM GEÇMİŞİ',

    contact_title: '// GÜVENLİ KANAL',
    contact_init: '> İletişim sekansı başlatılıyor...',
    contact_email_prompt: 'Sinyal adresinizi girin (email)...',
    contact_msg_prompt: 'Mesajı yazın...',
    contact_placeholder_email: 'kullanici@ornek.com',
    contact_placeholder_msg: 'Mesajınız...',
    contact_success: '> İLETİM BAŞARILI.',
    contact_secure: 'GÜVENLİ BAĞLANTI KURULDU',

    drawer_status: 'ÇEVRİMİÇİ',
    drawer_help: 'Merhaba. Doğrudan bağlantı kuruldu. Bir sonraki fikrinizi hayata geçirmemiz için nasıl yardımcı olabilirim?',
    drawer_chat: 'SOHBETİ BAŞLAT',

    visitor_log_title: 'CANLI ERİŞİM KAYITLARI',
    visitor_th_ip: 'IP ADRESİ',
    visitor_th_loc: 'KONUM',
    visitor_th_time: 'ZAMAN',
    visitor_th_action: 'EYLEM',
  }
};

export const MENU_ITEMS = [
  { id: 'hero', key: 'nav_home' },
  { id: 'about', key: 'nav_about' },
  { id: 'projects', key: 'nav_projects' },
  { id: 'experience', key: 'nav_timeline' },
  { id: 'contact', key: 'nav_contact' },
];

export const GET_PROJECTS = (lang: 'en' | 'tr'): Project[] => [
  {
    id: '001',
    title: 'EDUTECH LMS CORE',
    description: lang === 'en' 
      ? 'A comprehensive Learning Management System serving 50k+ students. Features include live video capabilities, assignment tracking, and AI-driven performance analytics.'
      : '50 binden fazla öğrenciye hizmet veren kapsamlı Öğrenim Yönetim Sistemi (LMS). Canlı video dersleri, ödev takibi ve yapay zeka destekli performans analizleri içerir.',
    tech: ['Laravel', 'Vue.js', 'WebRTC'],
    status: lang === 'en' ? 'Public' : 'Halka Açık'
  },
  {
    id: '002',
    title: 'CORPORATE ERP SUITE',
    description: lang === 'en'
      ? 'Modular Enterprise Resource Planning system for manufacturing firms. Handles inventory, HR, payroll, and supply chain logistics in real-time.'
      : 'Üretim firmaları için modüler Kurumsal Kaynak Planlama (ERP) sistemi. Stok, İK, bordro ve tedarik zinciri lojistiğini gerçek zamanlı yönetir.',
    tech: ['.NET Core', 'React', 'SQL Server'],
    status: lang === 'en' ? 'Classified' : 'Gizli'
  },
  {
    id: '003',
    title: 'SMART CAMPUS APP',
    description: lang === 'en'
      ? 'Mobile-first application for university campus management. Digital ID cards, library integration, and cafeteria payment systems.'
      : 'Üniversite kampüs yönetimi için mobil öncelikli uygulama. Dijital kimlik kartları, kütüphane entegrasyonu ve kafeterya ödeme sistemleri.',
    tech: 'React Native, Node.js, NFC',
    status: lang === 'en' ? 'Public' : 'Halka Açık'
  } as any, // Cast for array tech
  {
    id: '004',
    title: 'HR SENTINEL AI',
    description: lang === 'en'
      ? 'Automated Human Resources platform aimed at recruitment optimization. Parses resumes automatically and schedules interviews.'
      : 'İşe alım optimizasyonu hedefleyen otomatik İnsan Kaynakları platformu. Özgeçmişleri otomatik analiz eder ve mülakatları planlar.',
    tech: ['Python', 'FastAPI', 'NLP'],
    status: lang === 'en' ? 'In Progress' : 'Geliştiriliyor'
  },
  {
    id: '005',
    title: 'NEURAL NET V1',
    description: lang === 'en' 
      ? 'Advanced machine learning algorithm for pattern recognition in chaotic data streams.'
      : 'Kaotik veri akışlarında örüntü tanıma için gelişmiş makine öğrenimi algoritması.',
    tech: ['Python', 'TensorFlow', 'React'],
    status: lang === 'en' ? 'Classified' : 'Gizli'
  },
  {
    id: '006',
    title: 'QUANTUM DASH',
    description: lang === 'en'
      ? 'High-frequency trading dashboard utilizing WebSockets and WebGL for real-time visualization.'
      : 'Gerçek zamanlı görselleştirme için WebSockets ve WebGL kullanan yüksek frekanslı ticaret paneli.',
    tech: ['TypeScript', 'WebGL', 'Node.js'],
    status: lang === 'en' ? 'Public' : 'Halka Açık'
  },
  {
    id: '007',
    title: 'VIRTUAL CLASSROOM',
    description: lang === 'en'
      ? 'Interactive whiteboard and video conferencing tool designed specifically for K-12 remote education needs.'
      : 'K-12 uzaktan eğitim ihtiyaçları için özel olarak tasarlanmış interaktif beyaz tahta ve video konferans aracı.',
    tech: ['WebSockets', 'Canvas API', 'Redis'],
    status: lang === 'en' ? 'Public' : 'Halka Açık'
  },
  {
    id: '008',
    title: 'TASKFLOW PRO',
    description: lang === 'en'
      ? 'Project management tool for agile teams. Features kanban boards, sprint analytics, and Git integration.'
      : 'Çevik (Agile) ekipler için proje yönetim aracı. Kanban panoları, sprint analizleri ve Git entegrasyonu içerir.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma'],
    status: lang === 'en' ? 'In Progress' : 'Geliştiriliyor'
  },
  {
    id: '009',
    title: 'CYBER GUARD',
    description: lang === 'en'
      ? 'Automated penetration testing toolkit with automated reporting and vulnerability scanning.'
      : 'Otomatik raporlama ve zafiyet taraması içeren sızma testi aracı.',
    tech: ['Go', 'Docker', 'Shell'],
    status: lang === 'en' ? 'In Progress' : 'Geliştiriliyor'
  },
  {
    id: '010',
    title: 'INVENTORY AI',
    description: lang === 'en'
      ? 'Smart stock management system that predicts shortages using historical sales data.'
      : 'Geçmiş satış verilerini kullanarak stok yetersizliklerini tahmin eden akıllı stok yönetim sistemi.',
    tech: ['Python', 'Pandas', 'Django'],
    status: lang === 'en' ? 'Classified' : 'Gizli'
  },
  {
    id: '011',
    title: 'EXAM SECURE',
    description: lang === 'en'
      ? 'Browser lockdown browser and proctoring AI to prevent cheating during online exams.'
      : 'Çevrimiçi sınavlarda kopyayı önlemek için tarayıcı kilitleme ve yapay zeka gözetmenlik sistemi.',
    tech: ['C++', 'Electron', 'OpenCV'],
    status: lang === 'en' ? 'Public' : 'Halka Açık'
  },
  {
    id: '012',
    title: 'CRM MICROSERVICE',
    description: lang === 'en'
      ? 'Scalable Customer Relationship Management backend built with microservices architecture.'
      : 'Mikroservis mimarisiyle inşa edilmiş ölçeklenebilir Müşteri İlişkileri Yönetimi (CRM) altyapısı.',
    tech: ['Java Spring', 'Kafka', 'Kubernetes'],
    status: lang === 'en' ? 'In Progress' : 'Geliştiriliyor'
  }
];

export const GET_EXPERIENCES = (lang: 'en' | 'tr'): Experience[] => [
  {
    id: 'exp-1',
    role: lang === 'en' ? 'Senior Systems Architect' : 'Kıdemli Sistem Mimarı',
    company: 'Global Tech Corp',
    period: '2022 - Present',
    description: lang === 'en' 
      ? 'Architecting scalable microservices and leading the quantum computing research division.'
      : 'Ölçeklenebilir mikroservis mimarileri tasarlıyor ve kuantum hesaplama araştırma bölümüne liderlik ediyorum.'
  },
  {
    id: 'exp-2',
    role: lang === 'en' ? 'Full Stack Engineer' : 'Full Stack Mühendis',
    company: 'Nebula Startups',
    period: '2019 - 2022',
    description: lang === 'en'
      ? 'Developed core infrastructure for high-traffic fintech applications.'
      : 'Yüksek trafikli fintech uygulamaları için temel altyapı geliştirdim.'
  },
  {
    id: 'exp-3',
    role: lang === 'en' ? 'Security Researcher' : 'Güvenlik Araştırmacısı',
    company: 'Freelance',
    period: '2017 - 2019',
    description: lang === 'en'
      ? 'Conducted security audits and developed custom exploit prevention tools.'
      : 'Güvenlik denetimleri gerçekleştirdim ve özel exploit önleme araçları geliştirdim.'
  }
];