## API

### GET /

Ping the API.

**Response :**

```
Welcome on String Analyzer API !
```

### GET /analyze

Should return an analysis of the string sent as query.

**Query parameters :**

- string: the string to analyze

**Response :**

```
{
  "length": 10,
  "words": 3,
  "vowels": 4,
  "consonants": 6,
}
```
