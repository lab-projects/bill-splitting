
import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";

import ThemeContainer from "./contexts/theme/ThemeContainer";
import PopupContainer from "./contexts/popup/PopupContainer";
import BillContainer from "./contexts/bills/BillsContainer";
import Main from "./views/Main/Main";

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeContainer>
      <PopupContainer>
        <BillContainer>
          <Main />
        </BillContainer>
      </PopupContainer>
    </ThemeContainer>
  );
};

export default App;
