export type Transaction = {
  id: number;
  text: string;
  amount: number;
};

export type Stat = {
  name: string;
  value: number;
  change: number;
  changeType: "positive" | "negative";
};
