# fidel-client

## Decisions:
- ### AntDesign:
  No particular reason, honestly. Since I could choose any tool for styling and I didn't want to lose much time with styling details, I went with AntDesign.

- ### Sass:
  Nested syntax and variables

- ### `.then()` and `.catch()`
  Just preference, Is the way I like to read Promises (and to avoid "Callback Hell").
  Also, there weren't so many chained promises(In fact there were none), if there was, I would've used `try` and `catch` to give a more "synchronous manner" to those promises.
