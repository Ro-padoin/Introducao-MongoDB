db.produtos.updateOne({
  nome: "Big Mac",
}, {
  $set: { ultimaModificacao: {
    $currentDate: { $type: "timestamps" },
  } },
});

db.produtos.find({ ultimaModificacao: { $exists: true } }, {
  nome: true, _id: false,
});