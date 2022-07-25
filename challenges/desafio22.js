db.produtos.updateMany({}, {
  $addToSet: { vendasPorDia: { $each: [0, 0, 0, 0, 0, 0, 0] } },
});

db.produtos.updateOne({
  nome: { $eq: "Big Mac" },
}, {
  $inc: {
    "vendasporDia.3": 60,
  },
});

db.produtos.updateMany({

}, 
  {
    $inc: {
      "vendasporDia.6": 120,
    },
  });

db.produtos.find({ ultimaModificacao: { $exists: true } }, {
  nome: true, vendasPorDia: true, _id: false,
});