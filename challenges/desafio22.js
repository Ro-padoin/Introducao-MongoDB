db.produtos.updateMany({}, {
  $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] },
});

db.produtos.updateOne({
  nome: { $eq: "Big Mac" },
}, {
  $set: {
    "vendasPorDia.3": 60,
  },
});

db.produtos.updateMany({
  tags: {
    $in: ["bovino"],
  },
}, {
  $set: {
    "vendasPorDia.6": 120,
  },
});

db.produtos.find({}, {
  nome: true, vendasPorDia: true, _id: false,
});