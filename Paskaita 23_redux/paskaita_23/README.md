## store - globali state talpykla

## slice - store steito dalis uz konkrecia dali(sriti)

## actions -su action pagalba pasakom kokius pakeitimus norime padaryti savo state, actions turi 2 properties: type ir payload

## reducers - priima action ir pagal tai atlieka kazkoki veiksma ant pacio state.Globalus state yra imutable(negalima tiesiogiai keisti). Kai darom pakeitimus redux padaro kopija,atnaujina kopija ir uzdeda ja kaip originala

## reikalingi package - npm i @reduxjs/toolkit redux react-redux
