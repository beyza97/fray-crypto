import React from 'react';
import { Button } from "primereact/button";
import { useHistory } from 'react-router-dom';

export const Topbar = () => {
    const history = useHistory();
    return (<>
        <h2>Hisse keşfet</h2>

        <div className='dashboard-topbar'>

            <div className="p-grid" style={{ height: '190px' }}>
                <div className="p-col-2">
                    <Button onClick={() => history.push('/filtering')} style={{ backgroundImage: "url(assets/layout/images/filter.png)", backgroundRepeat: 'no-repeat', backgroundPosition: '50% 20%' }} className="p-button-lg" label="Filtrele" />
                </div>
                <div className="p-col-2">
                    <Button onClick={() => history.push('/compare')} style={{ backgroundImage: "url(assets/layout/images/before-after.png)", backgroundRepeat: 'no-repeat', backgroundPosition: '50% 20%' }} className="p-button-lg" label="Kıyasla" />
                </div>
                <div className="p-col-2">
                    <Button onClick={() => history.push('/scoring')} style={{ backgroundImage: "url(assets/layout/images/star.png)", backgroundRepeat: 'no-repeat', backgroundPosition: '50% 20%' }} className="p-button-lg" label="Puanla" />
                </div>
                <div className="p-col-6" style={{
                    backgroundImage: "linear-gradient(90.15deg, #1F1E1E 3.15%, rgba(23, 23, 23, 0.62) 93.17%), url(assets/layout/images/dashboard-topbar.jpg)",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    marginTop: '6px'
                }}>
                    <p style={{ marginTop: '30px' }}>F-Ray ile hisseleri kolayca </p><p> keşfetmek çok basit!</p>
                </div>
            </div>
        </div>
    </>

    );
}