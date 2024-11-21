import React from "react";
import "./App.css"; // 用於自定義樣式

const products = [
  {
    id: 1,
    title: "DYVLINGE 旋轉扶手椅",
    image: "https://www.ikea.com.tw/dairyfarm/tw/images/725/1272581_PH195684_S4.webp", // 替換成 IKEA 的產品圖片
    description: "在1967年的產品目錄中，以MILA一名首度登場； 直到現在，依然讓你時刻保持優良坐姿，全身自然放鬆",
    price: "$4,999",
    url: "https://www.ikea.com.tw/zh/products/armchairs-footstool-and-sofa-tables/armchairs/dyvlinge-art-70570836",
  },
  {
    id: 2,
    title: "VARMBLIXT Led桌燈",
    image: "https://www.ikea.com.tw/dairyfarm/tw/images/989/1198968_PH186785_S5.webp",
    description: "光線穿透橘色的玻璃燈罩，讓看起來軟綿綿的甜甜圈散發著溫暖光暈。 不論放在餐桌或掛在牆上，也夢幻得令人著迷",
    price: "$1,799",
    url: "https://www.ikea.com.tw/zh/products/luminaires/table-lamps/varmblixt-art-30525153",
  },
  {
    id: 3,
    title: "BLÅHAJ 鯊魚",
    image: "https://www.ikea.com.tw/dairyfarm/tw/images/439/1143962_PE881669_S4.webp",
    description: "所有填充玩具都能給你擁抱、安慰和傾聽，也很淘氣和喜歡玩耍",
    price: "$699",
    url: "https://www.ikea.com.tw/zh/products/kids-toys/comfort-toys/blahaj-art-10373589",
  },
  {
    id: 4,
    title: "KLIPSK 床上托盤",
    image: "https://www.ikea.com.tw/dairyfarm/tw/images/226/0922617_PH169155_S4.webp",
    description: "可將平板電腦或書固定在溝槽;你可在床上躺著，也可在沙發及檯上站立工作",
    price: "$329",
    url: "https://www.ikea.com.tw/zh/products/bathroom-accessories/bathroom-towel-solutions/enudden-art-40251666",
  },
  {
    id: 5,
    title: "ENUDDEN 門後掛勾",
    image: "https://www.ikea.com.tw/dairyfarm/tw/images/104/0710492_PE727593_S4.webp",
    description: "所有必備品可以讓浴室空間更實用、更便利；ENUDDEN系列創造明亮、清新風格，有助於整齊收納浴室用品",
    price: "$199",
    url: "https://www.ikea.com.tw/zh/products/bathroom-accessories/bathroom-towel-solutions/enudden-art-40251666",
  },
  {
    id: 6,
    title: " LACK 邊桌",
    image: "https://www.ikea.com.tw/dairyfarm/tw/images/022/0702212_PE724346_S4.webp",
    description: "LACK床邊桌的設計，適合各種用途，而且容易搭配你家中其他家具，沒有違和感",
    price: "$379",
    url: "https://www.ikea.com.tw/zh/products/armchairs-footstool-and-sofa-tables/sofa-tables/lack-art-10449909",
  },
  {
    id: 7,
    title: "RÅSHULT 推車",
    image: "https://www.ikea.com.tw/dairyfarm/tw/images/976/0797699_PE766995_S4.webp",
    description: "堅固的設計，加上4個滑輪，方便將推車推到任何地方。而且體積小巧，不礙地方",
    price: "$799",
    url: "https://www.ikea.com.tw/zh/products/freestanding-kitchens-and-kitchen-furniture/kitchen-furniture/rashult-art-50445990",
  },
  {
    id: 8,
    title: "LENNART 抽屜櫃",
    image: "https://www.ikea.com.tw/dairyfarm/tw/images/842/0984288_PH173822_S4.webp",
    description: "體積小巧，適合放在書桌底下，可放進 A4 紙張的大小，用來收納文件或文具用品都很好用",
    price: "$479",
    url: "https://www.ikea.com.tw/zh/products/home-workspace/storage-for-home-office/lennart-art-10326178",
  },
  {
    id: 9,
    title: "RIGGA 吊衣桿",
    image: "https://www.ikea.com.tw/dairyfarm/tw/images/883/0388386_PE558487_S4.webp",
    description: "可依需求調整成6種高度",
    price: "$499",
    url: "https://www.ikea.com.tw/zh/products/chests-and-other-furniture/complementary-bedroom-furniture/rigga-art-30231631",
  },
  {
    id: 10,
    title: "HYLLIS 層架組",
    image: "https://www.ikea.com.tw/dairyfarm/tw/images/458/0745882_PH156710_S4.webp",
    description: "適合置放花盆和植物，搭配HYLLIS布套就能打造一個溫室",
    price: "$499",
    url: "https://www.ikea.com.tw/zh/products/outdoor-furniture/outdoor-approved-storage/hyllis-art-10428327",
  },
  {
    id: 11,
    title: "RISATORP 置物籃 ",
    image: "https://www.ikea.com.tw/dairyfarm/tw/images/381/1138162_PE879864_S4.webp",
    description: "適合放置工作及閒暇用品，亦可放在浴室或玄關裡收納細小物品",
    price: "$499",
    url: "https://www.ikea.com.tw/zh/products/boxes-and-organisers/boxes-and-baskets/risatorp-art-90530397",
  },
  {
    id: 12,
    title: "LILLHAVET 多功能碗盤架",
    image: "https://www.ikea.com.tw/dairyfarm/tw/images/571/1057177_PE848766_S4.webp",
    description: "聰明的設計，餐具、玻璃杯、馬克杯都放得下",
    price: "$399",
    url: "https://www.ikea.com.tw/zh/products/storing/organisers-and-washing-up/lillhavet-art-60503475",
  },
];

const App = () => {
  return (
    <div className="container mt-5">
      <h1>IKEA 熱門商品</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card">
              {/* 圖片包裹在 <a> 標籤內，實現點擊跳轉 */}
              <a href={product.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text text-primary fw-bold">{product.price}</p>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-100"
                >
                  前往購買
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
