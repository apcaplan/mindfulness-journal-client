#!/bin/bash

curl "http://localhost:4741/entries/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "entry": {
      "date": "'"${DATE}"'",
      "length_of_practice": "'"${LENGTH}"'",
      "name_of_practice": "'"${PRACTICE}"'",
      "notes": "'"${NOTES}"'"
    }
  }'

echo
