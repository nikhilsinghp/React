import Nav from "./Nav"
import Layout from "./layout"

const App = ()=>{

  let mobile = [{title:"Samsung Galaxy A35 5G",
    price:"1899",
    rating:"4.4",
    image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/7/s/-original-imahgy26hqbqjfgb.jpeg?q=70"},
    {title:"Smasung Galaxy S24",
      price:"49999",
      rating:"4.6",
      image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/b/d/-original-imahfz2tuqdczpfg.jpeg?q=70"},
    {title:"Motorola Edge 60 Fusion",
      price:"22999",
      rating:"4.6",
      image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/z/x/-original-imahgqnzzgfbyevh.jpeg?q=70"},
    {title:"Apple Iphone 16",
      price:"69900",
      rating:"4.6",
      image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/q/h/-original-imahgfmzjj8gtqbc.jpeg?q=70"},
    {title:"Google Pixel 9A",
      price:"39900",
      rating:"4.4",
      image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/q/f/-original-imahadxg8mgjzrfh.jpeg?q=70"},
  ]

  let laptop=[{
   title: "ASUS TUF Gaming A15 (2025) AMD Ryzen 7 Hexa Core 7445HS - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050/144 Hz) FA506NCG-HN199W Gaming Laptop  (15.6 Inch, Graphite Black, 2.3 Kg)",
    price:"₹69,998" ,
    rating:"4.4" ,
    image:"https://rukminim2.flixcart.com/image/612/612/xif0q/computer/y/t/y/-original-imahgfdfmfhfsqy8.jpeg?q=70"
  },
{
  title:"GIGABYTE G Series Intel Core i7 13th Gen - (16 GB/512 GB SSD/Windows 11 Home/8 GB Graphics/NVIDIA GeForce RTX 4060/165 Hz) G6 KF-H3IN893KH Gaming Laptop  (16 inch, Black, 2.3 kg)",
  price :"₹76,990",
  rating :"4.5",
  image:"https://rukminim2.flixcart.com/image/612/612/xif0q/computer/c/o/9/-original-imahgpr6q9fhesze.jpeg?q=70"
},
{
  title:"Lenovo LOQ Intel Core i5 13th Gen 13450HX - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 4050) 15IRX9 Gaming Laptop  (15.6 inch, Luna Grey, 2.38 Kg, With MS Office)",
  price :"₹86,990",
  rating :"4.3",
  image:"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/d/g/7/-original-imahgfdfrupngmgg.jpeg?q=70&crop=false"
},
{
  title:"HP OMEN Intel Core i7 14th Gen 14650HX - (16 GB/1 TB SSD/Windows 11 Home/8 GB Graphics/NVIDIA GeForce RTX 4060) Omen 16 wf1096TX/ ae0002tx Gaming Laptop  (16.1 inch, Shadow Black, 2.32 Kg, With MS Office)",
  price :"₹1,19,990",
rating :"4.1",
  image:"https://rukminim2.flixcart.com/image/612/612/xif0q/computer/u/y/k/-original-imahg53xak9havxh.jpeg?q=70"
},
{
  title:"Acer Aspire 7 Intel Core i5 13th Gen 13420H - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 3050) A715-79G Gaming Laptop  (15.6 Inch, Black, 1.99 Kg)#JustHere",
price :"₹62,990",
rating :"4.3",
  image:"https://rukminim2.flixcart.com/image/612/612/xif0q/computer/h/2/j/-original-imahg5fuyyb56yhw.jpeg?q=70"
},
{
  title:"DELL Alienware 16 Aurora Intel Core 7 240H - (16 GB/1 TB SSD/Windows 11 Home/8 GB Graphics/NVIDIA GeForce RTX 5050) Alienware 16 Aurora Gaming Gaming Laptop  (16 $inch, Interstellar Indigo, 2.57 Kg, With MS Office)",
price :"₹1,22,990",
rating :"4.0",
  image:"https://rukminim2.flixcart.com/image/612/612/xif0q/computer/z/b/u/-original-imahfr9jgjzwgkcn.jpeg?q=70"
},
{
  title:"MSI Crosshair 16 HX Intel Core i7 14th Gen 14700HX - (32 GB/1 TB SSD/Windows 11 Home/8 GB Graphics/NVIDIA GeForce RTX 4070/240 Hz) Crosshair 16 HX D14VGKG-205IN Gaming Laptop  (16 Inch, Cosmos Gray, 2.5 Kg)",
  price :"₹1,71,990",
  rating :"4.5",
  image:"https://rukminim2.flixcart.com/image/612/612/xif0q/computer/h/r/k/-original-imahg5fxhzbvjgmg.jpeg?q=70"
},
{
  title:"Acer Nitro V AMD Ryzen 5 Hexa Core 6600H - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 3050) ANV15-41-R8G0 Gaming Laptop  (16 inch, Obsidian Black, 2.1 Kg)",
  price :"₹62,990",
  rating :"4.2",
  image:"https://rukminim2.flixcart.com/image/612/612/xif0q/computer/q/o/7/-original-imahg533fnaxrzgz.jpeg?q=70"
}
]

  return <div>
    app
    <Nav></Nav>
    <Layout data={mobile}></Layout>
    <Layout data={laptop}></Layout>
  </div>
}

export default App

