import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonInput } from '@ionic/react';
import './calculator.css';

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (value: string) => {
    if (displayValue === '0' && value !== '.') {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  const handleClearClick = () => {
    setDisplayValue('0');
  };

  const handleCalculate = () => {
    try {
      // Evaluate the expression using JavaScript's eval function (not recommended for production)
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid className="calculator">
          <IonRow>
            <IonCol size="12">
              <IonInput className="display" value={displayValue} readonly={true}></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonButton color="tertiary" onClick={() => handleButtonClick('7')}>7</IonButton></IonCol>
            <IonCol><IonButton color="tertiary" onClick={() => handleButtonClick('8')}>8</IonButton></IonCol>
            <IonCol><IonButton color="tertiary" onClick={() => handleButtonClick('9')}>9</IonButton></IonCol>
            <IonCol><IonButton color="tertiary" onClick={handleClearClick}>C</IonButton></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonButton color="tertiary" onClick={() => handleButtonClick('4')}>4</IonButton></IonCol>
            <IonCol><IonButton color="tertiary" onClick={() => handleButtonClick('5')}>5</IonButton></IonCol>
            <IonCol><IonButton color="tertiary" onClick={() => handleButtonClick('6')}>6</IonButton></IonCol>
            <IonCol><IonButton color="tertiary" onClick={() => handleButtonClick('/')}>/</IonButton></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonButton color="tertiary" onClick={() => handleButtonClick('1')}>1</IonButton></IonCol>
            <IonCol><IonButton color="tertiary" onClick={() => handleButtonClick('2')}>2</IonButton></IonCol>
            <IonCol><IonButton color="tertiary" onClick={() => handleButtonClick('3')}>3</IonButton></IonCol>
            <IonCol><IonButton color="tertiary" onClick={() => handleButtonClick('*')}>*</IonButton></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonButton color="tertiary" onClick={() => handleButtonClick('0')}>0</IonButton></IonCol>
            <IonCol><IonButton color="tertiary" onClick={() => handleButtonClick('.')}>.</IonButton></IonCol>
            <IonCol><IonButton color="tertiary" onClick={handleCalculate}>=</IonButton></IonCol>
            <IonCol><IonButton color="tertiary" onClick={() => handleButtonClick('+')}>+</IonButton></IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12"><IonButton color="tertiary" onClick={() => handleButtonClick('-')}>-</IonButton></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Calculator;