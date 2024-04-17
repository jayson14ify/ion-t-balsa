import {  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
    IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg
  } from '@ionic/react';
  
  const Home: React.FC = () => {
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
  
                {/* Home Content */}
                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle className="bold-text" color="medium">WELCOME TO MY FIRST APP!</IonCardSubtitle>
                        <br/>
                        <IonImg src="https://gifdb.com/images/high/waving-bear-welcome-ut80igngdxwd6ijr.gif" alt="Image" />
                        <br/>
                        <IonCardTitle>My Home Page</IonCardTitle>
                    </IonCardHeader>
  
                    <IonCardContent>
                        <p>This is where you can display your home page content.</p>
                        <IonButton shape="round" expand="block" color="tertiary" routerLink="/profile">Go to Profile</IonButton>
                    </IonCardContent>
                </IonCard>
  
            </IonContent>
        </IonPage>
    );
  };
  
  export default Home;