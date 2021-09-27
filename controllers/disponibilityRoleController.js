const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getDisponibility = catchAsync(async (req, res, next) => {
  if (!req.body) {
    return next(new AppError('Please provide a body with parameters to range the disponibility', 400));
  }

  let valueToReturn = {};
  if (req.body.query.bool.filter[1].range['@timestamp'].gte === 'now-1d/d') {

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
  } else if (req.body.query.bool.filter[1].range['@timestamp'].gte === 'now-1m/m') {
    valueToReturn = {
      "took": 36,
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
              "doc_count": 11420,
              "1": {
                "value": 1.0
              }
            },
            {
              "key": "adapter-it-veolia-transdev",
              "doc_count": 11420,
              "1": {
                "value": 1.0
              }
            },
            {
              "key": "devo-adapter-reader",
              "doc_count": 11420,
              "1": {
                "value": 0.9994746059544658
              }
            },
            {
              "key": "dseptest",
              "doc_count": 11420,
              "1": {
                "value": 0.9985113835376532
              }
            },
            {
              "key": "dsepcovilha",
              "doc_count": 11420,
              "1": {
                "value": 0.9970227670753065
              }
            },
            {
              "key": "adapter-ALB-environment",
              "doc_count": 11420,
              "1": {
                "value": 0.9968476357267951
              }
            },
            {
              "key": "devo-adapter-writer",
              "doc_count": 11420,
              "1": {
                "value": 0.5286339754816112
              }
            }
          ]
        }
      }
    }
  } else if (req.body.query.bool.filter[1].range['@timestamp'].gte === 'now-1y/y') {
    valueToReturn = {
      "took": 13,
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
              "doc_count": 39450,
              "1": {
                "value": 1.0
              }
            },
            {
              "key": "adapter-it-veolia-transdev",
              "doc_count": 39450,
              "1": {
                "value": 1.0
              }
            },
            {
              "key": "devo-adapter-reader",
              "doc_count": 39450,
              "1": {
                "value": 0.9998225602027884
              }
            },
            {
              "key": "dseptest",
              "doc_count": 39450,
              "1": {
                "value": 0.9940177439797212
              }
            },
            {
              "key": "dsepcovilha",
              "doc_count": 39450,
              "1": {
                "value": 0.9803041825095057
              }
            },
            {
              "key": "adapter-ALB-environment",
              "doc_count": 39450,
              "1": {
                "value": 0.979467680608365
              }
            },
            {
              "key": "devo-adapter-writer",
              "doc_count": 39450,
              "1": {
                "value": 0.3886438529784537
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
      result: valueToReturn
    },
  });

});