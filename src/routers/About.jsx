function About() {
  return (
    <>
      <div className='bg-zinc-100 mx-auto max-w-5xl rounded-xl p-8 mb-10' style={{ color: "#383838" }}>
        <p className='text-3xl font-bold pb-3'>團隊介紹</p>
        <hr className="border-sky-400 rounded-sm w-10 border-b-2" />
        <p className="py-5">我們是來自成功大學的 ISP 太空推進研究社（Institute of Space Propulsion）。ISP 是一個由成大不同系所的學生自發性成立的社團，並且致力於研究火箭技術。在成立的這三年間，ISP 無論在研究、飛行測試、課程及推廣皆有著墨。這個團隊充滿著富有熱誠、對未來有著無限憧憬且不乏實力的青年們。</p>
        <img src="https://i.imgur.com/S0hVyit.jpg" className="block rounded-xl" alt="" />
      </div>

      <div className='bg-zinc-100 mx-auto max-w-5xl rounded-xl p-8 my-10' style={{ color: "#383838" }}>
        <p className='text-3xl font-bold pb-3'>加入我們</p>
        <hr className="border-sky-400 rounded-sm w-10 border-b-2" />
        <p className="text-gray-600 font-bold py-5">
          <i className="gg-quote inline-block"></i>
          Getting started on ISP team
          <i className="gg-quote inline-block"></i>
        </p>
        <p className="block pb-5">
          ISP 火箭是全臺第一支開源火箭！這是一個總部在成功大學，全國皆可參與的教育性火箭計畫，許多教育機構也是我們的合作夥伴，如臺灣大學、中央大學，以及一些國、高中。
          <br /><br />
          設計、製造與測試並非簡單的工作，但我們的目標可是太空啊！所以快來加入吧，就算你不是大學生，我們也需要你的幫忙！
          <br /><br />
          如果你有任何問題，歡迎到我們的臉書聯絡我們！
        </p>
        <p className="text-gray-600 font-bold py-5">
          <i className="gg-quote inline-block"></i>
          Open Source 聲明
          <i className="gg-quote inline-block"></i>
        </p>
        <p className="block pb-5">
          1960 年代以來，不論哪個國家，航太科技都屬於政府機密保護範圍。隨著時代變遷，近十年來由 SpaceX 領頭，全球已有上千家航太新創正在發展，使得研究漸漸與軍事脫鉤，開始走入商業領域。
          <br /><br />
          2008 年國家太空中心正式啟動混合式探空火箭研發計畫，給予成功大學與交通大學（今陽明交通大學）兩個團隊、另外成功大學及中央大學也曾多次參與太空任務的酬載開發，前述即為國內主要鑽研航太領域的三間學校。無奈若非三校學生，對相關知識仍難以獲取。
          <br /><br />
          ISP 團隊體認到繁體中文圈內對知識來源的缺乏，也認為開源是對於教育的正確道路，因此 ISP 團隊非常認真看待計畫開源這件事。
          <br /><br />
          ISP 團隊以 NASA 系統工程為藍圖，相當認真執行計畫，也期望相關執行方式能作為國內工程教育的範本，提升國內高中以下團隊的工程水準。而 ISP 團隊與專業團隊還是相去甚遠，因此相當歡迎大家自由取用我們的所有設計，並讓它變得更好！更多人願意參與、貢獻，並一同實踐理想，是我們努力的目標！
          <br /><br />
          ISP 團隊主要的計畫都是開源專案，這意味著：
          <br />
          <ol className="list-decimal mx-5">
            <li>我們會公開硬體內容與軟體原始碼</li>
            <li>我們的成果將遵循開源的授權條款</li>
          </ol>
        </p>
        <p className="text-gray-600 font-bold py-5">
          <i className="gg-quote inline-block"></i>
          法規與其他規範
          <i className="gg-quote inline-block"></i>
        </p>
        <p className="block pb-5">
          ISP 團隊遵守中華民國對於教育計劃與航太發展的所有規範，包含但不限於<a href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0160078" target="_blank" className="text-sky-700 hover:underline"> 太空發展法</a>。並可能受到<a href="https://en.wikipedia.org/wiki/International_Traffic_in_Arms_Regulations" target="_blank" className="text-sky-700 hover:underline"> ITAR 國際武器貿易條例 </a>限制，意即若有不應被發布的事物，那 ISP 團隊將不會公開。
          <br /><br />
          在團隊中你也可能看到機密的文件與參考資料，儘管 ISP 團隊努力不佔有研究成果或視為機密，但少數時候仍無法避免。在此重申，我們將公開與其相關的所有內容，但不會發布機密本身。
        </p>
      </div>
    </>
  );
}

export default About;
