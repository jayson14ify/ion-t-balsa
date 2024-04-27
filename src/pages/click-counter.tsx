import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons, IonCard } from '@ionic/react';
import './click-counter.css';

const clickcounter: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  const resetCounter = () => {
    setClickCount(0);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Click Counter</IonTitle>
          <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Click Counter</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* <IonCard>
      <img src="https://clickcounter.io/assets/logo-clickcounter.io.png" />
        </IonCard> */}

        <div className="container">
          <h4>Number of Clicks: {clickCount}</h4>
          <IonButton shape="round" expand="block" color="tertiary" onClick={handleButtonClick}>CLICK ME!</IonButton>
        </div>
     <div className="resetbutton">
              <IonButton shape="round" expand="block" color="tertiary" onClick={resetCounter}>Reset</IonButton>
     </div>
      </IonContent>
    </IonPage>

  );
};

export default clickcounter;