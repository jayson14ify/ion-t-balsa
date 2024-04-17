import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './click-counter.css';

const clickcounter: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Click Counter</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <p>Number of Clicks: {clickCount}</p>
          <IonButton color="tertiary" onClick={handleButtonClick}>CLICK ME!</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default clickcounter;