export default function handler(req, res) {
  res.status(200).json({
    bitcoin: { price: 42000, change: 2.5 },
    paxg: { price: 1950, change: -0.4 }
  });
}
