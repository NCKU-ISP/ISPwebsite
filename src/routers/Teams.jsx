function Teams() {
  return (
    <>
      <div className='bg-zinc-100 mx-auto max-w-5xl rounded-xl p-8 mb-10' style={{ color: "#383838" }}>
        <p className='text-3xl font-bold pb-3'>團隊專業</p>
        <hr className="border-sky-400 rounded-sm w-10 border-b-2" />
        <p className="pt-5">
          ISP 是由三個主要的學術部門組成：航電組、推進組、結構組。學術部有別於行政部門，是專門處理學術研究上的各種大小事。大至規劃研究方向，小至輔導學員學習。目的是幫助社團中的各項學術部門建立完善的組織及秩序。
          <br /><br />
          <li>負責提出及審核各項學術研究計畫</li>
          <li>監督各組研究進度及統合協調各組間的合作</li>
          <li>針對學術進度進行例行性開會</li>
          <li>規劃學期間課程及寒暑期活動</li>
        </p>
      </div>

      <div className='bg-zinc-100 mx-auto max-w-5xl rounded-xl p-8 my-10' style={{ color: "#383838" }}>
        <p className='text-2xl font-bold pb-3'>Structure 結構組</p>
        <hr className="border-sky-400 rounded-sm w-10 border-b-2" />
        <p className="text-gray-600 font-bold py-5">
          <i className="gg-quote inline-block"></i>
          結構次系統的任務就是打造火箭
          <i className="gg-quote inline-block"></i>
        </p>
        <div className="flex gap-5 flex-wrap items-center">
          <img src="https://i.imgur.com/cSczrXA.png" className="block rounded-xl shadow-md" alt="" />
          <p className="block">
            如果沒有結構次系統，不只是火箭，大至船艦、坦克、各種建築物，小至電腦、手機、各種 3C 產品都造不出來，整個文明社會都不會存在。這樣知道結構組的重要了嗎？
            <br />
            <br />
            ISP 結構組的工作內容包含：CAD 設計、FEM 模擬、熱模擬以及機械加工製造，除了在電腦上的設計與模擬之外，常常也需要實際前往加工，有時也會自行製作。因此除了應用課本上的知識分析，也將累積大量實作經驗或是業界經驗。
            <br />
            <br />
            我們常用的軟體包括：SolidWorks、Autodesk Inventor、ANSYS、OpenRocket。
            <br />
            <br />
            我們也鼓勵組員們發揮創意，除了 ISP 火箭全箭的設計工作外，目前結構組進行中的專案有立方衛星彈射艙、火箭控制、通用型航電艙設計等等。
          </p>
        </div>
      </div>

      <div className='bg-zinc-100 mx-auto max-w-5xl rounded-xl p-8 my-10' style={{ color: "#383838" }}>
        <p className='text-2xl font-bold pb-3'>Avionics 航電組</p>
        <hr className="border-sky-400 rounded-sm w-10 border-b-2" />
        <p className="text-gray-600 font-bold py-5">
          <i className="gg-quote inline-block"></i>
          航電系統相當於火箭的大腦及感官
          <i className="gg-quote inline-block"></i>
        </p>
        <div className="flex gap-5 flex-wrap items-center">
          <img src="https://i.imgur.com/LpOLsIk.jpg" className="block rounded-xl shadow-md" alt="" />
          <p className="block">
            航電是一個對許多人既熟悉又陌生的名詞，究竟他是一個什麼東西呢？「可控」火箭最不可少的就是航電系統，無論是導彈或是運載火箭，缺乏了計算核心就無法控制火箭的運動。航電板負責主要負責姿態估計以及開傘控制，必須在高加速度與強震動環境中維持系統正常運作，因此其穩定性及可靠性必須經過重重檢驗。
            <br />
            <br />
            航電組的最重要的任務就是拓展火箭可控制的範疇。從最初如同沖天炮般的火箭，開始可以通過偵測高度來控制開傘，到未來如同 SpaceX Falcon9 可做到回收火箭的高難度控制，都是與航電組相關的課題。
            <br />
            <br />
            航電組致力於研發航電系統的各個部件，當中包含控制主板、通訊系統、監控系統、地面站等。我們的專業涵蓋電子電路、自動控制、通訊、程式設計等。目前已經推出了 4 款針對不同火箭的航電板，未來將致力於研究控制火箭姿態已達成更多元的任務目標。
          </p>
        </div>
      </div>

      <div className='bg-zinc-100 mx-auto max-w-5xl rounded-xl p-8 my-10' style={{ color: "#383838" }}>
        <p className='text-2xl font-bold pb-3'>Propulsion 推進組</p>
        <hr className="border-sky-400 rounded-sm w-10 border-b-2" />
        <p className="text-gray-600 font-bold py-5">
          <i className="gg-quote inline-block"></i>
          火箭的動力來源無疑就是發動機了
          <i className="gg-quote inline-block"></i>
        </p>
        <div className="flex gap-5 flex-wrap items-center">
          <img src="https://i.imgur.com/g1KiDx9.jpg" className="block rounded-xl shadow-md" alt="" />
          <p className="block">
            推進組的主要工作就是製作出發動機，以提供火箭足夠的動力。
            <br />
            <br />
            我們致力於發動機上不同部分的開發以及研究，像是燃料特性、燃燒控制、噴嘴設計、發動機外殼等等，其中涉及了燃燒、熱力、流力、材料等諸多領域。目前至少有兩種類型的固體燃料發動機可以使用；同時我們也開發與發動機相關的技術，像是點火系統、艙壓量測系統。
            <br />
            <br />
            接下來我們將繼續開發不同的發動機以達成未來需要之任務高度，以及各面向的優化使其能夠穩定運作。
          </p>
        </div>
      </div>

    </>
  );
}

export default Teams;
