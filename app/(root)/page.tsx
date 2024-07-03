import HeaderBox from '@/components/HeaderBox/page'
import React from 'react'
import BalanceBox from '@/components/BalanceBox';
const Home= () => {
  const loggedIn = {firstName: 'John'};
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox type="greeting" title="Welcome" user={loggedIn?.firstName} subtext="Access and manage ur account"/>
          <BalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35}/>
        </header>
      </div>
    </section>
  )
}

export default Home