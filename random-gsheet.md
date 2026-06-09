# Random Google Sheet Formula


## Emoji for Sat & Sun

```txt
=IFS(LEFT(A1, 3) = "Sat", "🏖", LEFT(A1, 3) = "Sun", "🏖", TRUE, "")
```
