import { useRef, useState, type ReactNode } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
  ArrowRight, ArrowUpRight, BookOpen, Bot, BriefcaseBusiness, CalendarDays, Check, ChevronDown,
  ChevronRight, CircleHelp, Clock3, FileText, FolderOpen, Globe2, GraduationCap, Landmark,
  Menu, MessageSquare, Paperclip, Plus, Search, Send, ShieldAlert, Sparkles, Upload, UserRound,
  Users, X, Zap,
} from 'lucide-react'
import { documents, lawyers, materialRequests, matterFacts, services, type MatterMode } from './data'

export const iconMap: Record<string, typeof BriefcaseBusiness> = { BriefcaseBusiness, GraduationCap, Landmark, ShieldAlert, ArrowRightLeft: ArrowRight, Users }

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return <Link to="/" className="brand-mark"><span className="brand-orb"><Globe2 size={compact ? 16 : 19} /></span>{!compact && <span><strong>SOVEREIGN NEXUS</strong><small>律界智能 · 澳洲法律服务</small></span>}</Link>
}

export function LanguageControl({ onMessage }: { onMessage: (message: string) => void }) {
  return <button className="language-control" onClick={() => onMessage('英文版将在正式产品中提供 · 当前为中文原型')}><span>中文</span><i>|</i><span className="muted">EN</span></button>
}

export function PublicHeader({ onMessage }: { onMessage: (message: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [['首页', '/'], ['服务体系', '/services'], ['法律情报', '/intelligence'], ['AI 工作空间', '/workspace/ai']]
  return <header className="public-header"><div className="header-inner"><BrandMark /><nav className={menuOpen ? 'public-nav open' : 'public-nav'}>{links.map(([label, to]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setMenuOpen(false)}>{label}</NavLink>)}</nav><div className="header-actions"><LanguageControl onMessage={onMessage} /><Link to="/workspace/ai" className="button button-dark button-small"><Sparkles size={15} />开始 AI 咨询</Link><button className="icon-button mobile-menu" onClick={() => setMenuOpen(v => !v)} aria-label="打开菜单">{menuOpen ? <X size={19} /> : <Menu size={19} />}</button></div></div></header>
}

export function PublicFooter() {
  return <footer className="public-footer"><div className="footer-grid"><div><BrandMark /><p className="footer-copy">Sovereign Nexus（律界智能）为澳洲移民、留学及相关法律服务提供一个清晰的智能入口与专业协作空间。</p><p className="footer-meta">Barangaroo, Sydney NSW 2000<br />+61 2 9200 8888 · contact@sovereignnexus.com.au</p></div><div><div className="eyebrow">导航索引 / NAVIGATION</div><Link to="/services">移民与留学服务</Link><Link to="/intelligence">法律与政策情报</Link><Link to="/workspace/ai">AI 案件工作空间</Link><Link to="/workspace/lawyer">律师协同工作空间</Link></div><div><div className="eyebrow">法务与合规 / COMPLIANCE</div><p>隐私声明与免责条款</p><p>法律专业服务说明</p><div className="footer-note">界面原型 · 内容与数据仅供设计评审</div></div></div><div className="footer-bottom"><span>© 2026 Sovereign Nexus · Prototype</span><span>Sydney, Australia · UI review build</span></div></footer>
}

export function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  return <div className="toast"><Check size={16} /><span>{message}</span><button onClick={onClose}><X size={14} /></button></div>
}

export function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow?: string; title: string; description?: string; light?: boolean }) {
  return <div className={light ? 'section-heading light' : 'section-heading'}>{eyebrow && <div className="eyebrow">{eyebrow}</div>}<h2>{title}</h2>{description && <p>{description}</p>}</div>
}

export function StatusBadge({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'success' | 'ai' | 'gold' | 'danger' | 'blue' }) {
  return <span className={`status-badge ${tone}`}><span className="status-dot" />{children}</span>
}

export function PublicLayout({ children, onMessage }: { children: ReactNode; onMessage: (message: string) => void }) {
  return <><PublicHeader onMessage={onMessage} />{children}<PublicFooter /></>
}

export function LawyerCard({ lawyer, onBook }: { lawyer: typeof lawyers[number]; onBook: (name: string) => void }) {
  return <article className="lawyer-card"><div className={`lawyer-avatar ${lawyer.accent}`}>{lawyer.initials}</div><div className="lawyer-card-top"><div><h3>{lawyer.name}</h3><p>{lawyer.role}</p></div><StatusBadge tone="success">可预约</StatusBadge></div><div className="lawyer-card-info"><span>{lawyer.credential}</span><span>专长 · {lawyer.focus}</span></div><button className="button button-dark button-full" onClick={() => onBook(lawyer.name)}><CalendarDays size={15} />预约初步会谈 <ArrowUpRight size={14} /></button></article>
}

export function AppointmentModal({ lawyer, onClose, onMessage }: { lawyer: string; onClose: () => void; onMessage: (message: string) => void }) {
  const [step, setStep] = useState(1)
  return <div className="modal-backdrop" onMouseDown={onClose}><div className="modal" onMouseDown={e => e.stopPropagation()}><div className="modal-head"><div><div className="eyebrow">CONSULTATION INTAKE</div><h3>预约 {lawyer} 律师</h3></div><button className="icon-button" onClick={onClose}><X size={18} /></button></div>{step === 1 ? <><p className="modal-intro">先选择你希望讨论的事项。AI 预咨询内容可以在后续会谈中作为案件背景带入。</p><div className="choice-grid"><button onClick={() => setStep(2)}><MessageSquare size={17} /><span>移民 / 学签规划</span><small>约 30 分钟</small></button><button onClick={() => setStep(2)}><ShieldAlert size={17} /><span>拒签 / ART 复审</span><small>约 45 分钟</small></button><button onClick={() => setStep(2)}><Users size={17} /><span>家庭 / 伴侣案件</span><small>约 30 分钟</small></button><button onClick={() => setStep(2)}><BriefcaseBusiness size={17} /><span>商业 / 雇主担保</span><small>约 45 分钟</small></button></div></> : <><div className="success-panel"><Check size={24} /><h4>已创建原型预约请求</h4><p>我们会把当前 AI 案件背景一并带入会谈准备。正式产品将连接真实预约流程。</p></div><button className="button button-dark button-full" onClick={() => { onClose(); onMessage('预约请求已保存 · 原型演示，不会发送真实通知') }}>返回案件工作空间 <ArrowRight size={15} /></button></>}</div></div>
}

export function WorkspaceShell({ mode, children, onMessage }: { mode: MatterMode; children: ReactNode; onMessage: (message: string) => void }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()
  const ai = mode === 'ai'
  return (
    <div className={`workspace ${ai ? 'workspace-ai' : 'workspace-lawyer'}`}>
      <aside className={sidebarOpen ? 'workspace-sidebar open' : 'workspace-sidebar'}>
        <div className="workspace-brand"><BrandMark compact /><div><b>{ai ? 'LAW AI' : 'LAWYER DESK'}</b><span>{ai ? '专业的法律智能伙伴' : '专属律师协同看板'}</span></div></div>
        <button className="new-matter" onClick={() => onMessage('已创建一个新的原型咨询')} />
        <div className="workspace-nav">
          <div className="workspace-nav-title">工作台 / MODULES</div>
          <button className="active"><MessageSquare size={16} />{ai ? '我的咨询' : '当前案件'}<span className="nav-count">8</span></button>
          <button onClick={() => onMessage('预约模块将在正式产品中提供')}><CalendarDays size={16} />预约<span className="nav-label">SYDNEY</span></button>
          <div className="workspace-nav-title recent">最近案件</div>
          <button onClick={() => navigate('/workspace/ai')}>学生签证咨询<span className="nav-label">今天</span></button>
          <button className={!ai ? 'matter-active' : ''} onClick={() => navigate('/workspace/lawyer')}><span className="presence-dot" />820 / 801 伴侣签证<span className="vip-tag">VIP</span></button>
          <button>Daniel-xxx<span className="nav-label">8-29</span></button>
        </div>
        <div className="workspace-account"><div className="mini-avatar">M</div><div><b>Mingyu</b><span>账户设置</span></div><button onClick={() => onMessage('账户设置为原型演示')}><CircleHelp size={16} /></button></div>
      </aside>
      <button className="workspace-overlay" onClick={() => setSidebarOpen(false)} aria-label="关闭导航" />
      <main className="workspace-main">
        <div className="workspace-topbar"><button className="icon-button mobile-menu" onClick={() => setSidebarOpen(true)}><Menu size={19} /></button><span className="workspace-location">BARANGAROO SYDNEY CLOUD TERMINAL</span><div className="workspace-top-actions"><LanguageControl onMessage={onMessage} /><Link to="/" className="back-home">返回首页</Link></div></div>
        {children}
      </main>
    </div>
  )
}

export function WorkspaceHeader({ mode, onEscalate, onMessage }: { mode: MatterMode; onEscalate: () => void; onMessage: (message: string) => void }) {
  const ai = mode === 'ai'
  return <div className="matter-header"><div className={`matter-avatar ${ai ? 'ai' : 'lawyer'}`}>{ai ? <Bot size={24} /> : 'TOM'}</div><div className="matter-identity"><div><h1>{ai ? '法律助手' : 'Lawyer-Tom'}</h1><StatusBadge tone={ai ? 'ai' : 'gold'}>{ai ? 'Jurist Lens · AI' : 'VIP 专属律师'}</StatusBadge></div><p>{ai ? '学生签证拒签 · ART review matter' : '新州最高法院执业大律师 · 专职合伙人 1 对 1 沟通'}</p></div>{ai ? <button className="button button-gold" onClick={onEscalate}><UserRound size={15} />付费咨询律师</button> : <div className="lawyer-presence"><StatusBadge tone="success">实时在线</StatusBadge><span>平均响应时间 &lt; 15 分钟</span><button className="button button-gold button-small" onClick={() => onMessage('电话会议请求已记录 · 原型演示')}><CalendarDays size={14} />预约电话会议</button></div>}</div>
}

export function MatterSidebar({ mode, onSummary, onMessage }: { mode: MatterMode; onSummary: () => void; onMessage: (message: string) => void }) {
  const [open, setOpen] = useState({ facts: true, docs: true, law: false })
  const fileInput = useRef<HTMLInputElement>(null)
  const [localDocs, setLocalDocs] = useState(documents)
  const toggle = (key: keyof typeof open) => setOpen(v => ({ ...v, [key]: !v[key] }))
  const handleFile = (file?: File) => { if (!file) return; setLocalDocs(v => [...v, { name: file.name, type: file.type.split('/')[1]?.toUpperCase() || 'FILE', size: `${Math.max(1, Math.round(file.size / 1024))} KB`, shared: false, status: '原型已添加' }]); onMessage('文件仅保存在当前浏览器状态 · 未上传至服务器') }
  return <aside className="matter-sidebar"><div className="matter-sidebar-title"><div><div className="eyebrow">MATTER 820 / 801</div><h2>案件信息</h2></div><StatusBadge tone={mode === 'ai' ? 'ai' : 'gold'}>{mode === 'ai' ? 'AI 辅助' : '律师协同'}</StatusBadge></div><div className="matter-summary-strip"><span>学生签证拒签 · ART Review</span><strong>进行中</strong></div><Accordion title="已知信息 · Known" open={open.facts} onClick={() => toggle('facts')} tone="blue"><div className="fact-list">{matterFacts.map(f => <div className="fact-row" key={f.label}><span>{f.label}</span><strong>{f.value}</strong><StatusBadge tone={f.status === 'known' ? 'success' : 'danger'}>{f.status === 'known' ? '已知' : '待确认'}</StatusBadge></div>)}</div></Accordion><Accordion title="本次材料" open={open.docs} onClick={() => toggle('docs')} tone="neutral"><div className="document-list">{localDocs.map(doc => <div className="document-row" key={doc.name}><FileText size={15} /><div><strong>{doc.name}</strong><span>{doc.type} · {doc.size} · {doc.shared ? '已分享给律师' : '未分享给律师'}</span></div><StatusBadge tone={doc.shared ? 'success' : 'neutral'}>{doc.status}</StatusBadge></div>)}</div><input ref={fileInput} type="file" hidden onChange={e => handleFile(e.target.files?.[0])} /><button className="upload-link" onClick={() => fileInput.current?.click()}><Upload size={14} />上传本地文件</button></Accordion><Accordion title="法律依据" open={open.law} onClick={() => toggle('law')} tone="purple"><div className="authority-mini"><span>Migration Act 1958</span><span>Administrative Review Tribunal guidance</span><span>Home Affairs · visa refusal</span></div></Accordion><div className="case-summary-card"><div><Sparkles size={17} /><strong>案件摘要</strong></div><p>把当前事实、材料与待确认问题整理为可带入律师会谈的案件摘要。</p><button className="button button-dark button-full" onClick={onSummary}>生成案件摘要</button></div>{mode === 'ai' && <button className="lawyer-escalation" onClick={() => onMessage('已进入律师升级预览 · 可从上方按钮切换')}><UserRound size={15} />升级至真人律师</button>}</aside>
}

function Accordion({ title, open, onClick, children, tone }: { title: string; open: boolean; onClick: () => void; children: ReactNode; tone: string }) { return <section className={`matter-section ${tone}`}><button className="accordion-trigger" onClick={onClick}><span>{title}</span>{open ? <ChevronDown size={15} /> : <ChevronRight size={15} />}</button>{open && <div className="accordion-body">{children}</div>}</section> }

export function ChatThread({ mode, onMessage }: { mode: MatterMode; onMessage: (message: string) => void }) {
  const [messages, setMessages] = useState([{ from: 'user', text: '我的学生签证被拒了。我想知道现在还来得及申请 ART 吗？', time: '今天 10:24' }, { from: 'ai', text: '可以先按“决定日期 → 复审期限 → 当前签证状态”三步核对。根据你上传的拒签决定书，当前最需要确认的是：决定书上标示的复审截止日期，以及你是否仍持有有效签证。', time: '今天 10:25', citations: ['Migration Act 1958 · review rights', 'Home Affairs · ART information'] }, { from: 'user', text: '明白，先把目前的回答和分析整理成案件摘要。', time: '今天 10:28' }])
  const [draft, setDraft] = useState('')
  const ai = mode === 'ai'
  const send = () => { if (!draft.trim()) { onMessage('请输入消息后再发送'); return }; setMessages(v => [...v, { from: 'user', text: draft, time: '刚刚' }]); setDraft(''); onMessage(ai ? '已加入 AI 对话 · 原型演示' : '消息已发送至律师线程 · 原型演示') }
  return <div className="chat-panel"><div className="provenance-banner">{ai ? <><Sparkles size={15} />AI 回复为演示内容 · 重要事项请核对官方来源</> : <><ShieldAlert size={15} />已启用澳洲特权保密代理通道 · Legal Professional Privilege</>}</div><div className="chat-scroll">{messages.map((message, i) => <div key={i} className={`message-row ${message.from}`}><div className={`message-bubble ${message.from}`}>{message.from === 'ai' && <div className="message-label"><Bot size={14} /> Jurist Lens</div>}<p>{message.text}</p>{message.citations && <div className="citation-list">{message.citations.map(c => <span key={c}><BookOpen size={12} />{c}</span>)}</div>}</div><span className="message-time">{message.time}</span></div>)}{!ai && <div className="lawyer-action-card"><div className="lawyer-avatar gold">TOM</div><div><strong>Lawyer-Tom <StatusBadge tone="gold">主办合伙人律师</StatusBadge></strong><p>请查看右侧“律师要求补充重要材料清单”，完成后即可进入自述信撰写阶段。</p><button onClick={() => onMessage('已打开材料请求清单')}>查看清单详情 <ArrowRight size={14} /></button></div></div>}</div><div className="chat-composer"><button className="icon-button" onClick={() => onMessage('附件选择为原型演示，可在右侧添加本地文件')}><Paperclip size={19} /></button><input value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder={ai ? '向 AI 法律助手描述你的情况…' : '直接向 Lawyer-Tom 律师留言或发送法律材料…'} /><button className="send-button" onClick={send}><Send size={16} />发送</button></div><div className="composer-note">{ai ? 'AI 仅提供信息整理与演示性分析，不构成法律意见' : '当前已接入 Tom 律师即时咨询席位 · 平均响应时间 &lt; 15 分钟'}</div></div>
}

export function MaterialBoard({ onMessage }: { onMessage: (message: string) => void }) {
  const [items, setItems] = useState(materialRequests)
  const cycle = (id: number) => setItems(v => v.map(item => item.id === id ? { ...item, state: item.state === 'correction' ? 'uploaded' : item.state === 'uploaded' ? 'review' : item.state } : item))
  return <div className="material-board">{items.map(item => <div className={`material-item ${item.state}`} key={item.id}><div className="material-item-head"><strong>{item.id}. {item.title}</strong><StatusBadge tone={item.state === 'correction' ? 'danger' : item.state === 'drafting' ? 'blue' : item.state === 'review' ? 'gold' : 'success'}>{item.state === 'correction' ? '需要补充' : item.state === 'review' ? '律师审查中' : item.state === 'drafting' ? '律师起草中' : '已上传'}</StatusBadge></div><p>{item.detail}</p><button onClick={() => { cycle(item.id); onMessage(item.state === 'correction' ? '已标记为重新提交 · 原型演示' : '已查看材料状态') }}>{item.action} <ArrowRight size={13} /></button></div>)}</div>
}

export function SummaryModal({ onClose }: { onClose: () => void }) { return <div className="modal-backdrop" onMouseDown={onClose}><div className="modal summary-modal" onMouseDown={e => e.stopPropagation()}><div className="modal-head"><div><div className="eyebrow">MATTER ARTIFACT</div><h3>案件摘要 · 学生签证拒签</h3></div><button className="icon-button" onClick={onClose}><X size={18} /></button></div><div className="summary-preview"><StatusBadge tone="ai">AI 整理 · 待人工确认</StatusBadge><h4>案件概览</h4><p>申请人持有 Subclass 500 学生签证，近期收到拒签决定。当前待确认复审期限、签证有效状态及资金 / GS 说明材料。</p><div className="summary-columns"><div><b>已知事实</b><span>拒签决定已上传</span><span>课程为 IT 硕士</span></div><div><b>下一步</b><span>确认 ART deadline</span><span>预约律师评估复审策略</span></div></div></div><button className="button button-dark button-full" onClick={onClose}>保存至案件工作空间</button></div></div> }

export function PolicyCard({ policy }: { policy: typeof import('./data').policies[number] }) { const Icon = policy.status === 'enacted' ? Check : CircleHelp; return <Link className="policy-row" to={`/intelligence/${policy.id}`}><div className="policy-code"><span className={policy.status === 'enacted' ? 'enacted-dot' : 'proposed-dot'} /><strong>{policy.code}</strong><small>{policy.source}</small></div><div className="policy-content"><div className="policy-tags"><StatusBadge tone={policy.status === 'enacted' ? 'success' : 'ai'}>{policy.status === 'enacted' ? '已生效 / 执行中' : '计划 / 审议中'}</StatusBadge><span>{policy.category}</span></div><h3>{policy.title}</h3><p>{policy.summary}</p><div className="policy-meta"><span><Clock3 size={12} />{policy.date}</span><span><Icon size={12} />{policy.status === 'enacted' ? '现行状态' : '提案状态'}</span></div></div><ArrowUpRight className="policy-arrow" size={18} /></Link> }

export function HeroArtwork() { return <div className="hero-artwork"><div className="art-window"><div className="art-window-head"><span /><span /><span /></div><div className="art-line wide" /><div className="art-line" /><div className="art-line short" /><div className="art-grid"><div /><div /><div /></div><div className="art-chip"><Sparkles size={13} /> AI Jurist Lens <span>98.5%</span></div></div><div className="art-ring ring-one" /><div className="art-ring ring-two" /><div className="art-star"><Zap size={20} /></div></div> }

export function SearchBox({ value, onChange }: { value: string; onChange: (value: string) => void }) { return <div className="search-box"><Search size={18} /><input value={value} onChange={e => onChange(e.target.value)} placeholder="搜索法案名称、公报代号或关键词…" /></div> }
