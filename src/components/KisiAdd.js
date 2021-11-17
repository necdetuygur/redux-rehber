import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Add } from "../stores/kisiSlice";
import ToBase64 from "../helpers/ToBase64";

function KisiAdd() {
  const dispatch = useDispatch();

  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [telefon, setTelefon] = useState("");
  const [resim, setResim] = useState("");

  const resimInput = React.createRef();

  const setFile = (e) => {
    ToBase64(e.target.files[0]).then((r) => {
      setResim(r);
    });
  };

  function Save() {
    dispatch(Add({ ad, soyad, telefon, resim }));
    setAd("");
    setSoyad("");
    setTelefon("");
    setResim("");
    resimInput.current.value = null;
  }

  return (
    <div className="card mt-3">
      <div className="card-header">Yeni Kişi Ekle</div>
      <div className="card-body">
        <div className="input-group mb-3">
          <span className="input-group-text">Ad</span>
          <input
            value={ad}
            type="text"
            className="form-control"
            onChange={(e) => setAd(e.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Soyad</span>
          <input
            value={soyad}
            type="text"
            className="form-control"
            onChange={(e) => setSoyad(e.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Telefon</span>
          <input
            value={telefon}
            type="text"
            className="form-control"
            onChange={(e) => setTelefon(e.target.value)}
          />
        </div>
        {resim ? (
          <div className="card text-white bg-secondary mb-3">
            <div className="card-header">Seçilen Resim</div>
            <div className="card-body">
              <img src={resim} alt="" width="100%" className="float-start" />
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="input-group mb-3">
          <span className="input-group-text">Resim</span>
          <input
            ref={resimInput}
            type="file"
            className="form-control"
            onChange={setFile}
          />
        </div>
      </div>
      <div className="card-footer">
        <button className="btn btn-success float-end" onClick={Save}>
          Kaydet
        </button>
      </div>
    </div>
  );
}

export default KisiAdd;
