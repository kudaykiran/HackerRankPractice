# HackerRankPractice

[![Build Status](https://travis-ci.org/AmitKRSaha/HackerRankPractice.svg?branch=master)](https://travis-ci.org/AmitKRSaha/HackerRankPractice)


[![Test Coverage](https://api.codeclimate.com/v1/badges/fe7b5f5901ba5333ec9f/test_coverage)](https://codeclimate.com/github/AmitKRSaha/HackerRankPractice/test_coverage)

Need to install locally
```

npm install travis

```

Old Setting :

```

before_script:
  - yarn global add nyc
  - curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 > ./cc-test-reporter
  - chmod +x ./cc-test-reporter
  - ./cc-test-reporter before-build

script:
  - nyc --reporter=lcov yarn run test

after_script:
  - ./cc-test-reporter after-build --exit-code $TRAVIS_TEST_RESULT

notifications:
  email: false
```
