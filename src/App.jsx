import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';
import profile from './assets/profile.png'
import axios from 'axios';

const endpoint = 'https://sheetdb.io/api/v1/xy9jp2v8n33zt'

function App() {
  const [hide, setHide] = useState(false)
  const [data, setData] = useState([])
  
  const callApi = async () => {
    const d = await axios.get(endpoint).then((response) => {
      console.log('response', response)
      const data = response.data
      setData(data)
    })
    console.log('success', d)
  }

  useEffect(() =>{
    callApi()
  },[])

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image={profile}/>

        <Title title="Charinrat  Saleengam (Nam)">
          <h3>Frontend</h3>
        </Title>

        <Title title="Contact">
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2003/04/24").format("D MMM YYYY")}</p>
          <p style={{display: hide ? 'none': 'block'}}>
            Tel : +666401282800
          </p>
          <button onClick={() => setHide(!hide)}>{hide ? 'Show': 'Hide'}</button>
          <p>Email : s64122202013@ssru.ac.th</p>
          <p>www.s64122202013@ssru.com</p>
        </Title>

        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p>
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>สวัสดีค่ะ ดิฉัน นางสาวชรินทร์รัตน์ สาลีงาม ปัจจุบันศึกษาอยู่ชั้นปีที่ 3 สาขาเทคโนโลยีสารสนเทศ ดิฉันมีความสนใจในด้านการออกแบบ การสร้างคอนเทนต์ ดิฉันหวังว่าจะได้รับโอกาสจากทางองค์กรในการรับเข้าฝึกงานเพื่อนำประสบการณ์มาปรับใช้ในการทำงานในอนาคต พร้อมทั้งนำมาต่อยอดความรู้ในการพัฒนาตัวเอง</p>
        </Title>

        <Title title="Work Experience">
        <h3>2565</h3>
        <p>บริษัท เอ.ที คอสเมติค แอนด์ เมดิคอล ซัพพลาย</p>
        <p>• เช็คสินค้า จัดสินค้าตามบิล</p>
        <h3>2565</h3>
        <p>ร้าน MIRUKU</p>
        <p>• เป็นพนักงานพารท์ไทม์</p>
        </Title>

        <Title title="Skills">
          <p>Canva</p>
          <p>Microsoft Office</p>
          <p>Adobe Photoshop</p>
          <p>Wordpress</p>
          <p>Capcut</p>
        </Title>

      </div>
    </main>
  )
}

export default App
