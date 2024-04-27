import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAlert, IonButton, IonActionSheet } from '@ionic/react';
import './profile.css';

const profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        
    <IonCard>
      <img src="https://i.pinimg.com/564x/f9/09/a9/f909a9fe14e68f9656c6aceec6375a47.jpg" />
        <IonCardHeader>
          <IonCardTitle>Balsa, Jayson</IonCardTitle>
           <IonCardSubtitle>Student</IonCardSubtitle>
            </IonCardHeader>

      <IonCardContent>WA RA GUD</IonCardContent>

      <IonButton id="present-alert" shape="round" expand="full" color="tertiary">Quick Facts</IonButton>
      <IonAlert
        trigger="present-alert"
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={['Action']}
      ></IonAlert>

<IonButton id="open-action-sheet" shape="round" expand="block" color="tertiary">Open Action Sheet</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>
    </IonCard>
        </IonContent>
      </IonPage>
  );
};

export default profile;