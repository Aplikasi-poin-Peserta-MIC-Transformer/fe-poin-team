import React from 'react'
// import event_logo_home from '../../assets/event-logo-home.png'
import { useAuthContext } from '../../context/authContext';

const AddMembers = () => {
  const { user } = useAuthContext();
  // const [isAlert, setIsAlert] = React.useState(false);
  // const [showAlert, setShowAlert] = React.useState(null)
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsAlert(true);
  //   const data = Array.from(Array(15).keys()).map((idx) => ({
  //     nama_anggota: e.target[`nama_anggota_${idx}`].value,
  //     nomor_wa: e.target[`nomor_wa_${idx}`].value,
  //   }))
  //   console.log(data);
  //   setShowAlert(
  //     <div className='success-register'>
  //       <div className='middle-logo-contain'>
  //         <img src={event_logo_home} alt='' className='event-logo' />
  //       </div>
  //       <span>SELAMAT TEAM SUDAH TERDAFTAR</span>
  //     </div>
  //   )
  // }

  // React.useEffect(() => {
  //   if (isAlert) {
  //     setTimeout(() => {
  //       setShowAlert(null);
  //       setIsAlert(false);
  //     }, 2000);
  //   }
  // }, [isAlert])




  const [inputList, setinputList] = React.useState([{ firstName: '', lastName: '' }]);

  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);

  }

  const handleremove = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  }

  const handleaddclick = () => {
    setinputList([...inputList, { firstName: '', lastName: '' }]);
  }
  return (
    <>
      <span className='info-title'>HALO, SELAMAT PAGI</span>
      <span className='info-title mb-3'>{user?.nama_tim}</span>
      {/* <div className='flext-column'>
        <form onSubmit={handleSubmit}>
          <div className='kelompok'>
            <span className='kelompok-title'>Nama Anggota :</span>
            <span className='kelompok-title'>No WA :</span>
          </div>
          <div className='kelompok'>
            {Array.from(Array(15).keys()).map((idx) => (
              <React.Fragment key={idx}>
                <div className='kelompok-form-group'>
                  <input type='text' name={`nama_anggota_${idx + 1}`} className='kelompok-form-control' placeholder={`Nama Tim ${idx + 1}`} id={`nama_anggota-${idx + 1}`} />
                </div>
                <div className='kelompok-form-group'>
                  <input type='text' name={`nomor_wa_${idx + 1}`} className='kelompok-form-control' placeholder={`No Wa`} id={`nomor_wa-${idx + 1}`} />
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className='content-center' style={{ marginBottom: "3rem" }}>
            <button type='submit' className='btn-primary' style={{ width: "100%" }}>Tambah Member</button>
          </div>
        </form>
        {showAlert}
      </div> */}




      {
        inputList.map((x, i) => {
          return (
            <div className="" key={i}>
              <div className='input-item' style={{ display: "grid", gridGap: "10px"}}>
                <div className="form-group">
                  <label >Nama Anggota</label>
                  <input type="text" name="firstName" className="form-control" placeholder="Nama Anggota" onChange={e => handleinputchange(e, i)} />
                </div>
                <div className="form-group">
                  <label >No WA</label>
                  <input type="text" name="lastName" className="form-control" placeholder="No WA" onChange={e => handleinputchange(e, i)} />
                </div>
              </div>
              <div className="form-group mt-2 d-flex justify-content-end">
                {
                  inputList.length !== 1 &&
                  <button className="btn btn-danger" onClick={() => handleremove(i)}>Remove</button>
                }
                {inputList.length - 1 === i &&
                  <button className="btn btn-success mx-3" onClick={handleaddclick}>Add More</button>
                }
              </div>
            </div>
          );
        })}
    </>
  )
}

export default AddMembers