export const performanceData = {
  months: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  portfolio: [10000,10800,10500,11200,11800,12400,12100,13000,13500,14200,13800,15000],
  benchmark: [10000,10300,10200,10600,11000,11400,11200,11800,12100,12500,12300,13000],
};
export const allocationData = {
  labels: ["Stocks","Bonds","Real Estate","Crypto","Cash"],
  values: [45,25,15,10,5],
};
export const kpis = [
  { label: "Total Value",   value: "$15,000", delta: "+50%",  up: true  },
  { label: "Annual Return", value: "18.4%",   delta: "+3.2%", up: true  },
  { label: "Sharpe Ratio",  value: "1.84",    delta: "+0.12", up: true  },
  { label: "Max Drawdown",  value: "-3.2%",   delta: "-0.8%", up: false },
];
export const transactions = [
  { name: "AAPL Buy",      type: "Stock",       amount: "+$1,200", date: "Dec 15", positive: true  },
  { name: "USDT Sell",     type: "Crypto",      amount: "-$800",   date: "Dec 12", positive: false },
  { name: "Bond Purchase", type: "Bond",        amount: "+$2,500", date: "Dec 10", positive: true  },
  { name: "Realty Fund",   type: "Real Estate", amount: "+$3,000", date: "Dec 08", positive: true  },
  { name: "BTC Sell",      type: "Crypto",      amount: "-$450",   date: "Dec 05", positive: false },
];
export const advisors = [
  { name: "Sarah Mitchell", role: "Wealth Manager",     rating: 4.9, clients: 120, avatar: "SM" },
  { name: "David Patel",    role: "Tax Advisor",        rating: 4.7, clients: 95,  avatar: "DP" },
  { name: "Emily Zhao",     role: "Investment Analyst", rating: 4.8, clients: 108, avatar: "EZ" },
];
export const aiResponses: Record<string, string> = {
  default: "Hi! I'm your FinAdvisor AI. Ask me about your portfolio, investments, or financial goals.",
  portfolio: "Your portfolio is up 50% this year! Your top performer is Stocks at 45% allocation. Consider rebalancing if Crypto exceeds 15%.",
  stocks: "You have 45% in stocks. AAPL is your latest buy. Tech stocks have shown strong momentum — your Sharpe ratio of 1.84 is excellent.",
  risk: "Your current risk level is Moderate. Max drawdown is -3.2%, which is well-controlled. Diversification across 5 asset classes is protecting you.",
  advisor: "You have 3 top-rated advisors available. Sarah Mitchell (Wealth Manager, ⭐4.9) is highly recommended for your portfolio size.",
  goal: "You have 4 active financial goals. Based on your 18.4% annual return, you're on track to reach your retirement goal 2 years early!",
};
