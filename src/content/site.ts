export const site = {
  name: 'ClearOpsHK',
  email: 'clearopshk@clearopshk.com',
  // TODO: Replace with the real Threads profile URL before launch.
  threadsUrl: 'https://www.threads.net/@clearopshk',
  seoTitle: 'ClearOpsHK｜香港本地營運系統、Notion Dashboard、AI Workflow Integration',
  seoDescription:
    'ClearOpsHK 幫香港公司將 WhatsApp、Excel、口頭交代同零散流程，整理成清楚、可追蹤、可交接嘅營運系統。',
  hero: {
    eyebrow: 'HONG KONG OPERATIONS SYSTEM',
    headline: '你間公司唔係唔努力，係營運太多嘢散咗。',
    subheadline:
      'ClearOpsHK 幫香港公司將 WhatsApp、Excel、口頭交代同零散流程，整理成一個清楚、可追蹤、可交接嘅營運系統。',
    primaryCta: '預約一次營運診斷',
    secondaryCta: '睇一個案例故事',
  },
  problem: {
    label: 'FIELD NOTE',
    title: '問題通常唔係出喺一件大事，而係每日啲細位慢慢漏。',
    intro:
      '老闆同同事其實都好努力。只是資訊分散，責任未落位，狀態無人睇得清。',
    scenes: [
      {
        title: 'WhatsApp 有人講咗',
        scene: '客人問完價，訊息一路被新 message 推走。',
        consequence: '到有人醒起，已經過咗最好跟進時間。',
      },
      {
        title: 'Excel 有資料',
        scene: 'A 檔、final 檔、final-new 檔同時存在。',
        consequence: '開會討論前，先要估邊個版本先啱。',
      },
      {
        title: '重要客只喺老闆腦入面',
        scene: '邊個要快覆、邊個要定期問候，全靠一個人記住。',
        consequence: '一放假、一忙、一交接，關係就開始漏。',
      },
      {
        title: '同事做完嘢',
        scene: '現場完成、相已影、客已覆，但下一個人唔知。',
        consequence: '老闆要重複問，團隊要重複查。',
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
    label: 'BUILD LIST',
    title: '我哋唔係賣工具，我哋幫你砌返一套啱你生意用嘅工作方法。',
    items: [
      {
        title: 'Notion 營運 Dashboard',
        problem: '資料分散，老闆要逐個地方問。',
        system: '將客戶、任務、跟進、文件放入同一個可掃描工作面。',
        result: '每朝一開就知今日要處理邊幾件事。',
      },
      {
        title: '客戶 80/20 追蹤系統',
        problem: '重要客戶靠記憶，普通客戶無分層。',
        system: '用標籤、價值、狀態、下次跟進日建立客戶視圖。',
        result: 'VIP、潛在客、需要追回覆的人一眼睇到。',
      },
      {
        title: 'Done / Undone 任務板',
        problem: '工作做緊、做完、卡住，口頭講完就散。',
        system: '建立清楚狀態、負責人、期限同阻塞原因。',
        result: '少啲追問，多啲自己推進。',
      },
      {
        title: 'WhatsApp / 表格 / Email 資料整理流程',
        problem: '新需求入口太多，無人知要抄去邊。',
        system: '設計簡單收集、分類、入庫同跟進規則。',
        result: '資料由入口流去 dashboard，而唔係停喺 inbox。',
      },
      {
        title: 'AI 會議紀錄 / 跟進摘要',
        problem: '會開完，但 decision 同 action item 未落地。',
        system: '用 AI 輔助整理紀錄，再轉成可追蹤任務。',
        result: '會議唔只留低文字，仲留低下一步。',
      },
      {
        title: 'SOP / 交接文件系統',
        problem: '新人要問十次，舊人一走就斷線。',
        system: '將常見流程拆成短 SOP、checklist 同範例。',
        result: '交接有依據，唔再完全靠口傳。',
      },
      {
        title: '每月維護同優化',
        problem: '系統一開始好用，之後慢慢變亂。',
        system: '每月檢查 dashboard、流程、欄位同團隊用法。',
        result: '系統跟住真實生意變，而唔係變成另一個廢資料夾。',
      },
    ],
  },
  caseStory: {
    label: 'CASE STORY',
    title: '一間 6 人服務公司，由「老闆記住晒」變成「團隊睇得到」。',
    company: '本地家居維修服務團隊',
    situation:
      '工作由 WhatsApp 入，報價、師傅安排、客人覆盤同收款狀態分散喺唔同對話。老闆記得邊啲客重要，但同事只睇到一堆 message。',
    build: [
      'Notion dashboard：每日新 job、進行中 job、待客人回覆分開睇',
      '任務狀態板：未安排、已安排、完成、待補相、待收款',
      'VIP customer tracker：重要客戶、屋苑、偏好、下次跟進日',
      'Weekly boss view：今週卡住項、快到期跟進、需要老闆決定',
    ],
    result:
      '老闆少咗逐個問狀態，同事交接時有共同畫面。跟進日期清楚，漏覆少咗，開會可以直接睇實際工作流，而唔係憑記憶重組。',
  },
  process: {
    label: 'PROCESS',
    title: '唔需要一開始就大改。先搵最痛嗰一段流程。',
    steps: [
      '30-minute operation diagnosis',
      'Map the messy workflow',
      'Build first dashboard / workflow',
      'Test with real cases',
      'Adjust until staff can actually use it',
      'Monthly maintenance if needed',
    ],
  },
  pricing: {
    label: 'STARTING POINTS',
    title: '先由一段最亂嘅流程開始，之後再按需要擴展。',
    packages: [
      {
        name: 'Starter System',
        // TODO: Replace pricing placeholder before publishing.
        price: '由 HK$____ 起',
        description: '適合想先整理一個最痛流程，例如客戶跟進或任務交接。',
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
    title: '工具可以好快裝好，但真正難係讓團隊每日都用。',
    reasons: [
      '理解真實世界嘅亂，不只理解軟件功能',
      '圍繞員工實際行為設計，而唔係逼人跟一套漂亮流程',
      '系統保持簡單，夠日常使用先算成功',
      '重點放喺清楚、交接、跟進，而唔係追逐新工具名詞',
    ],
  },
  finalCta: {
    headline: '你唔需要一次過數碼轉型。你只需要先將最亂嗰 20% 整清楚。',
    button: 'Email ClearOpsHK',
  },
}

export type SiteContent = typeof site
