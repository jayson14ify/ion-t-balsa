import ExploreContainer from '../components/ExploreContainer';
import {
    //Initial Components
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

    //CSS
    //import './Tab1.css';

 const Home: React.FC = () => {
   return (
     <IonPage>
       <IonHeader>
         <IonToolbar>
           <IonTitle>Home</IonTitle>
         </IonToolbar>
       </IonHeader>
             <ExploreContainer name="Welcome to My Home Page" />
       <IonContent fullscreen>
         <IonHeader collapse="condense">
           <IonToolbar>
             <IonTitle size="large">Home</IonTitle>
           </IonToolbar>
         </IonHeader>
     </IonContent>
     </IonPage>
   );
 };
 
 export default Home;
 