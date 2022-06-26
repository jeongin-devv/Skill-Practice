import React from 'react';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';

const Index = () => {
  const text = 'd';
  console.log(text);
  return (
    <>
      <div className="status-bar">
        <div className="status-bar__column">
          <span>No Service</span>
          <i className="fas fa-wifi" />
        </div>
        <div className="status-bar__column">
          <span>18:43</span>
        </div>
        <div className="status-bar__column">
          <span>110%</span>
          <i className="fas fa-battery-full fa-lg" />
          <i className="fas fa-bolt" />
        </div>
      </div>

      <LoginHeader />
      <LoginForm />

      <div id="no-mobile">
        <span>Your screen is too big ㅠㅠ</span>
      </div>
    </>
  );
};

export default Index;
