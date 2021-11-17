import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Remove } from "../stores/kisiSlice";

function KisiList() {
  const kisis = useSelector((state) => state.kisi.value);
  const dispatch = useDispatch();

  function Delete(id) {
    dispatch(Remove(id));
  }

  return (
    <div className="card mt-3">
      <div className="card-header">Kişiler</div>
      {kisis.length > 0 ? (
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead className="table-dark">
                <tr>
                  <th>Resim</th>
                  <th>Ad</th>
                  <th>Soyad</th>
                  <th>Telefon</th>
                  <th>İşlem</th>
                </tr>
              </thead>
              <tbody>
                {kisis.map((kisi) => (
                  <tr key={kisi.id}>
                    <td>
                      <img src={kisi.resim} alt="" width="50" />
                    </td>
                    <td>{kisi.ad}</td>
                    <td>{kisi.soyad}</td>
                    <td>{kisi.telefon}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => Delete(kisi.id)}
                      >
                        Sil
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="card-body text-center">
          <div>Kişi listenizde hiç kayıt yok!</div>
          <div>"Yeni Kişi Ekle" alanından kişi kaydedebilirsiniz.</div>
        </div>
      )}
    </div>
  );
}

export default KisiList;
