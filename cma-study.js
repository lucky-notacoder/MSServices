const cmaCourseMap = {
  Foundation: {
    label: "Foundation",
    unavailableMessage: "Available soon.",
    groups: []
  },
  Intermediate: {
    label: "Intermediate",
    groups: [
      {
        label: "Group-1",
        subjects: [
          {
            label: "Business Law and Ethics",
            questions: []
          },
          {
            label: "Financial Accounting",
            questions: [
              {
                question: "Which accounting concept assumes that a business will continue operating for the foreseeable future?",
                options: ["Going concern", "Matching", "Consistency", "Materiality"],
                answer: 0,
                explanation: "The going concern concept assumes the entity will continue operations and will not be forced to liquidate soon."
              },
              {
                question: "Which statement shows assets, liabilities, and owner's equity on a particular date?",
                options: ["Cash flow statement", "Balance sheet", "Trial balance", "Income statement"],
                answer: 1,
                explanation: "A balance sheet presents the financial position of an entity at a specific point in time."
              },
              {
                question: "Depreciation is charged mainly to apply which accounting principle?",
                options: ["Dual aspect", "Matching", "Conservatism", "Full disclosure"],
                answer: 1,
                explanation: "Depreciation matches the cost of a fixed asset with the revenue earned across its useful life."
              },
              {
                question: "Which of the following is not a current asset?",
                options: ["Cash", "Accounts receivable", "Inventory", "Land"],
                answer: 3,
                explanation: "Land is a non-current asset because it is not expected to be converted into cash within a year."
              }
            ]
          },
          {
            label: "DT & IDT",
            questions: [
              {
                question: "GST input tax credit is generally available when goods or services are used for what purpose?",
                options: ["Personal use", "Business purposes", "Exempt supplies only", "Non-taxable supplies only"],
                answer: 1,
                explanation: "Input tax credit is generally linked to goods or services used in the course or furtherance of business."
              },
              {
                question: "TDS stands for which term?",
                options: ["Tax Deducted at Source", "Tax Deposit Statement", "Total Direct Savings", "Tax Due Summary"],
                answer: 0,
                explanation: "TDS means Tax Deducted at Source, where tax is deducted before making specified payments."
              },
              {
                question: "Which document is commonly used as proof of income tax return filing in India?",
                options: ["Form 16 only", "ITR acknowledgement", "GST invoice", "PAN application"],
                answer: 1,
                explanation: "The ITR acknowledgement confirms that an income tax return has been filed."
              }
            ]
          },
          {
            label: "Cost Accounting",
            questions: [
              {
                question: "Prime cost is equal to which combination?",
                options: ["Direct material plus direct labour plus direct expenses", "Factory cost plus office overhead", "Sales minus profit", "Indirect material plus indirect labour"],
                answer: 0,
                explanation: "Prime cost includes direct material, direct labour, and direct expenses."
              },
              {
                question: "Which cost changes in total with the level of production?",
                options: ["Fixed cost", "Variable cost", "Sunk cost", "Committed cost"],
                answer: 1,
                explanation: "Variable cost changes in total when output changes, though it often remains constant per unit."
              },
              {
                question: "EOQ is used to determine the optimum level of what?",
                options: ["Selling price", "Order quantity", "Machine hours", "Labour turnover"],
                answer: 1,
                explanation: "Economic Order Quantity helps identify an order size that balances ordering and carrying costs."
              }
            ]
          }
        ]
      },
      {
        label: "Group-2",
        subjects: [
          {
            label: "OM & SM",
            questions: [
        {
        "SL NO":1,
        "QUESTIONS":"OM deals with -",
        "OPTION 1":"both tangible and\nintangible product",
        "OPTION 2":"tangible product",
        "OPTION 3":"intangible services",
        "OPTION 4":"tangible product\nand intangible\nservices",
        "ANSWER CODE":4,
        "EXPLANATION":"Operations Management encompasses the production of physical goods (tangible) and the delivery of services (intangible)."
    },
    {
        "SL NO":2,
        "QUESTIONS":"One of the example of pure service :",
        "OPTION 1":"teaching",
        "OPTION 2":"product service",
        "OPTION 3":"repairing service",
        "OPTION 4":"All of the above",
        "ANSWER CODE":1,
        "EXPLANATION":"Teaching is a pure service because it involves knowledge transfer without a physical product being sold to the customer."
    },
    {
        "SL NO":3,
        "QUESTIONS":"Objectives of operations management can be categorized into\n:",
        "OPTION 1":"two",
        "OPTION 2":"three",
        "OPTION 3":"four",
        "OPTION 4":"seven",
        "ANSWER CODE":1,
        "EXPLANATION":"The primary objectives are usually categorized into two: Customer Service and Effective Resource Utilization."
    },
    {
        "SL NO":4,
        "QUESTIONS":"One of the objective of operation management is",
        "OPTION 1":"product service",
        "OPTION 2":"Customer service",
        "OPTION 3":"planning",
        "OPTION 4":"None of them",
        "ANSWER CODE":2,
        "EXPLANATION":"Customer service is a key objective, focusing on providing the right product\/service at the right time and price."
    },
    {
        "SL NO":5,
        "QUESTIONS":"Principal function of customer service are",
        "OPTION 1":"manufacture-supply-transport-service",
        "OPTION 2":"manufacture-transport-service-supply",
        "OPTION 3":"mafucture- service-transport- supply",
        "OPTION 4":"manufacture-transport-supply-service",
        "ANSWER CODE":4,
        "EXPLANATION":"The sequence involves manufacturing the product, transporting it, supplying it to the market, and providing service."
    },
    {
        "SL NO":6,
        "QUESTIONS":"The desired objective of Production and Operations\nManagement is:",
        "OPTION 1":"Use cheap\nmachinery to\nproduce",
        "OPTION 2":"To train unskilled\nworkers to\nmanufacture\ngoods perfectly",
        "OPTION 3":"Optimal utilisation\nof available\nresources",
        "OPTION 4":"To earn good\nprofits.",
        "ANSWER CODE":3,
        "EXPLANATION":"Efficient production management aims to use resources (men, machines, materials) in the most effective way possible."
    },
    {
        "SL NO":7,
        "QUESTIONS":"Which one of the following is not an activity under\nproductions and operations management?",
        "OPTION 1":"Location of\nfacilities",
        "OPTION 2":"Plant layouts and\nMaterial\nHandling;",
        "OPTION 3":"Product Design;",
        "OPTION 4":"Market\npenetration;",
        "ANSWER CODE":4,
        "EXPLANATION":"Market penetration is a marketing strategy, whereas location, layout, and design are core operations activities."
    },
    {
        "SL NO":8,
        "QUESTIONS":"Operations management is concerned essentially with the\nutilization of resources. Utilisation of resources means",
        "OPTION 1":"Obtaining\nmaximum effect\nfrom resources",
        "OPTION 2":"Minimising loss of\nresources,",
        "OPTION 3":"Minimising\nunderutilisation or\nwaste of resources",
        "OPTION 4":"All the above",
        "ANSWER CODE":4,
        "EXPLANATION":"Resource utilization involves maximizing effect, minimizing loss, and reducing waste to ensure efficiency."
    },
    {
        "SL NO":9,
        "QUESTIONS":"Which one of the following is not an objective of Operations\nManagement?",
        "OPTION 1":"To satisfy\ncustomers by\nproviding right\nthing at the right\nplace at the right\ntime",
        "OPTION 2":"To satisfy\ncustomers by\nproviding right\nthing at the right\nprice at the right\ntime",
        "OPTION 3":"To satisfy\ncustomers by\nproviding right\nthing at the right\nprice at right\nquality",
        "OPTION 4":"To satisfy\ncustomers by\nproviding right\nthing with right\ndesign with desired\nfeatures",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer identifies what is NOT a primary objective compared to the others provided."
    },
    {
        "SL NO":10,
        "QUESTIONS":"Productions and Operations Management distinguishes itself\nfrom other functions such as personnel, marketing, finance,\netc. mainly by its primary concern:",
        "OPTION 1":"Conversion by using\nintellectual\nproperties of a\nconcern;",
        "OPTION 2":"Conversion by\nusing physical\nresources",
        "OPTION 3":"Conversion by\nusing services\nprovided by other\nfunctions",
        "OPTION 4":"Conversion by\nusing machineries",
        "ANSWER CODE":2,
        "EXPLANATION":"Operations is distinct because it focuses on the physical transformation of inputs into finished outputs."
    },
    {
        "SL NO":11,
        "QUESTIONS":"Four dimensions of competitiveness that measure the\neffectiveness of the operations function are",
        "OPTION 1":"Cost, Quality,\nDependability as a\nsupplier, Flexibility",
        "OPTION 2":"Price, worth,\nDependability as a\nsupplier,\nProductivity",
        "OPTION 3":"Quantity, Quality,\nPrice, Worth",
        "OPTION 4":"Cost, Quality,\nQuantity, Price",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'cost, quality, dependability as a supplier, flexibility' because it directly addresses the four dimensions of competitiveness that measure the\neffectiveness of the operations function are in the context of operations management principles."
    },
    {
        "SL NO":12,
        "QUESTIONS":"Generally the size of the order for production in Job\nproduction is:",
        "OPTION 1":"Small",
        "OPTION 2":"Large",
        "OPTION 3":"Medium",
        "OPTION 4":"Very large",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'small' because it directly addresses the generally the size of the order for production in job\nproduction is: in the context of operations management principles."
    },
    {
        "SL NO":13,
        "QUESTIONS":"The desired objective of Production and Operations\nManagement is:",
        "OPTION 1":"Use cheap\nmachinery to\nproduce",
        "OPTION 2":"To train unskilled\nworkers to\nmanufacture\ngoods perfectly",
        "OPTION 3":"Optimal utilisation\nof available\nresources",
        "OPTION 4":"To earn good\nprofits.",
        "ANSWER CODE":3,
        "EXPLANATION":"Efficient production management aims to use resources (men, machines, materials) in the most effective way possible."
    },
    {
        "SL NO":14,
        "QUESTIONS":"To decide work load for men and machines:",
        "OPTION 1":"Medium range\nforecasting is used",
        "OPTION 2":"Short term\nforecasting is used",
        "OPTION 3":"Long range\nforecasting is used",
        "OPTION 4":"A combination of\nlong range and\nmedium range\nforecasting is used.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'short term forecasting is used' because it directly addresses the to decide work load for men and machines: in the context of operations management principles."
    },
    {
        "SL NO":15,
        "QUESTIONS":"The act of assessing the future and make provisions for it is\nknown as",
        "OPTION 1":"Planning",
        "OPTION 2":"Forecasting",
        "OPTION 3":"Assessment",
        "OPTION 4":"Scheduling",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'forecasting' because it directly addresses the the act of assessing the future and make provisions for it is\nknown as in the context of operations management principles."
    },
    {
        "SL NO":16,
        "QUESTIONS":"The time horizon selected for forecasting depends on:",
        "OPTION 1":"The salability of the\nproduct",
        "OPTION 2":"The selling\ncapacity of\nSalesman",
        "OPTION 3":"Purpose for which\nforecast is made",
        "OPTION 4":"Time required for\nproduction cycle",
        "ANSWER CODE":3,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":17,
        "QUESTIONS":"Important factor in forecasting production is:",
        "OPTION 1":"Environmental\nchanges",
        "OPTION 2":"Available\ncapacity of\nmachines",
        "OPTION 3":"Disposable income\nof the consumer",
        "OPTION 4":"Changes in the\npreference of the\nconsumer.",
        "ANSWER CODE":2,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":18,
        "QUESTIONS":"Application of technology or process to the raw material to\nadd use value is known as:",
        "OPTION 1":"Product",
        "OPTION 2":"Production",
        "OPTION 3":"Application of\ntechnology",
        "OPTION 4":"Combination of\ntechnology and\nprocess.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'production' because it directly addresses the application of technology or process to the raw material to\nadd use value is known as: in the context of operations management principles."
    },
    {
        "SL NO":19,
        "QUESTIONS":"In Production by disintegration the material undergoes:",
        "OPTION 1":"Change in economic\nvalue only",
        "OPTION 2":"Change in\nphysical and\nchemical\ncharacteristics",
        "OPTION 3":"Change in\ntechnology only",
        "OPTION 4":"None of the above",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'change in physical and chemical characteristics' because it directly addresses the in production by disintegration the material undergoes: in the context of operations management principles."
    },
    {
        "SL NO":20,
        "QUESTIONS":"Use of any process or procedure designed to transform a set\nof input elements into a set of output elements is known as:",
        "OPTION 1":"Transformation\nprocess",
        "OPTION 2":"Transformation of\ninput to output",
        "OPTION 3":"Production",
        "OPTION 4":"Technology\nchange.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'production' because it directly addresses the use of any process or procedure designed to transform a set\nof input elements into a set of output elements is known as: in the context of operations management principles."
    },
    {
        "SL NO":21,
        "QUESTIONS":"Conversion of inputs into outputs is known as:",
        "OPTION 1":"Application of\ntechnology",
        "OPTION 2":"Operations\nmanagement",
        "OPTION 3":"Manufacturing\nproducts",
        "OPTION 4":"Product.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'operations management' because it directly addresses the conversion of inputs into outputs is known as: in the context of operations management principles."
    },
    {
        "SL NO":22,
        "QUESTIONS":"Which one of the following is the external factor impacting\neffective capacity?",
        "OPTION 1":"Product standards",
        "OPTION 2":"Scheduling",
        "OPTION 3":"Motivation",
        "OPTION 4":"Product mix",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":23,
        "QUESTIONS":"Increasing capacity utilisation depends on",
        "OPTION 1":"Ability to increase\ndesign capacity",
        "OPTION 2":"Ability to increase\neffective capacity",
        "OPTION 3":"Ability to increase\ncapacity chunk",
        "OPTION 4":"Ability to increase\nresource\nendowments",
        "ANSWER CODE":2,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":24,
        "QUESTIONS":"Which one of the following is not within the purview of Long\nRange planning?",
        "OPTION 1":"Building a new\nfacility",
        "OPTION 2":"Expanding the\nexisting facility",
        "OPTION 3":"Moving to a new\nfacility due to\nforecasted changes\nin demand",
        "OPTION 4":"Preparation of\novertime budget\nfor workforce",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'preparation of overtime budget for workforce' because it directly addresses the which one of the following is not within the purview of long\nrange planning? in the context of operations management principles."
    },
    {
        "SL NO":25,
        "QUESTIONS":"The basic difference between slack and float time is that",
        "OPTION 1":"A slack is used with\nreference to events\nwhereas float is\nused with reference\nto activities",
        "OPTION 2":"A float is used\nwith reference to\nevents whereas\nslack is used with\nreference to\nactivities",
        "OPTION 3":"A slack is used with\nreference to critical\npath whereas float\nis used with\nreference to non-critical paths",
        "OPTION 4":"A slack is used\nwith reference to\nscheduling\nwhereas float is\nused with\nreference to\ncrashing",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'a slack is used with reference to events whereas float is used with reference to activities' because it directly addresses the the basic difference between slack and float time is that in the context of operations management principles."
    },
    {
        "SL NO":26,
        "QUESTIONS":"Which one of the following is not a factor in determining\nEconomic Lot Size for manufacturing?",
        "OPTION 1":"Production\nSchedule",
        "OPTION 2":"Usage rate",
        "OPTION 3":"Manufacturing Cost",
        "OPTION 4":"Cost of\nDeterioration",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'production schedule' because it directly addresses the which one of the following is not a factor in determining\neconomic lot size for manufacturing? in the context of operations management principles."
    },
    {
        "SL NO":27,
        "QUESTIONS":"Which one of the following is not a factor in planning service\ncapacity",
        "OPTION 1":"Period of production",
        "OPTION 2":"Need to be near\ncustomers",
        "OPTION 3":"Inability to store\nservices",
        "OPTION 4":"Degree of\nvolatility of\ndemand",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":28,
        "QUESTIONS":"It is extra capacity used to offset demand uncertainty. This is",
        "OPTION 1":"Capacity Cushion =\nActual output -Demand",
        "OPTION 2":"Capacity Cushion\n= Capacity \u2013\nExpected demand",
        "OPTION 3":"Capacity Tolerance\n= Effective capacity\n- Actual output",
        "OPTION 4":"Capacity Cushion\n= Capacity \u2013\nEffective Capacity",
        "ANSWER CODE":2,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":29,
        "QUESTIONS":"Which one of the following is correct?",
        "OPTION 1":"Capacity decision\ndoes not affect\nproduct lead times",
        "OPTION 2":"Capacity decisions\nmust link\nbackward &\nforward channels\nin the whole\noperation chain",
        "OPTION 3":"Expansionist\nstrategy does not\nhelp a firm to\nreduce its costs and\ncompete on price",
        "OPTION 4":"Wait & see\nstrategy improves\nmarket share over\nthe long run",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'capacity decisions must link backward & forward channels in the whole operation chain' because it directly addresses the which one of the following is correct? in the context of operations management principles."
    },
    {
        "SL NO":30,
        "QUESTIONS":"Leading capacity strategy",
        "OPTION 1":"Builds capacity in\nanticipation of\nincreasing future\ndemand",
        "OPTION 2":"Faces increasing\ndemand with the\nundeutilised\ncurrent capacity",
        "OPTION 3":"Builds capacity in\nanticipation of\nincreasing product\nvarieties",
        "OPTION 4":"Faces increasing\nconsumption with\nunsold stock",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":31,
        "QUESTIONS":"Which one of the following does not reduce effective\ncapacity?",
        "OPTION 1":"Paperwork required\nby Government\nregulatory agencies",
        "OPTION 2":"Pollution standard\non products",
        "OPTION 3":"Efficient\ndistributors",
        "OPTION 4":"Higher labour\nturnover",
        "ANSWER CODE":3,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":32,
        "QUESTIONS":"Which one of the following is an operational factor that\ndetermines effective capacity?",
        "OPTION 1":"Product standards",
        "OPTION 2":"Quality\ncapabilities",
        "OPTION 3":"Learning rates",
        "OPTION 4":"Quality assurance",
        "ANSWER CODE":4,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":33,
        "QUESTIONS":"Which one of the following is not a factor impacting effective\ncapacity?",
        "OPTION 1":"The design of\nfacilities",
        "OPTION 2":"Product mix",
        "OPTION 3":"Layout of the work\nspace",
        "OPTION 4":"Market share",
        "ANSWER CODE":4,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":34,
        "QUESTIONS":"Benefits of high utilisation are realised only when",
        "OPTION 1":"Effective capacity is\nfully achieved",
        "OPTION 2":"There is high\nefficiency",
        "OPTION 3":"Breakdown\nmaintenances are\nminimum",
        "OPTION 4":"There is demand\nfor output",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'there is demand for output' because it directly addresses the benefits of high utilisation are realised only when in the context of operations management principles."
    },
    {
        "SL NO":35,
        "QUESTIONS":"Key to improving capacity utilisation is",
        "OPTION 1":"To increase\neffective capacity",
        "OPTION 2":"To increase design\ncapacity",
        "OPTION 3":"To decrease\neffective capacity",
        "OPTION 4":"To increase\nmaintenance\nfrequency of the\ncapacity",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":36,
        "QUESTIONS":"Utilisation of an operation facility is measured by",
        "OPTION 1":"(Effective\nCapacity)\/(Design\nCapacity)*100",
        "OPTION 2":"(Actual\nOutput)\/(Design\nCpacity)*100",
        "OPTION 3":"(Actual\noutput)\/(Effective\nCapacity)*100",
        "OPTION 4":"(Design\nCapacity)\/(Effectiv\ne Capacity)*100",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is '(actual output)\/(design cpacity)*100' because it directly addresses the utilisation of an operation facility is measured by in the context of operations management principles."
    },
    {
        "SL NO":37,
        "QUESTIONS":"Efficiency of an operation facility is measured by",
        "OPTION 1":"(Effective\nCapacity)\/(Design\nCapacity)*100",
        "OPTION 2":"(Actual\nOutput)\/(Design\nCpacity)*100",
        "OPTION 3":"(Actual\noutput)\/(Effective\nCapacity)*100",
        "OPTION 4":"(Design\nCapacity)\/(Effectiv\ne Capacity)*100",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is '(actual output)\/(effective capacity)*100' because it directly addresses the efficiency of an operation facility is measured by in the context of operations management principles."
    },
    {
        "SL NO":38,
        "QUESTIONS":"Which one of the following questions are not answered by\nCapacity planning?",
        "OPTION 1":"What kind of\ncapacity is needed?",
        "OPTION 2":"How much is\nneeded to match\ndemand?",
        "OPTION 3":"When is it needed?",
        "OPTION 4":"For whom it is\nneeded?",
        "ANSWER CODE":3,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":39,
        "QUESTIONS":"Out of Balance Capacity occurs",
        "OPTION 1":"When there is a gap\nbetween supply and\ndemand",
        "OPTION 2":"When there is a\ngap between long\nterm supply and\nlong term demand",
        "OPTION 3":"When there is a gap\nbetween current\nand desired\ncapacity",
        "OPTION 4":"When there is a\ngap between actual\nsupply and EOQ\nsupply",
        "ANSWER CODE":3,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":40,
        "QUESTIONS":"The goal of capacity planning of an organisation is",
        "OPTION 1":"To achieve a match\nbetween its long\nterm supply\ncapabilities and the\nactual level of long\nterm demand",
        "OPTION 2":"To achieve a level\nof operation so\nthat supply failure\ncould be\nmaintained at \u2264\n1% of long term\ndemand",
        "OPTION 3":"To achieve a level\nof operation so that\nperiodic mean\noperation remain\nwithin 95% of long\nterm demand",
        "OPTION 4":"To achieve a\nmatch between its\nlong term supply\ncapabilities and the\npredicted level of\nlong term demand",
        "ANSWER CODE":4,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":41,
        "QUESTIONS":"Capacity refers to",
        "OPTION 1":"An upper limit or\nceiling on the load\nthat an operating\nunit can handle",
        "OPTION 2":"A range from a\nlower limit to an\nupper limit of load\nthrough which an\noperating unit\ncould operate",
        "OPTION 3":"A limit on the load\nthat an operating\nunit could handle\nonly with 5%\ndeviation",
        "OPTION 4":"An upper limit of\nload which an\noperating unit\ncould break during\nemergency",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":42,
        "QUESTIONS":"This denotes the highest output established by the actual trial\nruns of the productive machines installed. This is",
        "OPTION 1":"Design capacity",
        "OPTION 2":"Rated capacity",
        "OPTION 3":"Effective capacity",
        "OPTION 4":"Licensed capacity",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'rated capacity' because it directly addresses the this denotes the highest output established by the actual trial\nruns of the productive machines installed. this is in the context of operations management principles."
    },
    {
        "SL NO":43,
        "QUESTIONS":"Which one of the following is not a key question in Capacity\nplanning?",
        "OPTION 1":"What kind of\ncapacity is needed?",
        "OPTION 2":"What kind of\nfacilities are\nneeded?",
        "OPTION 3":"How much capacity\nis needed to match\ndemand?",
        "OPTION 4":"When the capacity\nis it needed?",
        "ANSWER CODE":2,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":44,
        "QUESTIONS":"Capacity Utilisation is",
        "OPTION 1":"The degree to which\na resource such as\nequipment, space or\nthe workforce is\ncurrently being used",
        "OPTION 2":"The degree to\nwhich a resource\nsuch as\nequipment, space\nor the workforce is\ncurrently being\nheld as reserve",
        "OPTION 3":"The degree to\nwhich a resource\nsuch as equipment,\nspace or the\nworkforce is\ncurrently being\nused for achieving\ninstalled capacity",
        "OPTION 4":"The degree to\nwhich a resource\nsuch as equipment,\nspace or the\nworkforce is\ncurrently being\nused for achieving\noptimisation",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":45,
        "QUESTIONS":"Actual Output cannot exceed effective capacity because of",
        "OPTION 1":"Problems of\nscheduling &\nbalancing\noperations",
        "OPTION 2":"Rejection due to\nquality problems",
        "OPTION 3":"Need for periodic\nmaintenance of\nequipment",
        "OPTION 4":"Changing product\nmix",
        "ANSWER CODE":2,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":46,
        "QUESTIONS":"Need for periodic maintenance of equipment always makes",
        "OPTION 1":"Licensed capacity >\nInstalled capacity",
        "OPTION 2":"Installed capacity\n< Effective\ncapacity",
        "OPTION 3":"Design capacity >\nEffective capacity",
        "OPTION 4":"Licensed capacity\n= Effective\ncapacity",
        "ANSWER CODE":3,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":47,
        "QUESTIONS":"If design capacity is reduced by allowances such as personal\ntime and maintenance, the resultant capacity is",
        "OPTION 1":"Design capacity",
        "OPTION 2":"Effective capacity",
        "OPTION 3":"Installed capacity",
        "OPTION 4":"Licensed capacity",
        "ANSWER CODE":2,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":48,
        "QUESTIONS":"This capacity is the maximum rate of output achieved under\nideal conditions. This is",
        "OPTION 1":"Design capacity",
        "OPTION 2":"Effective capacity",
        "OPTION 3":"Installed capacity",
        "OPTION 4":"Licensed capacity",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":49,
        "QUESTIONS":"Which one of the following is an output measure of Capacity?",
        "OPTION 1":"Total capacity of\nAKC Motors in\nIndia is 300000\nmachine hours in a\nyear",
        "OPTION 2":"Total Capacity of\nZ steel plant is\n720000labour\nhours in a year",
        "OPTION 3":"The Aluminum\ngiant XYZ\nproduces 30mt in a\nday",
        "OPTION 4":"The oil\nconglomerate ABC\nhas 80000gallon\nrefinery size",
        "ANSWER CODE":3,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":50,
        "QUESTIONS":"Which one of the following is a feature of input measure of\ncapacity?",
        "OPTION 1":"It is less applicable\nwhen the amount of\ncustomization and\nvariety in the\nproduct mix\nincreases",
        "OPTION 2":"It is used mainly\nin case of high\nvolume processes\nsuch as car\nmanufacturers",
        "OPTION 3":"Capacity is usually\nexpressed as\nnumber of\nworkstations or\nnumber of workers",
        "OPTION 4":"It is applicable\nwhen the firm\nprovides a\nrelatively small\nnumber of\nstandardized\nservices and\nproducts",
        "ANSWER CODE":3,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":51,
        "QUESTIONS":"Which one of the following is not a feature of output measure\nof capacity?",
        "OPTION 1":"It is applicable\nwhen the firm\nprovides a relatively\nsmall number of\nstandardized\nservices and\nproducts",
        "OPTION 2":"It is used mainly\nin case of high\nvolume processes\nsuch as car\nmanufacturers",
        "OPTION 3":"It is generally used\nfor low volume,\nflexible processes\nsuch as furniture\nmaker",
        "OPTION 4":"It is less applicable\nwhen the amount\nof customization\nand variety in the\nproduct mix\nincreases",
        "ANSWER CODE":3,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":52,
        "QUESTIONS":"Which one of the following is a feature of wait and see\nstrategy?",
        "OPTION 1":"It facilitates a firm\nto compete on price;",
        "OPTION 2":"It guards against\ninaccurate\nassumptions\nregarding\ncompetition",
        "OPTION 3":"It might increase\nthe firm\u2019s market\nshare",
        "OPTION 4":"It results\neconomies of scale",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'it guards against inaccurate assumptions regarding competition' because it directly addresses the which one of the following is a feature of wait and see\nstrategy? in the context of operations management principles."
    },
    {
        "SL NO":53,
        "QUESTIONS":"Which one of the following is not a feature of expansionist\nstrategy?",
        "OPTION 1":"It involves large\ninfrequent jumps in\ncapacity",
        "OPTION 2":"It minimizes the\nchance of sales\nlost to insufficient\ncapacity",
        "OPTION 3":"It stays ahead of\ndemand",
        "OPTION 4":"It lags behind\ndemand",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'it lags behind demand' because it directly addresses the which one of the following is not a feature of expansionist\nstrategy? in the context of operations management principles."
    },
    {
        "SL NO":54,
        "QUESTIONS":"Large capacity cushions are common in industries in which",
        "OPTION 1":"Demand is constant",
        "OPTION 2":"Customer service\nis not a priority",
        "OPTION 3":"Customer service is\nnot a priority",
        "OPTION 4":"Competition is\nsluggish",
        "ANSWER CODE":3,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":55,
        "QUESTIONS":"The capacity cushion is",
        "OPTION 1":"The amount of\ninstalled capacity a\nprocess uses to\nhandle sudden\nincrease in demand",
        "OPTION 2":"The amount of\nlicensed capacity a\nprocess uses to\nhandle sudden\nincrease in\ndemand",
        "OPTION 3":"The amount of\ndeclared capacity a\nprocess uses to\nhandle sudden\nincrease in demand",
        "OPTION 4":"The amount of\nreserve capacity a\nprocess uses to\nhandle sudden\nincrease in demand",
        "ANSWER CODE":4,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":56,
        "QUESTIONS":"Capacity decisions are strategic because",
        "OPTION 1":"Capacity decisions\naffect financing\ncosts",
        "OPTION 2":"Capacity decisions\ncan affect facility\nlocation",
        "OPTION 3":"Capacity at\nappropriate level\nfacilitates easier\nmanagement of\nproduct life cycle",
        "OPTION 4":"Capacity decisions\ncan affect\ncompetitiveness",
        "ANSWER CODE":4,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":57,
        "QUESTIONS":"Capacity decisions often involve",
        "OPTION 1":"Long term\nirrevocable\ncommitment of\nresources",
        "OPTION 2":"Short term\nirrevocable\ncommitment of\nresources",
        "OPTION 3":"Long term\nrevocable\ncommitment of\nresources",
        "OPTION 4":"(b) & (c) above",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":58,
        "QUESTIONS":"Long-term capacity plans are concerned with",
        "OPTION 1":"Overtime budgets",
        "OPTION 2":"Investments in\nnew facilities",
        "OPTION 3":"Work force size",
        "OPTION 4":"Inventories",
        "ANSWER CODE":2,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":59,
        "QUESTIONS":"Capacity planning procedure does not involve which one of\nthe following?",
        "OPTION 1":"Assess company\nsituation and\nenvironment to\nanalyse historical\ndemand",
        "OPTION 2":"Translate future\npredictions of\ndemand into\nphysical capacity\nrequirements",
        "OPTION 3":"Determine\neconomic effects of\nalternative plans",
        "OPTION 4":"Selecting a\ncapacity\nalternative most\nsuited to achieve\nstrategic mission\nof the firm.",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":60,
        "QUESTIONS":"Which one of the following is not affected by Capacity\ndecisions?",
        "OPTION 1":"Product lead times",
        "OPTION 2":"Customer\nResponsiveness",
        "OPTION 3":"Operating Costs",
        "OPTION 4":"Resource\noptimisation",
        "ANSWER CODE":4,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":61,
        "QUESTIONS":"Capacity planning is a",
        "OPTION 1":"Long term\nmakeover decision\nthat establishes a\nfirm\u2019s overall level\nof resources",
        "OPTION 2":"Long term\nrealignment\ndecision that\nestablishes a\nfirm\u2019s overall\nlevel of resources",
        "OPTION 3":"Long term\nrestructuring\ndecision that\nestablishes a firm\u2019s\noverall level of\nresources",
        "OPTION 4":"Long term\nstrategic decision\nthat establishes a\nfirm\u2019s overall level\nof resources",
        "ANSWER CODE":4,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":62,
        "QUESTIONS":"Which one of the following is the result of excess capacity?",
        "OPTION 1":"Loss of customers",
        "OPTION 2":"Restricts growth",
        "OPTION 3":"Drain company\u2019s\nresources",
        "OPTION 4":"All the above",
        "ANSWER CODE":3,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":63,
        "QUESTIONS":"Aggregate Resource Planning becomes a challenge when\ndemand fluctuates over the planning horizon. Under this case\nwhich one of the following is correct?",
        "OPTION 1":"Demand forecasts\nare converted to\nresource\nrequirements",
        "OPTION 2":"Producing at a\nconstant rate and\nusing inventory to\nabsorb\nfluctuations in\ndemand",
        "OPTION 3":"Resources\nnecessary to meet\ndemand over the\ntime horizon are\nacquired",
        "OPTION 4":"Minor variations in\ndemand are\nhandled with\novertime or under\ntime",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'producing at a constant rate and using inventory to absorb fluctuations in demand' because it directly addresses the aggregate resource planning becomes a challenge when\ndemand fluctuates over the planning horizon. under this case\nwhich one of the following is correct? in the context of operations management principles."
    },
    {
        "SL NO":64,
        "QUESTIONS":"The four step systematic approach to plan for long term\ncapacity decisions does not involve",
        "OPTION 1":"Estimate future\nproductivity\nrequirement",
        "OPTION 2":"Estimate future\ncapacity\nrequirements",
        "OPTION 3":"Identify gaps by\ncomparing\nrequirements with\navailable capacity",
        "OPTION 4":"Develop\nalternative plans\nfor reducing the\ngaps",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":65,
        "QUESTIONS":"In operation sequence if capacity of a facilty is lower than\nthe capacities of other facilities in the sequence it is",
        "OPTION 1":"Unutilised operation",
        "OPTION 2":"Flexible operation",
        "OPTION 3":"Rigid operation",
        "OPTION 4":"Bootleneck\noperation",
        "ANSWER CODE":4,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":66,
        "QUESTIONS":"Which one of the following is not an objective of MRP?",
        "OPTION 1":"Inventory Reduction",
        "OPTION 2":"Realistic delivery\ncommitments",
        "OPTION 3":"Reduction in the\nmanufacturing and\ndelivery lead times",
        "OPTION 4":"Reasonable\nproduction\nschedule",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'reasonable production schedule' because it directly addresses the which one of the following is not an objective of mrp? in the context of operations management principles."
    },
    {
        "SL NO":67,
        "QUESTIONS":"Which one of the following is not a characteristics of\nAggregate Planning?",
        "OPTION 1":"Both output and\nsales should be\nexpressed in a\nlogical overall unit\nof measuring",
        "OPTION 2":"Acceptable\nforecast for the\nperiod covering\nthe whole\nplanning horizon",
        "OPTION 3":"A method of\nidentification and\nfixing the relevant\ncosts associated\nwith the plant.",
        "OPTION 4":"Availability of\nalternatives for\nmeeting the\nobjective of the\norganization",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'acceptable forecast for the period covering the whole planning horizon' because it directly addresses the which one of the following is not a characteristics of\naggregate planning? in the context of operations management principles."
    },
    {
        "SL NO":68,
        "QUESTIONS":"Which one of the following is correct with respect to long\nrange forecast?",
        "OPTION 1":"It is used to\ndetermine budgetary\ncontrol over\nexpenses",
        "OPTION 2":"It is used to\ndetermine\ndividend policy",
        "OPTION 3":"It is used to plan for\ncapacity\nadjustments",
        "OPTION 4":"It is used to plan\nfor material\nrequirement",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'it is used to plan for material requirement' because it directly addresses the which one of the following is correct with respect to long\nrange forecast? in the context of operations management principles."
    },
    {
        "SL NO":69,
        "QUESTIONS":"The card which is prepared by the dispatching department to\nbook the labour involved in each operation is :",
        "OPTION 1":"Labour card",
        "OPTION 2":"Wage card",
        "OPTION 3":"Credit card",
        "OPTION 4":"Job card",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'job card' because it directly addresses the the card which is prepared by the dispatching department to\nbook the labour involved in each operation is : in the context of operations management principles."
    },
    {
        "SL NO":70,
        "QUESTIONS":"One of the product examples for Line Layout is :",
        "OPTION 1":"Repair Workshop",
        "OPTION 2":"Welding shop",
        "OPTION 3":"Engineering\nCollege",
        "OPTION 4":"Cement",
        "ANSWER CODE":4,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":71,
        "QUESTIONS":"The following establishes time sequence of operations:",
        "OPTION 1":"Routing",
        "OPTION 2":"Sequencing",
        "OPTION 3":"Scheduling",
        "OPTION 4":"Dispatching",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'scheduling' because it directly addresses the the following establishes time sequence of operations: in the context of operations management principles."
    },
    {
        "SL NO":72,
        "QUESTIONS":"The act of going round the production shop to note down the\nprogress of work and feedback the information is known as:",
        "OPTION 1":"Follow up",
        "OPTION 2":"Dispatching",
        "OPTION 3":"Routing",
        "OPTION 4":"Trip card",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'follow up' because it directly addresses the the act of going round the production shop to note down the\nprogress of work and feedback the information is known as: in the context of operations management principles."
    },
    {
        "SL NO":73,
        "QUESTIONS":"In aggregate planning one of the methods used to\nmodification of supply is:",
        "OPTION 1":"Advertising and\nsales promotion",
        "OPTION 2":"Development of\ncomplimentary\nproducts",
        "OPTION 3":"Backlogging",
        "OPTION 4":"Hiring and lay off\nof employees\ndepending on the\nsituation.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'hiring and lay off of employees depending on the situation.' because it directly addresses the in aggregate planning one of the methods used to\nmodification of supply is: in the context of operations management principles."
    },
    {
        "SL NO":74,
        "QUESTIONS":"In aggregate planning, one of the methods in modification of\ndemand is:",
        "OPTION 1":"Differential Pricing",
        "OPTION 2":"Lay off of\nemployees",
        "OPTION 3":"Over time working",
        "OPTION 4":"Sub-contracting.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'differential pricing' because it directly addresses the in aggregate planning, one of the methods in modification of\ndemand is: in the context of operations management principles."
    },
    {
        "SL NO":75,
        "QUESTIONS":"One of the requirements of Aggregate Planning is:",
        "OPTION 1":"Both output and\nsales should be\nexpressed in a\nlogical overall unit\nof measuring",
        "OPTION 2":"Appropriate time\nperiod",
        "OPTION 3":"List of all resources\navailable",
        "OPTION 4":"List of operations\nrequired.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'both output and sales should be expressed in a logical overall unit of measuring' because it directly addresses the one of the requirements of aggregate planning is: in the context of operations management principles."
    },
    {
        "SL NO":76,
        "QUESTIONS":"The study of relationship between the load on hand and\ncapacity of the work centers is known as:",
        "OPTION 1":"Scheduling",
        "OPTION 2":"Loading",
        "OPTION 3":"Routing",
        "OPTION 4":"Controlling.",
        "ANSWER CODE":2,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":77,
        "QUESTIONS":"Scheduling deals with:",
        "OPTION 1":"Number of jobs to\nbe done on a\nmachine",
        "OPTION 2":"Number of\nmachine tools\nused to do a job",
        "OPTION 3":"Different materials\nused in the product",
        "OPTION 4":"Fixing up starting\nand finishing times\nof each operation\nin doing a job.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'fixing up starting and finishing times of each operation in doing a job.' because it directly addresses the scheduling deals with: in the context of operations management principles."
    },
    {
        "SL NO":78,
        "QUESTIONS":"Scheduling shows:",
        "OPTION 1":"Total cost of\nproduction",
        "OPTION 2":"Total material cost",
        "OPTION 3":"Which resource\nshould do which\njob and when",
        "OPTION 4":"The flow line of\nmaterials.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'which resource should do which job and when' because it directly addresses the scheduling shows: in the context of operations management principles."
    },
    {
        "SL NO":79,
        "QUESTIONS":"Final stage of production planning, where production\nactivities are coordinated and projected on a time scale is\nknown as:",
        "OPTION 1":"Scheduling",
        "OPTION 2":"Loading",
        "OPTION 3":"Expediting",
        "OPTION 4":"Routing.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'scheduling' because it directly addresses the final stage of production planning, where production\nactivities are coordinated and projected on a time scale is\nknown as: in the context of operations management principles."
    },
    {
        "SL NO":80,
        "QUESTIONS":"(Total station time\/Cycle time \u00d7 Number of work stations) \u00d7\n100 is known as:",
        "OPTION 1":"Line Efficiency",
        "OPTION 2":"Line smoothness",
        "OPTION 3":"Balance delay of\nline",
        "OPTION 4":"Station efficiency.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'line efficiency' because it directly addresses the (total station time\/cycle time \u00d7 number of work stations) \u00d7\n100 is known as: in the context of operations management principles."
    },
    {
        "SL NO":81,
        "QUESTIONS":"In solving a problem on LOB, the number of workstations\nrequired is given by:",
        "OPTION 1":"Cycle time\/Total\ntime",
        "OPTION 2":"Cycle\ntime\/Element time",
        "OPTION 3":"Total time\/Element\ntime",
        "OPTION 4":"Total time\/ Cycle\ntime.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'total time\/ cycle time.' because it directly addresses the in solving a problem on lob, the number of workstations\nrequired is given by: in the context of operations management principles."
    },
    {
        "SL NO":82,
        "QUESTIONS":"Number of product varieties that can be manufactured in\nMass production is:",
        "OPTION 1":"One only",
        "OPTION 2":"Two only",
        "OPTION 3":"Few varieties in\nlarge volumes",
        "OPTION 4":"Large varieties in\nsmall volumes.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'two only' because it directly addresses the number of product varieties that can be manufactured in\nmass production is: in the context of operations management principles."
    },
    {
        "SL NO":83,
        "QUESTIONS":"Generally in continuous production the production is carried\nout to:",
        "OPTION 1":"Customer\u2019s order",
        "OPTION 2":"Government\norders only",
        "OPTION 3":"For stock and\nsupply",
        "OPTION 4":"Few rich\ncustomers",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'customer\u2019s order' because it directly addresses the generally in continuous production the production is carried\nout to: in the context of operations management principles."
    },
    {
        "SL NO":84,
        "QUESTIONS":"Inventory cost per product in intermittent production is",
        "OPTION 1":"Higher",
        "OPTION 2":"Lowest",
        "OPTION 3":"Medium",
        "OPTION 4":"Abnormal.",
        "ANSWER CODE":1,
        "EXPLANATION":"Inventory management balances the cost of holding goods against the risk of stockouts."
    },
    {
        "SL NO":85,
        "QUESTIONS":"The material handling cost per unit of product in Continuous\nproduction is:",
        "OPTION 1":"Highest compared\nto other systems",
        "OPTION 2":"Lower than other\nsystems",
        "OPTION 3":"Negligible",
        "OPTION 4":"Cannot say.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'lower than other systems' because it directly addresses the the material handling cost per unit of product in continuous\nproduction is: in the context of operations management principles."
    },
    {
        "SL NO":86,
        "QUESTIONS":"Routing and Scheduling becomes relatively complicated in",
        "OPTION 1":"Job production",
        "OPTION 2":"Batch production",
        "OPTION 3":"Flow production",
        "OPTION 4":"Mass production",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'batch production' because it directly addresses the routing and scheduling becomes relatively complicated in in the context of operations management principles."
    },
    {
        "SL NO":87,
        "QUESTIONS":"Number of product varieties that can be manufactured in Job\nproduction is:",
        "OPTION 1":"Limited to one or\ntwo",
        "OPTION 2":"Large varieties of\nproducts",
        "OPTION 3":"One only",
        "OPTION 4":"None of the above.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'large varieties of products' because it directly addresses the number of product varieties that can be manufactured in job\nproduction is: in the context of operations management principles."
    },
    {
        "SL NO":88,
        "QUESTIONS":"In general number of product varities that can be\nmanufactured in Flow production is:",
        "OPTION 1":"One only",
        "OPTION 2":"Ten to twenty\nvarities",
        "OPTION 3":"Large varities",
        "OPTION 4":"Five only",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'one only' because it directly addresses the in general number of product varities that can be\nmanufactured in flow production is: in the context of operations management principles."
    },
    {
        "SL NO":89,
        "QUESTIONS":"Generally the size of the order for production in Job\nproduction is:",
        "OPTION 1":"Small",
        "OPTION 2":"Large",
        "OPTION 3":"Medium",
        "OPTION 4":"Very large",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'small' because it directly addresses the generally the size of the order for production in job\nproduction is: in the context of operations management principles."
    },
    {
        "SL NO":90,
        "QUESTIONS":"For a marketing manager, the sales forecast is:",
        "OPTION 1":"Estimate of the\namount of unit sales\nor a specified future\nperiod",
        "OPTION 2":"Arranging the\nsales men to\ndifferent segments\nof the market",
        "OPTION 3":"To distribute the\ngoods through\ntransport to satisfy\nthe market demand",
        "OPTION 4":"To plan the sales\nmethods.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'estimate of the amount of unit sales or a specified future period' because it directly addresses the for a marketing manager, the sales forecast is: in the context of operations management principles."
    },
    {
        "SL NO":91,
        "QUESTIONS":"The time horizon selected for forecasting depends on:",
        "OPTION 1":"The salability of the\nproduct",
        "OPTION 2":"The selling\ncapacity of\nSalesman",
        "OPTION 3":"Purpose for which\nforecast is made",
        "OPTION 4":"Time required for\nproduction cycle.",
        "ANSWER CODE":3,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":92,
        "QUESTIONS":"Manufacturing system often produces:",
        "OPTION 1":"Standardised\nproducts",
        "OPTION 2":"Standardised\nproducts in large\nvolumes",
        "OPTION 3":"Substandardproduct\ns in large volumes",
        "OPTION 4":"Products and\nservices in limited\nvolume",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'standardised products' because it directly addresses the manufacturing system often produces: in the context of operations management principles."
    },
    {
        "SL NO":93,
        "QUESTIONS":"Most suitable layout for Job production is:",
        "OPTION 1":"Line layout",
        "OPTION 2":"Matrix layout",
        "OPTION 3":"Process layout",
        "OPTION 4":"Product layout.",
        "ANSWER CODE":3,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":94,
        "QUESTIONS":"Most suitable layout for Continuous production is:",
        "OPTION 1":"Line layout",
        "OPTION 2":"Process Layout",
        "OPTION 3":"Group technology",
        "OPTION 4":"Matrix layout.",
        "ANSWER CODE":1,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":95,
        "QUESTIONS":"One of the product examples for Line layout is:",
        "OPTION 1":"Repair workshop",
        "OPTION 2":"Welding shop",
        "OPTION 3":"Engineering\nCollege",
        "OPTION 4":"Cement.",
        "ANSWER CODE":4,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":96,
        "QUESTIONS":"One of the important basic objectives of Inventory\nmanagement is:",
        "OPTION 1":"To calculate EOQ\nfor all materials in\nthe organisation",
        "OPTION 2":"To go in person to\nthe market and\npurchase the\nmaterials",
        "OPTION 3":"To employ the\navailable capital\nefficiently so as to\nyield maximum\nresults",
        "OPTION 4":"Once materials are\nissued to the\ndepartments,\npersonally check\nhow they are used.",
        "ANSWER CODE":3,
        "EXPLANATION":"Inventory management balances the cost of holding goods against the risk of stockouts."
    },
    {
        "SL NO":97,
        "QUESTIONS":"MRP stands for:",
        "OPTION 1":"Material\nRequirement\nPlanning",
        "OPTION 2":"Material\nReordering\nPlanning",
        "OPTION 3":"Material\nRequisition\nProcedure",
        "OPTION 4":"Material\nRecording\nProcedure.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'material requirement planning' because it directly addresses the mrp stands for: in the context of operations management principles."
    },
    {
        "SL NO":98,
        "QUESTIONS":"In route sheet or operation layout, one has to show:",
        "OPTION 1":"A list of Materials\nto be used",
        "OPTION 2":"A list of machine\ntools to be used",
        "OPTION 3":"Every work center\nand the operation to\nbe done at that\nwork center",
        "OPTION 4":"The cost of\nproduct.",
        "ANSWER CODE":3,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":99,
        "QUESTIONS":"In aggregate planning, one of the methods in modification of\ndemand is:",
        "OPTION 1":"Differential Pricing",
        "OPTION 2":"Lay off of\nemployees",
        "OPTION 3":"Over time working",
        "OPTION 4":"Sub contracting.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'differential pricing' because it directly addresses the in aggregate planning, one of the methods in modification of\ndemand is: in the context of operations management principles."
    },
    {
        "SL NO":100,
        "QUESTIONS":"A steel plant has a design capacity of 50,000 tons of steel per\nday ,effective capacity of 40,0000 tons of steel per day and\nactual output of 36,0000 tons of steel per day. Compute the\nefficiency of the plant",
        "OPTION 1":"90%",
        "OPTION 2":"72%",
        "OPTION 3":"80%",
        "OPTION 4":"110%",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":101,
        "QUESTIONS":"A firm has four work centres A,B,C & D , in series with\nindividual capacities in units per day shown in below :\nraw material\nA - 380\nB - 360\nC- 340\nD - 400 ---- Actual output 300, what is the efficiency system",
        "OPTION 1":"80.33%",
        "OPTION 2":"77.66%",
        "OPTION 3":"99%",
        "OPTION 4":"88.23%",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is '88.23%' because it directly addresses the a firm has four work centres a,b,c & d , in series with\nindividual capacities in units per day shown in below :\nraw material\na - 380\nb - 360\nc- 340\nd - 400 ---- actual output 300, what is the efficiency system in the context of operations management principles."
    },
    {
        "SL NO":102,
        "QUESTIONS":"The monthly requirement of raw material for a company is\n3000 units .The carrying cost is estimated to be 20% of the\npurchase price per unit ,in addition to rs 2 per unit.The\npurchase price of raw material is rs 20 per unit.The ordering\ncost is Rs 25 per order. You are required to find EOQ.",
        "OPTION 1":"458 units",
        "OPTION 2":"548 units",
        "OPTION 3":"448 units",
        "OPTION 4":"844 units",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is '548 units' because it directly addresses the the monthly requirement of raw material for a company is\n3000 units .the carrying cost is estimated to be 20% of the\npurchase price per unit ,in addition to rs 2 per unit.the\npurchase price of raw material is rs 20 per unit.the ordering\ncost is rs 25 per order. you are required to find eoq. in the context of operations management principles."
    },
    {
        "SL NO":103,
        "QUESTIONS":"EOQ is 102 units ,maximum usage 200 units , maximum\ndelivery period 8 weeks , minimum usage 50 units, minimum\ndelevery period 6 weeks , calculate maximum level of stock",
        "OPTION 1":"1502 units",
        "OPTION 2":"1202 units",
        "OPTION 3":"1402 units",
        "OPTION 4":"1302 units",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is '1402 units' because it directly addresses the eoq is 102 units ,maximum usage 200 units , maximum\ndelivery period 8 weeks , minimum usage 50 units, minimum\ndelevery period 6 weeks , calculate maximum level of stock in the context of operations management principles."
    },
    {
        "SL NO":104,
        "QUESTIONS":"M\/s Kobo Bearing Ltd is committed to supply 24,000\nbearings per annum to M\/s Deluxe fans on a steady daily\nbasis .It is estimated that it costs 10 paisa as inventory\nholding cost per bearing per month and that the setup cost per\nrun of bearing manufacture is 324.What is the optimum run\nsize for bearing manufacture ?",
        "OPTION 1":"3600 units",
        "OPTION 2":"1200 units",
        "OPTION 3":"7200 units",
        "OPTION 4":"8400 units",
        "ANSWER CODE":1,
        "EXPLANATION":"Inventory management balances the cost of holding goods against the risk of stockouts."
    },
    {
        "SL NO":105,
        "QUESTIONS":"In general, medium range forecasting period will be\napproximately:",
        "OPTION 1":"5 to 10 Years",
        "OPTION 2":"2 to 3 days",
        "OPTION 3":"3 to 6 months",
        "OPTION 4":"10 to 20 years.",
        "ANSWER CODE":3,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":106,
        "QUESTIONS":"The range of Long range forecasting period may be\napproximately:",
        "OPTION 1":"1 to 2 weeks",
        "OPTION 2":"2 to 3 months",
        "OPTION 3":"1 year",
        "OPTION 4":"above 5 years.",
        "ANSWER CODE":4,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":107,
        "QUESTIONS":"To plan for future man power requirement:",
        "OPTION 1":"Short term\nforecasting is used",
        "OPTION 2":"Long range\nforecasting is used",
        "OPTION 3":"Medium range\nforecasting is used",
        "OPTION 4":"There is no need\nto use forecasting,\nas future is\nuncertain.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'long range forecasting is used' because it directly addresses the to plan for future man power requirement: in the context of operations management principles."
    },
    {
        "SL NO":108,
        "QUESTIONS":"Long range forecasting is useful in:",
        "OPTION 1":"Plan for Research\nand Development",
        "OPTION 2":"To Schedule jobs\nin Job production",
        "OPTION 3":"In purchasing the\nmaterial to meet the\npresent production\ndemand",
        "OPTION 4":"To assess\nmanpower required\nin the coming\nmonth.",
        "ANSWER CODE":1,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":109,
        "QUESTIONS":"Medium range forecasting is useful in:",
        "OPTION 1":"To assess the\nloading capacity of\nthe machine",
        "OPTION 2":"To purchase a\nmaterials for next\nmonth",
        "OPTION 3":"To plan for-capacity\nadjustments",
        "OPTION 4":"To decide whether\nto receive\nproduction orders\nor not.",
        "ANSWER CODE":3,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":110,
        "QUESTIONS":"Important factor in forecasting production is:",
        "OPTION 1":"Environmental\nchanges",
        "OPTION 2":"Available capacity\nof machines",
        "OPTION 3":"Disposable income\nof the consumer",
        "OPTION 4":"Changes in the\npreference of the\nconsumer.",
        "ANSWER CODE":2,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":111,
        "QUESTIONS":"To decide work load for men and machines:",
        "OPTION 1":"Medium range\nforecasting is used",
        "OPTION 2":"Short term\nforecasting is used",
        "OPTION 3":"Long range\nforecasting is used",
        "OPTION 4":"A combination of\nlong range and\nmedium range\nforecasting is used.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'short term forecasting is used' because it directly addresses the to decide work load for men and machines: in the context of operations management principles."
    },
    {
        "SL NO":112,
        "QUESTIONS":"For production planning:",
        "OPTION 1":"Shot term\nforecasting is useful",
        "OPTION 2":"Medium term\nforecasting is\nuseful",
        "OPTION 3":"Long term\nforecasting is\nuseful",
        "OPTION 4":"Forecasting is not\nuseful.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'shot term forecasting is useful' because it directly addresses the for production planning: in the context of operations management principles."
    },
    {
        "SL NO":113,
        "QUESTIONS":"In general, medium range forecasting period will be\napproximately",
        "OPTION 1":"5 to 10 Years",
        "OPTION 2":"2 to 3 days",
        "OPTION 3":"3 to 6 months",
        "OPTION 4":"10 to 20 years",
        "ANSWER CODE":3,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":114,
        "QUESTIONS":"Medium range forecasting is useful in:",
        "OPTION 1":"To assess the\nloading capacity of\nthe machine",
        "OPTION 2":"To purchase a\nmaterials for next\nmonth",
        "OPTION 3":"To plan for-capacity\nadjustments",
        "OPTION 4":"To decide whether\nto receive\nproduction orders\nor not.",
        "ANSWER CODE":3,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":115,
        "QUESTIONS":"Monthly demand for a component is 1000 units. Setting-up\ncost per batch is ` 120. Cost of manufacture per unit is ` 20.\nRate of interest may be considered at 10% p.a. Calculate the\nEBQ",
        "OPTION 1":"1200 units",
        "OPTION 2":"1400 units",
        "OPTION 3":"1440 units",
        "OPTION 4":"1000 units",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is '1200 units' because it directly addresses the monthly demand for a component is 1000 units. setting-up\ncost per batch is ` 120. cost of manufacture per unit is ` 20.\nrate of interest may be considered at 10% p.a. calculate the\nebq in the context of operations management principles."
    },
    {
        "SL NO":116,
        "QUESTIONS":"Daily demand for a certain product is normally distributed\nwith a mean of 60 and standard deviation of 7. The source of\nsupply is reliable and maintain a constant lead time of six\ndays. The cost of placing the order is ` 10 and annual holding\ncosts are ` 0.50 per unit. There are no stock out costs, and\nunfilled orders are filled as soon as the order arrives. Assume\nsales occur over the entire 365 days of the year.Find the .\nFind the order quantity",
        "OPTION 1":"336 units",
        "OPTION 2":"936 units",
        "OPTION 3":"633 inits",
        "OPTION 4":"393 units",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is '936 units' because it directly addresses the daily demand for a certain product is normally distributed\nwith a mean of 60 and standard deviation of 7. the source of\nsupply is reliable and maintain a constant lead time of six\ndays. the cost of placing the order is ` 10 and annual holding\ncosts are ` 0.50 per unit. there are no stock out costs, and\nunfilled orders are filled as soon as the order arrives. assume\nsales occur over the entire 365 days of the year.find the .\nfind the order quantity in the context of operations management principles."
    },
    {
        "SL NO":117,
        "QUESTIONS":"Consider the following item that is being managed using a\nfixed time period model with safety stock\nWeekly demand (d) = 50 units Review cycle (T) = 3 weeks\nSafety stock (SS) = 30 units\nWhat are the average inventory turn for the item?",
        "OPTION 1":"24.8 turns per year",
        "OPTION 2":"84.2 turns per year",
        "OPTION 3":"80 turns per year",
        "OPTION 4":"None of the above.",
        "ANSWER CODE":1,
        "EXPLANATION":"Inventory management balances the cost of holding goods against the risk of stockouts."
    },
    {
        "SL NO":118,
        "QUESTIONS":"Addition of value to raw materials through application of\ntechnology is :",
        "OPTION 1":"Product",
        "OPTION 2":"Production",
        "OPTION 3":"Advancement",
        "OPTION 4":"Transformation",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'production' because it directly addresses the addition of value to raw materials through application of\ntechnology is : in the context of operations management principles."
    },
    {
        "SL NO":119,
        "QUESTIONS":"Cost reduction can be achieved through",
        "OPTION 1":"Work sampling",
        "OPTION 2":"Value analysis",
        "OPTION 3":"Quality assurance",
        "OPTION 4":"Supply chain\nmanagement.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'value analysis' because it directly addresses the cost reduction can be achieved through in the context of operations management principles."
    },
    {
        "SL NO":120,
        "QUESTIONS":"Production control concerned with:",
        "OPTION 1":"Passive assessment\nof plant\nperformance",
        "OPTION 2":"Strict control on\nlabours",
        "OPTION 3":"Good materials\nmanagement",
        "OPTION 4":"Good product\ndesign.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'passive assessment of plant performance' because it directly addresses the production control concerned with: in the context of operations management principles."
    },
    {
        "SL NO":121,
        "QUESTIONS":"The starting point of Production cycle is:",
        "OPTION 1":"Product design",
        "OPTION 2":"Production\nPlanning",
        "OPTION 3":"Routing",
        "OPTION 4":"Market research.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'market research.' because it directly addresses the the starting point of production cycle is: in the context of operations management principles."
    },
    {
        "SL NO":122,
        "QUESTIONS":"Variety reduction is generally known as:",
        "OPTION 1":"Less varities",
        "OPTION 2":"Simplification",
        "OPTION 3":"Reduced varities",
        "OPTION 4":"None of the above.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'simplification' because it directly addresses the variety reduction is generally known as: in the context of operations management principles."
    },
    {
        "SL NO":123,
        "QUESTIONS":"Preferred numbers are used to:",
        "OPTION 1":"To determine the\nnumber of varities\nthat are to be\nmanufactured",
        "OPTION 2":"To the test the\ndesign of the\nproduct",
        "OPTION 3":"To ascertain the\nquality level of the\nproduct",
        "OPTION 4":"To evaluate the\nproduction cost.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'to determine the number of varities that are to be manufactured' because it directly addresses the preferred numbers are used to: in the context of operations management principles."
    },
    {
        "SL NO":124,
        "QUESTIONS":"There are ______ stages of Design thinking",
        "OPTION 1":"5",
        "OPTION 2":"3",
        "OPTION 3":"4",
        "OPTION 4":"2",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is '5' because it directly addresses the there are ______ stages of design thinking in the context of operations management principles."
    },
    {
        "SL NO":125,
        "QUESTIONS":"Most suitable layout for Job production is",
        "OPTION 1":"Line layout",
        "OPTION 2":"Matrix layout",
        "OPTION 3":"Process layout",
        "OPTION 4":"Product layout",
        "ANSWER CODE":3,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":126,
        "QUESTIONS":"Most suitable layout for Continuous production is:",
        "OPTION 1":"Line layout",
        "OPTION 2":"Matrix layout",
        "OPTION 3":"Process layout",
        "OPTION 4":"Product layout",
        "ANSWER CODE":1,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":127,
        "QUESTIONS":"One of the product examples for Line layout is:",
        "OPTION 1":"Repair workshop",
        "OPTION 2":"Welding shop",
        "OPTION 3":"Engineering\nCollege",
        "OPTION 4":"Cement.",
        "ANSWER CODE":4,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":128,
        "QUESTIONS":"Generally in continuous production the production is carried\nout to:",
        "OPTION 1":"Customer\u2019s order",
        "OPTION 2":"Government\norders only",
        "OPTION 3":"For stock and\nsupply",
        "OPTION 4":"Few rich\ncustomers.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'for stock and supply' because it directly addresses the generally in continuous production the production is carried\nout to: in the context of operations management principles."
    },
    {
        "SL NO":129,
        "QUESTIONS":"Inventory cost per product in intermittent production is:",
        "OPTION 1":"Higher",
        "OPTION 2":"Lowest",
        "OPTION 3":"Medium",
        "OPTION 4":"Abnormal.",
        "ANSWER CODE":1,
        "EXPLANATION":"Inventory management balances the cost of holding goods against the risk of stockouts."
    },
    {
        "SL NO":130,
        "QUESTIONS":"The material handling cost per unit of product in Continuous\nproduction is:",
        "OPTION 1":"Highest compared\nto other systems",
        "OPTION 2":"Lower than other\nsystems",
        "OPTION 3":"Negligible",
        "OPTION 4":"Cannot say.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'lower than other systems' because it directly addresses the the material handling cost per unit of product in continuous\nproduction is: in the context of operations management principles."
    },
    {
        "SL NO":131,
        "QUESTIONS":"Routing and Scheduling becomes relatively complicated in",
        "OPTION 1":"Job production",
        "OPTION 2":"Batch production",
        "OPTION 3":"Flow production",
        "OPTION 4":"Mass production.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'batch production' because it directly addresses the routing and scheduling becomes relatively complicated in in the context of operations management principles."
    },
    {
        "SL NO":132,
        "QUESTIONS":"The starting point of Production cycle is:",
        "OPTION 1":"Product design",
        "OPTION 2":"Production\nPlanning",
        "OPTION 3":"Routing",
        "OPTION 4":"Market research.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'market research.' because it directly addresses the the starting point of production cycle is: in the context of operations management principles."
    },
    {
        "SL NO":133,
        "QUESTIONS":"In Process Planning we plan:",
        "OPTION 1":"Different machines\nrequired",
        "OPTION 2":"Different\noperations\nrequired",
        "OPTION 3":"We plan the flow of\nmaterial in each\ndepartment",
        "OPTION 4":"We design the\nproduct.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'we plan the flow of material in each department' because it directly addresses the in process planning we plan: in the context of operations management principles."
    },
    {
        "SL NO":134,
        "QUESTIONS":"In Operation Planning",
        "OPTION 1":"The planner plans\neach operation to be\ndone at work\ncenters and the\nsequence of\noperations",
        "OPTION 2":"Decide the tools to\nbe used to perform\nthe operations",
        "OPTION 3":"Decide the machine\nto be used to\nperform the\noperation",
        "OPTION 4":"Decide the\nmaterials to be\nused to produce\nthe product",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'the planner plans each operation to be done at work centers and the sequence of operations' because it directly addresses the in operation planning in the context of operations management principles."
    },
    {
        "SL NO":135,
        "QUESTIONS":"One of the important production documents is:",
        "OPTION 1":"Design sheet of the\nproduct",
        "OPTION 2":"List of materials",
        "OPTION 3":"Route card",
        "OPTION 4":"Control chart.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'route card' because it directly addresses the one of the important production documents is: in the context of operations management principles."
    },
    {
        "SL NO":136,
        "QUESTIONS":"The scope of Production Planning and Control is:",
        "OPTION 1":"Limited to\nProduction of\nproducts only",
        "OPTION 2":"Limited to\nproduction of\nservices only",
        "OPTION 3":"Limited to\nproduction of\nservices and\nproducts only",
        "OPTION 4":"Unlimited, can be\napplied to any type\nof activity.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'unlimited, can be applied to any type of activity.' because it directly addresses the the scope of production planning and control is: in the context of operations management principles."
    },
    {
        "SL NO":137,
        "QUESTIONS":"Which one of the following product is not suitable for flow\nshop scheduling?",
        "OPTION 1":"Car",
        "OPTION 2":"Petrol",
        "OPTION 3":"Steel",
        "OPTION 4":"Invitation Card",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'invitation card' because it directly addresses the which one of the following product is not suitable for flow\nshop scheduling? in the context of operations management principles."
    },
    {
        "SL NO":138,
        "QUESTIONS":"Which one of the following is a Sequencing rule for single\nfacility?",
        "OPTION 1":"EVPI",
        "OPTION 2":"DFA",
        "OPTION 3":"MAD",
        "OPTION 4":"LPT",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'lpt' because it directly addresses the which one of the following is a sequencing rule for single\nfacility? in the context of operations management principles."
    },
    {
        "SL NO":139,
        "QUESTIONS":"The main question in an assignment problem is",
        "OPTION 1":"How the\nassignments should\nbe made in order\nthat the total cost\ninvolved in\nactivities is\nminimized",
        "OPTION 2":"How the\nassignments\nshould be made in\norder that the total\nresources involved\nin activities is\noptimised",
        "OPTION 3":"How the\nassignments should\nbe made in order\nthat the total time\ninvolved in\nactivities is\nminimized",
        "OPTION 4":"How the\nassignments\nshould be made in\norder that inter\ndependence among\nall activities is\nminimized",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'how the assignments should be made in order that the total cost involved in activities is minimized' because it directly addresses the the main question in an assignment problem is in the context of operations management principles."
    },
    {
        "SL NO":140,
        "QUESTIONS":"Linear Programming is a technique used for determining:",
        "OPTION 1":"Production\nProgramme",
        "OPTION 2":"Plant Layout",
        "OPTION 3":"Product Mix",
        "OPTION 4":"Manufacturing\nsequence",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'product mix' because it directly addresses the linear programming is a technique used for determining: in the context of operations management principles."
    },
    {
        "SL NO":141,
        "QUESTIONS":"In a linear programming model feasible solution is",
        "OPTION 1":"The basic solution\nto the general L.P\nproblem",
        "OPTION 2":"Any solution that\nalso satisfies the\nnon-negative\nrestrictions of the\ngeneral L.P\nproblem",
        "OPTION 3":"A solution which\noptimize (maximize\nor minimize) the\nobjective function\nof a general L.P\nproblem",
        "OPTION 4":"A basic solution to\nthe system of\nequations if one or\nmore of the basic\nvariables become\nequal to zero",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'any solution that also satisfies the non-negative restrictions of the general l.p problem' because it directly addresses the in a linear programming model feasible solution is in the context of operations management principles."
    },
    {
        "SL NO":142,
        "QUESTIONS":"Which one of the following is not a limitation of linear\nprogramming model?",
        "OPTION 1":"Model can be\napplied only in\nsituations where\nobjective functions\ncan be expressed in\nterms of linear\nexpressions",
        "OPTION 2":"Model can be\napplied only when\ncoefficients in the\nconstraints\nequations must be\ncompletely known",
        "OPTION 3":"Model can be\napplied only to all\nreal world problems\nwhich are not\ncomplex in nature",
        "OPTION 4":"Model cannot be\napplied to give a\nsolution if\nmanagement have\nconflicting\nmultiple goals.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'model can be applied only to all real world problems which are not complex in nature' because it directly addresses the which one of the following is not a limitation of linear\nprogramming model? in the context of operations management principles."
    },
    {
        "SL NO":143,
        "QUESTIONS":"Which of the following is not a method for solving\nAssignment problem?",
        "OPTION 1":"Complete\nEnumeration\nmethod",
        "OPTION 2":"Hungarian method",
        "OPTION 3":"Simplex method",
        "OPTION 4":"Natural method",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'natural method' because it directly addresses the which of the following is not a method for solving\nassignment problem? in the context of operations management principles."
    },
    {
        "SL NO":144,
        "QUESTIONS":"The objective of application of linear programming in\nindustrial problems is",
        "OPTION 1":"To determine a plan\nfor production and\nprocurement in the\ntime period under\nconsideration",
        "OPTION 2":"To determine an\noptimal solution of\nthe problem under\nthe given\nconstraints",
        "OPTION 3":"To determine the\ncost effective\nsolution of the\nproblem under\nscarce resources",
        "OPTION 4":"To determine a\nplan for time based\nsolution to the\nproblem for\nincreasing\nproductivity",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'to determine a plan for production and procurement in the time period under consideration' because it directly addresses the the objective of application of linear programming in\nindustrial problems is in the context of operations management principles."
    },
    {
        "SL NO":145,
        "QUESTIONS":"Simulation is the representation of a real life situation by\ndifferent means. It is popular because---",
        "OPTION 1":"It may be the only\nmethod available as\nit is difficult to\nobserve the actual\nenvironment",
        "OPTION 2":"It may not be\npossible to\ndevelop a\nmathematical\nmodel",
        "OPTION 3":"Actual observation\nof a system may be\ntoo expensive or too\ndisruptive",
        "OPTION 4":"All the above",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'all the above' because it directly addresses the simulation is the representation of a real life situation by\ndifferent means. it is popular because--- in the context of operations management principles."
    },
    {
        "SL NO":146,
        "QUESTIONS":"In sequencing it is the difference between the time remaining\nto due date and the remaining processing time. It is",
        "OPTION 1":"STR",
        "OPTION 2":"SOT",
        "OPTION 3":"SPT",
        "OPTION 4":"DDATE",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'str' because it directly addresses the in sequencing it is the difference between the time remaining\nto due date and the remaining processing time. it is in the context of operations management principles."
    },
    {
        "SL NO":147,
        "QUESTIONS":"Selection of plant location is influenced by few factors.\nWhich one of the following is not a factor?",
        "OPTION 1":"Existence of\nComplementary\nIndustries",
        "OPTION 2":"Availability of\nLabour",
        "OPTION 3":"Civic Amenities for\nWorkers",
        "OPTION 4":"Government\u2019s\nEXIM Policy",
        "ANSWER CODE":4,
        "EXPLANATION":"Facility location decisions involve choosing a site that minimizes costs (transport, labor) and maximizes service."
    },
    {
        "SL NO":148,
        "QUESTIONS":"In a queuing system, the speed with which service is provided\ncan be expressed in either of two ways\u2014",
        "OPTION 1":"Service start time\nand Service finish\ntime",
        "OPTION 2":"Service rate and\nService time",
        "OPTION 3":"Arrival rate and\nService rate",
        "OPTION 4":"Service Inflow rate\nand Service\noutflow rate",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'service rate and service time' because it directly addresses the in a queuing system, the speed with which service is provided\ncan be expressed in either of two ways\u2014 in the context of operations management principles."
    },
    {
        "SL NO":149,
        "QUESTIONS":"Most suitable layout for continuous production is",
        "OPTION 1":"Line layout",
        "OPTION 2":"Process layout",
        "OPTION 3":"Group technology",
        "OPTION 4":"Matrix layout",
        "ANSWER CODE":1,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":150,
        "QUESTIONS":"The most powerful and popular method for solving linear\nprogramming problem is",
        "OPTION 1":"Simplex method",
        "OPTION 2":"Graphical method",
        "OPTION 3":"Transportation\nmethod",
        "OPTION 4":"Assignment\nmethod",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'simplex method' because it directly addresses the the most powerful and popular method for solving linear\nprogramming problem is in the context of operations management principles."
    },
    {
        "SL NO":151,
        "QUESTIONS":"(Total station time\/cycle time \u00d7 Number of work stations) \u00d7\n100 is known as",
        "OPTION 1":"Line efficiency",
        "OPTION 2":"Line smoothness",
        "OPTION 3":"Balance delay of\nline",
        "OPTION 4":"Station efficiency",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'line efficiency' because it directly addresses the (total station time\/cycle time \u00d7 number of work stations) \u00d7\n100 is known as in the context of operations management principles."
    },
    {
        "SL NO":152,
        "QUESTIONS":"One of the important charts used in Programme control is:",
        "OPTION 1":"Material chart",
        "OPTION 2":"Gantt chart",
        "OPTION 3":"Route chart",
        "OPTION 4":"Inspection chart",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'gantt chart' because it directly addresses the one of the important charts used in programme control is: in the context of operations management principles."
    },
    {
        "SL NO":153,
        "QUESTIONS":"Issuing necessary orders, and taking necessary steps to ensure\nthat the time targets set in the schedules are are effectively\nachieved is known as:",
        "OPTION 1":"Routing",
        "OPTION 2":"Dispatching",
        "OPTION 3":"Scheduling",
        "OPTION 4":"Inspection.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'dispatching' because it directly addresses the issuing necessary orders, and taking necessary steps to ensure\nthat the time targets set in the schedules are are effectively\nachieved is known as: in the context of operations management principles."
    },
    {
        "SL NO":154,
        "QUESTIONS":"Linear Programming is a technique used for determining:",
        "OPTION 1":"Production\nProgramme",
        "OPTION 2":"Plant Layout",
        "OPTION 3":"Product Mix",
        "OPTION 4":"Manufacturing\nsequence.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'product mix' because it directly addresses the linear programming is a technique used for determining: in the context of operations management principles."
    },
    {
        "SL NO":155,
        "QUESTIONS":"Arrangement of machines depending on sequence of\noperations happens in:",
        "OPTION 1":"Process Layout",
        "OPTION 2":"Product Layout",
        "OPTION 3":"Hybrid Layout",
        "OPTION 4":"Group Technology\nLayout.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'product layout' because it directly addresses the arrangement of machines depending on sequence of\noperations happens in: in the context of operations management principles."
    },
    {
        "SL NO":156,
        "QUESTIONS":"Computers are used in Production control in this area:",
        "OPTION 1":"Follow-up activity",
        "OPTION 2":"To control labour",
        "OPTION 3":"To disseminate\ninformation",
        "OPTION 4":"Loading,\nScheduling and\nAssignment works.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'loading, scheduling and assignment works.' because it directly addresses the computers are used in production control in this area: in the context of operations management principles."
    },
    {
        "SL NO":157,
        "QUESTIONS":"Z-chart can be used to show:",
        "OPTION 1":"Process used in\nproduction",
        "OPTION 2":"Quality level of\nthe product",
        "OPTION 3":"Both the plan and\nthe performance,\nand deviation from\nthe plan",
        "OPTION 4":"To show cost\nstructure of the\nproduct",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'both the plan and the performance, and deviation from the plan' because it directly addresses the z-chart can be used to show: in the context of operations management principles."
    },
    {
        "SL NO":158,
        "QUESTIONS":"\u2018Z\u2019 chart is a chart used in:",
        "OPTION 1":"Programme control",
        "OPTION 2":"Job control",
        "OPTION 3":"Cost control",
        "OPTION 4":"Quality control.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'programme control' because it directly addresses the \u2018z\u2019 chart is a chart used in: in the context of operations management principles."
    },
    {
        "SL NO":159,
        "QUESTIONS":"One of the activities of expediting is:",
        "OPTION 1":"To file the orders\nin sequence",
        "OPTION 2":"To decide the\nsequence of\noperation",
        "OPTION 3":"To record the actual\nproduction against\nthe scheduled\nproduction",
        "OPTION 4":"To examine the\ntools used in\nproduction",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'to record the actual production against the scheduled production' because it directly addresses the one of the activities of expediting is: in the context of operations management principles."
    },
    {
        "SL NO":160,
        "QUESTIONS":"When work centers are used in optimal sequence to do the\njobs, we can:",
        "OPTION 1":"Minimise the set up\ntime",
        "OPTION 2":"Minimise\noperation time",
        "OPTION 3":"Minimise the\nbreakdown of\nmachines",
        "OPTION 4":"Minimise the\nutility of facility.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'minimise the set up time' because it directly addresses the when work centers are used in optimal sequence to do the\njobs, we can: in the context of operations management principles."
    },
    {
        "SL NO":161,
        "QUESTIONS":"The way in which we can assess the efficiency of the\nproduction plant is by:",
        "OPTION 1":"Efficient\ndispatching",
        "OPTION 2":"By manufacturing\na good product",
        "OPTION 3":"By comparing the\nactual performance\nwith targets\nspecified in the\nspecified\nprogramme",
        "OPTION 4":"By efficient\nproduction\nplanning.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'by comparing the actual performance with targets specified in the specified programme' because it directly addresses the the way in which we can assess the efficiency of the\nproduction plant is by: in the context of operations management principles."
    },
    {
        "SL NO":162,
        "QUESTIONS":"One of the important charts used in Programme control is:",
        "OPTION 1":"Material chart",
        "OPTION 2":"Gantt chart",
        "OPTION 3":"Route chart",
        "OPTION 4":"Inspection chart",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'gantt chart' because it directly addresses the one of the important charts used in programme control is: in the context of operations management principles."
    },
    {
        "SL NO":163,
        "QUESTIONS":"One of the important production documents is:",
        "OPTION 1":"Design sheet of the\nproduct",
        "OPTION 2":"List of materials",
        "OPTION 3":"Route card",
        "OPTION 4":"Control chart.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'route card' because it directly addresses the one of the important production documents is: in the context of operations management principles."
    },
    {
        "SL NO":164,
        "QUESTIONS":"The first stage of Production control is:",
        "OPTION 1":"Dispatching",
        "OPTION 2":"Scheduling",
        "OPTION 3":"Routing",
        "OPTION 4":"Triggering of\nproduction\noperations and\nobserving the\nprogress and\nrecord the\ndeviation",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'triggering of production operations and observing the progress and record the deviation' because it directly addresses the the first stage of production control is: in the context of operations management principles."
    },
    {
        "SL NO":165,
        "QUESTIONS":"Production planning in the intermediate range of time is\ntermed as:",
        "OPTION 1":"Production planning",
        "OPTION 2":"Long range\nproduction\nplanning",
        "OPTION 3":"Scheduling",
        "OPTION 4":"Aggregate\nplanning",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'aggregate planning' because it directly addresses the production planning in the intermediate range of time is\ntermed as: in the context of operations management principles."
    },
    {
        "SL NO":166,
        "QUESTIONS":"One of the principles of Scheduling is:",
        "OPTION 1":"Principle of optimal\nproduct design",
        "OPTION 2":"Principle of\nselection of best\nmaterial",
        "OPTION 3":"Principle of optimal\noperation sequence",
        "OPTION 4":"Principle of\noptimal cost.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'principle of optimal operation sequence' because it directly addresses the one of the principles of scheduling is: in the context of operations management principles."
    },
    {
        "SL NO":167,
        "QUESTIONS":"One of the aims of loading is:",
        "OPTION 1":"To finish the job as\nearly as possible",
        "OPTION 2":"To minimise the\nmaterial utilisation",
        "OPTION 3":"To improve the\nquality of product",
        "OPTION 4":"To keep operator\nidle time, material\nwaiting time and\nancillary machine\ntime at minimum.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'to keep operator idle time, material waiting time and ancillary machine time at minimum.' because it directly addresses the one of the aims of loading is: in the context of operations management principles."
    },
    {
        "SL NO":168,
        "QUESTIONS":"The cycle time in selected in balancing a line must be:",
        "OPTION 1":"Must be greater\nthan the smallest\ntime element given\nin the problem",
        "OPTION 2":"Must be less than\nthe highest time\nelement given in\nthe problem",
        "OPTION 3":"Must be slightly\ngreater than the\nhighest time\nelement given in\nthe problem",
        "OPTION 4":"Left to the choice\nof the problem\nsolver.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'must be slightly greater than the highest time element given in the problem' because it directly addresses the the cycle time in selected in balancing a line must be: in the context of operations management principles."
    },
    {
        "SL NO":169,
        "QUESTIONS":"In solving a problem on LOB, the number of workstations\nrequired is given by:",
        "OPTION 1":"Cycle time\/Total\ntime",
        "OPTION 2":"Cycle\ntime\/Element time",
        "OPTION 3":"Total time\/Element\ntime",
        "OPTION 4":"Total time\/ Cycle\ntime.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'total time\/ cycle time.' because it directly addresses the in solving a problem on lob, the number of workstations\nrequired is given by: in the context of operations management principles."
    },
    {
        "SL NO":170,
        "QUESTIONS":"Number of product varieties that can be manufactured in Job\nproduction is:",
        "OPTION 1":"Limited to one or\ntwo",
        "OPTION 2":"Large varieties of\nproducts",
        "OPTION 3":"One only",
        "OPTION 4":"None of the\nabove.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'large varieties of products' because it directly addresses the number of product varieties that can be manufactured in job\nproduction is: in the context of operations management principles."
    },
    {
        "SL NO":171,
        "QUESTIONS":"For a marketing manager, the sales forecast is:",
        "OPTION 1":"Estimate of the\namount of unit sales\nor a specified future\nperiod",
        "OPTION 2":"Arranging the\nsales men to\ndifferent segments\nof the market",
        "OPTION 3":"To distribute the\ngoods through\ntransport to satisfy\nthe market demand",
        "OPTION 4":"To plan the sales\nmethods",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'estimate of the amount of unit sales or a specified future period' because it directly addresses the for a marketing manager, the sales forecast is: in the context of operations management principles."
    },
    {
        "SL NO":172,
        "QUESTIONS":"For production planning:",
        "OPTION 1":"Shot term\nforecasting is useful",
        "OPTION 2":"Medium term\nforecasting is\nuseful",
        "OPTION 3":"Long term\nforecasting is\nuseful",
        "OPTION 4":"Forecasting is not\nuseful.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'shot term forecasting is useful' because it directly addresses the for production planning: in the context of operations management principles."
    },
    {
        "SL NO":173,
        "QUESTIONS":"Production planning deals with:",
        "OPTION 1":"What production\nfacilities is required\nand how these\nfacilities should be\nlaid out in space\navailable",
        "OPTION 2":"What to produce\nand when to\nproduce and where\nto sell",
        "OPTION 3":"What should be the\ndemand for the\nproduct in future",
        "OPTION 4":"What is the life of\nthe product?",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'what production facilities is required and how these facilities should be laid out in space available' because it directly addresses the production planning deals with: in the context of operations management principles."
    },
    {
        "SL NO":174,
        "QUESTIONS":"The first stage in production planning is:",
        "OPTION 1":"Process Planning",
        "OPTION 2":"Factory Planning",
        "OPTION 3":"Operation Planning",
        "OPTION 4":"Layout planning.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'factory planning' because it directly addresses the the first stage in production planning is: in the context of operations management principles."
    },
    {
        "SL NO":175,
        "QUESTIONS":"In Process Planning we plan:",
        "OPTION 1":"Different machines\nrequired",
        "OPTION 2":"Different\noperations\nrequired",
        "OPTION 3":"We plan the flow of\nmaterial in each\ndepartment",
        "OPTION 4":"We design the\nproduct.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'we plan the flow of material in each department' because it directly addresses the in process planning we plan: in the context of operations management principles."
    },
    {
        "SL NO":176,
        "QUESTIONS":"Economies of scale occurs when",
        "OPTION 1":"Single facility is\nused for multiple\npurposes",
        "OPTION 2":"Production or\noperating costs\nincrease linearly\nwith output levels",
        "OPTION 3":"Quantity discounts\nare not available for\nmaterial purchases;",
        "OPTION 4":"Operating\nefficiency\nincreases as\nworkers gain\nexperience",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'operating efficiency increases as workers gain experience' because it directly addresses the economies of scale occurs when in the context of operations management principles."
    },
    {
        "SL NO":177,
        "QUESTIONS":"The act of assessing the future and make provisions for it is\nknown as",
        "OPTION 1":"Planning",
        "OPTION 2":"Forecasting",
        "OPTION 3":"Assessment",
        "OPTION 4":"Scheduling.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'forecasting' because it directly addresses the the act of assessing the future and make provisions for it is\nknown as in the context of operations management principles."
    },
    {
        "SL NO":178,
        "QUESTIONS":"Application of technology or process to the raw material to\nadd use value is known as:",
        "OPTION 1":"Product",
        "OPTION 2":"Production",
        "OPTION 3":"Application of\ntechnology",
        "OPTION 4":"Combination of\ntechnology and\nprocess.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'production' because it directly addresses the application of technology or process to the raw material to\nadd use value is known as: in the context of operations management principles."
    },
    {
        "SL NO":179,
        "QUESTIONS":"In Production by disintegration the material undergoes:",
        "OPTION 1":"Change in economic\nvalue only",
        "OPTION 2":"Change in\nphysical and\nchemical\ncharacteristics",
        "OPTION 3":"Change in\ntechnology only",
        "OPTION 4":"None of the above.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'change in physical and chemical characteristics' because it directly addresses the in production by disintegration the material undergoes: in the context of operations management principles."
    },
    {
        "SL NO":180,
        "QUESTIONS":"The scope of Production Planning and Control is:",
        "OPTION 1":"Limited to\nProduction of\nproducts only",
        "OPTION 2":"Limited to\nproduction of\nservices only",
        "OPTION 3":"Limited to\nproduction of\nservices and\nproducts only",
        "OPTION 4":"Unlimited, can be\napplied to any type\nof activity.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'unlimited, can be applied to any type of activity.' because it directly addresses the the scope of production planning and control is: in the context of operations management principles."
    },
    {
        "SL NO":181,
        "QUESTIONS":"In an organisation the production planning and control\ndepartment comes under:",
        "OPTION 1":"Planning\ndepartment",
        "OPTION 2":"Manufacturing\ndepartment",
        "OPTION 3":"Personal\ndepartment",
        "OPTION 4":"R & D department.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'manufacturing department' because it directly addresses the in an organisation the production planning and control\ndepartment comes under: in the context of operations management principles."
    },
    {
        "SL NO":182,
        "QUESTIONS":"In Job production system, we need:",
        "OPTION 1":"More unskilled\nlabours",
        "OPTION 2":"Skilled labours",
        "OPTION 3":"Semi-skilled\nlabours",
        "OPTION 4":"Old people.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'skilled labours' because it directly addresses the in job production system, we need: in the context of operations management principles."
    },
    {
        "SL NO":183,
        "QUESTIONS":"Wanda\u2019s Car Wash & dry is an automatic, five-minute\noperation with a single bay. On a typical Saturday morning,\ncars arrive at a mean rate of eight per hour, with arrivals\ntending to follow a Poisson distribution. Find The average\ntime cars spend in line and service.",
        "OPTION 1":"10 minutes",
        "OPTION 2":"20 minutes",
        "OPTION 3":"15 minutes",
        "OPTION 4":"None of the above.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is '10 minutes' because it directly addresses the wanda\u2019s car wash & dry is an automatic, five-minute\noperation with a single bay. on a typical saturday morning,\ncars arrive at a mean rate of eight per hour, with arrivals\ntending to follow a poisson distribution. find the average\ntime cars spend in line and service. in the context of operations management principles."
    },
    {
        "SL NO":184,
        "QUESTIONS":"A departmental store has one cashier. During the rush hours,\ncustomers arrive at a rate of 20 per hour. The average number\nof customers that can be handled by the cashier is 24 per\nhour. Assume the conditions for use of the single \u2013 channel\nqueuing model. Find out average customer spends in the\nsystem",
        "OPTION 1":"10 customers",
        "OPTION 2":"5 customers",
        "OPTION 3":"15 customers",
        "OPTION 4":"20 customers",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is '5 customers' because it directly addresses the a departmental store has one cashier. during the rush hours,\ncustomers arrive at a rate of 20 per hour. the average number\nof customers that can be handled by the cashier is 24 per\nhour. assume the conditions for use of the single \u2013 channel\nqueuing model. find out average customer spends in the\nsystem in the context of operations management principles."
    },
    {
        "SL NO":185,
        "QUESTIONS":"As a tool service centre the arrival rate is two per hour and\nthe service potential is three per hour. Simple queue\nconditions exist.\nThe hourly wage paid to the attendant at the service centre is\n`1.50 per hour and the hourly cost of a machinist\naway from his work is ` 4. Calculate:The average time a\nmachinist spends waiting for service.",
        "OPTION 1":"0.777 hours",
        "OPTION 2":"0.667 hours",
        "OPTION 3":"0.600 hours",
        "OPTION 4":"0.700 hours",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is '0.667 hours' because it directly addresses the as a tool service centre the arrival rate is two per hour and\nthe service potential is three per hour. simple queue\nconditions exist.\nthe hourly wage paid to the attendant at the service centre is\n`1.50 per hour and the hourly cost of a machinist\naway from his work is ` 4. calculate:the average time a\nmachinist spends waiting for service. in the context of operations management principles."
    },
    {
        "SL NO":186,
        "QUESTIONS":"Which one of the following is not a factor affecting\nproductivity?",
        "OPTION 1":"Product design",
        "OPTION 2":"Material handling\nsystem",
        "OPTION 3":"Inventory control",
        "OPTION 4":"Master production\nschedule",
        "ANSWER CODE":4,
        "EXPLANATION":"Productivity is the ratio of output produced to the input resources used (like labor, capital, or materials)."
    },
    {
        "SL NO":187,
        "QUESTIONS":"Which one of the following is not correct?",
        "OPTION 1":"Productivity can be\nimproved by\nchanging work\nmethods",
        "OPTION 2":"Productivity\nrelates to a fixed\nset of tools or\nconditions",
        "OPTION 3":"For countries, high\nproductivity rates\ncan reduce the risk\nof inflation",
        "OPTION 4":"Productivity\nmeasures are used\nto judge the\neffective use of\nresources",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'productivity relates to a fixed set of tools or conditions' because it directly addresses the which one of the following is not correct? in the context of operations management principles."
    },
    {
        "SL NO":188,
        "QUESTIONS":"Which one of the following is not a factor for determination\nof effective capacity?",
        "OPTION 1":"Scheduling",
        "OPTION 2":"Labour turnover",
        "OPTION 3":"Union attitudes",
        "OPTION 4":"EOQ",
        "ANSWER CODE":4,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":189,
        "QUESTIONS":"A device of expressing the ratio between outputs and the\ninputs of the resources in numerical terms is named",
        "OPTION 1":"Productivity Index",
        "OPTION 2":"Efficiency Index",
        "OPTION 3":"Performance Index",
        "OPTION 4":"Resource Index",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'productivity index' because it directly addresses the a device of expressing the ratio between outputs and the\ninputs of the resources in numerical terms is named in the context of operations management principles."
    },
    {
        "SL NO":190,
        "QUESTIONS":"In Production by service, the product undergoes the changes\nin:",
        "OPTION 1":"Shape and size of\nthe surface",
        "OPTION 2":"Shape of the\nsurface only",
        "OPTION 3":"Size of the surface\nonly",
        "OPTION 4":"Chemical and\nMechanical\nproperties.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'shape of the surface only' because it directly addresses the in production by service, the product undergoes the changes\nin: in the context of operations management principles."
    },
    {
        "SL NO":191,
        "QUESTIONS":"Use of any process or procedure designed to transform a set\nof input elements into a set of output elements is known as:",
        "OPTION 1":"Transformation\nprocess",
        "OPTION 2":"Transformation of\ninput to output",
        "OPTION 3":"Production",
        "OPTION 4":"Technology\nchange",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'production' because it directly addresses the use of any process or procedure designed to transform a set\nof input elements into a set of output elements is known as: in the context of operations management principles."
    },
    {
        "SL NO":192,
        "QUESTIONS":"Conversion of inputs into outputs is known as:",
        "OPTION 1":"Application of\ntechnology",
        "OPTION 2":"Operations\nmanagement",
        "OPTION 3":"Manufacturing\nproducts",
        "OPTION 4":"Product",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'operations management' because it directly addresses the conversion of inputs into outputs is known as: in the context of operations management principles."
    },
    {
        "SL NO":193,
        "QUESTIONS":"Most important benefit to the consumer from efficient\nproduction system is:",
        "OPTION 1":"He can save money",
        "OPTION 2":"He will have\nproduct of his\nchoice easily\navailable",
        "OPTION 3":"He gets increased\nuse value in the\nproduct",
        "OPTION 4":"He can get the\nproduct on credit.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'he gets increased use value in the product' because it directly addresses the most important benefit to the consumer from efficient\nproduction system is: in the context of operations management principles."
    },
    {
        "SL NO":194,
        "QUESTIONS":"In Continuous manufacturing system, we need:",
        "OPTION 1":"General purpose\nmachines and\nSkilled labours",
        "OPTION 2":"Special machine\ntools and highly\nskilled labours",
        "OPTION 3":"Semi automatic\nmachines and\nunskilled labours",
        "OPTION 4":"General purpose\nmachines and\nunskilled labours",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'special machine tools and highly skilled labours' because it directly addresses the in continuous manufacturing system, we need: in the context of operations management principles."
    },
    {
        "SL NO":195,
        "QUESTIONS":"The best way of improving the productivity of capital is:",
        "OPTION 1":"Purchase automatic\nmachines",
        "OPTION 2":"Effective Labour\ncontrol",
        "OPTION 3":"To use good\nfinancial\nmanagement",
        "OPTION 4":"Productivity of\ncapital is to be\nincreased through\neffective materials\nmanagement.",
        "ANSWER CODE":4,
        "EXPLANATION":"Productivity is the ratio of output produced to the input resources used (like labor, capital, or materials)."
    },
    {
        "SL NO":196,
        "QUESTIONS":"There are two industries A and B manufacturing hose\ncouplings. The standard time per piece is 15 minutes. The\noutput of two small scale industries is 30 and 20 respectively\nper shift of 8 hours. Find the productivity of each per shift of\n8 hours.",
        "OPTION 1":"15\/16, 5\/8",
        "OPTION 2":"7\/24 , 9\/16",
        "OPTION 3":"3\/8 , 2\/5",
        "OPTION 4":"none of the above",
        "ANSWER CODE":1,
        "EXPLANATION":"Productivity is the ratio of output produced to the input resources used (like labor, capital, or materials)."
    },
    {
        "SL NO":197,
        "QUESTIONS":"Calculate the standard production per shift of 8 hours\nduration, with the following data: Observed time per unit\n= 5 minutes, Rating Factor -120%, Total allowances = 30%\nof normal time.",
        "OPTION 1":"45.61 units",
        "OPTION 2":"54.61 units",
        "OPTION 3":"51.64 units",
        "OPTION 4":"61.54 units",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is '61.54 units' because it directly addresses the calculate the standard production per shift of 8 hours\nduration, with the following data: observed time per unit\n= 5 minutes, rating factor -120%, total allowances = 30%\nof normal time. in the context of operations management principles."
    },
    {
        "SL NO":198,
        "QUESTIONS":"ISO 9004 only establishes guidelines",
        "OPTION 1":"operation",
        "OPTION 2":"design",
        "OPTION 3":"quality",
        "OPTION 4":"none of the above",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'operation' because it directly addresses the iso 9004 only establishes guidelines in the context of operations management principles."
    },
    {
        "SL NO":199,
        "QUESTIONS":"for Quality Assurance in Design, Production, Installation and\nServicing the _____ model is be used.",
        "OPTION 1":"ISO 9002 Model",
        "OPTION 2":"ISO 9001 Model",
        "OPTION 3":"ISO 9003 Model",
        "OPTION 4":"none of the above",
        "ANSWER CODE":2,
        "EXPLANATION":"Quality management focuses on meeting or exceeding customer expectations through process control and improvement."
    },
    {
        "SL NO":200,
        "QUESTIONS":"for Quality Assurance in Production and Installation the\n_____ model is be used.",
        "OPTION 1":"ISO 9002 Model",
        "OPTION 2":"ISO 9001 Model",
        "OPTION 3":"ISO 9003 Model",
        "OPTION 4":"none of the above",
        "ANSWER CODE":1,
        "EXPLANATION":"Quality management focuses on meeting or exceeding customer expectations through process control and improvement."
    },
    {
        "SL NO":201,
        "QUESTIONS":"for Quality Assurance in Final Inspection Test the _____\nmodel is be used.",
        "OPTION 1":"ISO 9002 Model",
        "OPTION 2":"ISO 9001 Model",
        "OPTION 3":"ISO 9003 Model",
        "OPTION 4":"none of the above",
        "ANSWER CODE":3,
        "EXPLANATION":"Quality management focuses on meeting or exceeding customer expectations through process control and improvement."
    },
    {
        "SL NO":202,
        "QUESTIONS":"A cement factory in Madhya Pradesh works 7 days a week in\n3 shifts per days having maintenance in the first shift of\naround 2 hours. It has roughly 100 workers which produces\nonly pozzolanic properties cement better known as PPC. The\noutput per month is around 2500 tonnes of PPC. Find the\nproductivity per worker?",
        "OPTION 1":"20 tonnes",
        "OPTION 2":"30 tonnes",
        "OPTION 3":"25 tonnes",
        "OPTION 4":"15 tonnes",
        "ANSWER CODE":3,
        "EXPLANATION":"Productivity is the ratio of output produced to the input resources used (like labor, capital, or materials)."
    },
    {
        "SL NO":203,
        "QUESTIONS":"The method used in scheduling a project is:",
        "OPTION 1":"A schedule of\nbreakdown of orders",
        "OPTION 2":"Outline Master\nProgramme",
        "OPTION 3":"PERT & CPM",
        "OPTION 4":"Schedule for large\nand integrated\nwork",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'pert & cpm' because it directly addresses the the method used in scheduling a project is: in the context of operations management principles."
    },
    {
        "SL NO":204,
        "QUESTIONS":"The difference between product system and project system is:",
        "OPTION 1":"Project system the\nequipment and\nmachinery are fixed\nwhere as in product\nsystem they are\nmovable",
        "OPTION 2":"In Product system\nthe machinery and\nequipment are\nfixed and in\nproject system\nthey are not fixed",
        "OPTION 3":"Project system\nproduces only\nstandardized\nproducts and\nproduct system\nproduces only\nunstandardised\nproducts",
        "OPTION 4":"Products cannot be\nstocked whereas\nprojects can be\nstocked.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'in product system the machinery and equipment are fixed and in project system they are not fixed' because it directly addresses the the difference between product system and project system is: in the context of operations management principles."
    },
    {
        "SL NO":205,
        "QUESTIONS":"Fixing the flow lines of materials in production is known as:",
        "OPTION 1":"Scheduling",
        "OPTION 2":"Loading",
        "OPTION 3":"Planning",
        "OPTION 4":"Routing.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'routing.' because it directly addresses the fixing the flow lines of materials in production is known as: in the context of operations management principles."
    },
    {
        "SL NO":206,
        "QUESTIONS":"The activity of specifying when to start the job and when to\nend the job is known as:",
        "OPTION 1":"Plaining",
        "OPTION 2":"Scheduling",
        "OPTION 3":"Timing",
        "OPTION 4":"Follow-up.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'timing' because it directly addresses the the activity of specifying when to start the job and when to\nend the job is known as: in the context of operations management principles."
    },
    {
        "SL NO":207,
        "QUESTIONS":"A network :",
        "OPTION 1":"Is a graphical\nrepresentation of all\nthe activities and\nevents.",
        "OPTION 2":"Is a graphical\nrepresentation of\nall the activities",
        "OPTION 3":"Is a graphical\nrepresentation of all\nthe events.",
        "OPTION 4":"All the above",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'is a graphical representation of all the activities and events.' because it directly addresses the a network : in the context of operations management principles."
    },
    {
        "SL NO":208,
        "QUESTIONS":"While evaluating existing or proposed service systems,\noperation manager",
        "OPTION 1":"Relate to potential\ncustomer\ndissatisfaction and\ncosts:",
        "OPTION 2":"Relate cost of\nparallel facilities\nwith single queue",
        "OPTION 3":"Relate cost of\nmultiple queues\nwith cost of serve",
        "OPTION 4":"Relate to potential\ncustomer\nsatisfaction and\nservice quality",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'relate to potential customer dissatisfaction and costs:' because it directly addresses the while evaluating existing or proposed service systems,\noperation manager in the context of operations management principles."
    },
    {
        "SL NO":209,
        "QUESTIONS":"Probalistic time is dividded into :",
        "OPTION 1":"3",
        "OPTION 2":"2",
        "OPTION 3":"4",
        "OPTION 4":"6",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is '3' because it directly addresses the probalistic time is dividded into : in the context of operations management principles."
    },
    {
        "SL NO":210,
        "QUESTIONS":"Gantt Chart is a principal tool used in",
        "OPTION 1":"Scheduling",
        "OPTION 2":"Loading",
        "OPTION 3":"Planning",
        "OPTION 4":"Routing.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'scheduling' because it directly addresses the gantt chart is a principal tool used in in the context of operations management principles."
    },
    {
        "SL NO":211,
        "QUESTIONS":"The event from where more than one activity starts",
        "OPTION 1":"Merge event",
        "OPTION 2":"Brust Event",
        "OPTION 3":"start event",
        "OPTION 4":"event nodes",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'brust event' because it directly addresses the the event from where more than one activity starts in the context of operations management principles."
    },
    {
        "SL NO":212,
        "QUESTIONS":"Free float means or is equal to",
        "OPTION 1":"Total float - Slack\ntime of the head\nevent",
        "OPTION 2":"Independent Float\n+Tail Slack",
        "OPTION 3":"Independent Float -Head Slack",
        "OPTION 4":"PERT",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'total float - slack time of the head event' because it directly addresses the free float means or is equal to in the context of operations management principles."
    },
    {
        "SL NO":213,
        "QUESTIONS":"The critical path analysis is an important tool in production\nplanning and_________",
        "OPTION 1":"Loading",
        "OPTION 2":"scheduling",
        "OPTION 3":"Routing.",
        "OPTION 4":"All the above",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'scheduling' because it directly addresses the the critical path analysis is an important tool in production\nplanning and_________ in the context of operations management principles."
    },
    {
        "SL NO":214,
        "QUESTIONS":"The method used in scheduling a project is:",
        "OPTION 1":"A schedule of break-down of orders",
        "OPTION 2":"Outline master\nprogramme",
        "OPTION 3":"PERT & CPM",
        "OPTION 4":"Schedule for large\nand integrated\nwork",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'pert & cpm' because it directly addresses the the method used in scheduling a project is: in the context of operations management principles."
    },
    {
        "SL NO":215,
        "QUESTIONS":"One of the important charts used in programme control is:",
        "OPTION 1":"Material chart",
        "OPTION 2":"Gantt chart",
        "OPTION 3":"Route chart",
        "OPTION 4":"Inspection chart",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'gantt chart' because it directly addresses the one of the important charts used in programme control is: in the context of operations management principles."
    },
    {
        "SL NO":216,
        "QUESTIONS":"Final stage of production planning, where production\nactivities are coordinated and\nprojected on a time scale is known as:",
        "OPTION 1":"Scheduling",
        "OPTION 2":"Loading",
        "OPTION 3":"Planning",
        "OPTION 4":"Routing",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'scheduling' because it directly addresses the final stage of production planning, where production\nactivities are coordinated and\nprojected on a time scale is known as: in the context of operations management principles."
    },
    {
        "SL NO":217,
        "QUESTIONS":"One of the principles of Scheduling is:",
        "OPTION 1":"Principle of optimal\nproduct design",
        "OPTION 2":"Principle of\nselection of best\nmaterial",
        "OPTION 3":"Principle of optimal\noperation sequence",
        "OPTION 4":"Principle of\noptimal cost.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'principle of optimal operation sequence' because it directly addresses the one of the principles of scheduling is: in the context of operations management principles."
    },
    {
        "SL NO":218,
        "QUESTIONS":"Issuing necessary orders, and taking necessary steps to ensure\nthat the time targets set in the schedules are effectively\nachieved is known as:",
        "OPTION 1":"Routing",
        "OPTION 2":"Dispatching",
        "OPTION 3":"Scheduling",
        "OPTION 4":"Inspection.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is ') dispatching' because it directly addresses the issuing necessary orders, and taking necessary steps to ensure\nthat the time targets set in the schedules are effectively\nachieved is known as: in the context of operations management principles."
    },
    {
        "SL NO":219,
        "QUESTIONS":"Which one of the following statements is NOT correct?",
        "OPTION 1":"LFT is calculated\nfrom the LFT of the\nhead event.",
        "OPTION 2":"Slack can be\ncalculated by\nadding EFT and\nLFT of any job.",
        "OPTION 3":"EFT is the sum of\nthe EST and the\ntime of duration for\nany event",
        "OPTION 4":"The Total Project\ntime is the shortest\npossible time\nrequired in\ncompleting the\nproject.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'slack can be calculated by adding eft and lft of any job.' because it directly addresses the which one of the following statements is not correct? in the context of operations management principles."
    },
    {
        "SL NO":220,
        "QUESTIONS":"Which one of the following establishes time sequence of\noperations?",
        "OPTION 1":"Routing",
        "OPTION 2":"Sequencing",
        "OPTION 3":"Scheduling",
        "OPTION 4":"Dispatching",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'scheduling' because it directly addresses the which one of the following establishes time sequence of\noperations? in the context of operations management principles."
    },
    {
        "SL NO":221,
        "QUESTIONS":"Issuing necessary orders, and taking necessary steps to ensure\nthat the time targets set in the schedules are effectively\nachieved is known as:",
        "OPTION 1":"Routing",
        "OPTION 2":"Dispatching",
        "OPTION 3":"Scheduling",
        "OPTION 4":"Inspection.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'dispatching' because it directly addresses the issuing necessary orders, and taking necessary steps to ensure\nthat the time targets set in the schedules are effectively\nachieved is known as: in the context of operations management principles."
    },
    {
        "SL NO":222,
        "QUESTIONS":"Which one of the following is the benefit of keeping standby\nmachines?",
        "OPTION 1":"Utilisation of\nAdditional space",
        "OPTION 2":"Appropriate\ninvestment of\nadditional capital",
        "OPTION 3":"Availability of\nAdditional\nDepreciation",
        "OPTION 4":"Protection against\na complete\nshutdown",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'protection against a complete shutdown' because it directly addresses the which one of the following is the benefit of keeping standby\nmachines? in the context of operations management principles."
    },
    {
        "SL NO":223,
        "QUESTIONS":"Preventive maintenance is useful in reducing",
        "OPTION 1":"Inspection Cost",
        "OPTION 2":"Shutdown Cost",
        "OPTION 3":"Cost of pre- mature\nreplacement",
        "OPTION 4":"Set-up cost of\nmachine",
        "ANSWER CODE":2,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":224,
        "QUESTIONS":"Two important functions that are to be done by Production\ndepartment are:",
        "OPTION 1":"Forecasting",
        "OPTION 2":"Costing",
        "OPTION 3":"Scheduling and\nloading",
        "OPTION 4":"Inspecting.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'scheduling and loading' because it directly addresses the two important functions that are to be done by production\ndepartment are: in the context of operations management principles."
    },
    {
        "SL NO":225,
        "QUESTIONS":"When work centers are used in optimal sequence to do the\njobs, we can:",
        "OPTION 1":"Minimise the set up\ntime",
        "OPTION 2":"Minimse operation\ntime",
        "OPTION 3":"Minimise the break\ndown of machines",
        "OPTION 4":"Minimise the\nutility of facility.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'minimise the set up time' because it directly addresses the when work centers are used in optimal sequence to do the\njobs, we can: in the context of operations management principles."
    },
    {
        "SL NO":226,
        "QUESTIONS":"Preventive maintenance policy is justified only when",
        "OPTION 1":"The average\ndowntime and its\ncost is equal to the\naverage time taken\nto carry out\nbreakdown repairs",
        "OPTION 2":"The average\ndowntime and its\ncost is greater than\nthe average time\ntaken to carry out\nbreakdown repairs",
        "OPTION 3":"The average\ndowntime and its\ncost is less than the\naverage time taken\nto carry out\nbreakdown repairs",
        "OPTION 4":"The average\ndowntime t is less\nthan the average\ntime taken to carry\nout breakdown\nrepairs",
        "ANSWER CODE":2,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":227,
        "QUESTIONS":"Which one of the following is not correct?",
        "OPTION 1":"Preventive\nmaintenance\nreduces breakdowns\nand downtime",
        "OPTION 2":"Preventive\nmaintenance\nincreases number\nof large scale\nrepairs",
        "OPTION 3":"Preventive\nmaintenance Lower\nunit cost of the\nproduct\nmanufactured,",
        "OPTION 4":"Preventive\nmaintenance\nimproves industrial\nrelations",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'preventive maintenance increases number of large scale repairs' because it directly addresses the which one of the following is not correct? in the context of operations management principles."
    },
    {
        "SL NO":228,
        "QUESTIONS":"Production department or maintenance department depending\non the size of the plant generally takes up",
        "OPTION 1":"preventive\nmaintenance work.",
        "OPTION 2":"capacity planning",
        "OPTION 3":"project\nmaintenance",
        "OPTION 4":"all of them",
        "ANSWER CODE":1,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":229,
        "QUESTIONS":"The main problem in maintenance analysis is to________ the\noverall cost of maintenance without sacrificing the objectives.",
        "OPTION 1":"Stable",
        "OPTION 2":"plan",
        "OPTION 3":"minimise",
        "OPTION 4":"replace",
        "ANSWER CODE":3,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":230,
        "QUESTIONS":"In some cases the__________ and inconvenience due to\nbreakdown of equipment is so high that standby equipment is\nkept.",
        "OPTION 1":"cost",
        "OPTION 2":"loss",
        "OPTION 3":"time",
        "OPTION 4":"intervals",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'loss' because it directly addresses the in some cases the__________ and inconvenience due to\nbreakdown of equipment is so high that standby equipment is\nkept. in the context of operations management principles."
    },
    {
        "SL NO":231,
        "QUESTIONS":"____________ while the equipment is running or during pre-planned shut-downs.",
        "OPTION 1":"Routine\nmaintenance",
        "OPTION 2":"preventive\nmaintenance",
        "OPTION 3":"replacement",
        "OPTION 4":"break down\nmaintenance",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'routine maintenance' because it directly addresses the ____________ while the equipment is running or during pre-planned shut-downs. in the context of operations management principles."
    },
    {
        "SL NO":232,
        "QUESTIONS":"The organizational structure should be",
        "OPTION 1":"systematic",
        "OPTION 2":"well maintained",
        "OPTION 3":"flexible.",
        "OPTION 4":"all of them",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'systematic' because it directly addresses the the organizational structure should be in the context of operations management principles."
    },
    {
        "SL NO":233,
        "QUESTIONS":"Which one of the following is NOT the advantage of\nPreventive Maintenance?",
        "OPTION 1":"Better product\nquality",
        "OPTION 2":"Greater safety to\nworkers",
        "OPTION 3":"Increased\nbreakdowns and\ndowntime",
        "OPTION 4":"Fewer large-scale\nrepairs",
        "ANSWER CODE":3,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":234,
        "QUESTIONS":"Identify which one of the following is NOT the objective of\nthe maintenance:",
        "OPTION 1":"To keep all\nproduction facilities\nand allied facilities\nin an optimum\nworking\ncondition.",
        "OPTION 2":"To ensure\nspecified accuracy\nto products and\ntime schedule of\ndelivery to\ncustomers",
        "OPTION 3":"To keep the down\ntime of the machine\nat the maximum.",
        "OPTION 4":") To keep the\nproduction cycle\nwithin the\nstipulated range.",
        "ANSWER CODE":3,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":235,
        "QUESTIONS":". One of the objectives of maintenance is:",
        "OPTION 1":"to prevent\nobsolescence",
        "OPTION 2":"to ensure spare\nparts management.",
        "OPTION 3":"to satisfy\ncustomers.",
        "OPTION 4":"to extend the\nuseful life of Plant\n& Machinery\nwithout sacrificing\nthe level of\nperformance",
        "ANSWER CODE":4,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":236,
        "QUESTIONS":"The monitoring, evaluating and disseminating of information\nfrom the external and internal environments to key people\nwithin the organisation is called",
        "OPTION 1":"Strategy\nFormulation",
        "OPTION 2":"Evaluation and\ncontrol",
        "OPTION 3":"Strategy\nImplementation",
        "OPTION 4":"Environmental\nscanning",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'environmental scanning' because it directly addresses the the monitoring, evaluating and disseminating of information\nfrom the external and internal environments to key people\nwithin the organisation is called in the context of operations management principles."
    },
    {
        "SL NO":237,
        "QUESTIONS":"The ____of a company state how managers and employees\nshould conduct themselves.",
        "OPTION 1":"values",
        "OPTION 2":"goals",
        "OPTION 3":"objectives",
        "OPTION 4":"vison",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'values' because it directly addresses the the ____of a company state how managers and employees\nshould conduct themselves. in the context of operations management principles."
    },
    {
        "SL NO":238,
        "QUESTIONS":"____________ are the day-to-day way in which an\norganisation operates and can be seen by people both inside\nand outside the organisation.",
        "OPTION 1":"Performances",
        "OPTION 2":"Targets",
        "OPTION 3":"Behaviours",
        "OPTION 4":"Values",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'behaviours' because it directly addresses the ____________ are the day-to-day way in which an\norganisation operates and can be seen by people both inside\nand outside the organisation. in the context of operations management principles."
    },
    {
        "SL NO":239,
        "QUESTIONS":"Which among the following provide the standards for\nperformance appraisal?",
        "OPTION 1":"Mission",
        "OPTION 2":"Vision",
        "OPTION 3":"Values",
        "OPTION 4":"Objectives",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'objectives' because it directly addresses the which among the following provide the standards for\nperformance appraisal? in the context of operations management principles."
    },
    {
        "SL NO":240,
        "QUESTIONS":"___________ is concerned with complexity arising out of\nambiguous and non-routine situations with organisation wide\nrather than operation-specific implications.",
        "OPTION 1":"Operational\nmanagement",
        "OPTION 2":"Business level\nstrategy",
        "OPTION 3":"Strategic\nManagement",
        "OPTION 4":"Functional level\nstrategy",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'strategic management' because it directly addresses the ___________ is concerned with complexity arising out of\nambiguous and non-routine situations with organisation wide\nrather than operation-specific implications. in the context of operations management principles."
    },
    {
        "SL NO":241,
        "QUESTIONS":"____________ refer to the job-specific goals of each\nindividual employee.",
        "OPTION 1":"Balanced Score\nCard",
        "OPTION 2":"Performance\nobjectives",
        "OPTION 3":"Personal objectives",
        "OPTION 4":"Organisational\ngenomics",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'personal objectives' because it directly addresses the ____________ refer to the job-specific goals of each\nindividual employee. in the context of operations management principles."
    },
    {
        "SL NO":242,
        "QUESTIONS":"The balanced score card is a approach to performance\nmanagement",
        "OPTION 1":"top-down",
        "OPTION 2":"bottom up",
        "OPTION 3":"indirect",
        "OPTION 4":"direct",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'top-down' because it directly addresses the the balanced score card is a approach to performance\nmanagement in the context of operations management principles."
    },
    {
        "SL NO":243,
        "QUESTIONS":"This_____ provides the broad \u2018data\u2019 from which to identify\nkey drivers of change.",
        "OPTION 1":"SWOT analysis",
        "OPTION 2":"BCG matrix",
        "OPTION 3":"PESTEL analysis",
        "OPTION 4":"Critical Success\nFactors",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'pestel analysis' because it directly addresses the this_____ provides the broad \u2018data\u2019 from which to identify\nkey drivers of change. in the context of operations management principles."
    },
    {
        "SL NO":244,
        "QUESTIONS":"Environment is__________ .",
        "OPTION 1":"complex",
        "OPTION 2":"dynamic",
        "OPTION 3":"Multi-faceted",
        "OPTION 4":"All of the above",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'all of the above' because it directly addresses the environment is__________ . in the context of operations management principles."
    },
    {
        "SL NO":245,
        "QUESTIONS":"________are the growth rate of the economy, interest rates,\ncurrency exchange rates, and inflation (or deflation) rates.",
        "OPTION 1":"Macro-economic\nforces",
        "OPTION 2":"Demographic\nforces",
        "OPTION 3":"Technological\nforces",
        "OPTION 4":"Political forces",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'macro-economic forces' because it directly addresses the ________are the growth rate of the economy, interest rates,\ncurrency exchange rates, and inflation (or deflation) rates. in the context of operations management principles."
    },
    {
        "SL NO":246,
        "QUESTIONS":"_________are outcomes of changes in the characteristics of a\npopulation",
        "OPTION 1":"Macro-economic\nforces",
        "OPTION 2":"Demographic\nforces",
        "OPTION 3":"Technological\nforces",
        "OPTION 4":"Political forces",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'demographic forces' because it directly addresses the _________are outcomes of changes in the characteristics of a\npopulation in the context of operations management principles."
    },
    {
        "SL NO":247,
        "QUESTIONS":"What describes the categories of activities within and around\nan organisation, which together create a product or service?",
        "OPTION 1":"SWOT analysis",
        "OPTION 2":"BCG framework",
        "OPTION 3":"Value Chain",
        "OPTION 4":"Brain storming",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'value chain' because it directly addresses the what describes the categories of activities within and around\nan organisation, which together create a product or service? in the context of operations management principles."
    },
    {
        "SL NO":248,
        "QUESTIONS":"_________transform these inputs into the final product or\nservice.",
        "OPTION 1":"Operations",
        "OPTION 2":"Inbound logistics",
        "OPTION 3":"Outbound logistics",
        "OPTION 4":"Service",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'operations' because it directly addresses the _________transform these inputs into the final product or\nservice. in the context of operations management principles."
    },
    {
        "SL NO":249,
        "QUESTIONS":"____________includes those activities that enhance or\nmaintain the value of product or service, such as installation,\nrepair, training and spares.",
        "OPTION 1":"Operations",
        "OPTION 2":"Inbound logistics",
        "OPTION 3":"Outbound logistics",
        "OPTION 4":"Service",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'service' because it directly addresses the ____________includes those activities that enhance or\nmaintain the value of product or service, such as installation,\nrepair, training and spares. in the context of operations management principles."
    },
    {
        "SL NO":250,
        "QUESTIONS":"____________are companies that are not currently competing\nin an industry, but have the capability to do so if they choose.",
        "OPTION 1":"Established\ncompanies",
        "OPTION 2":"Potential\ncompetitors",
        "OPTION 3":"Rivals",
        "OPTION 4":"Competitors",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'potential competitors' because it directly addresses the ____________are companies that are not currently competing\nin an industry, but have the capability to do so if they choose. in the context of operations management principles."
    },
    {
        "SL NO":251,
        "QUESTIONS":"Absolute cost advantages arise from",
        "OPTION 1":"superior production\noperations and\nprocesses",
        "OPTION 2":"control of\nparticular inputs\nrequired for\nproduction",
        "OPTION 3":"access to cheaper\nfunds",
        "OPTION 4":"all of the above",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'all of the above' because it directly addresses the absolute cost advantages arise from in the context of operations management principles."
    },
    {
        "SL NO":252,
        "QUESTIONS":"A______________is a combination of structures which could\ntake the form of product and geographical divisions or\nfunctional and divisional structures operating in tandem.",
        "OPTION 1":"Functional structure",
        "OPTION 2":"Matrix Structure",
        "OPTION 3":"Project based\nstructure",
        "OPTION 4":"Transnational\nstructure",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'matrix structure' because it directly addresses the a______________is a combination of structures which could\ntake the form of product and geographical divisions or\nfunctional and divisional structures operating in tandem. in the context of operations management principles."
    },
    {
        "SL NO":253,
        "QUESTIONS":"A_________combines the local responsiveness of the\ninternational subsidiary with the coordination advantages\nfound in global product companies.",
        "OPTION 1":"Functional structure",
        "OPTION 2":"Matrix Structure",
        "OPTION 3":"Project based\nstructure",
        "OPTION 4":"Transnational\nstructure",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'transnational structure' because it directly addresses the a_________combines the local responsiveness of the\ninternational subsidiary with the coordination advantages\nfound in global product companies. in the context of operations management principles."
    },
    {
        "SL NO":254,
        "QUESTIONS":"Which among the following is true?",
        "OPTION 1":"BPR has resulted in\nmajor gains in\nefficiency.",
        "OPTION 2":"BPR has resulted\nin major gains in\nspeed",
        "OPTION 3":"BPR has resulted in\nmajor gains in\nquality.",
        "OPTION 4":"BPR has resulted\nin major gains in\nefficiency, quality\nand speed.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'bpr has resulted in major gains in efficiency, quality and speed.' because it directly addresses the which among the following is true? in the context of operations management principles."
    },
    {
        "SL NO":255,
        "QUESTIONS":"A____________ is one where teams are created, undertake\nthe work and are then dissolved.",
        "OPTION 1":"Functional structure",
        "OPTION 2":"Matrix Structure",
        "OPTION 3":"Project based\nstructure",
        "OPTION 4":"Transnational\nstructure",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'project based structure' because it directly addresses the a____________ is one where teams are created, undertake\nthe work and are then dissolved. in the context of operations management principles."
    },
    {
        "SL NO":256,
        "QUESTIONS":"_______specifies what is to be accomplished by focusing on\nthe end result.",
        "OPTION 1":"Output control",
        "OPTION 2":"Behaviour control",
        "OPTION 3":"Premise control",
        "OPTION 4":"Implementation\ncontrol",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'output control' because it directly addresses the _______specifies what is to be accomplished by focusing on\nthe end result. in the context of operations management principles."
    },
    {
        "SL NO":257,
        "QUESTIONS":"____________is control achieved through the establishment\nof a comprehensive system of rules and procedures to direct\nthe actions of divisions, functions, and individuals.",
        "OPTION 1":"Output control",
        "OPTION 2":"Behaviour control",
        "OPTION 3":"Premise control",
        "OPTION 4":"Implementation\ncontrol",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'behaviour control' because it directly addresses the ____________is control achieved through the establishment\nof a comprehensive system of rules and procedures to direct\nthe actions of divisions, functions, and individuals. in the context of operations management principles."
    },
    {
        "SL NO":258,
        "QUESTIONS":"_______checks systemically and continuously whether the\nassumptions on which the strategy is based are still valid.",
        "OPTION 1":"Output control",
        "OPTION 2":"Behaviour control",
        "OPTION 3":"Premise control",
        "OPTION 4":"Implementation\ncontrol",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'premise control' because it directly addresses the _______checks systemically and continuously whether the\nassumptions on which the strategy is based are still valid. in the context of operations management principles."
    },
    {
        "SL NO":259,
        "QUESTIONS":"A________is based on the primary activities that have to be\nundertaken by an organisation",
        "OPTION 1":"Functional structure",
        "OPTION 2":"Matrix Structure",
        "OPTION 3":"Project based\nstructure",
        "OPTION 4":"Transnational\nstructure",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'functional structure' because it directly addresses the a________is based on the primary activities that have to be\nundertaken by an organisation in the context of operations management principles."
    },
    {
        "SL NO":260,
        "QUESTIONS":"This test is a catch-all category, indicating that the structure\nmust fit legal, stakeholder, trade union or similar constraints.",
        "OPTION 1":"The Feasibility Test",
        "OPTION 2":"The People Test",
        "OPTION 3":"The Parenting\nAdvantage Test",
        "OPTION 4":"The Specialised\nCultures Test",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'the feasibility test' because it directly addresses the this test is a catch-all category, indicating that the structure\nmust fit legal, stakeholder, trade union or similar constraints. in the context of operations management principles."
    },
    {
        "SL NO":261,
        "QUESTIONS":"In a fast-moving world, an important test to determine the\nextent to which a design will allow for change in the future is\ncalled?",
        "OPTION 1":"The Feasibility Test",
        "OPTION 2":"The Flexibility\nTest",
        "OPTION 3":"The Parenting\nAdvantage Test",
        "OPTION 4":"The Specialised\nCultures Test",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'the flexibility test' because it directly addresses the in a fast-moving world, an important test to determine the\nextent to which a design will allow for change in the future is\ncalled? in the context of operations management principles."
    },
    {
        "SL NO":262,
        "QUESTIONS":"Digital transformation drives change in",
        "OPTION 1":"customer experience",
        "OPTION 2":"operational\nprocesses",
        "OPTION 3":"business models",
        "OPTION 4":"all of the above",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'all of the above' because it directly addresses the digital transformation drives change in in the context of operations management principles."
    },
    {
        "SL NO":263,
        "QUESTIONS":"The process of digital transformation requires coordination\nacross the entire organization, and involves business culture\nchanges.",
        "OPTION 1":"digital strategy",
        "OPTION 2":"digitisation",
        "OPTION 3":"digital\ntransformation",
        "OPTION 4":"data aggregation",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'digital transformation' because it directly addresses the the process of digital transformation requires coordination\nacross the entire organization, and involves business culture\nchanges. in the context of operations management principles."
    },
    {
        "SL NO":264,
        "QUESTIONS":"Categorising and organising the digitised data and making it\nready for application of further processes is\ncalled__________ .",
        "OPTION 1":"Data aggregation",
        "OPTION 2":"Data management",
        "OPTION 3":"Workflow\nautomation",
        "OPTION 4":"Process component",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'data management' because it directly addresses the categorising and organising the digitised data and making it\nready for application of further processes is\ncalled__________ . in the context of operations management principles."
    },
    {
        "SL NO":265,
        "QUESTIONS":"Which among the following is not a characteristic of Big\nData?",
        "OPTION 1":"Variety",
        "OPTION 2":"Volume",
        "OPTION 3":"Velocity",
        "OPTION 4":"Invariability",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'invariability' because it directly addresses the which among the following is not a characteristic of big\ndata? in the context of operations management principles."
    },
    {
        "SL NO":266,
        "QUESTIONS":"Data that can be stored, accessed and processed in the form\nof fixed format is called .",
        "OPTION 1":"unstructured data",
        "OPTION 2":"semi-structured\ndata",
        "OPTION 3":"structured data",
        "OPTION 4":"flexible data",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'structured data' because it directly addresses the data that can be stored, accessed and processed in the form\nof fixed format is called . in the context of operations management principles."
    },
    {
        "SL NO":267,
        "QUESTIONS":"Which among the following is not a component of a block\nchain?",
        "OPTION 1":"Distributed ledger\ntechnology",
        "OPTION 2":"Immutable record",
        "OPTION 3":"Smart contracts",
        "OPTION 4":"Increased threat",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'increased threat' because it directly addresses the which among the following is not a component of a block\nchain? in the context of operations management principles."
    },
    {
        "SL NO":268,
        "QUESTIONS":"Which among the following alternatives is not suited for\nRobotic process automation tools?",
        "OPTION 1":"Repeatable",
        "OPTION 2":"Predictable\ninteractions with\nIT applications",
        "OPTION 3":"Routine",
        "OPTION 4":"Unpredictable\nevents",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'unpredictable events' because it directly addresses the which among the following alternatives is not suited for\nrobotic process automation tools? in the context of operations management principles."
    },
    {
        "SL NO":269,
        "QUESTIONS":"_____________is similar to referral programs.",
        "OPTION 1":"Influencer\nMarketing",
        "OPTION 2":"Affiliate\nmarketing",
        "OPTION 3":"Social Media\nMarketing\nPlatforms",
        "OPTION 4":"Content marketing",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'affiliate marketing' because it directly addresses the _____________is similar to referral programs. in the context of operations management principles."
    },
    {
        "SL NO":270,
        "QUESTIONS":"____________is a form of paid advertising that allows\nmarketing teams to essentially purchase traffic to their\nwebsite.",
        "OPTION 1":"Influencer\nMarketing",
        "OPTION 2":"Affiliate\nmarketing",
        "OPTION 3":"Pay-per-click",
        "OPTION 4":"Content marketing",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'pay-per-click' because it directly addresses the ____________is a form of paid advertising that allows\nmarketing teams to essentially purchase traffic to their\nwebsite. in the context of operations management principles."
    },
    {
        "SL NO":271,
        "QUESTIONS":"Forecasting the weather is an example of",
        "OPTION 1":"Narrow AI",
        "OPTION 2":"General AI\/human-level",
        "OPTION 3":"Super AI",
        "OPTION 4":"Deep- learning",
        "ANSWER CODE":1,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":272,
        "QUESTIONS":"JIT stands for:",
        "OPTION 1":"Just in purchase",
        "OPTION 2":"Just in production",
        "OPTION 3":"Just in time use of\nmaterial",
        "OPTION 4":"Just in time order the\nmaterial",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'just in production' because it directly addresses the jit stands for: in the context of operations management principles."
    },
    {
        "SL NO":273,
        "QUESTIONS":"Example of production by disintegration is:",
        "OPTION 1":"Crude oil",
        "OPTION 2":"Mineral water",
        "OPTION 3":"Automobile",
        "OPTION 4":"Locomotive",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'crude oil' because it directly addresses the example of production by disintegration is: in the context of operations management principles."
    },
    {
        "SL NO":274,
        "QUESTIONS":"The act of assessing the future and make the provision for the act is\nknown as:",
        "OPTION 1":"Forcasting",
        "OPTION 2":"Assessment",
        "OPTION 3":"Scheduling",
        "OPTION 4":"Planning",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'forcasting' because it directly addresses the the act of assessing the future and make the provision for the act is\nknown as: in the context of operations management principles."
    },
    {
        "SL NO":275,
        "QUESTIONS":"The quatities for which the planner has to prepare production plan\nare known as",
        "OPTION 1":"Optimal quantity of\nproducts",
        "OPTION 2":"planning quantity\nstandards",
        "OPTION 3":"Quantity planning",
        "OPTION 4":"Material planning",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'planning quantity standards' because it directly addresses the the quatities for which the planner has to prepare production plan\nare known as in the context of operations management principles."
    },
    {
        "SL NO":276,
        "QUESTIONS":"PERT is __________ oriented technique:",
        "OPTION 1":"Event oriented\ntechnique",
        "OPTION 2":"Activity oriented\ntechnique",
        "OPTION 3":"Both (1) & (2)",
        "OPTION 4":"None of the above",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'event oriented technique' because it directly addresses the pert is __________ oriented technique: in the context of operations management principles."
    },
    {
        "SL NO":277,
        "QUESTIONS":"Operations Management is primarily deals with:",
        "OPTION 1":"Recruitment and\ntraining of employees",
        "OPTION 2":"Conversion of\ninputs into outputs\nusing physical\nresources",
        "OPTION 3":"Financial planning\nand budgeting",
        "OPTION 4":"Market research and\npromotion",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'conversion of inputs into outputs using physical resources' because it directly addresses the operations management is primarily deals with: in the context of operations management principles."
    },
    {
        "SL NO":278,
        "QUESTIONS":"What is the main objectives of Operations Management include:",
        "OPTION 1":"Effectiveness,\nefficiency, and\nadaptability",
        "OPTION 2":"Profitability,\nliquidity, and\nsolvency",
        "OPTION 3":"Motivation,\nleadership, and\nteamwork",
        "OPTION 4":"Planning, staffing,\nand directing",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'effectiveness, efficiency, and adaptability' because it directly addresses the what is the main objectives of operations management include: in the context of operations management principles."
    },
    {
        "SL NO":279,
        "QUESTIONS":"Under Production and Operations Management which of the\nfollowing is not an activity ?",
        "OPTION 1":"Product Design",
        "OPTION 2":"Financial\nAccounting",
        "OPTION 3":"Quality Control",
        "OPTION 4":"Maintenance\nManagement",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'financial accounting' because it directly addresses the under production and operations management which of the\nfollowing is not an activity ? in the context of operations management principles."
    },
    {
        "SL NO":280,
        "QUESTIONS":"The term \u201cDisappearance of Smokestacks\u201d refers to:",
        "OPTION 1":"Decline of heavy\nindustries",
        "OPTION 2":"Transformation of\nfactories into\nenvironmentally\nfriendly, knowledge-based systems",
        "OPTION 3":"Ban on factory\npollution",
        "OPTION 4":"Movement of\nfactories to rural\nareas",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'transformation of factories into environmentally friendly, knowledge-based systems' because it directly addresses the the term \u201cdisappearance of smokestacks\u201d refers to: in the context of operations management principles."
    },
    {
        "SL NO":281,
        "QUESTIONS":"The idea that \u201cSmall is Beautiful\u201d was given by:",
        "OPTION 1":"Peter Drucker",
        "OPTION 2":"E.F. Schumacher",
        "OPTION 3":"Henry Fayol",
        "OPTION 4":"Elton Mayo",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'e.f. schumacher' because it directly addresses the the idea that \u201csmall is beautiful\u201d was given by: in the context of operations management principles."
    },
    {
        "SL NO":282,
        "QUESTIONS":"The utilisation rate helps management to determine:",
        "OPTION 1":"Product quality",
        "OPTION 2":"Need for adding or\nreducing capacity",
        "OPTION 3":"Labour efficiency",
        "OPTION 4":"Machine downtime",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'need for adding or reducing capacity' because it directly addresses the the utilisation rate helps management to determine: in the context of operations management principles."
    },
    {
        "SL NO":283,
        "QUESTIONS":"Facility Layout is also known as:",
        "OPTION 1":"Plant Location",
        "OPTION 2":"Plant Layout",
        "OPTION 3":"Facility Design",
        "OPTION 4":"Work Centre\nManagement",
        "ANSWER CODE":2,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":284,
        "QUESTIONS":"Process Layout is also known as:",
        "OPTION 1":"Functional Layout",
        "OPTION 2":"Product Layout",
        "OPTION 3":"Fixed Position Layout",
        "OPTION 4":"Combination Layout",
        "ANSWER CODE":1,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":285,
        "QUESTIONS":"The main advantage of process layout is:",
        "OPTION 1":"High volume\nproduction",
        "OPTION 2":"Low material\nhandling cost",
        "OPTION 3":"Flexibility in\noperation",
        "OPTION 4":"High specialization\nfor one product",
        "ANSWER CODE":3,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":286,
        "QUESTIONS":"Material Requirement Planning (MRP) is mainly used for planning\nthe production of:",
        "OPTION 1":"Services",
        "OPTION 2":"Finished goods only",
        "OPTION 3":"Raw materials only",
        "OPTION 4":"Assembled products",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'assembled products' because it directly addresses the material requirement planning (mrp) is mainly used for planning\nthe production of: in the context of operations management principles."
    },
    {
        "SL NO":287,
        "QUESTIONS":"The main purpose of MRP is to:",
        "OPTION 1":"Minimize labour cost",
        "OPTION 2":"Ensure that\nmaterials are\navailable when\nneeded",
        "OPTION 3":"Increase advertising\nefficiency",
        "OPTION 4":"Maintain maximum\nstock at all times",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'ensure that materials are available when needed' because it directly addresses the the main purpose of mrp is to: in the context of operations management principles."
    },
    {
        "SL NO":288,
        "QUESTIONS":"Which among the following is an advantage of an efficient\nproduction and inventory management system?",
        "OPTION 1":"Increased idle time\nand higher inventory\nlevels",
        "OPTION 2":"Reduced inventory,\nreduced idle time,\nand reduced setup\ntime",
        "OPTION 3":"Inability to adjust the\nmaster production\nschedule",
        "OPTION 4":"Higher sales prices\nand slower response\nto market demands",
        "ANSWER CODE":2,
        "EXPLANATION":"Inventory management balances the cost of holding goods against the risk of stockouts."
    },
    {
        "SL NO":289,
        "QUESTIONS":"The Economic Lot Size or Economic Order Quantity or Economic\nBatch Quantity is defined as:",
        "OPTION 1":"The quantity of\noutput produced in\none batch that\nmaximizes production\nrate",
        "OPTION 2":"The maximum\nquantity that can be\nstored in the\nwarehouse",
        "OPTION 3":"The quantity of\noutput produced in\none batch that is most\neconomical, resulting\nin the lowest average\ncost of production",
        "OPTION 4":"The quantity of\noutput produced to\nmeet immediate\ndemand only",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'the quantity of output produced in one batch that is most economical, resulting in the lowest average cost of production' because it directly addresses the the economic lot size or economic order quantity or economic\nbatch quantity is defined as: in the context of operations management principles."
    },
    {
        "SL NO":290,
        "QUESTIONS":"M\/s Kobo Bearings Ltd., is committed to supply 24,000 bearings\nper annum to M\/s Deluxe Fans on a steady\ndaily basis. It is estimated that it costs 10 paisa as inventory holding\ncost per bearing per month and that the setup\ncost per run of bearing manufacture is \u20b9324.What is the optimum\nrun size for bearing manufacture?",
        "OPTION 1":"3600",
        "OPTION 2":"2400",
        "OPTION 3":"2600",
        "OPTION 4":"3700",
        "ANSWER CODE":1,
        "EXPLANATION":"Inventory management balances the cost of holding goods against the risk of stockouts."
    },
    {
        "SL NO":291,
        "QUESTIONS":"Find the economic order quantity and the reorder point, given\nAnnual demand (D) = 1000 units\nAverage daily demand (d) = 1000\/365\nOrdering Cost (S) = \u20b95 per order\nHolding cost(H) =\u20b91.25 per unit per year. Lead time (L) = 5 days\nCost per unit (C) = \u20b9 12.50\nWhat quantity should be ordered?",
        "OPTION 1":"3612",
        "OPTION 2":"2812",
        "OPTION 3":"2612",
        "OPTION 4":"4888",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is '2612' because it directly addresses the find the economic order quantity and the reorder point, given\nannual demand (d) = 1000 units\naverage daily demand (d) = 1000\/365\nordering cost (s) = \u20b95 per order\nholding cost(h) =\u20b91.25 per unit per year. lead time (l) = 5 days\ncost per unit (c) = \u20b9 12.50\nwhat quantity should be ordered? in the context of operations management principles."
    },
    {
        "SL NO":292,
        "QUESTIONS":"A good product design helps an organization to:",
        "OPTION 1":"Reduce product\nfeatures",
        "OPTION 2":"Increase production\nlead time",
        "OPTION 3":"Stay ahead of\ncompetition and\nsustain in a VUCA\nworld",
        "OPTION 4":"Avoid product\ndiversification",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'stay ahead of competition and sustain in a vuca world' because it directly addresses the a good product design helps an organization to: in the context of operations management principles."
    },
    {
        "SL NO":293,
        "QUESTIONS":"The Growth phase of the Product Life Cycle is characterized by:",
        "OPTION 1":"Decline in market\nshare and profits",
        "OPTION 2":"Rapid increase in\nsales and market\nexpansion",
        "OPTION 3":"Withdrawal of the\nproduct from the\nmarket",
        "OPTION 4":"Lack of promotional\nactivity",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'rapid increase in sales and market expansion' because it directly addresses the the growth phase of the product life cycle is characterized by: in the context of operations management principles."
    },
    {
        "SL NO":294,
        "QUESTIONS":"The Decline phase of the Product Life Cycle is characterized by:",
        "OPTION 1":"Increasing sales and\nmarket share",
        "OPTION 2":"Higher profitability\nand expansion",
        "OPTION 3":"Falling sales and\nnarrowing profit\nmargins",
        "OPTION 4":"Introduction of new\nproduct variants",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'falling sales and narrowing profit margins' because it directly addresses the the decline phase of the product life cycle is characterized by: in the context of operations management principles."
    },
    {
        "SL NO":295,
        "QUESTIONS":"Which among the following order represents the correct stages of\nthe Product Life Cycle ?",
        "OPTION 1":"Growth \u2192\nIntroduction \u2192\nMaturity \u2192 Decline",
        "OPTION 2":"Introduction \u2192\nGrowth \u2192 Maturity\n\u2192 Decline",
        "OPTION 3":"Maturity \u2192 Growth\n\u2192 Introduction \u2192\nDecline",
        "OPTION 4":"Introduction \u2192\nMaturity \u2192 Growth\n\u2192 Decline",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'introduction \u2192 growth \u2192 maturity \u2192 decline' because it directly addresses the which among the following order represents the correct stages of\nthe product life cycle ? in the context of operations management principles."
    },
    {
        "SL NO":296,
        "QUESTIONS":"The main objective of an assignment problem is to:",
        "OPTION 1":"Increase production\nregardless of cost",
        "OPTION 2":"Assign workers\nrandomly to jobs",
        "OPTION 3":"Maximize the number\nof workers employed",
        "OPTION 4":"Minimize total cost\nor time of\nperforming all jobs",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'minimize total cost or time of performing all jobs' because it directly addresses the the main objective of an assignment problem is to: in the context of operations management principles."
    },
    {
        "SL NO":297,
        "QUESTIONS":"Which of the following is not a method for solving an assignment\nproblem?",
        "OPTION 1":"Complete\nEnumeration Method",
        "OPTION 2":"Simplex Method",
        "OPTION 3":"Regression Method",
        "OPTION 4":"Transportation\nMethod",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'regression method' because it directly addresses the which of the following is not a method for solving an assignment\nproblem? in the context of operations management principles."
    },
    {
        "SL NO":298,
        "QUESTIONS":"Wanda\u2019s Car Wash & dry is an automatic, five-minute operation\nwith a single bay. On a typical Saturday morning,cars arrive at a\nmean rate of eight per hour, with arrivals tending to follow a\nPoisson distribution. Find the average number of cars in line.",
        "OPTION 1":"0.667 Car",
        "OPTION 2":"0.167 Car",
        "OPTION 3":"10 minutes",
        "OPTION 4":"20 minutes",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is '0.667 car' because it directly addresses the wanda\u2019s car wash & dry is an automatic, five-minute operation\nwith a single bay. on a typical saturday morning,cars arrive at a\nmean rate of eight per hour, with arrivals tending to follow a\npoisson distribution. find the average number of cars in line. in the context of operations management principles."
    },
    {
        "SL NO":299,
        "QUESTIONS":"Monte Carlo simulation is mainly used in for:",
        "OPTION 1":"Static systems only",
        "OPTION 2":"Systems without\nuncertainty",
        "OPTION 3":"Random or stochastic\nsystems",
        "OPTION 4":"Deterministic\nsystems",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'random or stochastic systems' because it directly addresses the monte carlo simulation is mainly used in for: in the context of operations management principles."
    },
    {
        "SL NO":300,
        "QUESTIONS":"The important requirements of Monte Carlo simulation are:",
        "OPTION 1":"Hardware\noptimization",
        "OPTION 2":"Real-life\nexperimentation",
        "OPTION 3":"Model of the system\nand random number\ngenerator",
        "OPTION 4":"Linear equations and\nconstraints",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'model of the system and random number generator' because it directly addresses the the important requirements of monte carlo simulation are: in the context of operations management principles."
    },
    {
        "SL NO":301,
        "QUESTIONS":"Simulation is most useful method when:",
        "OPTION 1":"Data is always\ndeterministic",
        "OPTION 2":"Optimization\ntechniques are\nsufficient",
        "OPTION 3":"The system is simple\nand can be solved\nmathematically",
        "OPTION 4":"The system is\ncomplex and\ndifficult to analyze\nmathematically",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'the system is complex and difficult to analyze mathematically' because it directly addresses the simulation is most useful method when: in the context of operations management principles."
    },
    {
        "SL NO":302,
        "QUESTIONS":"In which company Lean operation has its roots?",
        "OPTION 1":"General Motors, USA",
        "OPTION 2":"Honda Motors,\nJapan",
        "OPTION 3":"Toyota Automobile\nCo., Japan",
        "OPTION 4":"Ford Motors, USA",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'toyota automobile co., japan' because it directly addresses the in which company lean operation has its roots? in the context of operations management principles."
    },
    {
        "SL NO":303,
        "QUESTIONS":"Which of the following is not an objective of JIT manufacturing?",
        "OPTION 1":"Produce only what\ncustomers want",
        "OPTION 2":"Produce products\nwith perfect quality",
        "OPTION 3":"Produce with zero\nwaste",
        "OPTION 4":"Produce products\nbefore demand arises",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'produce products before demand arises' because it directly addresses the which of the following is not an objective of jit manufacturing? in the context of operations management principles."
    },
    {
        "SL NO":304,
        "QUESTIONS":"Continuous improvement in JIT means:",
        "OPTION 1":"Focusing on short-term gains",
        "OPTION 2":"Relying on external\naudits only",
        "OPTION 3":"Once problems are\nsolved, no further\naction is needed",
        "OPTION 4":"Correcting existing\nproblems and\nidentifying new ones\ncontinuously",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'correcting existing problems and identifying new ones continuously' because it directly addresses the continuous improvement in jit means: in the context of operations management principles."
    },
    {
        "SL NO":305,
        "QUESTIONS":"A factory has 13 workers producing a single product. The total\noutput in a month of 24 working days is 370 units. What is the\nmonthly productivity per worker?",
        "OPTION 1":"30",
        "OPTION 2":"28.46",
        "OPTION 3":"15.42",
        "OPTION 4":"20",
        "ANSWER CODE":2,
        "EXPLANATION":"Productivity is the ratio of output produced to the input resources used (like labor, capital, or materials)."
    },
    {
        "SL NO":306,
        "QUESTIONS":"Productivity is commonly defined as:",
        "OPTION 1":"Output plus capital",
        "OPTION 2":"Input multiplied by\ntime",
        "OPTION 3":"Ratio between the\noutput volume and\nthe volume of inputs",
        "OPTION 4":"Output minus input",
        "ANSWER CODE":3,
        "EXPLANATION":"Productivity is the ratio of output produced to the input resources used (like labor, capital, or materials)."
    },
    {
        "SL NO":307,
        "QUESTIONS":"Which of the following is not a method to measure employee\nproductivity?",
        "OPTION 1":"Measure the amount\nof work completed",
        "OPTION 2":"Measure quality of\nwork",
        "OPTION 3":"Measure goals",
        "OPTION 4":"Measure employee\nhappiness",
        "ANSWER CODE":4,
        "EXPLANATION":"Productivity is the ratio of output produced to the input resources used (like labor, capital, or materials)."
    },
    {
        "SL NO":308,
        "QUESTIONS":"Natural factors influencing productivity include:",
        "OPTION 1":"Industrial policy",
        "OPTION 2":"Product design",
        "OPTION 3":"Climatic and\ngeological conditions",
        "OPTION 4":"Labour laws",
        "ANSWER CODE":3,
        "EXPLANATION":"Productivity is the ratio of output produced to the input resources used (like labor, capital, or materials)."
    },
    {
        "SL NO":309,
        "QUESTIONS":"Social factors affecting productivity refer to:",
        "OPTION 1":"Credit facilities",
        "OPTION 2":"Market demand",
        "OPTION 3":"Culture, customs, and\ntraditions of society",
        "OPTION 4":"Machine\nmaintenance and\ndowntime",
        "ANSWER CODE":3,
        "EXPLANATION":"Productivity is the ratio of output produced to the input resources used (like labor, capital, or materials)."
    },
    {
        "SL NO":310,
        "QUESTIONS":"Continuous improvement in TQM is also known as:",
        "OPTION 1":"Six Sigma",
        "OPTION 2":"Benchmarking",
        "OPTION 3":"KAIZEN",
        "OPTION 4":"JIT",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'kaizen' because it directly addresses the continuous improvement in tqm is also known as: in the context of operations management principles."
    },
    {
        "SL NO":311,
        "QUESTIONS":"Total Quality Management encourages:",
        "OPTION 1":"Individual work only",
        "OPTION 2":"Ignoring process\nimprovements",
        "OPTION 3":"Teamwork,\ncooperation, and\nemployee\ninvolvement",
        "OPTION 4":"Short-term results\nover long-term\nquality",
        "ANSWER CODE":3,
        "EXPLANATION":"Quality management focuses on meeting or exceeding customer expectations through process control and improvement."
    },
    {
        "SL NO":312,
        "QUESTIONS":"Which of the following is not a principle of TQM?",
        "OPTION 1":"Quality is achieved\nthrough random\ninspection",
        "OPTION 2":"Continuous\nimprovement\n(Kaizen)",
        "OPTION 3":"Worker involvement\nis essential\nThe freedom",
        "OPTION 4":"Strive for quality in\nall things",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'quality is achieved through random inspection' because it directly addresses the which of the following is not a principle of tqm? in the context of operations management principles."
    },
    {
        "SL NO":313,
        "QUESTIONS":"Slack signifies:",
        "OPTION 1":"The total float of the\nproject",
        "OPTION 2":"The total duration of\nthe project",
        "OPTION 3":"available to\nreschedule or start a\njob",
        "OPTION 4":"The difference\nbetween EST and\nEFT",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'available to reschedule or start a job' because it directly addresses the slack signifies: in the context of operations management principles."
    },
    {
        "SL NO":314,
        "QUESTIONS":"For a job, slack time is calculated as:",
        "OPTION 1":"LFT + EFT",
        "OPTION 2":"EFT \u2212 LFT",
        "OPTION 3":"LFT \u2212 EFT",
        "OPTION 4":"EST \u2212 LST",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'eft \u2212 lft' because it directly addresses the for a job, slack time is calculated as: in the context of operations management principles."
    },
    {
        "SL NO":315,
        "QUESTIONS":"A job with zero slack is called:",
        "OPTION 1":"Critical job",
        "OPTION 2":"Non-critical job",
        "OPTION 3":"Independent job",
        "OPTION 4":"Slack job",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'critical job' because it directly addresses the a job with zero slack is called: in the context of operations management principles."
    },
    {
        "SL NO":316,
        "QUESTIONS":"EFT (Earliest Finish Time) is calculated as:",
        "OPTION 1":"Earliest Start Time +\nDuration of activity",
        "OPTION 2":"Latest Start Time +\nDuration",
        "OPTION 3":"Latest Finish Time \u2212\nDuration",
        "OPTION 4":"Earliest Start Time \u2212\nDuration",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'earliest start time + duration of activity' because it directly addresses the eft (earliest finish time) is calculated as: in the context of operations management principles."
    },
    {
        "SL NO":317,
        "QUESTIONS":"Floats represent:",
        "OPTION 1":"Difference between\nEFT and LFT",
        "OPTION 2":"Difference between\nmaximum time\navailable and actual\ntime required to\ncomplete an activity",
        "OPTION 3":"Difference between\nEST and LST",
        "OPTION 4":"Total duration of the\nproject",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'difference between maximum time available and actual time required to complete an activity' because it directly addresses the floats represent: in the context of operations management principles."
    },
    {
        "SL NO":318,
        "QUESTIONS":"Formula for Total Float (TF) is:",
        "OPTION 1":"TF = (EFT of tail\nevent \u2212 LST of head\nevent) \u2212 Duration",
        "OPTION 2":"TF = (EST of tail\nevent \u2212 EFT of head\nevent) \u2212 Duration",
        "OPTION 3":"TF = (LFT of head\nevent \u2212 EST of tail\nevent) \u2212 Duration",
        "OPTION 4":"TF = (LFT of head\nevent \u2212 EST of tail\nevent) + Duration",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'tf = (lft of head event \u2212 est of tail event) \u2212 duration' because it directly addresses the formula for total float (tf) is: in the context of operations management principles."
    },
    {
        "SL NO":319,
        "QUESTIONS":"A project activity has an EFT = 12 days, LFT = 20 days. What is its\nslack time?",
        "OPTION 1":"8 days",
        "OPTION 2":"27 days",
        "OPTION 3":"0 days",
        "OPTION 4":"12 days",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is '8 days' because it directly addresses the a project activity has an eft = 12 days, lft = 20 days. what is its\nslack time? in the context of operations management principles."
    },
    {
        "SL NO":320,
        "QUESTIONS":"A negative total float indicates that:",
        "OPTION 1":"The activity has\nexcess resources",
        "OPTION 2":"The activity can be\ndelayed without\naffecting the project",
        "OPTION 3":"Resources are not\nadequate and the\nactivity cannot finish\non time",
        "OPTION 4":"The project is ahead\nof schedule\nIndependent Float",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'resources are not adequate and the activity cannot finish on time' because it directly addresses the a negative total float indicates that: in the context of operations management principles."
    },
    {
        "SL NO":321,
        "QUESTIONS":"Free Float is a part of:",
        "OPTION 1":"Slack time",
        "OPTION 2":"Total Float",
        "OPTION 3":"Dummy activity",
        "OPTION 4":"only",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'total float' because it directly addresses the free float is a part of: in the context of operations management principles."
    },
    {
        "SL NO":322,
        "QUESTIONS":"Independent Float can be calculated as:",
        "OPTION 1":"Total Float + Slack\nTime of tail event",
        "OPTION 2":"Total Float \u2013 Head\nSlack",
        "OPTION 3":"Free Float \u2013 Tail\nSlack",
        "OPTION 4":"Free Float + Tail\nSlack",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'free float \u2013 tail slack' because it directly addresses the independent float can be calculated as: in the context of operations management principles."
    },
    {
        "SL NO":323,
        "QUESTIONS":"The main difference between slack and float is that:",
        "OPTION 1":"Slack refers to\nactivities, float refers\nto events",
        "OPTION 2":"Both refer to events\nonly",
        "OPTION 3":"Both refer to\nactivities only",
        "OPTION 4":"Slack is used for\nevents, float is used\nfor activities",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'slack is used for events, float is used for activities' because it directly addresses the the main difference between slack and float is that: in the context of operations management principles."
    },
    {
        "SL NO":324,
        "QUESTIONS":"The time constraint in project management refers to:",
        "OPTION 1":"The schedule for the\nproject to reach\ncompletion",
        "OPTION 2":"The total cost to\ncomplete a project",
        "OPTION 3":"The number of team\nmembers working on\nthe project",
        "OPTION 4":"The availability of\nraw materials",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'the schedule for the project to reach completion' because it directly addresses the the time constraint in project management refers to: in the context of operations management principles."
    },
    {
        "SL NO":325,
        "QUESTIONS":"Quality Improvement in project management refers to:",
        "OPTION 1":"Increasing team size\nfor faster execution",
        "OPTION 2":"Minimizing scope to\nmeet deadlines",
        "OPTION 3":"Applying tools to\nclose gaps between\ncurrent and desired\nquality levels",
        "OPTION 4":"Reducing cost of\nresources",
        "ANSWER CODE":3,
        "EXPLANATION":"Quality management focuses on meeting or exceeding customer expectations through process control and improvement."
    },
    {
        "SL NO":326,
        "QUESTIONS":"A Gantt Chart is also known as a:",
        "OPTION 1":"Network diagram",
        "OPTION 2":"Line graph",
        "OPTION 3":"Bar chart",
        "OPTION 4":"Flow chart",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'bar chart' because it directly addresses the a gantt chart is also known as a: in the context of operations management principles."
    },
    {
        "SL NO":327,
        "QUESTIONS":"A major advantage of the Gantt Chart is that it:",
        "OPTION 1":"Shows detailed\nnetwork relationships",
        "OPTION 2":"Can easily\nincorporate changes\nin timing and\nmachine loads",
        "OPTION 3":"Eliminates the need\nfor manpower\nplanning",
        "OPTION 4":"Eliminates the need\nfor manpower\nplanning",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'can easily incorporate changes in timing and machine loads' because it directly addresses the a major advantage of the gantt chart is that it: in the context of operations management principles."
    },
    {
        "SL NO":328,
        "QUESTIONS":"An event in a network refers to:",
        "OPTION 1":"A job that consumes\ntime and money",
        "OPTION 2":"The use of physical\nresources",
        "OPTION 3":"The start or\ncompletion of a job\nthat consumes no\nresources",
        "OPTION 4":"An interruption in\nthe workflow",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'the start or completion of a job that consumes no resources' because it directly addresses the an event in a network refers to: in the context of operations management principles."
    },
    {
        "SL NO":329,
        "QUESTIONS":"Network analysis provides a graphical representation of:",
        "OPTION 1":"Profit and loss data",
        "OPTION 2":"Material flow\nbetween\ndepartments",
        "OPTION 3":"Only the critical\nactivities",
        "OPTION 4":"All activities and\nevents in logical\nsequence",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'all activities and events in logical sequence' because it directly addresses the network analysis provides a graphical representation of: in the context of operations management principles."
    },
    {
        "SL NO":330,
        "QUESTIONS":"Which of the following is not an application of network analysis?",
        "OPTION 1":"Aircraft\nmanufacturing",
        "OPTION 2":"Retail store\nmanagement",
        "OPTION 3":"Construction of\nresidential complex",
        "OPTION 4":"Satellite mission\ndevelopment",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'retail store management' because it directly addresses the which of the following is not an application of network analysis? in the context of operations management principles."
    },
    {
        "SL NO":331,
        "QUESTIONS":"The type of maintenance in which machines are repaired only after\nbreakdown is known as:",
        "OPTION 1":"Scheduled\nmaintenance",
        "OPTION 2":"Predictive\nmaintenance",
        "OPTION 3":"Breakdown or repair\nmaintenance",
        "OPTION 4":"Preventive\nmaintenance",
        "ANSWER CODE":3,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":332,
        "QUESTIONS":"Which of the following is an analytical measure used to evaluate\npreventive maintenance effectiveness?",
        "OPTION 1":"Hours worked for\nmaintenance \/\nScheduled hours \u00d7\n100",
        "OPTION 2":"Inspections\nincomplete \/\nInspections\nscheduled \u00d7 100",
        "OPTION 3":"Frequency of\nbreakdowns =\nNumber of\nbreakdowns \/\nAvailable machine\nhours",
        "OPTION 4":"All of the above",
        "ANSWER CODE":4,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":333,
        "QUESTIONS":"One of the key advantages of preventive maintenance is:",
        "OPTION 1":"Increased work\ncontent of\nmaintenance jobs",
        "OPTION 2":"Reduced\nbreakdowns and\ndowntime",
        "OPTION 3":"Reduced safety of\nworkers",
        "OPTION 4":"Increased downtime",
        "ANSWER CODE":2,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":334,
        "QUESTIONS":"What does running maintenance typically include?",
        "OPTION 1":"Installation of new\nmachinery",
        "OPTION 2":"Only major repairs\nafter equipment\nfailure",
        "OPTION 3":"Lubrication, cleaning,\nand periodic overhaul\nwhile the equipment\nis in operation or\nduring preplanned\nshutdowns",
        "OPTION 4":"Outsourcing all\nmaintenance work",
        "ANSWER CODE":3,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":335,
        "QUESTIONS":"What are the two main causes for the replacement of machinery?",
        "OPTION 1":"Wear and\nobsolescence",
        "OPTION 2":"Technological\nimprovement and\nbreakdowns",
        "OPTION 3":"Wear and\ndepreciation",
        "OPTION 4":"Maintenance and\nrepair costs",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'wear and obsolescence' because it directly addresses the what are the two main causes for the replacement of machinery? in the context of operations management principles."
    },
    {
        "SL NO":336,
        "QUESTIONS":"One reason for replacing a machine before its expected life is:",
        "OPTION 1":"To reduce factory\nspace",
        "OPTION 2":"To avoid preventive\nmaintenance",
        "OPTION 3":"To reduce running\ncosts and increase\nproductivity",
        "OPTION 4":"To increase\ndowntime",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'to reduce running costs and increase productivity' because it directly addresses the one reason for replacing a machine before its expected life is: in the context of operations management principles."
    },
    {
        "SL NO":337,
        "QUESTIONS":"Which of the following is NOT a classification of spare parts?",
        "OPTION 1":"Regular Spares",
        "OPTION 2":"Insurance Spares",
        "OPTION 3":"Capital Spares",
        "OPTION 4":"Temporary Spares",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'temporary spares' because it directly addresses the which of the following is not a classification of spare parts? in the context of operations management principles."
    },
    {
        "SL NO":338,
        "QUESTIONS":"What is the primary purpose of a vision statement in an\norganization?",
        "OPTION 1":"To outline the\ncompany's current\noperations and\nprocesses.",
        "OPTION 2":"To list the\ncompany's products\nand services.",
        "OPTION 3":"To define the desired\nfuture state and\naspirations of the\norganization.",
        "OPTION 4":"To describe the\ncompany's financial\ngoals.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'to define the desired future state and aspirations of the organization.' because it directly addresses the what is the primary purpose of a vision statement in an\norganization? in the context of operations management principles."
    },
    {
        "SL NO":339,
        "QUESTIONS":"What does the \"F\" in the FAST goal-setting framework stand for?",
        "OPTION 1":"Financially viable",
        "OPTION 2":"Fully achievable",
        "OPTION 3":"Frequently discussed",
        "OPTION 4":"Fully transparent",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'frequently discussed' because it directly addresses the what does the \"f\" in the fast goal-setting framework stand for? in the context of operations management principles."
    },
    {
        "SL NO":340,
        "QUESTIONS":"What does EVA stand for in financial performance metrics?",
        "OPTION 1":"Equity Value Added",
        "OPTION 2":"Earnings Value\nAdded",
        "OPTION 3":"Economic Value\nAdded",
        "OPTION 4":"Earnings Variance\nAnalysis",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'economic value added' because it directly addresses the what does eva stand for in financial performance metrics? in the context of operations management principles."
    },
    {
        "SL NO":341,
        "QUESTIONS":"The dynamic nature of the business environment requires\nbusinesses to:",
        "OPTION 1":"Continuously adapt to\nchanges and\nanticipate future\ntrends",
        "OPTION 2":"Maintain a static\napproach to\noperations",
        "OPTION 3":"Ignore external\nchanges and focus\nonly on internal\nfactors",
        "OPTION 4":"Rely solely on\nhistorical data for\ndecision-making",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'continuously adapt to changes and anticipate future trends' because it directly addresses the the dynamic nature of the business environment requires\nbusinesses to: in the context of operations management principles."
    },
    {
        "SL NO":342,
        "QUESTIONS":"A company develops a new recycling process to reduce waste.\nWhich PESTEL factor is it responding to?",
        "OPTION 1":"Environmental",
        "OPTION 2":"Technological",
        "OPTION 3":"Economic",
        "OPTION 4":"Political",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'environmental' because it directly addresses the a company develops a new recycling process to reduce waste.\nwhich pestel factor is it responding to? in the context of operations management principles."
    }
]
          },
          {
            label: "Corporate Accounting",
            questions: 
            [
    {
        "question": "Which of the following is/are not characteristic of a company?",
        "options": [
            "It is a distinct legal entity existing independent of its members.",
            "It has a perpetual succession.",
            "The shares of a company are freely transferable except in case of a Private limited Company.",
            "It is a voluntary association of persons usually for social up liftment without expectation of any profit."
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is/are the important feature/s of a company?",
        "options": [
            "Accounting process is highly regulated and guided by regulatory pronouncements",
            "Constituents of periodical accounts (i.e., income statement, balance sheet etc.) are specified by the law",
            "Importance of compliance to the prescribed rules and regulations is paramount",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "In India, accounting in of a company form is guided by which of the following regulatory sources?",
        "options": [
            "Companies Act, 2013",
            "Company Rules",
            "Accounting Standards",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is not a statutory book of a company?",
        "options": [
            "Register of Investments held and their names",
            "Annual returns",
            "Register of Officers",
            "Register of shareholdings of the directors"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is/are not a feature/s of Shares have the following features?",
        "options": [
            "It represents the biggest unit of ownership",
            "Shares of a specific series must have the same face value",
            "Share represents only a partial ownership of Share Capital of the company",
            "Each share has a distinct number"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "In case of ___________________ issue the shares are offered to the existing shareholders of the company without any consideration.",
        "options": [
            "Private Placement",
            "Rights Issue",
            "Bonus Issue",
            "Offers for sale"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "When share is issued at a price equal to its face value, it is called issue _____________.",
        "options": [
            "at Par",
            "Issue at a Premium",
            "Issue at a Discount",
            "at Bonus"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Provisions relating to buy back of securities are contained in __________________ of the Companies Act, 2013.",
        "options": [
            "Section 77",
            "Section 77A",
            "Section 68",
            "Section 63"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Buy-back of equity shares in any financial year should not exceed ______________.",
        "options": [
            "10% of net worth",
            "25% of the aggregate of paid-up capital and free reserves of the company",
            "25% of the paid-up equity capital",
            "25% of the aggregate of paid-up equity capital and preference capital"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "2. Company may purchase its own shares or other specified securities out of \u2013 A. Free reserves B. Securities premium account C. Proceeds of issue of any shares D. Proceeds of issue of specified securities",
        "options": [
            "A and C only",
            "A, b and C only",
            "A, C and D only",
            "A or B or C or D"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Section 68 of the Companies Act, 2013 provides that no buy-back of any kind of shares or other specified securities shall be made out of the _________________.",
        "options": [
            "Securities premium balance as it stood before buy back",
            "Proceeds of an earlier issue of the same kind of shares or same kind of other specified securities",
            "General reserve in excess of 15% balance as per latest audited balance sheet",
            "Proceeds of issue of specified securities"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "For the purpose of calculating debt equity ratio which of the following debts are considered_________________.",
        "options": [
            "Secured debts",
            "Unsecured debts",
            "Current liabilities",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Where a company purchase its own shares out of free reserves or securities premium account, a sum equal to the nominal value of the shares so purchased shall be transferred to the ___________________.",
        "options": [
            "Capital Reserve Account",
            "General Reserve Account",
            "Capital Redemption Reserve Account",
            "Equity Shares Redemption Account"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "No offer of buy-back shall be made within a period of reckoned from the date of the closure of the preceding offer of buy-back ______________.",
        "options": [
            "6 months",
            "1 year",
            "2 years",
            "10 months"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Equity shares amounting to Rs.2,00,000 are brought back at a premium of 5%, by issue of preference shares amounting to Rs.1,00,000 at a premium of 10%. Compute the amount to be transferred to Capital Redemption Reserve.",
        "options": [
            "Rs.1,00,000",
            "Rs.90,000",
            "Rs.1,50,000",
            "Rs.50,000"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Following are the extract of balance sheet of Light Co. Ltd. Equity share of Rs.10 each - Rs.10,00,000 Security Premium \u2013 Rs.2,40,000 Reserve \u2013 Rs.7,50,000 Profit & Loss Account \u2013 Rs.2,80,000 Bank - Rs.9,10,000 Non Trading Investments \u2013 Rs.4,20,000 Company brought back 15,000 shares at Rs.40 each. The transaction in respect of buy back was financed by sale of 2/3rd of non-trade investment for Rs.5,90,000 Amount to be transferred to capital redemption reserve is _______________.",
        "options": [
            "Rs.6,00,000",
            "Rs.1,00,000",
            "Rs.4,50,000",
            "Rs.1,50,000"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Following information is available from the audited balance sheet of TH Ltd.: Equity Shares Capital (3,000 lakh share of Rs.10 each) \u2013 Rs.30,000 Securities Premium Account - Rs.3,000 General Reserve \u2013 Rs.10,000 Secured Loans \u2013 Rs.40,000 Unsecured Loans - Rs.22,000 Compute the maximum limits up to which buy back is permitted in the financial year 2022 \u2013 23.",
        "options": [
            "800 lakh shares",
            "1075 lakh shares",
            "500 lakh shares",
            "400 lakh shares"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The notice of the meeting at which the special resolution is proposed to be passed relating to buy back of shares shall be accompanied by an explanatory statement stating \u2013",
        "options": [
            "Full and complete disclosure of all material facts",
            "Analysis of debt equity",
            "Gross profit ratio before buy back",
            "Chairman\u2019s view on buy back"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The balance appearing in the books of a company at the end of year were: CRR A/c = Rs.50,000 Securities Premium = Rs.5,000 Revaluation Reserve = Rs.20,000 Profit & Loss A/c (Dr.) = Rs.10,000 Maximum amount available for bonus shares will be ______________________.",
        "options": [
            "Rs.50,000",
            "Rs.55,000",
            "Rs.45,000",
            "Rs.57,000"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "______________ is the amount of share capital that a company is permitted to issue.",
        "options": [
            "Issued Share Capital",
            "Authorized Share Capital",
            "Subscribed Capital",
            "Paid up Capital"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "When shares are forfeited, the share capital account is debited with ______.",
        "options": [
            "Called-up value of shares",
            "Nominal value of shares",
            "Market value of shares",
            "Paid-up value of shares"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Forfeiture of shares results in the reduction of______.",
        "options": [
            "Authorised capital",
            "Reserve capital",
            "Paid-up capital",
            "Fixed assets"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Shares can be forfeited ________.",
        "options": [
            "For failure to attend meetings",
            "For failure to repay the loan to the bank",
            "For non-payment of call money",
            "For which shares are pledged as a security"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Redeemable Preference Shares of Rs. 1,00,000 are redeemed at a premium of 5% for which purpose fresh equity capital of Rs. 40,000 is issued at par. What amount should be transferred to Capital Redemption Reserve account?",
        "options": [
            "Rs.40,000",
            "Rs.1,05,000",
            "Rs.65,000",
            "Rs.60,000"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The financial statements of company shall be in the from provided in _____________.",
        "options": [
            "Schedule IV",
            "Schedule III",
            "Schedule V",
            "Schedule VI"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Part I of the Schedule III to the Companies Act, 2013 gives the ______________.",
        "options": [
            "Format of Profit & Loss Account",
            "General instructions for preparation of Profit & Loss Account",
            "Format of Balance Sheet",
            "Format of Comparative Statements"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Where the company covered under section 135 of the Companies Act, 2013, which of the following shall be disclosed with regard to CSR activities?",
        "options": [
            "amount of expenditure incurred",
            "shortfall at the end of the year",
            "shortfall at the end of the year",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is/are not a criteria to classify a liability as current liability?",
        "options": [
            "it is expected to be settled in the company\u2019s normal operating cycle",
            "it is held primarily not for the purpose of being traded",
            "it is due to be settled within twelve months after the reporting date",
            "the company does not have an unconditional right to defer settlement of the liability for at least twelve months after the reporting date"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "What are the major types of financial statements prepared by entities?",
        "options": [
            "(a) Statement of Financial Performance or Income Statement (b) Statement of Financial State of Affairs or Balance Sheet (c) Statement of Changes in Financial Position (d) Statement of Inflow and Outflow of Cash",
            "(a) Statement of Trial Balance (b) Statement of Financial State of Affairs or Balance Sheet (c) Statement of Changes in Financial Position (d) Statement of Inflow and Outflow of Cash",
            "(a) Statement of Financial Performance or Income Statement (b) Statement of Financial State of Affairs or Balance Sheet (c) Statement of Changes in Financial Position (d) Statement of Fund Flows",
            "(a) Statement of Financial Performance or Income Statement (b) Statement of Financial State of Affairs or Balance Sheet (c) Statement of Changes in Financial Position (d) Cash Book"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "If the turnover of the company is less than Rs.100 Crore, the figures appearing in the Financial Statements shall be rounded off to nearest \u2013",
        "options": [
            "To the nearest hundreds",
            "To the nearest hundreds and thousands",
            "To the nearest hundred, thousands, lakh or million thereof",
            "To the nearest hundreds, thousands, lakhs or millions, or decimals thereof"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Under which heading the Deferred Tax Liabilities appears in the balance sheet _________________.",
        "options": [
            "Current Liabilities",
            "Non-Current Liabilities",
            "Deferred Liabilities",
            "Contingent Liabilities"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "As asset shall be classified as current ------------------------",
        "options": [
            "If it is held primarily for the purpose of being traded.",
            "If it is not possible to classify such asset as non-current asset",
            "It or the asset normal operating cycle cannot be identified",
            "All of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "A liability shall be classified as current when it satisfies any of the following criteria:",
        "options": [
            "It is expected to be settled in the Company\u2019s normal operating cycle",
            "It is due to be settled within twelve months after the reporting date",
            "The company does not have an un-conditional right to defer settlement of the liability of at least twelve months after the reporting date.",
            "Any of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following appears under the heading \u2018Reserve & Surplus\u2019 in the balance sheet",
        "options": [
            "Share Options Outstanding Account",
            "Share Application Money Pending Allotment",
            "Long Term Provisions",
            "Share Application Money due for refund"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "In the Balance Sheet Bank Overdraft will be shown as a liability under the heading \u2013",
        "options": [
            "Other Current Liabilities",
            "Short Term Borrowings",
            "Current Liabilities",
            "Cash & Cash Equivalent Liabilities"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "In the Balance Sheet Calls in Arrears will be shown in -",
        "options": [
            "Liabilities Side",
            "Assets Side",
            "Assets or Liabilities Side",
            "None of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Futura Ltd had the following items under the head \u201cReserves and Surplus\u201d in the Balance Sheet as on 31st March: (Rs. in Lakhs) Securities Premium Account - 80, Capital Reserve \u2013 60, General Reserve \u2013 90. The Company had an Accumulated Loss of Rs250 Lakhs on the same date. Reserves & Surplus to be disclosed in B/S is _______________",
        "options": [
            "Rs.250 Lakhs",
            "Rs.230 Lakhs",
            "Rs.20 Lakhs",
            "Rs.(20 Lakhs)"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "In the Notes to Accounts a Contingent liabilities shall be classified as ____________.",
        "options": [
            "Claims against the company not acknowledged as debt",
            "Guarantees",
            "Other money for which the company is contingently liable",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "In case of purchase of assets under instalment payment system, instalments due after 12 months from the reporting date are shown as",
        "options": [
            "Current liability",
            "Current assets",
            "Non-current liability",
            "Non-current assets"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "As per Schedule III of Companies Act 2013, while preparing the financial statements in case of a Finance Company, interest received from borrowers should be shown under",
        "options": [
            "Revenue from operation",
            "Other Income",
            "Current assets",
            "Non-current assets"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Inventories are valued at the lower of _________________ or the net realizable value.",
        "options": [
            "Fair Value",
            "Historical cost",
            "Current value",
            "None of these"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The amount of Calls-in-Advance not yet adjusted till the Balance Sheet date is shown under ___________ under the head Current Liabilities",
        "options": [
            "Other Current Liabilities",
            "Inventories",
            "Trade Receivables",
            "Trade Paybles"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Proposed Dividend is treated as a _____________________________ and is shown as a deduction in Reserve and Surplus.",
        "options": [
            "Contingent Liabilities",
            "Current Assets",
            "Current Liabilities",
            "None of these"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Cash receipts from disposal of shares is classified under",
        "options": [
            "Investing Activity",
            "Operating Activity",
            "Financing Activity",
            "Cash Equivalent"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The main difference in direct and indirect method is to calculate the",
        "options": [
            "Cash Flows from Investing Activity",
            "Cash Flows from Operating Activity",
            "Cash Flows from Financing Activity",
            "All of these"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "What is/are objective/s of preparing Cash Flow Statement?",
        "options": [
            "to determine ability of the entity to generate cash and cash equivalents",
            "to meet the needs of the entity to utilise the cash flows",
            "to ascertain gross inflows and outflows of cash",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "When company repurchases its own shares it records a ____________",
        "options": [
            "Cash inflow",
            "Cash outflow",
            "No effect on cash",
            "None of these"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A Cash Flow Statement begins with ____________.",
        "options": [
            "Investing Activity",
            "Operating Activity",
            "Financing Activity",
            "Cash Equivalent"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is an example of Non-cash Expenses",
        "options": [
            "Depreciation",
            "Wages and Salaries",
            "Payment of Dividend",
            "All of these"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "If the Net Operating Profit is Rs.90,000 and the Debtors are decreased by Rs.20,000 during the year.Then Cash from Operation will be ____________.",
        "options": [
            "Rs.70,000",
            "Rs.1,10,000",
            "Rs.90,000",
            "None of these"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Increase of Bills Receivale by Rs.30,000 results in",
        "options": [
            "Decrease in Cash",
            "Increase in Cash",
            "No effect on cash",
            "All of these"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Marketable securities are treated as _________________ in Cash Flow Statement",
        "options": [
            "Cash",
            "Cash equivalent",
            "Current Asset",
            "Non-cash Equivalent"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "An example of Cash Flow from Financing Activity is ________________",
        "options": [
            "Payment of Dividend",
            "Receipt of dividend on investment",
            "Cash received from customer",
            "Purchase of Fixed Assets"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is a source of Cash?",
        "options": [
            "Cash deposited into Bank",
            "Cash withdrawn from Bank",
            "Sale of Goods Costing Rs.20,000 Rs.15,000",
            "Depereciation charged on Fixed Assets"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Interest on Long term borrowing is an expense relating to _____________",
        "options": [
            "Investing Activity",
            "Operating Activity",
            "Financing Activity",
            "All of these"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A company received dividend of Rs.1,00,000 on its investment in other company's share. In case of a Finance company it will be classified as ____________",
        "options": [
            "Cash Flows from Investing Activity",
            "Cash Flows from Operating Activity",
            "Cash Flows from Financing Activity",
            "None of these"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Advance received from customers is classified as ______________________.",
        "options": [
            "Cash Flows from Investing Activity",
            "Cash Flows from Operating Activity",
            "Cash Flows from Financing Activity",
            "None of these"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "m. Acquired the assets of a company through issue of equity shares is classified as __________________.",
        "options": [
            "Cash Flows from Investing Activity",
            "Cash Flows from Operating Activity",
            "Cash Flows from Financing Activity",
            "None of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "A Ltd. paid an advance tax amounting to Rs.3,65,000 out of which Rs.15,000 is relating to a short-term capital gain on sale of securities. How will A Ltd. report the payment of advance tax in its Cash Flow Statement?",
        "options": [
            "Cash Flows from Operating Activity",
            "Cash Flows from Investing Activity",
            "Cash Flows from Financing Activity",
            "None of these"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Cash flows from operating activities (Rs.550) Lakhs Cash flows from investment activities (Rs.1,250) Lakhs Cash flows from financing activities Rs.1,750 Lakhs Determine the changeds in cash and cash equivalents is _______________.",
        "options": [
            "Decrease in Cash and Cash Equivalent by Rs.50 Lakhs",
            "Increase in Cash and Cash Equivalent by Rs.50 Lakhs",
            "No change in Cash and Cash Equivalent",
            "It is a non Cash item"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The method for presenting Net cash provided by operating activities that starts with net income and adjusts it for items that affected reported net income but that did not affect cash is called as ____________.",
        "options": [
            "Direct method",
            "Working capital method",
            "Indirect method",
            "Cost-benefit method"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "B. X Ltd. purchased machinery of Rs.10,00,000 issuing a cheque of Rs.2,50,000 and 10% Debentures of Rs.7,50,000. In the cash flow statement, the transaction will be shown as .",
        "options": [
            "Outflow under investing activity Rs.10,00,000, inflow under financing activity as receipt for debentures Rs.7,50,000",
            "Outflow under investing activity Rs.2,50,000",
            "Inflow of Rs.7,50,000 as financing activity.",
            "None of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "From the following information presented by P Ltd. ascertain the Net Realisable Vlue of stock : Cost Price of certain stock amounted to Rs.60,000; being obsolete, it can be used for production purposes after incurring Rs.10,000 for modification. The same could be used as a raw material for an existing product, the purchase price for the same amounts to Rs.40,000.",
        "options": [
            "Rs.60,000",
            "Rs.40,000",
            "Rs.30,000",
            "Rs.10,000"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Objectives of Bank\u2019s Book keeping system is/are________________.",
        "options": [
            "to keep up-to-date detailed ledgers",
            "to balance the trial balance every day",
            "to keep all control accounts in agreement with the detailed ledgers",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is/are not Subsidiary Register of a banking company?",
        "options": [
            "Demand Drafts, Telegraphic Transfers and Mail Transfers issued on Branches and Agencies",
            "Demand Drafts, Telegraphic Transfers and Mail Transfers received from Branches and Agencies",
            "Letters of Indemnity",
            "Letters of Credit"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Some of the common purposes are of a Bank's Statistical Books is/are ______________.",
        "options": [
            "To record Average Balance in Loan and Advances etc.",
            "To record Deposits received and amount paid out ea ch month in the various departments",
            "To record Average Balance of Assets",
            "Both 1 and 2"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "__________________________ = Amount of Bill \u00d7 Rate of Discount \u00d7 Unexpired period (in months)/12",
        "options": [
            "Rebate on Bills Discounted",
            "Discount on Bills",
            "Interest",
            "Loan Amount"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The status of securities and the value of such securities must be mentioned by every bank in Schedule ___________.",
        "options": [
            "2",
            "4",
            "7",
            "9"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The Electricity Act, 2003 replaced which of the following erstwhile existing legislations?",
        "options": [
            "The Indian Electricity Act, 1910",
            "The Electricity (Supply) Act, 1948",
            "The Electricity Regulatory Commissions Act, 1998",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is/are main feature of Electricity Act, 2003?",
        "options": [
            "The activities like generation, transmission and distribution of power have been separately identified.",
            "Power generation has partially been de-licensed",
            "20% of the power supplied by suppliers and distributors to the consumers has to be generated using renewable and non-conventional sources of energy",
            "Metering of all electricity supplied has been made optional"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The Central Commission shall consist of which of the following Members?",
        "options": [
            "A chairperson and 3 Members",
            "The Chairperson of the Authority who shall be the Member, ex-officio.",
            "Both 1 and 2",
            "None of them"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Rate of provisioning for advances doubtful for more than 1 year but less than 3 years is _____________.",
        "options": [
            "25%",
            "40%",
            "60%",
            "100%"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is a principle of insurance?",
        "options": [
            "Principle of indemnity",
            "Insurable interest.",
            "Principle of uberrimae fidei.",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Rate of provision on advances doubtful for more than 3 years is___________.",
        "options": [
            "40%",
            "25%",
            "100%",
            "Nil"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is not a mandatory financial statement of a General Insurance Company as per IRDA regulations?",
        "options": [
            "Revenue Account",
            "Profit and Loss Account",
            "Balance Sheet",
            "Cash Flow Statement"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "For Marine Insurance : Premia collected from -(a) Insured (other than insurance companies) in respect of policies issued is Rs.45 Cr. (b) Other insurance companies in respect of risks undertaken is Rs. 17.5 Cr. (c) Premia paid/payable to other insurance companies on business ceded is Rs.16.75 Cr. Compute the closing balance in Unexpired Risks Reserve Account.",
        "options": [
            "Rs.45 Cr.",
            "Rs.45.75 Cr.",
            "Rs.12.50 Cr.",
            "Rs.8.25 Cr."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "_____________ is a reserve which should be created by the insurers towards losses which might arise due to entirely unexpected set of events and not for any specific known purpose.",
        "options": [
            "General Reserve",
            "Catastrophe Reserve",
            "Revenue Reserve",
            "Surplus"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Date of bill 15.01.2023 Period 5 months Rate of discount 8% Calculate rebate on bill discounted, if accounting year ends on 31.03.23.",
        "options": [
            "Rs.852.46",
            "Rs.818.85",
            "Rs.873.22",
            "Rs.825.45"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Information provided by General Purpose Financial Reporting are as follows",
        "options": [
            "Economic resources i.e., assets",
            "Claims against the entity i.e., liabilities",
            "Changes in economic resources and claims",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following does not encompas Enhancing Qualitative Characteristics",
        "options": [
            "Comparability",
            "Verifiability",
            "Uniformity",
            "Understandability"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "________________ measures provide monetary information about assets, liabilities and related income and expenses, using information updated to reflect conditions at the measurement date.",
        "options": [
            "Historical Cost",
            "Current Value",
            "Notional Value",
            "Net Realisable Value"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A complete set of financial statements comprises which of the following?",
        "options": [
            "a balance sheet as at the end of the period",
            "Statement of changes in equity for the period",
            "Both 1 and 2",
            "a statement of fund flows for the period"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "From the following information presented by P Ltd. ascertain the Net Realisable Vlue of stock : Cost Price of certain stock amounted to Rs.60,000; being obsolete, it can be used for production purposes after incurring Rs.10,000 for modification. The same could be used as a raw material for an existing product, the purchase price for the same amounts to Rs.40,000.",
        "options": [
            "Rs.60,000",
            "Rs.40,000",
            "Rs.30,000",
            "Rs.10,000"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Z Co. Ltd. purchased goods at the cost of Rs.40 lakhs in October 2021. Till March 2022, 75% of the stocks were sold. The company wants to disclose closing stock at Rs.10 lakhs. The expected sales value is Rs.11 lakhs and a commission at 10% on sale is payable to the agent. What is the correct closing stock value to be disclosed as at 31.3.2022?",
        "options": [
            "Rs.11,00,000",
            "Rs.9,90,000",
            "Rs.10,00,000",
            "Rs.40,00,000"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Mr. X is an employee of ABC Ltd. His annual salary is Rs.15 lakh. The company follows a 300 working days policy. As per the policy of the company, Mr. X is entitled to a leave of 10 days for 2022-23. He, however, utilises 8 days leave. The unutilised leaves are not allowed to be carried forward but are settled by way of payment to the employee. Compute the amount to be paid for unutilised leaves.",
        "options": [
            "Rs.5,000",
            "Rs.10,000",
            "Rs.15,00,000",
            "Rs.1,50,000"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "01.04.2022 B Ltd. has 3600 ordinary shares outstanding. On 31.08.2023 it issued 1200 ordinary shares for cash. On 31.01.23 it bought back 600 ordinary shares. Calculate weighted average number of shares as on 31.03.23.",
        "options": [
            "4200 shares",
            "4800 shares",
            "3600 shares",
            "1200 shares"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "C Ltd. had 10,00,000 ordinary shares outstanding as on 01.04.2022. On 01.01.2023 it issued 2 ordinary shores bonus for each shore outstanding on 31.12.2022, Profit for the year 2021-22 was Rs.9,00,000. Profit for 2022-23 was Rs.30,00,000. Calculate the adjusted EPS for the year 2021-22.",
        "options": [
            "Rs.1.00",
            "Rs.0.30",
            "Rs.3.00",
            "Rs.3.33"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "An entity has an obligation to restore an asset for the damage it has in the past. It has Rs.20 lakh cash to pay on 31.03.2022 relating to this liability. The entity considers that 15% is an appropriate discount rate. the time value of money is considered material. Calculate the amount to be provided.",
        "options": [
            "Rs. 15.12 lakh",
            "Rs.20 lakh",
            "Rs.3.00 lakh",
            "Nonre of these"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Ind AS 1 \u201cPresentation of financial statements\u201d applies to _____________",
        "options": [
            "Consolidated financial statements in accordance with Ind AS 110, Consolidated Financial Statements,",
            "Separate financial statements in accordance with Ind AS 27, Separate Financial Statements.",
            "Both of the above",
            "All of these"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is not a part of other long-term benefits?",
        "options": [
            "Long-term disability benefits",
            "Retirement benefits",
            "Profit-sharing and bonuses",
            "Deferred remuneration"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Ind AS 2, Inventories, does not apply to____________.",
        "options": [
            "Financial Instruments",
            "Biological Assets",
            "Both 1 and 2",
            "1 but not 2"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is a defined contribution plan?",
        "options": [
            "Multi-employer plan",
            "State plan",
            "Insured benefits",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Ordinary shares are 1,00,000 of Rs.1.00;10% Preference shares are 200000 of Rs.1.00; PAT Rs.10,00,000. Calculate basic EPS.",
        "options": [
            "Rs.9.80",
            "Rs.9.60",
            "Rs.9.40",
            "Rs.9.20"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The expected sales value of stock is Rs.20 lakhs and a commission at 10% on sale is payable to the agent. Calculate NRV.",
        "options": [
            "Rs.12 lakh",
            "Rs.14 lakh",
            "Rs.16 lakh",
            "Rs.18 lakh"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The method for presenting Net cash provided by operating activities that starts with net income and adjusts it for items that affected reported net income but that did not affect cash is called as .",
        "options": [
            "Direct method",
            "Working capital method",
            "Indirect method",
            "Cost-benefit method"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Given salary expenses Rs.40,000, Outstanding in the beginning of the year Rs.5,000 and outstanding at the end of the year RS.10,000. Cash outflow on salary will be.",
        "options": [
            "Rs.55,000",
            "Rs.45,000",
            "Rs.35,000",
            "Rs.15,000"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is outside the scope of Ind AS 1?",
        "options": [
            "Financial Review by Management",
            "Environmental Reports",
            "Value Added Statements",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is included in cost of inventory as per Ind AS 2?",
        "options": [
            "Duties and taxes subsequesntly recoverable from taxing authorities",
            "Freight inward",
            "Rebates",
            "Duty drawbacks"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Y Ltd. supplied the following information: Net Profit for 2021-22 = Rs.10,00,000 Net Profit for 2022-23 = Rs.15,00,000 No. of shares prior to right issue = 5,00,000 Terms of right issue: 1 new share for every 4 shares held; right issue price = Rs.20 Fair value of 1 ordinary share immediately prior to exercise of right = Rs.25. Compute the Right Factor",
        "options": [
            "2.5",
            "1.92",
            "1.04",
            "2.00"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "________________________is the price that would be received to sell an asset, or paid to transfer a liability, in an orderly transaction between market participants at the measurement date.",
        "options": [
            "Fair Value",
            "Value in use",
            "Current Cost",
            "Net Realisable Value"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is included in cost of inventory as per IND AS 2?",
        "options": [
            "Duties and Taxes subsequently recoverable from taxing authorities",
            "Freight inwards",
            "Rebates",
            "Duty drawbacks"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Events occurring after the Reporting Period are those events that occure between ---",
        "options": [
            "reporting date and issue date",
            "reporting date and approval date",
            "finalisation date and approval date",
            "finalisation date and issue date"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "How many types of Employee Benefits are there as per Ind AS 19?",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is not an essential features of auditing?",
        "options": [
            "It involves evaluation & verification of the relevance, reliability and adequacy of evidence in support of verifiable information such as vouchers, documents, explanations.",
            "It is analytical, critical and investigative review of systems of Accounting & Internal Controls.",
            "The information audited are non-financial in nature.",
            "There should be standards or criteria for evaluation of the information in a systematic & scientific manner."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The word \u201cAuditing\u201d has been derived from Latin word \u201caudiere\u201d which means_________________.",
        "options": [
            "To Hear",
            "To verify",
            "To Examine",
            "To Identify"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Management is interested in the Financial Statements for __________________.",
        "options": [
            "For day-to-day decision-making",
            "For Collection of Taxes",
            "For research purpose",
            "None of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Government is interested in the Financial Statements for____________________.",
        "options": [
            "For day-to-day decision-making",
            "For Collection of Taxes",
            "For research purpose",
            "None of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Verification of the value of assets, liabilities, and the balance of reserves, provision and the amount of profit earned or loss suffered by an entity is called as ____________.",
        "options": [
            "Continuous audit",
            "Balance sheet audit",
            "Interim audit",
            "Partial audit"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Audit in depth synonymous for _______________",
        "options": [
            "Examination in Depth",
            "Completed audit",
            "Final audit",
            "Internal audit"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Test Checking reduces the __________.",
        "options": [
            "Power of an auditor",
            "Expenses of auditor",
            "Work of an auditor",
            "Liability of an auditor"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A flow chart, made by the auditor, of an entity\u2019s internal control system is a graphic representation that depicts the auditor\u2019s ____________________.",
        "options": [
            "Understanding of the system",
            "Understanding of fraud risk factors",
            "Documentation of assessment of control risk",
            "Both 1 and 3"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Internal auditor is appointed by _________.",
        "options": [
            "The Management",
            "The Shareholders",
            "The Government",
            "The Statutory Body"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The work of one clerk is automatically check by another clerk is called ___________.",
        "options": [
            "Internal control",
            "Internal check",
            "Internal audit",
            "None of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "An internal control includes ____________.",
        "options": [
            "Internal Audit",
            "Internal Check",
            "Both 1 and 2",
            "None of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The most important objective of internal audit is ____________.",
        "options": [
            "Early detection of errors and fraud",
            "Facilitating final audit",
            "Early finalization of annual account",
            "Ensuring systematic accounting"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Internal check is meant for _______________.",
        "options": [
            "Prevention of frauds",
            "Detection of frauds",
            "Helping audit is depth",
            "Detection of errors"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Cut-off testing is performed during audit of sales to address the fofllowing assertion_______________.",
        "options": [
            "Occurrence",
            "Measurement",
            "Cut-off",
            "All of these"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is/are advantage/s of audit?",
        "options": [
            "Audit is a tool, which different stakeholders can use to protect their interests in the enterprise",
            "Audit is not only a corrective measure but has a deterrent effect. It serves as a moral check on the employees from committing defalcations or embezzlements",
            "The employees of the organisation remain alert and vigilant as regards the updating of books of accounts and other records",
            "All of these"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "________________________involves examination of legalities by blending the techniques of propriety audit, regularity, investigative and financial audits.",
        "options": [
            "Forensic audit",
            "Tax audit",
            "Cost audit",
            "Human Resource Audit"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Audit Documentation is related to",
        "options": [
            "SA 300",
            "SA 230",
            "SA 250",
            "SA 310"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "_________________ is a detailed plan of the auditing work to be performed, specifying the procedures to be followed in verification of each item and the financial statements and the estimated time required.",
        "options": [
            "Audit programme",
            "Flow-chart",
            "Audit Documentation",
            "Audit Working Papers"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "_____________refers to the possibility of material misstatement due to complex transactions or even due to organised fraud.",
        "options": [
            "Control Risk",
            "Inherent Risk",
            "Detection Risk",
            "None of these"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Benefits of Audit Sampling are ____________________.",
        "options": [
            "It reduces the workload of the auditor",
            "It saves time and cost",
            "It gives dependable result as it is based on statistical sampling methods",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The main role of _____________ is the following: A. Recommending Auditing Standards, B. Monitoring and Enforcing Compliance with Auditing Standards and C. Power to Investigate",
        "options": [
            "NFRA",
            "NACAS",
            "IFC",
            "None of these"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "NFRA consists which of the following?",
        "options": [
            "Accounting Standards Committee",
            "Auditing Standards Committee",
            "Enforcement Committee",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "the term \u2018________________________\u2019 means the policies and procedures adopted by the company for ensuring the orderly and efficient conduct of its business, including adherence to company\u2019s policies, the safeguarding of its assets, the prevention and detection of frauds and errors, the accuracy and completeness of the accounting records, and the timely preparation of reliable financial information.",
        "options": [
            "Enforcement Committee",
            "Internal Financial Controls",
            "National Advisory Committee on Accounting Standards",
            "National Financial Reporting Authority"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is not a duty of duties of the NFRA?",
        "options": [
            "Recommend accounting and auditing policies and standards to be adopted by companies for approval by the Central Government.",
            "Monitor and enforce compliance with Income Tax Act and auditing standards.",
            "Perform such other functions and duties as may be necessary or incidental to the aforesaid functions and duties.",
            "Oversee the quality of service of the professions associated with ensuring compliance with such standards and suggest measures for improvement in the quality of service."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "An auditor expresses _____________ opinion on financial statements when the auditor, having obtained sufficient appropriate audit evidence, concludes that misstatements, either individually or in aggregate, are both material and pervasive to the financial statements.",
        "options": [
            "Qualified",
            "Disclaimer",
            "Adverse",
            "None of these"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Some situations when an auditor should express a qualified opinion is/are ________________________________.",
        "options": [
            "Non-adherence to AS-2 with regard to inventory valuation at the lower of cost and net realisable value.",
            "Auditor being prevented by the management from observing the counting of physical inventory where such action is material to the financial statements.",
            "Both 1 and 2",
            "Non-receipt of branch audit reports from a significant number of branches."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "An audit report with an unmodified opinion is also known as \u2018____________________\u2019 or \u2018Unqualified Report\u2019",
        "options": [
            "Clean Report",
            "Clear Report",
            "Neet Report",
            "Honest Report"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Basic Elements of Audit Report as per Standards on Auditing are_________________________________________.",
        "options": [
            "Key Audit Matters",
            "Auditor\u2019s Opinion",
            "Basis for Opinion",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "As per Rule 11 of Companies (Audit and Auditors) Rules 2014, the auditor\u2019s report shall also include his views and comments on which of the following matters?",
        "options": [
            "whether the company has disclosed the impact, if any, of pending litigations on its financial position in its financial statement;",
            "whether the company has made provision, as required under any law or accounting standards, for material foreseeable losses, if any, on long term contracts including derivative contracts;",
            "whether there has been any delay in transferring amounts, required to be transferred, to the Investor Education and Protection Fund by the company.",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Essential Characteristics of a Good Audit Report are_______________________________.",
        "options": [
            "Simplicity,Clarity,Bre vity,Firmness,Objecti vity,Disclosure,Impart iality,Information-based and Timeliness",
            "Simplicity,Clarity,Br evity,Firmness,Obje ctivity,Disclosure,Im partiality,Informatio n-based and Popularity",
            "Simplicity,Clarity,Bre vity,Firmness,Objecti vity,Disclosure,Impar tiality,Information-based and ambiguity",
            "None of these"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Auditor shall verify whether the unpaid dividend has been transferred to the Unpaid Dividend Account within _______ days from the expiry of ___________ days allowed for declaration and payment of dividend.",
        "options": [
            "7,20",
            "7,30",
            "15,20",
            "15,15"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "If debentures are redeemable, it can be redeemed in which of the following ways?",
        "options": [
            "By way of payment as donation",
            "By payment whenever the company desires to do so",
            "By way of personal drawing",
            "By way of payment as shares without consideration"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The audit procedure to be applied in this context of Splitting of Shares are _________________",
        "options": [
            "The auditor shall confirm that alteration was authorised by articles",
            "He should verify the minutes of the Board meeting and ordinary resolution passed in the general meeting in which the approval of members is obtained",
            "He should verify that alteration had been effected in copies of Memorandum, Articles, etc.",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Audit Report contains ______________.",
        "options": [
            "Details of Facts",
            "Details of Frauds",
            "Expression of Opinion",
            "Expression of Suggestions"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Audit Certificate contains _____________.",
        "options": [
            "Details of Facts",
            "Details of Frauds",
            "Expression of Opinion",
            "Expression of Suggestions"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "An auditor expresses ___________ opinion on financial statements when the auditor, having obtained sufficient appropriate audit evidence, concludes that misstatements, either individually or in aggregate, are both material and pervasive to the financial statements.",
        "options": [
            "Qualified",
            "Adverse",
            "Modified",
            "Disclaimer of"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Any casual vacancy in a govt. company is filled by the CAG of India within days.",
        "options": [
            "15",
            "30",
            "45",
            "60"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A cost auditor submits his report along with reservations and observations in Form No.___________________",
        "options": [
            "CRA 1",
            "CRA 2",
            "CRA 3",
            "CRA 4"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Secretarial Audit is covered under section _________________.",
        "options": [
            "204",
            "148",
            "139",
            "133"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "6. An auditor shall submit a unmodified report when ________________________.",
        "options": [
            "The financial statements exhibit true and fair view",
            "The financial statements are partially correct",
            "The financial statements are incomplete",
            "The financial statements are unavailable"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is not a content of audit report as per CARO?",
        "options": [
            "Inventory",
            "Acceptance of deposit",
            "Recruitment of employees",
            "Repayment of loan"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following are the essential characteristics of a good audit report?",
        "options": [
            "Simplicity",
            "Clarity",
            "Objectivity",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Auditor of a company appointed u/s ____________shall not act as the cost auditor of the company.",
        "options": [
            "139",
            "148",
            "204",
            "141"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "As per Section 139(9), a retiring auditor may be re-appointed at an annual general meeting, if:",
        "options": [
            "he is not disqualified for re-appointment",
            "he has not given the company a notice in writing of his unwillingness to be re-appointed",
            "a special resolution has not been passed at that meeting appointing some other auditor or providing expressly that he shall not be re-appointed",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The first auditor of a company, other than a Government company, shall be appointed by the __________________________ within thirty days from the date of registration of the company.",
        "options": [
            "Shareholders",
            "Board of Directors",
            "Government",
            "Employees"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The company shall inform the auditor concerned of his or its appointment, and also file a notice of such appointment with the Registrar within fifteen days of the meeting in which the auditor is appointed in Form ____________.",
        "options": [
            "ADT 1",
            "ADT 2",
            "ADT 3",
            "ADT 4"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "No individual shall be appointed or reappointed as auditor for more than one term of _______ consecutive years",
        "options": [
            "4",
            "5",
            "6",
            "3"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Section ___________ of Companies Act, 2013 contains the statutory provisions in relation to remuneration of auditors",
        "options": [
            "139",
            "148",
            "142",
            "141"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "_________________refers to the process of conducting the audit of a single organisation by more than one auditor.",
        "options": [
            "Joint audit",
            "Cost audit",
            "Internal audit",
            "Continuous audit"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The amendments that gave the local self-governance in India the constitutional protection are and _____________________.",
        "options": [
            "53 and 54",
            "63 and 64",
            "73 and 74",
            "83 and 84"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "According to the Central Co-operatives Societies Act, of the profits of a co-operative society should be transferred to a Reserve Fund before distribution of dividend or payment of bonus to its members.",
        "options": [
            "20%",
            "25%",
            "30%",
            "35%"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The major objective of audit of Municipalities and Panchayats are _________________________.",
        "options": [
            "To ensure on the fairness and correctness of contents in the Financial Statement",
            "To report on adequacy of Internal control",
            "To ensure value of money is fully received on amount spent.",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following records are not maintained by a co-operative societies asaccounting records ?",
        "options": [
            "Cash book",
            "Memorandum of Association",
            "Register of assets and investments",
            "Register of sureties"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "According to the Central Co-operatives Societies Act, ____________% of the profits of a co-operative society should be transferred to a Reserve Fund before distribution of dividend or payment of bonus to its members.",
        "options": [
            "25",
            "20",
            "30",
            "15"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is not falling under the broad category of Banks?",
        "options": [
            "Commercial Banks",
            "Regional Rural Banks",
            "Co-operative Banks",
            "None of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The auditor of a nationalised bank is primarily required to comment on which the following aspects in its report to the Central Government?",
        "options": [
            "whether the financial statements present a true and fair view of the affairs of the bank and whether all necessary explanation and information has been made available to him",
            "whether or not the monetory supports received from the offices and branches of the bank have been found adequate for the purpose of his audit",
            "whether or not the transactions of the bank, which have come to his notice, have been within the powers of that bank",
            "Both 1 and 3"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "In relation to advances made by bank an auditor needs to review which of the followings?",
        "options": [
            "Scrutinise the subsidiary, ledger, & control accounts",
            "Scrutinise the overdue account and scheme for recovery of such amount.",
            "Ensure the proper documentation of account.",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Hospitality sector covers a wide range of organisations which can broadly be divided into _____categories",
        "options": [
            "4",
            "3",
            "2",
            "1"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Steps common for the category of Restaurants in relation to Hospitality Sector is/are ________________.",
        "options": [
            "Vouch revenue out of commissions from various companies and tour partners.",
            "Verify the total revenue recognised based on the daily and monthly sales report.",
            "Check that the revenue has been realised in cash based on bank statements. Check whether arrears written off, if any, has been duly approved by the person responsible.",
            "Both 2 and 3"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Regarding which category of Hospitality Sector, the followng steps are taken for auditing purposes? a) Vouch the collections from boarders based on their check-in and check-out information recorded in the register, counterfoils of bills and cash book. b) Verify the room rent receipts and daily occupancy reports. Ask for proper clarification for differential rent charged from any boarder. Be careful while verifying the adjustment of unrealised room rent, cancellation charges of booking accommodation at the time of closing of accounts. c) Vouch collections on account of special events such as conferences, wedding ceremony etc. separately based on counterfoil of receipts and cash book.",
        "options": [
            "Amusement Park",
            "Cinema Halls",
            "Hotels and Guest Houses",
            "Travel and Tourism"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Steps of audit common for all organisations are _________________.",
        "options": [
            "Understand the ownership structure of the organisation",
            "Evaluate the internal control system and determine the nature, timing and the extent of the audit procedures",
            "Check that the organisation has a valid licence from an appropriate authority to run the business",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Forfeiture of shares means:",
        "options": [
            "Issuance of new shares",
            "Buying back of shares",
            "Cancellation of shares due to non-payment of call money",
            "Transfer of shares"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "After forfeiture, the forfeited shares can be:",
        "options": [
            "Re-issued",
            "Destroyed",
            "Converted into debentures",
            "Held in treasury"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Rights shares are generally offered in proportion to:",
        "options": [
            "Debentures held",
            "Number of years associated with the company",
            "Shares already held",
            "Voting rights"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Buy-back of shares reduces:",
        "options": [
            "Authorized share capital",
            "Issued share capital",
            "Subscribed share capital",
            "Paid-up share capital"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "A company announces bonus shares in the ratio 2:5. A shareholder holds 1,000 shares. How many bonus shares will he receive?",
        "options": [
            "200",
            "400",
            "250",
            "500"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A company buys back 5,000 shares of \u20b910 each at \u20b912. What is the total amount paid for buy-back?",
        "options": [
            "Rs.50,000",
            "Rs.60,000",
            "Rs.55,000",
            "Rs.65,000"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A company issued 8,000 shares and received applications for 10,000 shares. Pro-rata allotment is made. A person applied for 500 shares. How many shares will he get?",
        "options": [
            "500",
            "400",
            "300",
            "350"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A company issued 5,000 shares of \u20b910 each at a premium of \u20b92 per share. What is the total amount of securities premium received?",
        "options": [
            "Rs.60,000",
            "Rs.5,000",
            "Rs.10,000",
            "Rs.20,000"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Employee is granted 1,000 stock options at \u20b960. Market price at time of exercise is \u20b9100. What is the total gain to the employee?",
        "options": [
            "Rs.60,000",
            "Rs.40,000",
            "Rs.1,00,000",
            "Rs.20,000"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Preference shares of \u20b91,00,000 are redeemed at a premium of 5%. What amount should be debited to Securities Premium Account (if available)?",
        "options": [
            "Rs.1,00,000",
            "Rs.1",
            "Rs.5,000",
            "None of these"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "According to Schedule III of the Companies Act, 2013, which of the following is classified under 'Current Assets'?",
        "options": [
            "Inventories",
            "Fixed Assets",
            "Long-term Investments",
            "Intangible Assets"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which section of Schedule III deals with the format and disclosure requirements for the Statement of Profit and Loss?",
        "options": [
            "Part I",
            "Part II",
            "Part III",
            "Part IV"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following expenses is shown separately in the Statement of Profit and Loss as per Schedule III?",
        "options": [
            "Depreciation and amortization expense",
            "Cost of goods sold",
            "Dividend paid",
            "Loans and advances"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "According to Schedule III, under which head is 'Capital Reserve' shown?",
        "options": [
            "Current liabilities",
            "Non-current liabilities",
            "Equity",
            "Non-current assets"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A company has the following information: Inventory: \u20b91,50,000 Trade Receivables: \u20b92,00,000 Cash and Cash Equivalents: \u20b950,000 Prepaid Expenses: \u20b910,000 Short-term loans and advances: \u20b940,000 What is the total amount classified as Current Assets in the Balance Sheet?",
        "options": [
            "Rs.4,00,000",
            "Rs.3,50,000",
            "Rs.4,50,000",
            "Rs.4,00,000"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The company\u2019s Balance Sheet shows the following liabilities: Long-term borrowings: \u20b95,00,000 Trade payables: \u20b91,00,000 Current maturities of long-term debt: \u20b980,000 Provision for taxation: \u20b950,000 What is the total Current Liabilities amount?",
        "options": [
            "Rs.2,50,000",
            "Rs.1,70,000",
            "Rs.2,30,000",
            "Rs.1,50,000"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Cash flows from which of the following activities include receipts from sale of goods and services?",
        "options": [
            "Operating Activities",
            "Investing Activities",
            "Financing Activities",
            "None of these"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is NOT included in cash flows from investing activities?",
        "options": [
            "Purchase of fixed assets",
            "Proceeds from sale of fixed assets",
            "Payment of interest on loans",
            "Purchase of investments"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A company has the following information: Net Profit after tax: Rs.7,00,000 Depreciation charged: Rs.1,20,000 Increase in Trade Receivables: Rs.40,000 Decrease in Trade Payables: Rs.30,000 What is the net cash from operating activities (Indirect Method)?",
        "options": [
            "Rs.5,10,000",
            "Rs.8,90,000",
            "Rs.8,20,000",
            "Rs.7,50,000"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "If the net cash from operating activities is Rs.9,00,000, net cash used in investing activities is Rs.(4,00,000), and net cash used in financing activities is Rs.(3,00,000), what is the net increase in cash and cash equivalents during the year?",
        "options": [
            "Rs.5,00,000",
            "Rs.(2,00,000)",
            "Rs.2,00,000",
            "Rs.(5,00,000)"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Permanent Audit file contains _________________.",
        "options": [
            "Audit Programme",
            "Analysis of significant ratios and trends",
            "Copies of management letters",
            "Analysis of transaction and balances"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Objective of an Audit is to formulate an overall opinion on",
        "options": [
            "Financial Statement",
            "Books of Accounts",
            "Cost Statement",
            "None of these"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "SA-700 stands for ________.",
        "options": [
            "Joint Auditor",
            "Audit Planning",
            "Forming an opinion and reporting on Financial Statement",
            "None of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Audit is a fact-finding process that compares actual results with ______",
        "options": [
            "Premature results",
            "Specified standards and plans",
            "Expected results",
            "Preliminary results"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "An audit report is the __________ product of audit",
        "options": [
            "Final",
            "Main",
            "Semi final",
            "None of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Audit Procedures to obtain audit evidences include",
        "options": [
            "Substantive Procedure",
            "Compliance Procedure",
            "Both (A) and (B)",
            "Neither (A) nor (B)"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "An auditor should submit a Disclaimer of Opinion when",
        "options": [
            "he has certain reservations as to the presentation of truth and fairness in financial statements",
            "he is satisfied with the truth and fairness of financial statements",
            "some material information is not available",
            "the effect of any disagreement with the management is not so material"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "SA 230 stands for ___________________.",
        "options": [
            "Agreeing the terms of Audit engagements",
            "Quality control for an audit of financial Statements",
            "Responsibility of Joint Auditor",
            "Audit Documentation"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Audit is conducted to draw overall opinion on",
        "options": [
            "Income Statement",
            "Financial Statement",
            "Cost Statement",
            "None of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The purpose of internal audit is to protect the",
        "options": [
            "Assets",
            "Audit staff",
            "Management",
            "Accountant"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Form for Secretarial Audit Report is-",
        "options": [
            "MR-1",
            "MR-2",
            "MR-3",
            "MR-4"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The purpose of Internal audit is to detect the error in the;",
        "options": [
            "Employees records",
            "Accounting records",
            "Cash records",
            "Bank records"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Chartered Accountants have to retain the working papers for-",
        "options": [
            "1 yrs",
            "2 yrs",
            "5 yrs",
            "7 yrs"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "he meetings of Audit committee should be ______________ in a yea",
        "options": [
            "2",
            "3",
            "4",
            "5"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "SA 210 stands for-",
        "options": [
            "Agreeing the terms of Audit engagements.",
            "Quality control for an audit of financial Statements",
            "Responsibility of Joint Auditor",
            "Audit Documentation"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The __________ shall act as the secretary of the Audit Committee.",
        "options": [
            "Auditor",
            "Employee",
            "Company Secretary",
            "Chairman"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Check list contains the instruction to be followed by the \u2013",
        "options": [
            "Audit Assistants",
            "Internal Auditor",
            "Employee of the organization",
            "External Auditor"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The function of internal audit is meant for-",
        "options": [
            "Dearth of time",
            "Dearth of Staff",
            "Dearth of time and funds",
            "Dearth of funds"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "An auditor is required to retain the books of accounts for how long?",
        "options": [
            "3 yrs",
            "1 yrs",
            "7 yrs",
            "None of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Permanent Audit File does not contain",
        "options": [
            "significant audit observations of earlier years",
            "Permanent Audit File does not contain",
            "analysis of significant ratios and trends",
            "copies of management letters"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "A Cost Auditor submits his report to",
        "options": [
            "Government",
            "Shareholders",
            "Board of Directors",
            "Statutory Auditor"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "In case of a company other than a Government Company, any casual vacancy in the post of auditor is to be filled by the",
        "options": [
            "Comptroller and Auditor General (CAG)",
            "Board of Directors",
            "Managing Director",
            "Shareholders"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "While conducting audit of financial statement auditor need to comply with",
        "options": [
            "Cost Audit Standards",
            "Auditing Standards",
            "Secretarial standards",
            "None of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Statutory Auditor can be removed by the",
        "options": [
            "BOD",
            "Audit committee",
            "Shareholders",
            "None of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Review of internal control system is very important for the auditor as the effectives of internal control system will determine the extent of checking to be done by the:",
        "options": [
            "Auditor",
            "Accountant",
            "Management",
            "None of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "As per SQC 1, Audit working papers should be retained for a period of",
        "options": [
            "2 years",
            "5 years",
            "7 years",
            "10 years"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Unpaid dividend standing at the credit of Unpaid Dividend A/C should be transferred to Investor Education and Protection Fund after _______ years of its remaining unpaid.",
        "options": [
            "eight",
            "six",
            "seven",
            "five"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Current Audit file contains-",
        "options": [
            "Analysis of significant ratios and trends",
            "AOA and MOA of the company",
            "Audit programme",
            "Notes regarding significant accounting policies"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Form for maintenance of Cost Records by the Company is ____________________.",
        "options": [
            "CRA-1",
            "CRA-2",
            "CRA-3",
            "CRA-4"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Various types of quality audits are:",
        "options": [
            "Management (system)",
            "Registration (certification)",
            "Product",
            "All of above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Statutory Auditor is appointed by the shareholder in the",
        "options": [
            "Statutory Meeting",
            "Board Meetin",
            "General Meeting",
            "EGM"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The _________________ is also expected to provide the resources needed and select staff members to accompany the auditors.",
        "options": [
            "Client",
            "Auditor",
            "Internal audito",
            "Auditee"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Final Audit is known as ______.",
        "options": [
            "Internal Audit",
            "Tax Audit",
            "Annual Audit",
            "All of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Proving the truth means vouching of ___________________.",
        "options": [
            "Expenses",
            "Payment",
            "Liabilities",
            "Assets"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The most comprehensive type of audit is the ____ system audit, which examines suitability and effectiveness of the system as a whole.",
        "options": [
            "Quality",
            "Quantity",
            "Preliminary",
            "Sequential"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The purpose of internal audit is to determine liabilities of;",
        "options": [
            "Employees",
            "Employer",
            "Accountant",
            "External auditor"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "CAAT stands for-",
        "options": [
            "Cornwall Air Ambulance Trust",
            "Center for alternatives to Animal Testing",
            "Children Air Ambulance Trust",
            "Computer Assisted Auditing Technique"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Maximum term of Individual Auditor",
        "options": [
            "1 term of 5 years",
            "2 term of 5 years",
            "3 term of 5 years",
            "None of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "If the Debentures are issued as collateral security either to Banks or Creditors the Auditor needs to ensure that such issue is approved by",
        "options": [
            "Debenture Trustee",
            "Shareholders",
            "Audit Committee",
            "Board of Directors"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The first Auditor of a Company shall be appointed by the Board of Directors within",
        "options": [
            "30 days from the date of first AGM",
            "30 days from the date of registration",
            "90 days from the date of registration",
            "1 year from the date of registration"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Cost Audit can be done by the-",
        "options": [
            "Secretarial Auditor",
            "Employee of the organization",
            "Cost Auditor",
            "None of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "When the auditor is an employee of the organization being audited (auditee), the audit is classified as a ____ Quality audit",
        "options": [
            "External",
            "Internal",
            "Compliance",
            "Both A & B"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Secretarial Audit can be done by-",
        "options": [
            "Cost Auditor",
            "Employee of the organization",
            "Secretarial Auditor",
            "None of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Secretarial Audit is applicable to the public sector company having the turnover of-",
        "options": [
            "50 crore",
            "200 crore",
            "250 crore",
            "500 crore"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "An Audit Committee should have a minimum of ____________ number of directors.",
        "options": [
            "3",
            "4",
            "5",
            "6"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "SA 530 stands for",
        "options": [
            "Audit Sampling",
            "Audit Documentation",
            "Agreeing the terms of Audit Engagements",
            "Responsibility of Joint Auditor"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "A nomination and remuneration committee should have _____ directors.",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is not an audit risk?",
        "options": [
            "Control Risk",
            "Omission Risk",
            "Detection Risk",
            "Inherent Risk"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following services cannot be rendered by an auditor as per Companies Act 2013?",
        "options": [
            "Verification of assets and liabilities",
            "Vouching",
            "Providing investment advisory services",
            "Issuing certificates on relevant matters"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "SA 300 stands for __________.",
        "options": [
            "Audit Planning",
            "Responsibility of Joint Auditor",
            "Overall planning of audit",
            "None of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Ind AS 16 deals with:",
        "options": [
            "Leases",
            "Revenue from Contracts with Customers",
            "Property, Plant, and Equipment",
            "Financial Instruments"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Ind AS 38 deals with:",
        "options": [
            "Revenue recognition",
            "Intangible assets",
            "Tangible assets",
            "Borrowing costs"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Ind AS 33 relates to:",
        "options": [
            "Earnings Per Share",
            "Segment Reporting",
            "Income Taxes",
            "Inventories"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Ind AS 21 deals with:",
        "options": [
            "The Effects of Changes in Foreign Exchange Rates",
            "Segment Reporting",
            "Income Taxes",
            "Earnings Per Share"
        ],
        "answer": 0,
        "explanation": ""
    }
]
          },
          {
            label: "FM & BDA",
            questions:
            [
    {
        "question": "Time value of money explains that:",
        "options": [
            "a unit of money received today is worth more than a unit received in future",
            "a unit of money received today is worth less than a unit received in future",
            "a unit of money received today and at some other time in future is equal",
            "none of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Time value of money facilitates comparison of cash flows occurring at different time periods by:",
        "options": [
            "compounding all cash flows to a common point of time",
            "discounting all cash flows to a common point of time",
            "using either (1) or (2)",
            "neither (1) nor (2)."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "If the nominal rate of interest is 10 per cent per annum and frequency of compounding is 4 i.e. quarterly compounding, the effective rate of interest will be:",
        "options": [
            "10.25% per annum",
            "10.38% per annum",
            "10% per annum",
            "none of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Relationship between annual effective rate of interest and annual nominal rate of interest is, if frequency of compounding is more than 1:",
        "options": [
            "Effective Rate < Nominal rate",
            "Effective Rate > Nominal rate",
            "Effective Rate = Nominal rate",
            "none of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "If annual effective rate of interest is 10.25% per annum and nominal rate of return is 10% per annum what is the frequency of compounding?",
        "options": [
            "1",
            "3",
            "2",
            "4"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A student takes a loan of Rs. 50,000 from SBI. The rate of interest being charged by SBI is 10% per annum. What would be the amount of equal annual instalment if he wishes to pay it back in five instalments and first instalment, he will pay at the end of year 5?",
        "options": [
            "Rs. 11,000",
            "Rs. 19,310",
            "Rs. 15,000",
            "None of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "How much amount should an investor invest now in order to receive five annuities starting from the end of this year of Rs. 10,000 if the rate of interest offered by bank is 10% per annum?",
        "options": [
            "Rs. 40,000",
            "Rs. 45,000",
            "Rs. 37,910",
            "none of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A bank offers 12% compound interests payable quarterly. If you deposit Rs.2,000 now, how much it will grow at the end of 5 years?",
        "options": [
            "Rs.3,050",
            "Rs.3,430",
            "Rs.3,612",
            "Rs.3,722"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A company wants to repay a loan of Rs. 5,00,000, 10 years from today. What amount should it invest each year for 10 years if the funds can earn 8% per annum? The first investment will be made at the beginning of this year.",
        "options": [
            "Rs. 50,000",
            "Rs. 31,950",
            "Rs. 40,000",
            "Rs. 32,950"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Risk of two securities having different expected return can be compared with:",
        "options": [
            "standard deviation of securities",
            "variance of securities",
            "coefficient of variation",
            "mean"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A portfolio consists of two securities and the expected return on two securities is 12% and 16% respectively. Calculate return of portfolio if first security accounts for 40% of portfolio.",
        "options": [
            "0.14",
            "0.144",
            "0.16",
            "0.12"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "If the rate of interest is 12%, what are the doubling periods as per the rule 72 and the rule of 69 respectively?",
        "options": [
            "5 Years and 5.2 Years",
            "5.8 Years and 5.3 Years",
            "6 Years and 6.1 Years",
            "6.5 Years and 6.6 Years"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "To create a minimum variance portfolio, in what proportion should the two securities be mixed if the following information is given S1 = 10%, S2 = 12%, P12 = 0.6?",
        "options": [
            "0.72 and 0.28",
            "0.70 and 0.30",
            "0.60 and 0.40",
            "0.50 and 0.40"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "A portfolio consisting of two risky securities can be made risk less i.e., Sp = 0, if:",
        "options": [
            "the securities are perfectly positively correlated",
            "the securities are perfectly negatively correlated",
            "if the correlation ranges between 0 to 1",
            "if the correlation ranges between -1 to +1"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Efficient portfolios are those portfolios, which offer (for a given level of risk)",
        "options": [
            "maximum return",
            "minimum return",
            "average return",
            "positive return"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "CAPM accounts for -",
        "options": [
            "systematic risk",
            "unsystematic risk",
            "both of the above",
            "moderate risk"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Assets Management company is formed:",
        "options": [
            "To manage bank\u2019s assets",
            "To manage mutual funds investments",
            "To construct infrastructure projects",
            "To run a stock exchange"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Prime duty of a merchant banker is -",
        "options": [
            "Maintaining records of clients",
            "Giving loans to clients",
            "Working as a Capital Market Intermediary",
            "None of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Basic objective of a money market mutual fund is:",
        "options": [
            "Guaranteed rate of return",
            "Investment in short-term securities",
            "Both (1) and (2)",
            "None of (1) and (2)"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Short selling refers to:",
        "options": [
            "Buying shares and then selling them on the same day",
            "Selling shares without owning them",
            "Selling some shares out of a large holding",
            "Continuously selling shares in lots."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is not regulated by SEBI?",
        "options": [
            "Foreign Institutional Investors",
            "Foreign Direct Investment",
            "Mutual Funds",
            "Depositories"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is true for mutual funds in India?",
        "options": [
            "Exit load is not allowed",
            "Entry load is allowed",
            "Entry load is not allowed",
            "Exit load allowed is some cases"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is not available in India?",
        "options": [
            "Index Options",
            "Index Futures,",
            "Commodity Options",
            "Commodity Futures"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is the benefit of Depositories?",
        "options": [
            "Reduction in the share transfer time to the buyer",
            "Reduced Risk of stolen, fake, forged shares",
            "No Stamp duty on transfer of shares in dematerialized form",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Credit Rating of a debt security is:",
        "options": [
            "Guarantee of Repayment",
            "Merely opinion",
            "Positive suggestion",
            "Negative suggestion"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The first computerised online stock exchange in India was:",
        "options": [
            "NSE",
            "OTCEI",
            "BSE",
            "MCX"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following derivative is not traded on Indian Stock Market?",
        "options": [
            "Index Options",
            "Stock Futures",
            "Index Futures",
            "Forward Rate Agreements"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "How many depositories are there in India?",
        "options": [
            "2",
            "3",
            "0",
            "1"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Secondary Market in India is regulated by:",
        "options": [
            "Reserve Bank of India",
            "Securities and Exchange Board of India",
            "Ministry of Finance",
            "Forward Market Commission"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "_________ funds do not have a fixed date of redemption.",
        "options": [
            "Open ended funds",
            "Close ended funds",
            "Diversified funds",
            "Both A and B."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "In India, NIFTY and SENSEX are calculated on the basis of:",
        "options": [
            "Market Capitalization",
            "Paid up Capital",
            "Free-float Capitalization",
            "Authorized Share Capital"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The type of collateral (security) used for short-term loan is:",
        "options": [
            "Real estate",
            "Plant & Machinery",
            "Stock of good",
            "Equity share capital"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is a liability of a bank?",
        "options": [
            "Treasury Bills",
            "Commercial papers",
            "Certificate of Deposits",
            "Junk Bonds."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Commercial paper is a type of:",
        "options": [
            "Fixed coupon Bond",
            "Unsecured short-term debt",
            "Equity share capital",
            "Government Bond"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is not a spontaneous source of short-term funds?",
        "options": [
            "Trade credit",
            "Accrued expenses",
            "Provision for dividend",
            "All of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "In India, Commercial Papers are issued as per the lines issued by -",
        "options": [
            "Securities and Exchange Board of India",
            "Reserve Bank of India",
            "Forward Market Commission",
            "RBI"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Commercial paper are generally issued at a pries:",
        "options": [
            "Equal to face value",
            "More than face value",
            "Less than face value",
            "Equal to redemption value"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is not applicable to commercial paper?",
        "options": [
            "Face Value",
            "Issue Price",
            "Coupon Rate",
            "None of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Accounting Ratios are important tools used by \u2013",
        "options": [
            "Managers",
            "Researchers",
            "Investors",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Net Profit Ratio Signifies:",
        "options": [
            "Operational Profitability",
            "Liquidity Position",
            "Big-term Solvency",
            "Profit for Lenders"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Working Capital Turnover measures, the relationship of Working Capital with:",
        "options": [
            "Fixed Assets",
            "Sales",
            "Purchases",
            "Stock"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Dividend Pay-out Ratio is:",
        "options": [
            "PAT Capital",
            "DPS \u00f7 EPS",
            "Pref. Dividend \u00f7 PAT",
            "Pref. Dividend \u00f7 Equity Dividend"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "DuPont Analysis deals with:",
        "options": [
            "Analysis of Current Assets",
            "Analysis of Profit",
            "Capital Budgeting",
            "Analysis of Fixed Assets"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "In Net Profit Ratio, the denominator is:",
        "options": [
            "Net Purchases",
            "Net Sales",
            "Credit Sales",
            "Cost of goods sold"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Inventory Turnover measures the relationship of inventory with:",
        "options": [
            "Average Sales",
            "Cost of Goods Sold",
            "Total Purchases",
            "Total Assets"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The term \u2018EVA\u2019 is used for:",
        "options": [
            "Extra Value Analysis",
            "Economic Value Added",
            "Expected Value Analysis",
            "Engineering Value Analysis."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Return on Investment may be improved by:",
        "options": [
            "Increasing Turnover",
            "Reducing Expenses",
            "Increasing Capital Utilization",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "In Current Ratio, Current Assets are compared with:",
        "options": [
            "Current Profit",
            "Current Liabilities",
            "Fixed Assets",
            "Equity Share Capital"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "ABC Ltd. has a Current Ratio of 1.5: 1 and Net Current Assets of Rs. 5,00,000. What are the Current Assets?",
        "options": [
            "Rs. 5,00,000",
            "Rs. 10,00,000",
            "Rs. 15,00,000",
            "Rs. 25,00,000"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "There is deterioration in the management of working capital of XYZ Ltd. What does it refer to?",
        "options": [
            "That the Capital Employed has reduced",
            "That the Profitability has gone up",
            "That debtors collection period has increased",
            "That Sales has decreased"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following does not help to increase Current Ratio?",
        "options": [
            "Issue of Debentures to buy Stock",
            "Issue of Debentures to pay Creditors",
            "Sale of Investment to pay Creditors",
            "Avail Bank Overdraft to buy Machine"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Debt to Total Assets Ratio can be improved by:",
        "options": [
            "Borrowing More",
            "Issue of Debentures",
            "Issue of Equity Shares",
            "Redemption of Debt"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Ratio of Net Income to Number of Equity Shares known as:",
        "options": [
            "Price Earnings Ratio",
            "Net Profit Ratio",
            "Earnings per Share",
            "Dividend per Share"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Trend Analysis helps comparing performance of a firm -",
        "options": [
            "With other firms",
            "Over a period of firm",
            "With other industries",
            "With other companies"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A Current Ratio of less than one means:",
        "options": [
            "Current Liabilities < Current Assets",
            "Fixed Assets > Current Assets",
            "Current Assets < Current Liabilities",
            "Share Capital > Current Assets"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A firm has Capital of Rs. 10,00,000; Sales of Rs. 5,00,000; Gross Profit of Rs. 2,00,000 and Expenses of Rs. 1,00,000. What is the Net Profit Ratio?",
        "options": [
            "0.2",
            "0.5",
            "0.1",
            "0.4"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "XYZ Ltd. has earned 8% Return on Total Assests of Rs. 50,00,000 and has a Net Profit Ratio of 5%. Find out the Sales of the firm.",
        "options": [
            "Rs. 4,00,000",
            "Rs. 2,50,000",
            "Rs. 80,00,000",
            "Rs. 83,33,333"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Suppliers and Creditors of a firm are interested in:",
        "options": [
            "Profitability Position",
            "Liquidity Position",
            "Market Share Position",
            "Debt Position"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is a measure of Debt Service capacity of a firm?",
        "options": [
            "Current Ratio",
            "Acid Test Ratio",
            "Interest Coverage Ratio",
            "Debtors Turnover"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Gross Profit Ratio for a firm remains same but the Net Profit Ratio is decreasing. The reason for such behavior could be:",
        "options": [
            "Increase in Costs of Goods Sold",
            "If Increase in Expense",
            "Increase in Dividend",
            "Decrease in Sales"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following statements is correct?",
        "options": [
            "A Higher Receivable Turnover is not desirable",
            "Interest Coverage Ratio depends upon Tax Rate",
            "Increase in Net Profit Ratio means increase in Sales",
            "Lower Debt-Equity Ratio means lower Financial Risk"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Debt to Total Assets of a firm is 2. The Debt to Equity would be:",
        "options": [
            "0.8",
            "0.25",
            "1",
            "0.75"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following helps analysing return to equity Shareholders?",
        "options": [
            "Return on Assets",
            "Earnings Per Share",
            "Net Profit Ratio",
            "Return on Investment"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Return on Assets and Return on Investment Ratios belong to:",
        "options": [
            "Liquidity Ratios",
            "Profitability Ratios",
            "Solvency Ratios",
            "Turnover"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "XYZ Ltd. has a Debt Equity Ratio of 1.5 as compared to 1.3 Industry average. It means that the firm has:",
        "options": [
            "Higher Liquidity",
            "Higher Financial Risk",
            "Higher Profitability",
            "Higher Capital Employed"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Ratio Analysis can be used to study liquidity, turnover, profitability, etc. of a firm. What does Debt-Equity Ratio help to study?",
        "options": [
            "Solvency",
            "Liquidity",
            "Profitability",
            "Turnover"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "In Inventory Turnover calculation, what is taken in the numerator?",
        "options": [
            "Sales",
            "Cost of Goods Sold",
            "Opening Stock",
            "Closing Stock"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Statement of cash flows are included in:",
        "options": [
            "Ind AS - 3",
            "Ind AS - 6",
            "Ind AS - 7",
            "Ind AS - 113"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Cost of capital refers to:",
        "options": [
            "Flotation Cost",
            "Dividend",
            "Required Rate of Return",
            "None of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following sources of funds has an implicit cost of capital?",
        "options": [
            "Equity Share Capital",
            "Preference Share Capital",
            "Debentures",
            "Retained earnings"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following has the highest cost of capital?",
        "options": [
            "Equity shares",
            "Loans",
            "Bonds",
            "Preference shares"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Cost of capital for Government securities is also known as:",
        "options": [
            "Risk-free Rate of Interest",
            "Maximum Rate of Return",
            "Rate of Interest on Fixed Deposits",
            "None of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Cost of capital for bonds and debentures is calculated on:",
        "options": [
            "Before Tax basis",
            "After Tax basis",
            "Risk-free Rate of Interest basis",
            "Compound interest"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Weighted Average Cost of Capital (WACC) is generally denoted by:",
        "options": [
            "k_{a}",
            "k_{w}",
            "k_{0}",
            "k_{c}"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following cost of capital require tax adjustment?",
        "options": [
            "Cost of Equity Shares",
            "Cost of Preference Shares",
            "Cost of Debentures",
            "Cost of Retained Earnings"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which is the most expensive source of funds?",
        "options": [
            "New Equity Shares",
            "New Preference Shares",
            "New Debts",
            "Retained Earnings"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Marginal cost of capital is the cost of:",
        "options": [
            "Additional Sales",
            "Additional Funds",
            "Additional Interests",
            "Additional Revenue"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "In case the firm is all-equity financed, the WACC would be equal to:",
        "options": [
            "Cost of Debt",
            "Cost of Equity",
            "Neither (1) nor (2)",
            "Both (1) and (2)"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "In order to calculate Weighted Average Cost of capitals (WACC) weights may be based on:",
        "options": [
            "Market Values",
            "Target Values",
            "Book Values",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Firm\u2019s cost of capital is the average cost of:",
        "options": [
            "All sources",
            "All borrowings",
            "Share capital",
            "Share, Bonds and Debentures"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "An implicit cost of increasing proportion of debt is:",
        "options": [
            "Tax should would not be available on new debt",
            "P/E Ratio would increase",
            "Equity shareholders would demand higher return",
            "Rate of Return of the company would decrease."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Cost of redeemable preference share capital is:",
        "options": [
            "Rate of Dividend",
            "After Tax Rate of Dividend",
            "Discount Rate that equates PV of inflows and out-flows relating to capital",
            "None of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is true?",
        "options": [
            "Retained earnings are cost free",
            "External Equity is cheaper than Internal Equity",
            "Retained Earnings are cheaper than External Equity",
            "Retained Earnings are costlier than External Equity"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Capital Budgeting is a part of:",
        "options": [
            "Investment Decision",
            "Working Capital Management",
            "Marketing Management",
            "Capital Structure"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Capital Budgeting deals with:",
        "options": [
            "Long-term Decisions",
            "Short-term Decisions",
            "Both (1) and (2)",
            "Neither (1) nor (2)"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is not used in Capital Budgeting?",
        "options": [
            "Time Value of Money",
            "Sensitivity Analysis",
            "Net Assets Method",
            "Cash Flows"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Capital Budgeting Decisions are:",
        "options": [
            "Reversible",
            "Irreversible",
            "Unimportant",
            "All of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is not incorporated in Capital Budgeting?",
        "options": [
            "Tax-Effect",
            "Time Value of Money",
            "Required Rate of Return",
            "Rate of Cash Discount"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is not a capital budgeting decision?",
        "options": [
            "Expansion Programme",
            "Merger",
            "Replacement of an Asset",
            "Inventory Level"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "A sound Capital Budgeting technique is based on:",
        "options": [
            "Cash Flows",
            "Accounting Profit",
            "Interest Rate on Borrowings",
            "Last Dividend Paid"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is not a relevant cost in Capital Budgeting?",
        "options": [
            "Sunk Cost",
            "Opportunity Cost",
            "Allocated Overheads",
            "Both (1) and (3) above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Capital Budgeting Decisions are based on:",
        "options": [
            "Incremental Profit",
            "Incremental Cash Flows",
            "Incremental Assets",
            "Incremental Capital"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following does not effect cash flows proposal?",
        "options": [
            "Salvage Value",
            "Depreciation Amount",
            "Tax Rate Change",
            "Method of Project Financing"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Cash Inflows from a project include:",
        "options": [
            "Tax Shield of Depreciation",
            "After-tax Operating Profits",
            "Raising of Funds",
            "Both (1) and (2)"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is not true with reference capital budgeting?",
        "options": [
            "Capital budgeting is related to asset replacement decisions",
            "Cost of capital is equal to minimum required return",
            "Existing investment in a project is not treated as sunk cost",
            "Timing of cash flows is relevant"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is not followed in capital budgeting?",
        "options": [
            "Cash flows Principle",
            "Interest Exclusion Principle",
            "Accrual Principle",
            "Post-tax Principle"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Depreciation is incorporated in cash flows because it:",
        "options": [
            "Is unavoidable cost",
            "Is a cash flow",
            "Reduces Tax liability",
            "Involves an outflow"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is not true for capital budgeting?",
        "options": [
            "Sunk costs are ignored",
            "Opportunity costs are excluded",
            "Incremental cash flows are considered",
            "Relevant cash flows are considered"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is not applied in capital budgeting?",
        "options": [
            "Cash flows be calculated in incremental terms",
            "All costs and benefits are measured on cash basis",
            "All accrued costs and revenues be incorporated",
            "All benefits are measured on after-tax basis"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Evaluation of Capital Budgeting proposals is based on Cash Flows because:",
        "options": [
            "Cash Flows are easy to calculate",
            "Cash Flows are suggested by SEBI",
            "Cash is more important than profit",
            "Cash Flows are suggested by RBI"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is not included in incremental A flows?",
        "options": [
            "Opportunity Costs",
            "Sunk Costs",
            "Change in Working Capital",
            "Inflation effect"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A proposal is not a Capital Budgeting proposal if it:",
        "options": [
            "is related to Fixed Assets",
            "brings long-term benefits",
            "brings short-term benefits only",
            "has very large investment"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "In Capital Budgeting, Sunk cost is excluded because it is:",
        "options": [
            "of small amount",
            "not incremental",
            "not reversible",
            "All of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Savings in respect of a cost is treated in capital budgeting as:",
        "options": [
            "An Inflow",
            "An Outflow",
            "Opening balance",
            "Closing balance"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "____________ ignores the time value of money.",
        "options": [
            "Internal Rate of Return (IRR)",
            "Average Rate of Return (ARR)",
            "Net Present Value (NPV)",
            "Profitability Index (PI)"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The discounted cash flows techniques are:",
        "options": [
            "Net Present Value (NPV)",
            "Internal Rate of Return (IRR)",
            "Profitability Index (PI)",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Working capital is calculated as _____.",
        "options": [
            "Core current assets less core current liabilities",
            "Current assets less current liabilities",
            "Core current assets less current liabilities",
            "Liquid assets less current liabilities"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The basic current liabilities are _____.",
        "options": [
            "accounts payable and bills payable",
            "bank overdraft",
            "outstanding expenses",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "There are two concepts of working capital \u2013 gross and ____",
        "options": [
            "Zero",
            "Net",
            "Cumulative",
            "distinctive"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Working capital is also known as___ capital.",
        "options": [
            "Current asset",
            "Operating",
            "Projecting",
            "Operation capital"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "______ working Capital refers to the firm\u2019s investment in current assets.",
        "options": [
            "Zero",
            "Net",
            "Gross",
            "Distinctive"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "In finance, \u201cworking capital\u201d means the same thing as _______ assets.",
        "options": [
            "Current",
            "Fixed",
            "Total",
            "All of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "______ working capital refers to the difference between current assets and current liabilities.",
        "options": [
            "Zero",
            "Net",
            "Gross",
            "Distinctive"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A _______ net working capital will arise when current assets exceed current liabilities.",
        "options": [
            "Summative",
            "Negative",
            "Excessive",
            "Positive"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "A ______ net working capital occurs when current liabilities are in excess of current assets.",
        "options": [
            "Positive",
            "Negative",
            "Excessive",
            "Zero"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "X Ltd. distributes its products to more than 500 retailers. The company\u2019s collection period is 30 days and keeps its inventory for 20 days. The operating cycle would be:",
        "options": [
            "40 Days",
            "43 Days",
            "45 Days",
            "50 Days"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "________ refers to the funds, which an organisation must possess to finance its day to day operations.",
        "options": [
            "Retained earnings",
            "Fixed capital",
            "Working Capital",
            "All of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Investment in current assets should be _____",
        "options": [
            "just adequate",
            "more",
            "less",
            "maximum"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "_______ varies inversely with profitability.",
        "options": [
            "Risk",
            "Assets",
            "Liquidity",
            "Revenue"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Capital intensive firms rely on ______",
        "options": [
            "debt",
            "retained earnings",
            "short term debts",
            "equity"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "On the basis of _____, working capital is classified as gross working capital and net working capital.",
        "options": [
            "concept",
            "time",
            "future",
            "work"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "______ cycle analyzes the accounts receivable, inventory, and accounts payable cycles in terms of a number of days?",
        "options": [
            "Business",
            "Current asset",
            "Operation",
            "Operating"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "_______ method is not used for calculating working capital cycle.",
        "options": [
            "Trial and error method",
            "Regression analysis method",
            "Percentage of sales method",
            "Operating cycle approach"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "On the basis of _____, working capital may be classified as: 1) Permanent or fixed working capital. 2) Temporary or variable working capital.",
        "options": [
            "concept",
            "time",
            "future",
            "work"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Operating cycle is also called as _____",
        "options": [
            "Business cycle",
            "Working capital cycle",
            "Working cycle",
            "Current asset cycle"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Spontaneous financing consists of ______",
        "options": [
            "a line of credit",
            "short-term loans",
            "accounts receivable",
            "accounts payable"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Conversation of marketable securities into cash entails a fixed cost of Rs.1,000 per transaction. What will be the optimal conversation size as per Baumol model of cash management?",
        "options": [
            "Rs. 315,628",
            "Rs. 316,228",
            "Rs. 317,678",
            "Rs. 318,426"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Average collection period is 2 months, cash sales and average receivables are Rs.5,00,000 and Rs.6,50,000 respectively. The sales amount would be-",
        "options": [
            "Rs. 40,00,000",
            "Rs. 42,00,000",
            "Rs. 44,00,000",
            "Rs. 48,50,000"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "If the current ratio is 2.4:1 and working capital is Rs.25,20,000, find the amount of current assets and current liabilities.",
        "options": [
            "Current Assets Rs. 43,20,000 and Current Liabilities Rs.18,00,000",
            "Current Assets Rs. 44,00,000 and Current Liabilities Rs.18,50,000",
            "Current Assets Rs. 45,50,000 and Current Liabilities Rs. 19,00,000",
            "Current Assets Rs. 46,60,000 and Current Liabilities Rs. 19,30,000"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Operating leverage helps in analysis of:",
        "options": [
            "Business Risk",
            "Financing Risk",
            "Production Risk",
            "Credit Risk"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is studied with the help of financial leverage?",
        "options": [
            "Marketing Risk",
            "Interest Rate Risk",
            "Foreign Exchange Risk",
            "Financing risk"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Combined Leverage is obtained from OL and FL by their:",
        "options": [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Any of these"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "High degree of financial leverage means:",
        "options": [
            "High debt proportion",
            "Lower debt proportion",
            "Equal debt and equity",
            "No debt"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Operating leverage arises because of:",
        "options": [
            "Fixed Cost of Production",
            "Fixed Interest Cost",
            "Variable Cost",
            "Step Cost"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Financial Leverage arises because of:",
        "options": [
            "Fixed cost of production",
            "Variable Cost",
            "Interest Cost",
            "Step Cost"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Operating Leverage is calculated as:",
        "options": [
            "Contribution \u00f7 EBIT",
            "EBIT\u00f7PBT",
            "EBIT \u00f7Interest",
            "EBIT \u00f7Tax"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Financial Leverage is calculated as:",
        "options": [
            "EBIT\u00f7 Contribution",
            "EBIT\u00f7 PBT",
            "EBIT\u00f7 Sales",
            "EBIT \u00f7 Variable Cost"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which combination is generally good for firms?",
        "options": [
            "High Operating leverage, High Financial leverage",
            "Low Operating leverage, Low Financial leverage",
            "High Operating leverage, Low Financial leverage",
            "ModerateOperating leverage. Moderate Financial leverage"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Combined leverage can be used to measure the relationship between:",
        "options": [
            "EBIT and EPS",
            "PAT and EPS",
            "Sales and EPS",
            "Sales and EBIT"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Financial Leverage is zero if:",
        "options": [
            "EBIT = Interest",
            "EBIT = Zero",
            "EBIT = Fixed Cost",
            "EBIT = Pref. Dividend"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Business risk can be measured by:",
        "options": [
            "Financial leverage",
            "Operating leverage",
            "Combined leverage",
            "All of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Financial Leverage measures relationship between",
        "options": [
            "EBIT and PBT",
            "EBIT and EPS",
            "Sales and PBT",
            "Sales and EPS"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Use of Preference Share Capital in Capital structure",
        "options": [
            "Increases Operating leverage",
            "Increases Financial leverage",
            "Decreases Operating leverage",
            "Decreases Financial leverage"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Relationship between change in sales and change in EPS is measured by:",
        "options": [
            "Financial leverage",
            "Combined leverage",
            "Operating leverage",
            "All of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Numerical data may be expressed as:",
        "options": [
            "In the form of text",
            "In the form of numbers",
            "In the form of images",
            "All of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The descriptive data may be deciphered as:",
        "options": [
            "May be deciphered in the form of qualitative information",
            "May be deciphered in the form of quantitative information",
            "May be deciphered in the form of information from informal sources",
            "All of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Data represented in the form of picture is termed as:",
        "options": [
            "Graphic data",
            "Qualitative data",
            "Quantitative data",
            "All of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is/are the reason for digitization?",
        "options": [
            "Helps in work processing",
            "Requires less physical storage space",
            "Digitized records may be accessed by more than one person simultaneously",
            "All of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "To make the data turn into user friendly information, it should go one/more of following core steps:",
        "options": [
            "Collection of data",
            "Organising the data",
            "Data processing",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Any data expressed as a number is a ____________ data.",
        "options": [
            "graphical",
            "descriptive",
            "numerical",
            "None of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Classifying equities into small-cap, mid-cap, and large-cap categories are the examples of _________ Scale",
        "options": [
            "Nominal",
            "Ordinal",
            "Interval",
            "Ratio"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is a phase for a process of digitization?",
        "options": [
            "Justification of the proposed digitization project",
            "Assessment",
            "Planning",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Data science plays an important role in:",
        "options": [
            "Risk analytics",
            "Customer data management",
            "Consumer analytics",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The primary benefit of data distribution is:",
        "options": [
            "the estimation of the probability of any certain observation within a sample space",
            "the estimation of the probability of any certain observation within a non-sample space",
            "the estimation of the probability of any certain observation within a population",
            "the estimation of the probability of any certain observation without a non-sample space"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Binomial distribution applies to attributes:",
        "options": [
            "that are categorised into two mutually exclusive and exhaustive classes",
            "that are categorised into three mutually exclusive and exhaustive classes",
            "that are categorised into less than two mutually exclusive and exhaustive classes",
            "that are categorised into four mutually exclusive and exhaustive classes"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The geometric distribution is a discrete distribution that assesses:",
        "options": [
            "the probability of the occurrence of the first success",
            "the probability of the occurrence of the second success",
            "the probability of the occurrence of the third success",
            "the probability of the occurrence of the less success"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The probability density function describes:",
        "options": [
            "the characteristics of a random variable",
            "the characteristics of a non-random variable",
            "the characteristics of a random constant",
            "the characteristics of a non-random constant"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "When independent variables with standard normal distribution are squared and added, the _________ distribution occurs.",
        "options": [
            "Normal",
            "Chi square",
            "Exponential",
            "Lognormal"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The procedure that organises data into a meaningful order to make it simpler to comprehend, analyse, and visualise, is called _____________",
        "options": [
            "Data validation",
            "Data sorting",
            "Data aggregation",
            "Data analysis"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Following is a widely used graph for data Visualisation:",
        "options": [
            "Bar chart",
            "Pie chart",
            "Histogram",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Following are the objectives of data visualisation:",
        "options": [
            "Making a better data analysis",
            "Faster decision making",
            "Analysing complicated data",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Following are the scope of DPA:",
        "options": [
            "Defining significant meaning (relevant information) required by each audience member in every scenario.",
            "Obtaining the proper data (focus area, historic reach, extensiveness, level of detail, etc.)",
            "Determining the needed frequency of data refreshes (the currency of the data)",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Maps may be used for displaying:",
        "options": [
            "Pincode",
            "Country name",
            "State abbreviation",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "A scatter plot displays several unique data points:",
        "options": [
            "on a single graph",
            "On two different graphs",
            "On four different graphs",
            "None of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "A ___________ chart depicts tasks that must be accomplished before others may begin, as well as the allocation of resources.",
        "options": [
            "Bubble",
            "Gantt",
            "Scatter",
            "Density"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "____________ is a set of skills that aims to identify, find, modify, format, and present data in a manner that ideally conveys meaning and provides insight.",
        "options": [
            "Data Presentation Architecture",
            "Data Presentation Hierarchy",
            "Data Visualization Architecture",
            "None of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is a data discovery platform that enables users to make quicker, more informed choices by speeding analytics, uncovering new business insights, and enhancing the precision of outcomes?",
        "options": [
            "Microsoft Excel",
            "Microsoft Power BI",
            "QlikView",
            "Tableau"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is/ are the benefit/ benefits of data analytics?",
        "options": [
            "Improves decision making process",
            "Increase in efficiency of operations",
            "Improved service to stakeholders",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is/ are the technique/s of data mining?",
        "options": [
            "Association rules",
            "Neural network",
            "Decision tree",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "XML is the abbreviated form of:",
        "options": [
            "Extensible mark-up language",
            "Extended mark-up language",
            "Extendable mark-up language",
            "Extensive mark-up language"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "XBRL is the abbreviated form of:",
        "options": [
            "eXtensible Business Reporting Language",
            "eXtensive Business Reporting Language",
            "eXtended Business Reporting Language",
            "eXtensive Business Reporting Language"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is/ are the types of cloud computing?",
        "options": [
            "Private cloud",
            "Public cloud",
            "Hybrid cloud",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "On the basis of the type of \u201csignal\u201d or \u201cfeedback\u201d provided to the learning system, which of the following is not a type of machine learning?",
        "options": [
            "Supervised learning",
            "Unsupervised learning",
            "Semi supervised learning",
            "Robotic Process learning"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "In recent years, business intelligence has expanded to incorporate more procedures and activities designed to enhance performance. These procedures consist of:",
        "options": [
            "Data mining",
            "Reporting",
            "Querying",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "What does the term \"break-even point\" refer to?",
        "options": [
            "The point where expenses are double the income",
            "The point at which total revenue equals total costs",
            "The point where profits are at their maximum",
            "The time when a firm repays its debts"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Why is it important for a firm to move far from the break-even point?",
        "options": [
            "To increase tax liabilities",
            "To attract new investors",
            "To ensure survival against seasonal fluctuations",
            "To avoid employee layoffs"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "What is one reason profit maximization is criticized?",
        "options": [
            "It enhances employee satisfaction",
            "It increases the firm's equity base",
            "It can lead to exploitation of workers and consumers",
            "It ensures long-term sustainability"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "What is a key assumption of the time value of money concept in financial decision-making?",
        "options": [
            "The timing of cash flows affects their value",
            "Cash flows occur at the same time",
            "Money depreciates automatically",
            "Interest rates have no impact on investment"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "In which situation is the time value of money most relevant?",
        "options": [
            "Evaluating historical costs",
            "Budgeting fixed expenses",
            "Recording daily transactions",
            "Comparing cash flows at different points in time"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "What is the present value of \u20b92,000 receivable 5 years from now at an 8% annual discount rate?",
        "options": [
            "1500",
            "1200.5",
            "1361.73",
            "1750.2"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "If the future value remains the same, what happens to present value if the time period increases?",
        "options": [
            "Present value decreases",
            "Present value increases",
            "Present value remains unchanged",
            "Present value becomes zero"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "What type of risk is caused by factors that affect the entire market or economy?",
        "options": [
            "Unsystematic Risk",
            "Credit Risk",
            "Systematic Risk",
            "Default Risk"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Given: Beta = 1.2, Risk-free rate = 4%, Expected market return = 12%. What is the expected return on the security?",
        "options": [
            "0.12",
            "0.104",
            "0.136",
            "0.152"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "SPO refers to___________ , the second and subsequent time a company raises money from the public directly.",
        "options": [
            "Secondary Public Offering",
            "Second Public Offering",
            "Subsequent Public Offer",
            "Subsequent Public Offering"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is an example of a non-banking financial intermediary?",
        "options": [
            "LIC (Life Insurance Corporation)",
            "Reserve Bank of India",
            "State Bank of India",
            "Ministry of Finance"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "What is the primary role of the Reserve Bank of India (RBI)?",
        "options": [
            "To collect taxes from citizens",
            "To maintain India\u2019s monetary and financial stability",
            "To manage public sector banks",
            "To regulate stock markets"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is an example of a sector that may receive refinance support from RBI?",
        "options": [
            "Real estate",
            "Film industry",
            "Retail trade",
            "Export sector"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following assets can be used to maintain Statutory Liquidity Ratio (SLR)?",
        "options": [
            "Personal loans",
            "Government securities, cash, and gold",
            "Real estate investments",
            "Corporate shares"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "What is the purpose of maintaining CRR?",
        "options": [
            "To increase bank profits",
            "To control inflation only",
            "To ensure banks have enough cash to meet withdrawal needs",
            "To promote stock market investments"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "What does the Liquidity Adjustment Facility (LAF) primarily deal with?",
        "options": [
            "Managing long-term loans to the government",
            "Daily liquidity injection and absorption through repo and reverse repo",
            "Regulating foreign exchange reserves",
            "Issuing new currency notes"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "An increase in Repo Rate by RBI is generally aimed at:",
        "options": [
            "Controlling inflation by making borrowing costlier",
            "Encouraging borrowing by banks",
            "Boosting exports",
            "Reducing the cash reserve ratio"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "What is the main purpose of Open Market Operations (OMO)?",
        "options": [
            "To fund government spending",
            "To control stock market volatility",
            "To regulate medium-term liquidity in the economy",
            "To provide long-term capital to banks"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Who is the sole authority for issuing currency notes in India?",
        "options": [
            "Ministry of Finance",
            "State Bank of India",
            "Reserve Bank of India",
            "Indian Banks\u2019 Association"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The increasing importance of the foreign exchange market in India is due to:",
        "options": [
            "A decline in international investments",
            "India's isolation from global markets",
            "Restriction on currency exchange",
            "Increased trade and capital flows"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is empowered to issue, renew, modify, suspend, or cancel registration certificates of insurers?",
        "options": [
            "IRDA",
            "SEBI",
            "RBI",
            "LIC"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Who supervises the functioning of the Tariff Advisory Committee?",
        "options": [
            "LIC",
            "RBI",
            "SEBI",
            "IRDA"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "IRDA has the power to specify how insurers should:",
        "options": [
            "File for bankruptcy",
            "Maintain and report their accounts",
            "Manage real estate",
            "Issue credit cards"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "How can an Angel Fund raise money?",
        "options": [
            "Through bank loans",
            "By issuing shares to the public",
            "By issuing units to angel investors",
            "By crowdfunding platforms"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Compared to mutual funds, hedge funds are:",
        "options": [
            "More regulated",
            "Less regulated",
            "Equally regulated",
            "Regulated by RBI"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A major characteristic of hedge fund returns is:",
        "options": [
            "Guaranteed fixed returns",
            "High correlation with equity markets",
            "Consistency of returns and capital preservation",
            "Government-backed guarantees"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is a feature of hedge funds?",
        "options": [
            "Investment only in government securities",
            "Strict adherence to equity-only investment",
            "Flexibility in investment options",
            "Tax-free returns"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "What is the main function of SEBI as per its preamble?",
        "options": [
            "To protect investors and regulate the securities market",
            "To promote foreign direct investment",
            "To regulate banks and insurance companies",
            "To provide loans to startups"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "What is another name for the Primary Market?",
        "options": [
            "Old issue market",
            "New issue market",
            "Secondary market",
            "Derivatives market"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "What is another name for the Secondary Market?",
        "options": [
            "New issue market",
            "Bond market",
            "Derivatives market",
            "Stock market"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Who introduced Masala Bonds in India?",
        "options": [
            "Reserve Bank of India",
            "World Bank",
            "International Finance Corporation (IFC)",
            "Ministry of Finance"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Insider trading becomes illegal when:",
        "options": [
            "Done by a foreign investor",
            "It leads to a rise in share price",
            "It is based on confidential information not available to the public",
            "It is done through a SEBI-registered broker"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "What does the repo rate represent?",
        "options": [
            "The inflation rate in the economy",
            "The annual interest rate earned on a repo transaction",
            "The profit earned from securities",
            "The tax rate on capital gains"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "XYZ Ltd. has a Current Ratio of 3: 1 and Net Current Assets of 10,00,000. What are the Current Assets?",
        "options": [
            "1000000",
            "1200000",
            "1500000",
            "2000000"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "A firm has Capital of 18,00,000; Sales of 9,00,000; Gross Profit of 3,00,000 and Expenses of 1,50,000. What is the Net Profit Ratio?",
        "options": [
            "0.1",
            "0.1667",
            "0.2",
            "0.25"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Current Assets \u20b950,00,000; Current Liabilities \u20b920,00,000; and Stock \u20b910,00,000. What is the Liquid Ratio?",
        "options": [
            "1.5 times",
            "2 times",
            "2.5 times",
            "1.75 times"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "JK Ltd. has a gearing of 40%. Its cost of equity is 18%, and the cost of debt is 12%. The company\u2019s WACC is:",
        "options": [
            "0.156",
            "0.162",
            "0.132",
            "0.128"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "X Ltd. has issued a 10% perpetual debt of \u20b91,00,000 at par. The tax rate is 35%. What is the cost of capital?",
        "options": [
            "10% before tax; 6.5% after tax",
            "6.5% before tax; 10% after tax",
            "10% before tax; 3.5% after tax",
            "6.5% before tax; 6.5% after tax"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Using the CAPM approach, determine the cost of equity capital from the following data:Risk-free rate = 8% Market return = 13%Beta of the firm = 1.6",
        "options": [
            "0.13",
            "0.16",
            "0.15",
            "0.18"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Calculate the cost of equity capital of Mamon Ltd., whose risk-free rate is 10%, beta is 1.75, and market return is 15%.",
        "options": [
            "0.1725",
            "0.1875",
            "0.165",
            "0.1925"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Net Income Approach to capital structure decision was proposed by ________",
        "options": [
            "J. E. Walter",
            "D. Durand",
            "E. Solomon",
            "M.H. Miller and D. Orr"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "If a firm has a DOL of 3.5, it means:",
        "options": [
            "If sales increase by 3.5%, the EBIT will increase by 1%",
            "If EBIT increases by 3.5%, the EPS will increase by 1%",
            "If sales rise by 1%, EBIT will rise by 3.5%",
            "None of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The Degree of Operating Leverage and Degree of Financial Leverage of VINTEX LTD. are 2.00 and 1.5 respectively. What will be the percentage change in EPS if the sales increase by 10%?",
        "options": [
            "10% increase",
            "30% increase",
            "35% increase",
            "15% increase"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "What is data?",
        "options": [
            "Processed facts and figures with meaning",
            "Raw facts and figures, often numbers or text strings",
            "Analysis of information for decision making",
            "Knowledge gained from experience"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following represents the correct flow from raw input to decision making?",
        "options": [
            "Knowledge \u2192 Data \u2192 Information",
            "Data \u2192 Knowledge \u2192 Information",
            "Information \u2192 Data \u2192 Knowledge",
            "Data \u2192 Information \u2192 Knowledge"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is an example of quantitative financial data?",
        "options": [
            "Management discussion and analysis in text",
            "Stock price data",
            "Executive interviews on business channels",
            "Video presentations"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Qualitative financial data can be in the form of:",
        "options": [
            "Financial statements",
            "Stock prices",
            "Text, videos, and audio",
            "Numerical tables"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is easier after digitization?",
        "options": [
            "Reusing very large maps or data from microfilms",
            "Increasing the size of physical files",
            "Preventing data backups",
            "Limiting data access to a single location"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Digitization requires:",
        "options": [
            "More physical storage space",
            "Less physical storage space",
            "No changes in storage requirements",
            "More manual filing"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is a benefit of digitization during disasters?",
        "options": [
            "Makes backup files harder to retrieve",
            "Easier to keep backup files and retrieve data during unexpected disasters",
            "Increases physical storage space requirements",
            "Limits access to one location only"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Resources that may face quick destruction should be:",
        "options": [
            "Ignored",
            "Stored for later",
            "Given low priority",
            "Prioritized for early digitization"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "In which phase is it decided whether digitization will be done in-house or outsourced?",
        "options": [
            "Justification",
            "Assessment",
            "Planning",
            "Digitization activities"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which phase includes deciding the digitization format (e.g. consolidated or detailed)?",
        "options": [
            "Justification",
            "Assessment",
            "Planning",
            "Editing"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is NOT part of the care of digitized records?",
        "options": [
            "Intellectual control over data",
            "Permission for accession of data",
            "Editing and cropping",
            "Maintenance and upkeeping"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "In which currency is a GDR typically denominated?",
        "options": [
            "Local currency",
            "British Pound",
            "Indian Rupee",
            "US Dollar"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Who facilitates the conversion of GDRs into underlying shares?",
        "options": [
            "Stock exchanges",
            "Government agencies",
            "Depository or custodian banks",
            "Mutual funds"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "What formula is used to calculate the cost of equity capital under the CAPM model?",
        "options": [
            "Ke = Rf \u00d7 \u03b2(Rm - Rf)",
            "Ke = Rm + Rf + \u03b2",
            "Ke = Rf + \u03b2(Rm - Rf)",
            "Ke = Rm \u00d7 \u03b2 + Rf"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "If the risk-free rate is 14%, the market return is 18%, and \u03b2 = 1, what is the cost of equity?",
        "options": [
            "0.14",
            "0.16",
            "0.18",
            "0.2"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "What is the formula for calculating the cost of retained earnings (kr)?",
        "options": [
            "kr = ke \u00d7 (1 + t) \u00d7 (1 + b)",
            "kr = ke \u00d7 (1 \u2013 t) \u00d7 (1 \u2013 b)",
            "kr = ke \u00f7 (1 \u2013 t)",
            "kr = ke \u00d7 t \u00d7 b"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Company X issues 11% bonds of 100 for an amount aggregating 200,000 at 10% premium, redeemable at par after 5 years. Corporate tax rate is 35%. The cost of bonds would be:",
        "options": [
            "0.049",
            "0.05",
            "0.052",
            "0.06"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Ramya Ltd.\u2019s share beta factor is 1.40. The risk free rate of interest of government securities is 9%. The expected rate of return on the company equity shares is 16%. The cost of equity capital based on CAPM is:",
        "options": [
            "0.09",
            "0.16",
            "0.188",
            "0.158"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "What does a positive Net Present Value (NPV) indicate about a project?",
        "options": [
            "The project generates returns lower than the firm's required rate",
            "The project will result in a loss",
            "The project earns a return higher than the required rate",
            "The firm should reject the project"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "A company has the following data: Sales: 2,00,000 Variable Costs: \u20b9160,000 Fixed Costs: \u20b920,000 What is the Degree of Operating Leverage (DOL)?",
        "options": [
            "1.5",
            "2",
            "2.5",
            "3"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A firm has: DOL = 4.0 DFL = 3.5 What is the Degree of Combined Leverage (DCL)?",
        "options": [
            "2.5",
            "3.5",
            "6",
            "14"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "According to Walter's Model, when should a company retain its earnings?",
        "options": [
            "- When return (r) < cost of capital (k)",
            "- When return (r) = cost of capital (k)",
            "- When return (r) > cost of capital (k)",
            ". When the company has surplus cash"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "If EBIT is \u20b92,50,000 and Net Sales are \u20b912,00,000, what is the Operating Profit Ratio?",
        "options": [
            "0.185",
            "0.2083",
            "0.215",
            "0.25"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Operating Profit is also known as:",
        "options": [
            "Net Profit",
            "Gross Profit",
            "EBIT",
            "EBT"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "What is the formula for Operating Profit Ratio?",
        "options": [
            "EBIT \u00f7 Total Assets \u00d7 100",
            "Net Profit \u00f7 Net Sales \u00d7 100",
            "Gross Profit \u00f7 Net Sales \u00d7 100",
            "EBIT \u00f7 Net Sales \u00d7 100"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "If the Cost of Goods Sold (COGS) is \u20b98,00,000 and the Average Inventory is \u20b92,00,000, what is the Inventory Turnover Ratio?",
        "options": [
            "4 times",
            "6 times",
            "7 times",
            "5 times"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A company has the following data: Net Credit Purchases \u20b912,00,000, Opening Accounts Payable \u20b94,00,000, Closing Accounts Payable \u20b98,00,000. What is the Creditors Turnover Ratio?",
        "options": [
            "1.5 times",
            "2 times",
            "2.5 times",
            "3 times"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A company reports Net Annual Sales of \u20b920,00,000 and has Working Capital of \u20b95,00,000. What is the Working Capital Turnover Ratio?",
        "options": [
            "2.5 times",
            "4 times",
            "3 times",
            "10 times"
        ],
        "answer": 2,
        "explanation": ""
    }
]
          },
          {
            label: "Management Accounting",
            questions: []
          }
        ]
      }
    ]
  },
  Final: {
    label: "Final",
    groups: [
      {
        label: "Group-3",
        subjects: [
          {
            label: "Corporate & Economic Law",
            questions: []
          },
          {
            label: "SFM",
            questions: []
          },
          {
            label: "DT",
            questions: []
          },
          {
            label: "SCM",
            questions: []
          }
        ]
      },
      {
        label: "Group-4",
        subjects: [
          {
            label: "CMA",
            questions: []
          },
          {
            label: "CFR",
            questions: []
          },
          {
            label: "IDT",
            questions: []
          },
          {
            label: "Electives",
            questions: []
          }
        ]
      }
    ]
  }
};

const levelList = document.getElementById("cma-level-list");
const groupList = document.getElementById("cma-group-list");
const subjectLabel = document.getElementById("cma-subject-label");
const questionCount = document.getElementById("cma-question-count");
const questionText = document.getElementById("cma-question");
const optionsWrap = document.getElementById("cma-options");
const feedback = document.getElementById("cma-feedback");
const backButton = document.getElementById("cma-back");
const prevButton = document.getElementById("cma-prev");
const finishButton = document.getElementById("cma-finish");
const nextButton = document.getElementById("cma-next");
const scoreText = document.getElementById("cma-score");
const progressText = document.getElementById("cma-progress");
const resultsPanel = document.getElementById("cma-results");
const pathPanel = document.querySelector(".cma-path-panel");
const quizCard = document.querySelector(".cma-quiz-card");

const levels = Object.keys(cmaCourseMap);
let activeLevel = "";
let activeGroup = "";
let activeSubject = null;
let activeIndex = 0;
let answers = {};

function showCourseSelector() {
  pathPanel.hidden = false;
  quizCard.classList.remove("is-open");
}

function showQuizView() {
  pathPanel.hidden = true;
  quizCard.classList.add("is-open");
  quizCard.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getActiveSubjectData() {
  if (!activeSubject) return null;

  const level = cmaCourseMap[activeSubject.level];
  const group = level?.groups.find((item) => item.label === activeSubject.group);
  return group?.subjects.find((item) => item.label === activeSubject.subject) || null;
}

function getSubjectQuestions() {
  return getActiveSubjectData()?.questions || [];
}

function getAnswerKey() {
  if (!activeSubject) return "";
  return `${activeSubject.level}-${activeSubject.group}-${activeSubject.subject}-${activeIndex}`;
}

function getSubjectKey(subject) {
  return `${subject.level}-${subject.group}-${subject.subject}`;
}

function updateScore() {
  const activeKey = activeSubject ? getSubjectKey(activeSubject) : "";
  const keys = Object.keys(answers).filter((key) => key.startsWith(activeKey));
  const correct = keys.filter((key) => answers[key].isCorrect).length;

  scoreText.textContent = `${correct} / ${keys.length}`;
  progressText.textContent = keys.length ? `${keys.length} question${keys.length === 1 ? "" : "s"} attempted in this subject.` : "Start a quiz to track progress.";
}

function getSubjectResult() {
  const questions = getSubjectQuestions();
  const activeKey = activeSubject ? getSubjectKey(activeSubject) : "";
  const subjectAnswers = Object.keys(answers)
    .filter((key) => key.startsWith(activeKey))
    .map((key) => answers[key]);
  const attempted = subjectAnswers.length;
  const right = subjectAnswers.filter((answer) => answer.isCorrect).length;

  return {
    attempted,
    right,
    wrong: attempted - right,
    total: questions.length
  };
}

function hideResults() {
  resultsPanel.hidden = true;
  resultsPanel.innerHTML = "";
}

function showResults() {
  const result = getSubjectResult();

  resultsPanel.hidden = false;
  resultsPanel.innerHTML = `
    <h3>Test Results</h3>
    <div class="cma-result-grid">
      <div>
        <span>Attempted</span>
        <strong>${result.attempted} / ${result.total}</strong>
      </div>
      <div>
        <span>Right</span>
        <strong>${result.right}</strong>
      </div>
      <div>
        <span>Wrong</span>
        <strong>${result.wrong}</strong>
      </div>
    </div>
  `;
}

function setEmptyQuiz(message, label = "Choose a subject") {
  subjectLabel.textContent = label;
  questionCount.textContent = "Question 0 of 0";
  questionText.textContent = message;
  optionsWrap.innerHTML = "";
  feedback.hidden = true;
  feedback.textContent = "";
  feedback.className = "cma-feedback";
  prevButton.disabled = true;
  nextButton.disabled = true;
  finishButton.disabled = true;
  hideResults();
  updateScore();
}

function renderLevels() {
  levelList.innerHTML = "";

  levels.forEach((levelName) => {
    const level = cmaCourseMap[levelName];
    const card = document.createElement("button");
    card.type = "button";
    card.className = "cma-level-card";
    card.classList.toggle("active", levelName === activeLevel);

    const title = document.createElement("span");
    title.textContent = level.label;

    card.addEventListener("click", () => {
      activeLevel = levelName;
      activeGroup = "";
      activeSubject = null;
      activeIndex = 0;
      renderLevels();
      renderSelectionPanel();
      showCourseSelector();
    });

    card.appendChild(title);
    levelList.appendChild(card);
  });
}

function renderSelectionPanel() {
  if (!activeLevel) {
    groupList.innerHTML = "";
    groupList.className = "cma-group-list";
    return;
  }

  const level = cmaCourseMap[activeLevel];
  groupList.innerHTML = "";

  if (!level.groups.length) {
    groupList.className = "cma-group-list cma-group-count-1";
    const unavailable = document.createElement("div");
    unavailable.className = "cma-unavailable-card";
    unavailable.textContent = level.unavailableMessage || "Available soon.";
    groupList.appendChild(unavailable);
    return;
  }

  if (!activeGroup) {
    groupList.className = `cma-group-list cma-group-count-${level.groups.length}`;
    level.groups.forEach((group) => {
      const groupCard = document.createElement("button");
      groupCard.type = "button";
      groupCard.className = "cma-group-card";
      groupCard.addEventListener("click", () => {
        activeGroup = group.label;
        activeSubject = null;
        activeIndex = 0;
        renderSelectionPanel();
      });

      const title = document.createElement("span");
      title.textContent = group.label;

      groupCard.appendChild(title);
      groupList.appendChild(groupCard);
    });
    return;
  }

  const selectedGroup = level.groups.find((group) => group.label === activeGroup);
  groupList.className = "cma-group-list cma-group-count-1";

  if (!selectedGroup) return;

  const backToGroups = document.createElement("button");
  backToGroups.type = "button";
  backToGroups.className = "cma-group-back";
  backToGroups.textContent = "Back to Groups";
  backToGroups.addEventListener("click", () => {
    activeGroup = "";
    activeSubject = null;
    renderSelectionPanel();
  });
  groupList.appendChild(backToGroups);

  const groupCard = document.createElement("article");
  groupCard.className = "cma-group-card";

  const title = document.createElement("h3");
  title.textContent = selectedGroup.label;

  const subjects = document.createElement("div");
  subjects.className = "cma-subject-list";

  selectedGroup.subjects.forEach((subject) => {
    const button = document.createElement("button");
    const nextSubject = {
      level: activeLevel,
      group: selectedGroup.label,
      subject: subject.label
    };
    const hasQuestions = subject.questions.length > 0;
    const isActive = activeSubject && getSubjectKey(activeSubject) === getSubjectKey(nextSubject);

    button.type = "button";
    button.className = "cma-subject-button";
    button.textContent = subject.label;
    button.classList.toggle("active", isActive);
    button.classList.toggle("is-empty", !hasQuestions);
    button.setAttribute("aria-current", isActive ? "true" : "false");
    button.title = hasQuestions ? `${subject.questions.length} MCQ${subject.questions.length === 1 ? "" : "s"}` : "MCQs not added yet";
    button.addEventListener("click", () => {
        activeSubject = nextSubject;
        activeIndex = 0;
        hideResults();
        renderSelectionPanel();
        renderQuestion();
        showQuizView();
    });

    subjects.appendChild(button);
  });

  groupCard.append(title, subjects);
  groupList.appendChild(groupCard);
}

function renderFeedback(selectedIndex) {
  const question = normalizeQuestion(getSubjectQuestions()[activeIndex]);
  const isCorrect = selectedIndex === question.answer;

  feedback.hidden = false;
  feedback.className = `cma-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
  feedback.innerHTML = `
    <strong>${isCorrect ? "Correct" : "Review this one"}</strong>
    <p>${question.explanation || "Explanation will be added soon."}</p>
  `;
}

function selectOption(selectedIndex) {
  const question = normalizeQuestion(getSubjectQuestions()[activeIndex]);
  answers[getAnswerKey()] = {
    selectedIndex,
    isCorrect: selectedIndex === question.answer
  };
  renderQuestion();
}

function normalizeQuestion(question) {
  const normalized = { ...question };
  
  // Map Text: handle 'question' or 'QUESTIONS'
  if (!normalized.question && normalized.QUESTIONS) {
    normalized.question = normalized.QUESTIONS;
  }

  // Map Explanation: handle 'explanation' or 'EXPLANATION'
  if (!normalized.explanation && normalized.EXPLANATION) {
    normalized.explanation = normalized.EXPLANATION;
  }

  // Map Answer: handle 'answer', 'ANSWER CODE' (1-based), or 'answer_code' (1-based)
  if (normalized.answer === undefined) {
    if (normalized["ANSWER CODE"] !== undefined) {
      normalized.answer = normalized["ANSWER CODE"] - 1;
    } else if (normalized.answer_code !== undefined) {
      normalized.answer = normalized.answer_code - 1;
    }
  }
  
  // Map Options: handle flat keys 'OPTION 1..4' or 'options' object
  if (!normalized.options || !Array.isArray(normalized.options)) {
    if (normalized["OPTION 1"] !== undefined) {
      normalized.options = [
        normalized["OPTION 1"], normalized["OPTION 2"], 
        normalized["OPTION 3"], normalized["OPTION 4"]
      ];
    } else if (typeof normalized.options === 'object' && normalized.options !== null) {
      const opts = normalized.options;
      normalized.options = [opts["1"], opts["2"], opts["3"], opts["4"]];
    }
  }
  
  // Sanitize: Ensure options are strings and filter out missing ones
  if (Array.isArray(normalized.options)) {
    normalized.options = normalized.options
      .filter(opt => opt !== undefined)
      .map(opt => (opt === null) ? "" : String(opt));
  }

  return normalized;
}

function renderQuestion() {
  if (!activeSubject) {
    setEmptyQuiz("Select Intermediate or Final, then choose a subject to start practicing.");
    return;
  }

  const subject = getActiveSubjectData();
  const questions = getSubjectQuestions();
  const label = `${activeSubject.level} / ${activeSubject.group} / ${activeSubject.subject}`;

  if (!subject || !questions.length) {
    setEmptyQuiz("MCQs for this subject will be added soon.", label);
    return;
  }

  const question = normalizeQuestion(questions[activeIndex]);
  const savedAnswer = answers[getAnswerKey()];

  subjectLabel.textContent = label;
  questionCount.textContent = `Question ${activeIndex + 1} of ${questions.length}`;
  questionText.textContent = question.question;
  optionsWrap.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "cma-option";
    button.textContent = option;
    button.addEventListener("click", () => selectOption(index));

    if (savedAnswer) {
      button.disabled = true;
      if (index === question.answer) {
        button.classList.add("is-correct");
      } else if (index === savedAnswer.selectedIndex) {
        button.classList.add("is-wrong");
      }
    }

    optionsWrap.appendChild(button);
  });

  if (savedAnswer) {
    renderFeedback(savedAnswer.selectedIndex);
  } else {
    feedback.hidden = true;
    feedback.textContent = "";
    feedback.className = "cma-feedback";
  }

  prevButton.disabled = activeIndex === 0;
  nextButton.disabled = activeIndex === questions.length - 1;
  finishButton.disabled = questions.length === 0;
  updateScore();
}

prevButton.addEventListener("click", () => {
  activeIndex = Math.max(0, activeIndex - 1);
  renderQuestion();
});

nextButton.addEventListener("click", () => {
  const questions = getSubjectQuestions();
  activeIndex = Math.min(questions.length - 1, activeIndex + 1);
  renderQuestion();
});

finishButton.addEventListener("click", () => {
  showResults();
});

backButton.addEventListener("click", () => {
  hideResults();
  showCourseSelector();
});

renderLevels();
renderSelectionPanel();
showCourseSelector();
