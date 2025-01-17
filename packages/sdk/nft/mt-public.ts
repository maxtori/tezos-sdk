import { Provider, DeployResult } from "../common/base"
import { make_metadata } from "./contract-metadata"

export const mt_public_code : any =
  [  {  "prim": "storage",
        "args": [
          {  "prim": "pair",
             "args": [
               {  "prim": "address",
                  "annots": [
                    "%owner"
                  ]
               },
               {  "prim": "pair",
                  "args": [
                    {  "prim": "option",
                       "args": [
                         {  "prim": "address"  }
                       ]
                       ,
                       "annots": [
                         "%owner_candidate"
                       ]
                    },
                    {  "prim": "pair",
                       "args": [
                         {  "prim": "bool",
                            "annots": [
                              "%paused"
                            ]
                         },
                         {  "prim": "pair",
                            "args": [
                              {  "prim": "big_map",
                                 "args": [
                                   {  "prim": "nat"  },
                                   {  "prim": "list",
                                      "args": [
                                        {  "prim": "pair",
                                           "args": [
                                             {  "prim": "address",
                                                "annots": [
                                                  "%partAccount"
                                                ]
                                             },
                                             {  "prim": "nat",
                                                "annots": [
                                                  "%partValue"
                                                ]
                                             }
                                           ]
                                        }
                                      ]
                                   }
                                 ]
                                 ,
                                 "annots": [
                                   "%royalties"
                                 ]
                              },
                              {  "prim": "pair",
                                 "args": [
                                   {  "prim": "big_map",
                                      "args": [
                                        {  "prim": "pair",
                                           "args": [
                                             {  "prim": "nat"  },
                                             {  "prim": "address"  }
                                           ]
                                        },
                                        {  "prim": "nat"  }
                                      ]
                                      ,
                                      "annots": [
                                        "%ledger"
                                      ]
                                   },
                                   {  "prim": "pair",
                                      "args": [
                                        {  "prim": "big_map",
                                           "args": [
                                             {  "prim": "pair",
                                                "args": [
                                                  {  "prim": "address"  },
                                                  {  "prim": "pair",
                                                     "args": [
                                                       {  "prim": "nat"  },
                                                       {  "prim": "address"  }
                                                     ]
                                                  }
                                                ]
                                             },
                                             {  "prim": "unit"  }
                                           ]
                                           ,
                                           "annots": [
                                             "%operator"
                                           ]
                                        },
                                        {  "prim": "pair",
                                           "args": [
                                             {  "prim": "big_map",
                                                "args": [
                                                  {  "prim": "nat"  },
                                                  {  "prim": "pair",
                                                     "args": [
                                                       {  "prim": "nat",
                                                          "annots": [
                                                            "%token_id"
                                                          ]
                                                       },
                                                       {  "prim": "map",
                                                          "args": [
                                                            {  "prim": "string"  },
                                                            {  "prim": "bytes"  }
                                                          ]
                                                          ,
                                                          "annots": [
                                                            "%token_info"
                                                          ]
                                                       }
                                                     ]
                                                  }
                                                ]
                                                ,
                                                "annots": [
                                                  "%token_metadata"
                                                ]
                                             },
                                             {  "prim": "pair",
                                                "args": [
                                                  {  "prim": "big_map",
                                                     "args": [
                                                       {  "prim": "address"  },
                                                       {  "prim": "pair",
                                                          "args": [
                                                            {  "prim": "nat",
                                                               "annots": [
                                                                 "%counter"
                                                               ]
                                                            },
                                                            {  "prim": "pair",
                                                               "args": [
                                                                 {  "prim": "option",
                                                                    "args": [

                                                                    {  "prim": "nat"  }
                                                                    ]
                                                                    ,
                                                                    "annots": [

                                                                    "%user_expiry"
                                                                    ]
                                                                 },
                                                                 {  "prim": "map",
                                                                    "args": [

                                                                    {  "prim": "bytes"  },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "option",
                                                                    "args": [

                                                                    {  "prim": "nat"  }
                                                                    ]
                                                                    ,
                                                                    "annots": [

                                                                    "%expiry"
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "timestamp",
                                                                    "annots": [

                                                                    "%created_at"
                                                                    ]
                                                                    }
                                                                    ]
                                                                    }
                                                                    ]
                                                                    ,
                                                                    "annots": [

                                                                    "%user_permits"
                                                                    ]
                                                                 }
                                                               ]
                                                            }
                                                          ]
                                                       }
                                                     ]
                                                     ,
                                                     "annots": [
                                                       "%permits"
                                                     ]
                                                  },
                                                  {  "prim": "pair",
                                                     "args": [
                                                       {  "prim": "big_map",
                                                          "args": [
                                                            {  "prim": "pair",
                                                               "args": [
                                                                 {  "prim": "address"  },
                                                                 {  "prim": "address"  }
                                                               ]
                                                            },
                                                            {  "prim": "unit"  }
                                                          ]
                                                          ,
                                                          "annots": [
                                                            "%operator_for_all"
                                                          ]
                                                       },
                                                       {  "prim": "pair",
                                                          "args": [
                                                            {  "prim": "nat",
                                                               "annots": [
                                                                 "%default_expiry"
                                                               ]
                                                            },
                                                            {  "prim": "big_map",
                                                               "args": [
                                                                 {  "prim": "string"  },
                                                                 {  "prim": "bytes"  }
                                                               ]
                                                               ,
                                                               "annots": [
                                                                 "%metadata"
                                                               ]
                                                            }
                                                          ]
                                                       }
                                                     ]
                                                  }
                                                ]
                                             }
                                           ]
                                        }
                                      ]
                                   }
                                 ]
                              }
                            ]
                         }
                       ]
                    }
                  ]
               }
             ]
          }
        ]
  },
  {  "prim": "parameter",
     "args": [
       {  "prim": "or",
          "args": [
            {  "prim": "or",
               "args": [
                 {  "prim": "or",
                    "args": [
                      {  "prim": "or",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "list",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "address",
                                             "annots": [
                                               "%owner"
                                             ]
                                          },
                                          {  "prim": "nat",
                                             "annots": [
                                               "%token_id"
                                             ]
                                          }
                                        ]
                                     }
                                   ]
                                   ,
                                   "annots": [
                                     "%requests"
                                   ]
                                },
                                {  "prim": "contract",
                                   "args": [
                                     {  "prim": "list",
                                        "args": [
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "address",
                                                       "annots": [
                                                         "%owner"
                                                       ]
                                                    },
                                                    {  "prim": "nat",
                                                       "annots": [
                                                         "%token_id"
                                                       ]
                                                    }
                                                  ]
                                               },
                                               {  "prim": "nat",
                                                  "annots": [
                                                    "%balance"
                                                  ]
                                               }
                                             ]
                                          }
                                        ]
                                     }
                                   ]
                                }
                              ]
                              ,
                              "annots": [
                                "%balance_of"
                              ]
                           },
                           {  "prim": "address",
                              "annots": [
                                "%declare_ownership"
                              ]
                           }
                         ]
                      },
                      {  "prim": "or",
                         "args": [
                           {  "prim": "unit",
                              "annots": [
                                "%claim_ownership"
                              ]
                           },
                           {  "prim": "unit",
                              "annots": [
                                "%pause"
                              ]
                           }
                         ]
                      }
                    ]
                 },
                 {  "prim": "or",
                    "args": [
                      {  "prim": "or",
                         "args": [
                           {  "prim": "unit",
                              "annots": [
                                "%unpause"
                              ]
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "string",
                                   "annots": [
                                     "%ikey"
                                   ]
                                },
                                {  "prim": "bytes",
                                   "annots": [
                                     "%idata"
                                   ]
                                }
                              ]
                              ,
                              "annots": [
                                "%set_metadata"
                              ]
                           }
                         ]
                      },
                      {  "prim": "or",
                         "args": [
                           {  "prim": "list",
                              "args": [
                                {  "prim": "or",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "address",
                                             "annots": [
                                               "%owner"
                                             ]
                                          },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "address",
                                                  "annots": [
                                                    "%operator"
                                                  ]
                                               },
                                               {  "prim": "nat",
                                                  "annots": [
                                                    "%token_id"
                                                  ]
                                               }
                                             ]
                                          }
                                        ]
                                     },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "address",
                                             "annots": [
                                               "%owner"
                                             ]
                                          },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "address",
                                                  "annots": [
                                                    "%operator"
                                                  ]
                                               },
                                               {  "prim": "nat",
                                                  "annots": [
                                                    "%token_id"
                                                  ]
                                               }
                                             ]
                                          }
                                        ]
                                     }
                                   ]
                                }
                              ]
                              ,
                              "annots": [
                                "%update_operators"
                              ]
                           },
                           {  "prim": "list",
                              "args": [
                                {  "prim": "or",
                                   "args": [
                                     {  "prim": "address"  },
                                     {  "prim": "address"  }
                                   ]
                                }
                              ]
                              ,
                              "annots": [
                                "%update_operators_for_all"
                              ]
                           }
                         ]
                      }
                    ]
                 }
               ]
            },
            {  "prim": "or",
               "args": [
                 {  "prim": "or",
                    "args": [
                      {  "prim": "or",
                         "args": [
                           {  "prim": "nat",
                              "annots": [
                                "%set_default_expiry"
                              ]
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "option",
                                   "args": [
                                     {  "prim": "nat"  }
                                   ]
                                   ,
                                   "annots": [
                                     "%v"
                                   ]
                                },
                                {  "prim": "option",
                                   "args": [
                                     {  "prim": "bytes"  }
                                   ]
                                   ,
                                   "annots": [
                                     "%p"
                                   ]
                                }
                              ]
                              ,
                              "annots": [
                                "%set_expiry"
                              ]
                           }
                         ]
                      },
                      {  "prim": "or",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "key",
                                   "annots": [
                                     "%pk"
                                   ]
                                },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "signature",
                                        "annots": [
                                          "%sig"
                                        ]
                                     },
                                     {  "prim": "bytes",
                                        "annots": [
                                          "%data"
                                        ]
                                     }
                                   ]
                                }
                              ]
                              ,
                              "annots": [
                                "%permit"
                              ]
                           },
                           {  "prim": "list",
                              "args": [
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "list",
                                        "args": [
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "address"  },
                                               {  "prim": "list",
                                                  "args": [
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "address",
                                                            "annots": [
                                                              "%to"
                                                            ]
                                                         },
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "nat",
                                                                 "annots": [
                                                                   "%token_id"
                                                                 ]
                                                              },
                                                              {  "prim": "nat",
                                                                 "annots": [
                                                                   "%amount"
                                                                 ]
                                                              }
                                                            ]
                                                         }
                                                       ]
                                                    }
                                                  ]
                                               }
                                             ]
                                          }
                                        ]
                                     },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "key"  },
                                          {  "prim": "signature"  }
                                        ]
                                     }
                                   ]
                                }
                              ]
                              ,
                              "annots": [
                                "%transfer_gasless"
                              ]
                           }
                         ]
                      }
                    ]
                 },
                 {  "prim": "or",
                    "args": [
                      {  "prim": "or",
                         "args": [
                           {  "prim": "list",
                              "args": [
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address"  },
                                     {  "prim": "list",
                                        "args": [
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "address",
                                                  "annots": [
                                                    "%to"
                                                  ]
                                               },
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "nat",
                                                       "annots": [
                                                         "%token_id"
                                                       ]
                                                    },
                                                    {  "prim": "nat",
                                                       "annots": [
                                                         "%amount"
                                                       ]
                                                    }
                                                  ]
                                               }
                                             ]
                                          }
                                        ]
                                     }
                                   ]
                                }
                              ]
                              ,
                              "annots": [
                                "%transfer"
                              ]
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "nat",
                                   "annots": [
                                     "%itokenid"
                                   ]
                                },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address",
                                        "annots": [
                                          "%iowner"
                                        ]
                                     },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "nat",
                                             "annots": [
                                               "%iamount"
                                             ]
                                          },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "map",
                                                  "args": [
                                                    {  "prim": "string"  },
                                                    {  "prim": "bytes"  }
                                                  ]
                                                  ,
                                                  "annots": [
                                                    "%itokenMetadata"
                                                  ]
                                               },
                                               {  "prim": "list",
                                                  "args": [
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "address",
                                                            "annots": [
                                                              "%partAccount"
                                                            ]
                                                         },
                                                         {  "prim": "nat",
                                                            "annots": [
                                                              "%partValue"
                                                            ]
                                                         }
                                                       ]
                                                    }
                                                  ]
                                                  ,
                                                  "annots": [
                                                    "%iroyalties"
                                                  ]
                                               }
                                             ]
                                          }
                                        ]
                                     }
                                   ]
                                }
                              ]
                              ,
                              "annots": [
                                "%mint"
                              ]
                           }
                         ]
                      },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "nat",
                              "annots": [
                                "%itokenid"
                              ]
                           },
                           {  "prim": "nat",
                              "annots": [
                                "%iamount"
                              ]
                           }
                         ]
                         ,
                         "annots": [
                           "%burn"
                         ]
                      }
                    ]
                 }
               ]
            }
          ]
       }
     ]
  },
  {  "prim": "code",
     "args": [
       [  {  "prim": "LAMBDA",
             "args": [
               {  "prim": "pair",
                  "args": [
                    {  "prim": "string"  },
                    {  "prim": "bool"  }
                  ]
               },
               {  "prim": "bool"  },
               [  {  "prim": "UNPAIR",
                     "args": [
                       {  "int": "2"  }
                     ]
               },
               {  "prim": "PUSH",
                  "args": [
                    {  "prim": "unit"  },
                    {  "prim": "Unit"  }
                  ]
               },
               {  "prim": "DUP",
                  "args": [
                    {  "int": "3"  }
                  ]
               },
               {  "prim": "NOT"  },
               {  "prim": "IF",
                  "args": [
                    [  {  "prim": "PUSH",
                          "args": [
                            {  "prim": "bool"  },
                            {  "prim": "True"  }
                          ]
                    },
                    {  "prim": "SWAP"  },
                    {  "prim": "DROP",
                       "args": [
                         {  "int": "1"  }
                       ]
                    }  ],
                    [  {  "prim": "PUSH",
                          "args": [
                            {  "prim": "string"  },
                            {  "string": "CONTRACT_PAUSED"  }
                          ]
                    },
                    {  "prim": "FAILWITH"  }  ]
                  ]
               },
               {  "prim": "DUG",
                  "args": [
                    {  "int": "2"  }
                  ]
               },
               {  "prim": "DROP",
                  "args": [
                    {  "int": "2"  }
                  ]
               }  ]
             ]
       },
       {  "prim": "LAMBDA",
          "args": [
            {  "prim": "pair",
               "args": [
                 {  "prim": "big_map",
                    "args": [
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "nat"  },
                           {  "prim": "address"  }
                         ]
                      },
                      {  "prim": "nat"  }
                    ]
                 },
                 {  "prim": "pair",
                    "args": [
                      {  "prim": "big_map",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
                                {  "prim": "address"  }
                              ]
                           },
                           {  "prim": "unit"  }
                         ]
                      },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "big_map",
                              "args": [
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address"  },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "nat"  },
                                          {  "prim": "address"  }
                                        ]
                                     }
                                   ]
                                },
                                {  "prim": "unit"  }
                              ]
                           },
                           {  "prim": "list",
                              "args": [
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address"  },
                                     {  "prim": "list",
                                        "args": [
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "address",
                                                  "annots": [
                                                    "%to"
                                                  ]
                                               },
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "nat",
                                                       "annots": [
                                                         "%token_id"
                                                       ]
                                                    },
                                                    {  "prim": "nat",
                                                       "annots": [
                                                         "%amount"
                                                       ]
                                                    }
                                                  ]
                                               }
                                             ]
                                          }
                                        ]
                                     }
                                   ]
                                }
                              ]
                           }
                         ]
                      }
                    ]
                 }
               ]
            },
            {  "prim": "bool"  },
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "4"  }
                  ]
            },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "unit"  },
                 {  "prim": "Unit"  }
               ]
            },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "bool"  },
                 {  "prim": "True"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "6"  }
               ]
            },
            {  "prim": "ITER",
               "args": [
                 [  {  "prim": "DUP"  },
                 {  "prim": "CAR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "DUP"  },
                 {  "prim": "ITER",
                    "args": [
                      [  {  "prim": "DUP",
                            "args": [
                              {  "int": "3"  }
                            ]
                      },
                      {  "prim": "SENDER"  },
                      {  "prim": "COMPARE"  },
                      {  "prim": "NEQ"  },
                      {  "prim": "IF",
                         "args": [
                           [  {  "prim": "DUP",
                                 "args": [
                                   {  "int": "8"  }
                                 ]
                           },
                           {  "prim": "DUP",
                              "args": [
                                {  "int": "4"  }
                              ]
                           },
                           {  "prim": "SENDER"  },
                           {  "prim": "PAIR"  },
                           {  "prim": "MEM"  },
                           {  "prim": "DUP",
                              "args": [
                                {  "int": "10"  }
                              ]
                           },
                           {  "prim": "DUP",
                              "args": [
                                {  "int": "5"  }
                              ]
                           },
                           {  "prim": "DUP",
                              "args": [
                                {  "int": "4"  }
                              ]
                           },
                           {  "prim": "CDR"  },
                           {  "prim": "CAR"  },
                           {  "prim": "PAIR"  },
                           {  "prim": "SENDER"  },
                           {  "prim": "PAIR"  },
                           {  "prim": "MEM"  },
                           {  "prim": "OR"  }  ],
                           [  {  "prim": "DUP",
                                 "args": [
                                   {  "int": "7"  }
                                 ]
                           },
                           {  "prim": "SENDER"  },
                           {  "prim": "DUP",
                              "args": [
                                {  "int": "3"  }
                              ]
                           },
                           {  "prim": "CDR"  },
                           {  "prim": "CAR"  },
                           {  "prim": "PAIR"  },
                           {  "prim": "MEM"  }  ]
                         ]
                      },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "6"  }
                         ]
                      },
                      {  "prim": "AND"  },
                      {  "prim": "DIP",
                         "args": [
                           {  "int": "1"  },
                           [  {  "prim": "DIG",
                                 "args": [
                                   {  "int": "4"  }
                                 ]
                           },
                           {  "prim": "DROP",
                              "args": [
                                {  "int": "1"  }
                              ]
                           }  ]
                         ]
                      },
                      {  "prim": "DUG",
                         "args": [
                           {  "int": "4"  }
                         ]
                      },
                      {  "prim": "DROP",
                         "args": [
                           {  "int": "1"  }
                         ]
                      }  ]
                    ]
                 },
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "3"  }
                    ]
                 }  ]
               ]
            },
            {  "prim": "DUP"  },
            {  "prim": "DIP",
               "args": [
                 {  "int": "1"  },
                 [  {  "prim": "DIG",
                       "args": [
                         {  "int": "1"  }
                       ]
                 },
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "1"  }
                    ]
                 }  ]
               ]
            },
            {  "prim": "DUG",
               "args": [
                 {  "int": "1"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "1"  }
               ]
            },
            {  "prim": "DUG",
               "args": [
                 {  "int": "4"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "4"  }
               ]
            }  ]
          ]
       },
       {  "prim": "LAMBDA",
          "args": [
            {  "prim": "pair",
               "args": [
                 {  "prim": "big_map",
                    "args": [
                      {  "prim": "address"  },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "nat",
                              "annots": [
                                "%counter"
                              ]
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "option",
                                   "args": [
                                     {  "prim": "nat"  }
                                   ]
                                   ,
                                   "annots": [
                                     "%user_expiry"
                                   ]
                                },
                                {  "prim": "map",
                                   "args": [
                                     {  "prim": "bytes"  },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "option",
                                             "args": [
                                               {  "prim": "nat"  }
                                             ]
                                             ,
                                             "annots": [
                                               "%expiry"
                                             ]
                                          },
                                          {  "prim": "timestamp",
                                             "annots": [
                                               "%created_at"
                                             ]
                                          }
                                        ]
                                     }
                                   ]
                                   ,
                                   "annots": [
                                     "%user_permits"
                                   ]
                                }
                              ]
                           }
                         ]
                      }
                    ]
                 },
                 {  "prim": "pair",
                    "args": [
                      {  "prim": "nat"  },
                      {  "prim": "address"  }
                    ]
                 }
               ]
            },
            {  "prim": "nat"  },
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "3"  }
                  ]
            },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "unit"  },
                 {  "prim": "Unit"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "6"  }
               ]
            },
            {  "prim": "MEM"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "3"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "6"  }
                    ]
                 },
                 {  "prim": "GET"  },
                 {  "prim": "IF_NONE",
                    "args": [
                      [  {  "prim": "PUSH",
                            "args": [
                              {  "prim": "string"  },
                              {  "string": "permits"  }
                            ]
                      },
                      {  "prim": "PUSH",
                         "args": [
                           {  "prim": "string"  },
                           {  "string": "AssetNotFound"  }
                         ]
                      },
                      {  "prim": "PAIR"  },
                      {  "prim": "FAILWITH"  }  ],
                      [    ]
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "IF_NONE",
                    "args": [
                      [  {  "prim": "DUP",
                            "args": [
                              {  "int": "4"  }
                            ]
                      },
                      {  "prim": "SWAP"  },
                      {  "prim": "DROP",
                         "args": [
                           {  "int": "1"  }
                         ]
                      }  ],
                      [  {  "prim": "DUP"  },
                      {  "prim": "DIP",
                         "args": [
                           {  "int": "1"  },
                           [  {  "prim": "DIG",
                                 "args": [
                                   {  "int": "1"  }
                                 ]
                           },
                           {  "prim": "DROP",
                              "args": [
                                {  "int": "1"  }
                              ]
                           }  ]
                         ]
                      },
                      {  "prim": "DUG",
                         "args": [
                           {  "int": "1"  }
                         ]
                      },
                      {  "prim": "DROP",
                         "args": [
                           {  "int": "1"  }
                         ]
                      }  ]
                    ]
                 }  ],
                 [    ]
               ]
            },
            {  "prim": "DUP"  },
            {  "prim": "DIP",
               "args": [
                 {  "int": "1"  },
                 [  {  "prim": "DIG",
                       "args": [
                         {  "int": "1"  }
                       ]
                 },
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "1"  }
                    ]
                 }  ]
               ]
            },
            {  "prim": "DUG",
               "args": [
                 {  "int": "1"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "1"  }
               ]
            },
            {  "prim": "DUG",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "3"  }
               ]
            }  ]
          ]
       },
       {  "prim": "LAMBDA",
          "args": [
            {  "prim": "pair",
               "args": [
                 {  "prim": "big_map",
                    "args": [
                      {  "prim": "address"  },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "nat",
                              "annots": [
                                "%counter"
                              ]
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "option",
                                   "args": [
                                     {  "prim": "nat"  }
                                   ]
                                   ,
                                   "annots": [
                                     "%user_expiry"
                                   ]
                                },
                                {  "prim": "map",
                                   "args": [
                                     {  "prim": "bytes"  },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "option",
                                             "args": [
                                               {  "prim": "nat"  }
                                             ]
                                             ,
                                             "annots": [
                                               "%expiry"
                                             ]
                                          },
                                          {  "prim": "timestamp",
                                             "annots": [
                                               "%created_at"
                                             ]
                                          }
                                        ]
                                     }
                                   ]
                                   ,
                                   "annots": [
                                     "%user_permits"
                                   ]
                                }
                              ]
                           }
                         ]
                      }
                    ]
                 },
                 {  "prim": "pair",
                    "args": [
                      {  "prim": "nat"  },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "address"  },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "bytes"  },
                                {  "prim": "lambda",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "big_map",
                                             "args": [
                                               {  "prim": "address"  },
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "nat",
                                                       "annots": [
                                                         "%counter"
                                                       ]
                                                    },
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "option",
                                                            "args": [
                                                              {  "prim": "nat"  }
                                                            ]
                                                            ,
                                                            "annots": [
                                                              "%user_expiry"
                                                            ]
                                                         },
                                                         {  "prim": "map",
                                                            "args": [
                                                              {  "prim": "bytes"  },
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%expiry"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "timestamp",
                                                                   "annots": [

                                                                   "%created_at"
                                                                   ]
                                                                   }
                                                                 ]
                                                              }
                                                            ]
                                                            ,
                                                            "annots": [
                                                              "%user_permits"
                                                            ]
                                                         }
                                                       ]
                                                    }
                                                  ]
                                               }
                                             ]
                                          },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "nat"  },
                                               {  "prim": "address"  }
                                             ]
                                          }
                                        ]
                                     },
                                     {  "prim": "nat"  }
                                   ]
                                }
                              ]
                           }
                         ]
                      }
                    ]
                 }
               ]
            },
            {  "prim": "nat"  },
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "5"  }
                  ]
            },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "unit"  },
                 {  "prim": "Unit"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "6"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "5"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "5"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "4"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "EXEC"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "6"  }
               ]
            },
            {  "prim": "MEM"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "3"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "6"  }
                    ]
                 },
                 {  "prim": "GET"  },
                 {  "prim": "IF_NONE",
                    "args": [
                      [  {  "prim": "PUSH",
                            "args": [
                              {  "prim": "string"  },
                              {  "string": "permits"  }
                            ]
                      },
                      {  "prim": "PUSH",
                         "args": [
                           {  "prim": "string"  },
                           {  "string": "AssetNotFound"  }
                         ]
                      },
                      {  "prim": "PAIR"  },
                      {  "prim": "FAILWITH"  }  ],
                      [    ]
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "7"  }
                    ]
                 },
                 {  "prim": "MEM"  },
                 {  "prim": "IF",
                    "args": [
                      [  {  "prim": "DUP",
                            "args": [
                              {  "int": "3"  }
                            ]
                      },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "6"  }
                         ]
                      },
                      {  "prim": "GET"  },
                      {  "prim": "IF_NONE",
                         "args": [
                           [  {  "prim": "PUSH",
                                 "args": [
                                   {  "prim": "string"  },
                                   {  "string": "permits"  }
                                 ]
                           },
                           {  "prim": "PUSH",
                              "args": [
                                {  "prim": "string"  },
                                {  "string": "AssetNotFound"  }
                              ]
                           },
                           {  "prim": "PAIR"  },
                           {  "prim": "FAILWITH"  }  ],
                           [    ]
                         ]
                      },
                      {  "prim": "CDR"  },
                      {  "prim": "CDR"  },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "7"  }
                         ]
                      },
                      {  "prim": "GET"  },
                      {  "prim": "IF_NONE",
                         "args": [
                           [  {  "prim": "PUSH",
                                 "args": [
                                   {  "prim": "string"  },
                                   {  "string": "NotFound"  }
                                 ]
                           },
                           {  "prim": "FAILWITH"  }  ],
                           [    ]
                         ]
                      },
                      {  "prim": "CAR"  },
                      {  "prim": "IF_NONE",
                         "args": [
                           [    ],
                           [  {  "prim": "DUP"  },
                           {  "prim": "DIP",
                              "args": [
                                {  "int": "1"  },
                                [  {  "prim": "DIG",
                                      "args": [
                                        {  "int": "1"  }
                                      ]
                                },
                                {  "prim": "DROP",
                                   "args": [
                                     {  "int": "1"  }
                                   ]
                                }  ]
                              ]
                           },
                           {  "prim": "DUG",
                              "args": [
                                {  "int": "1"  }
                              ]
                           },
                           {  "prim": "DROP",
                              "args": [
                                {  "int": "1"  }
                              ]
                           }  ]
                         ]
                      }  ],
                      [    ]
                    ]
                 }  ],
                 [    ]
               ]
            },
            {  "prim": "DUP"  },
            {  "prim": "DIP",
               "args": [
                 {  "int": "1"  },
                 [  {  "prim": "DIG",
                       "args": [
                         {  "int": "1"  }
                       ]
                 },
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "1"  }
                    ]
                 }  ]
               ]
            },
            {  "prim": "DUG",
               "args": [
                 {  "int": "1"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "1"  }
               ]
            },
            {  "prim": "DUG",
               "args": [
                 {  "int": "5"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "5"  }
               ]
            }  ]
          ]
       },
       {  "prim": "LAMBDA",
          "args": [
            {  "prim": "pair",
               "args": [
                 {  "prim": "pair",
                    "args": [
                      {  "prim": "option",
                         "args": [
                           {  "prim": "nat"  }
                         ]
                         ,
                         "annots": [
                           "%expiry"
                         ]
                      },
                      {  "prim": "timestamp",
                         "annots": [
                           "%created_at"
                         ]
                      }
                    ]
                 },
                 {  "prim": "nat"  }
               ]
            },
            {  "prim": "bool"  },
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "2"  }
                  ]
            },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "unit"  },
                 {  "prim": "Unit"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "2"  }
               ]
            },
            {  "prim": "CAR"  },
            {  "prim": "IF_NONE",
               "args": [
                 [  {  "prim": "NOW"  },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "int"  },
                      {  "int": "1"  }
                    ]
                 },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "nat"  },
                      {  "int": "1"  }
                    ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "6"  }
                    ]
                 },
                 {  "prim": "INT"  },
                 {  "prim": "PAIR"  },
                 {  "prim": "PAIR"  },
                 {  "prim": "UNPAIR"  },
                 {  "prim": "UNPAIR"  },
                 {  "prim": "DIG",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
                 {  "prim": "MUL"  },
                 {  "prim": "EDIV"  },
                 {  "prim": "IF_NONE",
                    "args": [
                      [  {  "prim": "PUSH",
                            "args": [
                              {  "prim": "string"  },
                              {  "string": "DivByZero"  }
                            ]
                      },
                      {  "prim": "FAILWITH"  }  ],
                      [    ]
                    ]
                 },
                 {  "prim": "CAR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "4"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "ADD"  },
                 {  "prim": "COMPARE"  },
                 {  "prim": "LT"  },
                 {  "prim": "SWAP"  },
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "1"  }
                    ]
                 }  ],
                 [  {  "prim": "NOW"  },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "int"  },
                      {  "int": "1"  }
                    ]
                 },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "nat"  },
                      {  "int": "1"  }
                    ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "4"  }
                    ]
                 },
                 {  "prim": "INT"  },
                 {  "prim": "PAIR"  },
                 {  "prim": "PAIR"  },
                 {  "prim": "UNPAIR"  },
                 {  "prim": "UNPAIR"  },
                 {  "prim": "DIG",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
                 {  "prim": "MUL"  },
                 {  "prim": "EDIV"  },
                 {  "prim": "IF_NONE",
                    "args": [
                      [  {  "prim": "PUSH",
                            "args": [
                              {  "prim": "string"  },
                              {  "string": "DivByZero"  }
                            ]
                      },
                      {  "prim": "FAILWITH"  }  ],
                      [    ]
                    ]
                 },
                 {  "prim": "CAR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "5"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "ADD"  },
                 {  "prim": "COMPARE"  },
                 {  "prim": "LT"  },
                 {  "prim": "DIP",
                    "args": [
                      {  "int": "1"  },
                      [  {  "prim": "DIG",
                            "args": [
                              {  "int": "1"  }
                            ]
                      },
                      {  "prim": "DROP",
                         "args": [
                           {  "int": "1"  }
                         ]
                      }  ]
                    ]
                 },
                 {  "prim": "DUG",
                    "args": [
                      {  "int": "1"  }
                    ]
                 },
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "1"  }
                    ]
                 }  ]
               ]
            },
            {  "prim": "DUG",
               "args": [
                 {  "int": "2"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "2"  }
               ]
            }  ]
          ]
       },
       {  "prim": "LAMBDA",
          "args": [
            {  "prim": "pair",
               "args": [
                 {  "prim": "string"  },
                 {  "prim": "list",
                    "args": [
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "address"  },
                           {  "prim": "list",
                              "args": [
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address",
                                        "annots": [
                                          "%to"
                                        ]
                                     },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "nat",
                                             "annots": [
                                               "%token_id"
                                             ]
                                          },
                                          {  "prim": "nat",
                                             "annots": [
                                               "%amount"
                                             ]
                                          }
                                        ]
                                     }
                                   ]
                                }
                              ]
                           }
                         ]
                      }
                    ]
                 }
               ]
            },
            {  "prim": "option",
               "args": [
                 {  "prim": "address"  }
               ]
            },
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "2"  }
                  ]
            },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "unit"  },
                 {  "prim": "Unit"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "IF_CONS",
               "args": [
                 [  {  "prim": "DUP"  },
                 {  "prim": "CAR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "3"  }
                    ]
                 },
                 {  "prim": "ITER",
                    "args": [
                      [  {  "prim": "DUP"  },
                      {  "prim": "CAR"  },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "3"  }
                         ]
                      },
                      {  "prim": "COMPARE"  },
                      {  "prim": "EQ"  },
                      {  "prim": "NOT"  },
                      {  "prim": "IF",
                         "args": [
                           [  {  "prim": "PUSH",
                                 "args": [
                                   {  "prim": "string"  },
                                   {  "string": "FA2_NOT_OPERATOR"  }
                                 ]
                           },
                           {  "prim": "FAILWITH"  }  ],
                           [    ]
                         ]
                      },
                      {  "prim": "DROP",
                         "args": [
                           {  "int": "1"  }
                         ]
                      }  ]
                    ]
                 },
                 {  "prim": "DUP"  },
                 {  "prim": "SOME"  },
                 {  "prim": "DIP",
                    "args": [
                      {  "int": "1"  },
                      [  {  "prim": "DIG",
                            "args": [
                              {  "int": "3"  }
                            ]
                      },
                      {  "prim": "DROP",
                         "args": [
                           {  "int": "1"  }
                         ]
                      }  ]
                    ]
                 },
                 {  "prim": "DUG",
                    "args": [
                      {  "int": "3"  }
                    ]
                 },
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "3"  }
                    ]
                 }  ],
                 [  {  "prim": "NONE",
                       "args": [
                         {  "prim": "address"  }
                       ]
                 },
                 {  "prim": "SWAP"  },
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "1"  }
                    ]
                 }  ]
               ]
            },
            {  "prim": "DUG",
               "args": [
                 {  "int": "2"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "2"  }
               ]
            }  ]
          ]
       },
       {  "prim": "NIL",
          "args": [
            {  "prim": "operation"  }
          ]
       },
       {  "prim": "DIG",
          "args": [
            {  "int": "7"  }
          ]
       },
       {  "prim": "UNPAIR"  },
       {  "prim": "DIP",
          "args": [
            {  "int": "1"  },
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "11"  }
                  ]
            }  ]
          ]
       },
       {  "prim": "IF_LEFT",
          "args": [
            [  {  "prim": "IF_LEFT",
                  "args": [
                    [  {  "prim": "IF_LEFT",
                          "args": [
                            [  {  "prim": "IF_LEFT",
                                  "args": [
                                    [  {  "prim": "UNPAIR"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "14"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "3"  }
                                       ]
                                    },
                                    {  "prim": "AMOUNT"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "4"  }
                                       ]
                                    },
                                    {  "prim": "MAP",
                                       "args": [
                                         [  {  "prim": "DUP",
                                               "args": [
                                                 {  "int": "11"  }
                                               ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "2"  }
                                            ]
                                         },
                                         {  "prim": "CAR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "3"  }
                                            ]
                                         },
                                         {  "prim": "CDR"  },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "MEM"  },
                                         {  "prim": "IF",
                                            "args": [
                                              [  {  "prim": "DUP",
                                                    "args": [
                                                      {  "int": "11"  }
                                                    ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "2"  }
                                                 ]
                                              },
                                              {  "prim": "CAR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "3"  }
                                                 ]
                                              },
                                              {  "prim": "CDR"  },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "GET"  },
                                              {  "prim": "IF_NONE",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "string"  },
                                                           {  "string": "ledger"  }
                                                         ]
                                                   },
                                                   {  "prim": "PUSH",
                                                      "args": [
                                                        {  "prim": "string"  },
                                                        {  "string": "AssetNotFound"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "FAILWITH"  }  ],
                                                   [    ]
                                                 ]
                                              }  ],
                                              [  {  "prim": "PUSH",
                                                    "args": [
                                                      {  "prim": "nat"  },
                                                      {  "int": "0"  }
                                                    ]
                                              }  ]
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "2"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "SWAP"  },
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "TRANSFER_TOKENS"  },
                                    {  "prim": "CONS"  },
                                    {  "prim": "DIP",
                                       "args": [
                                         {  "int": "1"  },
                                         [  {  "prim": "DIG",
                                               "args": [
                                                 {  "int": "13"  }
                                               ]
                                         },
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "DUG",
                                       "args": [
                                         {  "int": "13"  }
                                       ]
                                    },
                                    {  "prim": "DROP",
                                       "args": [
                                         {  "int": "2"  }
                                       ]
                                    },
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "11"  }
                                       ]
                                    },
                                    {  "prim": "DIG",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  }  ],
                                    [  {  "prim": "DUP",
                                          "args": [
                                            {  "int": "2"  }
                                          ]
                                    },
                                    {  "prim": "SENDER"  },
                                    {  "prim": "COMPARE"  },
                                    {  "prim": "EQ"  },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "InvalidCaller"  }
                                               ]
                                         },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DUP"  },
                                    {  "prim": "SOME"  },
                                    {  "prim": "DIP",
                                       "args": [
                                         {  "int": "1"  },
                                         [  {  "prim": "DIG",
                                               "args": [
                                                 {  "int": "2"  }
                                               ]
                                         },
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "DUG",
                                       "args": [
                                         {  "int": "2"  }
                                       ]
                                    },
                                    {  "prim": "DROP",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "11"  }
                                       ]
                                    },
                                    {  "prim": "DIG",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  }  ]
                                  ]
                            }  ],
                            [  {  "prim": "IF_LEFT",
                                  "args": [
                                    [  {  "prim": "DROP",
                                          "args": [
                                            {  "int": "1"  }
                                          ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "2"  }
                                       ]
                                    },
                                    {  "prim": "IF_NONE",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "NotFound"  }
                                               ]
                                         },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "SENDER"  },
                                    {  "prim": "COMPARE"  },
                                    {  "prim": "EQ"  },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "InvalidCaller"  }
                                               ]
                                         },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "2"  }
                                       ]
                                    },
                                    {  "prim": "IF_NONE",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "NotFound"  }
                                               ]
                                         },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "SWAP"  },
                                    {  "prim": "DROP",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "NONE",
                                       "args": [
                                         {  "prim": "address"  }
                                       ]
                                    },
                                    {  "prim": "DIP",
                                       "args": [
                                         {  "int": "1"  },
                                         [  {  "prim": "DIG",
                                               "args": [
                                                 {  "int": "1"  }
                                               ]
                                         },
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "DUG",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "11"  }
                                       ]
                                    },
                                    {  "prim": "DIG",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  }  ],
                                    [  {  "prim": "DROP",
                                          "args": [
                                            {  "int": "1"  }
                                          ]
                                    },
                                    {  "prim": "DUP"  },
                                    {  "prim": "SENDER"  },
                                    {  "prim": "COMPARE"  },
                                    {  "prim": "EQ"  },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "InvalidCaller"  }
                                               ]
                                         },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "3"  }
                                       ]
                                    },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "CONTRACT_PAUSED"  }
                                               ]
                                         },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "bool"  },
                                         {  "prim": "True"  }
                                       ]
                                    },
                                    {  "prim": "DIP",
                                       "args": [
                                         {  "int": "1"  },
                                         [  {  "prim": "DIG",
                                               "args": [
                                                 {  "int": "2"  }
                                               ]
                                         },
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "DUG",
                                       "args": [
                                         {  "int": "2"  }
                                       ]
                                    },
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "11"  }
                                       ]
                                    },
                                    {  "prim": "DIG",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  }  ]
                                  ]
                            }  ]
                          ]
                    }  ],
                    [  {  "prim": "IF_LEFT",
                          "args": [
                            [  {  "prim": "IF_LEFT",
                                  "args": [
                                    [  {  "prim": "DROP",
                                          "args": [
                                            {  "int": "1"  }
                                          ]
                                    },
                                    {  "prim": "DUP"  },
                                    {  "prim": "SENDER"  },
                                    {  "prim": "COMPARE"  },
                                    {  "prim": "EQ"  },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "InvalidCaller"  }
                                               ]
                                         },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "3"  }
                                       ]
                                    },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "CONTRACT_NOT_PAUSED"  }
                                               ]
                                         },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "bool"  },
                                         {  "prim": "False"  }
                                       ]
                                    },
                                    {  "prim": "DIP",
                                       "args": [
                                         {  "int": "1"  },
                                         [  {  "prim": "DIG",
                                               "args": [
                                                 {  "int": "2"  }
                                               ]
                                         },
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "DUG",
                                       "args": [
                                         {  "int": "2"  }
                                       ]
                                    },
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "11"  }
                                       ]
                                    },
                                    {  "prim": "DIG",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  }  ],
                                    [  {  "prim": "UNPAIR"  },
                                    {  "prim": "SWAP"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "3"  }
                                       ]
                                    },
                                    {  "prim": "SENDER"  },
                                    {  "prim": "COMPARE"  },
                                    {  "prim": "EQ"  },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "InvalidCaller"  }
                                               ]
                                         },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "20"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "6"  }
                                       ]
                                    },
                                    {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "CONTRACT_PAUSED"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  },
                                    {  "prim": "EXEC"  },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "r3"  }
                                               ]
                                         },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "InvalidCondition"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DIG",
                                       "args": [
                                         {  "int": "12"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "2"  }
                                       ]
                                    },
                                    {  "prim": "SOME"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "4"  }
                                       ]
                                    },
                                    {  "prim": "UPDATE"  },
                                    {  "prim": "DUG",
                                       "args": [
                                         {  "int": "12"  }
                                       ]
                                    },
                                    {  "prim": "DROP",
                                       "args": [
                                         {  "int": "2"  }
                                       ]
                                    },
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "11"  }
                                       ]
                                    },
                                    {  "prim": "DIG",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  }  ]
                                  ]
                            }  ],
                            [  {  "prim": "IF_LEFT",
                                  "args": [
                                    [  {  "prim": "DUP",
                                          "args": [
                                            {  "int": "19"  }
                                          ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "5"  }
                                       ]
                                    },
                                    {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "CONTRACT_PAUSED"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  },
                                    {  "prim": "EXEC"  },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "r0"  }
                                               ]
                                         },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "InvalidCondition"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DUP"  },
                                    {  "prim": "ITER",
                                       "args": [
                                         [  {  "prim": "DUP"  },
                                         {  "prim": "IF_LEFT",
                                            "args": [
                                              [  {  "prim": "SENDER"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "2"  }
                                                 ]
                                              },
                                              {  "prim": "CAR"  },
                                              {  "prim": "COMPARE"  },
                                              {  "prim": "EQ"  },
                                              {  "prim": "NOT"  },
                                              {  "prim": "IF",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "string"  },
                                                           {  "string": "CALLER_NOT_OWNER"  }
                                                         ]
                                                   },
                                                   {  "prim": "FAILWITH"  }  ],
                                                   [    ]
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "9"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "2"  }
                                                 ]
                                              },
                                              {  "prim": "CAR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "3"  }
                                                 ]
                                              },
                                              {  "prim": "CDR"  },
                                              {  "prim": "CDR"  },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "3"  }
                                                 ]
                                              },
                                              {  "prim": "CDR"  },
                                              {  "prim": "CAR"  },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "MEM"  },
                                              {  "prim": "IF",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "string"  },
                                                           {  "string": "operator"  }
                                                         ]
                                                   },
                                                   {  "prim": "PUSH",
                                                      "args": [
                                                        {  "prim": "string"  },
                                                        {  "string": "KeyExists"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "FAILWITH"  }  ],
                                                   [  {  "prim": "DUP",
                                                         "args": [
                                                           {  "int": "9"  }
                                                         ]
                                                   },
                                                   {  "prim": "PUSH",
                                                      "args": [
                                                        {  "prim": "unit"  },
                                                        {  "prim": "Unit"  }
                                                      ]
                                                   },
                                                   {  "prim": "SOME"  },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "3"  }
                                                      ]
                                                   },
                                                   {  "prim": "CAR"  },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "4"  }
                                                      ]
                                                   },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "4"  }
                                                      ]
                                                   },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CAR"  },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "UPDATE"  },
                                                   {  "prim": "DIP",
                                                      "args": [
                                                        {  "int": "1"  },
                                                        [  {  "prim": "DIG",
                                                              "args": [
                                                                {  "int": "8"  }
                                                              ]
                                                        },
                                                        {  "prim": "DROP",
                                                           "args": [
                                                             {  "int": "1"  }
                                                           ]
                                                        }  ]
                                                      ]
                                                   },
                                                   {  "prim": "DUG",
                                                      "args": [
                                                        {  "int": "8"  }
                                                      ]
                                                   }  ]
                                                 ]
                                              },
                                              {  "prim": "DROP",
                                                 "args": [
                                                   {  "int": "1"  }
                                                 ]
                                              }  ],
                                              [  {  "prim": "SENDER"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "2"  }
                                                 ]
                                              },
                                              {  "prim": "CAR"  },
                                              {  "prim": "COMPARE"  },
                                              {  "prim": "EQ"  },
                                              {  "prim": "NOT"  },
                                              {  "prim": "IF",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "string"  },
                                                           {  "string": "CALLER_NOT_OWNER"  }
                                                         ]
                                                   },
                                                   {  "prim": "FAILWITH"  }  ],
                                                   [    ]
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "9"  }
                                                 ]
                                              },
                                              {  "prim": "NONE",
                                                 "args": [
                                                   {  "prim": "unit"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "3"  }
                                                 ]
                                              },
                                              {  "prim": "CAR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "4"  }
                                                 ]
                                              },
                                              {  "prim": "CDR"  },
                                              {  "prim": "CDR"  },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "4"  }
                                                 ]
                                              },
                                              {  "prim": "CDR"  },
                                              {  "prim": "CAR"  },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "UPDATE"  },
                                              {  "prim": "DIP",
                                                 "args": [
                                                   {  "int": "1"  },
                                                   [  {  "prim": "DIG",
                                                         "args": [
                                                           {  "int": "8"  }
                                                         ]
                                                   },
                                                   {  "prim": "DROP",
                                                      "args": [
                                                        {  "int": "1"  }
                                                      ]
                                                   }  ]
                                                 ]
                                              },
                                              {  "prim": "DUG",
                                                 "args": [
                                                   {  "int": "8"  }
                                                 ]
                                              },
                                              {  "prim": "DROP",
                                                 "args": [
                                                   {  "int": "1"  }
                                                 ]
                                              }  ]
                                            ]
                                         },
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "DROP",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "11"  }
                                       ]
                                    },
                                    {  "prim": "DIG",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  }  ],
                                    [  {  "prim": "DUP",
                                          "args": [
                                            {  "int": "19"  }
                                          ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "5"  }
                                       ]
                                    },
                                    {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "CONTRACT_PAUSED"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  },
                                    {  "prim": "EXEC"  },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "r1"  }
                                               ]
                                         },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "InvalidCondition"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DUP"  },
                                    {  "prim": "ITER",
                                       "args": [
                                         [  {  "prim": "DUP"  },
                                         {  "prim": "IF_LEFT",
                                            "args": [
                                              [  {  "prim": "DUP",
                                                    "args": [
                                                      {  "int": "12"  }
                                                    ]
                                              },
                                              {  "prim": "SENDER"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "3"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "MEM"  },
                                              {  "prim": "IF",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "string"  },
                                                           {  "string": "operator_for_all"  }
                                                         ]
                                                   },
                                                   {  "prim": "PUSH",
                                                      "args": [
                                                        {  "prim": "string"  },
                                                        {  "string": "KeyExists"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "FAILWITH"  }  ],
                                                   [  {  "prim": "DUP",
                                                         "args": [
                                                           {  "int": "12"  }
                                                         ]
                                                   },
                                                   {  "prim": "PUSH",
                                                      "args": [
                                                        {  "prim": "unit"  },
                                                        {  "prim": "Unit"  }
                                                      ]
                                                   },
                                                   {  "prim": "SOME"  },
                                                   {  "prim": "SENDER"  },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "4"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "UPDATE"  },
                                                   {  "prim": "DIP",
                                                      "args": [
                                                        {  "int": "1"  },
                                                        [  {  "prim": "DIG",
                                                              "args": [
                                                                {  "int": "11"  }
                                                              ]
                                                        },
                                                        {  "prim": "DROP",
                                                           "args": [
                                                             {  "int": "1"  }
                                                           ]
                                                        }  ]
                                                      ]
                                                   },
                                                   {  "prim": "DUG",
                                                      "args": [
                                                        {  "int": "11"  }
                                                      ]
                                                   }  ]
                                                 ]
                                              },
                                              {  "prim": "DROP",
                                                 "args": [
                                                   {  "int": "1"  }
                                                 ]
                                              }  ],
                                              [  {  "prim": "DUP",
                                                    "args": [
                                                      {  "int": "12"  }
                                                    ]
                                              },
                                              {  "prim": "NONE",
                                                 "args": [
                                                   {  "prim": "unit"  }
                                                 ]
                                              },
                                              {  "prim": "SENDER"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "4"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "UPDATE"  },
                                              {  "prim": "DIP",
                                                 "args": [
                                                   {  "int": "1"  },
                                                   [  {  "prim": "DIG",
                                                         "args": [
                                                           {  "int": "11"  }
                                                         ]
                                                   },
                                                   {  "prim": "DROP",
                                                      "args": [
                                                        {  "int": "1"  }
                                                      ]
                                                   }  ]
                                                 ]
                                              },
                                              {  "prim": "DUG",
                                                 "args": [
                                                   {  "int": "11"  }
                                                 ]
                                              },
                                              {  "prim": "DROP",
                                                 "args": [
                                                   {  "int": "1"  }
                                                 ]
                                              }  ]
                                            ]
                                         },
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "DROP",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "11"  }
                                       ]
                                    },
                                    {  "prim": "DIG",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  }  ]
                                  ]
                            }  ]
                          ]
                    }  ]
                  ]
            }  ],
            [  {  "prim": "IF_LEFT",
                  "args": [
                    [  {  "prim": "IF_LEFT",
                          "args": [
                            [  {  "prim": "IF_LEFT",
                                  "args": [
                                    [  {  "prim": "DUP",
                                          "args": [
                                            {  "int": "2"  }
                                          ]
                                    },
                                    {  "prim": "SENDER"  },
                                    {  "prim": "COMPARE"  },
                                    {  "prim": "EQ"  },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "InvalidCaller"  }
                                               ]
                                         },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "19"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "5"  }
                                       ]
                                    },
                                    {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "CONTRACT_PAUSED"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  },
                                    {  "prim": "EXEC"  },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "r6"  }
                                               ]
                                         },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "InvalidCondition"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DUP"  },
                                    {  "prim": "DIP",
                                       "args": [
                                         {  "int": "1"  },
                                         [  {  "prim": "DIG",
                                               "args": [
                                                 {  "int": "10"  }
                                               ]
                                         },
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "DUG",
                                       "args": [
                                         {  "int": "10"  }
                                       ]
                                    },
                                    {  "prim": "DROP",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "11"  }
                                       ]
                                    },
                                    {  "prim": "DIG",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  }  ],
                                    [  {  "prim": "UNPAIR"  },
                                    {  "prim": "SWAP"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "20"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "6"  }
                                       ]
                                    },
                                    {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "CONTRACT_PAUSED"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  },
                                    {  "prim": "EXEC"  },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "r7"  }
                                               ]
                                         },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "InvalidCondition"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "2"  }
                                       ]
                                    },
                                    {  "prim": "IF_NONE",
                                       "args": [
                                         [    ],
                                         [  {  "prim": "DUP",
                                               "args": [
                                                 {  "int": "13"  }
                                               ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "2"  }
                                            ]
                                         },
                                         {  "prim": "COMPARE"  },
                                         {  "prim": "GE"  },
                                         {  "prim": "IF",
                                            "args": [
                                              [  {  "prim": "PUSH",
                                                    "args": [
                                                      {  "prim": "string"  },
                                                      {  "string": "EXPIRY_TOO_BIG"  }
                                                    ]
                                              },
                                              {  "prim": "FAILWITH"  }  ],
                                              [    ]
                                            ]
                                         },
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "10"  }
                                       ]
                                    },
                                    {  "prim": "SENDER"  },
                                    {  "prim": "MEM"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "DUP"  },
                                         {  "prim": "IF_NONE",
                                            "args": [
                                              [  {  "prim": "DUP",
                                                    "args": [
                                                      {  "int": "10"  }
                                                    ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "11"  }
                                                 ]
                                              },
                                              {  "prim": "SENDER"  },
                                              {  "prim": "GET"  },
                                              {  "prim": "IF_NONE",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "string"  },
                                                           {  "string": "permits"  }
                                                         ]
                                                   },
                                                   {  "prim": "PUSH",
                                                      "args": [
                                                        {  "prim": "string"  },
                                                        {  "string": "AssetNotFound"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "FAILWITH"  }  ],
                                                   [    ]
                                                 ]
                                              },
                                              {  "prim": "UNPAIR"  },
                                              {  "prim": "SWAP"  },
                                              {  "prim": "UNPAIR"  },
                                              {  "prim": "DROP",
                                                 "args": [
                                                   {  "int": "1"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "5"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "SWAP"  },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "SOME"  },
                                              {  "prim": "SENDER"  },
                                              {  "prim": "UPDATE"  },
                                              {  "prim": "DIP",
                                                 "args": [
                                                   {  "int": "1"  },
                                                   [  {  "prim": "DIG",
                                                         "args": [
                                                           {  "int": "9"  }
                                                         ]
                                                   },
                                                   {  "prim": "DROP",
                                                      "args": [
                                                        {  "int": "1"  }
                                                      ]
                                                   }  ]
                                                 ]
                                              },
                                              {  "prim": "DUG",
                                                 "args": [
                                                   {  "int": "9"  }
                                                 ]
                                              }  ],
                                              [  {  "prim": "DUP",
                                                    "args": [
                                                      {  "int": "11"  }
                                                    ]
                                              },
                                              {  "prim": "SENDER"  },
                                              {  "prim": "GET"  },
                                              {  "prim": "IF_NONE",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "string"  },
                                                           {  "string": "permits"  }
                                                         ]
                                                   },
                                                   {  "prim": "PUSH",
                                                      "args": [
                                                        {  "prim": "string"  },
                                                        {  "string": "AssetNotFound"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "FAILWITH"  }  ],
                                                   [    ]
                                                 ]
                                              },
                                              {  "prim": "CDR"  },
                                              {  "prim": "CDR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "2"  }
                                                 ]
                                              },
                                              {  "prim": "MEM"  },
                                              {  "prim": "IF",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "bool"  },
                                                           {  "prim": "True"  }
                                                         ]
                                                   },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "4"  }
                                                      ]
                                                   },
                                                   {  "prim": "IF_NONE",
                                                      "args": [
                                                        [    ],
                                                        [  {  "prim": "PUSH",
                                                              "args": [
                                                                {  "prim": "nat"  },
                                                                {  "int": "0"  }
                                                              ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "2"  }
                                                           ]
                                                        },
                                                        {  "prim": "COMPARE"  },
                                                        {  "prim": "EQ"  },
                                                        {  "prim": "IF",
                                                           "args": [
                                                             [  {  "prim": "PUSH",
                                                                   "args": [

                                                                   {  "prim": "bool"  },
                                                                   {  "prim": "False"  }
                                                                   ]
                                                             },
                                                             {  "prim": "DIP",
                                                                "args": [
                                                                  {  "int": "1"  },
                                                                  [  {
                                                                  "prim": "DIG",
                                                                  "args": [
                                                                    {  "int": "1"  }
                                                                  ]
                                                                  },
                                                                  {
                                                                  "prim": "DROP",
                                                                  "args": [
                                                                    {  "int": "1"  }
                                                                  ]
                                                                  }  ]
                                                                ]
                                                             },
                                                             {  "prim": "DUG",
                                                                "args": [
                                                                  {  "int": "1"  }
                                                                ]
                                                             },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "13"  }
                                                                ]
                                                             },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "14"  }
                                                                ]
                                                             },
                                                             {  "prim": "SENDER"  },
                                                             {  "prim": "GET"  },
                                                             {  "prim": "IF_NONE",
                                                                "args": [
                                                                  [  {
                                                                  "prim": "PUSH",
                                                                  "args": [
                                                                    {  "prim": "string"  },
                                                                    {  "string": "permits"  }
                                                                  ]
                                                                  },
                                                                  {
                                                                  "prim": "PUSH",
                                                                  "args": [
                                                                    {  "prim": "string"  },
                                                                    {  "string": "AssetNotFound"  }
                                                                  ]
                                                                  },
                                                                  {  "prim": "PAIR"  },
                                                                  {  "prim": "FAILWITH"  }  ],
                                                                  [    ]
                                                                ]
                                                             },
                                                             {  "prim": "UNPAIR"  },
                                                             {  "prim": "SWAP"  },
                                                             {  "prim": "UNPAIR"  },
                                                             {  "prim": "SWAP"  },
                                                             {  "prim": "DROP",
                                                                "args": [
                                                                  {  "int": "1"  }
                                                                ]
                                                             },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "16"  }
                                                                ]
                                                             },
                                                             {  "prim": "SENDER"  },
                                                             {  "prim": "GET"  },
                                                             {  "prim": "IF_NONE",
                                                                "args": [
                                                                  [  {
                                                                  "prim": "PUSH",
                                                                  "args": [
                                                                    {  "prim": "string"  },
                                                                    {  "string": "permits"  }
                                                                  ]
                                                                  },
                                                                  {
                                                                  "prim": "PUSH",
                                                                  "args": [
                                                                    {  "prim": "string"  },
                                                                    {  "string": "AssetNotFound"  }
                                                                  ]
                                                                  },
                                                                  {  "prim": "PAIR"  },
                                                                  {  "prim": "FAILWITH"  }  ],
                                                                  [    ]
                                                                ]
                                                             },
                                                             {  "prim": "CDR"  },
                                                             {  "prim": "CDR"  },
                                                             {  "prim": "NONE",
                                                                "args": [
                                                                  {
                                                                  "prim": "pair",
                                                                  "args": [
                                                                    {
                                                                    "prim": "option",
                                                                    "args": [

                                                                    {  "prim": "nat"  }
                                                                    ]
                                                                    },
                                                                    {  "prim": "timestamp"  }
                                                                  ]
                                                                  }
                                                                ]
                                                             },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "8"  }
                                                                ]
                                                             },
                                                             {  "prim": "UPDATE"  },
                                                             {  "prim": "SWAP"  },
                                                             {  "prim": "PAIR"  },
                                                             {  "prim": "SWAP"  },
                                                             {  "prim": "PAIR"  },
                                                             {  "prim": "SOME"  },
                                                             {  "prim": "SENDER"  },
                                                             {  "prim": "UPDATE"  },
                                                             {  "prim": "DIP",
                                                                "args": [
                                                                  {  "int": "1"  },
                                                                  [  {
                                                                  "prim": "DIG",
                                                                  "args": [
                                                                    {  "int": "12"  }
                                                                  ]
                                                                  },
                                                                  {
                                                                  "prim": "DROP",
                                                                  "args": [
                                                                    {  "int": "1"  }
                                                                  ]
                                                                  }  ]
                                                                ]
                                                             },
                                                             {  "prim": "DUG",
                                                                "args": [
                                                                  {  "int": "12"  }
                                                                ]
                                                             }  ],
                                                             [    ]
                                                           ]
                                                        },
                                                        {  "prim": "DROP",
                                                           "args": [
                                                             {  "int": "1"  }
                                                           ]
                                                        }  ]
                                                      ]
                                                   },
                                                   {  "prim": "DUP"  },
                                                   {  "prim": "IF",
                                                      "args": [
                                                        [  {  "prim": "DUP",
                                                              "args": [
                                                                {  "int": "12"  }
                                                              ]
                                                        },
                                                        {  "prim": "SENDER"  },
                                                        {  "prim": "GET"  },
                                                        {  "prim": "IF_NONE",
                                                           "args": [
                                                             [  {  "prim": "PUSH",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {  "string": "permits"  }
                                                                   ]
                                                             },
                                                             {  "prim": "PUSH",
                                                                "args": [
                                                                  {  "prim": "string"  },
                                                                  {  "string": "AssetNotFound"  }
                                                                ]
                                                             },
                                                             {  "prim": "PAIR"  },
                                                             {  "prim": "FAILWITH"  }  ],
                                                             [    ]
                                                           ]
                                                        },
                                                        {  "prim": "CDR"  },
                                                        {  "prim": "CDR"  },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "3"  }
                                                           ]
                                                        },
                                                        {  "prim": "GET"  },
                                                        {  "prim": "IF_NONE",
                                                           "args": [
                                                             [  {  "prim": "PUSH",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {  "string": "NotFound"  }
                                                                   ]
                                                             },
                                                             {  "prim": "FAILWITH"  }  ],
                                                             [    ]
                                                           ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "13"  }
                                                           ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "14"  }
                                                           ]
                                                        },
                                                        {  "prim": "SENDER"  },
                                                        {  "prim": "GET"  },
                                                        {  "prim": "IF_NONE",
                                                           "args": [
                                                             [  {  "prim": "PUSH",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {  "string": "permits"  }
                                                                   ]
                                                             },
                                                             {  "prim": "PUSH",
                                                                "args": [
                                                                  {  "prim": "string"  },
                                                                  {  "string": "AssetNotFound"  }
                                                                ]
                                                             },
                                                             {  "prim": "PAIR"  },
                                                             {  "prim": "FAILWITH"  }  ],
                                                             [    ]
                                                           ]
                                                        },
                                                        {  "prim": "UNPAIR"  },
                                                        {  "prim": "SWAP"  },
                                                        {  "prim": "UNPAIR"  },
                                                        {  "prim": "SWAP"  },
                                                        {  "prim": "DROP",
                                                           "args": [
                                                             {  "int": "1"  }
                                                           ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "16"  }
                                                           ]
                                                        },
                                                        {  "prim": "SENDER"  },
                                                        {  "prim": "GET"  },
                                                        {  "prim": "IF_NONE",
                                                           "args": [
                                                             [  {  "prim": "PUSH",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {  "string": "permits"  }
                                                                   ]
                                                             },
                                                             {  "prim": "PUSH",
                                                                "args": [
                                                                  {  "prim": "string"  },
                                                                  {  "string": "AssetNotFound"  }
                                                                ]
                                                             },
                                                             {  "prim": "PAIR"  },
                                                             {  "prim": "FAILWITH"  }  ],
                                                             [    ]
                                                           ]
                                                        },
                                                        {  "prim": "CDR"  },
                                                        {  "prim": "CDR"  },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "5"  }
                                                           ]
                                                        },
                                                        {  "prim": "UNPAIR"  },
                                                        {  "prim": "DROP",
                                                           "args": [
                                                             {  "int": "1"  }
                                                           ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "10"  }
                                                           ]
                                                        },
                                                        {  "prim": "PAIR"  },
                                                        {  "prim": "SOME"  },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "8"  }
                                                           ]
                                                        },
                                                        {  "prim": "UPDATE"  },
                                                        {  "prim": "SWAP"  },
                                                        {  "prim": "PAIR"  },
                                                        {  "prim": "SWAP"  },
                                                        {  "prim": "PAIR"  },
                                                        {  "prim": "SOME"  },
                                                        {  "prim": "SENDER"  },
                                                        {  "prim": "UPDATE"  },
                                                        {  "prim": "DIP",
                                                           "args": [
                                                             {  "int": "1"  },
                                                             [  {  "prim": "DIG",
                                                                   "args": [

                                                                   {  "int": "12"  }
                                                                   ]
                                                             },
                                                             {  "prim": "DROP",
                                                                "args": [
                                                                  {  "int": "1"  }
                                                                ]
                                                             }  ]
                                                           ]
                                                        },
                                                        {  "prim": "DUG",
                                                           "args": [
                                                             {  "int": "12"  }
                                                           ]
                                                        },
                                                        {  "prim": "DROP",
                                                           "args": [
                                                             {  "int": "1"  }
                                                           ]
                                                        }  ],
                                                        [    ]
                                                      ]
                                                   },
                                                   {  "prim": "DROP",
                                                      "args": [
                                                        {  "int": "1"  }
                                                      ]
                                                   }  ],
                                                   [  {  "prim": "DUP"  },
                                                   {  "prim": "SENDER"  },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "PUSH",
                                                      "args": [
                                                        {  "prim": "string"  },
                                                        {  "string": "PERMIT_NOT_FOUND"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "FAILWITH"  }  ]
                                                 ]
                                              },
                                              {  "prim": "DROP",
                                                 "args": [
                                                   {  "int": "1"  }
                                                 ]
                                              }  ]
                                            ]
                                         }  ],
                                         [  {  "prim": "SENDER"  },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "PERMIT_USER_NOT_FOUND"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "FAILWITH"  }  ]
                                       ]
                                    },
                                    {  "prim": "DROP",
                                       "args": [
                                         {  "int": "2"  }
                                       ]
                                    },
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "11"  }
                                       ]
                                    },
                                    {  "prim": "DIG",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  }  ]
                                  ]
                            }  ],
                            [  {  "prim": "IF_LEFT",
                                  "args": [
                                    [  {  "prim": "UNPAIR"  },
                                    {  "prim": "SWAP"  },
                                    {  "prim": "UNPAIR"  },
                                    {  "prim": "SWAP"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "21"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "7"  }
                                       ]
                                    },
                                    {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "CONTRACT_PAUSED"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  },
                                    {  "prim": "EXEC"  },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "r5"  }
                                               ]
                                         },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "InvalidCondition"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "3"  }
                                       ]
                                    },
                                    {  "prim": "HASH_KEY"  },
                                    {  "prim": "IMPLICIT_ACCOUNT"  },
                                    {  "prim": "ADDRESS"  },
                                    {  "prim": "EMPTY_MAP",
                                       "args": [
                                         {  "prim": "bytes"  },
                                         {  "prim": "pair",
                                            "args": [
                                              {  "prim": "option",
                                                 "args": [
                                                   {  "prim": "nat"  }
                                                 ]
                                                 ,
                                                 "annots": [
                                                   "%expiry"
                                                 ]
                                              },
                                              {  "prim": "timestamp",
                                                 "annots": [
                                                   "%created_at"
                                                 ]
                                              }
                                            ]
                                         }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "13"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "3"  }
                                       ]
                                    },
                                    {  "prim": "MEM"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "DUP",
                                               "args": [
                                                 {  "int": "13"  }
                                               ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "3"  }
                                            ]
                                         },
                                         {  "prim": "GET"  },
                                         {  "prim": "IF_NONE",
                                            "args": [
                                              [  {  "prim": "PUSH",
                                                    "args": [
                                                      {  "prim": "string"  },
                                                      {  "string": "permits"  }
                                                    ]
                                              },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "AssetNotFound"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "FAILWITH"  }  ],
                                              [    ]
                                            ]
                                         },
                                         {  "prim": "CDR"  },
                                         {  "prim": "CDR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "14"  }
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "4"  }
                                            ]
                                         },
                                         {  "prim": "GET"  },
                                         {  "prim": "IF_NONE",
                                            "args": [
                                              [  {  "prim": "PUSH",
                                                    "args": [
                                                      {  "prim": "string"  },
                                                      {  "string": "permits"  }
                                                    ]
                                              },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "AssetNotFound"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "FAILWITH"  }  ],
                                              [    ]
                                            ]
                                         },
                                         {  "prim": "CAR"  },
                                         {  "prim": "PAIR"  }  ],
                                         [  {  "prim": "DUP"  },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "nat"  },
                                              {  "int": "0"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  }  ]
                                       ]
                                    },
                                    {  "prim": "DUP"  },
                                    {  "prim": "CAR"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "2"  }
                                       ]
                                    },
                                    {  "prim": "CDR"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "6"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "3"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  },
                                    {  "prim": "CHAIN_ID"  },
                                    {  "prim": "SELF_ADDRESS"  },
                                    {  "prim": "PAIR"  },
                                    {  "prim": "PAIR"  },
                                    {  "prim": "PACK"  },
                                    {  "prim": "DUP"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "9"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "11"  }
                                       ]
                                    },
                                    {  "prim": "CHECK_SIGNATURE"  },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "DUP"  },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "MISSIGNED"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "25"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "7"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "21"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "19"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  },
                                    {  "prim": "EXEC"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "18"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "8"  }
                                       ]
                                    },
                                    {  "prim": "MEM"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "DUP",
                                               "args": [
                                                 {  "int": "18"  }
                                               ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "8"  }
                                            ]
                                         },
                                         {  "prim": "GET"  },
                                         {  "prim": "IF_NONE",
                                            "args": [
                                              [  {  "prim": "PUSH",
                                                    "args": [
                                                      {  "prim": "string"  },
                                                      {  "string": "permits"  }
                                                    ]
                                              },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "AssetNotFound"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "FAILWITH"  }  ],
                                              [    ]
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "19"  }
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "20"  }
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "10"  }
                                            ]
                                         },
                                         {  "prim": "GET"  },
                                         {  "prim": "IF_NONE",
                                            "args": [
                                              [  {  "prim": "PUSH",
                                                    "args": [
                                                      {  "prim": "string"  },
                                                      {  "string": "permits"  }
                                                    ]
                                              },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "AssetNotFound"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "FAILWITH"  }  ],
                                              [    ]
                                            ]
                                         },
                                         {  "prim": "UNPAIR"  },
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "nat"  },
                                              {  "int": "1"  }
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "4"  }
                                            ]
                                         },
                                         {  "prim": "CAR"  },
                                         {  "prim": "ADD"  },
                                         {  "prim": "SWAP"  },
                                         {  "prim": "UNPAIR"  },
                                         {  "prim": "SWAP"  },
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "7"  }
                                            ]
                                         },
                                         {  "prim": "NOW"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "7"  }
                                            ]
                                         },
                                         {  "prim": "SOME"  },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "SOME"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "14"  }
                                            ]
                                         },
                                         {  "prim": "UPDATE"  },
                                         {  "prim": "SWAP"  },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "SWAP"  },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "SOME"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "10"  }
                                            ]
                                         },
                                         {  "prim": "UPDATE"  },
                                         {  "prim": "DIP",
                                            "args": [
                                              {  "int": "1"  },
                                              [  {  "prim": "DIG",
                                                    "args": [
                                                      {  "int": "18"  }
                                                    ]
                                              },
                                              {  "prim": "DROP",
                                                 "args": [
                                                   {  "int": "1"  }
                                                 ]
                                              }  ]
                                            ]
                                         },
                                         {  "prim": "DUG",
                                            "args": [
                                              {  "int": "18"  }
                                            ]
                                         },
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         }  ],
                                         [  {  "prim": "DUP",
                                               "args": [
                                                 {  "int": "18"  }
                                               ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "8"  }
                                            ]
                                         },
                                         {  "prim": "MEM"  },
                                         {  "prim": "IF",
                                            "args": [
                                              [  {  "prim": "PUSH",
                                                    "args": [
                                                      {  "prim": "string"  },
                                                      {  "string": "permits"  }
                                                    ]
                                              },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "KeyExists"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "FAILWITH"  }  ],
                                              [  {  "prim": "DUP",
                                                    "args": [
                                                      {  "int": "18"  }
                                                    ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "4"  }
                                                 ]
                                              },
                                              {  "prim": "NOW"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "4"  }
                                                 ]
                                              },
                                              {  "prim": "SOME"  },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "SOME"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "11"  }
                                                 ]
                                              },
                                              {  "prim": "UPDATE"  },
                                              {  "prim": "NONE",
                                                 "args": [
                                                   {  "prim": "nat"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "nat"  },
                                                   {  "int": "1"  }
                                                 ]
                                              },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "nat"  },
                                                   {  "int": "0"  }
                                                 ]
                                              },
                                              {  "prim": "ADD"  },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "SOME"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "9"  }
                                                 ]
                                              },
                                              {  "prim": "UPDATE"  },
                                              {  "prim": "DIP",
                                                 "args": [
                                                   {  "int": "1"  },
                                                   [  {  "prim": "DIG",
                                                         "args": [
                                                           {  "int": "17"  }
                                                         ]
                                                   },
                                                   {  "prim": "DROP",
                                                      "args": [
                                                        {  "int": "1"  }
                                                      ]
                                                   }  ]
                                                 ]
                                              },
                                              {  "prim": "DUG",
                                                 "args": [
                                                   {  "int": "17"  }
                                                 ]
                                              }  ]
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "18"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "8"  }
                                       ]
                                    },
                                    {  "prim": "GET"  },
                                    {  "prim": "IF_NONE",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "permits"  }
                                               ]
                                         },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "AssetNotFound"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "CDR"  },
                                    {  "prim": "CDR"  },
                                    {  "prim": "ITER",
                                       "args": [
                                         [  {  "prim": "UNPAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "26"  }
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "4"  }
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "4"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "EXEC"  },
                                         {  "prim": "IF",
                                            "args": [
                                              [  {  "prim": "DUP",
                                                    "args": [
                                                      {  "int": "20"  }
                                                    ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "21"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "11"  }
                                                 ]
                                              },
                                              {  "prim": "GET"  },
                                              {  "prim": "IF_NONE",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "string"  },
                                                           {  "string": "permits"  }
                                                         ]
                                                   },
                                                   {  "prim": "PUSH",
                                                      "args": [
                                                        {  "prim": "string"  },
                                                        {  "string": "AssetNotFound"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "FAILWITH"  }  ],
                                                   [    ]
                                                 ]
                                              },
                                              {  "prim": "UNPAIR"  },
                                              {  "prim": "SWAP"  },
                                              {  "prim": "UNPAIR"  },
                                              {  "prim": "SWAP"  },
                                              {  "prim": "DROP",
                                                 "args": [
                                                   {  "int": "1"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "23"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "13"  }
                                                 ]
                                              },
                                              {  "prim": "GET"  },
                                              {  "prim": "IF_NONE",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "string"  },
                                                           {  "string": "permits"  }
                                                         ]
                                                   },
                                                   {  "prim": "PUSH",
                                                      "args": [
                                                        {  "prim": "string"  },
                                                        {  "string": "AssetNotFound"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "FAILWITH"  }  ],
                                                   [    ]
                                                 ]
                                              },
                                              {  "prim": "CDR"  },
                                              {  "prim": "CDR"  },
                                              {  "prim": "NONE",
                                                 "args": [
                                                   {  "prim": "pair",
                                                      "args": [
                                                        {  "prim": "option",
                                                           "args": [
                                                             {  "prim": "nat"  }
                                                           ]
                                                        },
                                                        {  "prim": "timestamp"  }
                                                      ]
                                                   }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "6"  }
                                                 ]
                                              },
                                              {  "prim": "UPDATE"  },
                                              {  "prim": "SWAP"  },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "SWAP"  },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "SOME"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "11"  }
                                                 ]
                                              },
                                              {  "prim": "UPDATE"  },
                                              {  "prim": "DIP",
                                                 "args": [
                                                   {  "int": "1"  },
                                                   [  {  "prim": "DIG",
                                                         "args": [
                                                           {  "int": "19"  }
                                                         ]
                                                   },
                                                   {  "prim": "DROP",
                                                      "args": [
                                                        {  "int": "1"  }
                                                      ]
                                                   }  ]
                                                 ]
                                              },
                                              {  "prim": "DUG",
                                                 "args": [
                                                   {  "int": "19"  }
                                                 ]
                                              }  ],
                                              [    ]
                                            ]
                                         },
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "2"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "DROP",
                                       "args": [
                                         {  "int": "10"  }
                                       ]
                                    },
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "11"  }
                                       ]
                                    },
                                    {  "prim": "DIG",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  }  ],
                                    [  {  "prim": "DUP"  },
                                    {  "prim": "ITER",
                                       "args": [
                                         [  {  "prim": "DUP"  },
                                         {  "prim": "CDR"  },
                                         {  "prim": "CAR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "2"  }
                                            ]
                                         },
                                         {  "prim": "CDR"  },
                                         {  "prim": "CDR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "2"  }
                                            ]
                                         },
                                         {  "prim": "HASH_KEY"  },
                                         {  "prim": "IMPLICIT_ACCOUNT"  },
                                         {  "prim": "ADDRESS"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "13"  }
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "2"  }
                                            ]
                                         },
                                         {  "prim": "MEM"  },
                                         {  "prim": "IF",
                                            "args": [
                                              [  {  "prim": "DUP",
                                                    "args": [
                                                      {  "int": "13"  }
                                                    ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "2"  }
                                                 ]
                                              },
                                              {  "prim": "GET"  },
                                              {  "prim": "IF_NONE",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "string"  },
                                                           {  "string": "permits"  }
                                                         ]
                                                   },
                                                   {  "prim": "PUSH",
                                                      "args": [
                                                        {  "prim": "string"  },
                                                        {  "string": "AssetNotFound"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "FAILWITH"  }  ],
                                                   [    ]
                                                 ]
                                              },
                                              {  "prim": "CAR"  }  ],
                                              [  {  "prim": "PUSH",
                                                    "args": [
                                                      {  "prim": "nat"  },
                                                      {  "int": "0"  }
                                                    ]
                                              }  ]
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "5"  }
                                            ]
                                         },
                                         {  "prim": "CAR"  },
                                         {  "prim": "PACK"  },
                                         {  "prim": "BLAKE2B"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "2"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "SELF_ADDRESS"  },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "PACK"  },
                                         {  "prim": "DUP"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "5"  }
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "7"  }
                                            ]
                                         },
                                         {  "prim": "CHECK_SIGNATURE"  },
                                         {  "prim": "NOT"  },
                                         {  "prim": "IF",
                                            "args": [
                                              [  {  "prim": "DUP"  },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "MISSIGNED"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "FAILWITH"  }  ],
                                              [    ]
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "15"  }
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "4"  }
                                            ]
                                         },
                                         {  "prim": "MEM"  },
                                         {  "prim": "IF",
                                            "args": [
                                              [  {  "prim": "DUP",
                                                    "args": [
                                                      {  "int": "15"  }
                                                    ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "16"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "5"  }
                                                 ]
                                              },
                                              {  "prim": "GET"  },
                                              {  "prim": "IF_NONE",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "string"  },
                                                           {  "string": "permits"  }
                                                         ]
                                                   },
                                                   {  "prim": "PUSH",
                                                      "args": [
                                                        {  "prim": "string"  },
                                                        {  "string": "AssetNotFound"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "FAILWITH"  }  ],
                                                   [    ]
                                                 ]
                                              },
                                              {  "prim": "UNPAIR"  },
                                              {  "prim": "DROP",
                                                 "args": [
                                                   {  "int": "1"  }
                                                 ]
                                              },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "nat"  },
                                                   {  "int": "1"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "5"  }
                                                 ]
                                              },
                                              {  "prim": "ADD"  },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "SOME"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "5"  }
                                                 ]
                                              },
                                              {  "prim": "UPDATE"  },
                                              {  "prim": "DIP",
                                                 "args": [
                                                   {  "int": "1"  },
                                                   [  {  "prim": "DIG",
                                                         "args": [
                                                           {  "int": "14"  }
                                                         ]
                                                   },
                                                   {  "prim": "DROP",
                                                      "args": [
                                                        {  "int": "1"  }
                                                      ]
                                                   }  ]
                                                 ]
                                              },
                                              {  "prim": "DUG",
                                                 "args": [
                                                   {  "int": "14"  }
                                                 ]
                                              }  ],
                                              [  {  "prim": "DUP",
                                                    "args": [
                                                      {  "int": "15"  }
                                                    ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "4"  }
                                                 ]
                                              },
                                              {  "prim": "MEM"  },
                                              {  "prim": "IF",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "string"  },
                                                           {  "string": "permits"  }
                                                         ]
                                                   },
                                                   {  "prim": "PUSH",
                                                      "args": [
                                                        {  "prim": "string"  },
                                                        {  "string": "KeyExists"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "FAILWITH"  }  ],
                                                   [  {  "prim": "DUP",
                                                         "args": [
                                                           {  "int": "15"  }
                                                         ]
                                                   },
                                                   {  "prim": "EMPTY_MAP",
                                                      "args": [
                                                        {  "prim": "bytes"  },
                                                        {  "prim": "pair",
                                                           "args": [
                                                             {  "prim": "option",
                                                                "args": [
                                                                  {  "prim": "nat"  }
                                                                ]
                                                                ,
                                                                "annots": [
                                                                  "%expiry"
                                                                ]
                                                             },
                                                             {  "prim": "timestamp",
                                                                "annots": [
                                                                  "%created_at"
                                                                ]
                                                             }
                                                           ]
                                                        }
                                                      ]
                                                   },
                                                   {  "prim": "NONE",
                                                      "args": [
                                                        {  "prim": "nat"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "PUSH",
                                                      "args": [
                                                        {  "prim": "nat"  },
                                                        {  "int": "1"  }
                                                      ]
                                                   },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "5"  }
                                                      ]
                                                   },
                                                   {  "prim": "ADD"  },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "SOME"  },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "5"  }
                                                      ]
                                                   },
                                                   {  "prim": "UPDATE"  },
                                                   {  "prim": "DIP",
                                                      "args": [
                                                        {  "int": "1"  },
                                                        [  {  "prim": "DIG",
                                                              "args": [
                                                                {  "int": "14"  }
                                                              ]
                                                        },
                                                        {  "prim": "DROP",
                                                           "args": [
                                                             {  "int": "1"  }
                                                           ]
                                                        }  ]
                                                      ]
                                                   },
                                                   {  "prim": "DUG",
                                                      "args": [
                                                        {  "int": "14"  }
                                                      ]
                                                   }  ]
                                                 ]
                                              }  ]
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "6"  }
                                            ]
                                         },
                                         {  "prim": "CAR"  },
                                         {  "prim": "ITER",
                                            "args": [
                                              [  {  "prim": "DUP"  },
                                              {  "prim": "CAR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "2"  }
                                                 ]
                                              },
                                              {  "prim": "CDR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "2"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "7"  }
                                                 ]
                                              },
                                              {  "prim": "COMPARE"  },
                                              {  "prim": "EQ"  },
                                              {  "prim": "NOT"  },
                                              {  "prim": "IF",
                                                 "args": [
                                                   [  {  "prim": "DUP",
                                                         "args": [
                                                           {  "int": "2"  }
                                                         ]
                                                   },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "7"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "PUSH",
                                                      "args": [
                                                        {  "prim": "string"  },
                                                        {  "string": "SIGNER_IS_NOT_FROM"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "FAILWITH"  }  ],
                                                   [    ]
                                                 ]
                                              },
                                              {  "prim": "DUP"  },
                                              {  "prim": "ITER",
                                                 "args": [
                                                   [  {  "prim": "DUP"  },
                                                   {  "prim": "CAR"  },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "2"  }
                                                      ]
                                                   },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CAR"  },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "18"  }
                                                      ]
                                                   },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "6"  }
                                                      ]
                                                   },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "3"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "GET"  },
                                                   {  "prim": "IF_NONE",
                                                      "args": [
                                                        [  {  "prim": "PUSH",
                                                              "args": [
                                                                {  "prim": "string"  },
                                                                {  "string": "ledger"  }
                                                              ]
                                                        },
                                                        {  "prim": "PUSH",
                                                           "args": [
                                                             {  "prim": "string"  },
                                                             {  "string": "AssetNotFound"  }
                                                           ]
                                                        },
                                                        {  "prim": "PAIR"  },
                                                        {  "prim": "FAILWITH"  }  ],
                                                        [    ]
                                                      ]
                                                   },
                                                   {  "prim": "DUP"  },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "5"  }
                                                      ]
                                                   },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "COMPARE"  },
                                                   {  "prim": "GT"  },
                                                   {  "prim": "IF",
                                                      "args": [
                                                        [  {  "prim": "PUSH",
                                                              "args": [
                                                                {  "prim": "string"  },
                                                                {  "string": "FA2_INSUFFICIENT_BALANCE"  }
                                                              ]
                                                        },
                                                        {  "prim": "FAILWITH"  }  ],
                                                        [  {  "prim": "DUP"  },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "5"  }
                                                           ]
                                                        },
                                                        {  "prim": "CDR"  },
                                                        {  "prim": "CDR"  },
                                                        {  "prim": "COMPARE"  },
                                                        {  "prim": "EQ"  },
                                                        {  "prim": "IF",
                                                           "args": [
                                                             [  {  "prim": "DUP",
                                                                   "args": [

                                                                   {  "int": "19"  }
                                                                   ]
                                                             },
                                                             {  "prim": "NONE",
                                                                "args": [
                                                                  {  "prim": "nat"  }
                                                                ]
                                                             },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "8"  }
                                                                ]
                                                             },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "5"  }
                                                                ]
                                                             },
                                                             {  "prim": "PAIR"  },
                                                             {  "prim": "UPDATE"  },
                                                             {  "prim": "DIP",
                                                                "args": [
                                                                  {  "int": "1"  },
                                                                  [  {
                                                                  "prim": "DIG",
                                                                  "args": [
                                                                    {  "int": "18"  }
                                                                  ]
                                                                  },
                                                                  {
                                                                  "prim": "DROP",
                                                                  "args": [
                                                                    {  "int": "1"  }
                                                                  ]
                                                                  }  ]
                                                                ]
                                                             },
                                                             {  "prim": "DUG",
                                                                "args": [
                                                                  {  "int": "18"  }
                                                                ]
                                                             }  ],
                                                             [  {  "prim": "DUP",
                                                                   "args": [

                                                                   {  "int": "19"  }
                                                                   ]
                                                             },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "7"  }
                                                                ]
                                                             },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "4"  }
                                                                ]
                                                             },
                                                             {  "prim": "PAIR"  },
                                                             {  "prim": "GET"  },
                                                             {  "prim": "IF_NONE",
                                                                "args": [
                                                                  [  {
                                                                  "prim": "PUSH",
                                                                  "args": [
                                                                    {  "prim": "string"  },
                                                                    {  "string": "ledger"  }
                                                                  ]
                                                                  },
                                                                  {
                                                                  "prim": "PUSH",
                                                                  "args": [
                                                                    {  "prim": "string"  },
                                                                    {  "string": "AssetNotFound"  }
                                                                  ]
                                                                  },
                                                                  {  "prim": "PAIR"  },
                                                                  {  "prim": "FAILWITH"  }  ],
                                                                  [    ]
                                                                ]
                                                             },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "20"  }
                                                                ]
                                                             },
                                                             {  "prim": "PUSH",
                                                                "args": [
                                                                  {  "prim": "int"  },
                                                                  {  "int": "0"  }
                                                                ]
                                                             },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "7"  }
                                                                ]
                                                             },
                                                             {  "prim": "CDR"  },
                                                             {  "prim": "CDR"  },
                                                             {  "prim": "INT"  },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "4"  }
                                                                ]
                                                             },
                                                             {  "prim": "SUB"  },
                                                             {  "prim": "COMPARE"  },
                                                             {  "prim": "GE"  },
                                                             {  "prim": "IF",
                                                                "args": [
                                                                  [  {
                                                                  "prim": "DUP",
                                                                  "args": [
                                                                    {  "int": "6"  }
                                                                  ]
                                                                  },
                                                                  {  "prim": "CDR"  },
                                                                  {  "prim": "CDR"  },
                                                                  {  "prim": "INT"  },
                                                                  {
                                                                  "prim": "DUP",
                                                                  "args": [
                                                                    {  "int": "3"  }
                                                                  ]
                                                                  },
                                                                  {  "prim": "SUB"  },
                                                                  {  "prim": "ABS"  }  ],
                                                                  [  {
                                                                  "prim": "PUSH",
                                                                  "args": [
                                                                    {  "prim": "string"  },
                                                                    {  "string": "NatAssign"  }
                                                                  ]
                                                                  },
                                                                  {  "prim": "FAILWITH"  }  ]
                                                                ]
                                                             },
                                                             {  "prim": "SOME"  },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "9"  }
                                                                ]
                                                             },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "6"  }
                                                                ]
                                                             },
                                                             {  "prim": "PAIR"  },
                                                             {  "prim": "UPDATE"  },
                                                             {  "prim": "DIP",
                                                                "args": [
                                                                  {  "int": "1"  },
                                                                  [  {
                                                                  "prim": "DIG",
                                                                  "args": [
                                                                    {  "int": "19"  }
                                                                  ]
                                                                  },
                                                                  {
                                                                  "prim": "DROP",
                                                                  "args": [
                                                                    {  "int": "1"  }
                                                                  ]
                                                                  }  ]
                                                                ]
                                                             },
                                                             {  "prim": "DUG",
                                                                "args": [
                                                                  {  "int": "19"  }
                                                                ]
                                                             },
                                                             {  "prim": "DROP",
                                                                "args": [
                                                                  {  "int": "1"  }
                                                                ]
                                                             }  ]
                                                           ]
                                                        }  ]
                                                      ]
                                                   },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "19"  }
                                                      ]
                                                   },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "5"  }
                                                      ]
                                                   },
                                                   {  "prim": "CAR"  },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "4"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "MEM"  },
                                                   {  "prim": "IF",
                                                      "args": [
                                                        [  {  "prim": "DUP",
                                                              "args": [
                                                                {  "int": "19"  }
                                                              ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "5"  }
                                                           ]
                                                        },
                                                        {  "prim": "CAR"  },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "4"  }
                                                           ]
                                                        },
                                                        {  "prim": "PAIR"  },
                                                        {  "prim": "GET"  },
                                                        {  "prim": "IF_NONE",
                                                           "args": [
                                                             [  {  "prim": "PUSH",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {  "string": "ledger"  }
                                                                   ]
                                                             },
                                                             {  "prim": "PUSH",
                                                                "args": [
                                                                  {  "prim": "string"  },
                                                                  {  "string": "AssetNotFound"  }
                                                                ]
                                                             },
                                                             {  "prim": "PAIR"  },
                                                             {  "prim": "FAILWITH"  }  ],
                                                             [    ]
                                                           ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "20"  }
                                                           ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "6"  }
                                                           ]
                                                        },
                                                        {  "prim": "CDR"  },
                                                        {  "prim": "CDR"  },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "3"  }
                                                           ]
                                                        },
                                                        {  "prim": "ADD"  },
                                                        {  "prim": "SOME"  },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "7"  }
                                                           ]
                                                        },
                                                        {  "prim": "CAR"  },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "6"  }
                                                           ]
                                                        },
                                                        {  "prim": "PAIR"  },
                                                        {  "prim": "UPDATE"  },
                                                        {  "prim": "DIP",
                                                           "args": [
                                                             {  "int": "1"  },
                                                             [  {  "prim": "DIG",
                                                                   "args": [

                                                                   {  "int": "19"  }
                                                                   ]
                                                             },
                                                             {  "prim": "DROP",
                                                                "args": [
                                                                  {  "int": "1"  }
                                                                ]
                                                             }  ]
                                                           ]
                                                        },
                                                        {  "prim": "DUG",
                                                           "args": [
                                                             {  "int": "19"  }
                                                           ]
                                                        },
                                                        {  "prim": "DROP",
                                                           "args": [
                                                             {  "int": "1"  }
                                                           ]
                                                        }  ],
                                                        [  {  "prim": "DUP",
                                                              "args": [
                                                                {  "int": "19"  }
                                                              ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "5"  }
                                                           ]
                                                        },
                                                        {  "prim": "CAR"  },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "4"  }
                                                           ]
                                                        },
                                                        {  "prim": "PAIR"  },
                                                        {  "prim": "MEM"  },
                                                        {  "prim": "IF",
                                                           "args": [
                                                             [  {  "prim": "PUSH",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {  "string": "ledger"  }
                                                                   ]
                                                             },
                                                             {  "prim": "PUSH",
                                                                "args": [
                                                                  {  "prim": "string"  },
                                                                  {  "string": "KeyExists"  }
                                                                ]
                                                             },
                                                             {  "prim": "PAIR"  },
                                                             {  "prim": "FAILWITH"  }  ],
                                                             [  {  "prim": "DUP",
                                                                   "args": [

                                                                   {  "int": "19"  }
                                                                   ]
                                                             },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "5"  }
                                                                ]
                                                             },
                                                             {  "prim": "CDR"  },
                                                             {  "prim": "CDR"  },
                                                             {  "prim": "PUSH",
                                                                "args": [
                                                                  {  "prim": "nat"  },
                                                                  {  "int": "0"  }
                                                                ]
                                                             },
                                                             {  "prim": "ADD"  },
                                                             {  "prim": "SOME"  },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "6"  }
                                                                ]
                                                             },
                                                             {  "prim": "CAR"  },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "5"  }
                                                                ]
                                                             },
                                                             {  "prim": "PAIR"  },
                                                             {  "prim": "UPDATE"  },
                                                             {  "prim": "DIP",
                                                                "args": [
                                                                  {  "int": "1"  },
                                                                  [  {
                                                                  "prim": "DIG",
                                                                  "args": [
                                                                    {  "int": "18"  }
                                                                  ]
                                                                  },
                                                                  {
                                                                  "prim": "DROP",
                                                                  "args": [
                                                                    {  "int": "1"  }
                                                                  ]
                                                                  }  ]
                                                                ]
                                                             },
                                                             {  "prim": "DUG",
                                                                "args": [
                                                                  {  "int": "18"  }
                                                                ]
                                                             }  ]
                                                           ]
                                                        }  ]
                                                      ]
                                                   },
                                                   {  "prim": "DROP",
                                                      "args": [
                                                        {  "int": "4"  }
                                                      ]
                                                   }  ]
                                                 ]
                                              },
                                              {  "prim": "DROP",
                                                 "args": [
                                                   {  "int": "3"  }
                                                 ]
                                              }  ]
                                            ]
                                         },
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "6"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "DROP",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "11"  }
                                       ]
                                    },
                                    {  "prim": "DIG",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  }  ]
                                  ]
                            }  ]
                          ]
                    }  ],
                    [  {  "prim": "IF_LEFT",
                          "args": [
                            [  {  "prim": "IF_LEFT",
                                  "args": [
                                    [  {  "prim": "DUP",
                                          "args": [
                                            {  "int": "19"  }
                                          ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "5"  }
                                       ]
                                    },
                                    {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "CONTRACT_PAUSED"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  },
                                    {  "prim": "EXEC"  },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "r8"  }
                                               ]
                                         },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "InvalidCondition"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "18"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "2"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "9"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "12"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "8"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  },
                                    {  "prim": "EXEC"  },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "DUP",
                                               "args": [
                                                 {  "int": "14"  }
                                               ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "2"  }
                                            ]
                                         },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "FA2_NOT_OPERATOR"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "EXEC"  },
                                         {  "prim": "IF_NONE",
                                            "args": [
                                              [    ],
                                              [  {  "prim": "DUP",
                                                    "args": [
                                                      {  "int": "2"  }
                                                    ]
                                              },
                                              {  "prim": "PACK"  },
                                              {  "prim": "BLAKE2B"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "11"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "3"  }
                                                 ]
                                              },
                                              {  "prim": "MEM"  },
                                              {  "prim": "NOT"  },
                                              {  "prim": "IF",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "string"  },
                                                           {  "string": "NO_ENTRY_FOR_USER"  }
                                                         ]
                                                   },
                                                   {  "prim": "FAILWITH"  }  ],
                                                   [  {  "prim": "DUP",
                                                         "args": [
                                                           {  "int": "11"  }
                                                         ]
                                                   },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "3"  }
                                                      ]
                                                   },
                                                   {  "prim": "GET"  },
                                                   {  "prim": "IF_NONE",
                                                      "args": [
                                                        [  {  "prim": "PUSH",
                                                              "args": [
                                                                {  "prim": "string"  },
                                                                {  "string": "permits"  }
                                                              ]
                                                        },
                                                        {  "prim": "PUSH",
                                                           "args": [
                                                             {  "prim": "string"  },
                                                             {  "string": "AssetNotFound"  }
                                                           ]
                                                        },
                                                        {  "prim": "PAIR"  },
                                                        {  "prim": "FAILWITH"  }  ],
                                                        [    ]
                                                      ]
                                                   },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "2"  }
                                                      ]
                                                   },
                                                   {  "prim": "MEM"  },
                                                   {  "prim": "NOT"  },
                                                   {  "prim": "IF",
                                                      "args": [
                                                        [  {  "prim": "PUSH",
                                                              "args": [
                                                                {  "prim": "string"  },
                                                                {  "string": "FA2_NOT_OPERATOR"  }
                                                              ]
                                                        },
                                                        {  "prim": "FAILWITH"  }  ],
                                                        [  {  "prim": "DUP",
                                                              "args": [
                                                                {  "int": "11"  }
                                                              ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "3"  }
                                                           ]
                                                        },
                                                        {  "prim": "GET"  },
                                                        {  "prim": "IF_NONE",
                                                           "args": [
                                                             [  {  "prim": "PUSH",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {  "string": "permits"  }
                                                                   ]
                                                             },
                                                             {  "prim": "PUSH",
                                                                "args": [
                                                                  {  "prim": "string"  },
                                                                  {  "string": "AssetNotFound"  }
                                                                ]
                                                             },
                                                             {  "prim": "PAIR"  },
                                                             {  "prim": "FAILWITH"  }  ],
                                                             [    ]
                                                           ]
                                                        },
                                                        {  "prim": "CDR"  },
                                                        {  "prim": "CDR"  },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "2"  }
                                                           ]
                                                        },
                                                        {  "prim": "GET"  },
                                                        {  "prim": "IF_NONE",
                                                           "args": [
                                                             [  {  "prim": "PUSH",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {  "string": "NotFound"  }
                                                                   ]
                                                             },
                                                             {  "prim": "FAILWITH"  }  ],
                                                             [    ]
                                                           ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "19"  }
                                                           ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "21"  }
                                                           ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "4"  }
                                                           ]
                                                        },
                                                        {  "prim": "PAIR"  },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "5"  }
                                                           ]
                                                        },
                                                        {  "prim": "PAIR"  },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "16"  }
                                                           ]
                                                        },
                                                        {  "prim": "PAIR"  },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "14"  }
                                                           ]
                                                        },
                                                        {  "prim": "PAIR"  },
                                                        {  "prim": "EXEC"  },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "19"  }
                                                           ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "2"  }
                                                           ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "4"  }
                                                           ]
                                                        },
                                                        {  "prim": "PAIR"  },
                                                        {  "prim": "EXEC"  },
                                                        {  "prim": "IF",
                                                           "args": [
                                                             [  {  "prim": "PUSH",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {  "string": "PERMIT_EXPIRED"  }
                                                                   ]
                                                             },
                                                             {  "prim": "FAILWITH"  }  ],
                                                             [  {  "prim": "DUP",
                                                                   "args": [

                                                                   {  "int": "13"  }
                                                                   ]
                                                             },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "14"  }
                                                                ]
                                                             },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "6"  }
                                                                ]
                                                             },
                                                             {  "prim": "GET"  },
                                                             {  "prim": "IF_NONE",
                                                                "args": [
                                                                  [  {
                                                                  "prim": "PUSH",
                                                                  "args": [
                                                                    {  "prim": "string"  },
                                                                    {  "string": "permits"  }
                                                                  ]
                                                                  },
                                                                  {
                                                                  "prim": "PUSH",
                                                                  "args": [
                                                                    {  "prim": "string"  },
                                                                    {  "string": "AssetNotFound"  }
                                                                  ]
                                                                  },
                                                                  {  "prim": "PAIR"  },
                                                                  {  "prim": "FAILWITH"  }  ],
                                                                  [    ]
                                                                ]
                                                             },
                                                             {  "prim": "UNPAIR"  },
                                                             {  "prim": "SWAP"  },
                                                             {  "prim": "UNPAIR"  },
                                                             {  "prim": "SWAP"  },
                                                             {  "prim": "DROP",
                                                                "args": [
                                                                  {  "int": "1"  }
                                                                ]
                                                             },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "16"  }
                                                                ]
                                                             },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "8"  }
                                                                ]
                                                             },
                                                             {  "prim": "GET"  },
                                                             {  "prim": "IF_NONE",
                                                                "args": [
                                                                  [  {
                                                                  "prim": "PUSH",
                                                                  "args": [
                                                                    {  "prim": "string"  },
                                                                    {  "string": "permits"  }
                                                                  ]
                                                                  },
                                                                  {
                                                                  "prim": "PUSH",
                                                                  "args": [
                                                                    {  "prim": "string"  },
                                                                    {  "string": "AssetNotFound"  }
                                                                  ]
                                                                  },
                                                                  {  "prim": "PAIR"  },
                                                                  {  "prim": "FAILWITH"  }  ],
                                                                  [    ]
                                                                ]
                                                             },
                                                             {  "prim": "CDR"  },
                                                             {  "prim": "CDR"  },
                                                             {  "prim": "NONE",
                                                                "args": [
                                                                  {
                                                                  "prim": "pair",
                                                                  "args": [
                                                                    {
                                                                    "prim": "option",
                                                                    "args": [

                                                                    {  "prim": "nat"  }
                                                                    ]
                                                                    },
                                                                    {  "prim": "timestamp"  }
                                                                  ]
                                                                  }
                                                                ]
                                                             },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "8"  }
                                                                ]
                                                             },
                                                             {  "prim": "UPDATE"  },
                                                             {  "prim": "SWAP"  },
                                                             {  "prim": "PAIR"  },
                                                             {  "prim": "SWAP"  },
                                                             {  "prim": "PAIR"  },
                                                             {  "prim": "SOME"  },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "6"  }
                                                                ]
                                                             },
                                                             {  "prim": "UPDATE"  },
                                                             {  "prim": "DIP",
                                                                "args": [
                                                                  {  "int": "1"  },
                                                                  [  {
                                                                  "prim": "DIG",
                                                                  "args": [
                                                                    {  "int": "12"  }
                                                                  ]
                                                                  },
                                                                  {
                                                                  "prim": "DROP",
                                                                  "args": [
                                                                    {  "int": "1"  }
                                                                  ]
                                                                  }  ]
                                                                ]
                                                             },
                                                             {  "prim": "DUG",
                                                                "args": [
                                                                  {  "int": "12"  }
                                                                ]
                                                             }  ]
                                                           ]
                                                        },
                                                        {  "prim": "DROP",
                                                           "args": [
                                                             {  "int": "2"  }
                                                           ]
                                                        }  ]
                                                      ]
                                                   }  ]
                                                 ]
                                              },
                                              {  "prim": "DROP",
                                                 "args": [
                                                   {  "int": "2"  }
                                                 ]
                                              }  ]
                                            ]
                                         }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DUP"  },
                                    {  "prim": "ITER",
                                       "args": [
                                         [  {  "prim": "DUP"  },
                                         {  "prim": "CAR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "2"  }
                                            ]
                                         },
                                         {  "prim": "CDR"  },
                                         {  "prim": "DUP"  },
                                         {  "prim": "ITER",
                                            "args": [
                                              [  {  "prim": "DUP"  },
                                              {  "prim": "CDR"  },
                                              {  "prim": "CAR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "11"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "5"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "3"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "GET"  },
                                              {  "prim": "IF_NONE",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "string"  },
                                                           {  "string": "ledger"  }
                                                         ]
                                                   },
                                                   {  "prim": "PUSH",
                                                      "args": [
                                                        {  "prim": "string"  },
                                                        {  "string": "AssetNotFound"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "FAILWITH"  }  ],
                                                   [    ]
                                                 ]
                                              },
                                              {  "prim": "DUP"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "4"  }
                                                 ]
                                              },
                                              {  "prim": "CDR"  },
                                              {  "prim": "CDR"  },
                                              {  "prim": "COMPARE"  },
                                              {  "prim": "GT"  },
                                              {  "prim": "IF",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "string"  },
                                                           {  "string": "FA2_INSUFFICIENT_BALANCE"  }
                                                         ]
                                                   },
                                                   {  "prim": "FAILWITH"  }  ],
                                                   [  {  "prim": "DUP"  },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "4"  }
                                                      ]
                                                   },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "COMPARE"  },
                                                   {  "prim": "EQ"  },
                                                   {  "prim": "IF",
                                                      "args": [
                                                        [  {  "prim": "DUP",
                                                              "args": [
                                                                {  "int": "12"  }
                                                              ]
                                                        },
                                                        {  "prim": "NONE",
                                                           "args": [
                                                             {  "prim": "nat"  }
                                                           ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "7"  }
                                                           ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "5"  }
                                                           ]
                                                        },
                                                        {  "prim": "PAIR"  },
                                                        {  "prim": "UPDATE"  },
                                                        {  "prim": "DIP",
                                                           "args": [
                                                             {  "int": "1"  },
                                                             [  {  "prim": "DIG",
                                                                   "args": [

                                                                   {  "int": "11"  }
                                                                   ]
                                                             },
                                                             {  "prim": "DROP",
                                                                "args": [
                                                                  {  "int": "1"  }
                                                                ]
                                                             }  ]
                                                           ]
                                                        },
                                                        {  "prim": "DUG",
                                                           "args": [
                                                             {  "int": "11"  }
                                                           ]
                                                        }  ],
                                                        [  {  "prim": "DUP",
                                                              "args": [
                                                                {  "int": "12"  }
                                                              ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "6"  }
                                                           ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "4"  }
                                                           ]
                                                        },
                                                        {  "prim": "PAIR"  },
                                                        {  "prim": "GET"  },
                                                        {  "prim": "IF_NONE",
                                                           "args": [
                                                             [  {  "prim": "PUSH",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {  "string": "ledger"  }
                                                                   ]
                                                             },
                                                             {  "prim": "PUSH",
                                                                "args": [
                                                                  {  "prim": "string"  },
                                                                  {  "string": "AssetNotFound"  }
                                                                ]
                                                             },
                                                             {  "prim": "PAIR"  },
                                                             {  "prim": "FAILWITH"  }  ],
                                                             [    ]
                                                           ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "13"  }
                                                           ]
                                                        },
                                                        {  "prim": "PUSH",
                                                           "args": [
                                                             {  "prim": "int"  },
                                                             {  "int": "0"  }
                                                           ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "6"  }
                                                           ]
                                                        },
                                                        {  "prim": "CDR"  },
                                                        {  "prim": "CDR"  },
                                                        {  "prim": "INT"  },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "4"  }
                                                           ]
                                                        },
                                                        {  "prim": "SUB"  },
                                                        {  "prim": "COMPARE"  },
                                                        {  "prim": "GE"  },
                                                        {  "prim": "IF",
                                                           "args": [
                                                             [  {  "prim": "DUP",
                                                                   "args": [

                                                                   {  "int": "5"  }
                                                                   ]
                                                             },
                                                             {  "prim": "CDR"  },
                                                             {  "prim": "CDR"  },
                                                             {  "prim": "INT"  },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "3"  }
                                                                ]
                                                             },
                                                             {  "prim": "SUB"  },
                                                             {  "prim": "ABS"  }  ],
                                                             [  {  "prim": "PUSH",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {  "string": "NatAssign"  }
                                                                   ]
                                                             },
                                                             {  "prim": "FAILWITH"  }  ]
                                                           ]
                                                        },
                                                        {  "prim": "SOME"  },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "8"  }
                                                           ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "6"  }
                                                           ]
                                                        },
                                                        {  "prim": "PAIR"  },
                                                        {  "prim": "UPDATE"  },
                                                        {  "prim": "DIP",
                                                           "args": [
                                                             {  "int": "1"  },
                                                             [  {  "prim": "DIG",
                                                                   "args": [

                                                                   {  "int": "12"  }
                                                                   ]
                                                             },
                                                             {  "prim": "DROP",
                                                                "args": [
                                                                  {  "int": "1"  }
                                                                ]
                                                             }  ]
                                                           ]
                                                        },
                                                        {  "prim": "DUG",
                                                           "args": [
                                                             {  "int": "12"  }
                                                           ]
                                                        },
                                                        {  "prim": "DROP",
                                                           "args": [
                                                             {  "int": "1"  }
                                                           ]
                                                        }  ]
                                                      ]
                                                   }  ]
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "12"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "4"  }
                                                 ]
                                              },
                                              {  "prim": "CAR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "4"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "MEM"  },
                                              {  "prim": "IF",
                                                 "args": [
                                                   [  {  "prim": "DUP",
                                                         "args": [
                                                           {  "int": "12"  }
                                                         ]
                                                   },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "4"  }
                                                      ]
                                                   },
                                                   {  "prim": "CAR"  },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "4"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "GET"  },
                                                   {  "prim": "IF_NONE",
                                                      "args": [
                                                        [  {  "prim": "PUSH",
                                                              "args": [
                                                                {  "prim": "string"  },
                                                                {  "string": "ledger"  }
                                                              ]
                                                        },
                                                        {  "prim": "PUSH",
                                                           "args": [
                                                             {  "prim": "string"  },
                                                             {  "string": "AssetNotFound"  }
                                                           ]
                                                        },
                                                        {  "prim": "PAIR"  },
                                                        {  "prim": "FAILWITH"  }  ],
                                                        [    ]
                                                      ]
                                                   },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "13"  }
                                                      ]
                                                   },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "5"  }
                                                      ]
                                                   },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "3"  }
                                                      ]
                                                   },
                                                   {  "prim": "ADD"  },
                                                   {  "prim": "SOME"  },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "6"  }
                                                      ]
                                                   },
                                                   {  "prim": "CAR"  },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "6"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "UPDATE"  },
                                                   {  "prim": "DIP",
                                                      "args": [
                                                        {  "int": "1"  },
                                                        [  {  "prim": "DIG",
                                                              "args": [
                                                                {  "int": "12"  }
                                                              ]
                                                        },
                                                        {  "prim": "DROP",
                                                           "args": [
                                                             {  "int": "1"  }
                                                           ]
                                                        }  ]
                                                      ]
                                                   },
                                                   {  "prim": "DUG",
                                                      "args": [
                                                        {  "int": "12"  }
                                                      ]
                                                   },
                                                   {  "prim": "DROP",
                                                      "args": [
                                                        {  "int": "1"  }
                                                      ]
                                                   }  ],
                                                   [  {  "prim": "DUP",
                                                         "args": [
                                                           {  "int": "12"  }
                                                         ]
                                                   },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "4"  }
                                                      ]
                                                   },
                                                   {  "prim": "CAR"  },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "4"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "MEM"  },
                                                   {  "prim": "IF",
                                                      "args": [
                                                        [  {  "prim": "PUSH",
                                                              "args": [
                                                                {  "prim": "string"  },
                                                                {  "string": "ledger"  }
                                                              ]
                                                        },
                                                        {  "prim": "PUSH",
                                                           "args": [
                                                             {  "prim": "string"  },
                                                             {  "string": "KeyExists"  }
                                                           ]
                                                        },
                                                        {  "prim": "PAIR"  },
                                                        {  "prim": "FAILWITH"  }  ],
                                                        [  {  "prim": "DUP",
                                                              "args": [
                                                                {  "int": "12"  }
                                                              ]
                                                        },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "4"  }
                                                           ]
                                                        },
                                                        {  "prim": "CDR"  },
                                                        {  "prim": "CDR"  },
                                                        {  "prim": "PUSH",
                                                           "args": [
                                                             {  "prim": "nat"  },
                                                             {  "int": "0"  }
                                                           ]
                                                        },
                                                        {  "prim": "ADD"  },
                                                        {  "prim": "SOME"  },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "5"  }
                                                           ]
                                                        },
                                                        {  "prim": "CAR"  },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "5"  }
                                                           ]
                                                        },
                                                        {  "prim": "PAIR"  },
                                                        {  "prim": "UPDATE"  },
                                                        {  "prim": "DIP",
                                                           "args": [
                                                             {  "int": "1"  },
                                                             [  {  "prim": "DIG",
                                                                   "args": [

                                                                   {  "int": "11"  }
                                                                   ]
                                                             },
                                                             {  "prim": "DROP",
                                                                "args": [
                                                                  {  "int": "1"  }
                                                                ]
                                                             }  ]
                                                           ]
                                                        },
                                                        {  "prim": "DUG",
                                                           "args": [
                                                             {  "int": "11"  }
                                                           ]
                                                        }  ]
                                                      ]
                                                   }  ]
                                                 ]
                                              },
                                              {  "prim": "DROP",
                                                 "args": [
                                                   {  "int": "3"  }
                                                 ]
                                              }  ]
                                            ]
                                         },
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "3"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "DROP",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "11"  }
                                       ]
                                    },
                                    {  "prim": "DIG",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  }  ],
                                    [  {  "prim": "UNPAIR"  },
                                    {  "prim": "SWAP"  },
                                    {  "prim": "UNPAIR"  },
                                    {  "prim": "SWAP"  },
                                    {  "prim": "UNPAIR"  },
                                    {  "prim": "SWAP"  },
                                    {  "prim": "UNPAIR"  },
                                    {  "prim": "SWAP"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "23"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "9"  }
                                       ]
                                    },
                                    {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "CONTRACT_PAUSED"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  },
                                    {  "prim": "EXEC"  },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "r10"  }
                                               ]
                                         },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "InvalidCondition"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "12"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "6"  }
                                       ]
                                    },
                                    {  "prim": "MEM"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "token_metadata"  }
                                               ]
                                         },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "KeyExists"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "FAILWITH"  }  ],
                                         [  {  "prim": "DUP",
                                               "args": [
                                                 {  "int": "12"  }
                                               ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "3"  }
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "7"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "SOME"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "7"  }
                                            ]
                                         },
                                         {  "prim": "UPDATE"  },
                                         {  "prim": "DIP",
                                            "args": [
                                              {  "int": "1"  },
                                              [  {  "prim": "DIG",
                                                    "args": [
                                                      {  "int": "11"  }
                                                    ]
                                              },
                                              {  "prim": "DROP",
                                                 "args": [
                                                   {  "int": "1"  }
                                                 ]
                                              }  ]
                                            ]
                                         },
                                         {  "prim": "DUG",
                                            "args": [
                                              {  "int": "11"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "9"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "6"  }
                                       ]
                                    },
                                    {  "prim": "MEM"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "royalties"  }
                                               ]
                                         },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "KeyExists"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "FAILWITH"  }  ],
                                         [  {  "prim": "DUP",
                                               "args": [
                                                 {  "int": "9"  }
                                               ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "2"  }
                                            ]
                                         },
                                         {  "prim": "SOME"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "7"  }
                                            ]
                                         },
                                         {  "prim": "UPDATE"  },
                                         {  "prim": "DIP",
                                            "args": [
                                              {  "int": "1"  },
                                              [  {  "prim": "DIG",
                                                    "args": [
                                                      {  "int": "8"  }
                                                    ]
                                              },
                                              {  "prim": "DROP",
                                                 "args": [
                                                   {  "int": "1"  }
                                                 ]
                                              }  ]
                                            ]
                                         },
                                         {  "prim": "DUG",
                                            "args": [
                                              {  "int": "8"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "10"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "5"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "7"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  },
                                    {  "prim": "MEM"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "ledger"  }
                                               ]
                                         },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "KeyExists"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "FAILWITH"  }  ],
                                         [  {  "prim": "DUP",
                                               "args": [
                                                 {  "int": "10"  }
                                               ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "4"  }
                                            ]
                                         },
                                         {  "prim": "SOME"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "6"  }
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "8"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "UPDATE"  },
                                         {  "prim": "DIP",
                                            "args": [
                                              {  "int": "1"  },
                                              [  {  "prim": "DIG",
                                                    "args": [
                                                      {  "int": "9"  }
                                                    ]
                                              },
                                              {  "prim": "DROP",
                                                 "args": [
                                                   {  "int": "1"  }
                                                 ]
                                              }  ]
                                            ]
                                         },
                                         {  "prim": "DUG",
                                            "args": [
                                              {  "int": "9"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "DROP",
                                       "args": [
                                         {  "int": "5"  }
                                       ]
                                    },
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "11"  }
                                       ]
                                    },
                                    {  "prim": "DIG",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  }  ]
                                  ]
                            }  ],
                            [  {  "prim": "UNPAIR"  },
                            {  "prim": "SWAP"  },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "20"  }
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "6"  }
                               ]
                            },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "CONTRACT_PAUSED"  }
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "EXEC"  },
                            {  "prim": "NOT"  },
                            {  "prim": "IF",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "r2"  }
                                       ]
                                 },
                                 {  "prim": "PUSH",
                                    "args": [
                                      {  "prim": "string"  },
                                      {  "string": "InvalidCondition"  }
                                    ]
                                 },
                                 {  "prim": "PAIR"  },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "7"  }
                               ]
                            },
                            {  "prim": "SENDER"  },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "4"  }
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "MEM"  },
                            {  "prim": "IF",
                               "args": [
                                 [  {  "prim": "DUP",
                                       "args": [
                                         {  "int": "7"  }
                                       ]
                                 },
                                 {  "prim": "SENDER"  },
                                 {  "prim": "DUP",
                                    "args": [
                                      {  "int": "4"  }
                                    ]
                                 },
                                 {  "prim": "PAIR"  },
                                 {  "prim": "GET"  },
                                 {  "prim": "IF_NONE",
                                    "args": [
                                      [  {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "ledger"  }
                                            ]
                                      },
                                      {  "prim": "PUSH",
                                         "args": [
                                           {  "prim": "string"  },
                                           {  "string": "AssetNotFound"  }
                                         ]
                                      },
                                      {  "prim": "PAIR"  },
                                      {  "prim": "FAILWITH"  }  ],
                                      [    ]
                                    ]
                                 },
                                 {  "prim": "DUP",
                                    "args": [
                                      {  "int": "2"  }
                                    ]
                                 },
                                 {  "prim": "DUP",
                                    "args": [
                                      {  "int": "2"  }
                                    ]
                                 },
                                 {  "prim": "COMPARE"  },
                                 {  "prim": "GT"  },
                                 {  "prim": "IF",
                                    "args": [
                                      [  {  "prim": "DUP",
                                            "args": [
                                              {  "int": "8"  }
                                            ]
                                      },
                                      {  "prim": "SENDER"  },
                                      {  "prim": "DUP",
                                         "args": [
                                           {  "int": "5"  }
                                         ]
                                      },
                                      {  "prim": "PAIR"  },
                                      {  "prim": "GET"  },
                                      {  "prim": "IF_NONE",
                                         "args": [
                                           [  {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "ledger"  }
                                                 ]
                                           },
                                           {  "prim": "PUSH",
                                              "args": [
                                                {  "prim": "string"  },
                                                {  "string": "AssetNotFound"  }
                                              ]
                                           },
                                           {  "prim": "PAIR"  },
                                           {  "prim": "FAILWITH"  }  ],
                                           [    ]
                                         ]
                                      },
                                      {  "prim": "DUP",
                                         "args": [
                                           {  "int": "9"  }
                                         ]
                                      },
                                      {  "prim": "PUSH",
                                         "args": [
                                           {  "prim": "int"  },
                                           {  "int": "0"  }
                                         ]
                                      },
                                      {  "prim": "DUP",
                                         "args": [
                                           {  "int": "5"  }
                                         ]
                                      },
                                      {  "prim": "INT"  },
                                      {  "prim": "DUP",
                                         "args": [
                                           {  "int": "4"  }
                                         ]
                                      },
                                      {  "prim": "SUB"  },
                                      {  "prim": "COMPARE"  },
                                      {  "prim": "GE"  },
                                      {  "prim": "IF",
                                         "args": [
                                           [  {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "4"  }
                                                 ]
                                           },
                                           {  "prim": "INT"  },
                                           {  "prim": "DUP",
                                              "args": [
                                                {  "int": "3"  }
                                              ]
                                           },
                                           {  "prim": "SUB"  },
                                           {  "prim": "ABS"  }  ],
                                           [  {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "NatAssign"  }
                                                 ]
                                           },
                                           {  "prim": "FAILWITH"  }  ]
                                         ]
                                      },
                                      {  "prim": "SOME"  },
                                      {  "prim": "SENDER"  },
                                      {  "prim": "DUP",
                                         "args": [
                                           {  "int": "7"  }
                                         ]
                                      },
                                      {  "prim": "PAIR"  },
                                      {  "prim": "UPDATE"  },
                                      {  "prim": "DIP",
                                         "args": [
                                           {  "int": "1"  },
                                           [  {  "prim": "DIG",
                                                 "args": [
                                                   {  "int": "8"  }
                                                 ]
                                           },
                                           {  "prim": "DROP",
                                              "args": [
                                                {  "int": "1"  }
                                              ]
                                           }  ]
                                         ]
                                      },
                                      {  "prim": "DUG",
                                         "args": [
                                           {  "int": "8"  }
                                         ]
                                      },
                                      {  "prim": "DROP",
                                         "args": [
                                           {  "int": "1"  }
                                         ]
                                      }  ],
                                      [  {  "prim": "DUP",
                                            "args": [
                                              {  "int": "2"  }
                                            ]
                                      },
                                      {  "prim": "DUP",
                                         "args": [
                                           {  "int": "2"  }
                                         ]
                                      },
                                      {  "prim": "COMPARE"  },
                                      {  "prim": "EQ"  },
                                      {  "prim": "IF",
                                         "args": [
                                           [  {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "8"  }
                                                 ]
                                           },
                                           {  "prim": "NONE",
                                              "args": [
                                                {  "prim": "nat"  }
                                              ]
                                           },
                                           {  "prim": "SENDER"  },
                                           {  "prim": "DUP",
                                              "args": [
                                                {  "int": "6"  }
                                              ]
                                           },
                                           {  "prim": "PAIR"  },
                                           {  "prim": "UPDATE"  },
                                           {  "prim": "DIP",
                                              "args": [
                                                {  "int": "1"  },
                                                [  {  "prim": "DIG",
                                                      "args": [
                                                        {  "int": "7"  }
                                                      ]
                                                },
                                                {  "prim": "DROP",
                                                   "args": [
                                                     {  "int": "1"  }
                                                   ]
                                                }  ]
                                              ]
                                           },
                                           {  "prim": "DUG",
                                              "args": [
                                                {  "int": "7"  }
                                              ]
                                           }  ],
                                           [  {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "FA2_INSUFFICIENT_BALANCE"  }
                                                 ]
                                           },
                                           {  "prim": "FAILWITH"  }  ]
                                         ]
                                      }  ]
                                    ]
                                 },
                                 {  "prim": "DROP",
                                    "args": [
                                      {  "int": "1"  }
                                    ]
                                 }  ],
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "FA2_INSUFFICIENT_BALANCE"  }
                                       ]
                                 },
                                 {  "prim": "FAILWITH"  }  ]
                               ]
                            },
                            {  "prim": "DROP",
                               "args": [
                                 {  "int": "2"  }
                               ]
                            },
                            {  "prim": "PAIR",
                               "args": [
                                 {  "int": "11"  }
                               ]
                            },
                            {  "prim": "DIG",
                               "args": [
                                 {  "int": "1"  }
                               ]
                            },
                            {  "prim": "PAIR"  }  ]
                          ]
                    }  ]
                  ]
            }  ]
          ]
       },
       {  "prim": "DIP",
          "args": [
            {  "int": "1"  },
            [  {  "prim": "DROP",
                  "args": [
                    {  "int": "6"  }
                  ]
            }  ]
          ]
       }  ]
     ]
  },
  {  "prim": "view",
     "args": [
       {  "string": "get_royalties"  },
       {  "prim": "nat"  },
       {  "prim": "list",
          "args": [
            {  "prim": "pair",
               "args": [
                 {  "prim": "address",
                    "annots": [
                      "%partAccount"
                    ]
                 },
                 {  "prim": "nat",
                    "annots": [
                      "%partValue"
                    ]
                 }
               ]
            }
          ]
       },
       [  {  "prim": "UNPAIR"  },
       {  "prim": "DIP",
          "args": [
            {  "int": "1"  },
            [  {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "UNPAIR"  },
            {  "prim": "SWAP"  },
            {  "prim": "DROP",
               "args": [
                 {  "int": "1"  }
               ]
            }  ]
          ]
       },
       {  "prim": "UNIT"  },
       {  "prim": "DUP",
          "args": [
            {  "int": "3"  }
          ]
       },
       {  "prim": "DUP",
          "args": [
            {  "int": "3"  }
          ]
       },
       {  "prim": "MEM"  },
       {  "prim": "IF",
          "args": [
            [  {  "prim": "DUP",
                  "args": [
                    {  "int": "3"  }
                  ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "GET"  },
            {  "prim": "IF_NONE",
               "args": [
                 [  {  "prim": "PUSH",
                       "args": [
                         {  "prim": "string"  },
                         {  "string": "royalties"  }
                       ]
                 },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "string"  },
                      {  "string": "AssetNotFound"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "FAILWITH"  }  ],
                 [    ]
               ]
            }  ],
            [  {  "prim": "NIL",
                  "args": [
                    {  "prim": "pair",
                       "args": [
                         {  "prim": "address",
                            "annots": [
                              "%partAccount"
                            ]
                         },
                         {  "prim": "nat",
                            "annots": [
                              "%partValue"
                            ]
                         }
                       ]
                    }
                  ]
            }  ]
          ]
       },
       {  "prim": "SWAP"  },
       {  "prim": "DROP",
          "args": [
            {  "int": "1"  }
          ]
       },
       {  "prim": "DIP",
          "args": [
            {  "int": "1"  },
            [  {  "prim": "DROP",
                  "args": [
                    {  "int": "2"  }
                  ]
            }  ]
          ]
       }  ]
     ]
  }  ]

export function mt_public_storage(owner: string, metadata?: { [key : string] : string }, metadata_uri?: string) : any {
  return {  "prim": "Pair",
            "args": [
              {  "string": owner  },
              {  "prim": "Pair",
                 "args": [
                   {  "prim": "None"  },
                   {  "prim": "Pair",
                      "args": [
                        {  "prim": "False"  },
                        {  "prim": "Pair",
                           "args": [
                             [    ],
                             {  "prim": "Pair",
                                "args": [
                                  [    ],
                                  {  "prim": "Pair",
                                     "args": [
                                       [    ],
                                       {  "prim": "Pair",
                                          "args": [
                                            [    ],
                                            {  "prim": "Pair",
                                               "args": [
                                                 [    ],
                                                 {  "prim": "Pair",
                                                    "args": [
                                                      [    ],
                                                      {  "prim": "Pair",
                                                         "args": [
                                                           {  "int": "31556952"  },
                                                           make_metadata(metadata_uri, metadata)                                                       ]
                                                      }
                                                    ]
                                                 }
                                               ]
                                            }
                                          ]
                                       }
                                     ]
                                  }
                                ]
                             }
                           ]
                        }
                      ]
                   }
                 ]
              }
            ]
         }
}

export async function deploy_mt_public(
  provider : Provider,
  owner: string,
  metadata?: { [key:string]: string },
  metadata_uri?: string
) : Promise<DeployResult> {
  const init = mt_public_storage(owner, metadata, metadata_uri)
  return provider.tezos.originate({init, code: mt_public_code})
}
