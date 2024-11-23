# Aktuální stav 
### Dokumentace je prakticky hotová. Frontend s Mocky a simulovaným voláním backendu je hotov. Zbývají drobné detaily pro úplné doknočení dokumentace i frontendu s mocky. Tým najíždí na propojování frontendu s backendem. 

# 🛠️ Rozdělení Úkolů
- Před implementací si budete muset zjistit jména funkcí a endpointů na backendu (psal jsem to tam podle toho, co by náš frontend měl potřebovat) 

## Silvia

### Propojit routu create-play s backendem

| Úkol                                        | Priorita | Stav | Termín   |
|---------------------------------------------|----------|------|----------|
| **getPlays** - Získání seznamu her           | 🔴       | 🚧   | 7. 12. |
| **getActors** - Získání seznamu herců         | 🔴       | 🚧   | 7. 12. |
| **getScenesByPlay** - Získání scén podle hry  | 🔴       | 🚧   | 7. 12. |
| **createScene** - Vytvoření nové scény        | 🔴       | 🚧   | 7. 12. |
| **updateScene** - Aktualizace scény           | 🟡       | 🚧   | 7. 12. |
| **deleteScene** - Smazání scény               | 🟡       | 🚧  | 7. 12. |
| **assignActorToFigure** - Přiřazení herce k postavě ve scéně | 🔴       | 🔜   | 14. 12. |
| **finishSceneConfiguration** - Dokončení konfigurace scény | 🟡       | 🔜   | 14. 12. |
| **finishPlayConfiguration** - Dokončení konfigurace hry | 🟡       | 🔜   | 14. 12. |



---

## Jindra

### Propojit routu dashboard s backendem

| Úkol                                          | Priorita | Stav | Termín   |
|-----------------------------------------------|----------|------|----------|
| **getActors** - Získání seznamu herců               | 🔴       | 🚧   | 7. 12. |
| **getPlays** - Získání seznamu her                  | 🔴       | 🚧   | 7. 12. |
| **getScenesByPlay** - Získání scén podle hry         | 🔴       | 🚧   | 7. 12. |
| **getRehearsals** - Získání seznamu zkoušek          | 🔴       | 🚧   | 7. 12. |
| **getLocations** - Získání seznamu lokalit           | 🔴       | 🚧   | 7. 12. |
| **createRehearsal** - Vytvoření nové zkoušky         | 🔴       | 🚧   | 7. 12. |
| **updateRehearsal** - Aktualizace zkoušky            | 🔴       | 🚧   | 7. 12. |
| **deleteRehearsal** - Smazání zkoušky                | 🔴       | 🚧   | 7. 12. |
| **updatePresenceStatus** - Aktualizace stavu přítomnosti herce na zkoušce | 🔴       | 🚧   | 10. 12. |
| **createLocation** - Vytvoření nové lokality          | 🔴       | 🔜   | 14. 12. |
| **updateLocation** - Aktualizace lokality             | 🟡       | 🔜   | 14. 12. |
| **deleteLocation** - Smazání lokality                 | 🟡       | 🔜   | 14. 12. |
| **setActiveLocation** - Nastavení lokality jako aktivní | 🟡       | 🔜   | 14. 12. |
| **setInactiveLocation** - Nastavení lokality jako neaktivní | 🟡       | 🔜   | 14. 12. |
| **createNotification** - Vytvoření nové notifikace   | 🟢       | 🔜   | 14. 12. |
| **markNotificationAsSeen** - Označení notifikace jako přečtené | 🟢       | 🔜   | 14. 12. |
| **getNotifications** - Získání seznamu notifikací pro uživatele | 🟢       | 🔜  | 14. 12. |



---

## Patrik

### Dodělat dokumentaci frontendu

| Úkol                                               | Priorita | Stav | Termín   |
|----------------------------------------------------|----------|------|----------|
| - Dokumentace jednotlivých komponent - dashboard     | 🔴       | 🚧   | 27. 11. |
| - Dokumentace jednotlivých komponent - create-play   | 🔴       | 🚧   | 27. 11. |
| - Pomoci Jindrovi a Sisi s propojováním frontendu s backendem   | 🔴       | 🚧   | 14. 12. |



---

## Fanda

| Úkol                                                    | Priorita | Stav | Termín   |
|---------------------------------------------------------|----------|------|----------|
| Poklikat všechno ve SprintManovi                         | 🔴       | 🚧   | 25. 11. |
| Doupravit detaily frontendu s mocky                      | 🔴       | 🚧   | 26. 11. |
| Naplánovat další kroky                                    | 🟡       | 🚧   | 27. 11. |
| Dát nový frontend do našeho školního repa                                    | 🟡       | 🚧   | 27. 11. |
| Naplánovat poslední sprint                                | 🟡       | 🔜   | 2. 12. |
| Meeting pro ukázku frontendu s mocky vývojářům           | 🟡       | 🔜   | ?. 12. |
| Pomáhat, kde je potřeba         | 🟡       | 🚧   | ?. 12. |

---

## 📝 Význam ikon 

- **Stav:**
  - **🚧** – Pracuje se na tom
  - **🔜** – K zahájení
  - **✅** – Dokončeno

- **Priorita:**
  - **🔴** – Vysoká
  - **🟡** – Střední
  - **🟢** – Nízká

---

### Produkční účet 
- Budete potřebovat založit produkční účet
- Jedině produkční účet udrží stabilní přihlášení na frontendu
- [Produkční účet](https://uuapp-dev.plus4u.net/uu-identitymanagement-maing01/58ceb15c275c4b31bfe0fc9768aa6a9c/registration?acrValues=standard%20high%20veryHigh&clientId=uu-oidc%3Aunregistered-client%3Alocalhost&uiLocales=en-gb&state=h4EiR6340-KAR_1G.FrPXaOW_kAHZ1df5yGXgC7QRq5RDWldcmPhkQbwBjcylZEd0nDYbnjAfIshycR-FCf1kVF674yzX_yLvdFVrKqEc9pedn7b5ofZ9eUhQKsbOtZDjT4aySb1ATZhYLY0Svne31vvzF4INykT7jmH_xtj2knk5QKtZnP4CK8_qfru0hw2N1y08HzL4GcQScfBtjot7DBN7RCkCg5wfrpE5Dy6orGsHNCF293Z4iOshFL6DF83naCWY9NA0xEmLIkPmX5KU9BhQF6xVDFt7sKQhw6W-qlFqMNsCMnPA1xgW1OUs4w6HJsQTLRtrvhBzmVh-cr4ouKgm2QHHIEUxvu1rTdxW-bzcoQC4QbTleJirEVn3eqXsSutpXrH1A_0BUeIYycuuu9wfNOYX5SaMymjJXLcN9D8Gec7Dx5HLnNKWNyj15iQxMwU1CuNE6Ww1k9ixuxJef8x8HtEz09r8i9qk4Lmnd-FQ7rMDP9KrahZ8rtXj2i32_wIB_LNeaeoyVtE%3D)

---

### Učební materiál
- [Komponenty uu5](https://uuapp.plus4u.net/uu-bookkit-maing01/05ecbf4e8bca405290b1a6d4cee8813a/book/page?code=home)
- [Uživatelská příručka uu5](https://uuapp.plus4u.net/uu-bookkit-maing01/2d79ffe54e8e406b9e542c14a67f4cb4/book/page?code=home)
- [React dokumentace](https://react.dev/learn)

---

### Aplikační model (Dokumentace)
- [Routy](https://uuapp.plus4u.net/uu-managementkit-maing02/38744216cb324edca986789798259ba9/document?oid=67068641590f3b66b6cb700b&pageOid=6706864a590f3b66b6cb708e)
- [Dashboard komponenty](https://uuapp.plus4u.net/uu-managementkit-maing02/38744216cb324edca986789798259ba9/document?oid=67068641590f3b66b6cb700b&pageOid=6706864a590f3b66b6cb709b)
- [CreatePlay komponenty](https://uuapp.plus4u.net/uu-managementkit-maing02/38744216cb324edca986789798259ba9/document?oid=67068641590f3b66b6cb700b&pageOid=67264fe35d90e7bb6ce1b1c8)
