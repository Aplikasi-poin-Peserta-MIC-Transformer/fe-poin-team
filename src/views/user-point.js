import React from 'react'

const UserPoint = () => {
  return (
    <>
      <div className='private-content-wrapper'>
        <div className='content-center'>
          <div className='flext-column'>
            <div className='check-user-point'>
              <form>
                <span className='title'>Nama :</span>
                <div className='kelompok-form-group'>
                  <input type='text' name='nama' className='kelompok-form-control' id='nama' />
                </div>
                <button type='submit' className='btn-primary'>Check</button>
              </form>
              <span className='title'>Nama :</span>
              <div className='kelompok-form-group point-value'>
                <input type='text' value={0} disabled className='kelompok-form-control' />
              </div>
            </div>
          </div>
        </div>
        <div className='btn-refresh'>
          <button className='btn-primary color-green' onClick={() => window.location.reload()}>Refresh</button>
        </div>
      </div>
    </>
  )
}

export default UserPoint