import React, { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Tokens = () => {
  const { currentAccount } = useContext(TransactionContext);
  const [tokens, setTokens] = useState([]);

  const getResult = async () => {
    await fetch(
      `https://deep-index.moralis.io/api/v2/${currentAccount}/erc20?chain=rinkeby`,
      {
        headers: {
          Accept: "application/json",
          "X-Api-Key":
            "W99729MHpqOS7uVYVFu1rXDV2uxK39MC2XWivmY1oZyF5VduWgxGWrDjAn0JH18X",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setTokens(data);
      });
  };
  getResult();

  return (
    <>
      <div className="flex flex-col special-bg">
        <div className="overflow-x-auto sm:-mx-6">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b">
                  <tr>
                    <th className="text-sm font-medium text-white px-6 py-4">
                      Name
                    </th>
                    <th className="text-sm font-medium text-white px-6 py-4">
                      Symbol
                    </th>
                    <th className="text-sm font-medium text-white px-6 py-4">
                      Balance
                    </th>
                    <th className="text-sm font-medium text-white px-6 py-4">
                      Address
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tokens.length > -1 &&
                    tokens.map((token) => (
                      <tr key={token.symbol} className="border-b">
                        <td className="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                          {token.name}
                        </td>
                        <td className="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                          {token.symbol}
                        </td>
                        <td className="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                          {token.balance / 10 ** 18}
                        </td>
                        <td className="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                          {token.token_address}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokens;
