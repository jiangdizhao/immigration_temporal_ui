export type PolicyStatus = 'enacted' | 'proposed'
export type MatterMode = 'ai' | 'lawyer'

export const lawyers = [
  { name: 'Julian Chen', role: '移民法与行政复审律师', credential: 'NSW Legal Practising No. 48291', focus: '拒签、ART、雇主担保', initials: 'JC', accent: 'navy' },
  { name: 'Eleanor Vance', role: '商业投资与家庭移民律师', credential: 'MARA Registered 2310048', focus: '商业创新、伴侣、父母', initials: 'EV', accent: 'gold' },
  { name: 'Marcus Zheng', role: '学生签证与过渡签证律师', credential: 'MARA Registered 1908842', focus: '留学、500、485、189', initials: 'MZ', accent: 'blue' },
]

export const services = [
  { title: '技术与雇主担保', english: 'Skilled & Employer Sponsorship', icon: 'BriefcaseBusiness', body: '从职业评估、EOI 规划到 482 / 186 / 494 的完整合规路径。', tags: ['189 / 190 / 491', '482 / 186 / 494'] },
  { title: '留学与学生签证', english: 'Study & Student Visa', icon: 'GraduationCap', body: '围绕课程选择、GS 论证与学生签证材料建立长期身份规划。', tags: ['Subclass 500', 'GS / GTE'] },
  { title: '商业投资', english: 'Business & Investment', icon: 'Landmark', body: '商业创新、投资与企业家路径的结构化评估与材料策略。', tags: ['188 / 888', '商业合规'] },
  { title: '拒签与 ART', english: 'Refusal & Administrative Review', icon: 'ShieldAlert', body: '面对拒签、NOICC 或复审期限时，快速厘清权利与下一步。', tags: ['ART review', '紧急响应'] },
  { title: '毕业与过渡签证', english: 'Graduate & Bridging Visas', icon: 'ArrowRightLeft', body: '把毕业、工作、过渡与长期签证节点串成可执行的时间线。', tags: ['485', 'Bridging visa'] },
  { title: '家庭 / 伴侣移民', english: 'Family & Partner Migration', icon: 'Users', body: '围绕关系证据、家庭成员与签证策略，建立清晰的案件档案。', tags: ['820 / 801', '父母移民'] },
]

export const policies = [
  { id: 'tsmit-2607', title: '澳洲临时技术移民最低收入门槛调整：法定基准上调至 $75,930', category: '雇主担保', source: 'Federal Register of Legislation', date: '2026.07.01', status: 'enacted' as PolicyStatus, summary: '围绕 Subclass 482、494 与 186 通道的最低收入门槛与既有申请过渡处理。', code: 'LIN 26/084' },
  { id: 'surcharge-duty', title: '新州海外购房附加税（Surcharge Duty）：全权委托代理必须包含对排除外籍受益人条款', category: '州税务', source: 'Revenue NSW', date: '2026.06.20', status: 'enacted' as PolicyStatus, summary: '对信托与代理结构中的受益人声明、审查与补救节点进行提示。', code: 'NSW-REV-26' },
  { id: 'art-fast-track', title: '联邦行政复审申请（ART）正式运作：普通学生与访客签证签转向书面快速即席裁决', category: '行政复审', source: 'Federal Tribunal', date: '2026.05.18', status: 'enacted' as PolicyStatus, summary: '展示审理分流与材料准备节点，具体适用范围以官方来源为准。', code: 'ART-2026-04' },
  { id: 'visa-processing', title: '462 打工度假签证电子抽签通道正式上线', category: '签证流程', source: 'Visa Processing', date: '2026.04.30', status: 'enacted' as PolicyStatus, summary: '针对抽签、邀请、材料提交与身份时间线的演示性情报条目。', code: 'WHM-462-26' },
  { id: 'skills-reform', title: '技能紧缺签证（Skills in Demand）三级通道法定改革方案', category: '签证改革', source: 'Home Affairs', date: '拟议 2026 Q3', status: 'proposed' as PolicyStatus, summary: '处于审议 / 咨询阶段的结构化提案，尚不代表已生效法律。', code: 'SID-REFORM' },
  { id: 'aml-reform', title: '反洗钱与反恐融资法第二阶段：地产中介、会计师纳入 AUSTRAC 强制报告范围', category: '合规监管', source: 'AUSTRAC / AG', date: '拟议 2026 Q4', status: 'proposed' as PolicyStatus, summary: '面向专业服务行业的合规边界与时间线提示。', code: 'AML-TR-2' },
]

export const matterFacts = [
  { label: '签证类别', value: 'Subclass 500 · 学生签证', status: 'known' },
  { label: '最近决定', value: '学生签证拒签 · 2026.08.28', status: 'known' },
  { label: '课程', value: 'Master of Information Technology', status: 'known' },
  { label: '拒签理由', value: 'Genuine Student / 资金说明需补充', status: 'confirm' },
  { label: '复审期限', value: '请确认决定书上的 ART deadline', status: 'confirm' },
]

export const documents = [
  { name: 'student_visa_refusal.pdf', type: 'PDF', size: '2.4 MB', shared: false, status: '已添加' },
  { name: 'passport_bio_page.jpg', type: 'JPG', size: '1.1 MB', shared: false, status: '已添加' },
  { name: 'enrolment_confirmation.pdf', type: 'PDF', size: '640 KB', shared: true, status: 'AI 已读取' },
]

export const materialRequests = [
  { id: 1, title: '888 表格联名见证人法定陈述书', detail: '请补充签署页与见证人身份证明。', state: 'correction', action: '重新提交修正件' },
  { id: 2, title: '联名银行账户近 12 个月完整流水账单', detail: '需包含共同日常生活开支与水电气缴费出处。', state: 'review', action: '查看律师审查备注' },
  { id: 3, title: '现居所共同租约及市议会水电账单', detail: '租约签署人缺失配偶第二签名。', state: 'uploaded', action: '已上传 · 待复核' },
  { id: 4, title: '双方关系发展史双语自述信', detail: 'Tom 律师正在根据前序材料构建合法性证据链。', state: 'drafting', action: '预计今日 17:00 前完成' },
]

export const demoMessages = [
  { from: 'user', text: '我的学生签证被拒了。我想知道现在还来得及申请 ART 吗？', time: '今天 10:24' },
  { from: 'ai', text: '可以先按“决定日期 → 复审期限 → 当前签证状态”三步核对。根据你上传的拒签决定书，当前最需要确认的是：决定书上标示的复审截止日期，以及你是否仍持有有效签证。', time: '今天 10:25', citations: ['Migration Act 1958 · review rights', 'Home Affairs · ART information'] },
  { from: 'user', text: '明白，先把目前的回答和分析整理成案件摘要。', time: '今天 10:28' },
]
