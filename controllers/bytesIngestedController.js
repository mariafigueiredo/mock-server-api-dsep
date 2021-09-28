const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getBytes = catchAsync(async (req, res, next) => {
  if (!req.body) {
    return next(new AppError('Please provide a body with parameters to range the disponibility', 400));
  }

  const getDateFilter = req.body.query.bool.filter[1].range['@timestamp'].gte;
  if (!getDateFilter) {
    return next(new AppError('Please provide a time interval (by day, month, year or costumize date)', 400));
  }

  let valueToReturn = {};

  const getPerValue = req.body.aggs["2"].terms.field;
  const getByValue = req.body.aggs["2"].aggs["3"].terms.field;

  console.log("getByValue\t", getByValue, "\ngetPerValue \t", getPerValue)

  if (getPerValue === "tenant" && getByValue === "domain") {
    valueToReturn = {
      "took": 9,
      "timed_out": false,
      "_shards": {
        "total": 6,
        "successful": 6,
        "skipped": 0,
        "failed": 0
      },
      "hits": {
        "total": {
          "value": 7819,
          "relation": "eq"
        },
        "max_score": null,
        "hits": []
      },
      "aggregations": {
        "2": {
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0,
          "buckets": [{
              "key": "altice_deo",
              "doc_count": 3918,
              "1": {
                "value": 834991.0
              },
              "3": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [{
                  "key": "Environment",
                  "doc_count": 3918,
                  "1": {
                    "value": 834991.0
                  }
                }]
              }
            },
            {
              "key": "solarsense",
              "doc_count": 35,
              "1": {
                "value": 17014.0
              },
              "3": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [{
                    "key": "Oceanography",
                    "doc_count": 33,
                    "1": {
                      "value": 13678.0
                    }
                  },
                  {
                    "key": "PPDR",
                    "doc_count": 2,
                    "1": {
                      "value": 3336.0
                    }
                  }
                ]
              }
            },
            {
              "key": "sharingcities",
              "doc_count": 2,
              "1": {
                "value": 5994.0
              },
              "3": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [{
                  "key": "Waste",
                  "doc_count": 2,
                  "1": {
                    "value": 5994.0
                  }
                }]
              }
            },
            {
              "key": "CMCasteloBranco",
              "doc_count": 66,
              "1": {
                "value": 814.0
              },
              "3": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [{
                  "key": "Waste",
                  "doc_count": 66,
                  "1": {
                    "value": 814.0
                  }
                }]
              }
            }
          ]
        }
      }
    }
  }
  if (getPerValue === "tenant" && getByValue === "partner") {
    valueToReturn = {
      "took": 21,
      "timed_out": false,
      "_shards": {
        "total": 6,
        "successful": 6,
        "skipped": 0,
        "failed": 0
      },
      "hits": {
        "total": {
          "value": 7943,
          "relation": "eq"
        },
        "max_score": null,
        "hits": []
      },
      "aggregations": {
        "2": {
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0,
          "buckets": [{
              "key": "altice_deo",
              "doc_count": 3978,
              "1": {
                "value": 848122.0
              },
              "3": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [{
                  "key": "qART",
                  "doc_count": 3978,
                  "1": {
                    "value": 848122.0
                  }
                }]
              }
            },
            {
              "key": "solarsense",
              "doc_count": 35,
              "1": {
                "value": 17014.0
              },
              "3": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [{
                  "key": "IPMA",
                  "doc_count": 35,
                  "1": {
                    "value": 17014.0
                  }
                }]
              }
            },
            {
              "key": "sharingcities",
              "doc_count": 2,
              "1": {
                "value": 5994.0
              },
              "3": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [{
                  "key": "Compta",
                  "doc_count": 2,
                  "1": {
                    "value": 5994.0
                  }
                }]
              }
            },
            {
              "key": "CMCasteloBranco",
              "doc_count": 69,
              "1": {
                "value": 871.0
              },
              "3": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [{
                  "key": "Evox",
                  "doc_count": 69,
                  "1": {
                    "value": 871.0
                  }
                }]
              }
            }
          ]
        }
      }
    }
  }
  if (getPerValue === "domain" && getByValue === "partner") {
    valueToReturn = {
      "took": 9,
      "timed_out": false,
      "_shards": {
        "total": 6,
        "successful": 6,
        "skipped": 0,
        "failed": 0
      },
      "hits": {
        "total": {
          "value": 8212,
          "relation": "eq"
        },
        "max_score": null,
        "hits": []
      },
      "aggregations": {
        "2": {
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0,
          "buckets": [{
              "key": "Environment",
              "doc_count": 4108,
              "1": {
                "value": 876438.0
              },
              "3": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [{
                  "key": "qART",
                  "doc_count": 4108,
                  "1": {
                    "value": 876438.0
                  }
                }]
              }
            },
            {
              "key": "Oceanography",
              "doc_count": 34,
              "1": {
                "value": 14094.0
              },
              "3": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [{
                  "key": "IPMA",
                  "doc_count": 34,
                  "1": {
                    "value": 14094.0
                  }
                }]
              }
            },
            {
              "key": "Waste",
              "doc_count": 72,
              "1": {
                "value": 6889.0
              },
              "3": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [{
                    "key": "Compta",
                    "doc_count": 2,
                    "1": {
                      "value": 5994.0
                    }
                  },
                  {
                    "key": "Evox",
                    "doc_count": 70,
                    "1": {
                      "value": 895.0
                    }
                  }
                ]
              }
            },
            {
              "key": "PPDR",
              "doc_count": 2,
              "1": {
                "value": 3336.0
              },
              "3": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [{
                  "key": "IPMA",
                  "doc_count": 2,
                  "1": {
                    "value": 3336.0
                  }
                }]
              }
            }
          ]
        }
      }
    }

  }
  if (getPerValue === "partner" && getByValue === "device") {
    valueToReturn = {
      "took": 21,
      "timed_out": false,
      "_shards": {
        "total": 6,
        "successful": 6,
        "skipped": 0,
        "failed": 0
      },
      "hits": {
        "total": {
          "value": 8212,
          "relation": "eq"
        },
        "max_score": null,
        "hits": []
      },
      "aggregations": {
        "2": {
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0,
          "buckets": [{
              "key": "qART",
              "doc_count": 4108,
              "1": {
                "value": 876438.0
              },
              "3": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": []
              }
            },
            {
              "key": "IPMA",
              "doc_count": 36,
              "1": {
                "value": 17430.0
              },
              "3": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": []
              }
            },
            {
              "key": "Compta",
              "doc_count": 2,
              "1": {
                "value": 5994.0
              },
              "3": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": []
              }
            },
            {
              "key": "Evox",
              "doc_count": 70,
              "1": {
                "value": 895.0
              },
              "3": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": []
              }
            }
          ]
        }
      }
    }
  }
  if (getPerValue === "partner" && getByValue === "tenant") {
    valueToReturn = {
      "took": 15,
      "timed_out": false,
      "_shards": {
        "total": 6,
        "successful": 6,
        "skipped": 0,
        "failed": 0
      },
      "hits": {
        "total": {
          "value": 8277,
          "relation": "eq"
        },
        "max_score": null,
        "hits": []
      },
      "aggregations": {
        "2": {
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0,
          "buckets": [{
              "key": "qART",
              "doc_count": 4138,
              "1": {
                "value": 882843.0
              },
              "3": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [{
                  "key": "altice_deo",
                  "doc_count": 4138,
                  "1": {
                    "value": 882843.0
                  }
                }]
              }
            },
            {
              "key": "IPMA",
              "doc_count": 37,
              "1": {
                "value": 17846.0
              },
              "3": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [{
                  "key": "solarsense",
                  "doc_count": 37,
                  "1": {
                    "value": 17846.0
                  }
                }]
              }
            },
            {
              "key": "Compta",
              "doc_count": 2,
              "1": {
                "value": 5994.0
              },
              "3": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [{
                  "key": "sharingcities",
                  "doc_count": 2,
                  "1": {
                    "value": 5994.0
                  }
                }]
              }
            },
            {
              "key": "Evox",
              "doc_count": 70,
              "1": {
                "value": 895.0
              },
              "3": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [{
                  "key": "CMCasteloBranco",
                  "doc_count": 70,
                  "1": {
                    "value": 895.0
                  }
                }]
              }
            }
          ]
        }
      }
    }
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