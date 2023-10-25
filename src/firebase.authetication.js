{
  /*Fazendo Importes necessario*/
}
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

{
  /*Definindo as configurações do firebase */
}

const firebaseConfig = {
  apiKey: "AIzaSyDi8TZf9MyWX3aHEhw2DlSgG8IlOWAdWa0",
  authDomain: "soulcode-c6a39.firebaseapp.com",
  projectId: "soulcode-c6a39",
  storageBucket: "soulcode-c6a39.appspot.com",
  messagingSenderId: "192625342959",
  appId: "1:192625342959:web:fde512666030e320ee1e1a",
  measurementId: "G-E82B2GRJ9W"
};
{
  /*Inicializado o firebase*/
}
const app = initializeApp(firebaseConfig);

{
  /*Exportando o objeto author e app */
}
export const auth = getAuth(app);
export default app;
