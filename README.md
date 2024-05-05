# gpt4gui

interfaccia grafica per utilizzare le api messse a disposizione da openai e sfruttare le capacità di gpt4 senza disporre di un abbonamento mensile, ma pagando per l'utilizzo effettivo

## imposta variabile d'ambiente

per poter runnare l'applicazione, è necessario creare una variabile d'ambiente **openai_key** al cui interno inserire la key fornita da openai alla creazione del proprio account

fatto ciò, avviare **core.py** presente sotto gpt4gui > gpt4be e, successivamente, l'applicazione angular

## problemi di lentezza

sul branch **master** è possibile testare il funzionamento di quanto descritto in precedenza.
al momento, però, non è ancora stata implementata la chiamata all'api in modalità **stream**: di conseguenza si riscontreranno problemi di lentezza proporzionali alla complessità del prompt inserito

la chiamata dell'api in stream è in corso di sviluppo sul branch **feature-response-stream**

## sviluppi futuri

una volta implementata la modalità stream, verrà data priorità alla presentazione grafica della risposta ricevuta dal back end, gestendo il parsing di quest'ultima