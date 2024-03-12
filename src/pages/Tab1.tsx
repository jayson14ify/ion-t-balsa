import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Card</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
      <img alt="Silhouette of mountains" src="https://i.pinimg.com/564x/f9/09/a9/f909a9fe14e68f9656c6aceec6375a47.jpg" />
      <IonCardHeader>
        <IonCardTitle>Nardong Putik</IonCardTitle>
        <IonCardSubtitle>Student</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>

        <ExploreContainer name="" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
