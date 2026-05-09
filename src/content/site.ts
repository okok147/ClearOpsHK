export const site = {
  name: 'ClearOpsHK',
  email: 'enquiry@clearopshk.com',
  brand: {
    logo: '/brand/clearopshk-mark.svg',
    mark: '/brand/clearopshk-mark.svg',
    alt: 'ClearOpsHK operations mark',
  },
  // TODO: Replace with the real Threads profile URL before launch.
  threadsUrl: 'https://www.threads.net/@clearopshk',
  seoTitle: 'ClearOpsHK｜香港中小企營運系統、Notion Dashboard、流程整理',
  seoDescription:
    'ClearOpsHK 為香港中小企整理 WhatsApp、Excel、客戶跟進、任務交接同 Notion dashboard，建立清楚、可追蹤、容易交接的營運系統。',
  seoKeywords:
    '香港中小企營運系統, Notion dashboard 香港, 客戶跟進系統, 流程整理, SOP 文件, AI workflow integration, WhatsApp Excel workflow',
  hero: {
    eyebrow: 'HONG KONG OPERATIONS SUPPORT',
    headline: '把零散工作，整理成團隊每日用得到的營運系統。',
    subheadline:
      'ClearOpsHK 協助香港公司整理客戶跟進、任務交接、文件、WhatsApp 與 Excel 流程，建立簡單、清楚、可持續維護的工作系統。',
    primaryCta: '留下查詢',
    secondaryCta: '直接發送 Email',
  },
  problem: {
    label: 'COMMON ISSUES',
    title: '營運不清楚，通常不是缺少工具，而是流程沒有落地。',
    intro:
      '我們先找出最影響日常工作的幾個位置，再用合適的 dashboard、表格、SOP 或 automation 補上。',
    scenes: [
      {
        title: '客戶跟進分散',
        scene: '查詢、報價、覆盤、收款分散在 WhatsApp、Email 或不同 Excel。',
        consequence: '重要客戶和下一步容易被日常訊息蓋過。',
      },
      {
        title: '任務狀態不透明',
        scene: '工作做完、卡住或等客人回覆，只存在個別同事的記憶中。',
        consequence: '管理層需要重複追問，交接也變得吃力。',
      },
      {
        title: 'SOP 只靠口頭傳',
        scene: '新人、兼職或外判加入時，需要重新問同一批問題。',
        consequence: '公司越忙，錯漏和返工成本越高。',
      },
    ],
  },
  comparison: {
    label: 'SYSTEM MAP',
    title: '同一盤生意，清楚同唔清楚，差好遠。',
    beforeTitle: '整理前',
    afterTitle: '整理後',
    before: [
      'WhatsApp scattered',
      'Excel duplicated',
      'tasks unclear',
      'customers not ranked',
      'follow-up depends on memory',
      'boss asks repeatedly',
    ],
    after: [
      'one dashboard',
      'task status visible',
      'key customers tracked',
      'follow-up dates clear',
      'handover easier',
      'boss sees the operation at a glance',
    ],
  },
  services: {
    label: 'WHAT WE BUILD',
    title: '按你的實際工作方式，建立輕量但可維護的營運系統。',
    items: [
      {
        title: 'Notion 營運 Dashboard',
        problem: '資料分散在不同人和不同檔案。',
        system: '整合客戶、任務、跟進日期、文件與狀態視圖。',
        result: '每天打開 dashboard 就知道優先處理事項。',
      },
      {
        title: '客戶 80/20 追蹤系統',
        problem: '重要客戶和普通查詢沒有清楚分層。',
        system: '用標籤、價值、狀態與下次跟進日建立客戶視圖。',
        result: 'VIP、潛在客和待回覆客戶可以快速排序。',
      },
      {
        title: 'Done / Undone 任務板',
        problem: '工作進度和責任人不夠清楚。',
        system: '建立狀態、負責人、期限、阻塞原因與交接欄位。',
        result: '減少重複追問，團隊可以自行推進。',
      },
      {
        title: 'WhatsApp / Email / 表格入口整理',
        problem: '新查詢入口多，但沒有一致的記錄方式。',
        system: '設計簡單收集、分類、入庫與跟進規則。',
        result: '資料由入口流向 dashboard，而不是停在 inbox。',
      },
      {
        title: 'SOP / 交接文件',
        problem: '流程靠口頭教，新人和交接成本高。',
        system: '把常見流程拆成短 SOP、checklist 與範例。',
        result: '同事有一致做法，交接不再完全靠人記。',
      },
    ],
  },
  process: {
    label: 'PROCESS',
    title: '先處理最影響收入或交接的一段流程。',
    steps: [
      '30 分鐘了解現有流程',
      '整理問題、入口與責任人',
      '建立第一版 dashboard / workflow',
      '用真實個案測試並微調',
    ],
  },
  pricing: {
    label: 'STARTING POINTS',
    title: '由一段最需要整理的流程開始，再按需要擴展。',
    packages: [
      {
        name: 'Starter System',
        // TODO: Replace pricing placeholder before publishing.
        price: '由 HK$____ 起',
        description: '適合先整理一個最痛流程，例如客戶跟進、任務交接或文件管理。',
        includes: ['流程診斷', '一個核心 dashboard', '基本 SOP / checklist', '一次使用教學'],
      },
      {
        name: 'Operations Dashboard',
        // TODO: Replace pricing placeholder before publishing.
        price: '由 HK$____ 起',
        description: '適合已經有多個入口、多個同事、多種狀態需要整合。',
        includes: ['營運總覽', '客戶及任務追蹤', '跟進日期視圖', '交接文件結構'],
      },
      {
        name: 'Monthly Maintenance',
        // TODO: Replace pricing placeholder before publishing.
        price: '由 HK$____ / 月 起',
        description: '適合想有人每月幫手清理、調整同優化系統。',
        includes: ['每月系統 review', '欄位及視圖優化', '小型 automation 改善', '團隊用法微調'],
      },
    ],
  },
  why: {
    label: 'WHY CLEAROPSHK',
    title: '工具可以很快裝好，真正重要的是團隊每天願意使用。',
    reasons: [
      '先理解現有工作方式，再決定是否需要 Notion、表格或 automation',
      '圍繞同事實際行為設計，不強迫團隊跟一套過度複雜的流程',
      '重點放在清楚、交接、跟進和維護，而不是追逐工具名詞',
    ],
  },
  enquiry: {
    label: 'ENQUIRY',
    title: '留下你的流程問題，我們會用 Email 回覆。',
    intro: '簡單描述公司類型、目前最混亂的工作位置，以及你希望先整理哪一段流程。',
    topics: [
      'Notion 營運 Dashboard',
      '客戶跟進系統',
      '任務交接 / Done-Undone Board',
      'SOP / 文件整理',
      'AI workflow / automation',
      '其他營運流程問題',
    ],
    nameLabel: '姓名 / 公司',
    topicLabel: '查詢主題',
    messageLabel: '留言內容',
    messagePlaceholder:
      '例如：我們有 5 人團隊，客戶查詢主要在 WhatsApp，現在想先整理報價、跟進和收款狀態。',
    button: '用 Email 送出查詢',
    directEmail: '或直接電郵',
  },
  finalCta: {
    headline: '不需要一次過重做所有系統。先把最影響日常營運的一段整理好。',
    button: '發送查詢',
  },
}

export type SiteContent = typeof site
