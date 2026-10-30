# Everyday English 生活英語

一個純靜態的英語學習網站：食衣住行育樂、居家用品、居家水電故障、交通事故、機場、家庭生活、朋友談話、電影口語、工作、面試、海外工作、報稅、股市投資、科技、身體健康、運動、跑步馬拉松、籃球、棒球、羽球、游泳、自行車、政治、軍事國防、新聞，共 30 個主題、9,100 多個單字、18,200 多個句子。每個主題至少 300 個單字，分「基礎 A1–A2 / 中級 B1–B2 / 高級 C1」三個等級，每級至少 100 個；每個單字都附圖片（emoji）。每個主題至少 600 個句子：每個單字一句例句＋300 句實用句（每級 100 句）。

每個等級包含：
- **單字**：中文解釋、例句、🔊 朗讀、✓ 標記已學會（進度存在瀏覽器）
- **實用句**：100 句，可搜尋、播放全部、每句重複 ×1–×3
- **情境對話**：可「播放全部」，A/B 兩種聲音
- **小測驗**：用例句做克漏字選擇題

頁首固定的搜尋框（按 / 可直接輸入，Esc 清除）：在首頁一次搜尋所有主題和等級的單字，在主題頁則篩選本頁單字。搜尋全部單字時，輸入英文或中文即可，結果可朗讀、標記已學會，點主題名稱可跳到該單字（網址如 `#/stocks/inter/odd lot`）。

其他功能：中文／English 介面切換、淺色／深色主題、隱藏譯文自我測驗、慢速朗讀、網址可直接分享（例如 `#/food/adv`）。

## 檔案

| 檔案 | 用途 |
|---|---|
| `index.html` | 介面、樣式與程式（無外部相依） |
| `data.js` | 主題、實用句、對話與每級前 6 個單字 |
| `pictures.js`、`pictures-more.js` | 較早加入的單字的圖片 |
| `vocab-1.js` ~ `vocab-23.js` | 其餘單字，一行一個：`word \| 中文 \| example \| emoji`（emoji 可省略） |
| `sent-1.js` ~ `sent-19.js` | 其餘實用句，一行一句：`English sentence \| 中文` |
| `.nojekyll` | 讓 GitHub Pages 直接提供檔案 |

## 本機預覽

直接用瀏覽器開啟 `index.html` 即可。

## 發佈到 GitHub Pages

```bash
git init
git add .
git commit -m "Everyday English site"
git branch -M main
git remote add origin https://github.com/<你的帳號>/<repo名稱>.git
git push -u origin main
```

接著到 GitHub repo → **Settings → Pages** → Source 選 **Deploy from a branch**，Branch 選 `main` / `/ (root)` → Save。
約一分鐘後網址為 `https://<你的帳號>.github.io/<repo名稱>/`。

## 新增內容

新主題：在 `data.js` 複製一個主題區塊修改。新單字：在 `vocab-*.js` 對應主題與等級加一行。新句子：在 `sent-*.js` 加一行。
每個單字的例句必須包含該單字（測驗會把它挖空）。小測驗每次從該等級隨機出 10 題。
