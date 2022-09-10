import { ethers } from "ethers"
import { useState } from "react"

const Table = () => {
  const [transactions, setTransactions] = useState([""])

  // const provider = new ethers.providers.WebSocketProvider(process.env.REACT_APP_RPC!)
  // provider.on("pending", async (tx) => {
  //   setTransactions(transactions => [...transactions, tx])
  //   const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/3F2Nbk85VHaxw4c17PtxEdGhyD0rpPal")
  //   const transactionInfo = await provider.getTransaction(tx)
  //   console.log(transactionInfo)
  // })

  return (
    <div className='max-w-[1240px] mx-auto px-4 text-white'>
          <h2 className='w-full text-2xl text-white font-bold'>
              Transactions
          </h2>
          <div className='mt-10'>
            <table className="table-auto text-left text-xl">
            <thead>
                <tr>
                <th className='text-[#00df9a]'>Hash</th>
                <th className='text-[#00df9a]'>Platform</th>
                <th className='text-[#00df9a]'>Category</th> 
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>1961</td>
                <td>1961</td>
                </tr>
            </tbody>
            </table>
          </div>
    </div>
  )
}

export default Table