import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader,
         IonCardSubtitle, IonCardTitle, IonCardContent, IonBackButton, IonButtons, IonNav,  IonImg, 
         IonIcon} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { addOutline, calculatorOutline, chatbubbleOutline, listOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  const history = useHistory();

  const handleCardClick = (route: string) => {
    // Navigate to the desired route when the card is clicked
    history.push(route);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="home-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* First Card */}

        <IonButton onClick={() => handleCardClick('/calculator')} size= "large" fill="clear" color="dark">
            Calculator
         <IonIcon size="large" slot="start" icon={calculatorOutline} ></IonIcon>
        </IonButton>

        {/* Second Card */}
        <IonButton onClick={() => handleCardClick('/click-counter')} size= "large" fill="clear" color="dark">
            Click Counter
            <IonIcon size="large" slot="start" icon={addOutline} ></IonIcon>
        </IonButton>

        {/* Third Card */}
        <IonButton onClick={() => handleCardClick('/TodoList')} size= "large" fill="clear" color="dark">
            To do List
            <IonIcon size="large" slot="start" icon={listOutline} ></IonIcon>
        </IonButton>

        {/* Fourth Card */}
        <IonButton onClick={() => handleCardClick('#')} size= "large" fill="clear" color="dark">
            Blank
            <IonIcon size="large" slot="start" icon={chatbubbleOutline} ></IonIcon>
        </IonButton>
        

      </IonContent>
    </IonPage>
  );
};

export default Home;