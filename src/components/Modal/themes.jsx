import React from 'react'

function index({changeTheme, theme}) {
  return (

<dialog id="my_modal_2" className="modal">
    <div className="modal-box">
        <h3 className="font-bold text-lg">Themes</h3>
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">light</span>
                <input 
                    type="checkbox" 
                    checked={theme == 'light' ? true : false} className="checkbox checkbox-primary" 
                    onClick={() => changeTheme('light')}
                />
            </label>
        </div>
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">dark</span>
                <input 
                    type="checkbox" 
                    checked={theme == 'dark' ? true : false} className="checkbox checkbox-primary" 
                    onClick={() => changeTheme('dark')}
                />
            </label>
        </div>
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">cupcake</span>
                <input 
                    type="checkbox" 
                    checked={theme == 'cupcake' ? true : false} className="checkbox checkbox-primary" 
                    onClick={() => changeTheme('cupcake')}
                />
            </label>
        </div>
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">cyberpunk</span>
                <input 
                    type="checkbox" 
                    checked={theme == 'cyberpunk' ? true : false} className="checkbox checkbox-primary" 
                    onClick={() => changeTheme('cyberpunk')}
                />
            </label>
        </div>
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">cyberblue</span>
                <input 
                    type="checkbox" 
                    checked={theme == 'cyberblue' ? true : false} className="checkbox checkbox-primary" 
                    onClick={() => changeTheme('cyberblue')}
                />
            </label>
        </div>
    </div>
    <form method="dialog" className="modal-backdrop">
        <button>close</button>
    </form>
</dialog>
  )
}

export default index