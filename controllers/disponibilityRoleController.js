const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getDisponibility = catchAsync(async (req, res, next) => {
  if (!req.body) {
    return next(new AppError('Please provide a body with parameters to range the disponibility', 400));
  }

  const getDateFilter = req.body.query.bool.filter[1].range['@timestamp'].gte;

  if (!getDateFilter) {
    return next(new AppError('Please provide a time interval (by day, month or year)', 400));
  }

  let valueToReturn = {};
  if (getDateFilter === 'now-1d/d') {

    valueToReturn = {
      "took": 2,
      "timed_out": false,
      "_shards": {
        "total": 5,
        "successful": 5,
        "skipped": 0,
        "failed": 0
      },
      "hits": {
        "total": {
          "value": 10000,
          "relation": "gte"
        },
        "max_score": null,
        "hits": []
      },
      "aggregations": {
        "2": {
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0,
          "buckets": [{
              "key": "adapter-allbesmart",
              "doc_count": 39435,
              "1": {
                "value": 1.0
              }
            },
            {
              "key": "adapter-it-veolia-transdev",
              "doc_count": 39435,
              "1": {
                "value": 1.0
              }
            },
            {
              "key": "devo-adapter-reader",
              "doc_count": 39435,
              "1": {
                "value": 0.999822492709522
              }
            },
            {
              "key": "dseptest",
              "doc_count": 39435,
              "1": {
                "value": 0.9940154684924559
              }
            },
            {
              "key": "dsepcovilha",
              "doc_count": 39435,
              "1": {
                "value": 0.9802966907569418
              }
            },
            {
              "key": "adapter-ALB-environment",
              "doc_count": 39435,
              "1": {
                "value": 0.9794598706732598
              }
            },
            {
              "key": "devo-adapter-writer",
              "doc_count": 39435,
              "1": {
                "value": 0.38841130975022187
              }
            }
          ]
        }
      }
    }
  } else if (getDateFilter === 'now-1m/m') {
    valueToReturn = {
      "took": 39,
      "timed_out": false,
      "_shards": {
        "total": 5,
        "successful": 5,
        "skipped": 0,
        "failed": 0
      },
      "hits": {
        "total": {
          "value": 10000,
          "relation": "gte"
        },
        "max_score": null,
        "hits": []
      },
      "aggregations": {
        "2": {
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0,
          "buckets": [{
              "key": "adapter-allbesmart",
              "doc_count": 11630,
              "1": {
                "value": 1.0
              }
            },
            {
              "key": "adapter-it-veolia-transdev",
              "doc_count": 11630,
              "1": {
                "value": 1.0
              }
            },
            {
              "key": "devo-adapter-reader",
              "doc_count": 11630,
              "1": {
                "value": 0.9994840928632847
              }
            },
            {
              "key": "dseptest",
              "doc_count": 11630,
              "1": {
                "value": 0.9985382631126397
              }
            },
            {
              "key": "dsepcovilha",
              "doc_count": 11630,
              "1": {
                "value": 0.9970765262252794
              }
            },
            {
              "key": "adapter-ALB-environment",
              "doc_count": 11630,
              "1": {
                "value": 0.9969045571797076
              }
            },
            {
              "key": "devo-adapter-writer",
              "doc_count": 11630,
              "1": {
                "value": 0.5371453138435082
              }
            }
          ]
        }
      }
    }
  } else if (getDateFilter === 'now-1y/y') {
    valueToReturn = {
      "took": 2,
      "timed_out": false,
      "_shards": {
        "total": 5,
        "successful": 5,
        "skipped": 0,
        "failed": 0
      },
      "hits": {
        "total": {
          "value": 10000,
          "relation": "gte"
        },
        "max_score": null,
        "hits": []
      },
      "aggregations": {
        "2": {
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0,
          "buckets": [{
              "key": "adapter-allbesmart",
              "doc_count": 39659,
              "1": {
                "value": 1.0
              }
            },
            {
              "key": "adapter-it-veolia-transdev",
              "doc_count": 39659,
              "1": {
                "value": 1.0
              }
            },
            {
              "key": "devo-adapter-reader",
              "doc_count": 39659,
              "1": {
                "value": 0.9998234952974104
              }
            },
            {
              "key": "dseptest",
              "doc_count": 39659,
              "1": {
                "value": 0.99404927002698
              }
            },
            {
              "key": "dsepcovilha",
              "doc_count": 39659,
              "1": {
                "value": 0.9804079780125571
              }
            },
            {
              "key": "adapter-ALB-environment",
              "doc_count": 39659,
              "1": {
                "value": 0.9795758844146347
              }
            },
            {
              "key": "devo-adapter-writer",
              "doc_count": 39659,
              "1": {
                "value": 0.3918656547063718
              }
            }
          ]
        }
      }
    }
  } else {
    return next(new AppError(`unit [Y] not supported for date math [${req.body.query.bool.filter[1].range['@timestamp'].gte}]`, 400));
  }


  res.status(200).json({
    status: 'success',
    results: 1,
    requestTime: req.requestTime,
    data: {
      valueToReturn
    },
  });

});