import React from 'react';
import './Base.css'; // CSS 파일을 import

const App = () => {
  // 예시 데이터 배열
  const tableData = [
    {
      number: '997124',
      id: '박충식',
      id1: '박충자',
      number1: '010-7534-8321',
      address: '강원도 강릉시 강변로470번길 15(입암동)',
    },
    {
      number: '997125',
      id: '김문정',
      id1: '김윤식',
      number1: '010-8310-9245',
      address: '경상북도 군위군 군위읍 서금로 805-103 39016 ',
    },
    {
      number: '997126',
      id: '곽재홍',
      id1: '곽소룡',
      number1: '010-3256-0521',
      address: '경상북도 성주군 수륜면 작은길 99 40065 ',
    },
  ];

  return (
    <div className="base-container">
      <div className="main-header">
        <h1>학교 이름 로고</h1>
      </div>
      <div className="content-container">
        <div className="left-panel">
          <h2>출결 관리</h2>
          {/* 출결 관리 내용 */}
        </div>
        <div className="centered">
          <h2>학생 관리</h2>
          <table className="styled-table">
            <thead>
              <tr>
                <th>학번</th>
                <th>이름</th>
                <th>보호자</th>
                <th>전화번호</th>
                <th>주소</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.number}</td>
                  <td>{row.id}</td>
                  <td>{row.id1}</td>
                  <td>{row.number1}</td>
                  <td>{row.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
