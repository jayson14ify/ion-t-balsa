import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader,
         IonCardSubtitle, IonCardTitle, IonCardContent, IonBackButton, IonButtons, IonNav,  IonImg, 
         IonIcon} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { addOutline, calculatorOutline, chatbubbleOutline, clipboardOutline, documentTextOutline, listOutline } from 'ionicons/icons';

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

     <div className="calcu">
        <IonButton onClick={() => handleCardClick('/calculator')} size= "large" fill="clear" color="dark">
            Calculator
         <IonIcon size="large" slot="start" icon={calculatorOutline} ></IonIcon>
        </IonButton>
     </div>

        {/* Second Card */}

      <div className="clickcount">
        <IonButton onClick={() => handleCardClick('/click-counter')} size= "large" fill="clear" color="dark">
            Click Counter
            <IonIcon size="large" slot="start" icon={addOutline} ></IonIcon>
        </IonButton>
      </div>

        {/* Third Card */}

      <div className="Todo">
        <IonButton onClick={() => handleCardClick('/TodoList')} size= "large" fill="clear" color="dark">
            To do List
            <IonIcon size="large" slot="start" icon={clipboardOutline} ></IonIcon>
        </IonButton>
      </div>

        {/* Fourth Card */}

      <div className="quotegen">
        <IonButton onClick={() => handleCardClick('/quotegenerator')} size= "large" fill="clear" color="dark">
            Quote Generator
            <IonIcon size="large" slot="start" icon={chatbubbleOutline} ></IonIcon>
        </IonButton>
      </div> 

        {/* Fifth Card */}

      <div className="notes">
        <IonButton onClick={() => handleCardClick('/notes')} size= "large" fill="clear" color="dark">
            Notes
            <IonIcon size="large" slot="start" icon={documentTextOutline} ></IonIcon>
        </IonButton>
      </div> 

      </IonContent>
    </IonPage>
  );
};

export default Home;