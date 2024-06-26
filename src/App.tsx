import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cafeOutline, calculatorOutline, chatbubbleEllipses, ellipse, home, informationCircle, personCircleOutline, personOutline, speedometerOutline, square, triangle } from 'ionicons/icons';

// Home resources
import Home from './pages/home';

import Profile from './pages/profile';
import ClickCounter from './pages/click-counter';
import Calculator from './pages/calculator';
import TodoList from './pages/TodoList';
import QuoteGenerator from './pages/quotegenerator';
import Notes from './pages/notes/notes';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          
          {/* Application default route */}
          <Route exact path="">
            <Redirect to="/ion-t-balsa/home" />
          </Route>

          {/* Home Router */}
          <Route exact path="/ion-t-balsa/home">
            <Home />
          </Route>

          <Route exact path="/ion-t-balsa/profile">
            <Profile />
          </Route>
          <Route exact path="/ion-t-balsa/click-counter">
            <ClickCounter />
          </Route>
          <Route path="/ion-t-balsa/calculator">
            <Calculator />
          </Route>
          <Route exact path="/ion-t-balsa/Todolist">
            <TodoList />
          </Route>
          <Route exact path="/ion-t-balsa/quotegenerator">
            <QuoteGenerator />
          </Route>
          <Route exact path="/ion-t-balsa/notes">
            <Notes />
          </Route>

        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          {/* Home Tab Button */}
          <IonTabButton tab="home" href="/ion-t-balsa/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

     
          <IonTabButton tab="Click-Counter" href="/ion-t-balsa/profile">
            <IonIcon aria-hidden="true" icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
    
        </IonTabBar>


      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;