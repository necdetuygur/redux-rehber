import ls from "./LocalStorage";

let kisis = ls("kisis") || [];

const Kisi = {
  Add: function (ad, soyad, telefon, resim) {
    kisis.push({
      id: "KisiID_" + new Date() * 1,
      ad,
      soyad,
      telefon,
      resim,
    });
    ls("kisis", kisis);
  },
  Remove: function (id) {
    const index = kisis
      .map((x) => {
        return x.id;
      })
      .indexOf(id);
    kisis.splice(index, 1);
    ls("kisis", kisis);
  },
  GetAll: function () {
    return ls("kisis");
  },
};

export default Kisi;
