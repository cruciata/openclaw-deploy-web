import { useState, type ReactNode, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Cpu, 
  Globe, 
  Copy, 
  Check, 
  ExternalLink, 
  Shield, 
  Zap,
  Github,
  Info,
  ChevronRight,
  AlertCircle,
  Monitor,
  Server,
  Code,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ChevronDown,
  User,
  GraduationCap,
  Briefcase,
  Lock,
  Play,
  Download,
  CheckCircle2,
  XCircle,
  Send
} from 'lucide-react';

// --- Types ---
interface Service {
  title: string;
  description: string;
  icon: ReactNode;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface Step {
  title: string;
  description: string;
}

interface TargetUser {
  title: string;
  scene: string;
  usage: string;
  icon: ReactNode;
}

interface SuccessStory {
  title: string;
  content: string;
  author: string;
  role: string;
}

interface PricingPackage {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

// --- Data ---
const SUCCESS_STORIES: SuccessStory[] = [
  { title: '办公效率提升 300%', content: '以前写周报要半小时，现在用本地部署的 DeepSeek 模型，5 分钟搞定，关键是不用担心公司数据泄露。', author: '张先生', role: '某科技公司项目经理' },
  { title: '老电脑焕发第二春', content: '一直想玩《虎胆龙威》，但新系统总报错。找了哈尔滨 AI 团队，10 分钟就帮我装好了 OpenClaw，高清流畅！', author: '李同学', role: '怀旧游戏爱好者' },
  { title: '私人 AI 导师', content: '作为大一新生，很多编程问题不敢问老师。本地装了 Llama 3 后，它就是我的 24 小时导师，进步飞快。', author: '王同学', role: '哈工大学生' },
];

const PRICING_PACKAGES: PricingPackage[] = [
  { name: '远程协助版', price: '¥49', features: ['远程一键安装', '环境基础优化', '模型下载指导', '7天售后支持'] },
  { name: '本地上门版', price: '¥129', features: ['哈尔滨市区上门', '硬件深度检测', '自带离线模型包', '手把手教学', '30天售后保障'], isPopular: true },
  { name: '企业定制版', price: '¥299+', features: ['多机位批量部署', '微信/飞书集成', '局域网共享配置', '长期技术顾问'] },
];

const MapSection = () => {
  const servicePoints = [
    { top: '45%', left: '48%', label: '市中心总部' },
    { top: '42%', left: '42%', label: '南岗服务点' },
    { top: '38%', left: '55%', label: '道里服务点' },
    { top: '55%', left: '52%', label: '香坊服务点' },
    { top: '30%', left: '45%', label: '松北服务点' },
  ];

  return (
    <div className="w-full aspect-square rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-2xl relative bg-zinc-950 group">
      {/* 静态地图图片 - 这里使用了您提供的地图风格的占位图 */}
      <img 
        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
        alt="哈尔滨地图" 
        className="w-full h-full object-cover opacity-40 grayscale group-hover:opacity-60 group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
        referrerPolicy="no-referrer"
      />
      
      {/* 扫描线效果 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent h-20 w-full -translate-y-full animate-[scan_4s_linear_infinite] pointer-events-none"></div>

      {/* 叠加标注点 */}
      <div className="absolute inset-0">
        {servicePoints.map((point, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.15, type: 'spring', stiffness: 260, damping: 20 }}
            className="absolute"
            style={{ top: point.top, left: point.left }}
          >
            <div className="relative flex items-center justify-center group/marker">
              {/* 扩散光圈 */}
              <div className="absolute w-12 h-12 bg-emerald-500/20 rounded-full animate-ping opacity-75"></div>
              <div className="absolute w-8 h-8 bg-emerald-500/10 rounded-full animate-[ping_3s_linear_infinite] opacity-50"></div>
              
              {/* 核心点 */}
              <div className="relative w-5 h-5 bg-emerald-500 rounded-full border-4 border-zinc-950 shadow-[0_0_20px_rgba(16,185,129,0.8)] cursor-pointer hover:scale-125 transition-transform"></div>
              
              {/* 标签 */}
              <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-4 py-2 bg-zinc-900/90 backdrop-blur-md border border-emerald-500/30 rounded-xl text-[11px] font-bold text-emerald-400 whitespace-nowrap opacity-0 group-hover/marker:opacity-100 transition-all translate-y-2 group-hover/marker:translate-y-0 shadow-2xl pointer-events-none">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  {point.label}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 底部信息栏 */}
      <div className="absolute bottom-6 left-6 right-6 p-5 glass-panel rounded-2xl flex items-center justify-between border-emerald-500/10">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-emerald-500">哈尔滨全城覆盖</span>
            <span className="text-[10px] text-zinc-500">30分钟极速响应 · 本地上门</span>
          </div>
        </div>
        <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] text-emerald-500 font-mono uppercase tracking-tighter">
          Service Area Active
        </div>
      </div>
    </div>
  );
};
const SERVICES: Service[] = [
  { title: 'Ollama 本地部署', description: '一键安装 Ollama 引擎，支持 Llama 3, Qwen 等主流大模型。', icon: <Cpu className="w-6 h-6" /> },
  { title: 'OpenClaw 智能配置', description: '完美还原经典游戏引擎，适配现代系统，解决各类运行报错。', icon: <Globe className="w-6 h-6" /> },
  { title: '微信/飞书接入', description: '将 AI 能力集成到您的常用办公软件，实现自动化智能办公。', icon: <MessageCircle className="w-6 h-6" /> },
  { title: '后续维护支持', description: '提供模型更新、故障排查、性能优化等全方位的售后保障。', icon: <Shield className="w-6 h-6" /> },
];

const INSTALL_DATA = {
  Ollama: {
    title: 'Ollama AI 引擎',
    description: '本地运行 Llama 3, Qwen, DeepSeek 等主流大模型的基础环境。',
    commands: {
      Windows: 'powershell -Command "iwr -useb https://ollama.com/install.ps1 | iex"',
      macOS: 'curl -fsSL https://ollama.com/install.sh | sh',
      Linux: 'curl -fsSL https://ollama.com/install.sh | sh',
    },
    checklist: [
      { label: '内存', value: '建议 16GB+' },
      { label: '显卡', value: 'NVIDIA 4GB+ 显存' },
      { label: '磁盘', value: '剩余 20GB+' },
      { label: '系统', value: 'Win10/11 64位' },
    ]
  },
  OpenClaw: {
    title: 'OpenClaw 游戏引擎',
    description: '1997年经典游戏《虎胆龙威》的现代开源引擎，适配高清显示器。',
    commands: {
      Windows: 'git clone https://github.com/pmanukyan/OpenClaw.git && cd OpenClaw',
      macOS: 'brew install openclaw',
      Linux: 'sudo apt install openclaw',
    },
    checklist: [
      { label: '内存', value: '2GB 即可' },
      { label: '显卡', value: '集成显卡即可' },
      { label: '磁盘', value: '剩余 500MB+' },
      { label: '数据', value: '需原版 CLAW.pdx' },
    ]
  }
};

const PROCESS_STEPS: Step[] = [
  { title: '预约咨询', description: '通过微信或电话联系我们，说明您的需求。' },
  { title: '环境检测', description: '远程或上门检测您的电脑配置，确定安装方案。' },
  { title: '一键安装', description: '专业技术人员操作，确保安装过程零报错。' },
  { title: '现场测试', description: '安装完成后进行模型运行测试，确保流畅度。' },
  { title: '使用教学', description: '手把手教您如何切换模型、使用 API 及日常维护。' },
  { title: '售后支持', description: '加入专属群组，随时解答后续使用中的疑问。' },
];

const TARGET_USERS: TargetUser[] = [
  { title: '办公族', scene: '需要 AI 辅助写周报、润色邮件、整理会议纪要。', usage: '本地部署 AI 助手，极大提升办公效率。', icon: <Briefcase className="w-6 h-6" /> },
  { title: '学生党', scene: '学习编程、查阅文献、辅助论文写作。', usage: '低成本拥有私人 AI 导师，随时随地答疑。', icon: <GraduationCap className="w-6 h-6" /> },
  { title: '开发者', scene: '需要本地运行模型进行 API 开发或微调测试。', usage: '零配置搭建开发环境，支持多种主流框架。', icon: <Code className="w-6 h-6" /> },
  { title: '隐私敏感用户', scene: '不希望数据上传云端，追求极致的数据安全性。', usage: '100% 本地运行，断网也能用，数据不出户。', icon: <Lock className="w-6 h-6" /> },
];

const FAQS: FAQItem[] = [
  { question: 'OpenClaw 是什么？', answer: 'OpenClaw 是 1997 年经典游戏《虎胆龙威》（Captain Claw）的现代开源引擎实现，让您在最新的 Windows/macOS/Linux 系统上也能完美运行这款经典游戏。' },
  { question: '我的电脑配置够吗？', answer: 'Ollama 运行基础模型通常需要 8GB 内存。如果需要流畅运行 7B 以上模型，建议 16GB 内存及 NVIDIA 显卡（4GB 显存以上）。我们会为您免费检测。' },
  { question: '安装需要多长时间？', answer: '在网络环境良好的情况下，通常 15-30 分钟即可完成全部配置和基础模型下载。' },
  { question: '后续更新怎么办？', answer: '我们会提供详细的更新指南，对于我们的老客户，重大版本更新我们提供免费的远程协助支持。' },
  { question: '数据安全吗？', answer: '绝对安全。我们的服务核心就是“本地化”，所有模型运行和数据处理都在您的电脑上完成，不经过任何第三方服务器。' },
];

// --- Components ---

const AccordionItem = ({ item }: { item: FAQItem, key?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-emerald-400 transition-colors"
      >
        <span className="font-bold">{item.question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-400 text-sm leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  
  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-500" />
        </div>
        <h4 className="text-2xl font-bold mb-2">预约成功</h4>
        <p className="text-zinc-500 mb-8">我们的技术人员将在 1 小时内与您联系。</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-emerald-500 font-bold hover:underline"
        >
          再次提交
        </button>
      </motion.div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-zinc-500 uppercase">您的姓名</label>
          <input required type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus:border-emerald-500 outline-none transition-all" placeholder="请输入姓名" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-zinc-500 uppercase">联系电话</label>
          <input required type="tel" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus:border-emerald-500 outline-none transition-all" placeholder="请输入电话" />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold text-zinc-500 uppercase">需求简述</label>
        <textarea rows={4} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus:border-emerald-500 outline-none transition-all resize-none" placeholder="请简要描述您的安装需求或遇到的问题"></textarea>
      </div>
      <button type="submit" className="w-full py-5 bg-emerald-500 text-zinc-950 font-bold rounded-2xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-3">
        <Send className="w-5 h-5" />
        提交预约信息
      </button>
    </form>
  );
};

const HardwareChecker = () => {
  const [ram, setRam] = useState(8);
  const [hasGpu, setHasGpu] = useState(false);
  
  const getRecommendation = () => {
    if (ram < 8) return { text: '配置较低，建议升级内存至 16GB 以流畅运行。', color: 'text-red-400' };
    if (ram >= 16 && hasGpu) return { text: '完美配置！您可以流畅运行大多数 7B - 14B 模型。', color: 'text-emerald-400' };
    if (ram >= 16) return { text: '配置良好，建议添加独立显卡以获得更快的响应速度。', color: 'text-yellow-400' };
    return { text: '可以运行基础模型，但复杂任务可能会有延迟。', color: 'text-zinc-400' };
  };

  const recommendation = getRecommendation();

  return (
    <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
      <h4 className="text-sm font-bold mb-6 flex items-center gap-2">
        <Monitor className="w-4 h-4 text-emerald-500" /> 硬件兼容性快速检测
      </h4>
      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-xs mb-2">
            <span className="text-zinc-500">系统内存 (RAM)</span>
            <span className="text-emerald-500 font-bold">{ram} GB</span>
          </div>
          <input 
            type="range" 
            min="4" 
            max="64" 
            step="4" 
            value={ram} 
            onChange={(e) => setRam(parseInt(e.target.value))}
            className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-zinc-500">是否拥有独立显卡 (NVIDIA)</span>
          <button 
            onClick={() => setHasGpu(!hasGpu)}
            className={`w-12 h-6 rounded-full transition-all relative ${hasGpu ? 'bg-emerald-500' : 'bg-zinc-800'}`}
          >
            <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${hasGpu ? 'left-7' : 'left-1'}`}></div>
          </button>
        </div>
        <div className={`p-4 rounded-xl bg-black/40 text-xs leading-relaxed border-l-2 ${recommendation.color.replace('text', 'border')}`}>
          <span className={recommendation.color}>{recommendation.text}</span>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTool, setActiveTool] = useState<keyof typeof INSTALL_DATA>('Ollama');
  const [activePlatform, setActivePlatform] = useState<'Windows' | 'macOS' | 'Linux'>('Windows');
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    const command = INSTALL_DATA[activeTool].commands[activePlatform];
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen tech-grid font-sans text-zinc-100 selection:bg-emerald-500/30">
      {/* 1. 导航栏 */}
      <header className="border-b border-zinc-800 bg-zinc-950/80 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              <Zap className="w-6 h-6 text-zinc-950 fill-current" />
            </div>
            <div>
              <span className="font-mono font-bold text-xl block leading-none glow-text">HARBIN_AI</span>
              <span className="text-[10px] text-zinc-500 font-mono tracking-widest">哈尔滨本地服务</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10 text-sm font-bold tracking-widest">
            <a href="#home" className="hover:text-emerald-400 transition-colors">首页</a>
            <a href="#services" className="hover:text-emerald-400 transition-colors">服务介绍</a>
            <a href="#install" className="hover:text-emerald-400 transition-colors">安装教程</a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors">服务价格</a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors">常见问题</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">联系我们</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:123456789" className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 hover:border-emerald-500 transition-all text-sm font-bold">
              <Phone className="w-4 h-4 text-emerald-500" />
              123-4567-890
            </a>
            <button className="p-2 rounded-full bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all">
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* 2. 首屏 Banner */}
        <section id="home" className="relative pt-32 pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold mb-8">
                <MapPin className="w-3 h-3" /> 哈尔滨本地专业团队
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-none">
                哈尔滨本地 <br />
                <span className="text-emerald-500 italic">AI 一键安装</span>
              </h1>
              <p className="text-zinc-400 text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-light">
                Ollama + OpenClaw 零配置部署。告别复杂的命令行，
                让 AI 在您的电脑上即刻运行。
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-16">
                {['本地上门', '远程支持', '永久免费', '隐私安全'].map(tag => (
                  <div key={tag} className="flex items-center gap-2 text-sm font-bold text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    {tag}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="#pricing" className="px-10 py-5 bg-emerald-500 text-zinc-950 font-bold rounded-2xl hover:bg-emerald-400 transition-all shadow-[0_0_40px_rgba(16,185,129,0.4)] flex items-center gap-3 text-lg">
                  立即预约服务
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a href="#contact" className="px-10 py-5 glass-panel rounded-2xl font-bold hover:bg-zinc-800 transition-all flex items-center gap-3 text-lg">
                  在线咨询技术
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* 背景装饰 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] -z-10"></div>
        </section>

        {/* 3. 服务介绍区 */}
        <section id="services" className="py-24 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">专业服务内容</h2>
              <p className="text-zinc-500">全方位的本地部署解决方案，满足您的不同需求</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-8 rounded-[2rem] hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. 一键安装展示区 */}
        <section id="install" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass-panel rounded-[3rem] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12 lg:p-16">
                  <h2 className="text-4xl font-bold mb-6 tracking-tight">自助安装教程</h2>
                  <p className="text-zinc-400 mb-10">选择您需要安装的工具和对应的操作系统。如有困难，请随时联系我们。</p>
                  
                  {/* 工具切换 */}
                  <div className="flex gap-4 mb-8">
                    {(Object.keys(INSTALL_DATA) as Array<keyof typeof INSTALL_DATA>).map(tool => (
                      <button
                        key={tool}
                        onClick={() => setActiveTool(tool)}
                        className={`flex-1 py-4 rounded-2xl border-2 transition-all font-bold ${activeTool === tool ? 'border-emerald-500 bg-emerald-500/10 text-emerald-500' : 'border-zinc-800 text-zinc-500 hover:border-zinc-700'}`}
                      >
                        {INSTALL_DATA[tool].title}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-2 mb-6 bg-zinc-900 p-1.5 rounded-2xl w-fit border border-zinc-800">
                    {['Windows', 'macOS', 'Linux'].map(platform => (
                      <button
                        key={platform}
                        onClick={() => setActivePlatform(platform as any)}
                        className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activePlatform === platform ? 'bg-emerald-500 text-zinc-950 shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
                      >
                        {platform}
                      </button>
                    ))}
                  </div>

                  <div className="relative group mb-8">
                    <div className="bg-black/60 border border-zinc-800 rounded-2xl p-6 font-mono text-sm">
                      <code className="text-emerald-400 block overflow-x-auto whitespace-nowrap pb-2">
                        {INSTALL_DATA[activeTool].commands[activePlatform]}
                      </code>
                    </div>
                    <button 
                      onClick={copyCommand}
                      className="absolute top-4 right-4 p-2.5 rounded-xl bg-zinc-800 hover:bg-emerald-500 hover:text-zinc-950 text-zinc-400 transition-all shadow-xl"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-10">
                    <button className="px-8 py-4 bg-zinc-100 text-zinc-950 font-bold rounded-2xl hover:bg-white transition-all flex items-center gap-3">
                      <Download className="w-5 h-5" />
                      下载一键安装工具 (.exe)
                    </button>
                  </div>

                  <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                    <h4 className="text-sm font-bold text-emerald-500 mb-4 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" /> 安装前硬件自检
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {INSTALL_DATA[activeTool].checklist.map(item => (
                        <li key={item.label} className="flex items-center justify-between text-xs p-2 rounded-lg bg-black/20">
                          <span className="text-zinc-500">{item.label}</span>
                          <span className="text-zinc-300 font-mono">{item.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border-l border-zinc-800 p-12 lg:p-16 flex flex-col justify-center gap-8">
                  <HardwareChecker />
                  
                  <div className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer border border-zinc-800">
                    <img 
                      src="https://picsum.photos/seed/setup/800/450" 
                      alt="安装演示" 
                      className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-emerald-500 fill-current" />
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-zinc-800 text-xs font-bold">
                        点击播放：3分钟快速安装演示视频
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. 为什么选择线下 */}
        <section className="py-24 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">为什么选择专业服务？</h2>
              <p className="text-zinc-500">避开安装陷阱，省时省心省力</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              <div className="glass-panel p-10 rounded-[2.5rem] border-red-500/10">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-red-400">
                  <XCircle className="w-6 h-6" /> 网上自装的坑
                </h3>
                <ul className="space-y-6">
                  {[
                    '命令行报错无法解决，反复重试浪费时间',
                    '模型下载速度极慢，甚至无法连接服务器',
                    '显卡驱动不匹配，导致 AI 运行卡顿',
                    '误删系统文件，导致电脑系统崩溃',
                    '缺乏后续指导，装完不知如何使用'
                  ].map(item => (
                    <li key={item} className="flex items-start gap-4 text-zinc-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-panel p-10 rounded-[2.5rem] border-emerald-500/20 bg-emerald-500/[0.02]">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" /> 线下服务的优势
                </h3>
                <ul className="space-y-6">
                  {[
                    '专业技术人员操作，确保 100% 成功率',
                    '自带高速离线模型包，无需等待漫长下载',
                    '针对您的硬件进行深度优化，发挥极致性能',
                    '面对面教学，包教包会，快速上手',
                    '永久售后群支持，解决一切后顾之忧'
                  ].map(item => (
                    <li key={item} className="flex items-start gap-4 text-zinc-200">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. 服务流程 */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 text-center">标准化服务流程</h2>
            <div className="relative">
              {/* 连线 */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-800 -translate-y-1/2 hidden lg:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                {PROCESS_STEPS.map((step, i) => (
                  <div key={step.title} className="relative z-10 text-center group">
                    <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl font-bold text-emerald-500 mx-auto mb-6 group-hover:border-emerald-500 transition-all">
                      {i + 1}
                    </div>
                    <h4 className="font-bold mb-3">{step.title}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. 适用人群 */}
        <section className="py-24 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 text-center">谁需要我们的服务？</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TARGET_USERS.map(user => (
                <div key={user.title} className="glass-panel p-8 rounded-3xl hover:bg-zinc-800/50 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-emerald-500 mb-6">
                    {user.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{user.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] font-bold text-zinc-600 uppercase block mb-1">典型场景</span>
                      <p className="text-xs text-zinc-400">{user.scene}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-zinc-600 uppercase block mb-1">典型用途</span>
                      <p className="text-xs text-emerald-500/80">{user.usage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7.5 成功案例 */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 text-center">客户成功案例</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SUCCESS_STORIES.map((story, i) => (
                <motion.div
                  key={story.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-8 rounded-[2.5rem] relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <CheckCircle2 className="w-24 h-24 text-emerald-500" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-emerald-400">{story.title}</h4>
                  <p className="text-zinc-400 text-sm italic mb-8 leading-relaxed">“{story.content}”</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                      <User className="w-5 h-5 text-zinc-500" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">{story.author}</div>
                      <div className="text-[10px] text-zinc-600 uppercase tracking-wider">{story.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7.6 服务套餐 */}
        <section id="pricing" className="py-24 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">服务收费标准</h2>
              <p className="text-zinc-500">软件本身永久免费，我们仅收取专业的技术服务费</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PRICING_PACKAGES.map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass-panel p-10 rounded-[3rem] relative flex flex-col ${pkg.isPopular ? 'border-emerald-500/50 bg-emerald-500/[0.03]' : ''}`}
                >
                  {pkg.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-zinc-950 text-[10px] font-bold rounded-full uppercase tracking-widest">
                      最受欢迎
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-emerald-500 mb-8">{pkg.price}</div>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {pkg.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-zinc-400">
                        <Check className="w-4 h-4 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={`w-full py-4 rounded-2xl font-bold transition-all text-center block ${pkg.isPopular ? 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400' : 'border border-zinc-800 hover:border-emerald-500'}`}>
                    立即选择此套餐
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. 常见问题 */}
        <section id="faq" className="py-24">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">常见问题解答</h2>
            <div className="glass-panel rounded-[2.5rem] p-8 md:p-12">
              {FAQS.map(faq => (
                <AccordionItem key={faq.question} item={faq} />
              ))}
            </div>
          </div>
        </section>

        {/* 9. 服务区域 */}
        <section className="py-24 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">服务覆盖范围</h2>
                <p className="text-zinc-400 mb-10">我们立足哈尔滨，为您提供最及时的本地化技术支持。全城上门，响应迅速。</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
                  {['南岗区', '道里区', '道外区', '香坊区', '平房区', '松北区'].map(area => (
                    <div key={area} className="px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-sm font-bold flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-500" />
                      {area}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 p-6 glass-panel rounded-2xl border-emerald-500/20">
                  <Clock className="w-8 h-8 text-emerald-500" />
                  <div>
                    <h4 className="font-bold">服务时间</h4>
                    <p className="text-sm text-zinc-500">周一至周日 09:00 - 21:00 (节假日不休)</p>
                  </div>
                </div>
              </div>

              <MapSection />
            </div>
          </div>
        </section>

        {/* 10. 联系我们 */}
        <section id="contact" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 space-y-8">
                <h2 className="text-4xl font-bold mb-4">联系我们</h2>
                <p className="text-zinc-500">欢迎通过以下方式咨询，我们将尽快为您安排技术人员。</p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-6 glass-panel rounded-2xl">
                    <Phone className="w-6 h-6 text-emerald-500" />
                    <div>
                      <span className="text-[10px] font-bold text-zinc-600 block">联系电话</span>
                      <span className="font-bold">123-4567-890</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-6 glass-panel rounded-2xl">
                    <MessageCircle className="w-6 h-6 text-emerald-500" />
                    <div>
                      <span className="text-[10px] font-bold text-zinc-600 block">微信咨询</span>
                      <span className="font-bold">HarbinAI_Support</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-6 glass-panel rounded-2xl">
                    <MapPin className="w-6 h-6 text-emerald-500" />
                    <div>
                      <span className="text-[10px] font-bold text-zinc-600 block">办公地址</span>
                      <span className="font-bold">哈尔滨市南岗区某某科技大厦</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="glass-panel p-10 rounded-[3rem]">
                  <h3 className="text-2xl font-bold mb-8">在线预约</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 11. 页脚 */}
      <footer className="border-t border-zinc-800 py-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-emerald-500" />
              <span className="font-bold text-xl tracking-tight">HARBIN_AI</span>
            </div>
            
            <div className="flex gap-8 text-sm font-bold text-zinc-500">
              <a href="#" className="hover:text-emerald-400 transition-colors">隐私政策</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">服务条款</a>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center hover:text-emerald-400 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center hover:text-emerald-400 transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-12 text-center text-[10px] font-mono text-zinc-600">
            &copy; 2026 哈尔滨本地 AI 一键安装服务团队. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      {/* 悬浮联系按钮 */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 rounded-full bg-zinc-900 text-emerald-500 flex items-center justify-center shadow-2xl border border-zinc-800 hover:border-emerald-500 transition-all"
        >
          <ChevronDown className="w-6 h-6 rotate-180" />
        </button>
        <a 
          href="#contact"
          className="w-14 h-14 rounded-full bg-emerald-500 text-zinc-950 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:bg-emerald-400 transition-all animate-bounce"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
