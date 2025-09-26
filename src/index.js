// จุดเริ่มต้นของแอปที่ผูก React เข้ากับ DOM หลัก
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// สร้างรากของแอปพลิเคชันจากองค์ประกอบที่มี id = root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// เรียกใช้งาน reportWebVitals หากต้องการวัดผลด้านประสิทธิภาพ
reportWebVitals();
