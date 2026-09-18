export type PolicyStatus = 'enacted' | 'proposed'
export type MatterMode = 'ai' | 'lawyer'

export type MatterFact = { label: string; value: string }
export type MatterDocument = { name: string; type: string; size: string; shared: boolean; status: string }
export type MatterMessage = { from: 'user' | 'ai' | 'lawyer'; text: string; time: string; citations?: string[] }

export type Matter = {
  id: string
  shortLabel: string
  title: string
  kind: string
  status: string
  description: string
  knownFacts: MatterFact[]
  toConfirmFacts: MatterFact[]
  documents: MatterDocument[]
  authorities: string[]
  messages: MatterMessage[]
}

export const lawyers = [
  { name: 'Marcus Zheng', role: '学生签证与过渡签证律师', credential: 'MARA Registered 1908842', focus: '500、485、189 与学生签证拒签', initials: 'MZ', accent: 'blue', asset: 'marcus' },
  { name: 'Eleanor Vance', role: '商业投资与家庭移民律师', credential: 'MARA Registered 2310048', focus: '商业创新、伴侣、父母移民', initials: 'EV', accent: 'gold', asset: 'eleanor' },
  { name: 'Julian Chen', role: '移民法与行政复审律师', credential: 'NSW Legal Practising No. 48291', focus: '拒签、ART、雇主担保', initials: 'JC', accent: 'navy', asset: 'julian' },
  { name: 'Grace Zhao', role: '家庭团聚与父母移民律师', credential: 'MARA Registered 2204718', focus: '伴侣、父母、家庭团聚', initials: 'GZ', accent: 'purple', asset: 'grace' },
]

export const services = [
  { title: '技术与雇主担保移民', english: 'Skilled & Employer Sponsorship', icon: 'BriefcaseBusiness', body: '从职业评估、EOI 规划到 482 / 186 / 494 的完整合规路径，围绕职位、雇主与时间线同步推进。', tags: ['189 / 190 / 491', '482 / 186 / 494'] },
  { title: '留学与名校签证全案', english: 'Study & Student Visa', icon: 'GraduationCap', body: '从课程选择、GS 论证到 Subclass 500 材料准备，把升学计划与长期身份路径放在同一张图里。', tags: ['Subclass 500', 'GS / GTE'] },
  { title: '投资与商业创新移民', english: 'Business & Investment', icon: 'Landmark', body: '商业创新、投资与企业家路径的结构化评估，连接资金来源、企业结构与州担保要求。', tags: ['188 / 888', '商业合规'] },
  { title: '签证危机拯救与行政复审 (ART)', english: 'Refusal & Administrative Review', icon: 'ShieldAlert', body: '面对拒签、NOICC 或复审期限时，快速厘清审查权利、截止日期与最值得准备的证据。', tags: ['ART review', '紧急响应'] },
  { title: '毕业工签与身份过渡规划', english: 'Graduate & Bridging Visas', icon: 'ArrowRightLeft', body: '把毕业、工作、过渡与长期签证节点串成可执行时间线，提前处理身份之间的衔接风险。', tags: ['485', 'Bridging visa'] },
  { title: '全家团聚与父母配偶移民', english: 'Family & Partner Migration', icon: 'Users', body: '围绕关系证据、家庭成员与签证策略，建立清晰的案件档案与长期补件计划。', tags: ['820 / 801', '父母移民'] },
]

export const policyUpdates = [
  { id: 'tsmit-2607', title: '澳洲临时技术移民最低收入门槛调整：法定基准上调至 $75,930', category: '雇主担保', source: 'Federal Register of Legislation', date: '2026.07.01', status: 'enacted' as PolicyStatus, summary: '围绕 Subclass 482、494 与 186 通道的最低收入门槛与既有申请过渡处理。', code: 'LIN 26/084', affected: '雇主担保、技术移民申请人' },
  { id: 'surcharge-duty', title: '新州海外购房附加税（Surcharge Duty）代理声明要求更新', category: '州税务', source: 'Revenue NSW', date: '2026.06.20', status: 'enacted' as PolicyStatus, summary: '对信托与代理结构中的受益人声明、审查与补救节点进行提示。', code: 'NSW-REV-26', affected: '海外买家、信托与代理结构' },
  { id: 'art-fast-track', title: '联邦行政复审申请（ART）正式运作：学生与访客签证进入新的分流路径', category: '行政复审', source: 'Administrative Review Tribunal', date: '2026.05.18', status: 'enacted' as PolicyStatus, summary: '展示审理分流与材料准备节点，具体适用范围以官方来源为准。', code: 'ART-2026-04', affected: '签证拒签、行政复审申请人' },
  { id: 'visa-processing', title: '462 打工度假签证电子抽签通道正式上线', category: '签证流程', source: 'Department of Home Affairs', date: '2026.04.30', status: 'enacted' as PolicyStatus, summary: '针对抽签、邀请、材料提交与身份时间线的演示性情报条目。', code: 'WHM-462-26', affected: '462 打工度假签证申请人' },
  { id: 'skills-reform', title: '技能紧缺签证（Skills in Demand）三级通道法定改革方案', category: '签证改革', source: 'Department of Home Affairs', date: '拟议 2026 Q3', status: 'proposed' as PolicyStatus, summary: '处于审议 / 咨询阶段的结构化提案，尚不代表已生效法律。', code: 'SID-REFORM', affected: '雇主、技术岗位与雇员' },
  { id: 'aml-reform', title: '反洗钱与反恐融资法第二阶段：地产中介、会计师纳入报告范围', category: '合规监管', source: 'AUSTRAC / Attorney-General', date: '拟议 2026 Q4', status: 'proposed' as PolicyStatus, summary: '面向专业服务行业的合规边界与时间线提示，仍需等待正式文本。', code: 'AML-TR-2', affected: '地产、会计与专业服务机构' },
  { id: 'vic-nom', title: '维州州担保职业清单与优先行业分配机制咨询稿', category: '州担保', source: 'Live in Melbourne', date: '拟议 2026.10', status: 'proposed' as PolicyStatus, summary: '咨询稿提出对关键行业、区域人才与职业评估排序的更新方向。', code: 'VIC-NOM-26', affected: '维州州担保及技术移民' },
  { id: 'for-trust', title: '外国投资审查与家庭信托受益人披露规则修订提案', category: '外国投资', source: 'Foreign Investment Review Board', date: '拟议 2026.11', status: 'proposed' as PolicyStatus, summary: '提案关注家庭信托、受益人披露和海外控制权判断，未构成现行义务。', code: 'FIRB-TRUST', affected: '家庭信托、海外投资人与顾问' },
]

export const policies = policyUpdates

export const studentRefusalMatter: Matter = {
  id: 'MTR-500-ART-0826', shortLabel: '学生签证咨询', title: '学生签证拒签 · ART Review', kind: 'STUDENT VISA REFUSAL', status: '进行中', description: 'Subclass 500 · refusal / review preparation',
  knownFacts: [
    { label: '签证类别', value: 'Subclass 500 · 学生签证' },
    { label: '最近决定', value: '学生签证拒签 · 2026.08.28' },
    { label: '课程', value: 'Master of Information Technology' },
  ],
  toConfirmFacts: [
    { label: '拒签理由', value: 'Genuine Student / 资金说明需补充' },
    { label: '复审期限', value: '确认决定书上的 ART deadline' },
    { label: '当前状态', value: '确认签证是否仍然有效' },
  ],
  documents: [
    { name: 'student_visa_refusal.pdf', type: 'PDF', size: '2.4 MB', shared: false, status: '已添加' },
    { name: 'passport_bio_page.jpg', type: 'JPG', size: '1.1 MB', shared: false, status: '已添加' },
    { name: 'enrolment_confirmation.pdf', type: 'PDF', size: '640 KB', shared: true, status: 'AI 已读取' },
  ],
  authorities: ['Migration Act 1958 · review rights', 'Administrative Review Tribunal · student visa', 'Home Affairs · visa refusal guidance'],
  messages: [
    { from: 'user', text: '我的学生签证被拒了。我想知道现在还来得及申请 ART 吗？', time: '今天 10:24' },
    { from: 'ai', text: '可以先按“决定日期 → 复审期限 → 当前签证状态”三步核对。根据你上传的拒签决定书，当前最需要确认的是：决定书上标示的复审截止日期，以及你是否仍持有有效签证。', time: '今天 10:25', citations: ['Migration Act 1958 · review rights', 'Home Affairs · ART information'] },
    { from: 'user', text: '明白，先把目前的回答和分析整理成案件摘要。', time: '今天 10:28' },
  ],
}

export const partnerVisaMatter: Matter = {
  id: 'MTR-820-801-0820', shortLabel: 'Lawyer-Tom · 配偶签证', title: '820 / 801 伴侣签证 · 主办案件', kind: 'PARTNER VISA MATTER', status: 'VIP 专属', description: 'Subclass 820 / 801 · evidence review and statement drafting',
  knownFacts: [
    { label: '签证类别', value: 'Subclass 820 / 801 · 伴侣签证' },
    { label: '案件阶段', value: '证据审查与关系陈述起草' },
    { label: '主办律师', value: 'Lawyer-Tom · Partner Migration' },
  ],
  toConfirmFacts: [
    { label: 'Form 888', value: '确认见证人签署页与身份证明' },
    { label: '共同账户', value: '补充近 12 个月完整流水' },
    { label: '共同居所', value: '租约需要配偶第二签名' },
  ],
  documents: [
    { name: 'Form_888_witness_1.pdf', type: 'PDF', size: '1.8 MB', shared: true, status: '待修正' },
    { name: 'joint_bank_statements_12m.pdf', type: 'PDF', size: '8.2 MB', shared: true, status: '律师审查中' },
    { name: 'joint_lease_and_bills.pdf', type: 'PDF', size: '3.6 MB', shared: true, status: '待补签' },
    { name: 'relationship_statement_bilingual.docx', type: 'DOCX', size: '420 KB', shared: true, status: '律师起草中' },
  ],
  authorities: ['Migration Regulations 1994 · Partner visa', 'Form 888 · supporting witness evidence', 'Home Affairs · relationship evidence guide'],
  messages: [
    { from: 'lawyer', text: '您好，我已经把本周优先事项整理到右侧材料看板。先修正两份 Form 888，再补齐共同账户流水，关系陈述可以同步起草。', time: '今天 09:42' },
    { from: 'user', text: '收到。我会先联系见证人补签，也想确认联名银行流水是否需要涵盖每一笔日常支出。', time: '今天 10:06' },
    { from: 'lawyer', text: '不需要逐笔解释，但需要让共同生活的连续性清晰可见。我会在上传后标注需要重点说明的交易。', time: '今天 10:11', citations: ['Partner visa · relationship evidence', 'Form 888 witness statement'] },
  ],
}

export const materialRequests = [
  { id: 1, title: '888 表格联名见证人法定陈述书', detail: '请补充签署页与见证人身份证明。', state: 'correction', action: '重新提交修正件' },
  { id: 2, title: '联名银行账户近 12 个月完整流水账单', detail: '需包含共同日常生活开支与水电气缴费出处。', state: 'review', action: '查看律师审查备注' },
  { id: 3, title: '现居所共同租约及市议会水电账单', detail: '租约签署人缺失配偶第二签名。', state: 'uploaded', action: '已上传 · 待复核' },
  { id: 4, title: '双方关系发展史双语自述信', detail: 'Tom 律师正在根据前序材料构建合法性证据链。', state: 'drafting', action: '预计今日 17:00 前完成' },
]
