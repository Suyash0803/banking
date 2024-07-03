import React from 'react'
// import format
import { formatAmount } from '@/lib/utils'
import AnimatedCounter from './AnimatedCounter'
import { Doughnut } from 'react-chartjs-2'
import DoughnutChart from './DoughnutChart'
// import CountUp from 'react-countup/build/CountUp'
const BalanceBox = ({accounts=[],totalBanks,totalCurrentBalance}:TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className="total-balance-chart">
            <DoughnutChart accounts={accounts}/>    

        </div>

        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
                Bank Accounts:{totalBanks}
            </h2>
            <div className='flex flex-col gap-2'>
                <p className='total-balance-label'>
                    Total Current Balance
                </p>

                <p className='total-balance-amount flex-center gap-2'>
                    {/* <CountUp end={100}/>
                    {formatAmount(totalCurrentBalance)} */}
                    <AnimatedCounter amount={totalCurrentBalance}/>
                </p>
            </div>
        </div>
    </section>
  )
}

export default BalanceBox